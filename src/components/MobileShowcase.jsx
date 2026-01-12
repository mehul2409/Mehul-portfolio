import React from 'react';
import { Smartphone, Download, Wifi, Zap, Shield } from 'lucide-react';

const MobileShowcase = () => {
    return (
        <section id="mobile-app" style={{
            padding: '6rem 0',
            background: 'linear-gradient(180deg, rgba(5,5,5,0) 0%, rgba(61, 220, 132, 0.05) 50%, rgba(5,5,5,0) 100%)'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '4rem'
                }}>
                    {/* Text Content */}
                    <div style={{ flex: '1 1 500px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <Smartphone className="text-accent" size={32} style={{ color: '#3DDC84' }} />
                            <span className="mono" style={{ color: '#3DDC84', fontWeight: 'bold' }}>ANDROID RELEASE</span>
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: '700',
                            color: '#fff',
                            marginBottom: '1.5rem',
                            lineHeight: 1.1
                        }}>
                            The Distributed Systems <br />
                            <span style={{ color: '#3DDC84' }}>Companion App.</span>
                        </h2>

                        <p className="text-secondary" style={{ fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px' }}>
                            A native Android application built for real-time monitoring and control of distributed nodes.
                            Engineered with an offline-first architecture to ensure critical data availability even in unstable network conditions.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Zap size={24} style={{ color: '#3DDC84' }} />
                                <div>
                                    <h4 style={{ color: '#fff', marginBottom: '0.25rem' }}>Low Latency</h4>
                                    <p className="text-secondary" style={{ fontSize: '0.85rem' }}>Real-time WebSockets</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Wifi size={24} style={{ color: '#3DDC84' }} />
                                <div>
                                    <h4 style={{ color: '#fff', marginBottom: '0.25rem' }}>Offline Sync</h4>
                                    <p className="text-secondary" style={{ fontSize: '0.85rem' }}>Local-first database</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Shield size={24} style={{ color: '#3DDC84' }} />
                                <div>
                                    <h4 style={{ color: '#fff', marginBottom: '0.25rem' }}>Secure Auth</h4>
                                    <p className="text-secondary" style={{ fontSize: '0.85rem' }}>Biometric login</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" className="btn-primary" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                background: '#3DDC84',
                                color: '#050505',
                                padding: '1rem 2rem',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '1rem'
                            }}>
                                <Download size={20} /> Download APK
                            </a>
                            <button style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                background: 'transparent',
                                color: '#fff',
                                padding: '1rem 2rem',
                                borderRadius: '4px',
                                border: '1px solid var(--grid-color)',
                                cursor: 'not-allowed',
                                fontSize: '1rem'
                            }}>
                                v1.0.4 (Stable)
                            </button>
                        </div>
                    </div>

                    {/* Visual Placeholder (Phone Mockup) */}
                    <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                        <div style={{
                            width: '300px',
                            height: '600px',
                            border: '12px solid #1a1a1a',
                            borderRadius: '40px',
                            background: '#0a0a0a',
                            position: 'relative',
                            boxShadow: '0 0 50px rgba(61, 220, 132, 0.1)',
                            overflow: 'hidden'
                        }}>
                            {/* Notch / Dynamic Island */}
                            <div style={{ position: 'absolute', top: '15px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '25px', background: '#1a1a1a', borderRadius: '12px', zIndex: 10 }}></div>

                            {/* Screen Content Placeholder */}
                            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '2rem 1.5rem' }}>
                                <div style={{ height: '150px', background: 'linear-gradient(135deg, rgba(61, 220, 132, 0.2), transparent)', borderRadius: '16px', marginBottom: '1.5rem' }}></div>
                                <div style={{ height: '20px', width: '60%', background: '#222', borderRadius: '4px', marginBottom: '0.75rem' }}></div>
                                <div style={{ height: '20px', width: '40%', background: '#222', borderRadius: '4px', marginBottom: '2rem' }}></div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div style={{ height: '100px', background: '#151515', borderRadius: '12px' }}></div>
                                    <div style={{ height: '100px', background: '#151515', borderRadius: '12px' }}></div>
                                    <div style={{ height: '100px', background: '#151515', borderRadius: '12px' }}></div>
                                    <div style={{ height: '100px', background: '#151515', borderRadius: '12px' }}></div>
                                </div>
                            </div>

                            {/* Reflection */}
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(255,255,255,0.05) 0%, transparent 40%)', pointerEvents: 'none' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileShowcase;
