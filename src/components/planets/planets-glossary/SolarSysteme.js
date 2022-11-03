import {useFetch} from '../../useFetch/useFetch';
import PlanetsCards from './PlanetsCards';
import './solarsysteme.css';

const SolarSystem = () => {
    const [apodResp, errorResp, isLoading] = useFetch('https://api.le-systeme-solaire.net/rest/bodies/');

    if (isLoading) {
        return <h2>request is still in process, loading..</h2>;
      }
    
      if (errorResp) {
        console.log("error: ", errorResp);
        return <h2>an error has occurred, please contact the support</h2>;
      }

      const solarSystem = apodResp.data.bodies; 

      const solarSystemFiltered = solarSystem.filter(element => element.isPlanet === true); 

      const moon = solarSystem.filter(element => element.englishName === "Moon")
      const sun = solarSystem.filter(element => element.englishName === "Sun")

      console.log("moon", moon)

      console.log("solar filter", solarSystemFiltered)

      //console.log(solarsystem)


      //console.log(apodResp.data)
    return(
        <>
            <div className="solar-container">
            {solarSystemFiltered.map((element, index) => {
                console.log(element.isPlanet)
                return (
                    <PlanetsCards data={element} /> 
                    )                
            })}
            
            </div>
            <div>
                <h2>No planet</h2>
                <PlanetsCards data={moon[0]}/>
                <PlanetsCards data={sun[0]}/>
            </div>
        </>
        
    )
}

export default SolarSystem;