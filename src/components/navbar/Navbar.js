import React from "react";
import { menuItems } from "../../menuItemsList";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuItems from "./MenuItems";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const openInNewTab = (url) => {
    // 👇️ setting target to _blank with window.open
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <nav id="navbar">
      <ul className={click ? "menu active" : "menu"}>
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
        <li className="toggle">
          <Link to="#" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </Link>
        </li>
        <li className="item button secondary">
          <a
            type="button"
            href="https://github.com/orianemgn/Space-explorer"
            target="_blank"
            rel="noreferrer"
            alt="github"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
