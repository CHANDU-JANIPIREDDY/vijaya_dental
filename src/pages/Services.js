import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Services = () => {
  const allServices = [
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H6v-2h4V7h2v4h4v2h-4v4z"/></svg>
      ),
      title: 'Guided Dental Implants',
      description: 'Our signature procedure using advanced 3D surgical guides for precise implant placement. This computer-guided approach ensures optimal positioning, faster healing, and predictable results.',
      benefits: [
        'Pinpoint accuracy with 3D guidance',
        'Minimally invasive procedure',
        'Faster healing time',
        'Higher success rate',
        'Reduced discomfort'
      ],
      duration: '60-90 minutes',
      recovery: '3-7 days'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
      ),
      title: 'Immediate Dental Implants',
      description: 'Get your new teeth in a single day! Our immediate loading technology allows us to place implants and attach temporary crowns in one visit, giving you a complete smile instantly.',
      benefits: [
        'Teeth in a single day',
        'No temporary dentures needed',
        'Immediate aesthetic results',
        'Fewer dental visits',
        'Preserves bone and gum tissue'
      ],
      duration: '2-3 hours',
      recovery: '5-10 days'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7zm0 7H3v-5h9v5zm9-7h-7V5h7v7zm0 7h-7v-5h7v5z"/></svg>
      ),
      title: '3D Digital Dentistry',
      description: 'Experience the future of dental care with our CBCT scans, intraoral scanners, and digital smile design. Precise diagnostics lead to better treatment outcomes.',
      benefits: [
        'High-resolution 3D imaging',
        'Accurate treatment planning',
        'Digital impressions (no goop!)',
        'Virtual treatment simulation',
        'Reduced radiation exposure'
      ],
      duration: '15-30 minutes',
      recovery: 'None'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
      ),
      title: 'Painless Root Canal',
      description: 'Save your natural tooth with our advanced rotary endodontics. Using modern techniques and anesthesia, we make root canal treatment comfortable and efficient.',
      benefits: [
        'Painless procedure',
        'Advanced rotary files',
        'Single-visit treatment',
        'High success rate',
        'Preserves natural tooth'
      ],
      duration: '60-90 minutes',
      recovery: '1-2 days'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
      ),
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our comprehensive cosmetic services including veneers, teeth whitening, bonding, and complete smile makeovers.',
      benefits: [
        'Natural-looking results',
        'Customized treatment plans',
        'Minimally invasive options',
        'Long-lasting results',
        'Boosts confidence'
      ],
      duration: 'Varies',
      recovery: 'Minimal'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M4.22 11.29l5.31-5.31c.39-.39.39-1.02 0-1.41l-1.41-1.41c-.39-.39-1.02-.39-1.41 0L1.4 8.47c-.39.39-.39 1.02 0 1.41l5.66 5.66c.39.39 1.02.39 1.41 0l7.07-7.07c.39-.39.39-1.02 0-1.41l-1.41-1.41c-.39-.39-1.02-.39-1.41 0l-5.31 5.31-.71-.71zM18.36 12.71l-5.66 5.66c-.39.39-1.02.39-1.41 0l-5.66-5.66c-.39-.39-.39-1.02 0-1.41l1.41-1.41c.39-.39 1.02-.39 1.41 0l4.95 4.95 4.25-4.25c.39-.39 1.02-.39 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41l-2.11 2.11z"/></svg>
      ),
      title: 'Orthodontics',
      description: 'Straighten your teeth at any age with our orthodontic services. We offer traditional metal braces, ceramic braces, and clear aligner therapy.',
      benefits: [
        'Options for all ages',
        'Metal, ceramic, and clear aligners',
        'Improved oral health',
        'Better bite function',
        'Enhanced facial aesthetics'
      ],
      duration: '12-24 months',
      recovery: 'None'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      ),
      title: 'Teeth Whitening',
      description: 'Brighten your smile by several shades with our professional teeth whitening services. Safe, effective, and long-lasting results.',
      benefits: [
        'Up to 8 shades whiter',
        'Safe for enamel',
        'Quick results',
        'Long-lasting effect',
        'Take-home options available'
      ],
      duration: '60 minutes',
      recovery: 'None'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
      ),
      title: 'General Dentistry',
      description: 'Comprehensive dental care including regular check-ups, cleanings, fillings, and preventive treatments to maintain optimal oral health.',
      benefits: [
        'Regular dental check-ups',
        'Professional cleaning',
        'Cavity prevention',
        'Early problem detection',
        'Oral health education'
      ],
      duration: '30-60 minutes',
      recovery: 'None'
    }
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive dental care using advanced 3D digital technology</p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="section section-white">
        <div className="container">
          <div className="services-detail-grid">
            {allServices.map((service, index) => (
              <div key={index} className="service-detail-card">
                <div className="service-detail-header">
                  <div className="service-detail-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-detail-description">{service.description}</p>
                
                <div className="service-benefits">
                  <h4>Key Benefits:</h4>
                  <ul>
                    {service.benefits.map((benefit, i) => (
                      <li key={i}>
                        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-meta">
                  <div className="service-meta-item">
                    <span className="meta-label">Duration:</span>
                    <span className="meta-value">{service.duration}</span>
                  </div>
                  <div className="service-meta-item">
                    <span className="meta-label">Recovery:</span>
                    <span className="meta-value">{service.recovery}</span>
                  </div>
                </div>
                
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>
                  Book This Treatment
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Need Help Choosing the Right Treatment?</h2>
          <p className="cta-description">
            Our expert dentists will evaluate your dental health and recommend 
            the best treatment plan for your needs.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-gold btn-large">
              Schedule Consultation
            </Link>
            <a href="tel:+919876543210" className="btn btn-secondary btn-large">
              Call +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      {/* Additional Styles for Services Page */}
      <style>{`
        .page-header {
          background: var(--gradient-primary);
          padding: 140px 0 70px;
          text-align: center;
          color: var(--white);
        }
        
        .page-header h1 {
          color: var(--white);
          margin-bottom: 15px;
          font-size: clamp(2rem, 5vw, 3rem);
        }
        
        .page-header p {
          color: rgba(255, 255, 255, 0.9);
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .services-detail-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 25px;
        }
        
        .service-detail-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          padding: 30px;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--light-gray);
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
        }
        
        .service-detail-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }
        
        .service-detail-header {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 18px;
        }
        
        .service-detail-icon {
          width: 56px;
          height: 56px;
          background: var(--primary-pale);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .service-detail-icon svg {
          width: 28px;
          height: 28px;
          fill: var(--primary);
        }
        
        .service-detail-header h3 {
          font-size: clamp(1.15rem, 3vw, 1.3rem);
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          margin: 0;
          line-height: 1.3;
        }
        
        .service-detail-description {
          color: var(--dark-gray);
          line-height: 1.7;
          margin-bottom: 22px;
          font-size: 0.95rem;
        }
        
        .service-benefits {
          flex-grow: 1;
        }
        
        .service-benefits h4 {
          font-size: 0.95rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          color: var(--primary-dark);
          margin-bottom: 12px;
        }
        
        .service-benefits ul {
          list-style: none;
        }
        
        .service-benefits li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 6px 0;
          color: var(--dark-gray);
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        .service-benefits li svg {
          width: 18px;
          height: 18px;
          fill: var(--accent-green);
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .service-meta {
          display: flex;
          gap: 25px;
          padding-top: 18px;
          border-top: 1px solid var(--light-gray);
          margin-top: 18px;
          flex-wrap: wrap;
        }
        
        .service-meta-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .meta-label {
          font-size: 0.8rem;
          color: var(--medium-gray);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .meta-value {
          font-size: 0.95rem;
          color: var(--text-dark);
          font-weight: 600;
        }
        
        /* Tablet */
        @media (max-width: 1024px) {
          .services-detail-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
          }
          
          .service-detail-card {
            padding: 25px;
          }
        }
        
        /* Mobile */
        @media (max-width: 768px) {
          .page-header {
            padding: 100px 0 50px;
          }
          
          .services-detail-grid {
            grid-template-columns: 1fr;
          }
          
          .service-detail-card {
            padding: 24px 20px;
          }
          
          .service-detail-header {
            gap: 15px;
          }
          
          .service-detail-icon {
            width: 50px;
            height: 50px;
          }
          
          .service-detail-icon svg {
            width: 24px;
            height: 24px;
          }
          
          .service-meta {
            flex-direction: column;
            gap: 12px;
          }
        }
        
        /* Small Mobile */
        @media (max-width: 480px) {
          .page-header {
            padding: 80px 0 40px;
          }
          
          .service-detail-card {
            padding: 20px 16px;
          }
          
          .service-benefits li {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
