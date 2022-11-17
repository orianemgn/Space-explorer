import Dropdown from "./Dropdown";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const MenuItems = ({ items }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleActiveLink = ({ isActive }) => {
    return isActive ? { color: "#35858b", textDecoration: "none" } : null;
  };

  return (
    <li
      className={
        click ? `${items.className} submenu-active` : `${items.className}`
      }
    >
      {items.submenu ? (
        <>
          <Link
            role="button"
            type="button"
            aria-haspopup="menu"
            onClick={handleClick}
          >
            {items.title}{" "}
          </Link>
          <Dropdown submenus={items.submenu} handleClick={handleClick} />
        </>
      ) : (
        <NavLink to={items.url} style={handleActiveLink}>
          {items.title}
        </NavLink>
      )}
    </li>
  );
};

export default MenuItems;
