import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contactImage from '../../assets/contact.png';
import mobileMenuImage from '../../assets/menu.png';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <nav className='navbar'>
            {/*it will have the logo that is an image, then a div that contains the menu, 
            then a button to the right that has the text: Contact Me
            The logo image will be imported*/}
            <img src={logo} alt='logo_image' className='logo'></img>
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={800} className='desktopMenu_ListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={800} className='desktopMenu_ListItem'>About</Link>
                <Link activeClass='active' to='worksection' spy={true} smooth={true} offset={-50} duration={800} className='desktopMenu_ListItem'>Portfolio</Link>
            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('contactpage').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImage} alt='contact-image' className='desktopMenuImg' />Contact Me
            </button>
            <img src={mobileMenuImage} alt='mobileMenu_image' className='mobileMenu' onClick={()=> setShowMobileMenu(!showMobileMenu)}></img>
            <div className='navMenu' style={{display: showMobileMenu? 'flex' : 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={800} className='mobileMenu_ListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={800} className='mobileMenu_ListItem'>About</Link>
                <Link activeClass='active' to='worksection' spy={true} smooth={true} offset={-50} duration={800} className='mobileMenu_ListItem'>Portfolio</Link>
                <Link activeClass='active' to='contactpage' spy={true} smooth={true} offset={-50} duration={800} className='mobileMenu_ListItem'>Contact</Link>
            </div>
        </nav>
       
    );
}

export default Navbar;