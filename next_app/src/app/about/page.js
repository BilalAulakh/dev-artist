import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'About Us | thedev artist',
    description: 'Learn about Devsinc, our mission, leadership, and global reach.',
};

const About = () => {
    return (
        <>
            {/* ABOUT HEADER */}
            <div className="section-padding" style={{ background: 'var(--bg-light)', marginTop: '90px', textAlign: 'center' }}>
                <div className="container">
                    <span className="section-subtitle">Who We Are</span>
                    <h1 className="section-title">Human-First is Our Foundation</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-gray)', fontSize: '1.1rem' }}>
                        Devsinc is a global software development agency that helps businesses scale their technology life cycle with high-end engineering talent.
                    </p>
                </div>
            </div>

            {/* MISSION SECTION */}
            <section className="section-padding">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <div>
                        <h2 className="section-title" style={{ textAlign: 'left' }}>Empowering Businesses <span>Globally</span></h2>
                        <p style={{ color: 'var(--text-gray)', marginBottom: '30px' }}>
                            For over 15 years, we have been at the forefront of digital transformation, helping startups and enterprises alike build robust software solutions that drive growth.
                        </p>
                        <p style={{ color: 'var(--text-gray)', marginBottom: '30px' }}>
                            Our mission is simple: to provide unparalleled technical expertise and human-centric solutions that empower our clients to lead in their respective industries.
                        </p>
                        <Link href="/contact" className="btn btn-primary">Join Our Team</Link>
                    </div>
                    <div style={{ background: 'var(--bg-light)', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Office Culture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </section>

            {/* LEADERSHIP */}
            <section className="section-padding" id="leadership" style={{ backgroundColor: '#fdfdfd' }}>
                <div className="container">
                    <span className="section-subtitle">Leadership</span>
                    <h2 className="section-title">Guided by <span>Excellence</span></h2>
                    <div className="services-grid" style={{ marginTop: '50px' }}>
                        <div className="profile-card">
                            <div className="img-container">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="CEO" />
                            </div>
                            <div className="info-container">
                                <h3 className="name">Usman Asif</h3>
                                <p className="role" style={{ color: 'var(--accent-red)' }}>Founder & CEO</p>
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="profile-card">
                            <div className="img-container">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="CFO" />
                            </div>
                            <div className="info-container">
                                <h3 className="name">Maria Sadaf</h3>
                                <p className="role" style={{ color: 'var(--accent-red)' }}>Chief of Staff</p>
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="profile-card">
                            <div className="img-container">
                                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="CDO" />
                            </div>
                            <div className="info-container">
                                <h3 className="name">Badar Shafiq</h3>
                                <p className="role" style={{ color: 'var(--accent-red)' }}>Chief Delivery Officer</p>
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GLOBAL REACH */}
            <section className="section-padding">
                <div className="container">
                    <span className="section-subtitle">Global Reach</span>
                    <h2 className="section-title">Where We <span>Operate</span></h2>
                    <div className="grid-4" style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                        <div style={{ textAlign: 'center', padding: '30px', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                            <i className="fas fa-map-marker-alt" style={{ fontSize: '2rem', color: 'var(--accent-red)', marginBottom: '15px' }}></i>
                            <h4>Pakistan</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)' }}>GDC - Lahore, Punjab</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '30px', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                            <i className="fas fa-map-marker-alt" style={{ fontSize: '2rem', color: 'var(--accent-red)', marginBottom: '15px' }}></i>
                            <h4>USA</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)' }}>San Jose, CA</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '30px', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                            <i className="fas fa-map-marker-alt" style={{ fontSize: '2rem', color: 'var(--accent-red)', marginBottom: '15px' }}></i>
                            <h4>UAE</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)' }}>Dubai, UAE</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '30px', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                            <i className="fas fa-map-marker-alt" style={{ fontSize: '2rem', color: 'var(--accent-red)', marginBottom: '15px' }}></i>
                            <h4>UK</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)' }}>London, UK</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="section-padding" style={{ backgroundColor: 'var(--bg-dark)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="section-title" style={{ color: 'white' }}>Join the Global Leaders</h2>
                    <p style={{ marginBottom: '40px', opacity: 0.8 }}>We're always looking for passionate engineers to join our team across 5 continents.</p>
                    <Link href="/contact" className="btn btn-accent">Explore Careers</Link>
                </div>
            </div>
        </>
    );
};

export default About;
