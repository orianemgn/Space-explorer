import {useState} from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

const Navbar = () => {
    const [click, setClick] = useState(false); 
    const [dropdown, setDropdown] = useState(false);

    //to handle the burger menu
    const handelClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () =>{
        if(window.innerWidth <960) {
            setDropdown(true);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () =>{
        if(window.innerWidth <960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };



    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    SPACE EXPLORER
                </Link>
                {/*To toggle the burger menu icon - icons from fontawesome*/}
                <div className="menu-icon" onClick={handelClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

                </div>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/news' className='nav-links' onClick={closeMobileMenu}>News</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/planets' className='nav-links' onClick={closeMobileMenu}>Planets <i className='fas fa-caret-down'/></Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                        <Link to='/videos' className='nav-links' onClick={closeMobileMenu}>Videos</Link>
                    </li>
                    {/*<li className="nav-item">
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign-up</Link>
                    </li>*/}
                </ul>
                {/*<Button />*/}
            </nav>
        </>
    )
}

export default Navbar; 