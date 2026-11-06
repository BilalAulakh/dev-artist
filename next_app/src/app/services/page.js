import Link from 'next/link';
import { services } from '../../data/services';

export const metadata = {
    title: 'Our Services — thedev artist',
    description: 'Engineering, marketing, and reputation services that help your business win.',
};

export default function ServicesPage() {
    const grouped = services.reduce((acc, s) => {
        (acc[s.category] = acc[s.category] || []).push(s);
        return acc;
    }, {});

    return (
        <main className="services-page">
            <section className="services-hero">
                <div className="services-hero-bg-orb services-hero-orb-a"></div>
                <div className="services-hero-bg-orb services-hero-orb-b"></div>
                <div className="container">
                    <span className="services-eyebrow">
                        <span className="eyebrow-line"></span>
                        Our Services
                        <span className="eyebrow-line"></span>
                    </span>
                    <h1 className="services-hero-title">Everything you need,<br/>under one roof.</h1>
                    <p className="services-hero-sub">
                        From mobile apps and AI automation to SEO and reputation management — we partner with
                        ambitious businesses to ship work that moves metrics.
                    </p>
                </div>
            </section>

            <section className="services-list">
                <div className="container">
                    {Object.entries(grouped).map(([cat, list]) => (
                        <div className="services-category" key={cat}>
                            <div className="services-cat-header">
                                <div className="services-cat-line"></div>
                                <h2 className="services-cat-title">{cat}</h2>
                                <div className="services-cat-line"></div>
                            </div>
                            <div className="services-grid">
                                {list.map((s) => (
                                    <Link href={`/services/${s.slug}`} key={s.slug} className="service-tile">
                                        <div className="service-tile-icon">
                                            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <path d={s.icon}/>
                                            </svg>
                                        </div>
                                        <div className="service-tile-body">
                                            <div className="service-tile-tagline">{s.tagline}</div>
                                            <h3>{s.title}</h3>
                                            <p>{s.short}</p>
                                            <span className="service-tile-link">
                                                Learn more
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="services-final-cta">
                <div className="container">
                    <h2>Not sure which service fits?</h2>
                    <p>Tell us about your goals — we&apos;ll recommend the right combination, no obligation.</p>
                    <Link href="/#contact" className="btn-careers-pill">Talk to our team</Link>
                </div>
            </section>
        </main>
    );
}
