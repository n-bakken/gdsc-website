import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d4j5y58', 'template_qiycy67', form.current, '6vfaxkF_FxVSCQHhr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Your Name: </label><br />
      <input type="text" name="user_name" /><br />
      <label>Email</label><br />
      <input type="email" name="user_email" /><br />
      <label>Message</label><br />
      <textarea name="message" rows="10" cols="40" /><br />
      <input type="submit" value="Send!" /><br />
    </form>
  );
};

export default ContactUs;