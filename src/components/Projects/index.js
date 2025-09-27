import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timerId)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', '', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <p>
            Here are some of the projects I’ve worked on recently. Each project
            showcases my skills in React, Node.js, and full-stack development.
          </p>

          <div className="projects-grid">
            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>Built with React and SCSS, featuring animations and responsive design.</p>
              <a href="https://your-portfolio-link.com" target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>

            <div className="project-card">
              <h3>Node.js API</h3>
              <p>RESTful API for managing users and posts, built with Express and MongoDB.</p>
              <a href="https://github.com/your-repo" target="_blank" rel="noreferrer">
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
