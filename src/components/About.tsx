import React, { useMemo } from 'react';
import '../styles/About.css';


const languagesDatabases: string[] = ["C#", "Java", "PHP", "Python", "JS", "MySQL", "SQL Server", "HTML", "CSS"];
const systemsPlatforms: string[]= ["Hadoop", "Docker", "Kubernetes", "Prometheus", "Databricks", "Spark", "Kafka"];
const frameworksLibraries: string[] = ["AngularJS/7", "React", "ASP.NET MVC", "Open Layers", "Open StreetMaps", "Signal R", "Service Stack", "Liferay", "Drupal", "WordPress"];
const devOpsTools: string[] = ["SSIS", "SSRS", "Visual Studio", "Pentaho", "BizTalk", "Mongo DB", "Eclipse", "PowerShell", "Office", "Terraform", "Ansible", "Packer", "ELK", "Jenkins", "Github", "Docksal", "TFS", "Jira", "Airflow"];

const About: React.FC = () => {

    const sortItems = (items: string[]): string[] => [...items].sort();

    const sortedLanguagesDatabases = useMemo(() => sortItems(languagesDatabases), [languagesDatabases]);
    const sortedSystemsPlatforms = useMemo(() => sortItems(systemsPlatforms), [systemsPlatforms]);
    const sortedFrameworksLibraries = useMemo(() => sortItems(frameworksLibraries), [frameworksLibraries]);
    const sortedDevOpsTools = useMemo(() => sortItems(devOpsTools), [devOpsTools]);

    const renderCategoryList = (items: string[]) => (
      <div className="capability-category">
        {items.map((item, index) => <span className="expertise-item" key={index}>{item}</span>)}
      </div>
    );

  return (
    <div>
      <h1 id="intro">Chris Gracia</h1>
      <p>Problem Solver. Technical Architect. Software and DevOps Engineer.</p>

      <h2 id="intro">Expertise</h2>
      <div className="expertise-container">
        {['Problem Solving', 'Agile Development', 'Standardization', 'HIPAA/HITRUST','DevOps','Mentorship/Coaching','Communication','Teamwork/Collaboration','Accessibility (WCAG)','Security','Cloud (Azure, AWS)', ''].map((capability, index) =>
          <span 
          className="expertise-item" 
          key={index}>{capability}</span>
        )}
      </div>

      <br/>

      <h2 id="intro" className="capabilities-container">Capabilities</h2>

      <h3>Languages & Databases</h3>
      {renderCategoryList(sortedLanguagesDatabases)}

      <h3>Systems & Platforms</h3>
      {renderCategoryList(sortedSystemsPlatforms)}

      <h3>Frameworks & Libraries</h3>
      {renderCategoryList(sortedFrameworksLibraries)}

      <h3>Development & Operations Tools</h3>
      {renderCategoryList(sortedDevOpsTools)}

     
    </div>
  );
}

export default About;
