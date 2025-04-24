import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <h2 className="text-3xl font-semibold">Contact Us</h2>
      <p>If you have any questions or need support, please reach out to us!</p>
      
      <form className="contact-form">
        <label>Your Name:</label>
        <input type="text" placeholder="Enter your name" />
        
        <label>Your Email:</label>
        <input type="email" placeholder="Enter your email" />
        
        <label>Message:</label>
        <textarea placeholder="Enter your message"></textarea>
        
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
