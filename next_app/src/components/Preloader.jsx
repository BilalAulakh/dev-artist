"use client";
import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css';
import logoDisplay from '../assets/logo without bg.png';
import Image from 'next/image';

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
        <div className={styles['preloader-container']}>
            <div className={styles['preloader-content']}>
                <div className={styles['logo-wrapper']}>
                    <div className={styles['logo-glow']}></div>
                    <div className={styles['spinner-ring']}></div>
                    <Image src={logoDisplay} alt="Logo" className={styles['app-logo']} />
                </div>
                <div className={styles['loading-text']}>
                    Loading
                    <span className={styles['loading-dots']}>
                        <span>.</span><span>.</span><span>.</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
