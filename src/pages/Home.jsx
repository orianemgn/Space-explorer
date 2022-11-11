import React from "react";
import videoBg from "../assests/Vid1.mp4";
import "./Home.css"


const Home = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>Welcome</h1>
        <p>to</p>
        <h2>Space Explorer</h2>
      </div>
    </div>
  );
};

export default Home;