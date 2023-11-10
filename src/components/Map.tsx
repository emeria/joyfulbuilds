import React from 'react';

const Map: React.FC = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18..."; // Replace with your actual Google Maps embed link

  return (
    <div className="map">
      <iframe
        title="Our Location"
        src={mapSrc}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
