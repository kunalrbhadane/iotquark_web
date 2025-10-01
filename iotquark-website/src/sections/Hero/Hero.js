import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Hero.css';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      // UPDATED: Strings now use two <br/> tags to create a three-line effect
      strings: [
        'WE<br/>BUILD<br/>INNOVATION.',
        'WE<br/>BUILD<br/>EXPERIENCES.',
        'WE<br/>BUILD<br/>DIGITAL.'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="nav-menu">
        <a href="#home" className="active">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      
      <div className="hero-content">
        <h1>
          <span ref={el} />
        </h1>
        <p>
          From web design and IoT development to marketing strategies, we craft tailored solutions to drive your online success.
        </p>
      </div>

      <div className="contact-button-container">
        <a href="#contact" className="contact-button">Contact Us</a>
      </div>
    </section>
  );
};

export default Hero;