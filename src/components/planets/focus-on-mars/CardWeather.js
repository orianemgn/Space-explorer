import './MarsWeather.css'

const CardWeather = (props) => {

    //pass as prop the seter of the state

    const {sol, terrestrial_date, max_temp, min_temp, sunrise, sunset, atmo_opacity} = props.data;

    return (
            <div className="weather-cards">
               <h4>Sol: {sol}</h4>
               <p>{terrestrial_date}</p>
               <p>Temp, max: {max_temp}</p>
               <p>min: {min_temp}</p>
               <p>Sunrise: {sunrise}</p>
               <p>Sunset: {sunset}</p>
               <p>{atmo_opacity}</p>
               <button>More</button>
            </div>
    )
}

export default CardWeather; 