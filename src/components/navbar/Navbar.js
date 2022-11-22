import React from "react";
import { menuItems } from "../../menuItemsList";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import MenuItems from "./MenuItems";
import "./Navbar.css";
import useOnClickOutside from "../../hooks/useOnClickOutside/useOnClickOutside";

function Navbar() {
  const ref = useRef();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  useOnClickOutside(ref, () => setClick(false));

  return (
    <nav ref={ref} id="navbar">
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
