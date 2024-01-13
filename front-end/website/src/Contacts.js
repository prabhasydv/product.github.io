import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitForm = () => {
    const { name, email, message } = formData;

    if (name && email && message) {
      // Simulate form submission (replace with your actual submission logic)
      // For demonstration purposes, display a confirmation message
      setConfirmationMessage('Form submitted successfully!');
      
      // Clear form fields
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Clear error message
      setErrorMessage('');
    } else {
      setErrorMessage('Please fill out all fields.');
      setConfirmationMessage('');
    }
  };

  return (
    <div className='contact'>
      
      <form className='form'> 
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="button" onClick={submitForm}>Submit</button>

        {confirmationMessage && <div style={{ color: 'green', marginTop: '10px' }}>{confirmationMessage}</div>}
        {errorMessage && <div style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>}
      </form>
    </div>
  );
};

export default ContactUs;
