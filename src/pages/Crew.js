import React from "react";
import Astronaut1 from "../assests/crew/nasa-gYwfpVI2JzM-unsplash.jpg";
import Astronaut2 from "../assests/crew/nasa-U2uKrI4lci8-unsplash.jpg";
import Astronaut3 from "../assests/crew/the-new-york-public-library-kvHhSroTNPY-unsplash.jpg";
import { CrewCard } from "../components/crew/CrewCard";
import "./Crew.css";

const crew = [
  {
    name: "Oriane",
    image: Astronaut1,
    gitHubLink: "https://github.com/orianemgn",
    linkedinLink: "https://www.linkedin.com/in/magninoriane/",
    description:
      "As a child Oriane dreamed of becoming an astronaut. Still passionate about space, her trip to the moon is planned for 2050.",
  },
  {
    name: "StefanIv",
    image: Astronaut2,
    gitHubLink: "https://github.com/Stef14-bit",
    linkedinLink: "https://www.linkedin.com/in/stefan-ivanus-941455250/",
    description:
      "Passionate about space and informations, Stefan is working as news reporter and he will travel to Mars in 2050.",
  },
  {
    name: "StefanDs",
    image: Astronaut3,
    gitHubLink: "https://github.com/StefanDsd",
    linkedinLink: "https://www.linkedin.com/in/stefan-dascalescu-454aa9243/",
    description:
      "Very interested in science fiction and space. Stefan thinks the galaxy is a great source of inspiration and will travel to the moon in 2050",
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
