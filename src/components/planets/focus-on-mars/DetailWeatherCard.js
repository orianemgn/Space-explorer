//detail card, take some state from the page 
//useeffetc that check in the dependencies if there is a change to the props

const DetailWeatherCard = (props) => {

    const {sol, terrestrial_date, max_temp, min_temp, sunrise, sunset, atmo_opacity} = props.data;

    return (
            <div style={{ background: 'red'}}>
                <h3>DetailWeatherCard</h3>
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

export default DetailWeatherCard; 