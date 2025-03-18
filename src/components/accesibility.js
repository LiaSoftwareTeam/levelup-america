export const updateTextSize = (size) => {
    document.documentElement.style.setProperty('--font-size', size);
    const elements = document.querySelectorAll('p, h1, h2, h3, span, button, input, label, a');
    elements.forEach(element => {
        element.style.fontSize = size;
    });
};

export const speakContent = (text) => {
    if (!document.getElementById('screenReader')?.checked) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;
    
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
};

export const enableScreenReader = () => {
    const elements = document.querySelectorAll('button, a, input, [role="button"], .interest-card, h1, h2, h3, p, label');
    elements.forEach(element => {
        element.addEventListener('focus', (e) => {
            const text = e.target.getAttribute('aria-label') || 
                        e.target.textContent || 
                        e.target.value || 
                        e.target.placeholder;
            speakContent(text);
        });
        element.addEventListener('mouseenter', (e) => {
            const text = e.target.getAttribute('aria-label') || 
                        e.target.textContent || 
                        e.target.value || 
                        e.target.placeholder;
            speakContent(text);
        });
    });
};

export const disableScreenReader = () => {
    window.speechSynthesis.cancel();
};