import "../../../pages/planets-pages/MarsWeather.css";
import sun from "../../../assests/mars/icons8-été-96.png";
import sunsetIcon from "../../../assests/mars/icons8-sunset-64.png";

const DetailWeatherCard = (props) => {
  const {
    sol,
    terrestrial_date,
    max_temp,
    min_temp,
    sunrise,
    sunset,
    atmo_opacity,
    design,
  } = props.data;

  return (
    <div className={`detail-card ${design}`}>
      <div className="detail-card-header">
        <div>
          <h3>Sol: {sol}</h3>
          <p>{terrestrial_date}</p>
        </div>
        <h2>Latest report from the red planet</h2>
      </div>
      <div className="detail-card-body">
        <div>
          <img src={sun} alt={sol} />
          <p>{atmo_opacity}</p>
        </div>
        <div>
          <img src={sunsetIcon} alt="sunset"></img>
          <p>Sunrise: {sunrise}</p>
          <p>Sunset: {sunset}</p>
        </div>
        <div>
          <p>High: {max_temp}</p>
          <p>Low: {min_temp}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailWeatherCard;
