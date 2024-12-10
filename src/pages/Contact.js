import React from 'react';
import '../css/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>Or reach out via email: <a href="mailto:sevithapriya7777@gmail.com">sevithapriya7777@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/sevithakannali/">linkedin.com/in/sevithakannali</a></p>
    </section>
  );
};

export default Contact;
