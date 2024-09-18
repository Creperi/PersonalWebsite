import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState(false);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.persist();
    e.preventDefault();
    emailjs
      .sendForm('Elias_Service', 'template_81y9pss', form.current, {
        publicKey: 'ziom9ysqSyGuYNYpB',
      })
      .then(
        () => {
          setIsSent(true);
          setError(null); 
          console.log('SUCCESS!');
        },
        (error) => {
          setIsSent(false);
          setError('Failed to send message. Please try again later.');
          console.log('FAILED...', error.text);
        },
      )

  };

  return (
    <div className="container">
      <h1 className="display-2 mx-3 text-center">Contact</h1>
      <p className="text-center">Get in touch with me if you need help</p>
      <form className="row g-3 mx-2" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required/>
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required/>
        </div>
        <div className="col-12">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
      {isSent ? "Message Sent!" : ""}
    </div>
  );
};

export default ContactForm;
