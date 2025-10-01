import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';
import iotImage from '../../assets/images/iot.png';
import webImage from '../../assets/images/web-dev.png';
import appImage from '../../assets/images/app-dev.png';

// ContentBlock component now takes an onVisible callback to update the parent
const ContentBlock = ({ title, visual, children, onVisible }) => {
  // This ref is for the intersection observer to change the image
  const { ref } = useInView({
    triggerOnce: false, // Fire every time it enters/leaves view
    threshold: 0.6, // Trigger when 60% of the element is visible
    onChange: (inView) => {
      if (inView) {
        onVisible(visual); // Call the parent function with the associated visual key
      }
    },
  });

  // This second ref is just for the fade-in animation, which should only happen once
  const { ref: animRef, inView: animInView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
  });

  return (
    // Combine the refs. The 'ref' is for image-swapping, 'animRef' is for the fade-in animation.
    <div ref={ref}>
      <div ref={animRef} className={`about-content-block ${animInView ? 'is-visible' : ''}`}>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  );
};


const About = () => {
  // State to track which visual should be active
  const [activeVisual, setActiveVisual] = useState('iot');

  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-visual">
          <div className="sticky-container">
            <div className="visual-placeholder">
              <img src={iotImage} alt="IoT Devices" className={`visual-image ${activeVisual === 'iot' ? 'is-active' : ''}`} />
              <img src={webImage} alt="Web Development" className={`visual-image ${activeVisual === 'web' ? 'is-active' : ''}`} />
              <img src={appImage} alt="App Development" className={`visual-image ${activeVisual === 'app' ? 'is-active' : ''}`} />
            </div>
          </div>
        </div>

        <div className="about-content">
          {/* CORRECTED: Each ContentBlock now correctly wraps its children with an explicit closing tag */}
          <ContentBlock title="Our Mission" visual="iot" onVisible={setActiveVisual}>
            To empower businesses with transformative digital solutions. We integrate cutting-edge IoT, web, and mobile technologies to create seamless, intelligent experiences that drive growth and efficiency.
          </ContentBlock>
          
          <ContentBlock title="Our Vision" visual="web" onVisible={setActiveVisual}>
            To be a leading force in digital innovation, recognized for our ability to turn complex challenges into elegant, user-centric solutions. We envision a future where technology is an intuitive extension of human potential.
          </ContentBlock>
          
          <ContentBlock title="Our Approach" visual="app" onVisible={setActiveVisual}>
            We believe in collaborative partnerships. By understanding your unique goals, we craft bespoke strategies and build robust platforms. Our agile process ensures transparency, flexibility, and a final product that exceeds expectations.
          </ContentBlock>
        </div>
      </div>
    </section>
  );
};

export default About;