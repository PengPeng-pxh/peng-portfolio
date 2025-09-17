const themeBtn = document.getElementById('themeBtn'); 
const root = document.documentElement;
const key = 'theme';

function setTheme(next) {
    if (next) {
        root.setAttribute('data-theme', next);
        localStorage.setItem(key, next);
    }
    else {
        root.removeAttribute('data-theme');
        localStorage.removeItem(key);
    } 
    themeBtn.setAttribute('aria-pressed', next === 'dark');
}

themeBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    if (current === 'dark') {
        setTheme('light');
        themeBtn.innerHTML='🌙';
    } 
    else {
        setTheme('dark');
        themeBtn.innerHTML='☀︎';
    } 
});