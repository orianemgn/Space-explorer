import React from "react";
import videoBg from "../../assests/Vid1.mp4";
import "./BackgroundVideo.css";
import VideoCarousel from "./VideoCarousel";
// import "bootstrap/dist/css/bootstrap.css"

const BackgroundVideo = () => {
  return (
    // Background Video
    <div className="main">
        <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>Welcome</h1>
        <p>to</p>
        <h2>Space</h2>
        <p>Videos</p>
        
      </div>
    </div>
  );
};

export default BackgroundVideo;
