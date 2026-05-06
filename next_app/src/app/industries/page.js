import React from 'react';
import Link from 'next/link';
import { industries } from '../../data/industries';

export const metadata = {
    title: 'Industries We Serve | thedev artist',
    description: 'Explore the diverse industries we serve with our expert software engineering solutions.',
};

const Industries = () => {
    return (
        <>
            <div className="section-padding" style={{ background: 'white', marginTop: '90px', textAlign: 'center' }}>
                <div className="container">
                    <span className="section-subtitle" style={{ color: 'var(--accent-teal)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>Who we help</span>
                    <h1 className="section-title" style={{ fontSize: '3.5rem', fontWeight: 800 }}>Industries <span>We Serve</span></h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-gray)', fontSize: '1.2rem', lineHeight: '1.6' }}>
                        We bring domain-specific knowledge to every project, ensuring our solutions meet the unique challenges of your industry.
                    </p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="services-grid">
                    {industries.map((item) => (
                        <Link
                            key={item.slug}
                            href={`/industries/${item.slug}`}
                            className="service-card"
                            style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
                        >
                            <i className={`${item.icon} service-icon`}></i>
                            <h3>{item.title}</h3>
                            <p>{item.short}</p>
                            <span style={{ display: 'inline-block', marginTop: '14px', color: 'var(--accent-teal)', fontWeight: 600, fontSize: '0.9rem' }}>
                                Learn more →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* CTA SECTION */}
            <div className="section-padding" style={{ backgroundColor: 'var(--bg-dark)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="section-title" style={{ color: 'white' }}>Ready to Scale Your Industry Leadership?</h2>
                    <p style={{ marginBottom: '40px', opacity: 0.8 }}>Partner with us to build technology that defines the future of your sector.</p>
                    <Link href="/contact" className="btn btn-accent">Discuss Your Industry Needs</Link>
                </div>
            </div>
        </>
    );
};

export default Industries;
