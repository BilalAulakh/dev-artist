"use client";
import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your inquiry has been received. Our team will contact you shortly.");
        e.target.reset();
    };

    return (
        <>
            {/* CONTACT HEADER */}
            <div className="section-padding" style={{ background: 'var(--bg-light)', marginTop: '90px', textAlign: 'center' }}>
                <div className="container">
                    <span className="section-subtitle">Get In Touch</span>
                    <h1 className="section-title">Let's Talk Business</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-gray)', fontSize: '1.1rem' }}>
                        Whether you have a project idea or need technical expertise, we're here to help you succeed.
                    </p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="contact-page-wrapper">
                    <div className="contact-info" style={{ backgroundColor: 'var(--bg-dark)' }}>
                        <h2 style={{ color: 'white', marginBottom: '20px' }}>Contact Details</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '40px' }}>Reach out to us through any of the channels below.</p>

                        <div className="info-item" style={{ marginBottom: '30px' }}>
                            <i className="fas fa-envelope" style={{ color: 'var(--accent-red)', fontSize: '1.5rem', marginRight: '20px' }}></i>
                            <div>
                                <h4 style={{ color: 'white' }}>Email</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)' }}>global.business@devsinc.com</p>
                            </div>
                        </div>

                        <div className="info-item" style={{ marginBottom: '30px' }}>
                            <i className="fas fa-phone-alt" style={{ color: 'var(--accent-red)', fontSize: '1.5rem', marginRight: '20px' }}></i>
                            <div>
                                <h4 style={{ color: 'white' }}>Phone</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)' }}>+1 (408) 567 890</p>
                            </div>
                        </div>

                        <div className="info-item" style={{ marginBottom: '40px' }}>
                            <i className="fas fa-map-marker-alt" style={{ color: 'var(--accent-red)', fontSize: '1.5rem', marginRight: '20px' }}></i>
                            <div>
                                <h4 style={{ color: 'white' }}>USA Office</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)' }}>18 S 2nd Street #120, San Jose, CA, 95113</p>
                            </div>
                        </div>

                        <div className="social-links" style={{ display: 'flex', gap: '15px' }}>
                            <a href="#" style={{ color: 'white', fontSize: '1.2rem' }}><i className="fab fa-linkedin"></i></a>
                            <a href="#" style={{ color: 'white', fontSize: '1.2rem' }}><i className="fab fa-twitter"></i></a>
                            <a href="#" style={{ color: 'white', fontSize: '1.2rem' }}><i className="fab fa-facebook"></i></a>
                            <a href="#" style={{ color: 'white', fontSize: '1.2rem' }}><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" className="form-control" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label>Work Email</label>
                                <input type="email" className="form-control" placeholder="john@company.com" required />
                            </div>
                            <div className="form-group">
                                <label>Interested In</label>
                                <select className="form-control">
                                    <option>Custom Software Development</option>
                                    <option>Generative AI Solutions</option>
                                    <option>Mobile App Development</option>
                                    <option>Staff Augmentation</option>
                                    <option>Other Services</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="form-control" rows="5" placeholder="How can we help you?" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-accent" style={{ width: '100%', padding: '15px' }}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* GLOBAL OFFICES LIST */}
            <section className="section-padding" style={{ backgroundColor: '#fdfdfd' }}>
                <div className="container">
                    <h2 className="section-title">Our <span>Global Offices</span></h2>
                    <div className="grid-4" style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        <div style={{ padding: '20px' }}>
                            <h4>Lahore, Pakistan</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)' }}>Plot B, 281 Ghazi Rd, KB Society</p>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <h4>San Jose, USA</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)' }}>18 S 2nd Street #120, CA 95113</p>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <h4>Dubai, UAE</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)' }}>Parkside Retail, Cluster R, JLT</p>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <h4>London, UK</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)' }}>128 City Road, EC1V 2NX</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
