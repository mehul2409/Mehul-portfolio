import React from 'react';
import { Award, BookOpen } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" style={{ padding: '6rem 0' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <h2 className="section-title">
                    <span className="text-secondary">04.</span> Education & Certifications
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>

                    {/* Degree Card */}
                    <div className="card" style={{ height: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <BookOpen className="text-accent" size={32} />
                            <div>
                                <h3 style={{ color: '#fff', fontSize: '1.2rem' }}>Chandigarh University</h3>
                                <p className="mono text-secondary" style={{ fontSize: '0.9rem' }}>2021 - 2025</p>
                            </div>
                        </div>

                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Bachelor of Engineering (Hons.)</h4>
                        <p className="text-secondary" style={{ marginBottom: '1rem' }}>Computer Science & Engineering</p>

                        <div style={{
                            background: 'var(--bg-tertiary)',
                            padding: '1rem',
                            borderRadius: '4px',
                            borderLeft: '2px solid var(--accent-primary)'
                        }}>
                            <p className="text-dim" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Specialization:</p>
                            <p className="text-primary">Artificial Intelligence and Machine Learning</p>
                            <p className="text-secondary" style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
                                (In association with IBM)
                            </p>
                            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--grid-color)' }}>
                                <p className="mono text-accent">CGPA: 7.11 / 10</p>
                            </div>
                        </div>
                    </div>

                    {/* Certifications / Achievements Card */}
                    <div className="card" style={{ height: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Award className="text-accent" size={32} />
                            <div>
                                <h3 style={{ color: '#fff', fontSize: '1.2rem' }}>Certifications & Awards</h3>
                                <p className="mono text-secondary" style={{ fontSize: '0.9rem' }}>Continuous Learning</p>
                            </div>
                        </div>

                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                                <span className="text-accent">▹</span>
                                <div>
                                    <h5 style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>IBM Specialization in AI/ML</h5>
                                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Comprehensive coursework in Machine Learning algorithms and data science.</p>
                                </div>
                            </li>
                            <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                                <span className="text-accent">▹</span>
                                <div>
                                    <h5 style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>Backend Development Mastery</h5>
                                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Advanced patterns in Distributed Systems and Microservices (Self-Paced).</p>
                                </div>
                            </li>
                            {/* Placeholder for future certs */}
                            <li style={{ display: 'flex', gap: '1rem' }}>
                                <span className="text-accent">▹</span>
                                <div>
                                    <h5 style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>Algorithmic Trading</h5>
                                    <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Applied quantitative analysis strategies (Proprietary Research).</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
