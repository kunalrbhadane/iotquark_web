// src/sections/Services/Services.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Services.css';
import webDevIcon from '../../assets/images/web-dev.png';
import appDevIcon from '../../assets/images/app-dev.png';
import iotIcon from '../../assets/images/iot.png';

// The new, detailed component
const ServiceItem = ({ icon, title, details, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <div
      ref={ref} 
      className={`service-item ${inView ? 'is-visible' : ''}`}
      style={{ animationDelay: inView ? delay : '0s' }}
    >
      <div className="service-icon-container">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <h3>{title}</h3>
      
      {/* --- NEW: The bulleted list of details --- */}
      <ul className="service-details">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

// Main Services component with the new details defined
const Services = () => {
  // Define the details for each service card
  const webDetails = [
    "Responsive E-commerce Platforms",
    "Content Management Systems (CMS)",
    "Custom Web Applications",
    "API Integration"
  ];

  const appDetails = [
    "Native iOS & Android Apps",
    "Cross-Platform Development",
    "Intuitive UI/UX Design",
    "App Maintenance & Support"
  ];

  const iotDetails = [
    "Hardware & Firmware Integration",
    "Cloud IoT Platforms",
    "Real-time Data Dashboards",
    "Smart Device Networking"
  ];

  return (
    <section id="services" className="services-section">
      <ServiceItem icon={webDevIcon} title="Web Development" details={webDetails} delay={'0.1s'}/>
      <ServiceItem icon={appDevIcon} title="App Development" details={appDetails} delay={'0.2s'}/>
      <ServiceItem icon={iotIcon} title="IoT Solutions" details={iotDetails} delay={'0.3s'}/>
    </section>
  );
};

export default Services;