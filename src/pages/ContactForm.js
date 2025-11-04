import React, { useState } from 'react';
import "./ContactForm.css";
import Logo from '../components/Logo';
import "../components/Queries.css"

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = { name, email, message };

    try {
      const res = await fetch('http://myproject.local/backend/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      setResponse(result.message);
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred while submitting the form.');
    }
  };

  return (
    <section>
      <Logo /> 
      <h1 className='title-info-ceny backH1'>Kontakt na nás</h1>
      <p className='tel-popis'>Telefonní číslo</p>
      <p className='tel-num'>+420 774 579 768</p>
      
      <form onSubmit={handleSubmit} className='form'>
        <input
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder='Jméno' 
          required 
        />
        <br />
        <input
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder='email@' 
          className='email one-area all-area' 
          required 
        />
        <br />
        <input
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder='Vaše zpráva' 
          className='odpoved one-area all-area' 
          required 
        />
        <button variant="primary" type="submit" className='odeslat one-area all-area'>
          Odeslat
          </button>
      </form>
      
      {response && <p>{response}</p>}
    </section>
  );
};

export default ContactForm;
