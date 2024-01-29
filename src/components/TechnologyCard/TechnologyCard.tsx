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
        <h1 className="technology-card__name">{technologyName}</h1>
      </div>
    </li>
  );
}

export default TechnologyCard;
