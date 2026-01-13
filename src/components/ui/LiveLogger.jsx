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

    // Style configuration based on state
    const containerStyle = {
        position: 'fixed',
        top: '7rem',
        left: '1rem',
        background: 'rgba(5, 5, 5, 0.95)',
        border: isMinimized ? '1px solid var(--accent-primary)' : '1px solid var(--grid-color)',
        borderRadius: '4px',
        zIndex: 90,
        boxShadow: isMinimized
            ? '0 0 15px rgba(0, 255, 157, 0.3)'
            : '0 4px 20px rgba(0,0,0,0.5)',
        backdropFilter: 'blur(4px)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        width: isMinimized ? '100px' : '350px',
        height: isMinimized ? '40px' : '200px',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', // Smooth ease-out
        overflow: 'hidden',
        cursor: isMinimized ? 'pointer' : 'default'
    };

    return (
        <div
            style={containerStyle}
            onClick={() => isMinimized && setIsMinimized(false)}
        >
            {/* Minimized Content */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem',
                opacity: isMinimized ? 1 : 0,
                transition: 'opacity 0.2s ease',
                pointerEvents: isMinimized ? 'auto' : 'none'
            }}>
                <Terminal size={16} className="text-accent" />
                <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>LOGS</span>
            </div>

            {/* Expanded Content */}
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                opacity: isMinimized ? 0 : 1,
                transition: 'opacity 0.2s ease 0.1s', // Delay fade-in slightly
                pointerEvents: isMinimized ? 'none' : 'auto'
            }}>
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
                        <button
                            onClick={(e) => { e.stopPropagation(); setIsMinimized(true); }}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-dim)' }}
                        >
                            <Minimize2 size={14} />
                        </button>
                    </div>
                </div>

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
        </div>
    );
};

export default LiveLogger;
