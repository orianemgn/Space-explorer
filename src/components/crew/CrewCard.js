import { motion } from "framer-motion";

export const CrewCard = (props) => {
  const { name, image, gitHubLink, linkedinLink, description } = props.crew;

  return (
    <motion.div
      whileInView={{ y: [100, 20], opacity: [0, 1] }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      className="crew-cards"
    >
      <div>
        <img src={image} alt={name}></img>
      </div>
      <div>
        <div>
          <h2>{name}</h2>
          <a href={gitHubLink} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a href={linkedinLink} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};
