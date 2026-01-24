"use client";
import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent successfully. Our team will contact you within 24 hours.");
        e.target.reset();
    };

    return (
        <>
            <section className="page-header">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Get In Touch</h1>
                    <p className="section-description" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        Have a question about our courses? Or need a quote for your project? We are just a message away.
                    </p>
                </div>
            </section>

            <section id="contact">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-info">
                            <h3>Contact Info</h3>
                            <p>Visit our campus or reach out via phone. We are open Mon-Sat, 9am - 6pm.</p>

                            <div className="info-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <span style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', color: 'var(--text-white)' }}>Address</span>
                                    <span>123 Innovation Avenue, Tech District, City 54000</span>
                                </div>
                            </div>

                            <div className="info-item">
                                <i className="fas fa-phone-alt"></i>
                                <div>
                                    <span style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', color: 'var(--text-white)' }}>Phone</span>
                                    <span>+92 320 3000555</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', color: 'var(--text-white)' }}>Phone</span>
                                    <span>+92 334 3474707</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <span style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', color: 'var(--text-white)' }}>Email</span>
                                    <span>thedevartist@gmail.com</span>
                                </div>
                            </div>

                            <h4 style={{ color: 'var(--text-white)', marginTop: '30px', marginBottom: '20px' }}>Follow Us</h4>
                            <div className="social-icons">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-whatsapp"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3 style={{ color: 'var(--text-white)', marginBottom: '20px' }}>Send Message</h3>

                            <input type="text" placeholder="Your Name *" required />
                            <input type="email" placeholder="Email Address *" required />

                            <select required>
                                <option value="">I am interested in...</option>
                                <option>Student Admission (Academy)</option>
                                <option>Hiring for a Project (Client)</option>
                                <option>Job Application</option>
                                <option>General Inquiry</option>
                            </select>

                            <input type="text" placeholder="Subject" />
                            <textarea rows="5" placeholder="Write your message here... *" required></textarea>

                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="faq-section" style={{ background: 'var(--bg-darker)', padding: '100px 0' }}>
                <div className="container">
                    <span className="section-subtitle" style={{ display: 'block', textAlign: 'center', marginBottom: '10px' }}>Common Queries</span>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>Frequently Asked Questions</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div className="feature-card" style={{ padding: '30px', height: '100%' }}>
                            <div className="feature-icon"><i className="fas fa-laptop-code"></i></div>
                            <h3>Do you offer online classes?</h3>
                            <p>Yes! All our Academy courses (Web, App, AI) are available both on-campus and online via Zoom with recorded sessions.</p>
                        </div>

                        <div className="feature-card" style={{ padding: '30px', height: '100%' }}>
                            <div className="feature-icon"><i className="fas fa-dollar-sign"></i></div>
                            <h3>How much does a website cost?</h3>
                            <p>It depends on complexity. A simple landing page starts lower, while complex E-commerce sites are quoted based on features.</p>
                        </div>

                        <div className="feature-card" style={{ padding: '30px', height: '100%' }}>
                            <div className="feature-icon"><i className="fas fa-certificate"></i></div>
                            <h3>Do you provide certificates?</h3>
                            <p>Absolutely. Upon completing any course and passing the final project, students receive a verified "Dev Artist Certification".</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
