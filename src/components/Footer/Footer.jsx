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

const linkedinLinks = [
  {
    userName: "Oriane",
    link: "https://www.linkedin.com/in/magninoriane/",
  },
  {
    userName: "StefanIv",
    link: "https://www.linkedin.com/in/stefan-ivanus/",
  },
  {
    userName: "StefanDs",
    link: "https://www.linkedin.com/in/stefan-dascalescu/",
  },
];

function Footer() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="footer">
      <div>
        <FooterButton
          //Github Contacts
          onClick={() => setOpenModal(true)}
          title={<i className="fa-brands fa-square-github"></i>}
        />
        <AnimatePresence
          //framer motion animation
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}>
          {openModal && (
            <LinksModal
              linkArr={gitHubLinks}
              onClick={() => setOpenModal(false)}
            />
          )}
        </AnimatePresence>
      </div>
      <div>
        <FooterButton
          // Linkedin Contacts
          onClick={() => setOpenModal(true)}
          title={<i className="fa-brands fa-linkedin"></i>}
        />
        <AnimatePresence
          //framer motion animation
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}>
          {openModal && (
            <LinksModal
              linkArr={linkedinLinks}
              onClick={() => setOpenModal(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Footer;
