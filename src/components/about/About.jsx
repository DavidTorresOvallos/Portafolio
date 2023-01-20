import React from 'react'
import './about.css'
import ME from '../../assets/Pic.JPG'
import {FaAward} from 'react-icons/fa'
import {TbUsers} from 'react-icons/tb'
import {IoHardwareChip} from 'react-icons/io5'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-imagen">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className='about__card'>
              <TbUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2 at the moment</small>
            </article>

            <article className='about__card'>
              <IoHardwareChip className='about__icon'/>
              <h5>Projects</h5>
              <small>1 Completed, 2 In Process</small>
            </article>
          </div>

          <p>
          My name is David Torres Ovallos, I am a full-stack developer focused mainly on the backend, with knowledge in React, Java, JavaScript, Ruby and a little bit of C#.
          I focus mainly on React and Ruby On Rails frameworks, where I develop a project focused on gyms supported on the web.
          I also study C# to develop videogames, currently in GodotEngine, soon Unity.            
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About