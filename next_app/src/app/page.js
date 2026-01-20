"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.hash) {
            const elem = document.getElementById(window.location.hash.slice(1));
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <>
            <section id="home">
                <div className="container hero-content">
                    <h1>Crafting Logic.<br /><span>Coding Art.</span></h1>
                    <p>A Tech Academy for the next generation. A Development Agency for global businesses. We blend creativity with engineering.</p>
                    <div className="hero-buttons">
                        <Link href="#academy" className="btn btn-primary">Start Learning</Link>
                        <Link href="#contact" className="btn btn-accent">Hire Us</Link>
                    </div>
                </div>
            </section>

            <section id="academy">
                <div className="container">
                    <span className="section-subtitle">The Academy</span>
                    <h2 className="section-title">Courses for Future Tech Leaders</h2>
                    <div className="grid-4">
                        <div className="course-card">
                            <i className="fas fa-code course-icon"></i>
                            <h3>Web Development</h3>
                            <p>Master HTML, CSS, and JS to build stunning websites. The foundation of the web.</p>
                            <Link href="/contact" style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>View Syllabus &rarr;</Link>
                        </div>
                        <div className="course-card">
                            <i className="fab fa-python course-icon"></i>
                            <h3>Python & Logic</h3>
                            <p>The world's most popular language. Learn data science, automation, and backend logic.</p>
                            <Link href="/contact" style={{ color: 'var(--accent-green)', fontWeight: 600 }}>View Syllabus &rarr;</Link>
                        </div>
                        <div className="course-card">
                            <i className="fas fa-mobile-alt course-icon"></i>
                            <h3>App Innovation</h3>
                            <p>Build your first mobile app. From idea to the App Store using modern frameworks.</p>
                            <Link href="/contact" style={{ color: 'var(--accent-orange)', fontWeight: 600 }}>View Syllabus &rarr;</Link>
                        </div>
                        <div className="course-card">
                            <i className="fas fa-brain course-icon"></i>
                            <h3>AI & Robotics</h3>
                            <p>Step into the future. Understanding Artificial Intelligence and machine learning concepts.</p>
                            <Link href="/contact" style={{ color: '#e83e8c', fontWeight: 600 }}>View Syllabus &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services">
                <div className="container">
                    <span className="section-subtitle">Agency Services</span>
                    <h2 className="section-title">We Build Digital Solutions</h2>

                    <div className="service-row">
                        <div className="service-text">
                            <h3>Custom Software Development</h3>
                            <p>We build robust, scalable web applications tailored to your business needs. Whether it's a dashboard, a CRM, or a SaaS product, we ensure clean code and high performance.</p>
                            <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
                        </div>
                        <div className="service-img">
                            <i className="fas fa-laptop-code"></i>
                        </div>
                    </div>

                    <div className="service-row">
                        <div className="service-text">
                            <h3>E-Commerce & Mobile Apps</h3>
                            <p>Launch your online store or mobile app with confidence. We specialize in seamless user experiences (UX) that convert visitors into loyal customers.</p>
                            <Link href="/contact" className="btn btn-accent">Discuss Project</Link>
                        </div>
                        <div className="service-img">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                    </div>
                </div>
            </section>

            <section id="stats">
                <div className="container stats-grid">
                    <div className="stat-item">
                        <h2>500+</h2>
                        <p>Students Trained</p>
                    </div>
                    <div className="stat-item">
                        <h2>50+</h2>
                        <p>Client Projects</p>
                    </div>
                    <div className="stat-item">
                        <h2>100%</h2>
                        <p>Completion Rate</p>
                    </div>
                </div>
            </section>

            <section id="about">
                <div className="container">
                    <span className="section-subtitle">Who We Are</span>
                    <h2 className="section-title">The Team Behind the Code</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-gray)' }}>
                        Dev Artist was founded on a simple mission: to bridge the gap between creative design and technical engineering. We are a collective of senior developers and passionate educators.
                    </p>
                    <div className="team-grid">
                        <div className="team-member">
                            <img src="https://via.placeholder.com/150/007bff/ffffff?text=Dev" alt="Team Member" />
                            <h3>Alex Doe</h3>
                            <p style={{ color: 'var(--primary-blue)' }}>Lead Developer</p>
                        </div>
                        <div className="team-member">
                            <img src="https://via.placeholder.com/150/28a745/ffffff?text=Art" alt="Team Member" />
                            <h3>Sarah Smith</h3>
                            <p style={{ color: 'var(--accent-green)' }}>Head Instructor</p>
                        </div>
                        <div className="team-member">
                            <img src="https://via.placeholder.com/150/fd7e14/ffffff?text=UX" alt="Team Member" />
                            <h3>Mike Jones</h3>
                            <p style={{ color: 'var(--accent-orange)' }}>UI/UX Designer</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="container">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="contact-wrapper">
                        <div className="contact-info">
                            <h3>Ready to start?</h3>
                            <p style={{ color: 'var(--text-gray)', marginBottom: '30px' }}>Whether you want to enroll your child in a course or hire us for your next big project, we are here to help.</p>

                            <div className="info-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>123 Tech Street, Innovation City</span>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-phone"></i>
                                <span>+1 234 567 890</span>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <span>hello@devartist.com</span>
                            </div>
                        </div>

                        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your message has been sent to the Dev Artist team. We will contact you shortly.'); e.target.reset(); }}>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <select>
                                <option>I am interested in: Academy Courses</option>
                                <option>I am interested in: Hiring for Project</option>
                                <option>General Inquiry</option>
                            </select>
                            <textarea rows="5" placeholder="Your Message" required></textarea>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
