"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import logo from '../assets/logo without bg.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const activeStyle = {
        color: 'var(--primary-blue)'
    };

    const isActive = (path) => pathname === path;

    return (
        <header>
            <div className="container">
                <nav>
                    <Link href="/" className="">
                        <Image src={logo} alt="DEV ARTIST" height={150} width={150} style={{ objectFit: 'contain' }} />
                    </Link>
                    <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                        <li>
                            <Link href="/" style={isActive('/') ? activeStyle : undefined}>Home</Link>
                        </li>
                        <li>
                            <Link href="/academy" style={isActive('/academy') ? activeStyle : undefined}>Academy</Link>
                        </li>
                        <li>
                            <Link href="/services" style={isActive('/services') ? activeStyle : undefined}>Client Services</Link>
                        </li>
                        <li>
                            <Link href="/about" style={isActive('/about') ? activeStyle : undefined}>About</Link>
                        </li>
                        <li>
                            <Link href="/contact" style={isActive('/contact') ? activeStyle : undefined}>Contact</Link>
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
