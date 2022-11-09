import React, { useState } from "react";
import ContactModal from "./ContactModal";
import "./modalBtn.css";

function ModalBtn(props) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button className="button" onClick={() => setOpenModal(true)}>
        {props.icon}
      </button>
      <ContactModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default ModalBtn;
