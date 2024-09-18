import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sunday-ikpabi-608642199/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/SundayEle" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://web.facebook.com/sundayele.code/"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
    </div>
  );
}

export default HeaderSocials;
