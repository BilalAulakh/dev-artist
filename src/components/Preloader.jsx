import React, { useEffect, useState } from 'react';
import './Preloader.css';
import logoDisplay from '../assets/logo without bg.png';

export default function Preloader({ onFinish }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            // Keep visible for at least 2 seconds to show animation
            setTimeout(() => {
                setIsVisible(false);
                if (onFinish) onFinish();
            }, 2000);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            // Fallback timeout
            const timeout = setTimeout(handleLoad, 3000);
            return () => {
                window.removeEventListener('load', handleLoad);
                clearTimeout(timeout);
            };
        }
    }, [onFinish]);

    if (!isVisible) return null;

    return (
        <div className="preloader-container">
            <div className="preloader-content">
                <div className="logo-wrapper">
                    <div className="logo-glow"></div>
                    <div className="spinner-ring"></div>
                    <img src={logoDisplay} alt="Logo" className="app-logo" />
                </div>
                <div className="loading-text">
                    Loading
                    <span className="loading-dots">
                        <span>.</span><span>.</span><span>.</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
