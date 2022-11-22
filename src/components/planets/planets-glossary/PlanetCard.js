const PlanetCard = (props) => {
  const { englishName, density, gravity, distanceFromEarth, description } =
    props.data;

  return (
    <div className="planet-card">
      <h2>{englishName}</h2>
      <p>{description}</p>
      <div className="planet-card-bottom">
        <div>
          <h3>Density</h3> <p> {density}</p>
        </div>
        <div>
          <h3>Gravity</h3> <p> {gravity}</p>
        </div>
        <div>
          <h3>Distance from Earth</h3> <p> {distanceFromEarth}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
