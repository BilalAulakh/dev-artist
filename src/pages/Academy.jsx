import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Academy = () => {
    const [filter, setFilter] = useState('all');

    const handleFilter = (category) => {
        setFilter(category);
        
    };


    const courses = [
        { category: 'web', icon: 'fas fa-laptop-code', tagClass: 'tag-web', tagName: 'Web Development', title: 'Frontend Fundamentals', desc: 'Start here. Learn HTML5, CSS3, and JavaScript basics to create beautiful, responsive websites.', duration: '8 Weeks', level: 'Beginner', bgClass: 'cat-web' },
        { category: 'web', icon: 'fab fa-react', tagClass: 'tag-web', tagName: 'Web Development', title: 'React JS Mastery', desc: 'Build dynamic Single Page Applications (SPAs) used by companies like Facebook and Netflix.', duration: '10 Weeks', level: 'Intermediate', bgClass: 'cat-web' },
        { category: 'app', icon: 'fas fa-mobile-alt', tagClass: 'tag-app', tagName: 'App Development', title: 'Flutter & Dart', desc: 'Google\'s UI toolkit. Write code once and deploy apps to both iOS and Android.', duration: '12 Weeks', level: 'Beginner', bgClass: 'cat-app' },
        { category: 'ai', icon: 'fab fa-python', tagClass: 'tag-ai', tagName: 'AI & Data Science', title: 'Python for Everyone', desc: 'The language of AI. Learn syntax, logic, data structures, and automation scripts.', duration: '6 Weeks', level: 'Beginner', bgClass: 'cat-ai' },
        { category: 'ai', icon: 'fas fa-brain', tagClass: 'tag-ai', tagName: 'AI & Data Science', title: 'Intro to Machine Learning', desc: 'Train models to recognize patterns. Covers Pandas, NumPy, and Scikit-Learn.', duration: '14 Weeks', level: 'Advanced', bgClass: 'cat-ai' },
        { category: 'web', icon: 'fas fa-server', tagClass: 'tag-web', tagName: 'Web Development', title: 'Full Stack Artist', desc: 'Combine frontend design with backend databases (Node.js & MongoDB).', duration: '16 Weeks', level: 'Advanced', bgClass: 'cat-web' },
    ];

    const filteredCourses = filter === 'all' ? courses : courses.filter(c => c.category === filter);

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1>Our Curriculum</h1>
                    <p>From writing your first line of code to building complex AI algorithms. Choose your path below.</p>
                </div>
            </div>

            <div className="container">

                <div className="filter-container">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => handleFilter('all')}>All Courses</button>
                    <button
                        className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
                        onClick={() => handleFilter('web')}>Web Development</button>
                    <button
                        className={`filter-btn ${filter === 'app' ? 'active' : ''}`}
                        onClick={() => handleFilter('app')}>Mobile App</button>
                    <button
                        className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
                        onClick={() => handleFilter('ai')}>AI & Data</button>
                </div>

                <div className="course-grid">
                    {filteredCourses.map((course, index) => (
                        <div key={index} className={`course-card ${course.bgClass}`}>
                            <div className="card-img"><i className={course.icon}></i></div>
                            <div className="card-content">
                                <span className={`tag ${course.tagClass}`}>{course.tagName}</span>
                                <h3>{course.title}</h3>
                                <p>{course.desc}</p>
                                <div className="course-meta">
                                    <span><i className="far fa-clock"></i> {course.duration}</span>
                                    <span><i className="fas fa-signal"></i> {course.level}</span>
                                </div>
                                <Link to="/contact" className="enroll-btn">Enquire Now</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Academy;
