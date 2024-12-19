import React from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import Logo from '../../assets/Images/HotelLogo.png'
import Hamburger from '../../assets/Images/HotelLogo.png'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
          <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '5px', borderLeft: '2px solid grey'}}>
            <p style={{margin: '0'}}>Grand</p>
            <p style={{margin: '0', fontSize: '18px'}}>Hotel</p>
          </div>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={Hamburger} alt="" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar