import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';
// import logo from '../assets/joyfulbuild.png';
import { MobileMenuContext } from './MobileMenuContext';
import Logo from './Logo';

const Navbar: React.FC = () => {

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isMobileMenuOpen, toggleMobileMenu, closeMenu } = useContext(MobileMenuContext);

  return (
    <>
      <div className="top-bar">
        <span className="spacer"></span>
      </div>

      {/* Rest of your Navbar component */}
      <nav>
        <div className="logo">
          {/* <Link to="/"><img src={logo} alt="Joyful Build Logo" />Joyful Build</Link> */}
          <Link to="/"><Logo/>Joyful Build</Link>
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