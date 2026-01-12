import React, { useEffect, useRef } from 'react';

const CrosshairCursor = () => {
    const cursorRef = useRef(null);
    const verticalRef = useRef(null);
    const horizontalRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (verticalRef.current && horizontalRef.current) {
                // Using transform for better performance than top/left
                verticalRef.current.style.transform = `translateX(${e.clientX}px)`;
                horizontalRef.current.style.transform = `translateY(${e.clientY}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Hide default cursor or make it crosshair
        document.body.style.cursor = 'crosshair';

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.style.cursor = 'auto';
        };
    }, []);

    const lineStyle = {
        position: 'fixed',
        background: 'var(--accent-primary)',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0.3,
        boxShadow: '0 0 4px var(--accent-primary)'
    };

    return (
        <>
            {/* Vertical Line - Full Height */}
            <div
                ref={verticalRef}
                style={{
                    ...lineStyle,
                    top: 0,
                    bottom: 0,
                    left: 0, // Initial position, moved by transform
                    width: '1px',
                    height: '100vh',
                    willChange: 'transform'
                }}
            />
            {/* Horizontal Line - Full Width */}
            <div
                ref={horizontalRef}
                style={{
                    ...lineStyle,
                    left: 0,
                    right: 0,
                    top: 0, // Initial position, moved by transform
                    width: '100vw',
                    height: '1px',
                    willChange: 'transform'
                }}
            />
        </>
    );
};

export default CrosshairCursor;
