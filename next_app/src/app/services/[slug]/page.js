import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '../../../data/services';

export function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) return { title: 'Service not found' };
    return {
        title: `${service.title} — thedev artist`,
        description: service.short,
    };
}

export default async function ServiceDetailPage({ params }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) notFound();

    const related = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

    return (
        <main className="service-detail">
            <section className="service-hero">
                <div className="service-hero-bg-orb a"></div>
                <div className="service-hero-bg-orb b"></div>
                <div className="container">
                    <Link href="/services" className="service-breadcrumb">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                        All Services
                    </Link>

                    <div className="service-hero-grid">
                        <div>
                            <span className="service-hero-cat">{service.category}</span>
                            <h1 className="service-hero-title">{service.title}</h1>
                            <p className="service-hero-tagline">{service.tagline}</p>
                            <p className="service-hero-desc">{service.long}</p>
                            <div className="service-hero-actions">
                                <Link href="/#contact" className="btn-careers-pill">Get a free quote</Link>
                                <a href="#features" className="service-secondary-btn">See what&apos;s included →</a>
                            </div>
                        </div>
                        <div className="service-hero-icon-wrap">
                            <div className="service-hero-icon">
                                <svg viewBox="0 0 24 24" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d={service.icon}/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-features" id="features">
                <div className="container">
                    <span className="service-section-eyebrow">What&apos;s Included</span>
                    <h2 className="service-section-title">Everything you get with {service.title}</h2>
                    <div className="service-features-grid">
                        {service.features.map((f, i) => (
                            <div className="service-feature-card" key={i}>
                                <div className="service-feature-num">{String(i + 1).padStart(2, '0')}</div>
                                <p>{f}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-process">
                <div className="container">
                    <span className="service-section-eyebrow">Our Process</span>
                    <h2 className="service-section-title">How we deliver</h2>
                    <div className="service-process-grid">
                        {service.process.map((p, i) => (
                            <div className="service-process-step" key={i}>
                                <div className="service-process-num">{i + 1}</div>
                                <h3>{p.step}</h3>
                                <p>{p.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-tech">
                <div className="container">
                    <span className="service-section-eyebrow">Tools &amp; Tech</span>
                    <h2 className="service-section-title">Stack we work with</h2>
                    <div className="service-tech-pills">
                        {service.tech.map((t) => (
                            <span className="service-tech-pill" key={t}>{t}</span>
                        ))}
                    </div>
                </div>
            </section>

            {related.length > 0 && (
                <section className="service-related">
                    <div className="container">
                        <span className="service-section-eyebrow">Related Services</span>
                        <h2 className="service-section-title">More in {service.category}</h2>
                        <div className="service-related-grid">
                            {related.map((r) => (
                                <Link href={`/services/${r.slug}`} key={r.slug} className="service-related-card">
                                    <div className="service-related-icon">
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d={r.icon}/>
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
                    <h2>Ready to get started with {service.title}?</h2>
                    <p>Tell us about your project. We&apos;ll get back within one business day.</p>
                    <Link href="/#contact" className="btn-careers-pill">Start the conversation</Link>
                </div>
            </section>
        </main>
    );
}
