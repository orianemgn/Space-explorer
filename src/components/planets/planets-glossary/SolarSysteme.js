import { useFetch } from "../../../hooks/useFetch/useFetch";
import { useState, useEffect } from "react";
import PlanetCard from "./PlanetCard";
import PlanetsButton from "./PlanetsButton";
import "./solarsysteme.css";
import { planetsItemsList } from "./planetsItemsList";
import { PlanetImage } from "./PlanetImage";
import LoadingSpinner from "../../../components/loading-spinner/LoadingSpinner";
import { motion } from "framer-motion";

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
      const detailPlanet = planetsItemsList.find(
        (planet) => planet.title === "Neptune"
      );
      const image = detailPlanet.img;
      const distanceFromEarth = detailPlanet.distanceFromEarth;
      const description = detailPlanet.description;
      const planet = {
        ...solarSystemFiltered[1],
        image,
        distanceFromEarth,
        description,
      };
      setDetailPlanet(planet);
    }
  }, [solarSystemFiltered]);

  if (errorResp) {
    console.log("error: ", errorResp);
    return <h2>an error has occurred, please contact the support</h2>;
  }

  return (
    <div className="galaxy-background">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="planets-container">
            <PlanetImage data={detailPlanet} />
            <motion.div
              whileInView={{ y: [100, 20], opacity: [0, 1] }}
              transition={{ duration: 0.8, ease: "easeIn" }}
              className="planet-infos"
            >

              <div className="planets-btn-container">
                {solarSystemFiltered.map((planet, index) => {
                  return (
                    <PlanetsButton
                      planetDetails={planet}
                      key={index}
                      setDetailPlanet={setDetailPlanet}
                      detailPlanetState={detailPlanet}
                    />
                  );
                })}
              </div>
              <PlanetCard data={detailPlanet} />
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

export default SolarSystem;
