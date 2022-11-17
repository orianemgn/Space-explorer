import "../../../pages/planets-pages/MarsWeather.css";

const DetailWeatherCard = (props) => {
  const {
    sol,
    terrestrial_date,
    max_temp,
    min_temp,
    sunrise,
    sunset,
    atmo_opacity,
    date,
    design,
  } = props.data;

  return (
    <div className={`detail-card ${design}`}>
      <div className="detail-card-header">
        <h3>Latest report from the red planet</h3>
        <div>
          <h2>Sol: {sol}</h2>
          <p>{date}</p>
        </div>
      </div>
      <div className="detail-card-body">
        <div>
          <i className="fa-solid fa-cloud-moon"></i>
          <p>
            <b>Sunrise:</b> {sunrise}
          </p>
          <p>
            <b>Sunset:</b> {sunset}
          </p>
        </div>
        <div>
          <i
            className={
              atmo_opacity === "Sunny"
                ? "fa-regular fa-sun"
                : "fa-solid fa-cloud-sun"
            }
          ></i>
          <p>
            <b>Atmosphere: </b>
          </p>
          <p>{atmo_opacity}</p>
        </div>
        <div>
          <i className="fa-solid fa-temperature-quarter"></i>
          <p>
            <b>High:</b> {max_temp}
          </p>
          <p>
            <b>Low:</b> {min_temp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailWeatherCard;
