import React from "react";
import "./header.scss";
import CTA from "./CTA";
import ME from "../../../assets/sunny.png";
import HeaderSocials from "./HeaderSocials";
import { Zoom } from "react-awesome-reveal";

function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <Zoom>
          <h1>Ikpabi Sunday</h1>
        </Zoom>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <div className="me_image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <a href="#portfolio" className="scroll__down">
          Click Me To Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
