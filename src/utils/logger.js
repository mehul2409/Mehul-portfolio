export const logEvent = (type, message) => {
    const event = new CustomEvent('portfolio-log', {
        detail: {
            type, // 'INFO', 'WARN', 'SUCCESS', 'ERROR'
            message,
            timestamp: new Date()
        }
    });
    window.dispatchEvent(event);
};
