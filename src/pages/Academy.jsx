import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Academy = () => {
    const [filter, setFilter] = useState('all');

    const handleFilter = (category) => {
        setFilter(category);
    };

    return (
        <div>
            {/* PAGE TITLE HEADER */}
            <div className="page-header">
                <div className="container">
                    <h1>Our Curriculum</h1>
                    <p>From writing your first line of code to building complex AI algorithms. Choose your path below.</p>
                </div>
            </div>

            <div className="container">

                <div className="filter-container">
                    <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilter('all')}>All Courses</button>
                    <button className={`filter-btn ${filter === 'web' ? 'active' : ''}`} onClick={() => handleFilter('web')}>Web Development</button>
                    <button className={`filter-btn ${filter === 'app' ? 'active' : ''}`} onClick={() => handleFilter('app')}>Mobile App</button>
                    <button className={`filter-btn ${filter === 'ai' ? 'active' : ''}`} onClick={() => handleFilter('ai')}>AI & Data</button>
                </div>

                <div className="course-grid">

                    {/* Web Courses */}
                    {(filter === 'all' || filter === 'web') && (
                        <>
                            <div className="course-card cat-web">
                                <div className="card-img"><i className="fas fa-laptop-code"></i></div>
                                <div className="card-content">
                                    <span className="tag tag-web">Web Development</span>
                                    <h3>Frontend Fundamentals</h3>
                                    <p>Start here. Learn HTML5, CSS3, and JavaScript basics to create beautiful, responsive websites.</p>
                                    <div className="course-meta">
                                        <span><i className="far fa-clock"></i> 8 Weeks</span>
                                        <span><i className="fas fa-signal"></i> Beginner</span>
                                    </div>
                                    <Link to="/contact" className="enroll-btn">Enquire Now</Link>
                                </div>
                            </div>

                            <div className="course-card cat-web">
                                <div className="card-img"><i className="fab fa-react"></i></div>
                                <div className="card-content">
                                    <span className="tag tag-web">Web Development</span>
                                    <h3>React JS Mastery</h3>
                                    <p>Build dynamic Single Page Applications (SPAs) used by companies like Facebook and Netflix.</p>
                                    <div className="course-meta">
                                        <span><i className="far fa-clock"></i> 10 Weeks</span>
                                        <span><i className="fas fa-signal"></i> Intermediate</span>
                                    </div>
                                    <Link to="/contact" className="enroll-btn">Enquire Now</Link>
                                </div>
                            </div>

                            <div className="course-card cat-web">
                                <div className="card-img"><i className="fas fa-server"></i></div>
                                <div className="card-content">
                                    <span className="tag tag-web">Web Development</span>
                                    <h3>Full Stack Artist</h3>
                                    <p>Combine frontend design with backend databases (Node.js & MongoDB).</p>
                                    <div className="course-meta">
                                        <span><i className="far fa-clock"></i> 16 Weeks</span>
                                        <span><i className="fas fa-signal"></i> Advanced</span>
                                    </div>
                                    <Link to="/contact" className="enroll-btn">Enquire Now</Link>
                                </div>
                            </div>
                        </>
                    )}

                    {/* App Courses */}
                    {(filter === 'all' || filter === 'app') && (
                        <div className="course-card cat-app">
                            <div className="card-img"><i className="fas fa-mobile-alt"></i></div>
                            <div className="card-content">
                                <span className="tag tag-app">App Development</span>
                                <h3>Flutter & Dart</h3>
                                <p>Google's UI toolkit. Write code once and deploy apps to both iOS and Android.</p>
                                <div className="course-meta">
                                    <span><i className="far fa-clock"></i> 12 Weeks</span>
                                    <span><i className="fas fa-signal"></i> Beginner</span>
                                </div>
                                <Link to="/contact" className="enroll-btn">Enquire Now</Link>
                            </div>
                        </div>
                    )}

                    {/* AI Courses */}
                    {(filter === 'all' || filter === 'ai') && (
                        <>
                            <div className="course-card cat-ai">
                                <div className="card-img"><i className="fab fa-python"></i></div>
                                <div className="card-content">
                                    <span className="tag tag-ai">AI & Data Science</span>
                                    <h3>Python for Everyone</h3>
                                    <p>The language of AI. Learn syntax, logic, data structures, and automation scripts.</p>
                                    <div className="course-meta">
                                        <span><i className="far fa-clock"></i> 6 Weeks</span>
                                        <span><i className="fas fa-signal"></i> Beginner</span>
                                    </div>
                                    <Link to="/contact" className="enroll-btn">Enquire Now</Link>
                                </div>
                            </div>

                            <div className="course-card cat-ai">
                                <div className="card-img"><i className="fas fa-brain"></i></div>
                                <div className="card-content">
                                    <span className="tag tag-ai">AI & Data Science</span>
                                    <h3>Intro to Machine Learning</h3>
                                    <p>Train models to recognize patterns. Covers Pandas, NumPy, and Scikit-Learn.</p>
                                    <div className="course-meta">
                                        <span><i className="far fa-clock"></i> 14 Weeks</span>
                                        <span><i className="fas fa-signal"></i> Advanced</span>
                                    </div>
                                    <Link to="/contact" className="enroll-btn">Enquire Now</Link>
                                </div>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Academy;
