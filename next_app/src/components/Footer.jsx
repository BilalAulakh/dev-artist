import React from 'react';
import Link from 'next/link';
import logoImg from '../assets/logo without bg.png';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-top-nav">
                    <div className="footer-logo">
                        <img src={logoImg.src} alt="Dev Artist" className="brand-logo" style={{ width: '180px', height: 'auto', transform: 'scale(1.5)', transformOrigin: 'left center' }} />
                    </div>

                </div>

                <div className="footer-locations-grid">
                    {/* Headquarters */}
                    <div className="location-col">
                        <div className="location-header">
                            <strong>Headquarters</strong> <span className="office-type">(Faisalabad)</span>
                            <span className="flag-icon">🇵🇰</span>
                        </div>
                        <p className="address">
                            Office No 2, 2nd Floor, Adam Plaza,<br />
                            Above Stylo Shoes, Bilal Chowk,<br />
                            Samanabad, Faisalabad
                        </p>
                        <div className="contact-details mt-15">
                            <p className="phone"><i className="fas fa-phone-alt"></i> +92 320 3000555</p>
                            <p className="phone"><i className="fas fa-phone-alt"></i> +92 334 3474707</p>
                        </div>
                    </div>

                    {/* Tech Academy */}
                    <div className="location-col">
                        <div className="location-header">
                            <strong>Tech Academy</strong> <span className="office-type">(Training Center)</span>
                            <span className="flag-icon">🎓</span>
                        </div>
                        <p className="address">
                            Visit our Faisalabad campus for<br />
                            hands-on training in MERN Stack,<br />
                            Python, and AI Development.
                        </p>
                        <p className="working-hours mt-15">
                            <i className="far fa-clock"></i> Mon-Sat, 9am - 6pm
                        </p>
                    </div>

                    {/* Reach Out / Global Reach */}
                    <div className="location-col">
                        <div className="location-header">
                            <strong>Global Reach</strong> <span className="office-type">(Remote Teams)</span>
                            <span className="flag-icon">🌐</span>
                        </div>
                        <p className="address">
                            Serving clients across USA, UK,<br />
                            and UAE with dedicated offshore<br />
                            engineering teams.
                        </p>
                        <div className="mt-15">
                            <Link href="/contact" className="footer-cta-link">Start a Project →</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-info">
                    <div className="footer-email">
                        <a href="mailto:thedevartist.1@gmail.com">thedevartist.1@gmail.com</a>
                    </div>
                    <div className="footer-social">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>

            {/* Let's Talk Business Side Tab */}
            <div className="footer-side-tab">
                Let's Talk Business
            </div>
        </footer>
    );
};

export default Footer;
