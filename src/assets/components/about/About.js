import React from "react";
import "./about.scss";
import ME from "../../../assets/sundayikpabi.jpg";
import { RiAwardFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { VscFolderActive } from "react-icons/vsc";
import { Fade } from "react-awesome-reveal";

function about() {
  return (
    <section id="about">
      <h5>Get To Know More</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About pics" />
          </div>
        </div>

        <div className="about__content">
          <Fade delay={1e2}>
            <div className="about__cards">
              <article className="about__card">
                <RiAwardFill className="about__icon" />
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </article>
              <article className="about__card">
                <FaUsers className="about__icon" />
                <h5>Clients</h5>
                <small>6+ Worldwide</small>
              </article>
              <article className="about__card">
                <VscFolderActive className="about__icon" />
                <h5>Projects</h5>
                <small>5 Completed</small>
              </article>
            </div>
          </Fade>

          <p className="about__content-text">
            Result-Oriented Software Engineer aiming to leverage proven team
            work and creative thinking skills to create and maintain scalable
            and efficient server-side applications. I can be relied upon to
            design and implement RESTful APIs that can be consumed by front-end
            developers and other third-party applications while also
            Implementing security measures such as encryption and authentication
            to protect sensitive data and prevent unauthorized access.
            Identifying and resolving performance issues in server-side
            applications to ensure optimal performance and scalability. Lastly,
            Staying up-to-date with new technologies and trends in server-side
            development to ensure the use of best practices and the latest
            tools.
          </p>
          <a href="#contact" className="btn btn-primary">
            Talk To Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default about;
