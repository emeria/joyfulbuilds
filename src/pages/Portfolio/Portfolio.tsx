import React from 'react'
import PortfolioItem from '../../components/PortfolioItem';

export const portfolioData = [
    {
        title: 'CheatSheetMonster',
        description: 'A site that collects various cheatsheets for games together in one place.',
        link: 'https://cheatsheet.monster'
    },
    {
        title: 'CheatSheetMonster',
        description: 'A site that collects various cheatsheets for games together in one place.',
        link: 'https://cheatsheet.monster'
    },
    {
        title: 'CheatSheetMonster',
        description: 'A site that collects various cheatsheets for games together in one place.',
        link: 'https://cheatsheet.monster'
    },
    {
        title: 'CheatSheetMonster',
        description: 'A site that collects various cheatsheets for games together in one place.',
        link: 'https://cheatsheet.monster'
    },
];

export const chrisPortfolioData = [
    {
        title: 'CDAS',
        description: 'A solution that enabled various state agencies to aggregate, organize, and analyze data from disparate sources. The components were flexible and provided rapid development capabilities for HIE services, analytics, and reporting. This solution would be used to allow the state to better understand the impact of COVID-19 on the state and its residents.',
        link: 'https://www.biznet.ct.gov/SCP_Documents/Results/22205/UConn%20AIMS%20OHS%20Statement%20of%20Work%202%20(CDAS)_Executed_20201016.pdf'
    },
    {
        title: 'CDAS',
        description: 'A solution that enabled various state agencies to aggregate, organize, and analyze data from disparate sources. The components were flexible and provided rapid development capabilities for HIE services, analytics, and reporting. This solution would be used to allow the state to better understand the impact of COVID-19 on the state and its residents.',
        link: 'https://www.biznet.ct.gov/SCP_Documents/Results/22205/UConn%20AIMS%20OHS%20Statement%20of%20Work%202%20(CDAS)_Executed_20201016.pdf'
    },
    {
        title: 'CDAS',
        description: 'A solution that enabled various state agencies to aggregate, organize, and analyze data from disparate sources. The components were flexible and provided rapid development capabilities for HIE services, analytics, and reporting. This solution would be used to allow the state to better understand the impact of COVID-19 on the state and its residents.',
        link: 'https://www.biznet.ct.gov/SCP_Documents/Results/22205/UConn%20AIMS%20OHS%20Statement%20of%20Work%202%20(CDAS)_Executed_20201016.pdf'
    },
    {
        title: 'CDAS',
        description: 'A solution that enabled various state agencies to aggregate, organize, and analyze data from disparate sources. The components were flexible and provided rapid development capabilities for HIE services, analytics, and reporting. This solution would be used to allow the state to better understand the impact of COVID-19 on the state and its residents.',
        link: 'https://www.biznet.ct.gov/SCP_Documents/Results/22205/UConn%20AIMS%20OHS%20Statement%20of%20Work%202%20(CDAS)_Executed_20201016.pdf'
    },
];

const Portfolio: React.FC = () => {


    return (
        <>
            <h1 id="portfolio">Portfolio</h1>
            <p>Here you will find a list of projects that Joyful Build and Chris Gracia has worked on.</p>
            
            <br />

            <h2 id="portfolio">Joyful Build</h2>
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
            <br />

            <h2 id="portfolio">Chris Gracia</h2>
            <div className="portfolio">
                {chrisPortfolioData.map(project => (
                    <PortfolioItem
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </>
    )
}

export default Portfolio