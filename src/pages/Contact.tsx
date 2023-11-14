import React from 'react';
import EmailForm from '../components/EmailForm';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <div>
      <h1 className='contact-heading'>Let's build something better.</h1>
      <EmailForm />
    </div>
  );
}

export default Contact;
