import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minimize2, Maximize2 } from 'lucide-react';

const LiveLogger = () => {
    const [logs, setLogs] = useState([]);
    const [isMinimized, setIsMinimized] = useState(true); // Default Closed
    const logsEndRef = useRef(null);
    const hasInitialized = useRef(false);

    // Initial logs on mount
    useEffect(() => {
        if (!hasInitialized.current) {
            hasInitialized.current = true;
            addLog('INFO', 'System initializing...');
            setTimeout(() => addLog('SUCCESS', 'LiveLogger service started'), 500);
            setTimeout(() => addLog('INFO', 'Listening for user events...'), 800);
        }

        const handleLog = (e) => {
            const { type, message, timestamp } = e.detail;
            addLog(type, message, timestamp);
        };

        window.addEventListener('portfolio-log', handleLog);
        return () => window.removeEventListener('portfolio-log', handleLog);
    }, []);

    const addLog = (type, message, timestamp = new Date()) => {
        const timeStr = timestamp.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

        setLogs(prev => {
            const newLogs = [...prev, { type, message, timeStr, id: Date.now() + Math.random() }];
            if (newLogs.length > 50) return newLogs.slice(newLogs.length - 50); // Keep last 50
            return newLogs;
        });
    };

    // Auto-scroll to bottom
    useEffect(() => {
        if (logsEndRef.current && !isMinimized) {
            logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [logs, isMinimized]);

    const getLogColor = (type) => {
        switch (type) {
            case 'INFO': return 'var(--text-secondary)';
            case 'WARN': return '#ffaa00';
            case 'ERROR': return 'var(--accent-error)';
            case 'SUCCESS': return 'var(--accent-primary)';
            default: return 'var(--text-secondary)';
        }
    };

    if (isMinimized) {
        return (
            <div
                onClick={() => setIsMinimized(false)}
                style={{
                    position: 'fixed',
                    top: '6rem', // Below Navbar
                    left: '1rem',
                    background: 'rgba(5, 5, 5, 0.9)',
                    border: '1px solid var(--grid-color)',
                    padding: '0.5rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    zIndex: 90,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(4px)'
                }}
            >
                <Terminal size={16} className="text-accent" />
                <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>LOGS</span>
            </div>
        );
    }

    return (
        <div style={{
            position: 'fixed',
            top: '6rem', // Below Navbar
            left: '1rem',
            width: '350px',
            height: '200px',
            background: 'rgba(5, 5, 5, 0.95)',
            border: '1px solid var(--grid-color)',
            borderRadius: '4px',
            zIndex: 90,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem'
        }}>
            {/* Header */}
            <div style={{
                padding: '0.5rem',
                borderBottom: '1px solid var(--grid-color)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.02)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Terminal size={14} className="text-secondary" />
                    <span style={{ color: 'var(--text-dim)', fontWeight: 'bold' }}>SYSTEM LOGS</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => setIsMinimized(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-dim)' }}>
                        <Minimize2 size={14} />
                    </button>
                </div>
            </div>

            {/* Logs Content */}
            <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem'
            }}>
                {logs.map((log) => (
                    <div key={log.id} style={{ display: 'flex', gap: '0.5rem', lineHeight: '1.4' }}>
                        <span style={{ color: 'var(--text-dim)', minWidth: '60px' }}>{log.timeStr}</span>
                        <span style={{ color: getLogColor(log.type), fontWeight: 'bold', minWidth: '60px' }}>[{log.type}]</span>
                        <span style={{ color: '#fff', opacity: 0.9 }}>{log.message}</span>
                    </div>
                ))}
                <div ref={logsEndRef} />
            </div>
        </div>
    );
};

export default LiveLogger;
