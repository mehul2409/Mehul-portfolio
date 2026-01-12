import React, { useState, useEffect } from 'react';
import { Activity, Wifi, Cpu } from 'lucide-react';

const SystemStatus = ({ showCrosshair, toggleCrosshair, toggleHelp }) => {
    const [executionTime, setExecutionTime] = useState(0);
    const [commandKey, setCommandKey] = useState('⌘');

    useEffect(() => {
        // Detect Platform
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        setCommandKey(isMac ? '⌘' : 'Ctrl + ');

        // Simulate execution/render time calculation
        // In a real app, this might track actual metric benchmarks
        const time = (performance.now() % 100) / 1000; // Fake reasonable render time in seconds like 0.04s
        setExecutionTime((time * 100).toFixed(2));
    }, []);

    return (
        <div style={{
            position: 'fixed',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            background: 'rgba(5, 5, 5, 0.9)',
            border: '1px solid var(--grid-color)',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            zIndex: 100,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-dim)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }}>
            {/* System Status */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Wifi size={12} className="text-accent" />
                <span className="text-secondary">SYSTEM:</span>
                <span className="text-accent" style={{ fontWeight: 'bold' }}>ONLINE</span>
                <span className="pulsating-dot" style={{ width: '6px', height: '6px', background: 'var(--accent-primary)', borderRadius: '50%', display: 'inline-block', marginLeft: '0.25rem' }}></span>
            </div>

            <div style={{ width: '1px', height: '12px', background: 'var(--grid-color)' }}></div>

            {/* Execution Time */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Cpu size={12} className="text-secondary" />
                <span>EXEC:</span>
                <span style={{ color: 'var(--text-primary)' }}>0.{executionTime}s</span>
            </div>

            <div style={{ width: '1px', height: '12px', background: 'var(--grid-color)' }}></div>

            {/* Latency (Simulated) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Activity size={12} className="text-secondary" />
                <span>LATENCY:</span>
                <span style={{ color: 'var(--text-primary)' }}>12ms</span>
            </div>

            <div style={{ width: '1px', height: '12px', background: 'var(--grid-color)' }}></div>

            {/* Crosshair Toggle */}
            <div
                onClick={toggleCrosshair}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    userSelect: 'none'
                }}
            >
                <span className="text-secondary">CURSOR:</span>
                <span
                    style={{
                        color: showCrosshair ? 'var(--accent-primary)' : 'var(--text-dim)',
                        fontWeight: 'bold',
                        transition: 'color 0.2s'
                    }}
                >
                    {showCrosshair ? 'ON' : 'OFF'}
                </span>
            </div>

            <div style={{ width: '1px', height: '12px', background: 'var(--grid-color)' }}></div>

            {/* CMD+K Hint */}
            <div
                onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
            >
                <span style={{
                    fontSize: '0.75rem',
                    background: 'var(--accent-primary)',
                    color: '#000',
                    padding: '2px 6px',
                    borderRadius: '3px',
                    fontWeight: 'bold',
                    boxShadow: '0 0 8px rgba(0, 255, 157, 0.4)'
                }}>⌘K</span>
            </div>

            <div style={{ width: '1px', height: '12px', background: 'var(--grid-color)' }}></div>

            {/* Help Toggle */}
            <button
                onClick={toggleHelp}
                style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    padding: 0
                }}
            >
                ?
            </button>
        </div>
    );
};

export default SystemStatus;
