import { Link } from "react-router-dom";

const Dropdown = ({ submenus, handleClick }) => {
  return (
    <ul className="submenu">
      {submenus.map((submenu, index) => (
        <li key={index} className="subitem">
          <Link onClick={handleClick} to={submenu.url}>
            {submenu.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
