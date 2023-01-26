import React from 'react'
import "./testimonials.scss"
import Testi1 from "../../../assets/av1.png"
import Testi2 from "../../../assets/av2.jpg"
import Testi3 from "../../../assets/av3.jpg"
import { Fade} from "react-awesome-reveal";


import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:Testi1,
    name:'Jude Begwin',
    review:' COMING SOON!!',

  },
  {
    avatar:Testi2,
    name:'Travis Starcher',
    review:' COMING SOON!!',

  },
  {
    avatar:Testi3,
    name:'Stuart Grey',
    review:' COMING SOON!!',
  },
 
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Reviews From Clients</h5>  
      <h2>Testimonials</h2>

      <Fade delay={1e2}>
      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review }, index) =>{
            return(
        <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
          <img src={avatar}/>
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
      </Fade>
    </section>
  )
}

export default Testimonials
