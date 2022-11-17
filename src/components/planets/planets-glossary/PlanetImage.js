export const PlanetImage = (props) => {
  const { image, englishName } = props.data;
  console.log(image);
  return (
    <div>
      <img
        className={
          englishName === "Uranus"
            ? "rotate linear infinite uranus"
            : "rotate linear infinite"
        }
        src={image}
        alt={englishName}
      />
    </div>
  );
};
