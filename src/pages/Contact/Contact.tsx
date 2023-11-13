import React from 'react';
// import Map from './Map';
import EmailForm from '../../components/EmailForm';
import '../../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <div>
      <h1 className='contact-heading'>Contact Us</h1>
      <EmailForm />
      {/* <Map /> */}
    </div>
  );
}

export default Contact;
