import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                padding: '1.5rem 0',
                transition: 'all 0.3s ease',
                background: scrolled || mobileMenuOpen ? 'rgba(5, 5, 5, 0.95)' : 'transparent',
                backdropFilter: scrolled || mobileMenuOpen ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--grid-color)' : 'none'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a href="#" className="mono text-accent" style={{ fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none', zIndex: 1001 }}>
                        {'>'}_ MEHUL_GOSAVI
                    </a>

                    {/* Desktop Menu */}
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
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

                    {/* Mobile Hamburger */}
                    <div className="mobile-only" style={{ zIndex: 1001 }}>
                        <button onClick={toggleMobileMenu} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}>
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    background: 'var(--bg-primary)',
                    zIndex: 999,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem'
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`mono ${activeSection === link.id ? 'text-accent' : 'text-secondary'}`}
                            style={{ fontSize: '1.5rem', textDecoration: 'none' }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="/Mehul-Gosavi-Resume.pdf" target="_blank" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                        Download Resume <Download size={16} style={{ marginLeft: '5px' }} />
                    </a>
                </div>
            )}
        </>
    );
};

export default Navbar;
