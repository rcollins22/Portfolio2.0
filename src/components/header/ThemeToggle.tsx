import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ThemeToggle = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check if current path is dark theme
        setIsDark(location.pathname === '/home-dark');
    }, [location.pathname]);

    const toggleTheme = () => {
        if (isDark) {
            navigate('/');
        } else {
            navigate('/home-dark');
        }
    };

    return (
        <li className="theme-toggle">
            <button 
                className="theme-toggle-btn" 
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                <div className="toggle-switch">
                    <div className={`toggle-slider ${isDark ? 'dark' : 'light'}`}>
                        <i className={`fas ${isDark ? 'fa-moon' : 'fa-sun'}`}></i>
                    </div>
                </div>
            </button>
        </li>
    );
};

export default ThemeToggle;