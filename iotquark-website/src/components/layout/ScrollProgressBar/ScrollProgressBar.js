// src/components/layout/ScrollProgressBar/ScrollProgressBar.js
import React from 'react';
import useScrollProgress from './useScrollProgress'; // <-- Updated Path

const ScrollProgressBar = () => {
    const scrollProgress = useScrollProgress();

    const progressBarStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        backgroundColor: 'transparent',
        zIndex: 9999
    };

    const progressFillStyle = {
        height: '100%',
        backgroundColor: '#00bcd4',
        width: scrollProgress,
        transition: 'width 0.05s linear'
    };

    return (
        <div style={progressBarStyle}>
            <div style={progressFillStyle}></div>
        </div>
    );
};

export default ScrollProgressBar;