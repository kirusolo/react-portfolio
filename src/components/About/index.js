import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faReact,
  faNode,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    // Store the timer ID returned by setTimeout
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Cleanup function to clear the timer if the component unmounts or the effect runs again
    return () => clearTimeout(timerId)
  }, []) // Empty dependency array to run this effect only once

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']}
              idx={15}
            />
          </h1>

          <p>
            As an ambitious full-stack developer, I am deeply passionate about
            crafting innovative and impactful solutions in the ever-evolving
            world of technology. My journey in this field has been driven by a
            relentless pursuit of knowledge and a desire to continuously push
            boundaries. With a strong foundation in both front-end and back-end
            development.
          </p>
          <p>
            I am confident in my ability to tackle complex challenges and create
            seamless user experiences. My commitment to excellence and
            dedication to staying ahead of the curve fuel my motivation to excel
            in this dynamic industry. I look forward to leveraging my skills and
            experiences to contribute to exciting projects and make a lasting
            impact.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNode} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
