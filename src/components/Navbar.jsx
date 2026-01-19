import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to scroll to top when navigating
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <header style={{
            backgroundColor: scrolled ? '#0a0e27' : 'rgba(10, 14, 39, 0.95)',
            transition: 'background-color 0.3s ease'
        }}>
            <div className="container">
                <nav>
                    <Link to="/" className="logo" onClick={closeMobileMenu}>
                        DEV <span>ARTIST</span>
                    </Link>
                    <ul className={click ? "nav-links active" : "nav-links"}>
                        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                        <li><Link to="/academy" onClick={closeMobileMenu}>Academy</Link></li>
                        <li><Link to="/services" onClick={closeMobileMenu}>Client Services</Link></li>
                        <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
                        <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
                    </ul>
                    <div className="hamburger" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
