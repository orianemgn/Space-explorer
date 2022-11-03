const PlanetsCards = (props) => {
    console.log("Props", props.data)
    const {englishName, isPlanet, density, gravity} = props.data

    return (
        <div className="solar-cards">
            <h3>{englishName}</h3>
            <p>{isPlanet? "is planet" : "is no planet"}</p>
            <p> Density: {density}</p>
            <p> Gravity: {gravity}</p>  
        </div>
    )
    
}


export default PlanetsCards;