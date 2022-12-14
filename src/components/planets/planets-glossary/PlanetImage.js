export const PlanetImage = (props) => {
  const { image, englishName } = props.data;

  return (
    <div>
      <img
        className={
          englishName === "Uranus"
            ? "planet-img rotate linear infinite uranus"
            : "planet-img rotate linear infinite"
        }
        src={image}
        alt={englishName}
      />
    </div>
  );
};
