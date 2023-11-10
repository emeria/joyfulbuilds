import React from 'react';

const Home : React.FC = () =>{
  return (
    <div>
      <h1 id="intro">Welcome to Our Site</h1>
      <p>This is the home page of our React application. Here you can find information about our site and its features.</p>
      
      <h1 id="features">Features</h1>
      <p>Our site offers a variety of features including...</p>
      {/* You can add more content and sections here */}
    </div>
  );
}

export default Home;