import '../styles/Hero.css'
import { MobileMenuContext } from './MobileMenuContext';
import { useContext } from 'react';

const Hero: React.FC = () => {
    const { isMobileMenuOpen } = useContext(MobileMenuContext);

    return (
        <>
                <div className='hero'>
                    {/* <img alt='Hero Image' src="src\assets\joyfulbuild.png" /> */}
                    <div className='gradient'></div>
                    <div className={`hero-text ${isMobileMenuOpen ? 'open' : ''}`}>
                        <h1 className="hero-title">Development should be fun.</h1>
                        <p className='hero-subtitle'>Build or refine your digital footprint.</p>
                        <a href="/about" className='hero-link'>See the Possible</a>
                    </div>

                </div>
        </>
    );
}

export default Hero;
