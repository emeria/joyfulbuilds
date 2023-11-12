// import React, { useState } from 'react';
// import '../styles/EmailForm.css';

// // Define the component as a functional component using TypeScript
// const EmailForm: React.FC = () => {
//   // Define the state with TypeScript types
//   const [email, setEmail] = useState<string>('');
//   const [message, setMessage] = useState<string>('');

//   // TypeScript will infer the type of 'event' as React.FormEvent
//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     // Handle the form submission logic here
//     console.log('Email:', email, 'Message:', message);
//   };

//   return (
//     <form className="email-form" onSubmit={handleSubmit}>
//       <h3>Lets chat</h3>
//       <input
//         type="email"
//         placeholder="Your email"
//         alt='email'
//         aria-label='email'
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <textarea
//         placeholder="Your message"
//         aria-label='message'
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// export default EmailForm;

import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../styles/EmailForm.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxRfKSYQFMgrdjtnufJvY-QXFN29dCHiAhUOSaeb4oEvdyF1zpAW3GSvuDOWSka4EJokg/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        console.log('Form submitted successfully');
        // Reset form or provide further user feedback
      } else {
        console.error('Form submission error');
        // Handle errors
      }
    } catch (error) {
      console.error('Submission failed', error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className='email-form'>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
