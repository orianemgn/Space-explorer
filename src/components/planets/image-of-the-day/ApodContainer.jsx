const ApodContainer = (props) => {
    return (
        <>
                <div className="apod-card">
                    <h1> Image of the Day </h1>
                    <img className="image-mobile" src={props.apod.url} alt={props.apod.title} />
                    <h4>Copyright {props.apod.copyright}</h4>
                    <p>{props.apod.explanation}</p>
                </div>          
        </>
    )
}

export default ApodContainer; 