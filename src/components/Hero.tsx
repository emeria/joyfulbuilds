import React, { useRef } from 'react';
import '../styles/Hero.css'

const Hero: React.FC = () => {

    return (
        <>
            <div className='hero'>
                {/* <img alt='Hero Image' src="src\assets\joyfulbuild.png" /> */}
                <div className='gradient'></div>
                <div className='hero-text'>
                    <h1 className="hero-title">Development should be fun.</h1>
                    <p className='hero-subtitle'>Build or refine your digital footprint.</p>
                    <a href="/about" className='hero-link'>See the Possible</a>
                </div>

            </div>
        </>
    );
}

export default Hero;
