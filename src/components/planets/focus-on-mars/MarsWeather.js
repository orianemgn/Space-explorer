import {useFetch} from '../../useFetch/useFetch';
import './MarsWeather.css'

const MarsWeather = () => {

    const [marsWeatherResp, errorResp, isLoading] = useFetch(`https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json`);

if (isLoading) {
    return <h2>request is still in process, loading..</h2>;
  }

  if (errorResp) {
    console.log("error: ", errorResp);
    return <h2>an error has occurred, please contact the support</h2>;
  }


  
  const data = marsWeatherResp.data.soles; 


  const lastSevenDays = data.filter((element, index) => {
    if(index < 7){
        return element
    }
  }); 

  console.log("lastSevenDays", lastSevenDays)


    return (
        <div>
            <h2>Weather on Mars</h2>
            <h3>Previous 7 days</h3>
            <div className="weather-container">
                {lastSevenDays.map((element, index) => {
                    return (
                        <div className="weather-cards" key={index}>
                            <h4>Sol: {element.sol}</h4>
                            <p>{element.terrestrial_date}</p>
                            <p>Temp, max: {element.max_temp}</p>
                            <p>min: {element.min_temp}</p>
                            <p>Sunrise: {element.sunrise}</p>
                            <p>Sunset: {element.sunset}</p>
                            <p>{element.atmo_opacity}</p>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default MarsWeather; 