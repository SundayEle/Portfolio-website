import React from 'react'
import "./footer.scss"
import {BsTwitter} from "react-icons/bs"
import {GrInstagram} from "react-icons/gr"
import {BsFacebook} from "react-icons/bs"
import { BsLinkedin } from 'react-icons/bs' 
import { BsGithub } from 'react-icons/bs' 
import { Fade } from 'react-awesome-reveal'

function Footer() {
  return (
    <footer>
      <Fade delay={1e3}>
      <a href='#' className='footer__logo'>IKPABI SUNDAY</a>
      </Fade>

      <ul className='navlinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.instagram.com/sundayikpabi/'><GrInstagram/></a>
        <a href='https://twitter.com/sunday_ikpabi'><BsTwitter/></a>
        <a href='https://facebook.com/sunday.ikpabi.14'><BsFacebook/></a>
        <a href="https://www.linkedin.com/in/sunday-ikpabi-608642199/"><BsLinkedin/></a>
        <a href="https://github.com/SundayEle"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 Ikpabi Sunday. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
