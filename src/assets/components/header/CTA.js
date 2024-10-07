import React from "react";
import CV from "../../../assets/2024_IKPABI_RESUME.pdf";
import { Slide } from "react-awesome-reveal";

function Cta() {
  return (
    <div className="cta">
      <Slide direction="left">
        <a href={CV} download className="btn">
          Download CV
        </a>
      </Slide>
      <Slide direction="right">
        <a href="#contact" className="btn btn-primary">
          Talk to me
        </a>
      </Slide>
    </div>
  );
}

export default Cta;
