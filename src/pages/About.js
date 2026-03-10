import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const About = () => {
  const doctors = [
    {
      name: 'Dr. Vijay Kumar',
      role: 'Chief Dental Surgeon',
      qualification: 'BDS, MDS (Oral & Maxillofacial Surgery)',
      experience: '15+ years',
      specialty: 'Dental Implants & Oral Surgery',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=350&fit=crop'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Senior Endodontist',
      qualification: 'BDS, MDS (Conservative Dentistry)',
      experience: '12+ years',
      specialty: 'Root Canal & Cosmetic Dentistry',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=350&fit=crop'
    },
    {
      name: 'Dr. Ravi Teja',
      role: 'Orthodontist',
      qualification: 'BDS, MDS (Orthodontics)',
      experience: '10+ years',
      specialty: 'Braces & Aligners',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=350&fit=crop'
    }
  ];

  const milestones = [
    { year: '2009', title: 'Clinic Founded', description: 'Started with a vision to provide advanced dental care' },
    { year: '2014', title: '3D Technology', description: 'Introduced CBCT and digital imaging systems' },
    { year: '2018', title: 'Implant Center', description: 'Established dedicated guided implant center' },
    { year: '2024', title: '5000+ Patients', description: 'Served over 5000 happy patients with 5.0 rating' }
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header about-header">
        <div className="container">
          <h1>About Us</h1>
          <p>15+ years of excellence in advanced dental care</p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="section section-white">
        <div className="about-page-container">
          <div className="about-page-content">
            <span className="section-subtitle">Our Story</span>
            <h2 className="section-title">Committed to Excellence in Dental Care</h2>
            <p className="about-page-text">
              Vijaya Multispeciality Dental Clinic was established in 2009 with a clear 
              mission: to provide Bhimavaram and surrounding areas with world-class dental 
              care using the most advanced technology available.
            </p>
            <p className="about-page-text">
              Located opposite the serene Veeramma Cheruvu Park in Gandhinagar, our clinic 
              has grown to become the most trusted dental care destination in the region. 
              We specialize in Guided Dental Implants and Immediate Dental Implants, 
              utilizing cutting-edge 3D digital technology for painless and highly 
              precise treatments.
            </p>
            <p className="about-page-text">
              Our state-of-the-art facility is equipped with the latest dental technology, 
              including CBCT scanners, intraoral scanners, computer-guided surgery systems, 
              and advanced sterilization protocols. Every aspect of our clinic is designed 
              to ensure patient comfort, safety, and optimal treatment outcomes.
            </p>
            
            <div className="about-page-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </div>
                <div className="highlight-content">
                  <h4>Advanced Technology</h4>
                  <p>3D CBCT, Digital Scanners, Guided Surgery</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                </div>
                <div className="highlight-content">
                  <h4>Expert Team</h4>
                  <p>Specialists with 10-15+ years experience</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
                <div className="highlight-content">
                  <h4>Patient Care</h4>
                  <p>Painless treatments, personalized attention</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-page-image">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=700&fit=crop" 
              alt="Vijaya Dental Clinic" 
            />
            <div className="about-page-badge">
              <span className="badge-number">5.0</span>
              <span className="badge-text">Patient Rating</span>
              <span className="badge-reviews">(132 Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-light">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mv-card">
              <div className="mv-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide exceptional dental care using advanced technology while ensuring 
                every patient experiences painless, comfortable, and effective treatments. 
                We aim to educate our community about oral health and make quality dental 
                care accessible to all.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading dental care provider in Andhra Pradesh, recognized for 
                excellence in implant dentistry and patient care. We envision a future where 
                everyone has access to advanced, painless dental treatments that transform 
                lives and restore confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Journey</span>
            <h2 className="section-title">Milestones of Excellence</h2>
          </div>
          
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <span className="timeline-year">{milestone.year}</span>
                </div>
                <div className="timeline-content">
                  <h4>{milestone.title}</h4>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Team</span>
            <h2 className="section-title">Meet Our Expert Dentists</h2>
            <p className="section-description">
              Our team of highly qualified specialists brings together decades of 
              experience and expertise in various dental disciplines.
            </p>
          </div>
          
          <div className="doctors-grid">
            {doctors.map((doctor, index) => (
              <div key={index} className="doctor-card">
                <div className="doctor-image">
                  <img src={doctor.image} alt={doctor.name} />
                  <div className="doctor-overlay">
                    <Link to="/contact" className="btn btn-gold">Book Appointment</Link>
                  </div>
                </div>
                <div className="doctor-info">
                  <h4>{doctor.name}</h4>
                  <span className="doctor-role">{doctor.role}</span>
                  <p className="doctor-qualification">{doctor.qualification}</p>
                  <div className="doctor-details">
                    <div className="doctor-detail">
                      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                      {doctor.experience}
                    </div>
                    <div className="doctor-detail">
                      <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H6v-2h4V7h2v4h4v2h-4v4z"/></svg>
                      {doctor.specialty}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Facilities */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Facilities</span>
            <h2 className="section-title">World-Class Infrastructure</h2>
          </div>
          
          <div className="facilities-grid">
            <div className="facility-item">
              <div className="facility-icon">
                <svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7zm0 7H3v-5h9v5zm9-7h-7V5h7v7zm0 7h-7v-5h7v5z"/></svg>
              </div>
              <h4>3D CBCT Scanner</h4>
              <p>High-resolution 3D imaging for accurate diagnosis and treatment planning</p>
            </div>
            <div className="facility-item">
              <div className="facility-icon">
                <svg viewBox="0 0 24 24"><path d="M4.22 11.29l5.31-5.31c.39-.39.39-1.02 0-1.41l-1.41-1.41c-.39-.39-1.02-.39-1.41 0L1.4 8.47c-.39.39-.39 1.02 0 1.41l5.66 5.66c.39.39 1.02.39 1.41 0l7.07-7.07c.39-.39.39-1.02 0-1.41l-1.41-1.41c-.39-.39-1.02-.39-1.41 0l-5.31 5.31-.71-.71zM18.36 12.71l-5.66 5.66c-.39.39-1.02.39-1.41 0l-5.66-5.66c-.39-.39-.39-1.02 0-1.41l1.41-1.41c.39-.39 1.02-.39 1.41 0l4.95 4.95 4.25-4.25c.39-.39 1.02-.39 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41l-2.11 2.11z"/></svg>
              </div>
              <h4>Digital Impressions</h4>
              <p>Intraoral scanners for comfortable, precise digital impressions</p>
            </div>
            <div className="facility-item">
              <div className="facility-icon">
                <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H6v-2h4V7h2v4h4v2h-4v4z"/></svg>
              </div>
              <h4>Guided Surgery System</h4>
              <p>Computer-guided implant placement for maximum precision</p>
            </div>
            <div className="facility-item">
              <div className="facility-icon">
                <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
              <h4>Sterilization Center</h4>
              <p>Advanced autoclave and infection control protocols</p>
            </div>
            <div className="facility-item">
              <div className="facility-icon">
                <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-.9-2-2-2zm-5 12H9v-2h6v2zm0-3H9V9h6v2zm0-3H9V6h6v2z"/></svg>
              </div>
              <h4>Comfortable Chairs</h4>
              <p>Ergonomic dental chairs for patient comfort during procedures</p>
            </div>
            <div className="facility-item">
              <div className="facility-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-8h-2V7h2v2z"/></svg>
              </div>
              <h4>Waiting Area</h4>
              <p>Comfortable lounge with WiFi and refreshments</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Experience the Vijaya Dental Difference</h2>
          <p className="cta-description">
            Book your consultation today and discover why thousands of patients 
            trust us with their dental care.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-gold btn-large">
              Book Appointment
            </Link>
            <a href="tel:+919876543210" className="btn btn-secondary btn-large">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Additional Styles */}
      <style>{`
        .about-header {
          background: linear-gradient(135deg, #005f8a 0%, #0077b6 100%);
        }

        .about-page-container {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 var(--container-padding);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-page-content .section-subtitle {
          margin-bottom: 15px;
        }

        .about-page-content .section-title {
          text-align: left;
          margin-bottom: 25px;
        }

        .about-page-text {
          color: var(--dark-gray);
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          line-height: 1.8;
          margin-bottom: 18px;
        }

        .about-page-highlights {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-top: 30px;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .highlight-icon {
          width: 48px;
          height: 48px;
          background: var(--primary-pale);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .highlight-icon svg {
          width: 24px;
          height: 24px;
          fill: var(--primary);
        }

        .highlight-content h4 {
          font-size: 1.05rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          color: var(--primary-dark);
          margin-bottom: 4px;
        }

        .highlight-content p {
          font-size: 0.9rem;
          color: var(--dark-gray);
          margin: 0;
        }

        .about-page-image {
          position: relative;
        }

        .about-page-image img {
          width: 100%;
          height: 550px;
          object-fit: cover;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xl);
        }

        .about-page-badge {
          position: absolute;
          bottom: 30px;
          left: -20px;
          background: var(--white);
          padding: 22px 28px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          text-align: center;
          z-index: 2;
        }

        .badge-number {
          display: block;
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 700;
          color: var(--accent-gold);
          font-family: 'Playfair Display', serif;
          line-height: 1;
        }

        .badge-text {
          display: block;
          font-size: 0.85rem;
          color: var(--dark-gray);
          margin-top: 5px;
        }

        .badge-reviews {
          display: block;
          font-size: 0.8rem;
          color: var(--medium-gray);
          margin-top: 3px;
        }

        .mission-vision-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .mv-card {
          background: var(--white);
          padding: clamp(30px, 5vw, 40px);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          text-align: center;
        }

        .mv-icon {
          width: 68px;
          height: 68px;
          margin: 0 auto 22px;
          background: var(--primary-pale);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mv-icon svg {
          width: 32px;
          height: 32px;
          fill: var(--primary);
        }

        .mv-card h3 {
          font-size: clamp(1.3rem, 3vw, 1.5rem);
          margin-bottom: 12px;
        }

        .mv-card p {
          color: var(--dark-gray);
          line-height: 1.7;
          margin: 0;
          font-size: 0.95rem;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 100%;
          background: var(--primary-light);
        }

        .timeline-item {
          display: flex;
          align-items: center;
          gap: 25px;
          margin-bottom: 35px;
          position: relative;
        }

        .timeline-item:nth-child(odd) {
          flex-direction: row;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-marker {
          width: 90px;
          flex-shrink: 0;
          text-align: center;
        }

        .timeline-year {
          display: inline-block;
          background: var(--gradient-primary);
          color: var(--white);
          padding: 8px 16px;
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 1rem;
        }

        .timeline-content {
          flex: 1;
          background: var(--white);
          padding: 22px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
        }

        .timeline-content h4 {
          font-size: 1.15rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          color: var(--primary-dark);
          margin-bottom: 8px;
        }

        .timeline-content p {
          color: var(--dark-gray);
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .doctors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .doctor-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: all var(--transition-normal);
        }

        .doctor-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }

        .doctor-image {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .doctor-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .doctor-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 95, 138, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-normal);
          padding: 20px;
        }

        .doctor-card:hover .doctor-overlay {
          opacity: 1;
        }

        .doctor-info {
          padding: 22px;
          text-align: center;
        }

        .doctor-info h4 {
          font-size: clamp(1.15rem, 3vw, 1.3rem);
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          color: var(--primary-dark);
          margin-bottom: 5px;
        }

        .doctor-role {
          display: block;
          color: var(--primary);
          font-weight: 500;
          font-size: 0.9rem;
          margin-bottom: 8px;
        }

        .doctor-qualification {
          color: var(--medium-gray);
          font-size: 0.85rem;
          margin-bottom: 12px;
          line-height: 1.5;
        }

        .doctor-details {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-top: 12px;
          border-top: 1px solid var(--light-gray);
        }

        .doctor-detail {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--dark-gray);
        }

        .doctor-detail svg {
          width: 16px;
          height: 16px;
          fill: var(--primary);
        }

        .facilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }

        .facility-item {
          background: var(--off-white);
          padding: clamp(24px, 4vw, 30px);
          border-radius: var(--radius-md);
          text-align: center;
          transition: all var(--transition-normal);
        }

        .facility-item:hover {
          background: var(--white);
          box-shadow: var(--shadow-lg);
          transform: translateY(-5px);
        }

        .facility-icon {
          width: 58px;
          height: 58px;
          margin: 0 auto 18px;
          background: var(--primary-pale);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .facility-icon svg {
          width: 26px;
          height: 26px;
          fill: var(--primary);
        }

        .facility-item h4 {
          font-size: 1.05rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          color: var(--primary-dark);
          margin-bottom: 8px;
        }

        .facility-item p {
          font-size: 0.88rem;
          color: var(--dark-gray);
          margin: 0;
          line-height: 1.5;
        }

        /* Tablet - 1024px */
        @media (max-width: 1024px) {
          .about-page-container {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .about-page-content .section-title {
            text-align: center;
          }

          .about-page-highlights {
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          }

          .about-page-image {
            max-width: 500px;
            margin: 0 auto;
          }

          .timeline::before {
            left: 20px;
          }

          .timeline-item {
            flex-direction: row !important;
            padding-left: 65px;
            gap: 20px;
          }

          .timeline-marker {
            position: absolute;
            left: 0;
            width: auto;
          }
        }

        /* Mobile - 768px */
        @media (max-width: 768px) {
          .about-page-container {
            padding: 0 16px;
            gap: 35px;
          }

          .about-page-image img {
            height: 350px;
          }

          .about-page-badge {
            left: 12px;
            bottom: 20px;
            padding: 16px 20px;
          }

          .mission-vision-grid {
            grid-template-columns: 1fr;
          }

          .doctors-grid {
            grid-template-columns: 1fr;
          }

          .facilities-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
        }

        /* Small Mobile - 480px */
        @media (max-width: 480px) {
          .about-page-container {
            padding: 0 14px;
          }

          .about-page-image img {
            height: 280px;
          }

          .about-page-badge {
            left: 10px;
            bottom: 16px;
            padding: 14px 18px;
          }

          .badge-number {
            font-size: 1.6rem;
          }

          .badge-text {
            font-size: 0.8rem;
          }

          .badge-reviews {
            font-size: 0.75rem;
          }

          .timeline {
            padding: 0 10px;
          }

          .timeline-item {
            padding-left: 60px;
            margin-bottom: 28px;
          }

          .timeline-marker {
            min-width: 70px;
          }

          .timeline-year {
            font-size: 0.9rem;
            padding: 6px 12px;
          }

          .timeline-content {
            padding: 18px;
          }

          .doctor-image {
            height: 240px;
          }

          .doctor-overlay .btn {
            padding: 12px 24px;
            font-size: 0.9rem;
          }

          .facilities-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
