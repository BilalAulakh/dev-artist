"use client";
import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { projects } from '../../data/projects';

const categories = ['All', 'Healthcare', 'Restaurant', 'E-Commerce', 'Mobile App', 'Education', 'Logistics', 'Real Estate', 'SaaS'];

const ProjectsPage = () => {
    const [filter, setFilter] = useState('All');

    const visible = useMemo(
        () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
        [filter]
    );

    return (
        <main className="projects-page">
            {/* HERO */}
            <section className="projects-hero">
                <div className="hero-orb hero-orb-a"></div>
                <div className="hero-orb hero-orb-b"></div>
                <div className="container">
                    <span className="eyebrow">
                        <span className="eyebrow-bar"></span>
                        Selected Work
                        <span className="eyebrow-bar"></span>
                    </span>
                    <h1 className="hero-title">
                        Projects we&apos;ve <span className="grad">engineered, scaled,</span><br />
                        and shipped to production.
                    </h1>
                    <p className="hero-sub">
                        A look at advanced systems we&apos;ve built across AI, fintech, logistics, and commerce —
                        each one solving a real-world problem at meaningful scale.
                    </p>
                </div>
            </section>

            {/* FILTERS + GRID */}
            <section className="projects-list">
                <div className="container">
                    <div className="filter-row">
                        {categories.map((c) => (
                            <button
                                key={c}
                                className={`filter-chip ${filter === c ? 'active' : ''}`}
                                onClick={() => setFilter(c)}
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    <div className="projects-grid">
                        {visible.map((p) => (
                            <Link
                                key={p.slug}
                                href={`/projects/${p.slug}`}
                                className="project-card"
                                style={{ '--accent': p.accent }}
                                aria-label={`View ${p.title} case study`}
                            >
                                <div className="card-top">
                                    <span className="cat-pill">{p.category}</span>
                                    <div className="accent-dot"></div>
                                </div>
                                <h3>{p.title}</h3>
                                <p className="card-tagline">{p.tagline}</p>
                                <p className="card-summary">{p.summary}</p>

                                <div className="card-metrics">
                                    {p.metrics.slice(0, 2).map((m) => (
                                        <div key={m.label} className="card-metric">
                                            <strong>{m.value}</strong>
                                            <span>{m.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="card-stack">
                                    {p.stack.slice(0, 5).map((t) => (
                                        <span key={t} className="stack-chip sm">{t}</span>
                                    ))}
                                    {p.stack.length > 5 && (
                                        <span className="stack-chip sm muted">+{p.stack.length - 5}</span>
                                    )}
                                </div>

                                <span className="card-link">
                                    View case study
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="projects-cta">
                <div className="container">
                    <h2>Have a hard problem in mind?</h2>
                    <p>Tell us what you&apos;re trying to build — we&apos;ll bring the architecture, the team, and the velocity.</p>
                    <Link href="/#contact" className="cta-btn">Start a Project →</Link>
                </div>
            </section>

            <style jsx>{`
                .projects-page { background: #fff; }

                /* HERO */
                .projects-hero {
                    position: relative;
                    padding: 160px 0 80px;
                    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
                    overflow: hidden;
                    text-align: center;
                }
                .hero-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.45;
                    pointer-events: none;
                }
                .hero-orb-a {
                    width: 380px; height: 380px;
                    background: rgba(0, 194, 203, 0.35);
                    top: -120px; left: -80px;
                }
                .hero-orb-b {
                    width: 460px; height: 460px;
                    background: rgba(124, 92, 255, 0.30);
                    bottom: -200px; right: -100px;
                }
                .eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 14px;
                    color: var(--accent-teal);
                    font-weight: 700;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    font-size: 0.78rem;
                    margin-bottom: 22px;
                }
                .eyebrow-bar {
                    width: 32px; height: 1.5px;
                    background: var(--accent-teal);
                }
                .hero-title {
                    font-size: 3.6rem;
                    font-weight: 800;
                    line-height: 1.1;
                    color: var(--bg-dark, #0c112b);
                    margin: 0 auto 22px;
                    max-width: 980px;
                }
                .grad {
                    background: linear-gradient(90deg, var(--accent-teal) 0%, #0046ad 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
                .hero-sub {
                    max-width: 720px;
                    margin: 0 auto;
                    color: var(--text-gray);
                    font-size: 1.12rem;
                    line-height: 1.65;
                }

                /* FILTERS + GRID */
                .projects-list { padding: 60px 0 100px; }
                .filter-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    justify-content: center;
                    margin-bottom: 44px;
                }
                .filter-chip {
                    padding: 9px 18px;
                    border-radius: 22px;
                    border: 1px solid rgba(0,0,0,0.10);
                    background: #fff;
                    color: #0c112b;
                    font-size: 0.85rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.22s ease;
                }
                .filter-chip:hover {
                    border-color: var(--accent-teal);
                    color: var(--accent-teal);
                }
                .filter-chip.active {
                    background: var(--accent-teal);
                    color: #fff;
                    border-color: var(--accent-teal);
                    box-shadow: 0 6px 18px rgba(0, 194, 203, 0.30);
                }

                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
                    gap: 24px;
                }
                .project-card {
                    background: #fff;
                    border: 1px solid rgba(0,0,0,0.06);
                    border-radius: 20px;
                    padding: 28px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
                    position: relative;
                    overflow: hidden;
                    text-decoration: none;
                    color: inherit;
                    display: flex;
                    flex-direction: column;
                }
                .card-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    margin-top: 20px;
                    color: var(--accent);
                    font-weight: 700;
                    font-size: 0.85rem;
                    transition: gap 0.25s ease;
                }
                .project-card:hover .card-link { gap: 12px; }
                .project-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: var(--accent);
                    opacity: 0.85;
                }
                .project-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 20px 50px rgba(15, 23, 42, 0.10);
                    border-color: rgba(0,0,0,0.12);
                }
                .card-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 18px;
                }
                .cat-pill {
                    background: rgba(0, 194, 203, 0.10);
                    color: var(--accent-teal);
                    padding: 5px 12px;
                    border-radius: 18px;
                    font-size: 0.74rem;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                }
                .accent-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: var(--accent);
                    box-shadow: 0 0 0 4px rgba(0,0,0,0.04);
                }
                .project-card h3 {
                    font-size: 1.45rem;
                    font-weight: 800;
                    color: #0c112b;
                    margin: 0 0 6px;
                }
                .card-tagline {
                    color: var(--accent);
                    font-weight: 600;
                    font-size: 0.92rem;
                    margin: 0 0 14px;
                }
                .card-summary {
                    color: var(--text-gray);
                    font-size: 0.93rem;
                    line-height: 1.6;
                    margin-bottom: 22px;
                }
                .card-metrics {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 14px;
                    padding: 16px 0;
                    border-top: 1px solid rgba(0,0,0,0.06);
                    border-bottom: 1px solid rgba(0,0,0,0.06);
                    margin-bottom: 18px;
                }
                .card-metric strong {
                    display: block;
                    font-size: 1.35rem;
                    color: #0c112b;
                    font-weight: 800;
                    line-height: 1;
                    margin-bottom: 4px;
                }
                .card-metric span {
                    font-size: 0.78rem;
                    color: var(--text-gray);
                }
                .card-stack {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                }
                .stack-chip.sm {
                    padding: 4px 10px;
                    background: #f1f5f9;
                    border: 1px solid rgba(0,0,0,0.05);
                    color: #334155;
                    font-size: 0.72rem;
                    border-radius: 14px;
                }
                .stack-chip.sm.muted {
                    background: transparent;
                    color: var(--text-gray);
                }

                /* CTA */
                .projects-cta {
                    background: linear-gradient(135deg, rgba(0, 194, 203, 0.08) 0%, rgba(0, 70, 173, 0.05) 100%);
                    padding: 90px 0;
                    text-align: center;
                    border-top: 1px solid rgba(0,0,0,0.04);
                }
                .projects-cta h2 {
                    font-size: 2.4rem;
                    font-weight: 800;
                    color: #0c112b;
                    margin: 0 0 14px;
                }
                .projects-cta p {
                    color: var(--text-gray);
                    font-size: 1.05rem;
                    max-width: 560px;
                    margin: 0 auto 30px;
                }
                .cta-btn {
                    display: inline-block;
                    background: var(--accent-teal);
                    color: #fff;
                    padding: 14px 32px;
                    border-radius: 30px;
                    font-weight: 700;
                    font-size: 0.95rem;
                    transition: all 0.25s ease;
                }
                .cta-btn:hover {
                    background: #00adb5;
                    transform: translateY(-2px);
                    box-shadow: 0 12px 28px rgba(0, 194, 203, 0.35);
                }

                @media (max-width: 900px) {
                    .hero-title { font-size: 2.4rem; }
                    .projects-cta h2 { font-size: 1.8rem; }
                }
                @media (max-width: 560px) {
                    .projects-hero { padding: 130px 0 60px; }
                    .hero-title { font-size: 1.9rem; }
                    .filter-row { justify-content: flex-start; }
                    .projects-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </main>
    );
};

export default ProjectsPage;
