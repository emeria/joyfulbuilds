import React from 'react';
import PortfolioItem from './PortfolioItem';

const About: React.FC = () => {
  // Sample portfolio data, typed implicitly
  const portfolioData = [
    {
      title: 'Project 1',
      description: 'This is a description of Project 1.',
      link: 'http://link-to-project-1.com'
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h1 id="about-site">About Our Site</h1>
      <p>This site is a showcase of our work in software development, including various projects and contributions.</p>
      
      <h1 id="portfolio">Our Portfolio</h1>
      <div className="portfolio">
        {portfolioData.map(project => (
          <PortfolioItem 
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
