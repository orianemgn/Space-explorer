import axios from 'axios'; 
import {useState, useEffect} from 'react'; 
import './apod.css'

const Apod = () => {
//first goal - try to get datas of the API and save them in the state
// API NASA Astronomy Picture of the Day
const apodURL = "https://api.nasa.gov/planetary/apod?api_key=s5cZSqCg6EAGg2JcBiQAp4qIEwLnH1arbNP28CMX"; 

const [apod, setApod] = useState(""); 
useEffect(() => {
    //const getApod = async() => {
        //const response= await axios.get(apodURL)
        //setApod(response.data)
        //console.log(response.data)
        //}
    const getApod = () => {
        axios
             .get(apodURL)
             .then((response) => setApod(response.data))
        }
     return getApod()
}, [])



//console.log("APOD", apod)npm np



    return (
        <div className="apod-container">
            <div>
                <h3>Image of the days from {apod.copyright}</h3>
                <p>{apod.explanation}</p>
            </div>
            <img src={apod.url} alt={apod.title} style={{width : '50%'}}/>
        </div>
    )
}

export default Apod; 