import '../styles/EmailForm.css';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder service until long-term is setup. No backend currently, so keys are exposed (free plan).
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, e.currentTarget, import.meta.env.VITE_EMAILJS_USER_ID)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setIsSubmitted(true);
      }, (error) => {
        console.log('Failed to send email:', error.text);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return <div>Thank you for your message! We will get back to you soon.</div>;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='email-form'>
        <h3 className='email-heading'>Send us an email</h3>
        
      <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />

        
      <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />

        
      <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default ContactForm;
