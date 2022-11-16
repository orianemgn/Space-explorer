import React from "react";
import "./LinksModal.css";

function LinksModal({ onClick, gitHubLinks }) {
  return (
    <div className="overlay" onClick={onClick}>
      <div className="modalContainer">
        <p className="closeBtn" onClick={onClick}>
          close
        </p>
        {gitHubLinks.map((ele) => {
          return (
            <a
              href={ele.link}
              target="_blank"
              rel="noreferrer"
              alt={ele.userName}>
              {ele.userName}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default LinksModal;
