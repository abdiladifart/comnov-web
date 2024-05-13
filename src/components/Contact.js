import React from 'react';
import '../styles/contact.css'; // Make sure this path is correct

function Contact() {
  return (
    <main>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>If you have any questions, feedback, or need assistance, please reach out to us using the form below or through our listed contact details. We are here to help!</p>
        
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> comicnovas@gmail.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Address:</strong> 123 ComicNova Lane, Story City, IA 50248</p>
        </div>
        
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
