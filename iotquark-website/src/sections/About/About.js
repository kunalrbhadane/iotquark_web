// src/sections/About/About.js
import React from 'react';
// We use 'react-intersection-observer' as it's the standard.
import { useInView } from 'react-intersection-observer'; 
import './About.css';

const ContentBlock = ({ title, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger animation a bit earlier
  });

  return (
    <div ref={ref} className={`about-content-block ${inView ? 'is-visible' : ''}`}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-visual">
          <div className="sticky-container">
            <div className="visual-placeholder">
              <div className="logo-symbol">
                <span>IoT</span>Quark
              </div>
            </div>
          </div>
        </div>
        <div className="about-content">
          <ContentBlock title="Our Mission">
            To engineer intelligent, end-to-end ecosystems that connect the physical world to the digital, empowering our clients to innovate and lead.
          </ContentBlock>
          <ContentBlock title="Our Vision">
            To pioneer a future where intelligent environments and connected devices operate in seamless harmony, creating smarter industries and enriching human experience.
          </ContentBlock>
          <ContentBlock title="Our Process">
            We follow a meticulous process of discovery, design, development, and deployment, ensuring excellence at every stage of the product lifecycle.
          </ContentBlock>
          <ContentBlock title="Our Expertise">
            We specialize in the complete stack—from embedded systems to cloud infrastructure and user-facing applications—to build truly integrated solutions.
          </ContentBlock>
        </div>
      </div>
    </section>
  );
};

export default About;