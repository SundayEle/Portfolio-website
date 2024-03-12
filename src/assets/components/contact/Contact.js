import React from 'react'
import "./contact.scss"
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
import { useRef } from 'react';
import emailjs from "emailjs-com"
import { Fade} from 'react-awesome-reveal'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_amkne1e', 'template_5cisjv9', form.current, 'dmfWvkbNJz8hcaUoo')
  
    e.target.reset()
  };

  const notifySuccess = () => {
    toast.success('Message sent!', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
      });
  }

  

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <Fade delay={1e0}>
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>officialikpabi@gmail.com</h5>
            <a href="mailto:officialikpabi@gmail.com" target="_blank">Send a message</a>
          </article>
          </Fade>
          <Fade delay={1e1}>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Ikpabi Sunday</h5>
            <a href="https://m.me/sunday.ikpabi.14" target="_blank">Send a message</a>
          </article>
          </Fade>
          <Fade delay={1e2}>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+2349135624329</h5>
            <a href="https://api.whatsapp.com/send/?phone=2349135624329&text=Have+a+chat+with+Ikpabi+Sunday+on+Whatsapp+by+clicking+on+the+button+above,+thanks." target="_blank">Send a message</a>
          </article>
          </Fade>
        </div>
        {/* END OF CONTACT OPTIONS */}


        {/* FORMS  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button onClick={notifySuccess} type='submit' className='btn btn-primary'>Send Message</button>
          <ToastContainer/>
        </form>
      </div>
    </section>
  )
}

export default Contact
