import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Scroll Spy Logic
            const sections = ['hero', 'experience', 'skills', 'projects', 'education', 'volunteer', 'contact'];
            const scrollPosition = window.scrollY + 200; // Offset for better detection

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '<Home />', href: '#hero', id: 'hero' },
        { name: '<Experience />', href: '#experience', id: 'experience' },
        { name: '<Skills />', href: '#skills', id: 'skills' },
        { name: '<Projects />', href: '#projects', id: 'projects' },
        { name: '<Education />', href: '#education', id: 'education' },
        { name: '<Volunteer />', href: '#volunteer', id: 'volunteer' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: '1.5rem 0',
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--grid-color)' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" className="mono text-accent" style={{ fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none' }}>
                    {'>'}_ MEHUL_GOSAVI
                </a>

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '1.5rem' }} className="hidden-mobile">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`mono ${activeSection === link.id ? 'text-accent' : 'text-secondary'}`}
                                style={{ fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <a href="/Mehul-Gosavi-Resume.pdf" target="_blank" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        RESUME.pdf <Download size={16} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
