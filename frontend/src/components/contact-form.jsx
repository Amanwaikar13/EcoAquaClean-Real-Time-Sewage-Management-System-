import React, { useState } from 'react';
import '../styling/contact-style.css'

const ContactForm = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');


  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className="contact-main-container">
      <div className='contact-background-image'></div> <div className="contact-card"></div>
        <div className='contact-container'>
          <div className="left-col"></div>
          <div className="right-col">
          <div className="theme-switch-wrapper contact-text-center"> <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="contact-checkbox" onChange={handleToggleDarkMode} />
          <div className="contact-slider round"></div>
        </label>
        <div className="contact-description"></div>
        </div>

          <h1 className="contact-text-center continuous-animation">Contact us</h1> 
          <h1 className="contact-text-subcenter continuous-animation">Get in touch with us!</h1> 
            <form method="post" action="https://script.google.com/macros/s/AKfycbx_n7v-omFKeNzOvPxWpiqeWlCueDTX4rfPYnNMdJzi84dVo2vwWbwqTAvaLUzifA8O/exec" className="contact-form"> 
              <label htmlFor="name">Full name</label>
              <input type="text" id="name" name="name" placeholder="Your Full Name" required />

              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Your Email Address" required />

              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Phone Number" required pattern="[0-9]{10}" title="Please enter a 10-digit phone number" />

              <label htmlFor="message">Message</label>
              <textarea rows="2" placeholder="Your Message" id="message" name="message" required></textarea>

              <button type="submit" id="submit" name="submit">Send</button> 
            </form>
          <div id="error" className="contact-error-message">
            {submitMessage && <p>{submitMessage}</p>}
        </div>
      </div>
    </div>
  </div>
  );
};


export default ContactForm;
