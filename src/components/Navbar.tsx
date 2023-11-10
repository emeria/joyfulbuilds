import { Link } from 'react-router-dom';
import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';

const Navbar: React.FC = () => {
  return (
    <>
      <div className="logo">
        <a href="#"><img src="../assets/joyfulbuild.png" alt="Joyful Build Logo"></img></a>
      </div>
      <div className="toggle">
        <a href="#"><IonIcon  name="{menu-outline}" aria-label="nav-menu-toggle"></IonIcon></a>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
}

export default Navbar;