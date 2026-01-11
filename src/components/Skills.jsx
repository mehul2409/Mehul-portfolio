import React from 'react';

const Skills = () => {
    const customSkills = {
        "Languages": ["Python", "Go", "Rust", "C#", "SQL"],

        "Frameworks & Libraries": [
            "FastAPI",
            "gRPC",
            "Celery",
            "Pandas",
            "NumPy"
        ],

        "Infrastructure": [
            "Kafka",
            "Docker",
            "Kubernetes",
            "AWS",
            "Google Cloud",
            "Jenkins",
            "Git"
        ],

        "Core Systems": [
            "System Design",
            "Distributed Systems",
            "Concurrency",
            "Multithreading",
            "Event-Driven Architectures",
            "Fault Tolerance",
            "Data Consistency Models"
        ],

        "Data & Quant Systems": [
            "Time-Series Data",
            "Backtesting Systems",
            "OHLCV Pipelines",
            "Statistical Analysis"
        ],

        "ML Engineering": [
            "Feature Engineering",
            "Model Inference Pipelines",
            "ML System Design"
        ]
    };


    return (
        <section id="skills" style={{ padding: '6rem 0' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <h2 className="section-title">
                    <span className="text-secondary">02.</span> Technical Arsenal
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                    {Object.entries(customSkills).map(([category, skills]) => (
                        <div key={category}>
                            <h3 className="mono text-accent" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                {'>'} {category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {skills.map((skill) => (
                                    <div key={skill} style={{
                                        padding: '0.5rem 1rem',
                                        background: 'var(--bg-tertiary)',
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.9rem',
                                        borderRadius: '4px',
                                        border: '1px solid transparent',
                                        transition: 'all 0.2s'
                                    }}
                                        className="skill-pill hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
