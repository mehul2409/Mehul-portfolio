import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const GoToBottom = () => {
    const [isVisible, setIsVisible] = useState(true);

    // Toggle visibility based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            // Hide if near the bottom
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        // Initial check
        toggleVisibility();

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to bottom smoothly
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToBottom}
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        left: '2rem',
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--accent-error)',
                        border: '1px solid var(--accent-error)',
                        borderRadius: '50%',
                        width: '3rem',
                        height: '3rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 1000,
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 12px rgba(255, 51, 102, 0.2)',
                    }}
                    className="go-to-bottom-btn"
                    aria-label="Scroll to bottom"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Wick */}
                        <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        {/* Body (Red, Filled) */}
                        <rect x="8" y="5" width="8" height="14" fill="currentColor" />
                    </svg>
                </button>
            )}
        </>
    );
};

export default GoToBottom;
