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
                'Designed and developed scalable backend services using Python, FastAPI, and Go, supporting high-throughput alert ingestion.',
                'Worked on distributed Kafka-based systems handling over 1 billion alerts, ensuring reliability, fault tolerance, and performance under peak load.',
                'Investigated and resolved production issues, participating in incident triage and root-cause analysis to improve system stability.',
                'Contributed to infrastructure and deployment workflows (Devtron, CI/CD) to improve release reliability and operational efficiency.'
            ]
        },
        {
            company: 'Cyble',
            role: 'Software Engineering Intern',
            period: 'Feb 2025 - Jul 2025',
            location: 'Remote',
            description: [
                'Developed backend components and automation using Python for production systems.',
                'Built and maintained API/UI test frameworks and integrated them into Jenkins CI/CD.',
                'Assisted in debugging and resolving issues in containerized, Kubernetes-based services.',
                'Followed engineering best practices including code reviews, documentation, and agile workflows.'
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

                            {/* Date Column */}
                            <div style={{
                                minWidth: '160px',
                                textAlign: 'right',
                                paddingTop: '0.25rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                gap: '0.5rem'
                            }} className="mono">
                                <span className="text-accent" style={{ fontWeight: 'bold' }}>{exp.period}</span>
                                <span className="text-dim" style={{ fontSize: '0.85rem' }}>{exp.location}</span>
                            </div>

                            {/* Timeline Graphic Column */}
                            <div style={{
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
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
