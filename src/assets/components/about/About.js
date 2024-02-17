import React from 'react'
import "./about.scss"
import ME from "../../../assets/sundayikpabi.jpg"
import {RiAwardFill} from "react-icons/ri"
import {FaUsers} from "react-icons/fa"
import {VscFolderActive} from "react-icons/vsc"
import { Fade, Bounce,} from "react-awesome-reveal";

function about() {
  return (
    <section id='about'>
      <h5>Get To Know More</h5>
      <h2>About Me</h2> 

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <Fade delay={1e2}>
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>8+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderActive className='about__icon'/>
              <h5>Projects</h5>
              <small>9 Completed</small>
            </article>
          </div>
          </Fade>
          
          <p className='about__content-text'>
          A motivated individual with a keen interest in Software programs,
           possessing good interpersonal and analytical skills, seeking a 
           position in a growth-oriented company where I can use my skills 
           to the advantage of the company while having the scope to develop my own skills.
          </p>
            <Bounce>
          <a href='#contact' className='btn btn-primary'>Talk To Me</a>
          </Bounce>
        </div>

      </div>
    </section>
  )
}

export default about
