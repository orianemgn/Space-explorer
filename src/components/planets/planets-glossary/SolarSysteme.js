import { useFetch } from "../../useFetch/useFetch";
import { useState, useEffect } from "react";
import PlanetCard from "./PlanetCard";
import PlanetsButton from "./PlanetsButton";
import "./solarsysteme.css";
import { planetsItemsList } from "./planetsItemsList";

const SolarSystem = () => {
  const [apiResp, errorResp, isLoading] = useFetch(
    "https://api.le-systeme-solaire.net/rest/bodies/"
  );

  const [solarSystemFiltered, setSolarSystemFiltered] = useState([]);
  const [detailPlanet, setDetailPlanet] = useState({});

  useEffect(() => {
    if (!isLoading && apiResp?.data) {
      setSolarSystemFiltered(
        apiResp.data.bodies.filter((element) => element.isPlanet === true)
      );
    }
  }, [apiResp, isLoading]);

  useEffect(() => {
    if (solarSystemFiltered.length) {
      const image = planetsItemsList.find(
        (planet) => planet.title === "Uranus"
      ).img;
      const planet = { ...solarSystemFiltered[0], image };
      setDetailPlanet(planet);
    }
  }, [solarSystemFiltered]);

  // if (isLoading || solarSystemFiltered.length === 0) {
  //   return <h2>request is still in process, loading..</h2>;
  // }

  if (errorResp) {
    console.log("error: ", errorResp);
    return <h2>an error has occurred, please contact the support</h2>;
  }

  // renomer PlanetCard -> Plane
  return (
    <div className="solar-page">
      {isLoading ? (
        <h2>request is still in process, loading..</h2>
      ) : (
        <>
          <h1>Planets Glossary</h1>
          <PlanetCard data={detailPlanet} />
          <div className="solar-container">
            {solarSystemFiltered.map((planet, index) => {
              //console.log(element.isPlanet);
              return (
                <PlanetsButton
                  planetDetails={planet}
                  key={index}
                  setDetailPlanet={setDetailPlanet}
                />
              );
            })}
          </div>

          <div>
            <h2>No planet</h2>
            {/* <PlanetsButton data={moon[0]} />
        <PlanetsButton data={sun[0]} /> */}
          </div>
        </>
      )}
    </div>
  );
};

export default SolarSystem;

//console.log("planets", solarSystemFiltered);

//console.log("detail planet", detailPlanet);
//useEffect(() => {
//  if (solarSystemFiltered.length) {
//    const filteredPlanetsItems = planetsItemsList.filter(
//      (element) => element.title === detailPlanet.englishName
//    );
//    setMoreInfos(filteredPlanetsItems[0]);
//  }
//}, [solarSystemFiltered, detailPlanet]);
//
//console.log("More", moreInfos);

//   const solarSystem = apiResp.data.bodies;

//   const solarSystemFiltered = solarSystem.filter(
//     (element) => element.isPlanet === true
//   );

//   const moon = solarSystem.filter((element) => element.englishName === "Moon");
//   const sun = solarSystem.filter((element) => element.englishName === "Sun");

//console.log("moon", moon)
//console.log("solar filter", solarSystemFiltered)
//console.log(solarsystem)
//console.log(apiResp.data)
