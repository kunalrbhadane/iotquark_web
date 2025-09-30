// src/App.js
import React from 'react';
import './styles/index.css';

// Import all sections
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Contact from './sections/Contact/Contact';

// --- NEW ICON COMPONENT ---
// By defining the SVG directly here, we gain full styling control
const InstagramIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);


function App() {
  return (
    <>
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/videos/background-video.mp4" type="video/mp4" />
      </video>
      
      <div className="app-frame">
        <div className="app-shell">
          <div className="site-container">
            <aside className="left-sidebar">
              <div className="logo-vertical">
                <span>IoT</span>Quark
              </div>
              <div className="sidebar-bottom">
                <div className="follow-us">
                  <h4>FOLLOW US</h4>
                  
                  {/* --- THE FIX IS HERE: We now use the <InstagramIcon /> component --- */}
                  <div className="social-icons">
                    <a href="https://www.instagram.com/iotquark?igsh=OHN5MzZ1aTN2bGVs" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                      <InstagramIcon />
                    </a>
                  </div>
                  
                </div>
                <a href="#contact" className="transform-button">
                  <span>&uarr;</span> Let's Transform Your Digital Presence
                </a>
              </div>
            </aside>

            <div className="main-content-area">
              <Hero />
              <About />
              <Services />
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;