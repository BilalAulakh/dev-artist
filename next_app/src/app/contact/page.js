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
            <div className="page-header" style={{ backgroundImage: "linear-gradient(rgba(10,14,39,0.9), rgba(10,14,39,0.9)), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
                <div className="container">
                    <h1>Get In Touch</h1>
                    <p>Have a question about our courses? Or need a quote for your project? We are just a message away.</p>
                </div>
            </div>

            <div className="container contact-section">
                <div className="contact-page-wrapper">

                    <div className="contact-info">
                        <h2>Contact Info</h2>
                        <p>Visit our campus or reach out via phone. We are open Mon-Sat, 9am - 6pm.</p>

                        <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h4>Address</h4>
                                <p style={{ marginBottom: 0 }}>123 Innovation Avenue,<br />Tech District, City 54000</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <i className="fas fa-phone-alt"></i>
                            <div>
                                <h4>Phone</h4>
                                <p style={{ marginBottom: 0 }}>+1 234 567 890</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h4>Email</h4>
                                <p style={{ marginBottom: 0 }}>info@devartist.com</p>
                            </div>
                        </div>

                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-whatsapp"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>

                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.496924823296!2d74.30236131510257!3d31.4555819813904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919067b84820155%3A0x6b449b925d7629b3!2sArfa%20Software%20Technology%20Park!5e0!3m2!1sen!2s!4v1625574321234!5m2!1sen!2s"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Location">
                            </iframe>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" className="form-control" placeholder="John Doe" required />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" className="form-control" placeholder="john@example.com" required />
                            </div>

                            <div className="form-group">
                                <label>I am interested in:</label>
                                <select className="form-control">
                                    <option>Student Admission (Academy)</option>
                                    <option>Hiring for a Project (Client)</option>
                                    <option>Job Application</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" className="form-control" placeholder="Brief subject of your message" />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="form-control" rows="5" placeholder="Write your message here..." required></textarea>
                            </div>

                            <button type="submit" className="btn-submit">Send Message</button>
                        </form>
                    </div>

                </div>
            </div>

            <div className="container faq-section">
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Frequently Asked Questions</h2>
                <div className="faq-grid">

                    <div className="faq-item">
                        <h3>Do you offer online classes?</h3>
                        <p>Yes! All our Academy courses (Web, App, AI) are available both on-campus and online via Zoom with recorded sessions.</p>
                    </div>

                    <div className="faq-item">
                        <h3>How much does a website cost?</h3>
                        <p>It depends on complexity. A simple landing page starts lower, while complex E-commerce sites are quoted based on features. Contact us for a quote!</p>
                    </div>

                    <div className="faq-item">
                        <h3>Do you provide certificates?</h3>
                        <p>Absolutely. Upon completing any course and passing the final project, students receive a verified "Dev Artist Certification".</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Contact;
