import {useFetch} from '../useFetch/useFetch';
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

      const solarsystem = apodResp.data.bodies; 

      //console.log(solarsystem)


      //console.log(apodResp.data)
    return(
        <div className="solar-container">
            {solarsystem.map((element, index) => {
                console.log(element.isPlanet)
                return (
                    <PlanetsCards data={element} /> 
                    )                
            })}
            
        </div>
    )
}

export default SolarSystem;