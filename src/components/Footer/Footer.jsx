import "./app.css";
import { FooterButton } from "../footer-button";
import { useState } from "react";
import LinksModal from "../contact modal/LinksModal";

const gitHubLinks = [
  {
    userName: "Oriane",
    link: "https://github.com/orianemgn",
  },
  {
    userName: "StefanIv",
    link: "https://github.com/Stef14-bit",
  },
  {
    userName: "StefanDs",
    link: "https://github.com/StefanDsd",
  },
];

function Footer() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="footer">
      <FooterButton
        onClick={() => setOpenModal(true)}
        title={<i className="fa-brands fa-square-github"></i>}
      />
      {openModal && (
        <LinksModal
          gitHubLinks={gitHubLinks}
          onClick={() => setOpenModal(false)}
        />
      )}
      <FooterButton
        onClick={() => setOpenModal(true)}
        title={<i className="fa-brands fa-linkedin"></i>}
      />
      <a href="#" target="_blank">
        LINK 2
      </a>
    </div>
  );
}

export default Footer;
