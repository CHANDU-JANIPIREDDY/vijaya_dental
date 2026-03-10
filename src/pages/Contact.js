import React, { useState } from 'react';
import '../styles/home.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
      title: 'Visit Us',
      content: 'Opp. Veeramma Cheruvu Park,\nGandhinagar, Bhimavaram,\nAndhra Pradesh 534201'
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.49-5.15-3.8-6.62-6.63l1.97-1.57c.26-.26.35-.62.25-1.01a11.36 11.36 0 01-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3.3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .75-.63.75-1.19v-3.44c0-.54-.45-.99-.99-.99z"/></svg>,
      title: 'Call Us',
      content: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>,
      title: 'Email Us',
      content: 'vijayadental@example.com',
      link: 'mailto:vijayadental@example.com'
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>,
      title: 'Working Hours',
      content: 'Mon - Sat: 9:00 AM - 8:00 PM\nSunday: 10:00 AM - 2:00 PM'
    }
  ];

  const services = [
    'General Consultation',
    'Guided Dental Implants',
    'Immediate Dental Implants',
    'Root Canal Treatment',
    'Teeth Whitening',
    'Orthodontics/Braces',
    'Dental Cleaning',
    'Other'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Book your appointment or get in touch with us</p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section section-white">
        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <h2>Book an Appointment</h2>
              <p>Fill out the form below and we'll get back to you to confirm your appointment</p>
            </div>

            {formStatus === 'success' && (
              <div className="form-success">
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                <span>Thank you! We'll contact you shortly to confirm your appointment.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Select Service *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Preferred Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Preferred Time *</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your dental concerns or any special requirements..."
                  rows="4"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-large" style={{ width: '100%' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
                Book Appointment
              </button>

              <p className="form-note">
                By submitting this form, you agree to our privacy policy. We'll only use 
                your information to contact you about your appointment.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-wrapper">
            <div className="info-header">
              <h2>Get In Touch</h2>
              <p>Reach out to us through any of these channels</p>
            </div>

            <div className="contact-cards">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-card-icon">{item.icon}</div>
                  <div className="contact-card-content">
                    <h4>{item.title}</h4>
                    {item.link ? (
                      <a href={item.link}>{item.content}</a>
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="map-container">
              <div className="map-placeholder">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="var(--primary)">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p>Opp. Veeramma Cheruvu Park, Gandhinagar, Bhimavaram, AP 534201</p>
                <a 
                  href="https://maps.google.com/?q=Vijaya+Dental+Clinic+Bhimavaram" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="quick-contact">
              <h3>Need Immediate Assistance?</h3>
              <p>Call us now for urgent dental concerns</p>
              <a href="tel:+919876543210" className="btn btn-gold btn-large">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.49-5.15-3.8-6.62-6.63l1.97-1.57c.26-.26.35-.62.25-1.01a11.36 11.36 0 01-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3.3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .75-.63.75-1.19v-3.44c0-.54-.45-.99-.99-.99z"/>
                </svg>
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>What is the cost of a dental consultation?</h4>
              <p>Our initial consultation is complimentary. We believe in understanding your dental needs before recommending any treatment. Call us to schedule your free consultation.</p>
            </div>
            <div className="faq-item">
              <h4>Do you accept insurance?</h4>
              <p>We accept most major dental insurance plans. Please contact us with your insurance details, and we'll verify your coverage before your appointment.</p>
            </div>
            <div className="faq-item">
              <h4>How long does a dental implant procedure take?</h4>
              <p>The implant placement procedure typically takes 60-90 minutes per implant. With our guided implant technology, the procedure is faster and more precise. Complete treatment including healing may take 3-6 months.</p>
            </div>
            <div className="faq-item">
              <h4>Is the treatment painful?</h4>
              <p>We use advanced anesthesia techniques and minimally invasive procedures to ensure painless treatment. Most patients report little to no discomfort during and after procedures.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer emergency dental services?</h4>
              <p>Yes, we accommodate emergency dental appointments. Please call us immediately for urgent dental issues, and we'll do our best to see you the same day.</p>
            </div>
            <div className="faq-item">
              <h4>What are your clinic timings?</h4>
              <p>We're open Monday to Saturday from 9:00 AM to 8:00 PM, and Sunday from 10:00 AM to 2:00 PM. We also offer flexible appointment scheduling to accommodate your busy schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Styles */}
      <style>{`
        .contact-header {
          background: linear-gradient(135deg, #005f8a 0%, #0077b6 100%);
        }

        .contact-container {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 var(--container-padding);
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 40px;
        }

        .contact-form-wrapper {
          background: var(--white);
          padding: clamp(28px, 5vw, 40px);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
        }

        .form-header {
          margin-bottom: 28px;
        }

        .form-header h2 {
          font-size: clamp(1.5rem, 4vw, 1.8rem);
          margin-bottom: 8px;
        }

        .form-header p {
          color: var(--dark-gray);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .form-success {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #d1fae5;
          color: #065f46;
          padding: 14px 18px;
          border-radius: var(--radius-md);
          margin-bottom: 22px;
          font-size: 0.9rem;
        }

        .form-success svg {
          width: 22px;
          height: 22px;
          fill: #059669;
          flex-shrink: 0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-weight: 500;
          color: var(--text-dark);
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 13px 16px;
          border: 2px solid var(--light-gray);
          border-radius: var(--radius-md);
          font-family: inherit;
          font-size: 0.95rem;
          transition: all var(--transition-fast);
          background: var(--white);
          min-height: 50px;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--primary-pale);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-note {
          font-size: 0.8rem;
          color: var(--medium-gray);
          text-align: center;
          margin-top: 10px;
          line-height: 1.5;
        }

        .contact-info-wrapper {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .info-header {
          margin-bottom: 8px;
        }

        .info-header h2 {
          font-size: clamp(1.5rem, 4vw, 1.8rem);
          margin-bottom: 8px;
        }

        .info-header p {
          color: var(--dark-gray);
          font-size: 0.95rem;
        }

        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-card {
          display: flex;
          gap: 18px;
          padding: 22px;
          background: var(--off-white);
          border-radius: var(--radius-md);
          transition: all var(--transition-normal);
        }

        .contact-card:hover {
          background: var(--white);
          box-shadow: var(--shadow-md);
          transform: translateX(5px);
        }

        .contact-card-icon {
          width: 48px;
          height: 48px;
          background: var(--primary-pale);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-card-icon svg {
          width: 22px;
          height: 22px;
          fill: var(--primary);
        }

        .contact-card-content h4 {
          font-size: 1.05rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          color: var(--primary-dark);
          margin-bottom: 6px;
        }

        .contact-card-content p,
        .contact-card-content a {
          color: var(--dark-gray);
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
          word-break: break-word;
        }

        .contact-card-content a {
          color: var(--primary);
          font-weight: 500;
        }

        .contact-card-content a:hover {
          text-decoration: underline;
        }

        .map-container {
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }

        .map-placeholder {
          background: var(--gradient-light);
          padding: clamp(25px, 5vw, 40px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .map-placeholder svg {
          width: 42px;
          height: 42px;
        }

        .map-placeholder p {
          color: var(--dark-gray);
          font-size: 0.9rem;
          margin: 0;
          line-height: 1.6;
        }

        .quick-contact {
          background: var(--gradient-primary);
          padding: clamp(28px, 5vw, 35px);
          border-radius: var(--radius-lg);
          text-align: center;
          color: var(--white);
        }

        .quick-contact h3 {
          color: var(--white);
          font-size: clamp(1.2rem, 3vw, 1.4rem);
          margin-bottom: 6px;
        }

        .quick-contact p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 18px;
          font-size: 0.95rem;
        }

        .quick-contact .btn {
          width: 100%;
          max-width: 280px;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .faq-item {
          background: var(--white);
          padding: clamp(22px, 4vw, 30px);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          border-left: 4px solid var(--primary);
        }

        .faq-item h4 {
          font-size: clamp(1rem, 2.5vw, 1.1rem);
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          color: var(--primary-dark);
          margin-bottom: 10px;
          line-height: 1.4;
        }

        .faq-item p {
          color: var(--dark-gray);
          line-height: 1.7;
          margin: 0;
          font-size: 0.9rem;
        }

        /* Tablet - 1024px */
        @media (max-width: 1024px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .contact-form-wrapper {
            order: 2;
          }

          .contact-info-wrapper {
            order: 1;
          }

          .faq-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
        }

        /* Mobile - 768px */
        @media (max-width: 768px) {
          .contact-container {
            padding: 0 16px;
            gap: 30px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .contact-card {
            flex-direction: column;
            text-align: center;
            padding: 20px;
          }

          .contact-card-icon {
            margin: 0 auto;
          }

          .contact-card:hover {
            transform: translateY(-3px);
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }

          .quick-contact .btn {
            max-width: 100%;
          }
        }

        /* Small Mobile - 480px */
        @media (max-width: 480px) {
          .contact-container {
            padding: 0 14px;
          }

          .contact-form-wrapper {
            padding: 24px 18px;
          }

          .form-header h2 {
            font-size: 1.4rem;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            padding: 12px 14px;
            font-size: 0.9rem;
          }

          .contact-card {
            padding: 18px 16px;
          }

          .contact-card-icon {
            width: 44px;
            height: 44px;
          }

          .contact-card-icon svg {
            width: 20px;
            height: 20px;
          }

          .map-placeholder {
            padding: 22px 16px;
          }

          .map-placeholder svg {
            width: 36px;
            height: 36px;
          }

          .map-placeholder p {
            font-size: 0.85rem;
          }

          .faq-item {
            padding: 20px 16px;
          }

          .faq-item h4 {
            font-size: 0.95rem;
          }

          .faq-item p {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
