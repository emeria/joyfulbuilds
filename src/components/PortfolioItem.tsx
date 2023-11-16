
// Hold portfolio items data
interface PortfolioItemProps {
  title: string;
  description: string;
  link: string;
  linkname: string;
  technology: Array<string>;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, link, linkname, technology }) => {
 
  const sortItems = (items: string[]): string[] => [...items].sort();

  const renderTechnicalList = (items: string[]) => (
    <ul className='tech-pill' aria-label='highlighted technology'>
     {sortItems(items).map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );

  
  return (
    <div className="portfolio-item">
      <div className='portfolio-title-container'>
        <h3>{title}</h3>
        <div className="portfolio-title-line"></div>
      </div>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">{linkname}</a>
      <div className="tech-section">
        <div className="tech-label">Technology</div>
        {renderTechnicalList(technology)}
      </div>
    </div>
  );
}

export default PortfolioItem;
