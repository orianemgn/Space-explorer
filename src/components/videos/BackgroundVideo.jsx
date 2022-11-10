import React from "react";
import videoBg from "../../assests/Vid1.mp4";
import "./BackgroundVideo.css";
//import "bootstrap/dist/css/bootstrap.css";

const BackgroundVideo = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>Welcome</h1>
        <p>to</p>
        <h2>Space Videos</h2>
      </div>
    </div>
  );
};

export default BackgroundVideo;
