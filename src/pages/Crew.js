import React from "react";
import testImg from "../assests/nasa-gYwfpVI2JzM-unsplash.jpg";
import { CrewCard } from "../components/crew/CrewCard";
import "./Crew.css";

const crew = [
  {
    name: "Oriane",
    image: testImg,
    gitHubLink: "https://github.com/orianemgn",
    linkedinLink: "https://www.linkedin.com/in/magninoriane/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "StefanIv",
    image: testImg,
    gitHubLink: "https://github.com/Stef14-bit",
    linkedinLink: "https://www.linkedin.com/in/stefan-ivanus-941455250/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "StefanDs",
    image: testImg,
    gitHubLink: "https://github.com/StefanDsd",
    linkedinLink: "https://www.linkedin.com/in/stefan-dascalescu-454aa9243/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function Crew() {
  return (
    <div className="crew-page">
      <h1>Our Crew</h1>
      <div className="crew-container">
        {crew.map((element, index) => {
          return <CrewCard crew={element} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Crew;
