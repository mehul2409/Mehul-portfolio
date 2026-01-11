import React from 'react';
import { Heart, Users, Globe, Award } from 'lucide-react';

const Volunteer = () => {
    return (
        <section id="volunteer" style={{ padding: '6rem 0' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <h2 className="section-title">
                    <span className="text-secondary">05.</span> Leadership & Volunteering
                </h2>

                <div className="card" style={{ borderLeft: '2px solid var(--accent-primary)' }}>
                    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <Heart className="text-accent" size={32} />
                            <div>
                                <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>The Himalayan Foundation</h3>
                                <p className="mono text-secondary">Chandigarh</p>
                            </div>
                        </div>
                        <div className="mono text-accent" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem', border: '1px solid var(--accent-primary)', borderRadius: '20px' }}>
                            2022 - 2025
                        </div>
                    </header>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

                        {/* Role 1: Coordinator */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                <Users className="text-secondary" size={20} />
                                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Team Coordinator</h4>
                            </div>
                            <p className="text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                Led a hierarchy of <span className="text-white">4 Team Leaders</span> and their respective squads. Previously mentored 8 general body members as a Team Leader, tracking performance and driving motivation.
                            </p>
                        </div>

                        {/* Role 2: Event Management */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                <Award className="text-secondary" size={20} />
                                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Event Super Head</h4>
                            </div>
                            <p className="text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                Orchestrated <strong>Kids Olympics (Season 13)</strong>, managing an event for <span className="text-white">250+ underprivileged children</span>. Oversaw logistics and field work to ensure a grand success.
                            </p>
                        </div>

                        {/* Role 3: Tech */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                <Globe className="text-secondary" size={20} />
                                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Tech Sub-Head</h4>
                            </div>
                            <p className="text-secondary" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                Managed the technical committee responsible for creating and updating the organization's website. Also contributed to 'Samvidhaan', a project for legal awareness.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Volunteer;
