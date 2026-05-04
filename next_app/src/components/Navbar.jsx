"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import logo from '../assets/logo without bg.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

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

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => pathname === path;

    return (
        <header style={{ 
            boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
            background: scrolled ? 'white' : 'white', // Header is white in screenshot
            borderBottom: '1px solid var(--border-color)',
            height: '80px'
        }}>
            <div className="container">
                <nav>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                        <Link href="/" className="logo-styled">
                            <div className="logo-box"></div>
                        </Link>
                        <div className="toggle-switch">
                            <div className="toggle-circle"></div>
                        </div>
                    </div>

                    <ul className="nav-links">
                        <li><Link href="#">WHAT WE DO <i className="fas fa-chevron-down"></i></Link></li>
                        <li><Link href="#">WHO WE HELP <i className="fas fa-chevron-down"></i></Link></li>
                        <li><Link href="#">WHO WE ARE <i className="fas fa-chevron-down"></i></Link></li>
                        <li><Link href="#">HOW WE DELIVER <i className="fas fa-chevron-down"></i></Link></li>
                        <li><Link href="#">JOIN DEVSINC <i className="fas fa-chevron-down"></i></Link></li>
                    </ul>

                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <Link href="#" className="btn-explore">Explore Careers</Link>
                        <Link href="#" className="btn-talk">Let's Talk Business</Link>
                        <div className="global-menu">
                            <span>Global</span>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>

                    <div className="hamburger" onClick={toggleMenu} style={{ display: 'none' }}>
                        <i className="fas fa-bars"></i>
                    </div>
                </nav>
            </div>
            <style jsx>{`
                .logo-box {
                    width: 35px;
                    height: 35px;
                    background-color: var(--accent-teal);
                    border-radius: 6px;
                    position: relative;
                }
                .logo-box::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 15px;
                    height: 15px;
                    background: white;
                    border-radius: 50%;
                }
                .nav-links {
                    display: flex;
                    gap: 25px;
                    text-transform: uppercase;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #333;
                }
                .nav-links a { display: flex; align-items: center; gap: 5px; }
                .nav-links i { font-size: 0.7rem; }
                
                .btn-explore {
                    background-color: var(--accent-teal);
                    color: white;
                    padding: 10px 22px;
                    border-radius: 30px;
                    font-weight: 600;
                    font-size: 0.9rem;
                }
                
                .btn-talk {
                    border: 1px solid var(--accent-teal);
                    color: var(--accent-teal);
                    padding: 10px 22px;
                    border-radius: 30px;
                    font-weight: 600;
                    font-size: 0.9rem;
                }
                
                .global-menu {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    cursor: pointer;
                    color: #333;
                    margin-left: 10px;
                }
                .global-menu i { font-size: 0.75rem; }

                .toggle-switch {
                    width: 44px;
                    height: 22px;
                    background: #eee;
                    border: 1.5px solid #333;
                    border-radius: 20px;
                    position: relative;
                    cursor: pointer;
                }
                .toggle-circle {
                    width: 16px;
                    height: 16px;
                    background: #333;
                    border-radius: 50%;
                    position: absolute;
                    top: 1.5px;
                    left: 2px;
                }
            `}</style>
        </header>
    );
};

export default Navbar;
