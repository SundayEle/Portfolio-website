import React from 'react'
import { Link } from 'react-scroll'
import "./nav.scss"
import {HiHome} from "react-icons/hi"
import {FiUser} from "react-icons/fi"
import {TiBook} from "react-icons/ti"
import {RiServiceFill} from "react-icons/ri"
import {SiGooglemessages} from "react-icons/si"
import { useState } from 'react'
import { Bounce } from "react-awesome-reveal";



function Nav() {
  const [activeNav, setActiveNav] = useState('home');
  return (
    <nav>
      <Bounce delay={1e3}>
      <Link to ='home' spy={true} smooth={true} offset={-50} duration={100} onClick={()=> setActiveNav('/home')} className={activeNav === '/home' ? 'active' : ''}><HiHome/></Link>
      <Link to ='about' spy={true} smooth={true} offset={-50} duration={150} onClick={()=> setActiveNav('/about')} className={activeNav === '/about' ? 'active' : ''}><FiUser/></Link>
      <Link to ='experience' spy={true} smooth={true} offset={-50} duration={150} onClick={()=> setActiveNav('/experience')} className={activeNav === '/experience' ? 'active' : ''}><TiBook/></Link>
      <Link to ='portfolio' spy={true} smooth={true} offset={-50} duration={150} onClick={()=> setActiveNav('/portfolio')} className={activeNav === '/portfolio' ? 'active' : ''}><RiServiceFill/></Link>
      <Link to ='contact' spy={true} smooth={true} offset={-100} duration={150} onClick={()=> setActiveNav('/contact')} className={activeNav === '/contact' ? 'active' : ''}><SiGooglemessages/></Link>
      </Bounce>
    </nav>
  )
}

export default Nav
