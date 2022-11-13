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
    userName: "Stefan Iv",
    link: "https://github.com/Stef14-bit",
  },
  {
    userName: "Stefan Ds",
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
      {openModal &&
        gitHubLinks.map((e) => (
          <LinksModal
            userName={e.userName}
            links={e.link}
            onClick={() => setOpenModal(false)}
          />
        ))}
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
