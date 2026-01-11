import React, { useState, useEffect } from 'react';
import { ChevronRight, Database, Server, Activity } from 'lucide-react';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(100);
    const period = 2000;

    const toRotate = [
        "Building high-performance systems for the future of finance.",
        "Engineering low-latency distributed architectures.",
        "Optimizing algorithmic trading engines.",
        "Designing scalable Kafka ingestion pipelines."
    ];

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, delta]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        } else {
            // Normal typing speed
            setDelta(isDeleting ? 40 : 80);
        }
    };

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            paddingTop: '80px' // offset for fixed nav
        }} className="bg-grid">
            <div className="container">
                <div style={{ maxWidth: '800px' }}>
                    <p className="mono text-accent" style={{ marginBottom: '1.5rem' }}>
                        Hi, my name is
                    </p>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        fontWeight: '700',
                        lineHeight: '1.1',
                        margin: '0 0 1rem 0',
                        color: '#fff'
                    }}>
                        Mehul Gosavi.
                    </h1>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        fontWeight: '700',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem'
                    }}>
                        I turn complex problems into production-ready systems<span className="pulsating-dot">.</span>
                    </h2>

                    <p className="mono text-secondary" style={{ fontSize: '1.1rem', maxWidth: '600px', marginBottom: '3rem', height: '3rem' }}>
                        <span className="text-accent">{'>'}</span> {text}<span className="cursor-blink"></span>
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '4rem' }}>
                        <a href="#projects" className="btn btn-primary">
                            Check out my work
                        </a>
                        <a href="mailto:mehul.dev24@gmail.com" className="btn">
                            Contact Me
                        </a>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        borderTop: '1px solid var(--grid-color)',
                        paddingTop: '2rem'
                    }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <Server className="text-accent" size={24} />
                            <div>
                                <h4 className="mono text-primary" style={{ marginBottom: '0.5rem' }}>Backend Engineering</h4>
                                <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Python, Go, Distributed Architectures</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <Activity className="text-accent" size={24} />
                            <div>
                                <h4 className="mono text-primary" style={{ marginBottom: '0.5rem' }}>High Frequency</h4>
                                <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Kafka, 1B+ Alerts, Low Latency</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <Database className="text-accent" size={24} />
                            <div>
                                <h4 className="mono text-primary" style={{ marginBottom: '0.5rem' }}>Data Systems</h4>
                                <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Scalable Ingestion & Processing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
