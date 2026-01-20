import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Our Services | Dev Artist - Digital Solutions That Scale',
    description: 'Transform your business with our expert web development, mobile apps, AI solutions, and cloud services. Trusted by 150+ clients worldwide.',
};

const Services = () => {
    const services = [
        {
            id: 1,
            icon: 'fas fa-laptop-code',
            title: 'Web Development',
            tagline: 'Build Your Digital Presence',
            description: 'Create stunning, high-performance websites that convert visitors into customers. From corporate sites to complex web applications.',
            color: 'var(--primary-purple)',
            gradient: 'var(--gradient-purple)',
            features: [
                { icon: 'fas fa-check-circle', title: 'Corporate Websites', desc: 'Professional branding and landing pages that make an impact' },
                { icon: 'fas fa-check-circle', title: 'E-Commerce Solutions', desc: 'Custom Shopify, WooCommerce, or headless commerce platforms' },
                { icon: 'fas fa-check-circle', title: 'SaaS Platforms', desc: 'Scalable cloud-based software with React, Next.js, and Node.js' },
                { icon: 'fas fa-check-circle', title: 'API Integration', desc: 'Seamless connections to payment gateways, CRMs, and third-party services' },
            ],
            technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: 2,
            icon: 'fas fa-mobile-alt',
            title: 'Mobile App Development',
            tagline: 'Reach Customers Everywhere',
            description: 'Build beautiful, native mobile applications for iOS and Android. Deliver exceptional user experiences that keep users engaged.',
            color: 'var(--primary-blue)',
            gradient: 'var(--gradient-blue)',
            features: [
                { icon: 'fas fa-mobile-alt', title: 'Cross-Platform Apps', desc: 'Flutter & React Native - one codebase for iOS and Android' },
                { icon: 'fas fa-mobile-alt', title: 'Native Development', desc: 'Swift (iOS) and Kotlin (Android) for maximum performance' },
                { icon: 'fas fa-mobile-alt', title: 'UI/UX Design', desc: 'Intuitive interfaces designed for user retention and engagement' },
                { icon: 'fas fa-mobile-alt', title: 'App Maintenance', desc: 'Regular updates, bug fixes, and feature enhancements' },
            ],
            technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: 3,
            icon: 'fas fa-brain',
            title: 'AI & Machine Learning',
            tagline: 'Automate & Innovate',
            description: 'Harness the power of artificial intelligence to automate processes, gain insights, and make data-driven decisions.',
            color: 'var(--accent-green)',
            gradient: 'linear-gradient(135deg, var(--accent-green), var(--accent-cyan))',
            features: [
                { icon: 'fas fa-robot', title: 'AI Chatbots', desc: 'Intelligent customer service agents powered by NLP and GPT' },
                { icon: 'fas fa-robot', title: 'Data Analytics', desc: 'Python-based dashboards to visualize trends and insights' },
                { icon: 'fas fa-robot', title: 'Process Automation', desc: 'Automate repetitive tasks to save time and reduce errors' },
                { icon: 'fas fa-robot', title: 'ML Models', desc: 'Custom machine learning algorithms tailored to your data' },
            ],
            technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI'],
            image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: 4,
            icon: 'fas fa-cloud',
            title: 'Cloud & DevOps',
            tagline: 'Scale with Confidence',
            description: 'Deploy, manage, and scale your applications with modern cloud infrastructure and DevOps best practices.',
            color: 'var(--accent-cyan)',
            gradient: 'linear-gradient(135deg, var(--accent-cyan), var(--primary-blue))',
            features: [
                { icon: 'fas fa-server', title: 'Cloud Migration', desc: 'Seamless migration to AWS, Azure, or Google Cloud Platform' },
                { icon: 'fas fa-server', title: 'CI/CD Pipelines', desc: 'Automated deployment pipelines for faster releases' },
                { icon: 'fas fa-server', title: 'Infrastructure as Code', desc: 'Terraform and Kubernetes for scalable infrastructure' },
                { icon: 'fas fa-server', title: 'Monitoring & Support', desc: '24/7 monitoring, logging, and performance optimization' },
            ],
            technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
    ];

    const testimonials = [
        {
            name: 'James Carter',
            role: 'CEO, StyleWear Co.',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            rating: 5,
            text: 'Dev Artist transformed our local retail shop into a fully functional e-commerce brand. The design is sleek, and sales have increased by 40% in the first month.'
        },
        {
            name: 'Dr. Sarah Lin',
            role: 'Founder, MedTech',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            rating: 4.5,
            text: 'We needed a complex booking app for our clinic. The team understood the logic perfectly and delivered a Flutter app that works seamlessly on both platforms.'
        },
        {
            name: 'Michael Ross',
            role: 'Operations Manager',
            image: 'https://randomuser.me/api/portraits/men/85.jpg',
            rating: 5,
            text: 'The AI automation script they wrote for our inventory management saved us 20 hours a week of manual data entry. Worth every penny.'
        },
    ];

    const stats = [
        { number: '150+', label: 'Projects Delivered', icon: 'fas fa-project-diagram' },
        { number: '98%', label: 'Client Satisfaction', icon: 'fas fa-smile' },
        { number: '50+', label: 'Expert Developers', icon: 'fas fa-users' },
        { number: '24/7', label: 'Support Available', icon: 'fas fa-headset' },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="services-hero">
                <div className="container">
                    <span className="badge" style={{ marginBottom: '24px' }}>💼 Our Expertise</span>
                    <h1 className="services-hero-title">Digital Solutions That<br /><span className="text-gradient">Drive Real Results</span></h1>
                    <p className="services-hero-description">From startups to enterprises, we deliver cutting-edge technology solutions that transform businesses and accelerate growth.</p>
                    <div className="services-stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="services-stat-card glass">
                                <i className={stat.icon}></i>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <section className="services-showcase-section">
                <div className="container">
                    <span className="section-subtitle">What We Offer</span>
                    <h2 className="section-title">Comprehensive Technology Services</h2>
                    <p className="section-description">End-to-end solutions designed to help your business thrive in the digital age.</p>

                    <div className="services-showcase-grid">
                        {services.map((service, index) => (
                            <div key={service.id} className={`service-showcase-card glass ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="service-showcase-content">
                                    <div className="service-icon-wrapper" style={{ background: service.gradient }}>
                                        <i className={service.icon}></i>
                                    </div>
                                    <span className="service-tagline" style={{ color: service.color }}>{service.tagline}</span>
                                    <h3 className="service-showcase-title">{service.title}</h3>
                                    <p className="service-showcase-desc">{service.description}</p>

                                    <div className="service-features-list">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="service-feature-item">
                                                <i className={feature.icon} style={{ color: service.color }}></i>
                                                <div>
                                                    <strong>{feature.title}</strong>
                                                    <p>{feature.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="service-technologies">
                                        <span className="tech-label">Technologies:</span>
                                        <div className="tech-tags">
                                            {service.technologies.map((tech, idx) => (
                                                <span key={idx} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <Link href="/contact" className="service-cta-btn" style={{ background: service.gradient }}>
                                        Get Started <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                                <div className="service-showcase-image" style={{ backgroundImage: `url(${service.image})` }}>
                                    <div className="image-overlay"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <span className="section-subtitle">Client Success Stories</span>
                    <h2 className="section-title">Trusted by Industry Leaders</h2>
                    <p className="section-description">See what our clients have to say about working with Dev Artist.</p>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card glass">
                                <i className="fas fa-quote-right quote-icon"></i>
                                <div className="stars">
                                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                                        <i key={i} className="fas fa-star"></i>
                                    ))}
                                    {testimonial.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                                </div>
                                <p className="testimonial-text">{testimonial.text}</p>
                                <div className="testimonial-author">
                                    <img src={testimonial.image} alt={testimonial.name} className="author-avatar" />
                                    <div className="author-info">
                                        <h4>{testimonial.name}</h4>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Transform Your Business?</h2>
                        <p className="cta-description">Let's discuss how we can help you achieve your goals with cutting-edge technology solutions.</p>
                        <div className="cta-buttons">
                            <Link href="/contact" className="btn btn-primary">Start Your Project</Link>
                            <Link href="/about" className="btn btn-outline">Meet Our Team</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
