import React, { useMemo } from 'react';
import '../styles/About.css';


const languagesDatabases: string[] = ["C#", "Java", "PHP", "Python", "JS", "MySQL", "SQL Server", "HTML", "CSS"];
const systemsPlatforms: string[] = ["Hadoop", "Docker", "Kubernetes", "Prometheus", "Databricks", "Spark", "Kafka"];
const frameworksLibraries: string[] = ["AngularJS/7", "React", "ASP.NET MVC", "Open Layers", "Open StreetMaps", "Signal R", "Service Stack", "Liferay", "Drupal", "WordPress"];
const devOpsTools: string[] = ["SSIS", "SSRS", "Visual Studio", "Pentaho", "BizTalk", "Mongo DB", "Eclipse", "PowerShell", "Office", "Terraform", "Ansible", "Packer", "ELK", "Jenkins", "Github", "Docksal", "TFS", "Jira", "Airflow"];

const About: React.FC = () => {

  const sortItems = (items: string[]): string[] => [...items].sort();

  const sortedLanguagesDatabases = useMemo(() => sortItems(languagesDatabases), [languagesDatabases]);
  const sortedSystemsPlatforms = useMemo(() => sortItems(systemsPlatforms), [systemsPlatforms]);
  const sortedFrameworksLibraries = useMemo(() => sortItems(frameworksLibraries), [frameworksLibraries]);
  const sortedDevOpsTools = useMemo(() => sortItems(devOpsTools), [devOpsTools]);

  const renderCategoryList = (items: string[]) => (
    <div className="capability-category" aria-label='capability-category'>
      {items.map((item, index) => <span className="capability-item" key={index}>{item}</span>)}
    </div>
  );

  return (
    <>
      <h1 className="intro-heading">Chris Gracia</h1>

      <div className="intro-container">
        <p className="intro-blurb">Problem Solver. Technical Architect. Software and DevOps Engineer.</p>
        <p className="intro-details">Joyful Build is currently an agency of one. This means you will work directly with Chris Gracia, the founder of Joyful Build. </p>
      </div>
      <div className='expertise-section'>
        <h2 className="expertise-heading">Expertise</h2>
        <div className="expertise-container">
          {['Problem Solving', 'Agile Development', 'Standardization', 'HIPAA/HITRUST', 'DevOps', 'Mentorship/Coaching', 'Communication', 'Teamwork/Collaboration', 'Accessibility (WCAG)', 'Security', 'Cloud (Azure, AWS)'].map((capability, index) =>
            <span
              className="expertise-item"
              key={index}>{capability}</span>
          )}
        </div>
      </div>

      <br />

      <div className='capabilities-section'>
        <h2 className="capabilities-heading">Capabilities</h2>
        <div className="capabilities-container">
          <div>
            <h3>Languages & Databases</h3>
            {renderCategoryList(sortedLanguagesDatabases)}
          </div>
          <div>
            <h3>Systems & Platforms</h3>
            {renderCategoryList(sortedSystemsPlatforms)}
          </div>
          <div>
            <h3>Frameworks & Libraries</h3>
            {renderCategoryList(sortedFrameworksLibraries)}
          </div>
          <div>
            <h3>Development & Operations Tools</h3>
            {renderCategoryList(sortedDevOpsTools)}
          </div>
        </div>
      </div>


    </>
  );
}

export default About;
