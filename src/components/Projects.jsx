import React from 'react';
import { Folder, ExternalLink, Github, Lock } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'High-Performance Algo Trading Backtester',
            description: 'A high-performance data processing engine handling 50M+ records. Engineered a parallel processing architecture using Python multiprocessing, achieving an ~85% reduction in execution time compared to sequential runs.',
            tech: ['Python', 'Multiprocessing', 'Pandas', 'NumPy'],
            link: 'https://github.com/mehul2409/Intraday-strategy-back-tester',
            featured: true
        },
        {
            title: 'Django Secure Auth System',
            description: 'Implemented a robust secure login system using Django authentication framework. Features include user registration, password hashing, session management, and strict input validation/error handling.',
            tech: ['Django', 'Python', 'Security', 'SQL'],
            link: 'https://github.com/mehul2409/Django-managment-system'
        },
        {
            title: 'Pneumonia Detection CNN',
            description: 'Deep learning system for detecting pneumonia from chest X-ray images using Convolutional Neural Networks. Focused on high recall to minimize false negatives in medical diagnosis.',
            tech: ['Python', 'TensorFlow', 'CNN', 'Computer Vision'],
            link: 'https://github.com/mehul2409/Detecting-Pneumonia'
        },
        {
            title: 'Proprietary Quant Strategies',
            description: 'Developed and backtested various mean-reversion and trend-following strategies for Indian markets. Optimized for Sharpe ratio and minimal drawdown. (Private Repositories)',
            tech: ['Python', 'Backtrader', 'Statistical Arbitrage'],
            link: '#',
            private: true
        },
        {
            title: 'More in the Pipeline...',
            description: 'Constantly building and experimenting. Currently working on distributed system patterns, low-level optimizations, and contributing to open source.',
            tech: ['System Design', 'Open Source', 'R&D'],
            link: '#',
            private: true
        }
    ];

    return (
        <section id="projects" style={{ padding: '6rem 0' }}>
            <div className="container">
                <h2 className="section-title">
                    <span className="text-secondary">03.</span> Selected Projects
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <div key={index} className="card" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }}>
                            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                <Folder size={40} className="text-accent" />
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {project.private ? (
                                        <Lock size={20} className="text-secondary" />
                                    ) : (
                                        <>
                                            <a href={project.link} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent">
                                                <Github size={20} />
                                            </a>
                                            <a href={project.link} target="_blank" rel="noreferrer" className="text-secondary hover:text-accent">
                                                <ExternalLink size={20} />
                                            </a>
                                        </>
                                    )}
                                </div>
                            </header>

                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: project.featured ? 'var(--accent-primary)' : '#fff' }}>
                                {project.title}
                            </h3>

                            <div style={{ flexGrow: 1, marginBottom: '1.5rem' }}>
                                <p className="text-secondary" style={{ fontSize: '0.95rem' }}>
                                    {project.description}
                                </p>
                            </div>

                            <footer style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.75rem',
                                fontSize: '0.8rem',
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--text-dim)'
                            }}>
                                {project.tech.map((t, i) => (
                                    <span key={i}>{t}</span>
                                ))}
                            </footer>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
