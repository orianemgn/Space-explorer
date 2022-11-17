import React from "react";

export const CrewCard = (props) => {
  console.log(props);
  const { name, image, gitHubLink, linkedinLink, description } = props.crew;

  console.log(name);
  return (
    <div className="crew-cards">
      <img src={image} alt={name}></img>
      <h2>{name}</h2>
      <a href={gitHubLink} target="_blank" rel="noreferrer">
        <i className="fa-brands fa-square-github"></i>
      </a>
      <a href={linkedinLink} target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <p>{description}</p>
    </div>
  );
};
