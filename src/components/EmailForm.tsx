import React, { useState } from 'react';
import '../styles/EmailForm.css';

// Define the component as a functional component using TypeScript
const EmailForm: React.FC = () => {
  // Define the state with TypeScript types
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // TypeScript will infer the type of 'event' as React.FormEvent
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log('Email:', email, 'Message:', message);
  };

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <h3>Lets chat</h3>
      <input
        type="email"
        placeholder="Your email"
        alt='email'
        aria-label='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Your message"
        aria-label='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default EmailForm;
