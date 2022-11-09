import "./app.css";
import ModalBtn from "../contact modal/ModalBtn";

function Footer() {
  return (
    <div className="footer">
      <ModalBtn icon={<i class="fa-brands fa-square-github"></i>} />

      <a href="#" target="_blank">
        LINK 1
      </a>
      <a href="#" target="_blank">
        LINK 2
      </a>
    </div>
  );
}

export default Footer;
