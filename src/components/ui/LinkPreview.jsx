import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LinkPreview = ({
    children,
    url,
    className,
    width = 200,
    height = 125,
    isStatic = false,
    imageSrc = ""
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const src = isStatic ? imageSrc : `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

    return (
        <div
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <AnimatePresence>
                {isOpen && isMounted && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 20, x: "-50%" }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, scale: 0.5, y: 20, x: "-50%" }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        style={{
                            position: 'absolute',
                            left: '50%',
                            bottom: '100%',
                            zIndex: 50,
                            marginBottom: '15px',
                            pointerEvents: 'none', // Prevent flickering if mouse touches popup
                            whiteSpace: 'nowrap'
                        }}
                    >
                        <div style={{
                            display: 'block',
                            padding: '4px',
                            background: '#0a0a0a',
                            border: '1px solid #333',
                            borderRadius: '12px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
                        }}>
                            <img
                                src={src}
                                width={width}
                                height={height}
                                style={{
                                    borderRadius: '8px',
                                    objectFit: 'cover',
                                    display: 'block',
                                    background: '#111'
                                }}
                                alt="preview"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <a href={url} target="_blank" rel="noopener noreferrer" className={className} style={{ display: 'inline-block' }}>
                {children}
            </a>
        </div>
    );
};
