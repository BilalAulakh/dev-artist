import React from 'react';
import Link from 'next/link';
import BrandLogo from './BrandLogo';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-top-nav">
                    <div className="footer-logo">
                        <BrandLogo height={56} variant="light" />
                    </div>

                </div>

                <div className="footer-locations-grid">
                    {/* Headquarters - Bradford */}
                    <div className="location-col">
                        <div className="location-header">
                            <strong>Headquarters</strong> <span className="office-type">(Bradford)</span>
                            <span className="flag-icon">🇬🇧</span>
                        </div>
                        <p className="address">
                            Bradford, United Kingdom
                        </p>
                        <div className="contact-details mt-15">
                            <p className="phone"><i className="fas fa-phone-alt"></i> +44 7423253692</p>
                        </div>
                    </div>

                    {/* Sub Office - Faisalabad */}
                    <div className="location-col">
                        <div className="location-header">
                            <strong>Sub Office</strong> <span className="office-type">(Faisalabad)</span>
                            <span className="flag-icon">🇵🇰</span>
                        </div>
                        <p className="address">
                            Faisalabad, Punjab, Pakistan
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
