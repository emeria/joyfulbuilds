import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoGithub, logoTwitter, menuOutline, closeOutline } from 'ionicons/icons';

const Navbar: React.FC = () => {


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <>
      <div className="top-bar">
        <span className="logo">### ### ####</span>
        <ul>
          <li><Link to="#"><IonIcon icon={logoFacebook} aria-label="social-linkedin"></IonIcon></Link></li>
          <li><Link to="#"><IonIcon icon={logoGithub} aria-label="social-github"></IonIcon></Link></li>
          <li><Link to="#"><IonIcon icon={logoTwitter} aria-label="social-twitter"></IonIcon></Link></li>
        </ul>

      </div>

      <nav>
        <div className="logo">
          <Link to="#"><img src="./src/assets/joyfulbuild.png" alt="Joyful Build Logo" /> Logo</Link>
        </div>
        <div className="toggle" onClick={toggleMobileMenu}>
          <Link to="#"><IonIcon icon={isMobileMenuOpen ? closeOutline : menuOutline} aria-label="nav-menu-toggle"></IonIcon></Link>
        </div>
        <ul className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

    </>
  );
}

export default Navbar;