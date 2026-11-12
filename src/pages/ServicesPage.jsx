import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';

export default function ServicesPage() {
  const [showActivities, setShowActivities] = useState(false);
  const [copyPhoneStatus, setCopyPhoneStatus] = useState('Copy phone');
  const [copyEmailStatus, setCopyEmailStatus] = useState('Copy email');

  const activities = [
    'Accounting & Business Services',
    'Advertising',
    'Agricultural Business',
    'Arrastre & Stevedoring Services',
    'Banking',
    'Computerdata Processing/Encoding',
    'Construction',
    'Day Care Center',
    'Consultancy Services',
    'Educational Institution (Secondary School)',
    'Energy Production',
    'Financing Companies',
    'Fishing',
    'Fishponds/Fish Culture',
    'Freight Forwarding',
    'Holding Company',
    'Hospitals',
    'Lending Investor',
    'Management/Consulting Services',
    'Manufacturing',
    'Mining',
    'Publication/Print',
    'Quarrying',
    'Realty Business',
    'Recruitment',
    'Remittance Business',
    'Research Services',
    'Restaurants',
    'Security Agency',
    'Shipping',
    'Trading',
    'Towage Services',
    'Travel Agency',
    'Wholesale & Retail',
  ];

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+639099873083').then(() => {
      setCopyPhoneStatus('Copied!');
      setTimeout(() => setCopyPhoneStatus('Copy phone'), 2000);
    }).catch(() => {
      setCopyPhoneStatus('Copied!');
      setTimeout(() => setCopyPhoneStatus('Copy phone'), 2000);
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('fgsphilippines2017@gmail.com').then(() => {
      setCopyEmailStatus('Copied!');
      setTimeout(() => setCopyEmailStatus('Copy email'), 2000);
    }).catch(() => {
      setCopyEmailStatus('Copied!');
      setTimeout(() => setCopyEmailStatus('Copy email'), 2000);
    });
  };

  return (
    <main id="main-content">
      {/* 1. Page Header Banner */}
      <PageHeader
        title="SEC Compliance"
        highlight="Assistance"
        subtitle="We help organizations register with the Securities and Exchange Commission and keep their annual filings in order."
        breadcrumb="Services"
      />

      {/* 2. What We Help With */}
      <section className="section" id="what-we-help" aria-labelledby="what-we-help-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Service Offerings</span>
            <h2 id="what-we-help-heading" className="section-title">What We Help With</h2>
            <p className="section-lead">
              Comprehensive documentation, filing support, and annual regulatory guidance tailored for both non-stock community associations and commercial enterprises.
            </p>
          </div>

          <div className="help-cards-grid">
            {/* Card 1 */}
            <article className="help-service-card fade-in-up">
              <div className="help-service-icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="help-service-title">SEC Registration Assistance</h3>
              <p className="help-service-desc">
                Full advisory for profit/business entities and non-stock/non-profit associations. We assist with corporate name verification, drafting Articles of Incorporation and By-Laws, documentary organization, and portal filing to secure your SEC Certificate of Incorporation.
              </p>
            </article>

            {/* Card 2 */}
            <article className="help-service-card fade-in-up">
              <div className="help-service-icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"></path>
                </svg>
              </div>
              <h3 className="help-service-title">General Information Sheet (GIS) Processing</h3>
              <p className="help-service-desc">
                Annual statutory reporting compliance. We guide your corporate secretary and trustees in preparing, certifying, and submitting the mandatory General Information Sheet (GIS) within 30 days of your annual meeting via the official SEC electronic portal.
              </p>
            </article>

            {/* Card 3 */}
            <article className="help-service-card fade-in-up">
              <div className="help-service-icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="help-service-title">Audited Financial Statements &amp; Annual Reports</h3>
              <p className="help-service-desc">
                End-to-end fiscal reporting support. We help your governing board assemble Audited Financial Statements (AFS) or sworn financial statements alongside mandatory Annual Reports to maintain good standing and prevent regulatory penalties.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Who We Serve */}
      <section className="section section-alt" id="who-we-serve" aria-labelledby="who-we-serve-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Eligible Entities</span>
            <h2 id="who-we-serve-heading" className="section-title">Who We Serve</h2>
            <p className="section-lead">
              We provide tailored advisory and documentation assistance to diverse organizational structures across Caraga and nationwide.
            </p>
          </div>

          <div className="serve-chips-grid">
            <div className="serve-chip fade-in-up"><span className="chip-check-icon" aria-hidden="true">✓</span><span>Alumni Association</span></div>
            <div className="serve-chip fade-in-up"><span className="chip-check-icon" aria-hidden="true">✓</span><span>Business Organizations</span></div>
            <div className="serve-chip fade-in-up"><span className="chip-check-icon" aria-hidden="true">✓</span><span>Condominiums</span></div>
            <div className="serve-chip fade-in-up"><span className="chip-check-icon" aria-hidden="true">✓</span><span>Civic Associations</span></div>
            <div className="serve-chip fade-in-up"><span className="chip-check-icon" aria-hidden="true">✓</span><span>Cultural Associations</span></div>
            <div className="serve-chip fade-in-up"><span className="chip-check-icon" aria-hidden="true">✓</span><span>Drivers/Operators Associations</span></div>
            <div className="serve-chip fade-in-up"><span className="chip-check-icon" aria-hidden="true">✓</span><span>Foundations</span></div>
            <div className="serve-chip fade-in-up"><span className="chip-check-icon" aria-hidden="true">✓</span><span>Neighborhood Associations</span></div>
            <div className="serve-chip fade-in-up"><span className="chip-check-icon" aria-hidden="true">✓</span><span>Parent-Teachers Association</span></div>
            <div className="serve-chip fade-in-up"><span className="chip-check-icon" aria-hidden="true">✓</span><span>Private Prepschool Education</span></div>
            <div className="serve-chip fade-in-up"><span className="chip-check-icon" aria-hidden="true">✓</span><span>Private Elementary Education</span></div>
            <div className="serve-chip fade-in-up"><span className="chip-check-icon" aria-hidden="true">✓</span><span>Private Secondary Education</span></div>
            <div className="serve-chip fade-in-up"><span className="chip-check-icon" aria-hidden="true">✓</span><span>Private Technical/Vocational Education</span></div>
            <div className="serve-chip fade-in-up"><span className="chip-check-icon" aria-hidden="true">✓</span><span>Professional Organizations</span></div>
            <div className="serve-chip fade-in-up"><span className="chip-check-icon" aria-hidden="true">✓</span><span>Religious Organizations</span></div>
            <div className="serve-chip fade-in-up"><span className="chip-check-icon" aria-hidden="true">✓</span><span>Riders Club</span></div>
            <div className="serve-chip fade-in-up" style={{ gridColumn: '1 / -1', maxWidth: '480px', margin: '0 auto', width: '100%' }}>
              <span className="chip-check-icon" aria-hidden="true">✓</span><span>Sports Association</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Business Activities We Assist */}
      <section className="section" id="activities" aria-labelledby="activities-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Industry Scope</span>
            <h2 id="activities-heading" className="section-title">Business Activities We Assist</h2>
            <p className="section-lead">
              From grassroots community initiatives to registered commercial trade, our compliance desk supports 33 standard primary and secondary corporate purposes.
            </p>
          </div>

          <div className="activities-card fade-in-up">
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1rem', color: 'var(--color-heading)', fontWeight: 600, marginBottom: '1.25rem' }}>
                Click below to view the complete catalog of supported industry activities:
              </p>
              <button
                type="button"
                id="btn-toggle-activities"
                className="btn-toggle-activities"
                aria-expanded={showActivities}
                aria-controls="activities-panel"
                onClick={() => setShowActivities(!showActivities)}
              >
                <span>{showActivities ? 'Hide business activities ↑' : 'View all business activities (33) ↓'}</span>
              </button>
            </div>

            <div
              id="activities-panel"
              className={`activities-collapse ${showActivities ? 'is-expanded' : ''}`}
              role="region"
              aria-label="Business activities list"
              style={{ display: showActivities ? 'block' : 'none' }}
            >
              <div className="activities-grid">
                {activities.map((act, index) => (
                  <div
                    key={act}
                    className="activity-badge"
                    style={index === activities.length - 1 ? { gridColumn: '1 / -1', justifyContent: 'center' } : {}}
                  >
                    <span className="activity-bullet"></span>
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="section section-alt" id="how-it-works" aria-labelledby="how-it-works-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Procedure &amp; Milestones</span>
            <h2 id="how-it-works-heading" className="section-title">How It Works</h2>
            <p className="section-lead">
              Our straightforward, 4-step assistance workflow guides your association from initial intake to final SEC confirmation.
            </p>
          </div>

          <div className="apply-timeline fade-in-up">
            <div className="timeline-step-card">
              <div className="step-num-pill" aria-hidden="true">1</div>
              <h3 className="step-card-title">Submit Inquiry Form</h3>
              <p className="step-card-desc">
                Fill out our intake form with your organization's proposed name, purpose, and key officer contact info.
              </p>
            </div>

            <div className="timeline-step-card">
              <div className="step-num-pill" aria-hidden="true">2</div>
              <h3 className="step-card-title">Review of Details</h3>
              <p className="step-card-desc">
                We review your details, verify name availability protocols, and identify necessary documentary forms.
              </p>
            </div>

            <div className="timeline-step-card">
              <div className="step-num-pill" aria-hidden="true">3</div>
              <h3 className="step-card-title">Requirements &amp; Filing</h3>
              <p className="step-card-desc">
                We guide you through drafting Articles &amp; By-Laws, organizing trustees, and securing notarizations.
              </p>
            </div>

            <div className="timeline-step-card">
              <div className="step-num-pill" aria-hidden="true">4</div>
              <h3 className="step-card-title">Submission to SEC</h3>
              <p className="step-card-desc">
                Final documentation is uploaded through SEC eSPARC or eFAST, tracking status until certificate release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Request Assistance */}
      <section className="section" id="apply" aria-labelledby="apply-heading">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="section-header text-center">
            <span className="section-eyebrow">Assistance Intake Desk</span>
            <h2 id="apply-heading" className="section-title">Request Assistance</h2>
            <p className="section-lead">
              Contact our secretariat directly via our mobile hotline or official email to begin your SEC registration or annual compliance filing.
            </p>
          </div>

          <div className="sec-contact-grid fade-in-up">
            {/* Card 1: Official Hotline & Email */}
            <div className="sec-contact-card">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--color-heading)', marginBottom: '1.25rem' }}>
                Direct Assistance Desk
              </h3>

              <div className="sec-contact-item">
                <div className="sec-contact-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div style={{ flexGrow: 1 }}>
                  <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700, color: '#0284C7', display: 'block', marginBottom: '0.2rem' }}>Mobile Hotline</span>
                  <a href="tel:+639099873083" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-heading)', textDecoration: 'none', display: 'block', marginBottom: '0.35rem' }}>
                    +63 909 987 3083
                  </a>
                  <button type="button" className="btn-copy-email" aria-label="Copy phone number" onClick={handleCopyPhone}>
                    <span>{copyPhoneStatus}</span>
                  </button>
                </div>
              </div>

              <div className="sec-contact-item" style={{ marginBottom: 0 }}>
                <div className="sec-contact-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div style={{ flexGrow: 1 }}>
                  <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700, color: '#059669', display: 'block', marginBottom: '0.2rem' }}>Official Email</span>
                  <a href="mailto:fgsphilippines2017@gmail.com" style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-heading)', textDecoration: 'none', wordBreak: 'break-all', display: 'block', marginBottom: '0.35rem' }}>
                    fgsphilippines2017@gmail.com
                  </a>
                  <button type="button" className="btn-copy-email" aria-label="Copy email address" onClick={handleCopyEmail}>
                    <span>{copyEmailStatus}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Secretariat Office Location */}
            <div className="sec-contact-card">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--color-heading)', marginBottom: '1.25rem' }}>
                Secretariat Location
              </h3>

              <div className="sec-contact-item" style={{ marginBottom: 0 }}>
                <div className="sec-contact-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 700, color: '#6366F1', display: 'block', marginBottom: '0.2rem' }}>Office Address</span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.55, marginBottom: '0.5rem' }}>
                    KM 3, J.C. Aquino Avenue, Barangay Doongan, Butuan City, Agusan del Norte, Caraga Region 8600, Philippines
                  </p>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>
                    Registered NGO: SEC Reg. No. CN2021-08942
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Short Legal Disclaimer */}
          <div className="sec-disclaimer-box fade-in-up">
            <p style={{ margin: 0 }}>
              <strong>Disclaimer:</strong> FGSCBI provides assistance with documentation and submission. SEC approval and requirements are determined by the SEC. This is not legal advice.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

