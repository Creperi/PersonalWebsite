import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can perform further actions like submitting the data to a server here
  };

  return (
    <div>
      <p>Get in touch with me</p>
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
    </div>
  );
};

export default ContactForm;
