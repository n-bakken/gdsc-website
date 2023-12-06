import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "./css/ContactUs.css";
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component

const ContactUs = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  //use EmailJS API to connect to server and send them the form, they will handle the sending of the email
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_d4j5y58', 'template_qiycy67', form.current, '6vfaxkF_FxVSCQHhr')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
        setError(false);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        setError(true);
        setSubmitted(false);

        
      });
  };

  //below html code is for rendering the contact us form
  //complete with feedback messages regarding email send status
  return (
    <div>
      <Navbar />
      <div className="contact__content">
      <h3 className="contact__title">Contact Us! </h3>

      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <div className="contact__form-div">
          <label className="contact__form-tag">Your Name</label>
          <input type="text" name="user_name" className="contact__form-input" required />
        </div>

        <div className="contact__form-div">
          <label className="contact__form-tag">Email</label>
          <input type="email" name="user_email" className="contact__form-input" required />
        </div>

        <div className="contact__form-div">
          <label className="contact__form-tag">Message</label>
          <textarea name="message" className="contact__form-input" required></textarea>
        </div>

        <input type="submit" value="Send!" className="button button--flex" />
      </form>

      {submitted && <p>Email sent!</p>}
      {error && <p>An error has occurred. Please try again later.</p>}
      </div>
      <Footer />
    </div>
    
  );
};

export default ContactUs;
