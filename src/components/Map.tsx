import React from 'react';
import '../styles/Map.css';

const Map: React.FC = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95521.18461396215!2d-72.42559897369902!3d41.56844339867699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6421cd4dc9509%3A0xafd80a6242e3c80d!2sColchester%2C%20CT%2006415!5e0!3m2!1sen!2sus!4v1699655585040!5m2!1sen!2sus"; // Replace with your actual Google Maps embed link

  return (
    <>
    <div className="map-container">
      <h3 className="map-heading">Our Location</h3>
      <iframe
        className='map-iframe'
        title="Our Location"
        src={mapSrc}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
    </>
  );
}

export default Map;
