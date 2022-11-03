import React from 'react';
import {menuItems} from '../../menuItems';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import MenuItems from './MenuItems';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false); 

    const handleClick = () => {
        setClick(!click);
    } 
    console.log(menuItems)
  return (
    
    <nav id="navbar">
        <ul className={click? 'menu active' : 'menu'}>
            {menuItems.map((menu,index) => {
                return <MenuItems items={menu} key={index}/>
            })}
        <li class="toggle"><Link to="#" onClick={handleClick}><i className={click ? 'fas fa-times' : 'fas fa-bars'}/></Link></li>
        </ul>
    </nav>
  )
}

export default Navbar