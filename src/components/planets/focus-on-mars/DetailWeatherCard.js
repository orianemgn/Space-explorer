import './MarsWeather.css'
import sun from '../../../assests/icons8-été-96.png'


const DetailWeatherCard = (props) => {

    
    const {sol, terrestrial_date, max_temp, min_temp, sunrise, sunset, atmo_opacity, design} = props.data;


    return (
            <div className={`detail-card ${design}`}>
                <h3>DetailWeatherCard</h3>
                <h4>Sol: {sol}</h4>
                <p>{terrestrial_date}</p>
                <p>{atmo_opacity}</p>
                <img src={sun} alt={sol}/>
                <p>Temp, max: {max_temp}</p>
                <p>min: {min_temp}</p>
                <p>Sunrise: {sunrise}</p>
                <p>Sunset: {sunset}</p>
                
            </div>
    )
}

export default DetailWeatherCard; 