"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Academy = () => {
    const [filter, setFilter] = useState('all');

    const handleFilter = (category) => {
        setFilter(category);
    };

    const courses = [
        { 
            category: 'web', 
            icon: 'fas fa-laptop-code', 
            tagClass: 'tag-web', 
            tagName: 'Web Development', 
            title: 'Frontend Fundamentals', 
            desc: 'Master HTML5, CSS3, and JavaScript to create beautiful, responsive websites. Learn modern design principles and best practices.', 
            duration: '8 Weeks', 
            level: 'Beginner',
            students: '500+',
            rating: '4.8',
            price: 'PKR 15,000',
            bgClass: 'cat-web' 
        },
        { 
            category: 'web', 
            icon: 'fab fa-react', 
            tagClass: 'tag-web', 
            tagName: 'Web Development', 
            title: 'React JS Mastery', 
            desc: 'Build dynamic Single Page Applications (SPAs) using React. Learn hooks, state management, and modern React patterns.', 
            duration: '10 Weeks', 
            level: 'Intermediate',
            students: '350+',
            rating: '4.9',
            price: 'PKR 20,000',
            bgClass: 'cat-web' 
        },
        { 
            category: 'web', 
            icon: 'fas fa-server', 
            tagClass: 'tag-web', 
            tagName: 'Web Development', 
            title: 'Full Stack Development', 
            desc: 'Become a complete developer. Master frontend, backend, databases (Node.js, Express, MongoDB) and deployment.', 
            duration: '16 Weeks', 
            level: 'Advanced',
            students: '200+',
            rating: '4.9',
            price: 'PKR 35,000',
            bgClass: 'cat-web' 
        },
        { 
            category: 'app', 
            icon: 'fas fa-mobile-alt', 
            tagClass: 'tag-app', 
            tagName: 'Mobile Development', 
            title: 'Flutter & Dart', 
            desc: 'Build beautiful native apps for iOS and Android from a single codebase. Learn Google\'s powerful UI toolkit.', 
            duration: '12 Weeks', 
            level: 'Intermediate',
            students: '300+',
            rating: '4.7',
            price: 'PKR 25,000',
            bgClass: 'cat-app' 
        },
        { 
            category: 'app', 
            icon: 'fab fa-react', 
            tagClass: 'tag-app', 
            tagName: 'Mobile Development', 
            title: 'React Native', 
            desc: 'Create cross-platform mobile apps using React. Build once, deploy to iOS and Android with native performance.', 
            duration: '10 Weeks', 
            level: 'Intermediate',
            students: '250+',
            rating: '4.6',
            price: 'PKR 22,000',
            bgClass: 'cat-app' 
        },
        { 
            category: 'ai', 
            icon: 'fab fa-python', 
            tagClass: 'tag-ai', 
            tagName: 'AI & Data Science', 
            title: 'Python Programming', 
            desc: 'Learn the world\'s most popular programming language. Master syntax, data structures, OOP, and automation.', 
            duration: '8 Weeks', 
            level: 'Beginner',
            students: '600+',
            rating: '4.8',
            price: 'PKR 18,000',
            bgClass: 'cat-ai' 
        },
        { 
            category: 'ai', 
            icon: 'fas fa-brain', 
            tagClass: 'tag-ai', 
            tagName: 'AI & Data Science', 
            title: 'Machine Learning', 
            desc: 'Train AI models to recognize patterns and make predictions. Learn Pandas, NumPy, Scikit-Learn, and TensorFlow.', 
            duration: '14 Weeks', 
            level: 'Advanced',
            students: '180+',
            rating: '4.9',
            price: 'PKR 40,000',
            bgClass: 'cat-ai' 
        },
        { 
            category: 'ai', 
            icon: 'fas fa-chart-line', 
            tagClass: 'tag-ai', 
            tagName: 'AI & Data Science', 
            title: 'Data Analytics', 
            desc: 'Transform raw data into actionable insights. Master data visualization, statistical analysis, and business intelligence.', 
            duration: '10 Weeks', 
            level: 'Intermediate',
            students: '220+',
            rating: '4.7',
            price: 'PKR 28,000',
            bgClass: 'cat-ai' 
        },
        { 
            category: 'cloud', 
            icon: 'fas fa-cloud', 
            tagClass: 'tag-cloud', 
            tagName: 'Cloud & DevOps', 
            title: 'AWS Cloud Practitioner', 
            desc: 'Master Amazon Web Services. Learn cloud computing, deployment, scaling, and infrastructure management.', 
            duration: '8 Weeks', 
            level: 'Intermediate',
            students: '150+',
            rating: '4.8',
            price: 'PKR 30,000',
            bgClass: 'cat-cloud' 
        },
    ];

    const filteredCourses = filter === 'all' ? courses : courses.filter(c => c.category === filter);

    const stats = [
        { icon: 'fas fa-users', number: '1000+', label: 'Active Students' },
        { icon: 'fas fa-book', number: '15+', label: 'Expert Courses' },
        { icon: 'fas fa-certificate', number: '800+', label: 'Certificates Issued' },
        { icon: 'fas fa-star', number: '4.8', label: 'Average Rating' },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="academy-hero">
                <div className="container">
                    <span className="badge" style={{ marginBottom: '24px' }}>🎓 Transform Your Future</span>
                    <h1 className="academy-hero-title">Master the Skills That<br /><span className="text-gradient">Shape Tomorrow</span></h1>
                    <p className="academy-hero-description">From your first line of code to building AI-powered applications. Choose from our expert-led courses designed to take you from beginner to professional.</p>
                    <div className="hero-stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="hero-stat-item">
                                <i className={stat.icon}></i>
                                <div className="hero-stat-number">{stat.number}</div>
                                <div className="hero-stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <section className="why-choose-section">
                <div className="container">
                    <span className="section-subtitle">Why Dev Artist Academy?</span>
                    <h2 className="section-title">Learn From Industry Experts</h2>
                    <div className="features-grid">
                        <div className="feature-card glass">
                            <div className="feature-icon" style={{ background: 'var(--gradient-purple)' }}>
                                <i className="fas fa-chalkboard-teacher"></i>
                            </div>
                            <h3>Expert Instructors</h3>
                            <p>Learn from professionals with 10+ years of industry experience</p>
                        </div>
                        <div className="feature-card glass">
                            <div className="feature-icon" style={{ background: 'var(--gradient-blue)' }}>
                                <i className="fas fa-project-diagram"></i>
                            </div>
                            <h3>Real Projects</h3>
                            <p>Build portfolio-worthy projects that impress employers</p>
                        </div>
                        <div className="feature-card glass">
                            <div className="feature-icon" style={{ background: 'var(--gradient-cyber)' }}>
                                <i className="fas fa-headset"></i>
                            </div>
                            <h3>Lifetime Support</h3>
                            <p>Get help whenever you need it, even after course completion</p>
                        </div>
                        <div className="feature-card glass">
                            <div className="feature-icon" style={{ background: 'linear-gradient(135deg, var(--accent-orange), var(--accent-pink))' }}>
                                <i className="fas fa-certificate"></i>
                            </div>
                            <h3>Certification</h3>
                            <p>Earn industry-recognized certificates to boost your career</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="courses-section">
                <div className="container">
                    <span className="section-subtitle">Our Courses</span>
                    <h2 className="section-title">Choose Your Learning Path</h2>
                    <p className="section-description">Explore our comprehensive curriculum designed to take you from beginner to expert in your chosen field.</p>

                    {/* Filter Buttons */}
                    <div className="filter-container-modern">
                        <button
                            className={`filter-btn-modern ${filter === 'all' ? 'active' : ''}`}
                            onClick={() => handleFilter('all')}>
                            <i className="fas fa-th"></i> All Courses
                        </button>
                        <button
                            className={`filter-btn-modern ${filter === 'web' ? 'active' : ''}`}
                            onClick={() => handleFilter('web')}>
                            <i className="fas fa-code"></i> Web Development
                        </button>
                        <button
                            className={`filter-btn-modern ${filter === 'app' ? 'active' : ''}`}
                            onClick={() => handleFilter('app')}>
                            <i className="fas fa-mobile-alt"></i> Mobile Apps
                        </button>
                        <button
                            className={`filter-btn-modern ${filter === 'ai' ? 'active' : ''}`}
                            onClick={() => handleFilter('ai')}>
                            <i className="fas fa-brain"></i> AI & Data
                        </button>
                        <button
                            className={`filter-btn-modern ${filter === 'cloud' ? 'active' : ''}`}
                            onClick={() => handleFilter('cloud')}>
                            <i className="fas fa-cloud"></i> Cloud & DevOps
                        </button>
                    </div>

                    {/* Course Cards */}
                    <div className="academy-course-grid">
                        {filteredCourses.map((course, index) => (
                            <div key={index} className={`academy-course-card glass`}>
                                <div className="course-card-header">
                                    <div className={`course-icon-large ${course.bgClass}`}>
                                        <i className={course.icon}></i>
                                    </div>
                                    <span className={`course-tag ${course.tagClass}`}>{course.tagName}</span>
                                </div>
                                <div className="course-card-body">
                                    <h3 className="course-card-title">{course.title}</h3>
                                    <p className="course-card-desc">{course.desc}</p>
                                    
                                    <div className="course-stats-row">
                                        <div className="course-stat">
                                            <i className="far fa-clock"></i>
                                            <span>{course.duration}</span>
                                        </div>
                                        <div className="course-stat">
                                            <i className="fas fa-signal"></i>
                                            <span>{course.level}</span>
                                        </div>
                                    </div>

                                    <div className="course-stats-row">
                                        <div className="course-stat">
                                            <i className="fas fa-users"></i>
                                            <span>{course.students}</span>
                                        </div>
                                        <div className="course-stat">
                                            <i className="fas fa-star" style={{ color: '#f59e0b' }}></i>
                                            <span>{course.rating}</span>
                                        </div>
                                    </div>

                                    <div className="course-price-row">
                                        <span className="course-price">{course.price}</span>
                                        <Link href="/contact" className="enroll-btn-modern">
                                            Enroll Now <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="academy-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Start Learning?</h2>
                        <p className="cta-description">Join thousands of students who have transformed their careers with Dev Artist Academy.</p>
                        <div className="cta-buttons">
                            <Link href="/contact" className="btn btn-primary">Enroll Today</Link>
                            <Link href="/about" className="btn btn-outline">Meet Our Instructors</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Academy;
