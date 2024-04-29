// ContactUs.js

import React, { useState } from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/footer';

function ContactUs() {
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, for example, guiding user to Gmail
    const email = 'support@example.com';
    const subject = 'User Message';
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div style={{ backgroundColor: '#f0f8ff', padding: '20px' }}>
      <Navigation />
      <section>
        <h1>Contact Us</h1>
        <p>Please use the form below to send us a message:</p>
        <form onSubmit={handleFormSubmit}>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="Type your message here..." 
            rows="4" 
            cols="50" 
            required 
            style={{ marginBottom: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <br />
          <button 
            type="submit" 
            style={{ backgroundColor: '#008000', color: '#ffffff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Send Message
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default ContactUs;
