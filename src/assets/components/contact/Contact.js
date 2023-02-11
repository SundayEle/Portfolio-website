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

  const popUp = () => {
    <div class="flex p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
  </div>
</div>
  }

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
