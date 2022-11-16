import { useFetch } from "../../hooks/useFetch/useFetch";
import { useState, useEffect } from "react";
import "./MarsWeather.css";
import CardWeather from "../../components/planets/mars-weather/CardWeather";
import DetailWeatherCard from "../../components/planets/mars-weather/DetailWeatherCard";

const MarsWeather = () => {
  const [marsWeatherResp, errorResp, isLoading] = useFetch(
    `https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json`
  );

  const [lastSevenDays, setLastSevenDays] = useState([]);
  const [detailWeather, setDetailWeather] = useState([]);

  useEffect(() => {
    if (!isLoading && marsWeatherResp) {
      const data = marsWeatherResp.data.soles;
      setLastSevenDays(
        data.filter((element, index) => {
          if (index < 7) {
            return element;
          }
        })
      );
    }
  }, [marsWeatherResp, isLoading]);

  useEffect(() => {
    setDetailWeather(lastSevenDays[0]);
  }, [lastSevenDays]);

  if (errorResp) {
    console.log("error: ", errorResp);
    return <h2>an error has occurred, please contact the support</h2>;
  }

  return (
    <div className="focus-on-mars">
      {isLoading ? (
        <h2>request is still in process, loading..</h2>
      ) : (
        <>
          <h1>
            Weather
            <span>on</span>
            Mars
          </h1>
          {detailWeather && <DetailWeatherCard data={detailWeather} />}
          <div className="previous">
            <h3>Previous 7 days</h3>
            <div className="weather-cards-container">
              {lastSevenDays.map((element, index) => {
                return (
                  <CardWeather
                    data={element}
                    key={index}
                    setDetailWeather={setDetailWeather}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MarsWeather;