"use client";
import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <>
            {/* VERTICAL SIDE TAB */}
            <div className="side-tab">Let's Talk Business</div>

            {/* HERO SECTION WITH VIDEO */}
            <section id="home">
                <div className="video-background">
                    <video autoPlay muted loop playsInline>
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-metropolis-at-night-with-lots-of-lights-34444-large.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="video-overlay"></div>
                
                <div className="container">
                    <div className="hero-content">
                        <h1 style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                            Building at the Speed<span className="blue-cursor"></span>of AI
                        </h1>
                        <p style={{ fontWeight: 400, color: 'white', fontSize: '1.6rem', letterSpacing: '0.5px', marginBottom: '40px' }}>
                            We help companies across North America, Middle East, Africa and Asia Pacific with technological development
                        </p>
                        
                        <Link href="#" className="btn-teal" style={{ display: 'inline-block' }}>Get in Touch</Link>

                        <div className="featured-in">
                            <h3>Featured In:</h3>
                            <div className="featured-logos-grid">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Forbes_logo.svg/2560px-Forbes_logo.svg.png" alt="Forbes" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Business_Insider_logo.svg/2560px-Business_Insider_logo.svg.png" alt="Business Insider" />
                                <img src="https://www.devsinc.com/assets/images/new-york-weekly.png" alt="New York Weekly" style={{ filter: 'brightness(0) invert(1)' }} />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Mashable_logo.svg/2560px-Mashable_logo.svg.png" alt="Mashable" />
                                <img src="https://www.devsinc.com/assets/images/khaleej-times.png" alt="Khaleej Times" style={{ filter: 'brightness(0) invert(1)' }} />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Yahoo%21_Finance_logo.svg/2560px-Yahoo%21_Finance_logo.svg.png" alt="Yahoo Finance" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LOGO BELT */}
            <div className="logo-belt">
                <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png" alt="IBM" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" alt="Microsoft" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Amazon" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_logo.svg/1200px-Tesla_T_logo.svg.png" height="35" alt="Tesla" />
                </div>
            </div>

            {/* TRANSFORM SECTION */}
            <section className="section-padding">
                <div className="container">
                    <span className="section-subtitle" style={{ color: 'var(--accent-teal)' }}>What we do</span>
                    <h2 className="section-title">Transform Your Business</h2>
                    <div className="transform-grid">
                        <div className="transform-card">
                            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" alt="Gen AI" />
                            <div className="transform-overlay"><h3>Generative AI</h3></div>
                        </div>
                        <div className="transform-card">
                            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" alt="Mobile App" />
                            <div className="transform-overlay"><h3>Mobile App Development</h3></div>
                        </div>
                        <div className="transform-card">
                            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" alt="Cybersecurity" />
                            <div className="transform-overlay"><h3>Cybersecurity</h3></div>
                        </div>
                        <div className="transform-card">
                            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" alt="Cloud" />
                            <div className="transform-overlay"><h3>Cloud Operations</h3></div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <Link href="/services" className="btn-talk" style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Browse All &rarr;</Link>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES IMPACT */}
            <section className="section-padding" style={{ backgroundColor: '#fdfdfd' }}>
                <div className="container">
                    <h2 className="section-title" style={{ fontSize: '3rem' }}>Discover our Impact Across Industries</h2>
                    <div className="industry-list">
                        <div className="industry-item"><i className="fas fa-plane-departure"></i> Travel & Hospitality</div>
                        <div className="industry-item"><i className="fas fa-university"></i> Public Sector</div>
                        <div className="industry-item"><i className="fas fa-broadcast-tower"></i> Telecommunication</div>
                        <div className="industry-item"><i className="fas fa-shopping-bag"></i> Retail & CPG</div>
                        <div className="industry-item"><i className="fas fa-wallet"></i> Banking & Fintech</div>
                        <div className="industry-item"><i className="fas fa-heartbeat"></i> Healthcare</div>
                        <div className="industry-item"><i className="fas fa-gas-pump"></i> Oil, Gas, and Energy</div>
                        <div className="industry-item"><i className="fas fa-gamepad"></i> Gaming</div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Link href="/industries" className="btn btn-teal">See All Industries</Link>
                    </div>
                </div>
            </section>

            {/* AWARDS & PARTNERSHIPS */}
            <section className="section-padding" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 className="section-title">Awards and Certifications</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '40px' }}>
                        {/* Placeholder for badges */}
                        <img src="https://www.devsinc.com/assets/images/clutch-badge.png" height="80" alt="Award" />
                        <img src="https://www.devsinc.com/assets/images/goodfirms-badge.png" height="80" alt="Award" />
                        <img src="https://www.devsinc.com/assets/images/top-developers.png" height="80" alt="Award" />
                    </div>
                    <h2 className="section-title" style={{ marginTop: '100px' }}>Our Partnerships</h2>
                    <div className="logo-belt" style={{ border: 'none' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png" height="50" alt="Salesforce" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" height="50" alt="AWS" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" height="50" alt="Microsoft" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Cloud_Logo.svg/2560px-Google_Cloud_Logo.svg.png" height="50" alt="Google Cloud" />
                    </div>
                </div>
            </section>

            {/* BENTO STORIES */}
            <section className="section-padding">
                <div className="container">
                    <div className="bento-section">
                        <div>
                            <span className="section-subtitle" style={{ textAlign: 'left', color: 'var(--accent-teal)' }}>Case Studies</span>
                            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '3rem' }}>Stories of our transformations across Services and Industries</h2>
                            <p style={{ color: 'var(--text-gray)', fontSize: '1.2rem', marginBottom: '40px' }}>From concept to completion, see how we help our clients succeed.</p>
                            <Link href="#" className="btn btn-teal">See All Stories</Link>
                        </div>
                        <div className="project-bento">
                            <div className="bento-item bento-1"><img src="https://images.unsplash.com/photo-1551288049-bbbda595c7b8?auto=format&fit=crop&w=600&q=80" alt="Project" /></div>
                            <div className="bento-item"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" alt="Project" /></div>
                            <div className="bento-item"><img src="https://images.unsplash.com/photo-1504868584819-f8eec04216ef?auto=format&fit=crop&w=600&q=80" alt="Project" /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ACHIEVEMENTS */}
            <section className="achieve-section">
                <div className="container">
                    <div className="bento-section">
                        <div>
                            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '3.5rem' }}>Devsinc's Achievements</h2>
                            <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', marginBottom: '30px' }}>Unlocking potential across the globe with our dedicated engineering teams.</p>
                            <Link href="#" className="btn btn-teal">Join Us Now</Link>
                        </div>
                        <div className="achievements-grid">
                            <div className="achieve-item"><h2>3,000+</h2><p>Successful Projects</p></div>
                            <div className="achieve-item"><h2>23+</h2><p>Countries Supported</p></div>
                            <div className="achieve-item"><h2>250+</h2><p>Active Clients</p></div>
                            <div className="achieve-item"><h2>15+</h2><p>Years Experience</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FULL WIDTH IMAGE */}
            <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" alt="Team Meeting" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* LEADERSHIP */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'left', fontSize: '3rem' }}>Our Global Leadership</h2>
                    <div className="transform-grid" style={{ marginTop: '60px' }}>
                        <div className="leader-card">
                            <div className="leader-img"><img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" alt="Leader" /></div>
                            <div className="leader-name">Usman Asif</div>
                            <div className="leader-role">Founder & CEO</div>
                        </div>
                        <div className="leader-card">
                            <div className="leader-img"><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="Leader" /></div>
                            <div className="leader-name">Maria Sadaf</div>
                            <div className="leader-role">Chief of Staff</div>
                        </div>
                        <div className="leader-card">
                            <div className="leader-img"><img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80" alt="Leader" /></div>
                            <div className="leader-name">Badar Shafiq</div>
                            <div className="leader-role">Chief Delivery Officer</div>
                        </div>
                        <div className="leader-card">
                            <div className="leader-img"><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80" alt="Leader" /></div>
                            <div className="leader-name">Hamza Malik</div>
                            <div className="leader-role">Head of Global Sales</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTEGRATED CONTACT SECTION */}
            <section className="section-padding" style={{ background: 'white' }}>
                <div className="container">
                    <div className="contact-integrated">
                        <div className="contact-form-container" style={{ background: '#f8f9fa', padding: '50px', borderRadius: '30px' }}>
                            <h2 style={{ marginBottom: '30px', fontSize: '2.5rem' }}>Get in Touch</h2>
                            <form>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <input type="text" placeholder="First Name" className="form-control" style={{ padding: '15px' }} />
                                    <input type="text" placeholder="Last Name" className="form-control" style={{ padding: '15px' }} />
                                </div>
                                <input type="email" placeholder="Work Email" className="form-control" style={{ padding: '15px', marginTop: '20px', width: '100%' }} />
                                <select className="form-control" style={{ padding: '15px', marginTop: '20px', width: '100%' }}>
                                    <option>Interested In</option>
                                    <option>Staff Augmentation</option>
                                    <option>Custom Software</option>
                                </select>
                                <textarea rows="5" placeholder="Message" className="form-control" style={{ padding: '15px', marginTop: '20px', width: '100%' }}></textarea>
                                <button type="submit" className="btn btn-teal" style={{ width: '100%', marginTop: '30px', padding: '18px' }}>Send Message</button>
                            </form>
                        </div>
                        <div className="contact-sidebar">
                            <div className="sidebar-item">
                                <h3><i className="fas fa-globe"></i> Global Presence</h3>
                                <p>We're across 5 continents, explore our office nearest to you.</p>
                                <Link href="#" className="btn-sidebar">See Locations</Link>
                            </div>
                            <div className="sidebar-item">
                                <h3><i className="fas fa-users"></i> Global Leaders</h3>
                                <p>Unlocking potential across the globe with our dedicated engineering teams.</p>
                                <Link href="#" className="btn-sidebar">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .blue-cursor {
                    background-color: var(--primary-blue);
                    width: 12px;
                    height: 1.1em;
                    display: inline-block;
                    margin: 0 15px;
                }
                .featured-logos-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    max-width: 500px;
                }
                .featured-logos-grid img {
                    height: 22px;
                    object-fit: contain;
                    filter: brightness(0) invert(1);
                }
                .form-control {
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    background: white;
                }
            `}</style>
        </>
    );
};

export default Home;
