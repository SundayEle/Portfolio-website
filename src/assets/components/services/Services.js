import React from "react";
import "./services.scss";
import { GiCheckMark } from "react-icons/gi";
import { Fade } from "react-awesome-reveal";

function services() {
  return (
    <section id="services">
      <h5>What I Can Do</h5>
      <h2>Services</h2>

      <Fade delay={1e2}>
        <div className="services services__container">
          <article className="service">
            <div className="service__head"></div>

            <ul className="service__list">
              <li>
                <GiCheckMark className="service__list-icon" />
                <p>
                  Develop and maintain server-side applications: Create and
                  maintain scalable and efficient server-side applications using
                  Node.js and related technologies.
                </p>
              </li>
              <li>
                <GiCheckMark className="service__list-icon" />
                <p>
                  Design and implement APIs: Design and implement RESTful APIs
                  that can be consumed by front-end developers and other
                  third-party applications.
                </p>
              </li>
              <li>
                <GiCheckMark className="service__list-icon" />
                <p>
                  DWrite and maintain database queries: Write and maintain
                  efficient database queries using SQL or NoSQL databases like
                  MongoDB.
                </p>
              </li>
              <li>
                <GiCheckMark className="service__list-icon" />
                <p>
                  OImplement security measures: Implement security measures such
                  as encryption and authentication to protect sensitive data and
                  prevent unauthorized access.
                </p>
              </li>
              <li>
                <GiCheckMark className="service__list-icon" />
                <p>
                  Optimize application performance: Identify and resolve
                  performance issues in server-side applications to ensure
                  optimal performance and scalability.
                </p>
              </li>
              <li>
                <GiCheckMark className="service__list-icon" />
                <p>
                  Collaborate with front-end developers: Collaborate with
                  front-end developers to integrate server-side functionality
                  with the user interface.
                </p>
              </li>
              <li>
                <GiCheckMark className="service__list-icon" />
                <p>
                  Write and maintain unit tests: Write and maintain unit tests
                  to ensure the quality and reliability of server-side
                  applications.
                </p>
              </li>
              <li>
                <GiCheckMark className="service__list-icon" />
                <p>
                  Stay up-to-date with new technologies: Stay up-to-date with
                  new technologies and trends in server-side development to
                  ensure the use of best practices and the latest tools.
                </p>
              </li>
            </ul>
          </article>
          {/* END OF WEB DEVELOPMENT */}

          {/* UI/UX DESIGN STARTS */}
          {/* <article className="service">
            <div className="service__head">
              <h3>UI/UX DESIGN</h3>
            </div>

            <ul className="service__list">
              <li>
                <GiCheckMark className="service__list-icon" />
                <p>Prototyping, wireframing, user flows, mockups </p>
              </li>
              <li>
                <GiCheckMark className="service__list-icon" />
                <p>Visual design and design software</p>
              </li>
              <li>
                <GiCheckMark className="service__list-icon" />
                <p>Information architecture</p>
              </li>
              <li>
                <GiCheckMark className="service__list-icon" />
                <p> Collaboration</p>
              </li>
              <li>
                <GiCheckMark className="service__list-icon" />
                <p> Application development</p>
              </li>
              <li>
                <GiCheckMark className="service__list-icon" />
                <p> Communication and presentation</p>
              </li>
              <li>
                <GiCheckMark className="service__list-icon" />
                <p> Prioritization and time management</p>
              </li>
              <li>
                <GiCheckMark className="service__list-icon" />
                <p>User research and usability testing</p>
              </li>
              <li>
                <GiCheckMark className="service__list-icon" />
                <p> Business acumen</p>
              </li>
            </ul>
          </article> */}
        </div>
      </Fade>
    </section>
  );
}

export default services;
