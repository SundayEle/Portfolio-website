import React from 'react'
import "./contact.scss"
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
import { useRef } from 'react';
import emailjs from "emailjs-com"
import { Bounce, Zoom } from 'react-awesome-reveal'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_amkne1e', 'template_5cisjv9', form.current, 'dmfWvkbNJz8hcaUoo')
  
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <Bounce delay={1e0}>
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Ikpabisunday91@gmail.com</h5>
            <a href="mailto:ikpabisunday91@gmail.com" target="_blank">Send a message</a>
          </article>
          </Bounce>
          <Bounce delay={1e1}>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Ikpabi Sunday</h5>
            <a href="https://m.me/sunday.ikpabi.14" target="_blank">Send a message</a>
          </article>
          </Bounce>
          <Bounce delay={1e2}>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+2348106883191</h5>
            <a href="https://api.whatsapp.com/send/?phone=2348106883191&text=Have+a+chat+with+Ikpabi+Sunday+on+Whatsapp+by+clicking+on+the+button+above,+thanks." target="_blank">Send a message</a>
          </article>
          </Bounce>
        </div>

        {/* END OF CONTACT OPTIONS */}


        {/* FORMS  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <Zoom delay={1e1}>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          </Zoom>
        </form>
      </div>
    </section>
  )
}

export default Contact
