// src/sections/Services/Services.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Services.css';
import webDevIcon from '../../assets/images/web-dev.png';
import appDevIcon from '../../assets/images/app-dev.png';
import iotIcon from '../../assets/images/iot.png';

const ServiceItem = ({ icon, title, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  return (
    <div
      ref={ref} 
      // Add a dynamic animation-delay based on the 'delay' prop
      className={`service-item ${inView ? 'is-visible' : ''}`}
      style={{ animationDelay: inView ? delay : '0s' }}
    >
      <div className="service-icon-container">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      {/* We pass a delay to each card */}
      <ServiceItem icon={webDevIcon} title="Web Development" delay={'0.1s'}/>
      <ServiceItem icon={appDevIcon} title="App Development" delay={'0.2s'}/>
      <ServiceItem icon={iotIcon} title="IoT Solutions" delay={'0.3s'}/>
    </section>
  );
};

export default Services;