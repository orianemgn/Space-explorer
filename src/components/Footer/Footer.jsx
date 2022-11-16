import "./app.css";
import { FooterButton } from "../footer-button";
import { useState } from "react";
import LinksModal from "../contact modal/LinksModal";
import { AnimatePresence } from "framer-motion";

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
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}>
        {openModal && (
          <LinksModal
            gitHubLinks={gitHubLinks}
            onClick={() => setOpenModal(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        <FooterButton
          onClick={() => setOpenModal(true)}
          title={<i className="fa-brands fa-linkedin"></i>}
        />
      </AnimatePresence>
    </div>
  );
}

export default Footer;
