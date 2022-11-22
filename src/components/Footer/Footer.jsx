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
  const [openModalGit, setOpenModalGit] = useState(false);
  const [openModalLinked, setOpenModalLinked] = useState(false);

  return (
    <div className="footer">
      <FooterButton
        //Github Contacts
        onClick={() => setOpenModalGit(true)}
        title={<i className="fa-brands fa-square-github"></i>}
      />
      <AnimatePresence
        //framer motion animation
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}>
        {openModalGit && (
          <LinksModal
            linkArr={gitHubLinks}
            onClick={() => setOpenModalGit(false)}
          />
        )}
      </AnimatePresence>

      <FooterButton
        // Linkedin Contacts
        onClick={() => setOpenModalLinked(true)}
        title={<i className="fa-brands fa-linkedin"></i>}
      />
      <AnimatePresence
        //framer motion animation
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}>
        {openModalLinked && (
          <LinksModal
            linkArr={linkedinLinks}
            onClick={() => setOpenModalLinked(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Footer;
