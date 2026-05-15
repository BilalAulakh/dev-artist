import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '../../../data/projects';

export const generateStaticParams = () =>
    projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return { title: 'Project not found | thedev artist' };
    return {
        title: `${project.title} — Case Study | thedev artist`,
        description: project.summary,
    };
}

export default async function ProjectDetail({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();

    const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

    return (
        <main className="project-detail">
            {/* HERO */}
            <section className="detail-hero" style={{ '--accent': project.accent }}>
                <div className="hero-orb hero-orb-a"></div>
                <div className="hero-orb hero-orb-b"></div>
                <div className="container">
                    <Link href="/projects" className="back-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                        All projects
                    </Link>

                    <div className="hero-grid">
                        <div className="hero-text">
                            <span className="cat-pill">{project.category}</span>
                            <h1>{project.title}</h1>
                            <p className="tagline">{project.tagline}</p>
                            <p className="summary">{project.summary}</p>

                            <div className="meta-row">
                                <div className="meta-item">
                                    <span className="meta-label">Timeline</span>
                                    <span className="meta-value">{project.timeline}</span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-label">Team</span>
                                    <span className="meta-value">{project.team}</span>
                                </div>
                                <div className="meta-item">
                                    <span className="meta-label">Industry</span>
                                    <span className="meta-value">{project.category}</span>
                                </div>
                            </div>
                        </div>

                        <div className="hero-mock">
                            <div className="mock-window">
                                <div className="mock-bar">
                                    <span></span><span></span><span></span>
                                </div>
                                <div className="mock-content">
                                    <div className="mock-title">{project.title}</div>
                                    <div className="mock-bars">
                                        <div className="mock-bar-row" style={{ width: '70%' }}></div>
                                        <div className="mock-bar-row" style={{ width: '92%' }}></div>
                                        <div className="mock-bar-row" style={{ width: '55%' }}></div>
                                        <div className="mock-bar-row" style={{ width: '80%' }}></div>
                                    </div>
                                    <div className="mock-tiles">
                                        <div className="mock-tile"></div>
                                        <div className="mock-tile"></div>
                                        <div className="mock-tile"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* METRICS */}
            <section className="metrics-section">
                <div className="container">
                    <div className="metrics-row">
                        {project.metrics.map((m) => (
                            <div key={m.label} className="metric-card" style={{ '--accent': project.accent }}>
                                <div className="metric-value">{m.value}</div>
                                <div className="metric-label">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="content-section">
                <div className="container">
                    <div className="content-grid">
                        <div className="content-main">
                            <div className="content-block">
                                <h2>The Problem</h2>
                                <p>{project.problem}</p>
                            </div>

                            <div className="content-block">
                                <h2>What We Built</h2>
                                <p>{project.solution}</p>
                            </div>

                            <div className="content-block">
                                <h2>Key Features</h2>
                                <ul className="feature-list">
                                    {project.features.map((f) => (
                                        <li key={f}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ color: project.accent }}><polyline points="20 6 9 17 4 12"/></svg>
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="content-block">
                                <h2>The Outcome</h2>
                                <p>{project.outcome}</p>
                            </div>
                        </div>

                        <aside className="content-side">
                            <div className="side-card">
                                <h3>Tech Stack</h3>
                                <div className="stack-list">
                                    {project.stack.map((t) => (
                                        <span key={t} className="stack-chip">{t}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="side-card">
                                <h3>Project Snapshot</h3>
                                <ul className="snapshot-list">
                                    <li><span>Industry</span><strong>{project.category}</strong></li>
                                    <li><span>Timeline</span><strong>{project.timeline}</strong></li>
                                    <li><span>Team</span><strong>{project.team}</strong></li>
                                </ul>
                            </div>

                            <div className="side-cta" style={{ '--accent': project.accent }}>
                                <h3>Building something similar?</h3>
                                <p>Tell us about your project — we&apos;ll respond within 24 hours.</p>
                                <Link href="/#contact" className="side-cta-btn">Start a conversation →</Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* OTHER PROJECTS */}
            <section className="others-section">
                <div className="container">
                    <div className="others-header">
                        <h2>Explore other projects</h2>
                        <Link href="/projects" className="others-all">View all →</Link>
                    </div>
                    <div className="others-grid">
                        {others.map((o) => (
                            <Link key={o.slug} href={`/projects/${o.slug}`} className="other-card" style={{ '--accent': o.accent }}>
                                <span className="cat-pill">{o.category}</span>
                                <h3>{o.title}</h3>
                                <p>{o.tagline}</p>
                                <span className="other-link">Read case study →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .project-detail { background: #fff; }

                .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

                /* HERO */
                .detail-hero {
                    position: relative;
                    padding: 140px 0 80px;
                    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
                    overflow: hidden;
                }
                .hero-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(90px);
                    opacity: 0.40;
                    pointer-events: none;
                }
                .hero-orb-a {
                    width: 360px; height: 360px;
                    background: var(--accent);
                    top: -120px; left: -80px;
                }
                .hero-orb-b {
                    width: 420px; height: 420px;
                    background: rgba(0, 194, 203, 0.30);
                    bottom: -180px; right: -100px;
                }
                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: var(--text-gray);
                    font-weight: 600;
                    font-size: 0.9rem;
                    margin-bottom: 28px;
                    text-decoration: none;
                    transition: color 0.2s ease, gap 0.2s ease;
                }
                .back-link:hover { color: var(--accent-teal); gap: 14px; }

                .hero-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 60px;
                    align-items: center;
                }
                .cat-pill {
                    display: inline-block;
                    background: rgba(0, 194, 203, 0.12);
                    color: var(--accent-teal);
                    padding: 6px 14px;
                    border-radius: 18px;
                    font-size: 0.78rem;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    margin-bottom: 18px;
                }
                .hero-text h1 {
                    font-size: 3.2rem;
                    font-weight: 800;
                    line-height: 1.1;
                    color: #0c112b;
                    margin: 0 0 16px;
                }
                .tagline {
                    font-size: 1.25rem;
                    color: var(--accent);
                    font-weight: 600;
                    margin: 0 0 22px;
                }
                .summary {
                    color: var(--text-gray);
                    font-size: 1.05rem;
                    line-height: 1.7;
                    margin-bottom: 32px;
                }
                .meta-row {
                    display: flex;
                    gap: 32px;
                    flex-wrap: wrap;
                    padding-top: 24px;
                    border-top: 1px solid rgba(0,0,0,0.08);
                }
                .meta-item { display: flex; flex-direction: column; gap: 4px; }
                .meta-label {
                    font-size: 0.72rem;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: var(--text-gray);
                    font-weight: 700;
                }
                .meta-value { font-size: 0.95rem; color: #0c112b; font-weight: 600; }

                /* MOCK WINDOW */
                .hero-mock { display: flex; justify-content: center; }
                .mock-window {
                    width: 100%;
                    max-width: 460px;
                    background: #fff;
                    border-radius: 16px;
                    box-shadow: 0 30px 80px rgba(15, 23, 42, 0.12);
                    border: 1px solid rgba(0,0,0,0.06);
                    overflow: hidden;
                }
                .mock-bar {
                    display: flex;
                    gap: 6px;
                    padding: 12px 16px;
                    background: #f1f5f9;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }
                .mock-bar span {
                    width: 10px; height: 10px;
                    border-radius: 50%;
                    background: #cbd5e1;
                }
                .mock-bar span:nth-child(1) { background: #ff5f57; }
                .mock-bar span:nth-child(2) { background: #febc2e; }
                .mock-bar span:nth-child(3) { background: #28c840; }
                .mock-content {
                    padding: 28px;
                    background: linear-gradient(135deg, #fff 0%, #f8fafc 100%);
                    min-height: 280px;
                }
                .mock-title {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #0c112b;
                    margin-bottom: 18px;
                }
                .mock-bars { display: flex; flex-direction: column; gap: 10px; margin-bottom: 22px; }
                .mock-bar-row {
                    height: 10px;
                    background: linear-gradient(90deg, var(--accent) 0%, rgba(0, 194, 203, 0.40) 100%);
                    border-radius: 5px;
                    opacity: 0.85;
                }
                .mock-bar-row:nth-child(2) { opacity: 0.65; }
                .mock-bar-row:nth-child(3) { opacity: 0.45; }
                .mock-bar-row:nth-child(4) { opacity: 0.30; }
                .mock-tiles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
                .mock-tile {
                    height: 60px;
                    background: #f1f5f9;
                    border-radius: 8px;
                    border: 1px solid rgba(0,0,0,0.04);
                }

                /* METRICS */
                .metrics-section { padding: 50px 0; background: #fff; }
                .metrics-row {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 20px;
                }
                .metric-card {
                    background: #fff;
                    border: 1px solid rgba(0,0,0,0.06);
                    border-left: 4px solid var(--accent);
                    border-radius: 14px;
                    padding: 24px 28px;
                    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
                }
                .metric-value {
                    font-size: 2.2rem;
                    font-weight: 800;
                    color: #0c112b;
                    line-height: 1;
                    margin-bottom: 8px;
                }
                .metric-label {
                    color: var(--text-gray);
                    font-size: 0.92rem;
                    font-weight: 500;
                }

                /* CONTENT */
                .content-section { padding: 60px 0 80px; }
                .content-grid {
                    display: grid;
                    grid-template-columns: 1.6fr 1fr;
                    gap: 60px;
                    align-items: start;
                }
                .content-block { margin-bottom: 50px; }
                .content-block h2 {
                    font-size: 1.7rem;
                    font-weight: 800;
                    color: #0c112b;
                    margin: 0 0 16px;
                    position: relative;
                    padding-left: 18px;
                }
                .content-block h2::before {
                    content: '';
                    position: absolute;
                    left: 0; top: 8px; bottom: 8px;
                    width: 4px;
                    background: var(--accent-teal);
                    border-radius: 2px;
                }
                .content-block p {
                    color: var(--text-gray);
                    font-size: 1.05rem;
                    line-height: 1.75;
                }
                .feature-list { list-style: none; padding: 0; margin: 0; }
                .feature-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    padding: 12px 0;
                    border-bottom: 1px solid rgba(0,0,0,0.04);
                    color: #0c112b;
                    font-size: 1rem;
                }
                .feature-list li:last-child { border-bottom: none; }
                .feature-list svg { flex-shrink: 0; margin-top: 3px; }

                /* SIDE */
                .content-side { display: flex; flex-direction: column; gap: 20px; position: sticky; top: 100px; }
                .side-card {
                    background: #fff;
                    border: 1px solid rgba(0,0,0,0.07);
                    border-radius: 16px;
                    padding: 24px;
                    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
                }
                .side-card h3 {
                    font-size: 0.78rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: var(--accent-teal);
                    font-weight: 700;
                    margin: 0 0 16px;
                }
                .stack-list { display: flex; flex-wrap: wrap; gap: 8px; }
                .stack-chip {
                    padding: 6px 12px;
                    background: #f1f5f9;
                    border: 1px solid rgba(0,0,0,0.05);
                    border-radius: 16px;
                    font-size: 0.82rem;
                    color: #334155;
                    font-weight: 500;
                }
                .snapshot-list { list-style: none; padding: 0; margin: 0; }
                .snapshot-list li {
                    display: flex;
                    justify-content: space-between;
                    padding: 10px 0;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                    font-size: 0.92rem;
                }
                .snapshot-list li:last-child { border-bottom: none; }
                .snapshot-list span { color: var(--text-gray); }
                .snapshot-list strong { color: #0c112b; }

                .side-cta {
                    background: linear-gradient(135deg, var(--accent) 0%, rgba(0, 194, 203, 0.85) 100%);
                    color: #fff;
                    border-radius: 16px;
                    padding: 26px;
                }
                .side-cta h3 {
                    font-size: 1.1rem;
                    font-weight: 800;
                    margin: 0 0 8px;
                    color: #fff;
                    text-transform: none;
                    letter-spacing: 0;
                }
                .side-cta p {
                    color: rgba(255,255,255,0.88);
                    font-size: 0.9rem;
                    margin: 0 0 18px;
                    line-height: 1.5;
                }
                .side-cta-btn {
                    display: inline-block;
                    background: #fff;
                    color: #0c112b;
                    padding: 10px 18px;
                    border-radius: 22px;
                    font-weight: 700;
                    font-size: 0.85rem;
                    text-decoration: none;
                    transition: transform 0.25s ease;
                }
                .side-cta-btn:hover { transform: translateY(-2px); }

                /* OTHERS */
                .others-section { padding: 60px 0 100px; background: #f8fafc; }
                .others-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                }
                .others-header h2 {
                    font-size: 1.7rem;
                    font-weight: 800;
                    color: #0c112b;
                    margin: 0;
                }
                .others-all {
                    color: var(--accent-teal);
                    font-weight: 700;
                    font-size: 0.9rem;
                    text-decoration: none;
                }
                .others-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 20px;
                }
                .other-card {
                    background: #fff;
                    border: 1px solid rgba(0,0,0,0.06);
                    border-radius: 16px;
                    padding: 24px;
                    text-decoration: none;
                    color: inherit;
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                    display: block;
                    border-top: 3px solid var(--accent);
                }
                .other-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
                }
                .other-card h3 {
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: #0c112b;
                    margin: 12px 0 6px;
                }
                .other-card p {
                    color: var(--text-gray);
                    font-size: 0.9rem;
                    margin: 0 0 14px;
                }
                .other-link {
                    color: var(--accent);
                    font-weight: 700;
                    font-size: 0.85rem;
                }

                @media (max-width: 900px) {
                    .hero-grid { grid-template-columns: 1fr; gap: 40px; }
                    .hero-text h1 { font-size: 2.2rem; }
                    .content-grid { grid-template-columns: 1fr; gap: 30px; }
                    .content-side { position: static; }
                }
            `}</style>
        </main>
    );
}
