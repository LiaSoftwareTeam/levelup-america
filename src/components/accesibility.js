export const updateTextSize = (size) => {
    document.documentElement.style.setProperty('--font-size', size);
    const elements = document.querySelectorAll('p, h1, h2, h3, span, button, input, label, a');
    elements.forEach(element => {
        element.style.fontSize = size;
    });
};

export const speakContent = (text, language = 'es') => {
    if (!document.getElementById('screenReader')?.checked) return;

    const utterance = new SpeechSynthesisUtterance(text);
    // Always use the current selected language
    const currentLanguage = document.querySelector('input[name="language"]:checked')?.value || 'es';
    utterance.lang = currentLanguage === 'en' ? 'en-US' : 'es-ES';
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;

    // Get available voices and set appropriate voice based on current language
    const voices = window.speechSynthesis.getVoices();
    const languageVoices = voices.filter(voice => voice.lang.startsWith(currentLanguage === 'en' ? 'en' : 'es'));
    if (languageVoices.length > 0) {
        utterance.voice = languageVoices[0];
    }
    
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
            const selectedLanguage = document.querySelector('input[name="language"]:checked')?.value || 'es';
            speakContent(text, selectedLanguage);
        });
        element.addEventListener('mouseenter', (e) => {
            const text = e.target.getAttribute('aria-label') || 
                        e.target.textContent || 
                        e.target.value || 
                        e.target.placeholder;
            const selectedLanguage = document.querySelector('input[name="language"]:checked')?.value || 'es';
            speakContent(text, selectedLanguage);
        });
    });
};

export const disableScreenReader = () => {
    window.speechSynthesis.cancel();
};