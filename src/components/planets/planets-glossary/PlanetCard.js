const PlanetCard = (props) => {
  const {
    englishName,
    isPlanet,
    density,
    gravity,
    distanceFromEarth,
    description,
  } = props.data;

  return (
    <div className="planet-card">
      <div>
        <h2>{englishName}</h2>
        <p>{isPlanet ? "is planet" : "is no planet"}</p>
        <p>{description}</p>
        <p>Density: {density}</p>
        <p>Gravity: {gravity}</p>
        <p>Distance from Earth {distanceFromEarth}</p>
      </div>
    </div>
  );
};

export default PlanetCard;
