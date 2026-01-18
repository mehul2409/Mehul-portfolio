import React, { useEffect, useState } from 'react';
import { logEvent } from '../../utils/logger';

const KeyboardManager = ({ showCheatSheet, setShowCheatSheet }) => {
    // State lifted to App.jsx
    const [commandKey, setCommandKey] = useState('CMD');

    useEffect(() => {
        // Platform detection
        const platform = navigator.platform.toLowerCase();
        const userAgent = navigator.userAgent.toLowerCase();
        if (platform.includes('win') || userAgent.includes('win')) {
            setCommandKey('Ctrl');
        } else {
            setCommandKey('CMD');
        }
    }, []);

    useEffect(() => {
        const handleKeyPress = (e) => {
            // Ignore if active element is an input (like Command Palette)
            if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

            switch (e.key) {
                case 'j':
                    window.scrollBy({ top: 100, behavior: 'smooth' });
                    break;
                case 'k':
                    window.scrollBy({ top: -100, behavior: 'smooth' });
                    break;
                case '?':
                    setShowCheatSheet(prev => !prev);
                    logEvent('INFO', 'Toggle Shortcuts Cheat Sheet');
                    break;
                case '1': document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); break;
                case '2': document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); break;
                case '3': document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); break;
                case '4': document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); break;
                case '5': document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    if (!showCheatSheet) return null;

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.8)',
            zIndex: 20000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(5px)'
        }} onClick={() => setShowCheatSheet(false)}>
            <div style={{
                background: '#111',
                border: '1px solid var(--grid-color)',
                padding: '2rem',
                borderRadius: '8px',
                minWidth: '300px'
            }}>
                <h3 className="mono text-accent" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>KEYBOARD SHORTCUTS</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span className="mono bold">J / K</span> <span>Scroll Down / Up</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span className="mono bold">{commandKey}+K</span> <span>Command Palette</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span className="mono bold">1-5</span> <span>Jump Sections</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span className="mono bold">?</span> <span>Toggle Help</span></div>
                </div>
            </div>
        </div>
    );
};

export default KeyboardManager;
