import React from 'react';
import Image from 'next/image';
import danishImg from '@/assets/danish-img.jpeg';

export const metadata = {
    title: 'About Us | Dev Artist - Empowering Innovation',
    description: 'Meet the passionate team behind Dev Artist. We are engineers, educators, and innovators committed to shaping the future of technology.',
};

const About = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="about-hero">
                <div className="container">
                    <span className="badge" style={{ marginBottom: '24px' }}>🚀 Our Story</span>
                    <h1 className="about-hero-title">Building the Future,<br /><span className="text-gradient">One Line of Code at a Time</span></h1>
                    <p className="about-hero-description">We are a passionate team of engineers, designers, and educators united by a single mission: to empower the next generation of tech leaders and help businesses thrive in the digital age.</p>
                </div>
                <div className="hero-decoration"></div>
            </div>

            {/* Mission & Vision Section */}
            <section className="mission-vision-section">
                <div className="container">
                    <div className="mission-vision-grid">
                        <div className="mission-card glass">
                            <div className="icon-wrapper" style={{ background: 'var(--gradient-purple)' }}>
                                <i className="fas fa-bullseye" style={{ fontSize: '2rem', color: 'white' }}></i>
                            </div>
                            <h3>Our Mission</h3>
                            <p>To democratize technology education and deliver world-class software solutions that drive innovation and growth for businesses worldwide.</p>
                        </div>
                        <div className="mission-card glass">
                            <div className="icon-wrapper" style={{ background: 'var(--gradient-blue)' }}>
                                <i className="fas fa-eye" style={{ fontSize: '2rem', color: 'white' }}></i>
                            </div>
                            <h3>Our Vision</h3>
                            <p>To become the leading platform where aspiring developers transform into industry experts and where businesses find their perfect technology partner.</p>
                        </div>
                        <div className="mission-card glass">
                            <div className="icon-wrapper" style={{ background: 'var(--gradient-cyber)' }}>
                                <i className="fas fa-heart" style={{ fontSize: '2rem', color: 'white' }}></i>
                            </div>
                            <h3>Our Values</h3>
                            <p>Excellence, Innovation, Integrity, and Continuous Learning. We believe in creating lasting impact through quality education and cutting-edge solutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="about-stats-section">
                <div className="container">
                    <div className="stats-grid-about">
                        <div className="stat-card">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">Years of Excellence</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">1000+</div>
                            <div className="stat-label">Students Trained</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">150+</div>
                            <div className="stat-label">Projects Delivered</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">98%</div>
                            <div className="stat-label">Success Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team Section */}
            <section className="leadership-section">
                <div className="container">
                    <span className="section-subtitle">Meet Our Leaders</span>
                    <h2 className="section-title">Executive Leadership</h2>
                    <p className="section-description">Visionaries driving innovation and excellence in technology education and software development.</p>

                    <div className="leadership-grid">
                        <div className="leader-card">
                            <div className="leader-image-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-darker)' }}>
                                <i className="fas fa-user-tie" style={{ fontSize: '80px', color: 'var(--text-muted)' }}></i>
                                <div className="leader-overlay">
                                    <div className="social-links-leader">
                                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                                        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                        <a href="#" aria-label="Email"><i className="fas fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="leader-info">
                                <h3 className="leader-name">Mr. Ahmed Khan</h3>
                                <span className="leader-role" style={{ color: 'var(--accent-orange)' }}>Founder & Visionary</span>
                                <span className="leader-qualification">PhD Computer Science</span>
                                <p className="leader-bio">The visionary behind Dev Artist with 15+ years of experience in technology education and software development. Passionate about creating opportunities for aspiring developers.</p>
                            </div>
                        </div>

                        <div className="leader-card">
                            <div className="leader-image-wrapper">
                                <Image src={danishImg} alt="CEO" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div className="leader-overlay">
                                    <div className="social-links-leader">
                                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                                        <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                                        <a href="#" aria-label="Email"><i className="fas fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="leader-info">
                                <h3 className="leader-name">Danish Faryad</h3>
                                <span className="leader-role" style={{ color: 'var(--primary-purple)' }}>Chief Executive Officer</span>
                                <span className="leader-qualification">BSCS (Hons) - Mobile App Specialist</span>
                                <p className="leader-bio">Expert in mobile app development with extensive experience in Android, iOS, and Flutter. Transforms app ideas into stunning realities with custom UI designs tailored to your brand.</p>
                            </div>
                        </div>

                        <div className="leader-card">
                            <div className="leader-image-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-darker)' }}>
                                <i className="fas fa-user-tie" style={{ fontSize: '80px', color: 'var(--text-muted)' }}></i>
                                <div className="leader-overlay">
                                    <div className="social-links-leader">
                                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                                        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                        <a href="#" aria-label="Email"><i className="fas fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="leader-info">
                                <h3 className="leader-name">Ms. Sarah Ali</h3>
                                <span className="leader-role" style={{ color: 'var(--accent-pink)' }}>Managing Director</span>
                                <span className="leader-qualification">PMP & MS Management</span>
                                <p className="leader-bio">Oversees daily operations, client relations, and ensures high-quality project delivery. Expert in project management and business development with a proven track record.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expert Team Section */}
            <section className="expert-team-section">
                <div className="container">
                    <span className="section-subtitle">Our Experts</span>
                    <h2 className="section-title">World-Class Instructors & Developers</h2>
                    <p className="section-description">Meet the talented professionals who bring their expertise to every project and classroom.</p>

                    <div className="expert-grid">
                        <div className="expert-card glass">
                            <div className="expert-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-darker)' }}>
                                <i className="fas fa-user" style={{ fontSize: '60px', color: 'var(--text-muted)' }}></i>
                                <div className="expert-badge" style={{ background: 'var(--primary-blue)' }}>
                                    <i className="fas fa-code"></i>
                                </div>
                            </div>
                            <h4 className="expert-name">Ali Raza</h4>
                            <span className="expert-role">Senior Web Instructor</span>
                            <span className="expert-qualification">BS Software Engineering</span>
                            <div className="expert-skills">
                                <span className="skill-tag">React</span>
                                <span className="skill-tag">Node.js</span>
                                <span className="skill-tag">Next.js</span>
                            </div>
                            <div className="expert-social">
                                <a href="#"><i className="fab fa-github"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="expert-card glass">
                            <div className="expert-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-darker)' }}>
                                <i className="fas fa-user" style={{ fontSize: '60px', color: 'var(--text-muted)' }}></i>
                                <div className="expert-badge" style={{ background: 'var(--accent-green)' }}>
                                    <i className="fas fa-palette"></i>
                                </div>
                            </div>
                            <h4 className="expert-name">Zainab Bibi</h4>
                            <span className="expert-role">UI/UX Lead Designer</span>
                            <span className="expert-qualification">Certified Google UX Designer</span>
                            <div className="expert-skills">
                                <span className="skill-tag">Figma</span>
                                <span className="skill-tag">Adobe XD</span>
                                <span className="skill-tag">Design Systems</span>
                            </div>
                            <div className="expert-social">
                                <a href="#"><i className="fab fa-dribbble"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="expert-card glass">
                            <div className="expert-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-darker)' }}>
                                <i className="fas fa-user" style={{ fontSize: '60px', color: 'var(--text-muted)' }}></i>
                                <div className="expert-badge" style={{ background: 'var(--primary-purple)' }}>
                                    <i className="fas fa-brain"></i>
                                </div>
                            </div>
                            <h4 className="expert-name">Bilal Ahmed</h4>
                            <span className="expert-role">AI & Python Mentor</span>
                            <span className="expert-qualification">MS Data Science</span>
                            <div className="expert-skills">
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">TensorFlow</span>
                                <span className="skill-tag">ML</span>
                            </div>
                            <div className="expert-social">
                                <a href="#"><i className="fab fa-python"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="expert-card glass">
                            <div className="expert-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-darker)' }}>
                                <i className="fas fa-user" style={{ fontSize: '60px', color: 'var(--text-muted)' }}></i>
                                <div className="expert-badge" style={{ background: 'var(--accent-cyan)' }}>
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                            </div>
                            <h4 className="expert-name">Usman V.</h4>
                            <span className="expert-role">Mobile App Lead</span>
                            <span className="expert-qualification">Flutter Expert</span>
                            <div className="expert-skills">
                                <span className="skill-tag">Flutter</span>
                                <span className="skill-tag">React Native</span>
                                <span className="skill-tag">iOS/Android</span>
                            </div>
                            <div className="expert-social">
                                <a href="#"><i className="fab fa-android"></i></a>
                                <a href="#"><i className="fab fa-apple"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Start Your Journey?</h2>
                        <p className="cta-description">Join thousands of students and businesses who have transformed their future with Dev Artist.</p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary">Get in Touch</a>
                            <a href="/academy" className="btn btn-outline">Explore Courses</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
