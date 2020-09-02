"use strict";
let rootElement = document.querySelector('html');
let themeToggleSwitchEl = document.querySelector('#themeToggleSwitch');
let toggleDotEl = document.querySelector('#toggleDot');
let currentTheme = 'dark';
themeToggleSwitchEl.addEventListener('click', () => {
    if (currentTheme === 'dark') {
        toggleDotEl.style.left = '55%';
        rootElement.style.setProperty('--theme-bg', 'hsl(0, 0%, 100%)');
        rootElement.style.setProperty('--theme-top-bg', 'hsl(225, 100%, 98%)');
        rootElement.style.setProperty('--theme-card-bg', 'hsl(227, 47%, 96%)');
        rootElement.style.setProperty('--theme-card-bg-hover', 'hsl(229.4, 27%, 87.6%)');
        rootElement.style.setProperty('--theme-text-main', 'hsl(230, 17%, 14%)');
        rootElement.style.setProperty('--theme-text-secondary', 'hsl(228, 12%, 44%)');
        rootElement.style.setProperty('--theme-toggle', 'hsl(230, 22%, 74%)');
        rootElement.style.setProperty('--theme-toggle-hover', 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))');
        currentTheme = 'light';
    }
    else {
        toggleDotEl.style.left = '5%';
        rootElement.style.setProperty('--theme-bg', 'hsl(230, 17%, 14%)');
        rootElement.style.setProperty('--theme-top-bg', 'hsl(232, 19%, 15%)');
        rootElement.style.setProperty('--theme-card-bg', 'hsl(228, 28%, 20%)');
        rootElement.style.setProperty('--theme-card-bg-hover', 'hsl(230, 23.4%, 25.1%)');
        rootElement.style.setProperty('--theme-text-main', 'hsl(0, 0%, 100%)');
        rootElement.style.setProperty('--theme-text-secondary', 'hsl(228, 34%, 66%)');
        rootElement.style.setProperty('--theme-toggle', 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))');
        rootElement.style.setProperty('--theme-toggle-hover', 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))');
        currentTheme = 'dark';
    }
});
//# sourceMappingURL=main.js.map