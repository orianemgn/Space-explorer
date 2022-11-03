const ApodContainer = (props) => {
    return (
        <>
                <div className="apod-card">
                    <h1> Image of the Day </h1>
                    <img className="image-mobile" src={props.apod.url} alt={props.apod.title} />
                    <h3>Copyright to {props.apod.copyright}</h3>
                    <p>{props.apod.explanation}</p>
                </div>          
        </>
    )
}

export default ApodContainer; 