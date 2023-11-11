import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { logoLinkedin, logoGithub, logoTwitter, menuOutline, closeOutline } from 'ionicons/icons';
import logo from '../assets/joyfulbuild.png';

const Navbar: React.FC = () => {


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <>
      <div className="top-bar">
        <span className="logo"></span>
        <ul>
          <li><Link to="#"><IonIcon icon={logoLinkedin} aria-label="social-linkedin"></IonIcon></Link></li>
          <li><Link to="#"><IonIcon icon={logoGithub} aria-label="social-github"></IonIcon></Link></li>
          <li><Link to="#"><IonIcon icon={logoTwitter} aria-label="social-twitter"></IonIcon></Link></li>
        </ul>

      </div>

      <nav>
        <div className="logo">
          <Link to="/"><img src={logo} alt="Joyful Build Logo" />Joyful Build</Link>
        </div>
        <div className="toggle" onClick={toggleMobileMenu}>
          <Link to="#"><IonIcon icon={isMobileMenuOpen ? closeOutline : menuOutline} aria-label="nav-menu-toggle"></IonIcon></Link>
        </div>
        <ul className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

    </>
  );
}

export default Navbar;