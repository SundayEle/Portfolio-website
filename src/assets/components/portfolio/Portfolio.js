import React from 'react'
import "./portfolio.scss"
import IMG1 from "../../../assets/1.jfif"
import IMG2 from "../../../assets/2.jpg"
import IMG3 from "../../../assets/3.jfif"
import IMG4 from "../../../assets/4.jfif"
import IMG5 from "../../../assets/5.jfif"
import IMG6 from "../../../assets/6.jfif"
import { Fade } from 'react-awesome-reveal'

const data = [
  {
    id:1,
    image:IMG1,
    title:'Restaurant Website',
    githuh:'https://github.com',

  },
  {
    id:2,
    image:IMG2,
    title:'University Website',
    githuh:'https://github.com',

  },
  {
    id:3,
    image:IMG3,
    title:'Fintech App',
    githuh:'https://github.com',

  },
  {
    id:4,
    image:IMG4,
    title:'Crypto Currency website',
    githuh:'https://github.com',

  },
  {
    id:5,
    image:IMG5,
    title:'E-Commerce Website',
    githuh:'https://github.com',

  },
  {
    id:6,
    image:IMG6,
    title:'Facebook UI',
    githuh:'https://github.com',

  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <Fade delay={1e2}>
      <div className="container portfolio__container">
          
          {
              data.map(({id, image, title, github}) => {
              return(
                <article key={id} className="portfolio__item">
                <div className="portfolio__item-image"> 
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                  </div>
              </article> 
              
              )
              })
          }

        
      </div>
      </Fade>
    </section>
  )
}

export default Portfolio
