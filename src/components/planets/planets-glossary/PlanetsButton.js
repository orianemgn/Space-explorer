import { planetsItemsList } from "./planetsItemsList";

const PlanetsButton = (props) => {
  //console.log("Props button", props);

  const { setDetailPlanet, detailPlanetState } = props;
  const { englishName, isPlanet, density, gravity } = props.planetDetails;

  const detailPlanet = planetsItemsList.find(
    (planet) => planet.title === englishName
  );
  console.log(props);
  console.log("state:", detailPlanetState);

  const image = detailPlanet.img;
  const distanceFromEarth = detailPlanet.distanceFromEarth;

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
        })
      }
    >
      {englishName}
    </button>
  );
};

export default PlanetsButton;
