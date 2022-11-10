import "./app.css";
import { FooterButton } from "../footer-button";
import { useState } from "react";
import LinksModal from "../contact modal/LinksModal";

function Footer() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="footer">
      <FooterButton
        onClick={() => setOpenModal(true)}
        title={<i class="fa-brands fa-square-github"></i>}
      />
      {openModal && <LinksModal onClick={() => setOpenModal(false)} />}
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
