import { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check if user has a theme preference stored
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.body.classList.add('bg-dark');
        } else {
            setIsDark(false);
            document.body.classList.remove('bg-dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        
        if (newTheme) {
            document.body.classList.add('bg-dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('bg-dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <li className="theme-toggle">
            <button 
                onClick={toggleTheme}
                className="theme-toggle-btn"
                aria-label="Toggle theme"
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
                {isDark ? (
                    <i className="fas fa-sun"></i>
                ) : (
                    <i className="fas fa-moon"></i>
                )}
            </button>
        </li>
    );
};

export default ThemeToggle;