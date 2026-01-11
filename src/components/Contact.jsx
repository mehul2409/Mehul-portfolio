import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '8rem 0', textAlign: 'center' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <p className="mono text-accent" style={{ marginBottom: '1.5rem' }}>06. What's Next?</p>
                <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1.5rem', color: '#fff' }}>Get In Touch</h2>
                <p className="text-secondary" style={{ fontSize: '1.1rem', marginBottom: '3rem' }}>
                    I am actively looking for opportunities in Quantitative Development and High-Performance Backend Engineering.
                    Whether you have a question or just want to discuss distributed systems, my inbox is always open.
                </p>

                <a href="mailto:mehul.dev24@gmail.com" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                    Say Hello
                </a>

                <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <a href="https://github.com/mehul2409" target="_blank" className="text-secondary hover:text-accent transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com/in/mehul-gosavi-b8a54b1b7" target="_blank" className="text-secondary hover:text-accent transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:mehul.dev24@gmail.com" className="text-secondary hover:text-accent transition-colors">
                        <Mail size={24} />
                    </a>
                </div>

                <footer style={{ marginTop: '5rem', fontSize: '0.9rem' }} className="mono text-dim">
                    <p>Designed & Built by Mehul Gosavi</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
