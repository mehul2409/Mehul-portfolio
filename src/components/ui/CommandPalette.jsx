import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, Command } from 'lucide-react';
import { logEvent } from '../../utils/logger';

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isPanicMode, setIsPanicMode] = useState(false); // Track theme state
    const inputRef = useRef(null);

    const commands = [
        { id: 'home', label: 'Go to Home', type: 'navigation', action: () => scrollTo('hero') },
        { id: 'projects', label: 'Go to Projects', type: 'navigation', action: () => scrollTo('projects') },
        { id: 'experience', label: 'Go to Experience', type: 'navigation', action: () => scrollTo('experience') },
        { id: 'skills', label: 'Go to Skills', type: 'navigation', action: () => scrollTo('skills') },
        { id: 'contact', label: 'Go to Contact', type: 'navigation', action: () => scrollTo('contact') },
        { id: 'email', label: 'Copy Email', type: 'action', action: () => copyEmail() },
        { id: 'resume', label: 'Download Resume', type: 'action', action: () => window.open('/Mehul-Gosavi-Resume.pdf', '_blank') }, // Placeholder
        { id: 'github', label: 'Open GitHub', type: 'link', action: () => window.open('https://github.com/mehul2409', '_blank') },
        { id: 'linkedin', label: 'Open LinkedIn', type: 'link', action: () => window.open('https://www.linkedin.com/in/mehul-gosavi/', '_blank') },
        // Conditionally show Theme Toggle
        ...(isPanicMode
            ? [{ id: 'reset', label: 'Theme: Normal Mode', type: 'theme', action: () => resetTheme() }]
            : [{ id: 'panic', label: 'Theme: Panic Mode', type: 'theme', action: () => triggerPanicMode() }]
        ),
    ];

    const filteredCommands = commands.filter(cmd =>
        cmd.label.toLowerCase().includes(search.toLowerCase())
    );

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            logEvent('SUCCESS', `Command Executed: Navigate to ${id.toUpperCase()}`);
        }
    };

    const copyEmail = () => {
        navigator.clipboard.writeText('mehul.dev24@gmail.com');
        logEvent('SUCCESS', 'Email copied to clipboard');
        alert('Email copied!');
    };

    const triggerPanicMode = () => {
        document.documentElement.style.setProperty('--accent-primary', '#ff3366');
        document.documentElement.style.setProperty('--accent-secondary', '#ff0000');
        setIsPanicMode(true);
        logEvent('WARN', 'PANIC MODE ACTIVATED');
    };

    const resetTheme = () => {
        document.documentElement.style.setProperty('--accent-primary', '#00ff9d');
        document.documentElement.style.setProperty('--accent-secondary', '#00cc7e');
        setIsPanicMode(false);
        logEvent('SUCCESS', 'Theme System Normalized');
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
                logEvent('INFO', 'Command Palette toggled');
            }

            if (isOpen) {
                if (e.key === 'Escape') {
                    setIsOpen(false);
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    if (filteredCommands[selectedIndex]) {
                        filteredCommands[selectedIndex].action();
                        setIsOpen(false);
                        setSearch('');
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, filteredCommands, selectedIndex]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
            setSelectedIndex(0);
        }
    }, [isOpen]);

    const itemRefs = useRef([]);

    useEffect(() => {
        if (isOpen && itemRefs.current[selectedIndex]) {
            itemRefs.current[selectedIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }
    }, [selectedIndex, isOpen]);

    // Reset loop
    useEffect(() => {
        itemRefs.current = itemRefs.current.slice(0, filteredCommands.length);
    }, [filteredCommands]);

    if (!isOpen) return null;

    return (
        <div style={{
            // ... (modal styles same as before)
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(5px)',
            zIndex: 10000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: '20vh'
        }} onClick={() => setIsOpen(false)}>
            <div
                onClick={e => e.stopPropagation()}
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    background: '#0a0a0a',
                    border: '1px solid var(--grid-color)',
                    borderRadius: '8px',
                    boxShadow: '0 0 50px rgba(0,0,0,0.8), 0 0 20px var(--accent-primary)', // Glow
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {/* Search Bar */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1rem',
                    borderBottom: '1px solid var(--grid-color)',
                    gap: '1rem'
                }}>
                    <Search className="text-secondary" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Type a command or search..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#fff',
                            fontSize: '1.2rem',
                            flex: 1,
                            outline: 'none',
                            fontFamily: 'var(--font-mono)'
                        }}
                    />
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', border: '1px solid var(--grid-color)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>ESC</div>
                </div>

                {/* Results */}
                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {filteredCommands.map((cmd, index) => (
                        <div
                            key={cmd.id}
                            ref={el => itemRefs.current[index] = el}
                            onClick={() => {
                                cmd.action();
                                setIsOpen(false);
                            }}
                            onMouseEnter={() => setSelectedIndex(index)}
                            style={{
                                padding: '0.75rem 1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                cursor: 'pointer',
                                background: index === selectedIndex ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                                borderLeft: index === selectedIndex ? '2px solid var(--accent-primary)' : '2px solid transparent'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{ color: index === selectedIndex ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>
                                    {cmd.type === 'navigation' && '→'}
                                    {cmd.type === 'action' && '⚡'}
                                    {cmd.type === 'link' && '🔗'}
                                    {cmd.type === 'theme' && '🎨'}
                                </span>
                                <span style={{ color: index === selectedIndex ? '#fff' : 'var(--text-secondary)', fontWeight: index === selectedIndex ? 'bold' : 'normal' }}>
                                    {cmd.label}
                                </span>
                            </div>
                            {index === selectedIndex && <ArrowRight size={16} className="text-accent" />}
                        </div>
                    ))}
                    {filteredCommands.length === 0 && (
                        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-dim)' }}>
                            No commands found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;
