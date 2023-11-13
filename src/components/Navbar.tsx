import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';
import logo from '../assets/joyfulbuild.png';

const Navbar: React.FC = () => {


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };


  return (
    <>
      <div className="top-bar">
        <span className="spacer"></span>
      </div>

      <nav>
        <div className="logo">
          <Link to="/"><img src={logo} alt="Joyful Build Logo" />Joyful Build</Link>
        </div>
        <div className="toggle" onClick={toggleMobileMenu}>
          <Link to="#"><IonIcon icon={isMobileMenuOpen ? closeOutline : menuOutline} aria-label="nav-menu-toggle"></IonIcon></Link>
        </div>
        <ul className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>

    </>
  );
}

export default Navbar;