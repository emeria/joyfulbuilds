// Hold portfolio items data
interface PortfolioItemProps {
  title: string;
  description: string;
  link: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, link }) => {
  return (
    <div className="portfolio-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
    </div>
  );
}

export default PortfolioItem;
