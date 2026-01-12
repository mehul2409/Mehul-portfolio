export const initDynamicFavicon = () => {
    const originalFavicon = document.querySelector("link[rel*='icon']").href;
    
    // Create a canvas to generate a gray "offline" favicon
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    
    // Draw gray circle with "!" 
    ctx.fillStyle = '#555';
    ctx.beginPath();
    ctx.arc(16, 16, 14, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.font = 'bold 20px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('!', 16, 16);
    
    const offlineFavicon = canvas.toDataURL('image/png');

    document.addEventListener('visibilitychange', () => {
        const link = document.querySelector("link[rel*='icon']");
        if (document.hidden) {
            link.href = offlineFavicon;
            document.title = "[OFFLINE] Signal Lost";
        } else {
            link.href = originalFavicon;
            document.title = "Mehul Gosavi | Quant Engineer"; // Original title reset
        }
    });
};
