import React, { useRef } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_m4zs2m3', 'template_66ozb2q', form.current, 'i9ttmQCT7Cr1KwGI6')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert ("Submitted!");
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section id="contactpage">
            <h2 className="contactpage_header">Contact Me</h2>
            <p className="contactpage_description">Please fill out the form below to discuss any work opportunities.</p>

            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Full Name" name="user_name" className="contactForm-item contactName"></input>
                <input type="email" placeholder="Your Email" name="user_email" className="contactForm-item contactEmail"></input>
                <textarea name="message" rows={10} className="contactForm-item contactMessage" placeholder="Your Message"></textarea>
                <button type="submit" value="send" className="submitBtn">Submit</button>
            </form>

        </section>
    );
}

export default Contact;