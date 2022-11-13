import React from "react";
import "./LinksModal.css";

function LinksModal({ onClick, userName, links }) {
  return (
    <div className="overlay" onClick={onClick}>
      <div className="modalContainer">
        <p className="closeBtn" onClick={onClick}>
          close
        </p>
        <a href={links} target="_blank" rel="noreferrer" alt={userName}>
          {userName}
        </a>
      </div>
    </div>
  );
}

export default LinksModal;
