import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Institute — Courses & Training | thedev artist',
    description:
        'Learn App Development, Web Development, Graphic Design, Digital Marketing, Shopify, and Forex Trading at thedev artist Institute. Registered company certificate + 1-month live-project internship included.',
};

const courses = [
    {
        slug: 'flutter',
        title: 'App Development (Flutter)',
        category: 'Mobile',
        fees: 'Rs 45,000',
        duration: '4 Months',
        schedule: 'Mon – Fri',
        accent: '#0ea5e9',
        icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="3"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
        ),
        outline: [
            'Dart programming from scratch',
            'Flutter widgets, layouts & navigation',
            'State management (Provider, Riverpod, Bloc)',
            'REST APIs & Firebase integration',
            'Authentication, push notifications & local DB',
            'Publishing to Google Play & App Store',
            'Final live project (e-commerce or booking app)',
        ],
    },
    {
        slug: 'full-stack',
        title: 'Full Stack Development (MERN)',
        category: 'Web',
        fees: 'Rs 45,000',
        duration: '6 Months',
        schedule: 'Mon – Fri',
        accent: '#7c5cff',
        icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        ),
        outline: [
            'HTML, CSS, Tailwind CSS & responsive design',
            'JavaScript (ES6+) & DOM mastery',
            'React JS — components, hooks, routing, Redux',
            'Node JS & Express APIs',
            'MongoDB + Mongoose database design',
            'Authentication, JWT & deployment',
            'Full MERN-stack final project',
        ],
    },
    {
        slug: 'web-development',
        title: 'Web Development',
        category: 'Web',
        fees: 'Rs 35,000',
        duration: '4 Months',
        schedule: 'Mon – Fri',
        accent: '#00c2cb',
        icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        ),
        outline: [
            'HTML5 & CSS3 — semantic, modern layouts',
            'JavaScript fundamentals & ES6',
            'Tailwind CSS for fast UI building',
            'PHP & Laravel for backend basics',
            'React JS — components & hooks',
            'Node JS introduction & APIs',
            'Final responsive website project',
        ],
    },
    {
        slug: 'graphic-design',
        title: 'Graphic Designing & UI / UX',
        category: 'Design',
        fees: 'Rs 30,000',
        duration: '3 Months',
        schedule: 'Mon – Fri',
        accent: '#e91e63',
        icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
        ),
        outline: [
            'Adobe Photoshop & Illustrator from zero',
            'Logo design & brand identity systems',
            'Social media post & banner design',
            'Typography, color theory & layout principles',
            'UI design with Figma — wireframes to prototypes',
            'UX research, user flows & usability testing',
            'Portfolio-ready final design projects',
        ],
    },
    {
        slug: 'digital-marketing',
        title: 'Social Media & Digital Marketing',
        category: 'Marketing',
        fees: 'Rs 35,000',
        duration: '4 Months',
        schedule: 'Mon – Fri',
        accent: '#ff8a3d',
        icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
        ),
        outline: [
            'Digital marketing fundamentals & strategy',
            'SEO — on-page, off-page, technical & local',
            'Keyword research & content planning',
            'Meta (Facebook & Instagram) Ads — full setup to scaling',
            'Google Ads & analytics basics',
            'Social media content & community growth',
            'Real campaign run as final project',
        ],
    },
    {
        slug: 'shopify-ecommerce',
        title: 'Shopify & E-Commerce',
        category: 'E-Commerce',
        fees: 'Rs 30,000',
        duration: '3 Months',
        schedule: 'Mon – Fri',
        accent: '#16a34a',
        icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
        ),
        outline: [
            'Shopify store setup & theme customization',
            'Product photography & listing optimization',
            'Payment gateways & shipping configuration',
            'Dropshipping models & supplier sourcing',
            'Shopify SEO & email marketing automation',
            'Conversion-rate-optimization basics',
            'Launch a live store as final project',
        ],
    },
    {
        slug: 'ai-automation',
        title: 'AI Automation',
        category: 'AI',
        fees: 'Rs 45,000',
        duration: '4 Months',
        schedule: 'Mon – Fri',
        accent: '#a855f7',
        icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>
        ),
        outline: [
            'AI fundamentals & prompt engineering',
            'ChatGPT, Claude & Gemini API integration',
            'No-code automation with Zapier, Make.com & n8n',
            'LangChain & LangGraph for building AI agents',
            'RAG pipelines & vector databases',
            'WhatsApp, Gmail & CRM workflow automation',
            'Live AI agent project for a real business',
        ],
    },
    {
        slug: 'forex-trading',
        title: 'Forex Trading',
        category: 'Trading',
        fees: 'Rs 85,000',
        duration: '6 Months',
        schedule: 'Mon – Fri',
        accent: '#0046ad',
        highlight: 'Tools + accounts included in fee',
        icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        ),
        outline: [
            'Forex market structure & terminology',
            'Technical analysis — trend, support, resistance',
            'Candlestick patterns & price action',
            'Risk management & money management rules',
            'Trading psychology & journaling',
            'MT4 / MT5 platforms & indicators (tools included)',
            'Live demo & funded account practice (account included)',
        ],
    },
];

export default function InstitutePage() {
    return (
        <main className="institute-page">
            {/* HERO */}
            <section className="ins-hero">
                <div className="hero-orb hero-orb-a"></div>
                <div className="hero-orb hero-orb-b"></div>
                <div className="container">
                    <span className="eyebrow">
                        <span className="eyebrow-bar"></span>
                        Dev Artist Institute
                        <span className="eyebrow-bar"></span>
                    </span>
                    <h1>Learn from <span className="grad">working professionals.</span><br />Earn a real, registered certificate.</h1>
                    <p className="hero-sub">
                        Practical, project-driven courses in development, design, marketing, e-commerce, and trading —
                        taught by people who actually ship work for real clients.
                    </p>
                    <div className="hero-ctas">
                        <Link href="/#contact" className="btn-primary">Enroll Now</Link>
                        <a href="#courses" className="btn-secondary">View Courses ↓</a>
                    </div>
                </div>
            </section>

            {/* HIGHLIGHTS BAR */}
            <section className="highlights">
                <div className="container">
                    <div className="highlights-grid">
                        <div className="hl-item">
                            <div className="hl-icon">
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><polyline points="9 16 7 22 12 19 17 22 15 16"/></svg>
                            </div>
                            <div>
                                <strong>Registered Company Certificate</strong>
                                <span>Issued by a legally registered company — recognized by employers.</span>
                            </div>
                        </div>
                        <div className="hl-item">
                            <div className="hl-icon">
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>
                            </div>
                            <div>
                                <strong>1-Month Paid Internship</strong>
                                <span>Hands-on practice on live projects + an official internship letter.</span>
                            </div>
                        </div>
                        <div className="hl-item">
                            <div className="hl-icon">
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                            </div>
                            <div>
                                <strong>Real Live Projects</strong>
                                <span>You don&apos;t just learn theory — you ship work used by real users.</span>
                            </div>
                        </div>
                        <div className="hl-item">
                            <div className="hl-icon">
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            </div>
                            <div>
                                <strong>Monday – Friday Classes</strong>
                                <span>Consistent weekday schedule with morning and evening batches.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COURSES */}
            <section id="courses" className="courses-section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-eyebrow">Courses</span>
                        <h2>Pick the path that matches your goal.</h2>
                        <p>Every course ends with a portfolio-ready final project, an internship, and a registered certificate.</p>
                    </div>

                    <div className="reg-note">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        <span>
                            <strong>Note:</strong> A one-time <strong>Rs 3,000 government registration fee</strong> applies to every course — this covers your official certification and is not included in the course fees shown below.
                        </span>
                    </div>

                    <div className="courses-grid">
                        {courses.map((c) => (
                            <article key={c.slug} className="course-card" style={{ '--accent': c.accent }}>
                                <div className="course-top">
                                    <div className="course-icon">{c.icon}</div>
                                    <span className="course-cat">{c.category}</span>
                                </div>
                                <h3>{c.title}</h3>

                                <div className="course-meta">
                                    <div className="meta-cell">
                                        <span className="meta-label">Fees</span>
                                        <strong>{c.fees}</strong>
                                        <span className="reg-tag">+ Rs 3,000 reg.</span>
                                    </div>
                                    <div className="meta-cell">
                                        <span className="meta-label">Duration</span>
                                        <strong>{c.duration}</strong>
                                    </div>
                                    <div className="meta-cell">
                                        <span className="meta-label">Schedule</span>
                                        <strong>{c.schedule}</strong>
                                    </div>
                                </div>

                                {c.highlight && (
                                    <div className="course-highlight">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"/></svg>
                                        {c.highlight}
                                    </div>
                                )}

                                <div className="course-outline">
                                    <span className="outline-title">Course outline</span>
                                    <ul>
                                        {c.outline.map((o) => (
                                            <li key={o}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: c.accent }}><polyline points="20 6 9 17 4 12"/></svg>
                                                {o}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link href="/#contact" className="course-cta">
                                    Enroll in this course
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="why-section">
                <div className="container">
                    <div className="why-card">
                        <div className="why-left">
                            <span className="section-eyebrow light">Why Dev Artist Institute</span>
                            <h2>You don&apos;t just learn skills — you walk out with proof.</h2>
                            <p>
                                Our company is legally registered, which means the certificate you receive is a real,
                                verifiable credential. Every student gets an internship on a live client project, and a
                                signed internship letter at the end.
                            </p>
                        </div>
                        <div className="why-right">
                            <div className="why-item">
                                <div className="why-num">01</div>
                                <div>
                                    <strong>Registered company certificate</strong>
                                    <p>Recognized by employers — not a generic course completion paper.</p>
                                </div>
                            </div>
                            <div className="why-item">
                                <div className="why-num">02</div>
                                <div>
                                    <strong>1-month live-project internship</strong>
                                    <p>You work on real client work alongside our team for a month after course end.</p>
                                </div>
                            </div>
                            <div className="why-item">
                                <div className="why-num">03</div>
                                <div>
                                    <strong>Official internship letter</strong>
                                    <p>Signed and stamped letter you can show employers and add to LinkedIn.</p>
                                </div>
                            </div>
                            <div className="why-item">
                                <div className="why-num">04</div>
                                <div>
                                    <strong>Industry-active mentors</strong>
                                    <p>Taught by developers, designers, and traders who are actively shipping work.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="ins-cta">
                <div className="container">
                    <h2>Ready to start?</h2>
                    <p>Visit our Faisalabad campus or message us on WhatsApp — admissions are open year-round.</p>
                    <div className="cta-row">
                        <Link href="/#contact" className="btn-primary">Enroll Now</Link>
                        <a href="https://wa.me/447423253692" target="_blank" rel="noopener noreferrer" className="btn-secondary dark">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4 7.94 7.94 0 0 0 4.1 11.94a7.83 7.83 0 0 0 1.06 3.96L4 20l4.2-1.1a7.94 7.94 0 0 0 3.84.98h.01a7.93 7.93 0 0 0 7.94-7.94 7.86 7.86 0 0 0-2.39-5.62z"/></svg>
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <style>{`
                .institute-page { background: #fff; }
                .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

                /* HERO */
                .ins-hero {
                    position: relative;
                    padding: 150px 0 80px;
                    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
                    overflow: hidden;
                    text-align: center;
                }
                .hero-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(90px);
                    opacity: 0.45;
                    pointer-events: none;
                }
                .hero-orb-a {
                    width: 360px; height: 360px;
                    background: rgba(0, 194, 203, 0.40);
                    top: -100px; left: -80px;
                }
                .hero-orb-b {
                    width: 460px; height: 460px;
                    background: rgba(124, 92, 255, 0.30);
                    bottom: -180px; right: -100px;
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
                .eyebrow-bar { width: 32px; height: 1.5px; background: var(--accent-teal); }
                .ins-hero h1 {
                    font-size: 3.5rem;
                    font-weight: 800;
                    line-height: 1.12;
                    color: #0c112b;
                    margin: 0 auto 22px;
                    max-width: 940px;
                }
                .grad {
                    background: linear-gradient(90deg, var(--accent-teal) 0%, #0046ad 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
                .hero-sub {
                    max-width: 720px;
                    margin: 0 auto 32px;
                    color: var(--text-gray);
                    font-size: 1.1rem;
                    line-height: 1.65;
                }
                .hero-ctas {
                    display: flex;
                    gap: 14px;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .btn-primary {
                    display: inline-block;
                    background: var(--accent-teal);
                    color: #fff;
                    padding: 13px 28px;
                    border-radius: 28px;
                    font-weight: 700;
                    font-size: 0.92rem;
                    text-decoration: none;
                    transition: all 0.25s ease;
                    border: 1px solid var(--accent-teal);
                }
                .btn-primary:hover {
                    background: #00adb5;
                    transform: translateY(-2px);
                    box-shadow: 0 12px 26px rgba(0, 194, 203, 0.32);
                    color: #fff;
                }
                .btn-secondary {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: #fff;
                    color: #0c112b;
                    padding: 13px 28px;
                    border-radius: 28px;
                    font-weight: 700;
                    font-size: 0.92rem;
                    text-decoration: none;
                    border: 1px solid rgba(0,0,0,0.10);
                    transition: all 0.25s ease;
                }
                .btn-secondary:hover { border-color: var(--accent-teal); color: var(--accent-teal); }
                .btn-secondary.dark {
                    background: #0c112b;
                    color: #fff;
                    border-color: #0c112b;
                }
                .btn-secondary.dark:hover {
                    background: #25D366;
                    border-color: #25D366;
                    color: #fff;
                }

                /* HIGHLIGHTS */
                .highlights {
                    padding: 50px 0;
                    background: #fff;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }
                .highlights-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 24px;
                }
                .hl-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;
                }
                .hl-icon {
                    width: 44px; height: 44px;
                    border-radius: 12px;
                    background: rgba(0, 194, 203, 0.10);
                    color: var(--accent-teal);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .hl-item strong {
                    display: block;
                    font-size: 0.95rem;
                    color: #0c112b;
                    margin-bottom: 4px;
                }
                .hl-item span {
                    font-size: 0.85rem;
                    color: var(--text-gray);
                    line-height: 1.5;
                }

                /* COURSES */
                .courses-section { padding: 80px 0; background: #f8fafc; }
                .section-head { text-align: center; margin-bottom: 50px; }
                .section-eyebrow {
                    display: inline-block;
                    color: var(--accent-teal);
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    font-size: 0.78rem;
                    margin-bottom: 12px;
                }
                .section-eyebrow.light { color: rgba(255,255,255,0.7); }
                .section-head h2 {
                    font-size: 2.4rem;
                    font-weight: 800;
                    color: #0c112b;
                    margin: 0 0 12px;
                }
                .section-head p {
                    color: var(--text-gray);
                    max-width: 640px;
                    margin: 0 auto;
                    font-size: 1.02rem;
                }

                .reg-note {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    background: rgba(255, 193, 7, 0.10);
                    border: 1px solid rgba(255, 193, 7, 0.35);
                    border-left: 4px solid #f59e0b;
                    border-radius: 12px;
                    padding: 14px 18px;
                    margin-bottom: 30px;
                    color: #78350f;
                    font-size: 0.92rem;
                    line-height: 1.55;
                }
                .reg-note svg { color: #b45309; flex-shrink: 0; margin-top: 2px; }
                .reg-note strong { color: #78350f; font-weight: 700; }

                .reg-tag {
                    display: inline-block;
                    margin-top: 4px;
                    font-size: 0.7rem;
                    color: #b45309;
                    font-weight: 600;
                    background: rgba(255, 193, 7, 0.14);
                    padding: 2px 8px;
                    border-radius: 10px;
                    width: fit-content;
                }

                .courses-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
                    gap: 24px;
                }
                .course-card {
                    background: #fff;
                    border: 1px solid rgba(0,0,0,0.06);
                    border-radius: 20px;
                    padding: 28px;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .course-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: var(--accent);
                }
                .course-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 20px 50px rgba(15, 23, 42, 0.10);
                }
                .course-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 16px;
                }
                .course-icon {
                    width: 52px; height: 52px;
                    border-radius: 14px;
                    background: color-mix(in srgb, var(--accent) 12%, transparent);
                    color: var(--accent);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .course-cat {
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    color: var(--accent);
                }
                .course-card h3 {
                    font-size: 1.35rem;
                    font-weight: 800;
                    color: #0c112b;
                    margin: 0 0 18px;
                }

                .course-meta {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 8px;
                    padding: 14px;
                    background: #f8fafc;
                    border-radius: 12px;
                    margin-bottom: 16px;
                }
                .meta-cell { display: flex; flex-direction: column; gap: 4px; }
                .meta-label {
                    font-size: 0.68rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: var(--text-gray);
                    font-weight: 700;
                }
                .meta-cell strong {
                    font-size: 0.92rem;
                    color: #0c112b;
                    font-weight: 700;
                }

                .course-highlight {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: rgba(255, 193, 7, 0.12);
                    color: #b45309;
                    padding: 6px 12px;
                    border-radius: 14px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    margin-bottom: 16px;
                    align-self: flex-start;
                }

                .course-outline {
                    flex-grow: 1;
                    margin-bottom: 18px;
                }
                .outline-title {
                    display: block;
                    font-size: 0.72rem;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: var(--accent-teal);
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                .course-outline ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .course-outline li {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    padding: 8px 0;
                    font-size: 0.9rem;
                    color: #334155;
                    border-bottom: 1px dashed rgba(0,0,0,0.05);
                }
                .course-outline li:last-child { border-bottom: none; }
                .course-outline li svg { flex-shrink: 0; margin-top: 2px; }

                .course-cta {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    background: var(--accent);
                    color: #fff;
                    padding: 12px 18px;
                    border-radius: 24px;
                    font-weight: 700;
                    font-size: 0.88rem;
                    text-decoration: none;
                    transition: gap 0.25s ease, opacity 0.25s ease;
                }
                .course-cta:hover { gap: 14px; opacity: 0.92; }

                /* WHY */
                .why-section { padding: 80px 0; background: #fff; }
                .why-card {
                    background: var(--bg-dark, #0c112b);
                    border-radius: 28px;
                    padding: 60px;
                    color: #fff;
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 60px;
                    position: relative;
                    overflow: hidden;
                }
                .why-card::before {
                    content: '';
                    position: absolute;
                    top: -120px; right: -120px;
                    width: 400px; height: 400px;
                    background: radial-gradient(circle, rgba(0, 194, 203, 0.35) 0%, transparent 70%);
                    pointer-events: none;
                }
                .why-left h2 {
                    font-size: 2.1rem;
                    font-weight: 800;
                    margin: 12px 0 18px;
                    color: #fff;
                }
                .why-left p {
                    color: rgba(255,255,255,0.78);
                    line-height: 1.7;
                    font-size: 1rem;
                }
                .why-right { display: flex; flex-direction: column; gap: 22px; }
                .why-item {
                    display: flex;
                    gap: 18px;
                    align-items: flex-start;
                }
                .why-num {
                    font-size: 1.05rem;
                    font-weight: 800;
                    color: var(--accent-teal);
                    background: rgba(0, 194, 203, 0.12);
                    width: 44px; height: 44px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .why-item strong {
                    display: block;
                    color: #fff;
                    font-size: 1rem;
                    margin-bottom: 4px;
                }
                .why-item p {
                    color: rgba(255,255,255,0.65);
                    font-size: 0.88rem;
                    margin: 0;
                    line-height: 1.55;
                }

                /* CTA */
                .ins-cta {
                    background: linear-gradient(135deg, rgba(0, 194, 203, 0.10) 0%, rgba(0, 70, 173, 0.06) 100%);
                    padding: 80px 0;
                    text-align: center;
                }
                .ins-cta h2 {
                    font-size: 2.2rem;
                    font-weight: 800;
                    color: #0c112b;
                    margin: 0 0 12px;
                }
                .ins-cta p {
                    color: var(--text-gray);
                    margin-bottom: 28px;
                    font-size: 1.02rem;
                }
                .cta-row {
                    display: flex;
                    gap: 14px;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                @media (max-width: 900px) {
                    .ins-hero h1 { font-size: 2.4rem; }
                    .why-card {
                        grid-template-columns: 1fr;
                        padding: 36px 28px;
                        gap: 36px;
                    }
                    .why-left h2 { font-size: 1.7rem; }
                    .section-head h2 { font-size: 1.8rem; }
                }
                @media (max-width: 560px) {
                    .ins-hero { padding: 130px 0 60px; }
                    .ins-hero h1 { font-size: 1.85rem; }
                    .courses-grid { grid-template-columns: 1fr; }
                    .course-meta { grid-template-columns: 1fr 1fr; }
                }
            `}</style>
        </main>
    );
}
