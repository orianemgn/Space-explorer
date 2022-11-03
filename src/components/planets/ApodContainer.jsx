const ApodContainer = (props) => {
    return (
        <>
            <div>
                <h3>Image of the days from {props.apod.copyright}</h3>
                <p>{props.apod.explanation}</p>
            </div>
            <img src={props.apod.url} alt={props.apod.title} style={{width : '50%'}}/>
        </>
    )
}

export default ApodContainer; 