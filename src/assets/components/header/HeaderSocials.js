import React from 'react'
import { BsLinkedin } from 'react-icons/bs' 
import { BsGithub } from 'react-icons/bs' 
import { BsFacebook } from 'react-icons/bs' 


function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sunday-ikpabi-608642199/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/SundayEle" target="_blank"><BsGithub/></a>
        <a href="https://facebook.com/sunday.ikpabi.14" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials