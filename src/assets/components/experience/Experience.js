import React from 'react'
import "./experience.scss"
import {HiCheckCircle} from "react-icons/hi"
import { Fade} from "react-awesome-reveal";

function Experience() {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <Fade delay={1e2}>
      <div className="experience__frontend">
        <h3>Frontend Technologies</h3>
        <div className="experience__content">
          <article className="experience__details">
            <HiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>REACT JS </h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <HiCheckCircle className='experience__details-icon'/>
           <div>
           <h4>CSS 3</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>
          <article className="experience__details">
            <HiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>HTML 5 </h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <HiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>JAVASCRIPT</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <HiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>PYTHON</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>
          <article className="experience__details">
            <HiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>MATERIAL US</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
      </div>
      {/* Frontend ends here */}



      {/* Backend starts here */}
      <div className="experience__backend">
        <h3>Backend Technologies</h3>
        <div className="experience__content">
          <article className="experience__details">
            <HiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>Node JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <HiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>MONGO DB</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <HiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>JAVA</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>
          <article className="experience__details">
            <HiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>MY SQL</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>
          <article className="experience__details">
            <HiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>PHP</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>
          <article className="experience__details">
            <HiCheckCircle className='experience__details-icon'/>
            <div>
            <h4>EXPRESS JS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
      </div>
      </Fade>
      </div>
    </section>
  )
}

export default Experience
