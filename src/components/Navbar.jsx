import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeStyle = {
    color: 'var(--primary-blue)'
  };

  return (
    <header>
        <div className="container">
            <nav>
                <Link to="/" className="logo">DEV <span>ARTIST</span></Link>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li>
                        <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/academy" style={({ isActive }) => isActive ? activeStyle : undefined}>Academy</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" style={({ isActive }) => isActive ? activeStyle : undefined}>Client Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : undefined}>Contact</NavLink>
                    </li>
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div>
            </nav>
        </div>
    </header>
  );
};

export default Navbar;
