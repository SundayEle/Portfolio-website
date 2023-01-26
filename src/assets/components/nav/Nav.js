import React from 'react'
import "./nav.scss"
import {HiHome} from "react-icons/hi"
import {FiUser} from "react-icons/fi"
import {TiBook} from "react-icons/ti"
import {RiServiceFill} from "react-icons/ri"
import {SiGooglemessages} from "react-icons/si"
import { useState } from 'react'
import { Bounce } from "react-awesome-reveal";



function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <Bounce delay={1e3}>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser/></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><TiBook/></a>
      <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><SiGooglemessages/></a>
      </Bounce>
    </nav>
  )
}

export default Nav
