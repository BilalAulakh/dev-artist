import React from 'react';

const About = () => {
    return (
        <div>
            {/* HERO */}
            <div className="page-header" style={{ backgroundImage: "linear-gradient(rgba(10,14,39,0.9), rgba(10,14,39,0.9)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
                <div className="container">
                    <h1>Meet The Visionaries</h1>
                    <p>We are a team of engineers, artists, and educators united by a passion for technology.</p>
                </div>
            </div>

            {/* MISSION */}
            <section className="mission-section">
                <div className="container">
                    <h2>Our Philosophy</h2>
                    <p>"At Dev Artist, we believe that code is modern art. Our mission is to equip the young generation with the tools to paint their future using logic, and to help businesses sculpt their digital presence with precision engineering."</p>
                </div>
            </section>

            {/* TEAM SECTION */}
            <div className="container team-section">

                <div className="section-header">
                    <h2>Executive Leadership</h2>
                    <div className="separator"></div>
                </div>

                <div className="leaders-grid">

                    <div className="profile-card" style={{ width: '320px' }}>
                        <div className="img-container">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Founder" />
                        </div>
                        <div className="info-container">
                            <div className="name">Mr. Ahmed Khan</div>
                            <span className="role role-founder">Founder</span>
                            <div className="qualification">PhD Computer Science</div>
                            <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '15px' }}>The visionary behind Dev Artist. Focused on innovation and long-term academy goals.</p>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="profile-card" style={{ width: '320px' }}>
                        <div className="img-container">
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="CEO" />
                        </div>
                        <div className="info-container">
                            <div className="name">Mr. John Doe</div>
                            <span className="role role-ceo">Chief Executive Officer</span>
                            <div className="qualification">MBA (Harvard)</div>
                            <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '15px' }}>Driving the company's global strategy and ensuring sustainable business growth.</p>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                                <a href="#"><i className="fas fa-envelope"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="profile-card" style={{ width: '320px' }}>
                        <div className="img-container">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="MD" />
                        </div>
                        <div className="info-container">
                            <div className="name">Ms. Sarah Ali</div>
                            <span className="role role-md">Managing Director</span>
                            <div className="qualification">PMP & MS Management</div>
                            <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '15px' }}>Oversees daily operations, client relations, and ensures high-quality project delivery.</p>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                                <a href="#"><i className="fas fa-envelope"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="section-header" style={{ marginTop: '80px' }}>
                    <h2>Expert Instructors & Developers</h2>
                    <div className="separator" style={{ background: 'var(--primary-blue)' }}></div>
                </div>

                <div className="instructors-grid">

                    <div className="profile-card">
                        <div className="img-container">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Instructor" />
                        </div>
                        <div className="info-container">
                            <div className="name">Ali Raza</div>
                            <span className="role role-tech">Senior Web Instructor</span>
                            <div className="qualification">BS Software Engineering</div>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-github"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="profile-card">
                        <div className="img-container">
                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Instructor" />
                        </div>
                        <div className="info-container">
                            <div className="name">Zainab Bibi</div>
                            <span className="role role-design">UI/UX Lead</span>
                            <div className="qualification">Certified Google UX Designer</div>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-dribbble"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="profile-card">
                        <div className="img-container">
                            <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Instructor" />
                        </div>
                        <div className="info-container">
                            <div className="name">Bilal Ahmed</div>
                            <span className="role role-tech">AI & Python Mentor</span>
                            <div className="qualification">MS Data Science</div>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-python"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="profile-card">
                        <div className="img-container">
                            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Instructor" />
                        </div>
                        <div className="info-container">
                            <div className="name">Usman V.</div>
                            <span className="role role-tech">Mobile App Lead</span>
                            <div className="qualification">Flutter Expert</div>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-android"></i></a>
                                <a href="#"><i className="fab fa-apple"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;
