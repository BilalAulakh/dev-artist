"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { services } from '../data/services';
import BrandLogo from './BrandLogo';

const Chevron = ({ size = 10 }) => (
    <svg className="chevron" width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle smooth scrolling when navigating to /#contact or clicking it
    useEffect(() => {
        if (window.location.hash === '#contact') {
            const timer = setTimeout(() => {
                const element = document.getElementById('contact');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [pathname]);

    const handleContactClick = (e) => {
        setMobileMenuOpen(false);
        if (window.location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById('contact');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '#contact');
            }
        }
    };

    const menuItems = [
        { label: 'What We Do', href: '/what-we-do' },
        { label: 'Who We Help', href: '/who-we-help' },
        { label: 'Projects', href: '/projects' },
        { label: 'Institute', href: '/institute' },
    ];

    // Group services by category for the mega menu
    const grouped = services.reduce((acc, s) => {
        (acc[s.category] = acc[s.category] || []).push(s);
        return acc;
    }, {});

    return (
        <header className={scrolled ? "scrolled" : ""}>
            <div className="nav-container">
                <nav>
                    <div className="nav-left">
                        <Link href="/" className="logo-container" aria-label="Home">
                            <BrandLogo height={scrolled ? 38 : 44} />
                        </Link>
                    </div>

                    <div className={`nav-center ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                        <ul className="nav-links">
                            {menuItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} prefetch onClick={() => setMobileMenuOpen(false)}>
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                            <li className="mobile-only-contact">
                                <Link href="/#contact" onClick={handleContactClick}>
                                    <span>Contact Us</span>
                                </Link>
                            </li>
                            <li
                                className="nav-services-item"
                                onMouseEnter={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}
                            >
                                <Link href="/services" prefetch onClick={() => { setServicesOpen(false); setMobileMenuOpen(false); }}>
                                    <span>Our Services</span>
                                    <Chevron size={16} />
                                </Link>
                                <div className={`mega-menu ${servicesOpen ? 'open' : ''}`}>
                                    <div className="mega-menu-inner">
                                        {Object.entries(grouped).map(([cat, list]) => (
                                            <div className="mega-col" key={cat}>
                                                <div className="mega-col-title">{cat}</div>
                                                <ul>
                                                    {list.map((s) => (
                                                        <li key={s.slug}>
                                                            <Link
                                                                href={`/services/${s.slug}`}
                                                                prefetch
                                                                onClick={() => setServicesOpen(false)}
                                                            >
                                                                {s.title}
                                                                <span className="mega-arrow">→</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                        <div className="mega-cta">
                                            <div className="mega-cta-title">Browse all services</div>
                                            <p>Explore our complete range of engineering, marketing, and reputation services.</p>
                                            <Link
                                                href="/services"
                                                prefetch
                                                className="mega-cta-btn"
                                                onClick={() => setServicesOpen(false)}
                                            >View all →</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="nav-right">
                        <Link href="/#contact" className="global-menu" onClick={handleContactClick}>
                            <span>Contact Us</span>
                        </Link>
                        <button className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </nav>
            </div>

            <style jsx>{`
                header {
                    background: rgba(255, 255, 255, 0.72);
                    backdrop-filter: saturate(180%) blur(18px);
                    -webkit-backdrop-filter: saturate(180%) blur(18px);
                    height: 76px;
                    position: fixed;
                    width: 100%;
                    top: 0;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                    transition: all 0.35s ease;
                }
                header.scrolled {
                    height: 64px;
                    background: rgba(255, 255, 255, 0.88);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
                }

                .nav-container {
                    max-width: 1300px;
                    width: 100%;
                    margin: 0 auto;
                    padding: 0 40px;
                }

                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    gap: 24px;
                }

                .nav-left {
                    display: flex;
                    align-items: center;
                }

                .nav-left :global(.logo-container) {
                    display: inline-flex;
                    align-items: center;
                    line-height: 0;
                    transition: transform 0.3s ease;
                }
                .nav-left :global(.logo-container:hover) {
                    transform: translateY(-1px);
                }

                .nav-center {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                }

                .nav-links {
                    display: flex;
                    gap: 48px;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .nav-links li a {
                    font-size: 0.95rem;
                    font-weight: 500;
                    color: #0c112b;
                    letter-spacing: 0.2px;
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    transition: color 0.25s ease;
                    line-height: 1;
                    position: relative;
                    padding: 8px 2px;
                }
                .nav-links li a::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    height: 1.5px;
                    width: 0;
                    background: var(--accent-teal);
                    transition: width 0.3s ease;
                }
                .nav-links li a:hover { color: var(--accent-teal); }
                .nav-links li a:hover::after { width: 100%; }

                .mobile-only-contact {
                    display: none;
                }

                :global(.chevron) {
                    color: var(--accent-teal);
                    flex-shrink: 0;
                    transition: transform 0.25s ease;
                    opacity: 0.85;
                }
                .nav-links li a:hover :global(.chevron) {
                    transform: translateY(2px);
                }

                .nav-right {
                    display: flex;
                    align-items: center;
                }

                .global-menu {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    cursor: pointer;
                    color: #0c112b;
                    padding: 9px 18px;
                    border-radius: 30px;
                    border: 1px solid rgba(0, 0, 0, 0.08);
                    transition: all 0.25s ease;
                }
                .global-menu:hover {
                    color: var(--accent-teal);
                    border-color: var(--accent-teal);
                    background: rgba(0, 194, 203, 0.06);
                }
                .global-menu:hover :global(.chevron) {
                    transform: translateY(2px);
                }

                /* Mega menu */
                .nav-services-item {
                    position: static;
                }
                .mega-menu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: #ffffff;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
                    box-shadow: 0 24px 60px rgba(15, 23, 42, 0.10);
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-8px);
                    transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
                    z-index: 999;
                }
                .mega-menu.open {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
                .mega-menu-inner {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 36px 40px 40px;
                    display: grid;
                    grid-template-columns: repeat(5, 1fr) 1.4fr;
                    gap: 30px;
                }
                .mega-col-title {
                    font-size: 0.72rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-weight: 700;
                    color: var(--accent-teal);
                    margin-bottom: 16px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
                }
                .mega-col ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .mega-col li {
                    margin-bottom: 6px;
                }
                .mega-col li a {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px 10px 8px 0;
                    font-size: 0.88rem;
                    font-weight: 500;
                    color: #0c112b;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                }
                .mega-col li a :global(.mega-arrow) {
                    opacity: 0;
                    transform: translateX(-4px);
                    transition: opacity 0.2s ease, transform 0.2s ease;
                    color: var(--accent-teal);
                    font-weight: 700;
                }
                .mega-col li a:hover {
                    color: var(--accent-teal);
                    padding-left: 10px;
                    background: rgba(0, 194, 203, 0.06);
                }
                .mega-col li a:hover :global(.mega-arrow) {
                    opacity: 1;
                    transform: translateX(0);
                }
                .mega-cta {
                    background: linear-gradient(135deg, rgba(0, 194, 203, 0.10) 0%, rgba(0, 70, 173, 0.06) 100%);
                    border-radius: 18px;
                    padding: 26px 24px;
                    border: 1px solid rgba(0, 194, 203, 0.18);
                }
                .mega-cta-title {
                    font-size: 1.05rem;
                    font-weight: 800;
                    color: var(--bg-dark);
                    margin-bottom: 8px;
                }
                .mega-cta p {
                    font-size: 0.85rem;
                    color: var(--text-gray);
                    line-height: 1.5;
                    margin-bottom: 16px;
                }
                .mega-cta-btn {
                    display: inline-block;
                    background: var(--accent-teal);
                    color: #fff;
                    padding: 10px 22px;
                    border-radius: 24px;
                    font-size: 0.82rem;
                    font-weight: 700;
                    transition: 0.3s;
                }
                .mega-cta-btn:hover {
                    background: #00adb5;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 18px rgba(0, 194, 203, 0.35);
                }

                .hamburger {
                    display: none;
                    background: none;
                    border: none;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 18px;
                    width: 24px;
                    cursor: pointer;
                    padding: 0;
                    z-index: 1001;
                    margin-left: 20px;
                }
                .hamburger span {
                    display: block;
                    width: 100%;
                    height: 2px;
                    background: #0c112b;
                    transition: all 0.3s ease;
                    border-radius: 2px;
                }
                .hamburger.open span:nth-child(1) {
                    transform: translateY(8px) rotate(45deg);
                }
                .hamburger.open span:nth-child(2) {
                    opacity: 0;
                }
                .hamburger.open span:nth-child(3) {
                    transform: translateY(-8px) rotate(-45deg);
                }

                @media (max-width: 1100px) {
                    .mega-menu-inner { grid-template-columns: repeat(3, 1fr); }
                    .mega-cta { grid-column: 1 / -1; }
                }
                @media (max-width: 768px) {
                    .nav-container { padding: 0 20px; }
                    .hamburger { display: flex; }
                    .nav-center {
                        position: fixed;
                        top: 76px;
                        left: 0;
                        width: 100%;
                        height: calc(100vh - 76px);
                        background: #fff;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: flex-start;
                        padding: 40px 24px;
                        transform: translateX(100%);
                        transition: transform 0.3s ease, opacity 0.3s ease;
                        opacity: 0;
                        pointer-events: none;
                        overflow-y: auto;
                    }
                    header.scrolled .nav-center {
                        top: 64px;
                        height: calc(100vh - 64px);
                    }
                    .nav-center.mobile-open {
                        transform: translateX(0);
                        opacity: 1;
                        pointer-events: auto;
                    }
                    .nav-links {
                        flex-direction: column;
                        gap: 24px;
                        width: 100%;
                    }
                    .nav-links li { width: 100%; }
                    .nav-links li a {
                        font-size: 1.1rem;
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                        padding: 12px 0;
                        border-bottom: 1px solid rgba(0,0,0,0.05);
                    }
                    .nav-links li a::after { display: none; }
                    .global-menu { display: none; }
                    .mega-menu { display: none; }
                    .mobile-only-contact { display: block; }
                }
            `}</style>
        </header>
    );
};

export default Navbar;
