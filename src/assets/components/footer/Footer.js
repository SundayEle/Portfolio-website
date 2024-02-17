import React from 'react'
import "./footer.scss"
import { Link } from 'react-scroll'
// import {BsTwitter} from "react-icons/bs"
import {GrInstagram} from "react-icons/gr"
import {BsFacebook} from "react-icons/bs"
import { BsLinkedin } from 'react-icons/bs' 
import { BsGithub } from 'react-icons/bs' 
import { Fade } from 'react-awesome-reveal'

function Footer() {
  return (
    <footer>
      <Fade delay={1e3}>
      < Link to ='home' className='footer__logo'>IKPABI SUNDAY</Link>
      </Fade>

      <ul className='navlinks'>
        <li><Link to ='home' spy={true} smooth={true} offset={-50} duration={100}>Home</Link></li>
        <li><Link to ='about' spy={true} smooth={true} offset={-50} duration={100}>About</Link></li>
        <li><Link to ='experience' spy={true} smooth={true} offset={-50} duration={100}>Experience</Link></li>
        <li><Link to ='services' spy={true} smooth={true} offset={-50} duration={100}>Services</Link></li>
        <li><Link to ='portfolio' spy={true} smooth={true} offset={-50} duration={100}>Portfolio</Link></li>
        <li><Link to ='testimonials' spy={true} smooth={true} offset={-50} duration={100}>Testimonials</Link></li>
        <li><Link to ='contact' spy={true} smooth={true} offset={-50} duration={100}>Contact</Link></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.instagram.com/_softwareengineer/'><GrInstagram/></a>
        {/* <a href='https://twitter.com/sunday_ikpabi'><BsTwitter/></a> */}
        <a href='https://facebook.com/sunday.ikpabi.14'><BsFacebook/></a>
        <a href="https://www.linkedin.com/in/sunday-ikpabi-608642199/"><BsLinkedin/></a>
        <a href="https://github.com/SundayEle"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2024 Ikpabi Sunday. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
