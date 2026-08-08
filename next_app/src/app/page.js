"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import danishImg from '../assets/danish.png';
import bilalImg from '../assets/bilal.png';
import rizwanImg from '../assets/ubaid-image.png';
import { industries } from '../data/industries';

const Home = () => {
    const insightsRef = useRef(null);
    
    const trackRefs = useRef([]);
    const careersRef = useRef(null);
    const careersImgRef = useRef(null);
    const careersTextRef = useRef(null);

    // Leadership data
    const leaders = [
        { name: 'Danish Faryad', role: 'Founder & CEO', img: danishImg.src, linkedin: 'https://www.linkedin.com/in/danish-faryad-2157a32a6' },
        { name: 'Muhammad Bilal', role: 'Chief Technology Officer', img: bilalImg.src, linkedin: 'https://www.linkedin.com/in/muhammad-bilal-9b950a3a6' },
        { name: 'Ubaid Umer', role: 'Managing Director', img: rizwanImg.src, linkedin: '' },
    ];

    useEffect(() => {
        const section = careersRef.current;
        if (!section) return;
        let raf = null;
        const lerp = (a, b, t) => a + (b - a) * t;
        const update = () => {
            const rect = section.getBoundingClientRect();
            const wh = window.innerHeight;
            // progress: 0 when sticky scene starts, 1 when it ends (scroll range = section.height - wh)
            const total = section.offsetHeight - wh;
            const scrolled = -rect.top;
            const p = Math.max(0, Math.min(1, scrolled / total));
            // image animates first 60%, then text appears
            const imgP = Math.min(1, p / 0.6);
            const textP = Math.max(0, Math.min(1, (p - 0.45) / 0.45));

            if (careersImgRef.current) {
                const w = lerp(100, 48, imgP);
                careersImgRef.current.style.width = `${w}%`;
                careersImgRef.current.style.borderRadius = `${lerp(0, 24, imgP)}px`;
            }
            if (careersTextRef.current) {
                careersTextRef.current.style.opacity = textP;
                careersTextRef.current.style.transform = `translateX(${lerp(40, 0, textP)}px)`;
            }
            raf = null;
        };
        const onScroll = () => { if (raf === null) raf = requestAnimationFrame(update); };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    useEffect(() => {
        const section = insightsRef.current;
        if (!section) return;

        let rafId = null;
        const update = () => {
            const rect = section.getBoundingClientRect();
            const wh = window.innerHeight;
            const total = rect.height + wh;
            const scrolled = wh - rect.top;
            const progress = Math.max(0, Math.min(1, scrolled / total));

            // very subtle percentage-based parallax (~10% max travel)
            const maxPct = 10;
            const centered = (progress - 0.5) * 2; // -1 .. 1
            trackRefs.current.forEach((track, i) => {
                if (!track) return;
                const dir = i === 1 ? 1 : -1;
                const pct = centered * maxPct * dir;
                track.style.transform = `translate3d(0, ${pct}%, 0)`;
            });
            rafId = null;
        };

        const onScroll = () => {
            if (rafId === null) rafId = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <>
            {/* VERTICAL SIDE TAB */}
            <div className="side-tab">Let's Talk Business</div>

            {/* HERO SECTION WITH VIDEO */}
            <section id="home">
                {/* CSS-animated tech background — always works, no network needed */}
                <div className="tech-bg">
                    <div className="tech-grid"></div>
                    <div className="tech-orb orb-1"></div>
                    <div className="tech-orb orb-2"></div>
                    <div className="tech-orb orb-3"></div>
                </div>
                {/* Video layered on top — shows if loads, otherwise tech-bg shows through */}
                <div className="video-background">
                    <video autoPlay muted loop playsInline preload="auto">
                        {/* Drop a tech mp4 here for guaranteed playback */}
                        <source src="/hero-bg.mp4" type="video/mp4" />
                        <source
                            src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-metropolis-at-night-with-lots-of-lights-34444-large.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="video-overlay"></div>

                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-heading">
                            <span className="line-text">Building at the Speed of AI</span>
                        </h1>
                        <p className="hero-subtitle">
                            We help companies across North America, Middle East, Africa and Asia Pacific with technological development
                        </p>

                        <Link href="#" className="btn-teal-hero">Get in Touch</Link>

                        <div className="featured-in-new">
                            <h3>Featured In:</h3>
                            <div className="featured-logos-grid-new">
                                <span className="logo-text logo-forbes">Forbes</span>
                                <span className="logo-text logo-bi">BUSINESS<br/>INSIDER</span>
                                <span className="logo-text logo-nyw">NEW YORK WEEKLY</span>
                                <span className="logo-text logo-mash">Mashable</span>
                                <span className="logo-text logo-kt">Khaleej Times</span>
                                <span className="logo-text logo-yf">yahoo!<small>finance</small></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECH STACK MARQUEE */}
            <section className="tech-marquee-section">
                <div className="container">
                    <p className="marquee-label">Technologies We Master</p>
                </div>
                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {[...Array(2)].map((_, dup) => (
                            <div className="marquee-group" key={dup} aria-hidden={dup === 1}>
                                {[
                                    { name: 'JavaScript', folder: 'javascript', file: 'javascript-original', color: '#F7DF1E' },
                                    { name: 'Python', folder: 'python', file: 'python-original', color: '#3776AB' },
                                    { name: 'React', folder: 'react', file: 'react-original', color: '#61DAFB' },
                                    { name: 'Next.js', folder: 'nextjs', file: 'nextjs-original', color: '#0c112b' },
                                    { name: 'TypeScript', folder: 'typescript', file: 'typescript-original', color: '#3178C6' },
                                    { name: 'Node.js', folder: 'nodejs', file: 'nodejs-original', color: '#339933' },
                                    { name: 'Vue.js', folder: 'vuejs', file: 'vuejs-original', color: '#4FC08D' },
                                    { name: 'Angular', folder: 'angularjs', file: 'angularjs-original', color: '#DD0031' },
                                    { name: 'Tailwind', folder: 'tailwindcss', file: 'tailwindcss-original', color: '#06B6D4' },
                                    { name: 'MongoDB', folder: 'mongodb', file: 'mongodb-original', color: '#47A248' },
                                    { name: 'PostgreSQL', folder: 'postgresql', file: 'postgresql-original', color: '#4169E1' },
                                    { name: 'Docker', folder: 'docker', file: 'docker-original', color: '#2496ED' },
                                    { name: 'AWS', folder: 'amazonwebservices', file: 'amazonwebservices-plain-wordmark', color: '#FF9900' },
                                    { name: 'GraphQL', folder: 'graphql', file: 'graphql-plain', color: '#E10098' },
                                ].map((tech) => (
                                    <div className="tech-card" key={`${dup}-${tech.name}`}>
                                        <img
                                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.folder}/${tech.file}.svg`}
                                            alt={tech.name}
                                            className="tech-icon"
                                            loading="lazy"
                                        />
                                        <span className="tech-name" style={{ color: tech.color }}>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRANSFORM SECTION */}
            <section className="transform-section">
                <div className="container">
                    <div className="transform-header">
                        <span className="transform-eyebrow">
                            <span className="eyebrow-line"></span>
                            What We Do
                            <span className="eyebrow-line"></span>
                        </span>
                        <h2 className="transform-title">Transform Your Business</h2>
                        <p className="transform-subtitle">End-to-end engineering services that turn bold ideas into production-grade products.</p>
                    </div>

                    <div className="transform-grid">
                        {[
                            {
                                title: 'Generative AI',
                                desc: 'Custom LLM apps, AI agents, and intelligent automation that scales.',
                                img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
                                icon: 'M12 2a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3 3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-7 9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8zm4 2v4m6-4v4m-3-4v4',
                            },
                            {
                                title: 'Mobile App Development',
                                desc: 'Native iOS, Android & cross-platform apps engineered for performance.',
                                img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
                                icon: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm5 16h4',
                            },
                            {
                                title: 'Cybersecurity',
                                desc: 'Threat detection, secure architecture, and compliance-ready hardening.',
                                img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
                                icon: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z',
                            },
                            {
                                title: 'Cloud Operations',
                                desc: 'AWS, Azure & GCP infrastructure, DevOps, and 24/7 SRE expertise.',
                                img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
                                icon: 'M7 16a5 5 0 0 1-1-9.9A5 5 0 0 1 16 6a4 4 0 0 1 1 7.9M7 16h10M12 12v6m-3-3l3 3 3-3',
                            },
                        ].map((s) => (
                            <div className="transform-card" key={s.title}>
                                <div className="transform-img-wrap">
                                    <img src={s.img} alt={s.title} loading="lazy" />
                                    <div className="transform-img-overlay"></div>
                                </div>
                                <div className="transform-content">
                                    <div className="transform-icon">
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d={s.icon}/>
                                        </svg>
                                    </div>
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                    <span className="transform-link">
                                        Learn more
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="transform-cta">
                        <Link href="/services" className="btn-browse-all">
                            <span>Browse All Services</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES IMPACT */}
            <section className="section-padding" style={{ backgroundColor: '#fdfdfd' }}>
                <div className="container">
                    <h2 className="section-title" style={{ fontSize: '3rem' }}>Discover our Impact Across Industries</h2>
                    <div className="industry-list">
                        {industries.map((ind) => (
                            <Link key={ind.slug} href={`/industries/${ind.slug}`} className="industry-item">
                                <i className={ind.icon}></i> {ind.title}
                            </Link>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Link href="/industries" className="btn btn-teal">See All Industries</Link>
                    </div>
                </div>
            </section>

            {/* AWARDS & CERTIFICATIONS */}
            <section className="awards-section">
                <div className="container">
                    <span className="awards-eyebrow">
                        <span className="eyebrow-line"></span>
                        Recognition
                        <span className="eyebrow-line"></span>
                    </span>
                    <h2 className="awards-title">Awards &amp; Certifications</h2>
                    <p className="awards-subtitle">Trusted by global leaders, recognized by industry experts.</p>

                    <div className="awards-grid">
                        {[
                            { rank: '#1', label: 'Top Web Developers', year: '2025', sub: 'Clutch Global' },
                            { rank: 'Top', label: 'AI Solutions Provider', year: '2025', sub: 'GoodFirms' },
                            { rank: '5★', label: 'Verified Agency', year: '2024', sub: 'Upwork Enterprise' },
                            { rank: 'Pro', label: 'ISO 27001 Certified', year: '2024', sub: 'Information Security' },
                        ].map((a) => (
                            <div className="award-card" key={a.label}>
                                <div className="award-medal">
                                    <svg viewBox="0 0 80 100" width="64" height="80" aria-hidden="true">
                                        <defs>
                                            <linearGradient id={`g-${a.label}`} x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#00c2cb"/>
                                                <stop offset="100%" stopColor="#0046ad"/>
                                            </linearGradient>
                                        </defs>
                                        <path d="M20 0 L60 0 L52 36 L28 36 Z" fill="#ffd166" opacity="0.9"/>
                                        <path d="M28 36 L52 36 L46 48 L34 48 Z" fill="#e09a3a"/>
                                        <circle cx="40" cy="68" r="28" fill={`url(#g-${a.label})`}/>
                                        <circle cx="40" cy="68" r="22" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
                                        <text x="40" y="73" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800" fontFamily="Outfit, sans-serif">{a.rank}</text>
                                    </svg>
                                </div>
                                <div className="award-text">
                                    <div className="award-label">{a.label}</div>
                                    <div className="award-sub">{a.sub} · {a.year}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURED INSIGHTS */}
            <section className="insights-section" ref={insightsRef}>
                <div className="container">
                    <div className="insights-grid">
                        <div className="insights-left">
                            <span className="insights-eyebrow">Featured Insights</span>
                            <h2 className="insights-title">
                                Stories of our<br/>
                                transformations across<br/>
                                Services and Industries
                            </h2>
                            <p className="insights-subtitle">From Concept to Completion</p>
                            <Link href="#" className="btn-explore-pill">Explore More</Link>
                        </div>

                        <div className="insights-right">
                            {[
                                {
                                    direction: 'up',
                                    cards: [
                                        { type: 'Case Study', title: 'US Fashion Resale Platform Scales to 100K Monthly Transactions', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80' },
                                        { type: 'Blogs', title: 'How Cloud Computing Can Transform Small Businesses', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80', cta: true },
                                        { type: 'Case Study', title: 'Healthcare AI Reduces Patient Wait Times by 40%', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80' },
                                    ],
                                },
                                {
                                    direction: 'down',
                                    cards: [
                                        { type: 'Blogs', title: 'Custom Web Application Development: Everything You Need to Know', img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=600&q=80' },
                                        { type: 'Blogs', title: 'Trends of Mobile Design: What\'s Next for Your Business?', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80' },
                                        { type: 'Blogs', title: 'How Generative AI is Transforming Business', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80' },
                                    ],
                                },
                                {
                                    direction: 'up',
                                    cards: [
                                        { type: 'Case Study', title: 'Hospitality AI Platform Reconciles $300M+ in OTA Commissions Automatically', img: 'https://images.unsplash.com/photo-1551288049-bbbda595c7b8?auto=format&fit=crop&w=600&q=80' },
                                        { type: 'Case Study', title: 'Pakistan Furniture Leader\'s Shopify Migration Drives 55% Growth', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80' },
                                        { type: 'Case Study', title: 'US Fintech\'s AI Financial Modeling Secures $2M+ Funding', img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80' },
                                    ],
                                },
                            ].map((col, ci) => (
                                <div className="insights-col" key={ci}>
                                    <div className="insights-track" ref={(el) => (trackRefs.current[ci] = el)}>
                                        {[...col.cards, ...col.cards].map((card, i) => (
                                            <article className="insight-card" key={`${ci}-${i}`}>
                                                <img src={card.img} alt={card.title} loading="lazy" />
                                                <div className="insight-overlay">
                                                    <span className={`insight-badge ${card.type === 'Blogs' ? 'badge-blog' : 'badge-case'}`}>{card.type}</span>
                                                    <h3 className="insight-title">{card.title}</h3>
                                                    {card.cta && (
                                                        <span className="insight-cta">Explore More <i className="fas fa-arrow-right"></i></span>
                                                    )}
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ACHIEVEMENTS */}
            <section className="achieve-section">
                <div className="container">
                    <div className="bento-section">
                        <div>
                            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '3.5rem' }}>Dev Artist's Achievements</h2>
                            <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', marginBottom: '30px' }}>Unlocking potential across the globe with our dedicated engineering teams.</p>
                            <Link href="#" className="btn btn-teal">Join Us Now</Link>
                        </div>
                        <div className="achievements-grid">
                            <div className="achieve-item"><h2>800+</h2><p>Successful Projects</p></div>
                            <div className="achieve-item"><h2>11+</h2><p>Countries Supported</p></div>
                            <div className="achieve-item"><h2>90+</h2><p>Active Clients</p></div>
                            <div className="achieve-item"><h2>6+</h2><p>Years Experience</p></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SCROLL-DRIVEN CAREERS SECTION */}
            <section className="careers-scroll-section" ref={careersRef}>
                <div className="careers-sticky">
                    <div className="careers-bg-orb careers-orb-1"></div>
                    <div className="careers-bg-orb careers-orb-2"></div>

                    <div className="careers-image" ref={careersImgRef}>
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" alt="Team Meeting" />
                        <div className="careers-image-overlay"></div>
                        <div className="careers-floating-badge badge-top">
                            <div className="badge-dot"></div>
                            <span>Now Hiring · Globally</span>
                        </div>
                        <div className="careers-floating-badge badge-bottom">
                            <strong>250+</strong>
                            <span>Engineers Worldwide</span>
                        </div>
                    </div>

                    <div className="careers-text-wrap">
                        <div className="careers-text" ref={careersTextRef}>
                            <span className="careers-eyebrow">
                                <span className="eyebrow-line"></span>
                                Careers
                            </span>
                            <h2 className="careers-headline">
                                Human-first is our<br/>
                                <span className="headline-accent">foundation<span className="dot-accent">.</span></span>
                            </h2>
                            <p className="careers-sub">Join a culture that celebrates excellence and diversity, Globally!</p>
                            <Link href="#" className="btn-careers-pill">
                                <span>Join Us</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* LEADERSHIP MARQUEE SLIDER */}
            <section className="leaders-section">
                <div className="leaders-bg-orb leaders-orb-a"></div>
                <div className="leaders-bg-orb leaders-orb-b"></div>
                <div className="container">
                    <div className="leaders-header">
                        <span className="leaders-eyebrow">
                            <span className="eyebrow-line"></span>
                            Leadership
                            <span className="eyebrow-line"></span>
                        </span>
                        <h2 className="leaders-title">Our Global Leadership</h2>
                        <p className="leaders-subtitle">Meet the visionaries driving innovation across continents.</p>
                    </div>
                </div>

                <div className="leaders-marquee">
                    <div className="leaders-marquee-track">
                        {leaders.map((l, i) => (
                            <div className="leader-card-new" key={`${l.name}-${i}`}>
                                <div className="leader-img-new">
                                    <img src={l.img} alt={l.name} loading="lazy" />
                                    <div className="leader-img-overlay"></div>
                                    <a href={l.linkedin} target="_blank" rel="noopener noreferrer" className="leader-linkedin" aria-label={`${l.name} LinkedIn`}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-3.37-4-3.11-4 0v5.6h-3v-11h3v1.76c1.4-2.58 7-2.78 7 2.47v6.77z"/></svg>
                                    </a>
                                    <div className="leader-info-overlay">
                                        <div className="leader-name-new">{l.name}</div>
                                        <div className="leader-role-new">{l.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTEGRATED CONTACT SECTION */}
            <section id="contact" className="section-padding" style={{ background: '#f8fafc', scrollMarginTop: '90px' }}>
                <div className="container">
                    <div className="contact-integrated">
                        <div className="contact-form-container">
                            <h2>Get in Touch</h2>
                            <form>
                                <div className="form-grid">
                                    <input type="text" placeholder="First Name" className="form-control" />
                                    <input type="text" placeholder="Last Name" className="form-control" />
                                </div>
                                <div className="mb-20">
                                    <input type="email" placeholder="Work Email" className="form-control" />
                                </div>
                                <div className="mb-20">
                                    <select className="form-control">
                                        <option value="">Interested In</option>
                                        <option value="staffing">Staff Augmentation</option>
                                        <option value="custom">Custom Software</option>
                                    </select>
                                </div>
                                <div className="mb-20">
                                    <textarea placeholder="Message" className="form-control"></textarea>
                                </div>
                                <button type="submit" className="btn-submit-form">Send Message</button>
                            </form>
                        </div>
                        <div className="contact-sidebar">
                            <div className="sidebar-item">
                                <h3><i className="fas fa-map-marker-alt"></i> Headquarters (Bradford)</h3>
                                <p>Bradford, United Kingdom</p>
                                <p>
                                    <a
                                        href="https://wa.me/447423253692"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="sidebar-phone"
                                        aria-label="Chat with Bradford office on WhatsApp"
                                    >
                                        <i className="fab fa-whatsapp"></i> +44 7423253692
                                    </a>
                                </p>
                            </div>
                            <div className="sidebar-item">
                                <h3><i className="fas fa-map-marker-alt"></i> Sub Office (Faisalabad)</h3>
                                <p>Faisalabad, Punjab, Pakistan</p>
                                <p>
                                    <a
                                        href="https://wa.me/923203000555"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="sidebar-phone"
                                        aria-label="Chat with Faisalabad office on WhatsApp"
                                    >
                                        <i className="fab fa-whatsapp"></i> +92 320 3000555
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="https://wa.me/923343474707"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="sidebar-phone"
                                        aria-label="Chat with Faisalabad office on WhatsApp"
                                    >
                                        <i className="fab fa-whatsapp"></i> +92 334 3474707
                                    </a>
                                </p>
                            </div>
                            <div className="sidebar-item">
                                <h3><i className="fas fa-envelope"></i> Email Us</h3>
                                <p>thedevartist.1@gmail.com</p>
                            </div>
                            <div className="sidebar-item">
                                <h3><i className="far fa-clock"></i> Working Hours</h3>
                                <p>Mon-Sat, 9am - 6pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                /* === Animated tech background (CSS-only, always works) === */
                .tech-bg {
                    position: absolute;
                    inset: 0;
                    z-index: -2;
                    background: linear-gradient(135deg, #0a0e27 0%, #0c1445 50%, #0a1929 100%);
                    overflow: hidden;
                }
                .tech-grid {
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(0, 194, 203, 0.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 194, 203, 0.08) 1px, transparent 1px);
                    background-size: 50px 50px;
                    animation: gridMove 20s linear infinite;
                }
                @keyframes gridMove {
                    0%   { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }
                .tech-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.55;
                    animation: orbFloat 18s ease-in-out infinite;
                }
                .orb-1 {
                    width: 500px; height: 500px;
                    background: radial-gradient(circle, #00c2cb 0%, transparent 70%);
                    top: -100px; left: -100px;
                }
                .orb-2 {
                    width: 600px; height: 600px;
                    background: radial-gradient(circle, #0046ad 0%, transparent 70%);
                    top: 30%; right: -150px;
                    animation-delay: -6s;
                }
                .orb-3 {
                    width: 450px; height: 450px;
                    background: radial-gradient(circle, #00c2cb 0%, transparent 70%);
                    bottom: -100px; left: 30%;
                    animation-delay: -12s;
                }
                @keyframes orbFloat {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50%      { transform: translate(40px, -30px) scale(1.1); }
                }

                /* === Hero text === */
                .hero-heading {
                    font-size: 3.6rem;
                    font-weight: 800;
                    line-height: 1.1;
                    color: #fff;
                    letter-spacing: -1.5px;
                    margin-bottom: 20px;
                    display: block;
                    text-shadow: 0 2px 18px rgba(0, 0, 0, 0.85), 0 0 4px rgba(0, 0, 0, 0.6);
                }
                .line-text {
                    display: inline;
                    vertical-align: middle;
                }
                .blue-cursor-block {
                    background-color: var(--primary-blue);
                    width: 14px;
                    height: 42px;
                    display: inline-block;
                    margin: 0 12px;
                    vertical-align: middle;
                    position: relative;
                    top: -4px;
                    animation: blink 1.2s ease-in-out infinite;
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50%      { opacity: 0.4; }
                }
                .hero-subtitle {
                    font-weight: 500;
                    color: #fff;
                    font-size: 1.25rem;
                    line-height: 1.5;
                    margin-bottom: 36px;
                    max-width: 720px;
                    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.85), 0 0 3px rgba(0, 0, 0, 0.6);
                }
                .btn-teal-hero {
                    display: inline-block;
                    background-color: var(--accent-teal);
                    color: #fff;
                    padding: 15px 40px;
                    border-radius: 40px;
                    font-weight: 700;
                    font-size: 1rem;
                    transition: 0.3s;
                }
                .btn-teal-hero:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 24px rgba(0, 194, 203, 0.35);
                    background-color: #00adb5;
                }
                .featured-in-new {
                    margin-top: 60px;
                }
                .featured-in-new h3 {
                    font-size: 1.4rem;
                    color: #fff;
                    margin-bottom: 24px;
                    font-weight: 600;
                    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.85), 0 0 3px rgba(0, 0, 0, 0.6);
                }
                .featured-logos-grid-new {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, auto));
                    justify-content: start;
                    align-items: center;
                    gap: 28px 70px;
                    max-width: 640px;
                }
                .logo-text {
                    color: #fff;
                    opacity: 0.95;
                    line-height: 1;
                    transition: opacity 0.2s;
                    user-select: none;
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.85), 0 0 3px rgba(0, 0, 0, 0.6);
                }
                .logo-text:hover { opacity: 1; }

                /* Forbes — bold serif */
                .logo-forbes {
                    font-family: 'Times New Roman', Georgia, serif;
                    font-weight: 900;
                    font-size: 1.7rem;
                    font-style: italic;
                    letter-spacing: -1px;
                }
                /* Business Insider — clean sans, two lines, light weight */
                .logo-bi {
                    font-family: Georgia, serif;
                    font-weight: 400;
                    font-size: 0.78rem;
                    line-height: 1.15;
                    letter-spacing: 1.5px;
                    text-align: left;
                }
                /* New York Weekly — old-school serif */
                .logo-nyw {
                    font-family: 'Times New Roman', Georgia, serif;
                    font-weight: 700;
                    font-size: 0.95rem;
                    letter-spacing: 0.5px;
                    font-variant: small-caps;
                }
                /* Mashable — bold sans */
                .logo-mash {
                    font-family: 'Outfit', sans-serif;
                    font-weight: 800;
                    font-size: 1.25rem;
                    letter-spacing: -0.5px;
                }
                /* Khaleej Times — italic serif */
                .logo-kt {
                    font-family: 'Times New Roman', serif;
                    font-weight: 700;
                    font-style: italic;
                    font-size: 1.15rem;
                    letter-spacing: 0;
                }
                /* Yahoo Finance — bold playful */
                .logo-yf {
                    font-family: 'Outfit', sans-serif;
                    font-weight: 800;
                    font-size: 1.4rem;
                    letter-spacing: -1.2px;
                    display: inline-flex;
                    align-items: baseline;
                    gap: 4px;
                }
                .logo-yf small {
                    font-size: 0.55rem;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    opacity: 0.85;
                }
                @media (max-width: 768px) {
                    .hero-heading { font-size: 2.2rem; letter-spacing: -1px; }
                    .blue-cursor-block { width: 10px; height: 26px; margin: 0 8px; top: -3px; }
                    .hero-subtitle { font-size: 1rem; }
                    .featured-logos-grid-new { grid-template-columns: repeat(2, auto); gap: 18px 36px; }
                    .featured-logos-grid-new img { height: 18px; }
                    .tech-orb { filter: blur(50px); }
                }
            `}</style>
        </>
    );
};

export default Home;
