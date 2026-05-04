import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/about#leadership">Leadership</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Industries</h4>
                        <ul>
                            <li><Link href="#">Travel & Hospitality</Link></li>
                            <li><Link href="#">Public Sector</Link></li>
                            <li><Link href="#">Retail & CPG</Link></li>
                            <li><Link href="#">Banking & Fintech</Link></li>
                            <li><Link href="#">Healthcare</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><Link href="#">Web Development</Link></li>
                            <li><Link href="#">App Development</Link></li>
                            <li><Link href="#">Generative AI</Link></li>
                            <li><Link href="#">Cloud Application</Link></li>
                            <li><Link href="#">UI/UX Design</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Global Presence</h4>
                        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                            <p style={{ marginBottom: '10px' }}><strong>Pakistan (GDC):</strong> Lahore, Punjab</p>
                            <p style={{ marginBottom: '10px' }}><strong>USA:</strong> San Jose, CA</p>
                            <p style={{ marginBottom: '10px' }}><strong>UAE:</strong> JLT, Dubai</p>
                            <p style={{ marginBottom: '10px' }}><strong>UK:</strong> City Road, London</p>
                            <p style={{ marginBottom: '10px' }}><strong>KSA:</strong> Riyadh, KSA</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Devsinc. All Rights Reserved.</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
