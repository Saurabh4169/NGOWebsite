import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Legal Info */}
          <div className="footer-brand">
            <h3>Friendship Goals Society Caraga-Butuan Inc.</h3>
            <p className="footer-tagline">
              A non-governmental organization registered in the Philippines, advancing community welfare, youth resilience, coastal environment stewardship, and fishery sector representation in Butuan City and Caraga Region.
            </p>
            <div className="footer-sec-note">
              SEC Registration: SEC Reg. No. CN2021-08942
            </div>
            <div className="footer-social-links">
              <a
                href="https://facebook.com/friendshipgoalscaraga"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Official Facebook Page"
              >
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="tel:+639099873083" className="social-btn" aria-label="Call Mobile Hotline">
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
              <Link to="/contact" className="social-btn" aria-label="Send Email Inquiry">
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About FGSCBI</Link></li>
              <li><Link to="/programs">Programs &amp; Projects</Link></li>
              <li><Link to="/recognitions">Awards &amp; Certificates</Link></li>
              <li><Link to="/news">News &amp; Updates</Link></li>
              <li><Link to="/gallery">Photo Gallery</Link></li>
              <li><Link to="/careers">Careers &amp; Opportunities</Link></li>
              <li><Link to="/services">SEC Assistance</Link></li>
              <li><Link to="/donate">Donate</Link></li>
            </ul>
          </div>

          {/* Col 3: Ways to Help */}
          <div className="footer-col">
            <h4>Get Involved</h4>
            <ul className="footer-links">
              <li><Link to="/donate">Online Donation</Link></li>
              <li><Link to="/contact#ways-to-help">Volunteer with Us</Link></li>
              <li><Link to="/contact#ways-to-help">Partner on Programs</Link></li>
              <li><Link to="/contact#contact-form">Send an Inquiry</Link></li>
              <li><Link to="/about#facts-section">Organization Facts</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <p className="footer-contact-item">
              <strong>Headquarters:</strong><br />
              Butuan City, Caraga Region (Region XIII)<br />
              Philippines, 8600
            </p>
            <p className="footer-contact-item">
              <strong>Hotline:</strong><br />
              <a href="tel:+639099873083">+63-909-987-3083</a>
            </p>
            <p className="footer-contact-item">
              <strong>Email:</strong><br />
              <Link to="/contact">contact@fgscbi.org</Link>
            </p>
            <p className="footer-contact-item">
              <strong>Official Schedule:</strong><br />
              Monday – Friday, 8:00 AM – 5:00 PM PST
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Friendship Goals Society Caraga-Butuan Inc. All rights reserved.</p>
          <p className="footer-disclaimer">
            Non-Endorsement Disclaimer: Mentions of government departments (RDC Caraga, NEDA, NYC, DSWD, DOLE, DOH) reflect collaborative engagements, certificates, and sector representation. FGSCBI is an independent non-governmental organization.
          </p>
        </div>
      </div>
    </footer>
  );
}

