import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H6v-2h4V7h2v4h4v2h-4v4z"/></svg>
      ),
      title: 'Guided Dental Implants',
      description: 'Precision implant placement using advanced 3D surgical guides for optimal results and faster healing.',
      featured: true
    },
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
      ),
      title: 'Immediate Implants',
      description: 'Get your new teeth in a single day with our state-of-the-art immediate loading implant technology.',
      featured: false
    },
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7zm0 7H3v-5h9v5zm9-7h-7V5h7v7zm0 7h-7v-5h7v5z"/></svg>
      ),
      title: '3D Digital Dentistry',
      description: 'CBCT scans and digital impressions for accurate diagnosis and treatment planning.',
      featured: false
    },
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
      ),
      title: 'Painless Root Canal',
      description: 'Advanced rotary endodontics for comfortable and efficient root canal treatments.',
      featured: false
    },
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
      ),
      title: 'Cosmetic Dentistry',
      description: 'Smile makeovers, veneers, and teeth whitening for a confident, beautiful smile.',
      featured: false
    },
    {
      icon: (
        <svg viewBox="0 0 24 24"><path d="M4.22 11.29l5.31-5.31c.39-.39.39-1.02 0-1.41l-1.41-1.41c-.39-.39-1.02-.39-1.41 0L1.4 8.47c-.39.39-.39 1.02 0 1.41l5.66 5.66c.39.39 1.02.39 1.41 0l7.07-7.07c.39-.39.39-1.02 0-1.41l-1.41-1.41c-.39-.39-1.02-.39-1.41 0l-5.31 5.31-.71-.71zM18.36 12.71l-5.66 5.66c-.39.39-1.02.39-1.41 0l-5.66-5.66c-.39-.39-.39-1.02 0-1.41l1.41-1.41c.39-.39 1.02-.39 1.41 0l4.95 4.95 4.25-4.25c.39-.39 1.02-.39 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41l-2.11 2.11z"/></svg>
      ),
      title: 'Orthodontics',
      description: 'Traditional braces and clear aligners to straighten teeth at any age.',
      featured: false
    }
  ];

  const features = [
    {
      icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>,
      title: 'Advanced Technology'
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
      title: 'Painless Treatment'
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>,
      title: 'Expert Dentists'
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>,
      title: 'Quick Recovery'
    }
  ];

  const testimonials = [
    {
      rating: 5,
      text: "Excellent experience! The guided implant procedure was completely painless. The doctor explained everything clearly and the staff was very supportive. Highly recommend this clinic!",
      author: "Ramesh Kumar",
      location: "Bhimavaram"
    },
    {
      rating: 5,
      text: "I got my dental implants done here and I'm extremely satisfied. The 3D technology they use is impressive. The results are natural-looking and the treatment was very comfortable.",
      author: "Lakshmi Devi",
      location: "West Godavari"
    },
    {
      rating: 5,
      text: "Best dental clinic in Bhimavaram! The immediate implant procedure saved me so much time. I walked in with missing teeth and walked out with a complete smile. Amazing work!",
      author: "Srinivas Rao",
      location: "Gandhinagar"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-stars">★★★★★</span>
              <span className="hero-badge-text">5.0 Rating</span>
              <span className="hero-badge-count">(132 Reviews)</span>
            </div>
            
            <h1 className="hero-title">
              Your Smile, Our <span>Expertise</span>
            </h1>
            
            <p className="hero-description">
              Experience painless Guided & Immediate Dental Implants with advanced 3D digital 
              technology at Vijaya Multispeciality Dental Clinic, Bhimavaram's most trusted 
              dental care destination.
            </p>
            
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Book Appointment
              </Link>
              <Link to="/services" className="btn btn-secondary btn-large">
                Our Services
              </Link>
            </div>
            
            <div className="hero-features">
              {features.map((feature, index) => (
                <div key={index} className="hero-feature">
                  <div className="hero-feature-icon">{feature.icon}</div>
                  <span className="hero-feature-text">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <div className="hero-image-main">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=700&fit=crop" 
                alt="Modern Dental Clinic" 
              />
            </div>
            
            <div className="hero-floating-card card-1">
              <div className="floating-card-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
              <div className="floating-card-content">
                <h4>5.0</h4>
                <p>Patient Rating</p>
              </div>
            </div>
            
            <div className="hero-floating-card card-2">
              <div className="floating-card-icon">
                <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </div>
              <div className="floating-card-content">
                <h4>5000+</h4>
                <p>Happy Patients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-white services">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Services</span>
            <h2 className="section-title">Comprehensive Dental Care</h2>
            <p className="section-description">
              From routine check-ups to complex implant procedures, we offer a full range 
              of dental services using the latest technology.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`service-card ${service.featured ? 'featured' : ''}`}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="service-link">
                  Learn More
                  <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about">
        <div className="about-container">
          <div className="about-images">
            <div className="about-image-main">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=500&fit=crop" 
                alt="Dental Clinic Interior" 
              />
            </div>
            <div className="about-image-secondary">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300&h=350&fit=crop" 
                alt="Dental Equipment" 
              />
            </div>
            <div className="about-experience-badge">
              <div className="experience-number">15+</div>
              <div className="experience-text">Years of Excellence</div>
            </div>
          </div>
          
          <div className="about-content">
            <span className="section-subtitle">About Us</span>
            <h2 className="section-title">Leading the Way in Advanced Dental Care</h2>
            <p className="about-description">
              Vijaya Multispeciality Dental Clinic is Bhimavaram's premier destination for 
              advanced dental treatments. We specialize in Guided and Immediate Dental 
              Implants using cutting-edge 3D digital technology.
            </p>
            <p className="about-description">
              Our commitment to painless treatment, combined with our experienced team of 
              specialists, ensures that every patient receives the highest quality care in 
              a comfortable and welcoming environment.
            </p>
            
            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <span className="about-feature-text">3D Digital Technology</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <span className="about-feature-text">Painless Procedures</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <span className="about-feature-text">Experienced Specialists</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <span className="about-feature-text">Modern Facilities</span>
              </div>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Happy Patients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">132</div>
                <div className="stat-label">5-Star Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section section-white why-choose-us">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title">Experience the Difference</h2>
            <p className="section-description">
              We combine advanced technology with compassionate care to deliver 
              exceptional dental treatments.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
              </div>
              <h3>Advanced Technology</h3>
              <p>
                State-of-the-art 3D imaging, digital scanners, and computer-guided 
                surgery for precise treatments.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
              <h3>Painless Treatment</h3>
              <p>
                Advanced anesthesia techniques and gentle procedures ensure 
                comfortable, pain-free experiences.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </div>
              <h3>Expert Team</h3>
              <p>
                Highly qualified dentists and specialists with years of experience 
                in advanced dental procedures.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              </div>
              <h3>Quick Recovery</h3>
              <p>
                Minimally invasive techniques and advanced protocols for faster 
                healing and reduced downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section section-light testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Testimonials</span>
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-description">
              Read about the experiences of our satisfied patients who trusted us 
              with their dental care.
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="testimonial-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready for a Healthier Smile?</h2>
          <p className="cta-description">
            Book your appointment today and experience world-class dental care 
            with advanced 3D technology and painless treatments.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-gold btn-large">
              Book Appointment Now
            </Link>
            <a href="tel:+919876543210" className="btn btn-secondary btn-large">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.49-5.15-3.8-6.62-6.63l1.97-1.57c.26-.26.35-.62.25-1.01a11.36 11.36 0 01-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3.3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .75-.63.75-1.19v-3.44c0-.54-.45-.99-.99-.99z"/>
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
