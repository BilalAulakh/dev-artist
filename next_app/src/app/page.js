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
                    <span className="badge" style={{ marginBottom: '24px' }}>🚀 Building at the Speed of Innovation</span>
                    <h1>Empowering the Future<br /><span>Through Code & Creativity</span></h1>
                    <p>We help students, startups, and enterprises accelerate their technology journey with world-class education and cutting-edge development solutions.</p>
                    <div className="hero-buttons">
                        <Link href="#academy" className="btn btn-primary">Explore Academy</Link>
                        <Link href="#contact" className="btn btn-outline">Get in Touch</Link>
                    </div>
                </div>
            </section>

            <section id="academy">
                <div className="container">
                    <span className="section-subtitle">Transform Your Skills</span>
                    <h2 className="section-title">World-Class Tech Education</h2>
                    <p className="section-description">Unlock your potential with industry-leading courses designed by experts. From fundamentals to advanced concepts, we prepare you for the future of technology.</p>
                    <div className="grid-4">
                        <div className="course-card">
                            <i className="fas fa-code course-icon"></i>
                            <h3>Web Development</h3>
                            <p>Master modern web technologies including HTML5, CSS3, JavaScript, React, and Next.js. Build responsive, high-performance applications.</p>
                            <Link href="/contact" style={{ color: 'var(--primary-purple)', fontWeight: 600 }}>Learn More →</Link>
                        </div>
                        <div className="course-card">
                            <i className="fab fa-python course-icon"></i>
                            <h3>Python & AI</h3>
                            <p>Learn Python programming, data science, machine learning, and AI fundamentals. The most in-demand skill in tech today.</p>
                            <Link href="/contact" style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>Learn More →</Link>
                        </div>
                        <div className="course-card">
                            <i className="fas fa-mobile-alt course-icon"></i>
                            <h3>Mobile Development</h3>
                            <p>Create stunning iOS and Android apps using React Native and Flutter. From concept to App Store deployment.</p>
                            <Link href="/contact" style={{ color: 'var(--accent-orange)', fontWeight: 600 }}>Learn More →</Link>
                        </div>
                        <div className="course-card">
                            <i className="fas fa-brain course-icon"></i>
                            <h3>Cloud & DevOps</h3>
                            <p>Master cloud platforms (AWS, Azure), containerization, CI/CD pipelines, and modern infrastructure automation.</p>
                            <Link href="/contact" style={{ color: 'var(--accent-green)', fontWeight: 600 }}>Learn More →</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services">
                <div className="container">
                    <span className="section-subtitle">Our Services</span>
                    <h2 className="section-title">Digital Solutions That Scale</h2>
                    <p className="section-description">From startups to enterprises, we deliver cutting-edge software solutions that drive growth and innovation.</p>

                    <div className="service-row">
                        <div className="service-text">
                            <h3>Custom Software Development</h3>
                            <p>We build enterprise-grade applications tailored to your unique business needs. Our team specializes in scalable architectures, clean code practices, and modern tech stacks including React, Next.js, Node.js, Python, and cloud-native solutions.</p>
                            <Link href="/contact" className="btn btn-primary">Start Your Project</Link>
                        </div>
                        <div className="service-img">
                            <i className="fas fa-laptop-code"></i>
                        </div>
                    </div>

                    <div className="service-row">
                        <div className="service-text">
                            <h3>Mobile App Development</h3>
                            <p>Launch your mobile presence with beautiful, high-performance iOS and Android applications. We create seamless user experiences that engage users and drive conversions using React Native, Flutter, and native technologies.</p>
                            <Link href="/contact" className="btn btn-accent">Discuss Your App</Link>
                        </div>
                        <div className="service-img">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>

                    <div className="service-row">
                        <div className="service-text">
                            <h3>AI & Machine Learning</h3>
                            <p>Transform your business with artificial intelligence. From predictive analytics to natural language processing, we implement AI solutions that automate processes and unlock insights from your data.</p>
                            <Link href="/contact" className="btn btn-primary">Explore AI Solutions</Link>
                        </div>
                        <div className="service-img">
                            <i className="fas fa-brain"></i>
                        </div>
                    </div>
                </div>
            </section>

            <section id="stats">
                <div className="container stats-grid">
                    <div className="stat-item">
                        <h2>1000+</h2>
                        <p>Students Empowered</p>
                    </div>
                    <div className="stat-item">
                        <h2>150+</h2>
                        <p>Projects Delivered</p>
                    </div>
                    <div className="stat-item">
                        <h2>98%</h2>
                        <p>Client Satisfaction</p>
                    </div>
                    <div className="stat-item">
                        <h2>24/7</h2>
                        <p>Support Available</p>
                    </div>
                </div>
            </section>

            <section id="about">
                <div className="container">
                    <span className="section-subtitle">Our Story</span>
                    <h2 className="section-title">Passionate Experts, Proven Results</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto 60px', color: 'var(--text-gray)', fontSize: '1.125rem', lineHeight: '1.8' }}>
                        Dev Artist was founded with a vision to bridge the gap between education and industry. We're a team of senior developers, designers, and educators committed to empowering the next generation of tech leaders while delivering world-class solutions to businesses worldwide.
                    </p>
                    {/* TeamGrid removed as per request to remove other images */}
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <a href="/about" className="btn btn-outline">Meet Our Leadership</a>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="container">
                    <span className="section-subtitle">Let's Connect</span>
                    <h2 className="section-title">Ready to Start Your Journey?</h2>
                    <p className="section-description">Whether you want to learn new skills or build your next big project, we're here to help you succeed.</p>
                    
                    <div className="contact-wrapper">
                        <div className="contact-info">
                            <h3>Get in Touch</h3>
                            <p style={{ color: 'var(--text-gray)', marginBottom: '40px' }}>Have a question or ready to start? Reach out to us through any of these channels.</p>

                            <div className="info-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>123 Innovation Street, Tech City, TC 12345</span>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-phone"></i>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <span>hello@devartist.com</span>
                            </div>
                        </div>

                        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your message has been sent. We will contact you shortly.'); e.target.reset(); }}>
                            <input type="text" placeholder="Your Name *" required />
                            <input type="email" placeholder="Your Email *" required />
                            <select required>
                                <option value="">Select Your Interest</option>
                                <option>Academy Courses</option>
                                <option>Software Development</option>
                                <option>Mobile App Development</option>
                                <option>AI & Machine Learning</option>
                                <option>General Inquiry</option>
                            </select>
                            <textarea rows="5" placeholder="Tell us about your project or goals *" required></textarea>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
