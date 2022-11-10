import { planetsItemsList } from "./planetsItemsList";

const PlanetsButton = (props) => {
  const { setDetailPlanet } = props;
  const { englishName, isPlanet, density, gravity } = props.planetDetails;

  const image = planetsItemsList.find(
    (planet) => planet.title === englishName
  ).img;

  return (
    <div
      className="solar-cards"
      onClick={() =>
        setDetailPlanet({ englishName, isPlanet, density, gravity, image })
      }
    >
      <h3>{englishName}</h3>
    </div>
  );
};

export default PlanetsButton;
