import React from "react";
import "./experience.scss";
import { HiCheckCircle } from "react-icons/hi";
import { Fade } from "react-awesome-reveal";

function Experience() {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <Fade delay={1e2}>
          <div className="experience__frontend">
            <h3>Back-End Technologies</h3>
            <div className="experience__content">
              <article className="experience__details">
                <HiCheckCircle size={18} className="experience__details-icon" />
                <div>
                  <h4>NODE JS </h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiCheckCircle size={18} className="experience__details-icon" />
                <div>
                  <h4>EXPRESS JS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiCheckCircle size={18} className="experience__details-icon" />
                <div>
                  <h4>MONGO DB</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiCheckCircle size={18} className="experience__details-icon" />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiCheckCircle size={18} className="experience__details-icon" />
                <div>
                  <h4>RESTful API</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiCheckCircle size={35} className="experience__details-icon" />
                <div>
                  <h4>Authentication & Authorization</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>

          {/* Tools starts here */}
          <div className="experience__tools">
            <h3>Tools </h3>
            <div className="experience__content">
              <article className="experience__details">
                <HiCheckCircle size={18} className="experience__details-icon" />
                <div>
                  <h4>VS CODE</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiCheckCircle size={18} className="experience__details-icon" />
                <div>
                  <h4>POST MAN</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiCheckCircle size={18} className="experience__details-icon" />
                <div>
                  <h4>GIT</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiCheckCircle size={18} className="experience__details-icon" />
                <div>
                  <h4>GITHUB</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiCheckCircle size={35} className="experience__details-icon" />
                <div>
                  <h4>Test-driven development (TDD)</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiCheckCircle size={35} className="experience__details-icon" />
                <div>
                  <h4>Agile development methodologies</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Experience;
