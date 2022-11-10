import { planetsItemsList } from "./planetsItemsList";

const PlanetsButton = (props) => {
  const { setDetailPlanet } = props;
  const { englishName, isPlanet, density, gravity } = props.planetDetails;

  const image = planetsItemsList.find(
    (planet) => planet.title === englishName
  ).img;

  return (
    <button
      className="solar-buttons"
      onClick={() =>
        setDetailPlanet({ englishName, isPlanet, density, gravity, image })
      }
    >
      {englishName}
    </button>
  );
};

export default PlanetsButton;
