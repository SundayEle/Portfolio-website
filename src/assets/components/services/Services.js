import React from 'react'
import "./services.scss"
import {GiCheckMark} from "react-icons/gi"
import { Fade } from 'react-awesome-reveal'

function services() {
  return (
    <section id='services'>
      <h5>What I Can Do</h5>
      <h2>Services</h2>
    
    <Fade delay={1e2}>
    <div className="services services__container">
      <article className="service">
        <div className="service__head">
          <h3>WEB DEVELOPMENT</h3>
        </div>

        <ul className="service__list">
        <li>
          <GiCheckMark className="service__list-icon" />
          <p>Deploying web applications on a cross-platform and cross-browser environment</p>
          </li>
          <li>
          <GiCheckMark className="service__list-icon" />
          <p>Version Control </p>
          </li>
          <li>
          <GiCheckMark className="service__list-icon" />
          <p>Database and SQL</p>
          </li>
          <li>
          <GiCheckMark className="service__list-icon" />
          <p>Object-oriented programming (OOP) </p>
          </li>
          <li>
          <GiCheckMark className="service__list-icon" />
          <p>Understanding the client requirements and their expectations from the website by conducting routine meetings with them </p>
          </li>
          <li>
          <GiCheckMark className="service__list-icon" />
          <p>Responsive Design</p>
          </li>
          <li>
          <GiCheckMark className="service__list-icon" />
          <p>Data Structures and Algorithms</p>
          </li>
          <li>
          <GiCheckMark className="service__list-icon" />
          <p>Testing/Debugging</p>
          </li>

        </ul>
      </article>
      {/* END OF WEB DEVELOPMENT */}



      {/* UI/UX DESIGN STARTS */}
      <article className="service">
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
          <p>  Communication and presentation</p>
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
      </article>
      </div>
      </Fade>
    </section>
  )
}

export default services
