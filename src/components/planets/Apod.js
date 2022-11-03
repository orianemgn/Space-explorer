//import axios from 'axios'; 
//import {useState, useEffect} from 'react'; 
import ApodContainer from './ApodContainer';
import { useFetch } from '../useFetch/useFetch';
import './apod.css'

const Apod = () => {
//first goal - try to get datas of the API and save them in the state
// API NASA Astronomy Picture of the Day
const apodURL = "https://api.nasa.gov/planetary/apod?api_key=s5cZSqCg6EAGg2JcBiQAp4qIEwLnH1arbNP28CMX"; 


const [apodResp, errorResp, isLoading] = useFetch(apodURL);
//const [apod, setApod] = useState(""); 
//useEffect(() => {
//    //const getApod = async() => {
//        //const response= await axios.get(apodURL)
//        //setApod(response.data)
//        //console.log(response.data)
//        //}
//    const getApod = () => {
//        axios
//             .get(apodURL)
//             .then((response) => setApod(response.data))
//        }
//     return getApod()
//}, [])

if (isLoading) {
    return <h2>request is still in process, loading..</h2>;
  }

  if (errorResp) {
    console.log("error: ", errorResp);
    return <h2>an error has occurred, please contact the support</h2>;
  }






    return (
        <div className="apod-container">
            <ApodContainer apod={apodResp.data}/>
        </div>
    )
}

export default Apod; 