import React from 'react'
import PortfolioItem from '../components/PortfolioItem';
import '../styles/Portfolio.css'
import { portfolioData, chrisPortfolioData } from '../data/portfolioData.js';

const Portfolio: React.FC = () => {
    return (
        <>
            <div className='portfolio-page'>
                <div className="portfolio-heading">
                    <h1>Portfolio</h1>
                    <p>Here you will find a list of projects that Joyful Build and Chris Gracia has worked on.</p>
                </div>

                <div className='portfolio-container'>
                    <h2 className="portfolio-title">Joyful Build</h2>
                
                <div className="portfolio">
                    {portfolioData.map(project => (
                        <PortfolioItem
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            linkname={project.linkname}
                            technology={project.technology}
                        />
                    ))}
                </div>
                </div>
                <br />

                <div className='portfolio-container'>
                <h2 className="portfolio-title">Chris Gracia</h2>
                <div className="portfolio">
                    {chrisPortfolioData.map(project => (
                        <PortfolioItem
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            linkname={project.linkname}
                            technology={project.technology}
                        />
                    ))}
                </div>
                
                </div>
            </div>
        </>
    )
}

export default Portfolio