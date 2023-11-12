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

// import React, { useState, ChangeEvent, FormEvent } from 'react';
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, e.currentTarget, import.meta.env.VITE_EMAILJS_USER_ID)
      .then((result) => {
          console.log('Email successfully sent!', result.text);
          // Reset the form or provide a success message
      }, (error) => {
          console.log('Failed to send email:', error.text);
          // Handle errors here
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
