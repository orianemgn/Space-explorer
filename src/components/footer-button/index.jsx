import "./app.css";
export const FooterButton = ({ onClick, title }) => {
  return <button onClick={onClick}> {title ? title : "click"} </button>;
};
