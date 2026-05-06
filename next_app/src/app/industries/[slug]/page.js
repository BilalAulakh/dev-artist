import Link from 'next/link';
import { notFound } from 'next/navigation';
import { industries, getIndustryBySlug } from '../../../data/industries';
import { getServiceBySlug } from '../../../data/services';

export function generateStaticParams() {
    return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const industry = getIndustryBySlug(slug);
    if (!industry) return { title: 'Industry not found' };
    return {
        title: `${industry.title} — thedev artist`,
        description: industry.short,
    };
}

export default async function IndustryDetailPage({ params }) {
    const { slug } = await params;
    const industry = getIndustryBySlug(slug);
    if (!industry) notFound();

    const related = (industry.relatedServices || [])
        .map((s) => getServiceBySlug(s))
        .filter(Boolean);

    return (
        <main className="service-detail">
            <section className="service-hero">
                <div className="service-hero-bg-orb a"></div>
                <div className="service-hero-bg-orb b"></div>
                <div className="container">
                    <Link href="/industries" className="service-breadcrumb">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
                        All Industries
                    </Link>

                    <div className="service-hero-grid">
                        <div>
                            <span className="service-hero-cat">Industry</span>
                            <h1 className="service-hero-title">{industry.title}</h1>
                            <p className="service-hero-tagline">{industry.tagline}</p>
                            <p className="service-hero-desc">{industry.long}</p>
                            <div className="service-hero-actions">
                                <Link href="/contact" className="btn-careers-pill">Discuss your project</Link>
                                <a href="#how-we-help" className="service-secondary-btn">See how we help →</a>
                            </div>
                        </div>
                        <div className="service-hero-icon-wrap">
                            <div className="service-hero-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className={industry.icon} style={{ fontSize: '4.5rem', color: 'var(--accent-teal)' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-features" id="challenges">
                <div className="container">
                    <span className="service-section-eyebrow">The Reality</span>
                    <h2 className="service-section-title">Common challenges in {industry.title}</h2>
                    <div className="service-features-grid">
                        {industry.challenges.map((c, i) => (
                            <div className="service-feature-card" key={i}>
                                <div className="service-feature-num">{String(i + 1).padStart(2, '0')}</div>
                                <p>{c}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-process" id="how-we-help">
                <div className="container">
                    <span className="service-section-eyebrow">How We Help</span>
                    <h2 className="service-section-title">What we ship for {industry.title} teams</h2>
                    <div className="service-process-grid">
                        {industry.howWeHelp.map((h, i) => (
                            <div className="service-process-step" key={i}>
                                <div className="service-process-num">{i + 1}</div>
                                <h3>{h.split(' ').slice(0, 3).join(' ')}</h3>
                                <p>{h}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-tech">
                <div className="container">
                    <span className="service-section-eyebrow">Use Cases</span>
                    <h2 className="service-section-title">Where we&apos;ve shipped</h2>
                    <div className="service-tech-pills">
                        {industry.useCases.map((u) => (
                            <span className="service-tech-pill" key={u}>{u}</span>
                        ))}
                    </div>
                </div>
            </section>

            {related.length > 0 && (
                <section className="service-related">
                    <div className="container">
                        <span className="service-section-eyebrow">Services for {industry.title}</span>
                        <h2 className="service-section-title">Capabilities we bring</h2>
                        <div className="service-related-grid">
                            {related.map((r) => (
                                <Link href={`/services/${r.slug}`} key={r.slug} className="service-related-card">
                                    <div className="service-related-icon">
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d={r.icon} />
                                        </svg>
                                    </div>
                                    <h3>{r.title}</h3>
                                    <p>{r.short}</p>
                                    <span className="service-related-link">Explore →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="service-cta">
                <div className="container">
                    <h2>Ready to build for {industry.title}?</h2>
                    <p>Tell us about your goals. We&apos;ll come back within one business day.</p>
                    <Link href="/contact" className="btn-careers-pill">Start the conversation</Link>
                </div>
            </section>
        </main>
    );
}
