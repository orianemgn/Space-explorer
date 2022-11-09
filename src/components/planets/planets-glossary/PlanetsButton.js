

const PlanetsButton = (props) => {

    const {setDetailPlanet} = props; 
    const {englishName, isPlanet, density, gravity} = props.data

    return (   
        <div className="solar-cards" onClick={() => setDetailPlanet({englishName, isPlanet, density, gravity})}>
            <h3>{englishName}</h3>
        </div>
    )
  
}

export default PlanetsButton