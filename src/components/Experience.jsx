import React from 'react';
import { MapPin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: 'Cyble',
            role: 'Software Development Engineering - 1',
            period: 'Aug 2025 - Present',
            location: 'Bangalore, India',
            description: [
                'Work on backend systems powering customer-facing alert management, processing 1B+ lifetime alerts with continuously increasing throughput.',
                'Own user access and UI-facing APIs for querying, updating, exporting, and aggregating alert data across 50+ internal services.',
                'Build and optimize Kafka consumers capable of handling high-volume burst traffic, with strict validation and persistence in PostgreSQL.',
                'Significantly improved API response times by optimizing SQL queries, indexing strategies, and service-level bottlenecks.',
                'Improved system reliability by identifying and fixing production memory leaks, reducing error rates and customer escalations.',
                'Contributed to GDPR compliance, implementing data access and export workflows across existing services.',
                'Support production operations by debugging Kubernetes workloads (CrashLoopBackOff, logs, env configs) and coordinating deployments via Devtron.'
            ]
        },
        {
            company: 'Cyble',
            role: 'Software Engineering Intern',
            period: 'Feb 2025 - Jul 2025',
            location: 'Remote',
            description: [
                'Contributed to backend components for production, customer-facing systems under real-world load.',
                'Assisted in debugging containerized Kubernetes services, resolving runtime failures and configuration issues.',
                'Took ownership of backend modules early, shipping fixes and improvements to production.',
                'Converted from intern to full-time engineer based on production ownership and reliability contributions.'
            ]
        }
    ];

    return (
        <section id="experience" style={{ padding: '6rem 0' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                <h2 className="section-title">
                    <span className="text-secondary">01.</span> Experience
                </h2>

                <div style={{ paddingLeft: '0' }}>
                    {experiences.map((exp, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            gap: '2rem',
                            marginBottom: '4rem',
                            flexDirection: 'row' // Default to row, mobile could stack via media query in CSS ideally, but inline for now
                        }}>

                            {/* Date Column - Desktop Only */}
                            <div style={{
                                minWidth: '160px',
                                textAlign: 'right',
                                paddingTop: '0.25rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                gap: '0.5rem'
                            }} className="mono hidden-mobile">
                                <span className="text-accent" style={{ fontWeight: 'bold' }}>{exp.period}</span>
                                <span className="text-dim" style={{ fontSize: '0.85rem' }}>{exp.location}</span>
                            </div>

                            {/* Timeline Graphic Column - Desktop Only */}
                            <div style={{
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }} className="hidden-mobile">
                                {/* Dot */}
                                <div style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-primary)',
                                    border: '2px solid var(--accent-primary)',
                                    zIndex: 2,
                                    marginTop: '6px'
                                }}></div>
                                {/* Connector Line */}
                                {index !== experiences.length - 1 && (
                                    <div style={{
                                        width: '2px',
                                        flexGrow: 1,
                                        background: 'var(--grid-color)',
                                        marginTop: '0.5rem',
                                        marginBottom: '-1rem' // Extend to next dot
                                    }}></div>
                                )}
                            </div>

                            {/* Content Card Column */}
                            <div className="card" style={{ flex: 1 }}>
                                <header style={{ marginBottom: '1.5rem' }}>
                                    {/* Mobile Date Header */}
                                    <div className="mobile-only" style={{ marginBottom: '1rem', borderBottom: '1px solid var(--grid-color)', paddingBottom: '0.5rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            <span className="mono text-accent" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{exp.period}</span>
                                            <span className="mono text-dim" style={{ fontSize: '0.8rem' }}>{exp.location}</span>
                                        </div>
                                    </div>

                                    <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.25rem' }}>
                                        {exp.role} <span className="text-accent">@ {exp.company}</span>
                                    </h3>
                                </header>

                                <ul style={{ listStyle: 'none' }}>
                                    {exp.description.map((item, i) => (
                                        <li key={i} style={{
                                            marginBottom: '0.75rem',
                                            display: 'flex',
                                            gap: '1rem',
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.95rem'
                                        }}>
                                            <span className="text-accent" style={{ minWidth: '10px' }}>▹</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
