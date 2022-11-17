import "../../../pages/planets-pages/MarsWeather.css";

const CardWeather = (props) => {
  const { setDetailWeather } = props;
  // console.log(setDetailWeather)
  //pass as prop the seter of the state

  const {
    sol,
    terrestrial_date,
    max_temp,
    min_temp,
    sunrise,
    sunset,
    atmo_opacity,
  } = props.data;

  let reverseDate = terrestrial_date.split("-").reverse().join("/");
  let date = new Date(reverseDate);
  console.log("Date:", date);

  return (
    <div
      className="weather-cards"
      onClick={() =>
        setDetailWeather({
          sol,
          terrestrial_date,
          max_temp,
          min_temp,
          sunrise,
          sunset,
          atmo_opacity,
          date,
        })
      }
    >
      <h4>Sol {sol}</h4>
      <p>{terrestrial_date}</p>
      <hr />
      <p>High: {max_temp}</p>
      <p>Low: {min_temp}</p>
    </div>
  );
};

export default CardWeather;
