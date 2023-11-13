import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { logoLinkedin, logoGithub, logoTwitter } from 'ionicons/icons';
import '../styles/Footer.css';

const Footer: React.FC = () => {

  return (
    <>
      <div className="footer">
        <span className="spacer"></span>
        <ul>
          <li><Link to="#"><IonIcon icon={logoLinkedin} aria-label="social-linkedin"></IonIcon></Link></li>
          <li><Link to="#"><IonIcon icon={logoGithub} aria-label="social-github"></IonIcon></Link></li>
          <li><Link to="#"><IonIcon icon={logoTwitter} aria-label="social-twitter"></IonIcon></Link></li>
        </ul>

      </div>
    </>
  );
}

export default Footer;