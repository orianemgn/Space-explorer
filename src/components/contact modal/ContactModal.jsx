import React from "react";
import "./contactModal.css";

function ContactModal({ onClick }) {
  return (
    <div className="overlay" onClick={onClick}>
      <div className="modalContainer">
        <p className="closeBtn" onClick={onClick}>
          close
        </p>
        <a href="https://github.com/orianemgn" target="_blank" alt="Oriane">
          Oriane
        </a>
        <a href="https://github.com/Stef14-bit" target="_blank" alt="Stefan Iv">
          Stefan Iv
        </a>
        <a href="https://github.com/StefanDsd" target="_blank" alt="Stefan D">
          Stefan D
        </a>
      </div>
    </div>
  );
}

export default ContactModal;
