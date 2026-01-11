import React, { useRef, useEffect } from 'react';

const InteractiveBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Configuration
        const gap = 50;
        const pointSize = 1.5;
        const influenceRadius = 125;
        const approachSpeed = 0.08;

        // Configured Tickers with realistic base prices (Scale: USD)
        const marketData = [
            // Indices & ETFs
            { t: 'SPX', p: 4800 }, { t: 'NDX', p: 16800 }, { t: 'DJI', p: 38000 }, { t: 'VIX', p: 14 },
            { t: 'RUT', p: 2000 }, { t: 'FTSE', p: 7600 }, { t: 'N225', p: 36000 }, { t: 'QQQ', p: 410 },
            { t: 'IWM', p: 195 }, { t: 'TLT', p: 95 },

            // Crypto
            { t: 'BTC', p: 95000 }, { t: 'ETH', p: 3200 }, { t: 'SOL', p: 145 }, { t: 'BNB', p: 600 },
            { t: 'XRP', p: 0.65 }, { t: 'ADA', p: 0.55 }, { t: 'DOGE', p: 0.12 }, { t: 'LINK', p: 18 },

            // Tech & Mega Cap
            { t: 'AAPL', p: 220 }, { t: 'NVDA', p: 130 }, { t: 'MSFT', p: 420 }, { t: 'GOOG', p: 175 },
            { t: 'AMZN', p: 180 }, { t: 'TSLA', p: 250 }, { t: 'META', p: 480 }, { t: 'NFLX', p: 620 },
            { t: 'AMD', p: 170 }, { t: 'INTC', p: 35 }, { t: 'ORCL', p: 125 }, { t: 'CRM', p: 300 },

            // Finance & Others
            { t: 'JPM', p: 195 }, { t: 'BAC', p: 38 }, { t: 'GS', p: 390 }, { t: 'V', p: 280 },
            { t: 'DIS', p: 110 }, { t: 'KO', p: 62 }, { t: 'PEP', p: 170 }, { t: 'WMT', p: 60 },

            // Forex & Commodities
            { t: 'EUR', p: 1.08 }, { t: 'GBP', p: 1.27 }, { t: 'JPY', p: 150 }, { t: 'CAD', p: 1.35 },
            { t: 'AUD', p: 0.65 }, { t: 'XAU', p: 2050 }, { t: 'XAG', p: 23 }, { t: 'WTI', p: 78 }
        ];

        let mouse = { x: undefined, y: undefined };

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = undefined;
            mouse.y = undefined;
        });

        class DataPoint {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.density = (Math.random() * 20) + 5;

                // Pick a random asset
                const asset = marketData[Math.floor(Math.random() * marketData.length)];
                this.ticker = asset.t;

                // Price = Base + Random Variance (-5% to +5%)
                const variance = (Math.random() * 0.1) - 0.05;
                this.basePrice = asset.p;
                this.price = (asset.p * (1 + variance)).toFixed(asset.p < 10 ? 4 : 2); // 4 decimals for forex

                // Change logic
                this.change = (Math.random() * 2 - 1);
                this.isPositive = this.change >= 0;
            }

            update() {
                if (mouse.x) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < influenceRadius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const maxDistance = influenceRadius;
                        const force = (maxDistance - distance) / maxDistance;

                        const directionX = forceDirectionX * force * this.density;
                        const directionY = forceDirectionY * force * this.density;

                        this.x -= directionX;
                        this.y -= directionY;

                        // Micro-ticks simulation to look "Live"
                        if (Math.random() > 0.8) {
                            // Fluctuate price slightly
                            const fluctuation = (Math.random() - 0.5) * (this.basePrice * 0.001);
                            this.price = (parseFloat(this.price) + fluctuation).toFixed(this.basePrice < 10 ? 4 : 2);
                        }
                    }
                }

                // Return to base
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx * approachSpeed;
                }
                if (this.y !== this.baseY) {
                    let dy = this.y - this.baseY;
                    this.y -= dy * approachSpeed;
                }
            }

            draw() {
                // Calculate displacement
                const dx = this.x - this.baseX;
                const dy = this.y - this.baseY;
                const displacement = Math.sqrt(dx * dx + dy * dy);

                if (displacement > 5) {
                    // ACTIVE STATE
                    ctx.globalAlpha = 0.8; // Reduced opacity

                    // Draw Ticker (Neutral)
                    ctx.font = 'bold 10px "JetBrains Mono"';
                    ctx.fillStyle = '#666';
                    ctx.fillText(this.ticker, this.x - 30, this.y - 5);

                    // Draw Price (Colored)
                    ctx.font = '10px "JetBrains Mono"';
                    if (this.isPositive) {
                        ctx.fillStyle = '#00ff9d';
                    } else {
                        ctx.fillStyle = '#ff3366';
                    }
                    ctx.fillText(this.price, this.x - 30, this.y + 7);

                    ctx.globalAlpha = 1.0; // Reset opacity

                } else {
                    // IDLE STATE
                    ctx.beginPath();
                    ctx.fillStyle = 'rgba(100, 100, 100, 0.2)';
                    ctx.arc(this.x, this.y, pointSize, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        const points = [];
        const init = () => {
            points.length = 0;
            const numPointsX = Math.ceil(canvas.width / gap);
            const numPointsY = Math.ceil(canvas.height / gap);
            // Center the grid slightly if needed, but simple loop is fine

            for (let y = 0; y < canvas.height; y += gap) {
                for (let x = 0; x < canvas.width; x += gap) {
                    points.push(new DataPoint(x, y));
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < points.length; i++) {
                points[i].update();
                points[i].draw();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: '#050505',
                pointerEvents: 'none'
            }}
        />
    );
};

export default InteractiveBackground;
