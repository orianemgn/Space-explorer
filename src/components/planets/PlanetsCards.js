const PlanetsCards = (props) => {
    console.log("Props", props.data)
    const {englishName, isPlanet} = props.data

    return (
        <div>
            <h3>{englishName}</h3>
            <p>{isPlanet? "is planet" : "is no planet"}</p>
            
        </div>
    )
    
}


export default PlanetsCards;