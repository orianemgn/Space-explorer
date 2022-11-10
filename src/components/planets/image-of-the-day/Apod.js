import ApodContainer from "./ApodContainer";
import { useFetch } from "../../useFetch/useFetch";
import "./apod.css";

const Apod = () => {
  const apodURL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_O_API_KEY}`;

  const [apodResp, errorResp, isLoading] = useFetch(apodURL);

  if (isLoading) {
    return <h2>request is still in process, loading..</h2>;
  }

  if (errorResp) {
    console.log("error: ", errorResp);
    return <h2>an error has occurred, please contact the support</h2>;
  }

  return (
    <div
      className="background-apod"
      style={{ backgroundImage: `url(${apodResp.data.url})` }}
    >
      <div className="apod-container">
        <ApodContainer apod={apodResp.data} />
      </div>
    </div>
  );
};

export default Apod;
