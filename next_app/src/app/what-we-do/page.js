import React from 'react';
import Link from 'next/link';
import { services } from '../../data/services';

export const metadata = {
    title: 'What We Do | thedev artist',
    description: 'Explore our full range of capabilities — engineering, AI, growth, design, e-commerce, local SEO, and reputation services.',
};

const categoryMeta = {
    Engineering: {
        icon: 'fas fa-code',
        blurb: 'Production-grade web and mobile apps engineered for scale, speed, and longevity.',
    },
    AI: {
        icon: 'fas fa-robot',
        blurb: 'Custom AI agents, LLM integrations, and intelligent automations that compound your team\'s output.',
    },
    Growth: {
        icon: 'fas fa-chart-line',
        blurb: 'Performance marketing and SEO programs that turn ad spend and search traffic into pipeline.',
    },
    Design: {
        icon: 'fas fa-pen-nib',
        blurb: 'Brand identity, visuals, and creative systems that make your business look the part.',
    },
    'E-Commerce': {
        icon: 'fas fa-shopping-cart',
        blurb: 'Storefronts, custom Shopify builds, and conversion-focused merchandising that sells.',
    },
    'Local SEO': {
        icon: 'fas fa-map-marker-alt',
        blurb: 'Google Maps and Business Profile programs that put you in front of local customers.',
    },
    Reputation: {
        icon: 'fas fa-star',
        blurb: 'Reviews, ratings, and reputation programs that protect and grow trust in your brand.',
    },
};

const WhatWeDo = () => {
    const grouped = services.reduce((acc, s) => {
        (acc[s.category] = acc[s.category] || []).push(s);
        return acc;
    }, {});

    return (
        <>
            <div className="section-padding" style={{ background: 'var(--bg-light)', marginTop: '90px', textAlign: 'center' }}>
                <div className="container">
                    <span className="section-subtitle" style={{ color: 'var(--accent-teal)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>What We Do</span>
                    <h1 className="section-title" style={{ fontSize: '3.5rem', fontWeight: 800 }}>Capabilities <span>Under One Roof</span></h1>
                    <p style={{ maxWidth: '820px', margin: '0 auto', color: 'var(--text-gray)', fontSize: '1.15rem', lineHeight: '1.6' }}>
                        From engineering and AI to growth, design, and reputation — explore every discipline we ship work in.
                    </p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    {Object.entries(grouped).map(([cat, list]) => {
                        const meta = categoryMeta[cat] || { icon: 'fas fa-circle', blurb: '' };
                        return (
                            <div key={cat} style={{ marginBottom: '70px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '14px' }}>
                                    <i className={meta.icon} style={{ fontSize: '1.6rem', color: 'var(--accent-teal)' }}></i>
                                    <h2 className="section-title" style={{ textAlign: 'left', margin: 0, fontSize: '2.2rem' }}>{cat}</h2>
                                </div>
                                <p style={{ color: 'var(--text-gray)', maxWidth: '780px', marginBottom: '28px', fontSize: '1.05rem' }}>
                                    {meta.blurb}
                                </p>
                                <div className="services-grid">
                                    {list.map((s) => (
                                        <Link key={s.slug} href={`/services/${s.slug}`} className="service-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                                            <h3 style={{ marginBottom: '8px' }}>{s.title}</h3>
                                            <p style={{ color: 'var(--accent-teal)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>{s.tagline}</p>
                                            <p style={{ color: 'var(--text-gray)' }}>{s.short}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <div className="section-padding" style={{ backgroundColor: 'var(--bg-dark)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="section-title" style={{ color: 'white' }}>Not sure which capability fits?</h2>
                    <p style={{ marginBottom: '40px', opacity: 0.8 }}>Tell us about your goals — we&apos;ll recommend the right combination.</p>
                    <Link href="/contact" className="btn btn-accent">Talk to our team</Link>
                </div>
            </div>
        </>
    );
};

export default WhatWeDo;
