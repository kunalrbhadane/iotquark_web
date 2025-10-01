import React, { useState, useEffect } from 'react'; // NEW: Import useEffect
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // NEW: useEffect to automatically hide the status message after 5 seconds
  useEffect(() => {
    // If there is a status message (success or error)
    if (submitStatus) {
      // Set up a timer to clear the message
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000); // 5000ms = 5 seconds

      // Cleanup function: if the component unmounts, clear the timer
      return () => clearTimeout(timer);
    }
  }, [submitStatus]); // This effect runs whenever submitStatus changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, e.target, publicKey)
      .then((result) => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Let's Build Something Great</h2>
        <p>Have a project in mind or just want to say hello? Drop us a line or get in touch directly.</p>
        <div className="contact-details-container">
          <a href="mailto:iotquark001@gmail.com" className="contact-detail-item">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>iotquark001@gmail.com</span>
          </a>
          <a href="tel:+918554837128" className="contact-detail-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>+91 85548 37128</span>
          </a>
          <a href="https://www.instagram.com/iotquark?igsh=OHN5MzZ1aTN2bGVs" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            <span>@iotquark</span>
          </a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} disabled={isSubmitting} />
          <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} disabled={isSubmitting} />
          <textarea name="message" placeholder="Your Message" rows="5" required value={formData.message} onChange={handleChange} disabled={isSubmitting}></textarea>
          
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {submitStatus === 'success' && <p className="status-message success">Thank you! Your message has been sent.</p>}
          {submitStatus === 'error' && <p className="status-message error">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;