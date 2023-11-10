import React from 'react';
import Address from './Address';
import Map from './Map';
import EmailForm from './EmailForm';

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <Address />
      <Map />
      <EmailForm />
    </div>
  );
}

export default Contact;
