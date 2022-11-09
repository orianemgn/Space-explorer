import Neptune from '../../../assests/planets/neptune.png'; 
import Uranus from '../../../assests/planets/uranus.png';

const PlanetsCards = (props) => {

    const {englishName, isPlanet, density, gravity} = props.data

    return (
        <div className="planet-card">
            <img className="rotate linear infinite" src={Neptune} alt={englishName}/>
            <div>
                <h2>{englishName}</h2>
                <p>{isPlanet? "is planet" : "is no planet"}</p>
                <p> Density: {density}</p>
                <p> Gravity: {gravity}</p>  
            </div>
        </div>
    )
    
}


export default PlanetsCards;