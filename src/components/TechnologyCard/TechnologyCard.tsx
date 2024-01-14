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
      <h1 className="technology-card__name">{technologyName}</h1>

      <img
        src={technologyLogo}
        alt={technologyName}
        className="technology-card__logo"
      />
    </li>
  );
}

export default TechnologyCard;
