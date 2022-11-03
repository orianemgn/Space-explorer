import Dropdown from "./Dropdown";
import {Link} from 'react-router-dom';
import {useState} from 'react';

const MenuItems = ({items}) => {

    const [click, setClick] = useState(false); 

    const handleClick = () => {
        setClick(!click);
    } 

    console.log("items:", items)
    console.log("items submenu", items.submenu)

    return (
        <li className={click? `${items.className} submenu-active` : `${items.className}`}>
            {items.submenu ? (
                <>
                    <Link role="button" type="button" aria-haspopup="menu" onClick={handleClick}>
                        {items.title}{' '}
                    </Link>
                    <Dropdown submenus={items.submenu}/>
                </>
            ) : (
                <Link to={items.url}>{items.title}</Link>
            )}             
        </li>
    );
};

export default MenuItems; 