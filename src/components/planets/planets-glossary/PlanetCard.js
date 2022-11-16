const PlanetCard = (props) => {
  const { englishName, isPlanet, density, gravity, image } = props.data;

  return (
    <div className="planet-card">
      <img
        className={
          englishName === "Uranus"
            ? "rotate linear infinite uranus"
            : "rotate linear infinite"
        }
        src={image}
        alt={englishName}
      />
      <div>
        <h2>{englishName}</h2>
        <p>{isPlanet ? "is planet" : "is no planet"}</p>
        <p> Density: {density}</p>
        <p> Gravity: {gravity}</p>
      </div>
    </div>
  );
};

export default PlanetCard;
