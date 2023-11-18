import React, { useMemo } from 'react';
import '../styles/About.css';

const categories = [
  {
    title: 'Languages & Databases',
    items: ["C#", "Java", "PHP", "Python", "JS", "MySQL", "SQL Server", "HTML", "CSS"]
  },
  {
    title: 'Systems & Platforms',
    items: ["Hadoop", "Docker", "Kubernetes", "Prometheus", "Databricks", "Spark", "Kafka"]
  },
  {
    title: 'Frameworks & Libraries',
    items: ["AngularJS/7", "React", "ASP.NET MVC", "Open Layers", "Open StreetMaps", "Signal R", "Service Stack", "Liferay", "Drupal", "WordPress"]
  },
  {
    title: 'Development & Operations Tools',
    items: ["SSIS", "SSRS", "Visual Studio", "Pentaho", "BizTalk", "Mongo DB", "Eclipse", "PowerShell", "Office", "Terraform", "Ansible", "Packer", "ELK", "Jenkins", "Github", "Docksal", "TFS", "Jira", "Airflow"]
  }
];

const About: React.FC = () => {

  const sortedCategories = useMemo(() => categories.map(category => ({
    ...category,
    items: [...category.items].sort()
  })), []);

  const renderCategoryList = (category: { title: string, items: string[] }) => (
    <>
      <h3>{category.title}</h3>
      <div className="capability-category" aria-label='capability-category'>
        {category.items.map((item, index) => <span className="capability-item" key={index}>{item}</span>)}
      </div>
    </>
  );

  return (
    <>
      <h1 className="intro-heading">Chris Gracia<span className='dot'>.</span></h1>

      <div className="intro-container">
        <p className="intro-blurb">Problem Solver. Technical Architect. Software and DevOps Engineer.</p>
        <p className="intro-details">Joyful Build is currently an agency of one. This means you will work directly with Chris Gracia, the founder of Joyful Build. Growth is important and learning never stops. If a skill is not listed, feel free to inquire about additional capabilities.</p>
      </div>
      <div className='expertise-section'>
        <h2 className="expertise-heading">Expertise<span className='dot'>.</span></h2>
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
        <h2 className="capabilities-heading">Capabilities<span className='dot'>.</span></h2>
        <div className="capabilities-container">
          {sortedCategories.map((category, index) => (
            <div key={index}>
              {renderCategoryList(category)}
            </div>
          ))}
        </div>
      </div>


    </>
  );
}

export default About;
