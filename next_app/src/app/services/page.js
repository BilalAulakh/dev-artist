import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Services | Devsinc',
    description: 'Explore our wide range of software development services including Gen AI, Cloud, and Web development.',
};

const Services = () => {
    return (
        <>
            <div className="section-padding" style={{ background: 'var(--bg-light)', marginTop: '90px', textAlign: 'center' }}>
                <div className="container">
                    <span className="section-subtitle">Our Expertise</span>
                    <h1 className="section-title">Software Engineering Services</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-gray)', fontSize: '1.1rem' }}>
                        We help companies accelerate their technology life cycle with our team of over 2,000+ expert engineers.
                    </p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="services-grid">
                    <div className="service-card">
                        <i className="fas fa-laptop-code service-icon"></i>
                        <h3>Custom Software Development</h3>
                        <p>We build robust, scalable, and secure software solutions tailored to your unique business requirements.</p>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-brain service-icon"></i>
                        <h3>Generative AI</h3>
                        <p>Leverage the latest in AI and machine learning to drive innovation and efficiency across your organization.</p>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-mobile-alt service-icon"></i>
                        <h3>App Development</h3>
                        <p>High-quality native and cross-platform mobile applications that provide exceptional user experiences.</p>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-cloud service-icon"></i>
                        <h3>Cloud Ops & Migration</h3>
                        <p>Seamlessly transition to the cloud and optimize your infrastructure for performance and cost.</p>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-shield-alt service-icon"></i>
                        <h3>Cybersecurity</h3>
                        <p>Protect your business from evolving threats with our comprehensive security solutions and audits.</p>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-chart-line service-icon"></i>
                        <h3>Data Analytics</h3>
                        <p>Turn your data into actionable insights with our advanced analytics and business intelligence services.</p>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-sync service-icon"></i>
                        <h3>DevOps & Automation</h3>
                        <p>Streamline your development workflows and improve deployment frequency with our DevOps expertise.</p>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-pencil-ruler service-icon"></i>
                        <h3>UI/UX Design</h3>
                        <p>Create engaging and intuitive digital products with our human-centric design approach.</p>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-vial service-icon"></i>
                        <h3>Quality Assurance</h3>
                        <p>Ensure the highest quality of your software with our rigorous testing and QA processes.</p>
                    </div>
                </div>
            </div>

            {/* CTA SECTION */}
            <div className="section-padding" style={{ backgroundColor: 'var(--bg-dark)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="section-title" style={{ color: 'white' }}>Have a Project in Mind?</h2>
                    <p style={{ marginBottom: '40px', opacity: 0.8 }}>Let's discuss how we can help you achieve your business goals with our expert engineering services.</p>
                    <Link href="/contact" className="btn btn-accent">Get in Touch</Link>
                </div>
            </div>
        </>
    );
};

export default Services;
