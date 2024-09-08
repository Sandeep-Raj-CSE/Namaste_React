import React from "react";
import "../Design/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-details">
        <p className="contact-info">
          <strong>Email:</strong> sndeeprajvit@gmail.com
        </p>
        <p className="contact-info">
          <strong>Phone:</strong> +91 7970573757
        </p>
        <p className="contact-info">
          <strong>Address:</strong> 560103 Bellandur Banglore 
        </p>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" className="input-field" />
          <input type="email" placeholder="Your Email" className="input-field" />
          <textarea placeholder="Your Message" className="input-field textarea"></textarea>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
