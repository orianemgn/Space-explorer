import Neptune from "../../../assests/planets/neptune.png";
import { planetsItemsList } from "./planetsItemsList";

const PlanetsCards = (props) => {
  const { englishName, isPlanet, density, gravity } = props.data;
  //const { img } = props.moreInfos;
  //const filteredPlanetsItems = planetsItemsList.filter(
  //  (element) => element.title === englishName
  //);
  //console.log("filtered image:", filteredPlanetsItems);
  //console.log("English name", props.data.englishName);
  //const planetInfos = filteredPlanetsItems[0];
  //
  //console.log("planet info:", planetInfos);
  //console.log("IMAGE", img);
  return (
    <div className="planet-card">
      <img className="rotate linear infinite" src={Neptune} alt={englishName} />
      <div>
        <h2>{englishName}</h2>
        <p>{isPlanet ? "is planet" : "is no planet"}</p>
        <p> Density: {density}</p>
        <p> Gravity: {gravity}</p>
      </div>
    </div>
  );
};

export default PlanetsCards;
