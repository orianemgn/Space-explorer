import React from "react";
import videoBg from "../assests/Vid1.mp4";
import "./Home.css"


const Home = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>Welcome</h1>
        <h2>to</h2>
        <h1>Space Explorer</h1>
      </div>
    </div>
  );
};

export default Home;