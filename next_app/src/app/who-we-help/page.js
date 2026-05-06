import React from 'react';
import Link from 'next/link';
import { industries } from '../../data/industries';

export const metadata = {
    title: 'Who We Help | thedev artist',
    description: 'We partner with founders, marketers, and operators across industries to ship work that moves metrics.',
};

const WhoWeHelp = () => {
    const personas = [
        {
            icon: 'fas fa-rocket',
            title: 'Early-Stage Founders',
            desc: 'Validate, build, and ship your MVP with a senior team that moves at startup speed.',
        },
        {
            icon: 'fas fa-building',
            title: 'Growing SMBs',
            desc: 'Replace patchwork tools with a custom platform that scales with your operations.',
        },
        {
            icon: 'fas fa-bullhorn',
            title: 'Marketing Leaders',
            desc: 'Performance ads, SEO, and reputation programs that drive measurable pipeline.',
        },
        {
            icon: 'fas fa-store',
            title: 'E-Commerce Brands',
            desc: 'Custom Shopify storefronts, conversion sprints, and review systems that lift AOV and retention.',
        },
        {
            icon: 'fas fa-map-marker-alt',
            title: 'Local Businesses',
            desc: 'Google Maps optimization and local SEO that puts you in front of nearby customers.',
        },
        {
            icon: 'fas fa-cogs',
            title: 'Operations Teams',
            desc: 'AI agents and automations that take repetitive work off your team\'s plate.',
        },
    ];

    return (
        <>
            <div className="section-padding" style={{ background: 'white', marginTop: '90px', textAlign: 'center' }}>
                <div className="container">
                    <span className="section-subtitle" style={{ color: 'var(--accent-teal)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>Who We Help</span>
                    <h1 className="section-title" style={{ fontSize: '3.5rem', fontWeight: 800 }}>Built for <span>Ambitious Teams</span></h1>
                    <p style={{ maxWidth: '820px', margin: '0 auto', color: 'var(--text-gray)', fontSize: '1.15rem', lineHeight: '1.6' }}>
                        We work with founders, operators, and marketing leaders who care about quality and momentum.
                    </p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <span className="section-subtitle" style={{ color: 'var(--accent-teal)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>Who We Partner With</span>
                    <h2 className="section-title">Teams We <span>Serve Best</span></h2>
                    <div className="services-grid" style={{ marginTop: '40px' }}>
                        {personas.map((p, i) => (
                            <div key={i} className="service-card">
                                <i className={`${p.icon} service-icon`}></i>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ backgroundColor: '#fdfdfd' }}>
                <div className="container">
                    <span className="section-subtitle" style={{ color: 'var(--accent-teal)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>Industries</span>
                    <h2 className="section-title">Domains We&apos;ve <span>Shipped In</span></h2>
                    <p style={{ maxWidth: '760px', margin: '0 auto 40px', color: 'var(--text-gray)', fontSize: '1.05rem', textAlign: 'center' }}>
                        Domain-specific knowledge means our solutions fit the realities of your sector — regulation, scale, and all.
                    </p>
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
            </section>

            <div className="section-padding" style={{ backgroundColor: 'var(--bg-dark)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="section-title" style={{ color: 'white' }}>Don&apos;t see your space?</h2>
                    <p style={{ marginBottom: '40px', opacity: 0.8 }}>We&apos;ve worked across more verticals than we list — let&apos;s chat about yours.</p>
                    <Link href="/contact" className="btn btn-accent">Start a Conversation</Link>
                </div>
            </div>
        </>
    );
};

export default WhoWeHelp;
