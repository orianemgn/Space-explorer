import { useFetch } from "../../../hooks/useFetch/useFetch";
import { useState, useEffect } from "react";
import PlanetCard from "./PlanetCard";
import PlanetsButton from "./PlanetsButton";
import "./solarsysteme.css";
import { planetsItemsList } from "./planetsItemsList";
import { PlanetImage } from "./PlanetImage";
import LoadingSpinner from "../../news-card/loading-spinner/LoadingSpinner";

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

  console.log("solarSystemFiltered:", solarSystemFiltered);

  useEffect(() => {
    if (solarSystemFiltered.length) {
      const image = planetsItemsList.find(
        (planet) => planet.title === "Neptune"
      ).img;
      const planet = { ...solarSystemFiltered[1], image };
      setDetailPlanet(planet);
    }
  }, [solarSystemFiltered]);

  if (errorResp) {
    console.log("error: ", errorResp);
    return <h2>an error has occurred, please contact the support</h2>;
  }

  return (
    <div className="galaxy-background">
      <div className="planets-page">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="planets-container">
              <PlanetImage data={detailPlanet} />
              <div className="planets-infos">
                <div className="planets-btn-container">
                  {solarSystemFiltered.map((planet, index) => {
                    return (
                      <PlanetsButton
                        planetDetails={planet}
                        key={index}
                        setDetailPlanet={setDetailPlanet}
                      />
                    );
                  })}
                </div>
                <PlanetCard data={detailPlanet} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SolarSystem;
