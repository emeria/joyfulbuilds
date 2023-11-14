import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { logoLinkedin, logoGithub, logoTwitter, logoCss3 } from 'ionicons/icons';
import '../styles/Footer.css';

const Footer: React.FC = () => {

  return (
    <>
      <div className="footer">
        <span className="spacer"></span>
        <ul>
          <li><Link to="https://www.linkedin.com/in/christopher-gracia/"><IonIcon icon={logoLinkedin} aria-label="social-linkedin"></IonIcon></Link></li>
          <li><Link to="https://github.com/emeria"><IonIcon icon={logoGithub} aria-label="social-github"></IonIcon></Link></li>
          <li><Link to="https://twitter.com/cgracia"><IonIcon icon={logoTwitter} aria-label="social-twitter"></IonIcon></Link></li>
          <li className='vertical-separator'></li>
          <li><Link to="https://cssbattle.dev/player/emeria"><IonIcon icon={logoCss3} aria-label="social-css-battle"></IonIcon></Link></li>

          
        </ul>

      </div>
    </>
  );
}

export default Footer;