import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <div className="page-header">
                <div className="container">
                    <h1>We Engineer Success</h1>
                    <p>From startups to enterprise solutions. Explore our full range of technical services designed to scale your business.</p>
                </div>
            </div>

            <div className="container services-section">
                <div className="service-category">
                    <div className="service-content">
                        <h2 style={{ color: 'var(--primary-blue)' }}>Web Development</h2>
                        <p style={{ color: 'var(--text-gray)' }}>We don't just build websites; we build digital experiences. Our code is clean, SEO-friendly, and optimized for speed.</p>
                        <ul className="service-list">
                            <li><i className="fas fa-check-circle"></i> <strong>Corporate Websites:</strong> Professional branding and landing pages.</li>
                            <li><i className="fas fa-check-circle"></i> <strong>E-Commerce Stores:</strong> Custom Shopify, WooCommerce, or Magento solutions.</li>
                            <li><i className="fas fa-check-circle"></i> <strong>SaaS Platforms:</strong> Complex cloud-based software built with React/Vue and Node.js.</li>
                            <li><i className="fas fa-check-circle"></i> <strong>API Integration:</strong> Connecting your site to payment gateways and CRMs.</li>
                        </ul>
                        <Link to="/contact" className="cta-btn">Request Quote</Link>
                    </div>
                    <div className="service-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                </div>

                <div className="service-category">
                    <div className="service-content">
                        <h2 style={{ color: 'var(--accent-orange)' }}>Mobile App Development</h2>
                        <p style={{ color: 'var(--text-gray)' }}>Reach your customers directly in their pockets. We build intuitive, high-performance apps for iOS and Android.</p>
                        <ul className="service-list">
                            <li><i className="fas fa-mobile-alt"></i> <strong>Cross-Platform (Flutter):</strong> One codebase for both iPhone and Android. Cost-effective and fast.</li>
                            <li><i className="fas fa-mobile-alt"></i> <strong>Native Development:</strong> Swift (iOS) and Kotlin (Android) for maximum performance.</li>
                            <li><i className="fas fa-mobile-alt"></i> <strong>UI/UX Design:</strong> App interfaces designed for user retention and engagement.</li>
                            <li><i className="fas fa-mobile-alt"></i> <strong>App Maintenance:</strong> Regular updates, bug fixes, and feature additions.</li>
                        </ul>
                        <Link to="/contact" className="cta-btn">Let's Build an App</Link>
                    </div>
                    <div className="service-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                </div>

                <div className="service-category">
                    <div className="service-content">
                        <h2 style={{ color: 'var(--accent-green)' }}>AI & Automation Solutions</h2>
                        <p style={{ color: 'var(--text-gray)' }}>Leverage the power of Artificial Intelligence to automate tasks and gain data insights.</p>
                        <ul className="service-list">
                            <li><i className="fas fa-robot"></i> <strong>Chatbots:</strong> Smart customer service agents powered by NLP.</li>
                            <li><i className="fas fa-robot"></i> <strong>Data Analysis:</strong> Python-based dashboards to visualize business trends.</li>
                            <li><i className="fas fa-robot"></i> <strong>Process Automation:</strong> Automate repetitive office tasks to save time.</li>
                            <li><i className="fas fa-robot"></i> <strong>Machine Learning Models:</strong> Custom algorithms tailored to your data.</li>
                        </ul>
                        <Link to="/contact" className="cta-btn">Automate Your Business</Link>
                    </div>
                    <div className="service-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
                </div>
            </div>

            <div className="reviews-section">
                <div className="container">
                    <h2 className="section-title">Client <span>Success Stories</span></h2>

                    <div className="reviews-grid">

                        <div className="review-card">
                            <i className="fas fa-quote-right quote-icon"></i>
                            <div className="stars">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <p className="review-text">"Dev Artist transformed our local retail shop into a fully functional e-commerce brand. The design is sleek, and sales have increased by 40% in the first month."</p>
                            <div className="client-info">
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="client-avatar" />
                                <div className="client-details">
                                    <h4>James Carter</h4>
                                    <span>CEO, StyleWear Co.</span>
                                </div>
                            </div>
                        </div>

                        <div className="review-card">
                            <i className="fas fa-quote-right quote-icon"></i>
                            <div className="stars">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
                            </div>
                            <p className="review-text">"We needed a complex booking app for our clinic. The team at Dev Artist understood the logic perfectly and delivered a Flutter app that works seamlessly on both iOS and Android."</p>
                            <div className="client-info">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" className="client-avatar" />
                                <div className="client-details">
                                    <h4>Dr. Sarah Lin</h4>
                                    <span>Founder, MedTech</span>
                                </div>
                            </div>
                        </div>

                        <div className="review-card">
                            <i className="fas fa-quote-right quote-icon"></i>
                            <div className="stars">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <p className="review-text">"The AI automation script they wrote for our inventory management saved us 20 hours a week of manual data entry. Worth every penny."</p>
                            <div className="client-info">
                                <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Client" className="client-avatar" />
                                <div className="client-details">
                                    <h4>Michael Ross</h4>
                                    <span>Operations Manager</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
