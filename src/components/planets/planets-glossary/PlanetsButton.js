import { planetsItemsList } from "./planetsItemsList";

const PlanetsButton = (props) => {
  //console.log("Props button", props);

  const { setDetailPlanet } = props;
  const { englishName, isPlanet, density, gravity } = props.planetDetails;

  const detailPlanet = planetsItemsList.find(
    (planet) => planet.title === englishName
  );

  const image = detailPlanet.img;
  const distanceFromEarth = detailPlanet.distanceFromEarth;

  return (
    <button
      className="planets-buttons"
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
