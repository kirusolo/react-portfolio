import React, { useEffect, useRef } from 'react';
import './index.scss';

const AnimatedStars = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = (count) => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleDirection: 1
        });
      }
      return stars;
    };

    const drawStar = (star) => {
      ctx.beginPath();
      ctx.globalAlpha = star.opacity;
      
      // Create a gradient for the star
      const gradient = ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, star.size * 2
      );
      gradient.addColorStop(0, '#FFD700');
      gradient.addColorStop(0.5, '#FFF');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add sparkle effect for larger stars
      if (star.size > 1.5) {
        ctx.beginPath();
        ctx.globalAlpha = star.opacity * 0.5;
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 0.5;
        
        // Draw cross sparkle
        ctx.moveTo(star.x - star.size * 2, star.y);
        ctx.lineTo(star.x + star.size * 2, star.y);
        ctx.moveTo(star.x, star.y - star.size * 2);
        ctx.lineTo(star.x, star.y + star.size * 2);
        ctx.stroke();
      }
      
      ctx.globalAlpha = 1;
    };

    const updateStars = (stars) => {
      stars.forEach(star => {
        // Move stars
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around screen edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Twinkling effect
        star.opacity += star.twinkleSpeed * star.twinkleDirection;
        if (star.opacity <= 0.1 || star.opacity >= 1) {
          star.twinkleDirection *= -1;
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateStars(starsRef.current);
      starsRef.current.forEach(drawStar);
      
      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      // Recreate stars when window resizes
      const starCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 200);
      starsRef.current = createStars(starCount);
    };

    // Initialize
    resizeCanvas();
    const starCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 200);
    starsRef.current = createStars(starCount);

    // Start animation
    animate();

    // Add event listeners
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="animated-stars-canvas"
    />
  );
};

export default AnimatedStars;