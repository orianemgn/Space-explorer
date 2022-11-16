import "./app.css";

export const FooterButton = ({ onClick, title }) => {
  return (
    <button className="footerButton" onClick={onClick}>
      {" "}
      {title ? title : "click"}{" "}
    </button>
  );
};
