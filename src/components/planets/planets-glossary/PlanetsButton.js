import { planetsItemsList } from "../../../planetsItemsList";

const PlanetsButton = (props) => {
  const { setDetailPlanet, detailPlanetState } = props;
  const { englishName, isPlanet, density, gravity } = props.planetDetails;

  const detailPlanet = planetsItemsList.find(
    (planet) => planet.title === englishName
  );

  const image = detailPlanet.img;
  const distanceFromEarth = detailPlanet.distanceFromEarth;
  const description = detailPlanet.description;

  return (
    <button
      className={
        detailPlanetState.englishName === englishName
          ? "planets-buttons planet-active"
          : "planets-buttons"
      }
      onClick={() =>
        setDetailPlanet({
          englishName,
          isPlanet,
          density,
          gravity,
          image,
          distanceFromEarth,
          description,
        })
      }
    >
      {englishName}
    </button>
  );
};

export default PlanetsButton;
