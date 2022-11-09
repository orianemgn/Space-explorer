import {useFetch} from '../../useFetch/useFetch';
import {useState, useEffect} from 'react';
import './MarsWeather.css';
import CardWeather from './CardWeather';
import DetailWeatherCard from './DetailWeatherCard';

const MarsWeather = () => {

    //state with with selected day 
    const [marsWeatherResp, errorResp, isLoading] = useFetch(`https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json`);
    const [detailWeather, setDetailWeather] = useState([])

    useEffect(() => {
        if(isLoading === false){
            setDetailWeather(lastSevenDays[0])
        }
    }, [])

    //console.log("detailWeather", detailWeather)
    if (isLoading) {
        return <p>request is still in process, loading..</p>;
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


  //console.log("lastSevenDays", lastSevenDays)

  console.log(setDetailWeather)

    return (
        <div className="focus-on-mars">
            <h1>Focus on Mars</h1>
            <h2>Weather on Mars</h2>
            <DetailWeatherCard data={detailWeather}/>
            <div className="previous">
            <h3>Previous 7 days</h3>
                <div className="weather-cards-container">
                    {lastSevenDays.map((element, index) => {
                        return (
                            <CardWeather data={element} key={index} setDetailWeather={setDetailWeather}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MarsWeather; 