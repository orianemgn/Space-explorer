import { useFetch } from "../../useFetch/useFetch";
import { useState, useEffect } from "react";
import PlanetsCards from "./PlanetsCards";
import PlanetsButton from "./PlanetsButton";
import "./solarsysteme.css";
//import { planetsItemsList } from "./planetsItemsList";

const SolarSystem = () => {
  const [apiResp, errorResp, isLoading] = useFetch(
    "https://api.le-systeme-solaire.net/rest/bodies/"
  );

  //const [moreInfos, setMoreInfos] = useState([]);
  const [detailPlanet, setDetailPlanet] = useState({});
  const [solarSystemFiltered, setSolarSystemFiltered] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setSolarSystemFiltered(
        apiResp.data.bodies.filter((element) => element.isPlanet === true)
      );
      // setDetailPlanet(solarSystemFiltered[0])
    }
  }, [apiResp?.data?.bodies, isLoading]);

  useEffect(() => {
    if (solarSystemFiltered.length) {
      setDetailPlanet(solarSystemFiltered[0]);
    }
  }, [solarSystemFiltered]);

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

  if (isLoading) {
    return <h2>request is still in process, loading..</h2>;
  }

  if (errorResp) {
    console.log("error: ", errorResp);
    return <h2>an error has occurred, please contact the support</h2>;
  }

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
  return (
    <div className="solar-page">
      <h1>Planets Glossary</h1>
      <PlanetsCards data={detailPlanet} />
      <div className="solar-container">
        {solarSystemFiltered.map((element, index) => {
          console.log(element.isPlanet);
          return (
            <PlanetsButton
              data={element}
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
    </div>
  );
};

export default SolarSystem;
