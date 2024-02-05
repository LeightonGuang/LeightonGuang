import "./TechnologyCard.scss";

interface TechnologyCardProps {
  technologyName: string;
  technologyLogo: string;
}
function TechnologyCard({
  technologyName,
  technologyLogo,
}: TechnologyCardProps) {
  return (
    <li className="technology-card">
      <div className="technology-card__container">
        <img
          src={technologyLogo}
          alt={technologyName}
          className="technology-card__logo"
        />
        <h3 className="technology-card__name">{technologyName}</h3>
      </div>
    </li>
  );
}

export default TechnologyCard;
