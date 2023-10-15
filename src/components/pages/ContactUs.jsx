import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Footer from './Footer';  

export const ContactUs = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d4j5y58', 'template_qiycy67', form.current, '6vfaxkF_FxVSCQHhr')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
        setError(false); // Clear any previous error message
        form.current.reset(); // Clear form fields
      })
      .catch((error) => {
        console.log(error.text);
        setError(true);
        setSubmitted(false); // Ensure submitted is false on error
      });
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name: </label><br />
        <input type="text" name="user_name" required /><br />
        <label>Email</label><br />
        <input type="email" name="user_email" required /><br />
        <label>Message</label><br />
        <textarea name="message" rows="10" cols="40" required /><br />
        <input type="submit" value="Send!" />
      </form>
      {submitted && <p>Email sent!</p>}
      {error && <p>An error has occurred. Please try again later.</p>}
      <Footer />
    </div>
  );
};

export default ContactUs;
