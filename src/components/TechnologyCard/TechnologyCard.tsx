import "./TechnologyCard.scss";

interface TechnologyCardProps {
  TechnologyName: string;
  TechnologyLogo: string;
}

function TechnologyCard({
  TechnologyName,
  TechnologyLogo,
}: TechnologyCardProps) {
  return (
    <li className="technology-card">
      <h1 className="technology-card__name">{TechnologyName}</h1>

      <img
        src={TechnologyLogo}
        alt={TechnologyName}
        className="technology-card__logo"
      />
    </li>
  );
}

export default TechnologyCard;
