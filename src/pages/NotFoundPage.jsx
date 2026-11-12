import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main id="main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', padding: 'var(--space-4xl) 0' }}>
      <div className="container text-center container-narrow fade-in-up">
        <span className="badge badge-gold" style={{ fontSize: '1rem', padding: '0.4rem 1rem', marginBottom: '1rem', display: 'inline-block' }}>
          404 • Page Not Found
        </span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>Looking for Something?</h1>
        <p className="section-lead" style={{ marginBottom: '2rem' }}>
          The page you are trying to visit might have been moved, renamed, or is temporarily unavailable. Let us help you get back on track.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary btn-lg">Return to Home Page</Link>
          <Link to="/programs" className="btn btn-outline btn-lg">Explore Our Programs</Link>
          <Link to="/contact" className="btn btn-secondary btn-lg">Contact Us</Link>
        </div>
      </div>
    </main>
  );
}

