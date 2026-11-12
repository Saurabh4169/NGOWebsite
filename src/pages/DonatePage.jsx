import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import DonationCard from '../components/donate/DonationCard';

export default function DonatePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const faqs = [
    {
      q: 'How do I send my donation?',
      a: 'You can donate securely via Philippine e-wallets (GCash, Maya), direct bank transfer (BDO or Landbank), or national QR Ph code. Complete the 3-step form above to view current payment account details.'
    },
    {
      q: 'Will I receive an official receipt?',
      a: 'Yes. Once you complete your transaction, send a screenshot or reference number to fgsphilippines2017@gmail.com. Our administration team will verify and issue an official acknowledgement receipt.'
    },
    {
      q: 'Can I donate on a monthly basis?',
      a: 'Yes! In Step 1, select the “Monthly” toggle. Regular sustained giving provides predictable funding that allows us to plan ongoing community workshops and coastal conservation activities consistently.'
    },
    {
      q: 'Can I donate anonymously?',
      a: 'Yes. In Step 2 of the form, check “I\'d like to donate anonymously”. Your identity will remain strictly confidential and will not be displayed or published in any public donor roll.'
    },
    {
      q: 'How is my personal information used?',
      a: 'In compliance with the Philippine Data Privacy Act of 2012 (RA 10173), we collect your details solely for transaction verification and issuing official receipts. We never sell, rent, or share personal information with third parties.'
    }
  ];

  return (
    <main id="main-content">
      {/* Page Header Banner */}
      <PageHeader
        breadcrumb="Donate"
        title="Support Our"
        highlight="Cause"
        subtitle="Your contribution helps empower fisherfolk and communities in Caraga."
      />

      <div className="donate-page-main">
        {/* 1. INTRO + DONATION CARD (id="donate") */}
        <section className="donate-section" id="donate">
          <div className="container">
            <div className="donate-hero-grid">
              {/* LEFT: 3-Step Interactive Donation Card */}
              <DonationCard />

              {/* RIGHT: Tall Image Card with Community Group Photo */}
              <div className="community-hero-frame">
                <img
                  src="/assets/images/community-group-caraga.jpg"
                  alt="FGSCBI community leaders, volunteers, and families gathered together in Caraga"
                  className="community-hero-img"
                  loading="lazy"
                />
                <div className="community-hero-overlay" aria-hidden="true"></div>
                <div className="community-hero-caption">
                  <blockquote className="community-quote-text">
                    “Every contribution helps families in Caraga build a better future.”
                  </blockquote>
                  <div className="community-caption-meta">Friendship Goals Society Caraga-Butuan Inc.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHERE YOUR GIFT GOES */}
        <section className="donate-section donate-section-alt" id="where-gift-goes">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.85rem, 3vw, 2.5rem)', marginBottom: '0.75rem' }}>
                Where Your Gift Goes
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                Real impact on the ground across Butuan City and Agusan del Norte.
              </p>
            </div>

            <div className="gift-impact-grid">
              {/* Left: Soap-making livelihood training photo */}
              <div className="gift-photo-frame">
                <img
                  src="/assets/images/livelihood-soap-training.jpg"
                  alt="FGSCBI livelihood skills and soap-making training session with community beneficiaries"
                  className="gift-photo-img"
                  loading="lazy"
                />
              </div>

              {/* Right: 4 Focus Areas */}
              <div className="gift-focus-list">
                <div className="gift-focus-item">
                  <div className="gift-focus-icon-wrap" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12h20M2 12l5-5m-5 5l5 5M22 12l-5-5m5 5l-5 5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="gift-focus-title">Fisherfolk Livelihood Support</h3>
                    <p className="gift-focus-desc">
                      Helps artisanal fisherfolk maintain equipment, acquire safety beacons, and develop post-harvest cooperative skills for sustainable household income.
                    </p>
                  </div>
                </div>

                <div className="gift-focus-item">
                  <div className="gift-focus-icon-wrap" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="gift-focus-title">Coastal &amp; Environmental Care</h3>
                    <p className="gift-focus-desc">
                      Supports shoreline rehabilitation, coastal clean-up expeditions, and community-led mangrove protection efforts across Caraga's coastal zones.
                    </p>
                  </div>
                </div>

                <div className="gift-focus-item">
                  <div className="gift-focus-icon-wrap" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="gift-focus-title">Human Rights &amp; Digital Literacy</h3>
                    <p className="gift-focus-desc">
                      Funds grassroots workshops, educational youth seminars, and civic awareness sessions that empower local families with vital legal and digital skills.
                    </p>
                  </div>
                </div>

                <div className="gift-focus-item">
                  <div className="gift-focus-icon-wrap" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="gift-focus-title">Community Development &amp; Partnerships</h3>
                    <p className="gift-focus-desc">
                      Enables direct collaboration with grassroots cooperatives, municipal associations, and local response initiatives during unexpected regional emergencies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHY YOU CAN TRUST US */}
        <section className="donate-section" id="why-trust-us">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.85rem, 3vw, 2.5rem)', marginBottom: '0.75rem' }}>
                Why You Can Trust Us
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                Committed to integrity, transparency, and accountability.
              </p>
            </div>

            <div className="trust-cards-grid">
              <div className="trust-card">
                <div className="trust-card-icon" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h3 className="trust-card-title">Official Receipts</h3>
                <p className="trust-card-desc">
                  Every donation receives an official acknowledgement and documentation so your contribution is recorded accurately.
                </p>
              </div>

              <div className="trust-card">
                <div className="trust-card-icon" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="trust-card-title">Transparent Reporting</h3>
                <p className="trust-card-desc">
                  Annual filings and project documentation submitted in compliance with Philippine regulations and partner agency standards.
                </p>
              </div>

              <div className="trust-card">
                <div className="trust-card-icon" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="trust-card-title">Registered Organization</h3>
                <p className="trust-card-desc">
                  SEC-registered non-stock, non-profit society (Reg. No. CN2021-08942) with recognized partner engagements across Caraga.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FREQUENTLY ASKED QUESTIONS */}
        <section className="donate-section donate-section-alt" id="faq">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.85rem, 3vw, 2.5rem)', marginBottom: '0.75rem' }}>
                Frequently Asked Questions
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                Everything you need to know about giving to FGSCBI.
              </p>
            </div>

            <div className="faq-accordion-wrap">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}>
                    <button
                      type="button"
                      className="faq-accordion-header"
                      aria-expanded={isOpen}
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.q}</span>
                      <svg className="faq-accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    <div
                      className="faq-accordion-body"
                      style={{
                        maxHeight: isOpen ? '400px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease',
                      }}
                    >
                      <div className="faq-accordion-content">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. PARTNER WITH US */}
        <section className="donate-section" id="partner-band">
          <div className="container">
            <div className="partner-cta-band">
              <h2 className="partner-cta-heading">Partner or sponsor a program</h2>
              <p className="partner-cta-lead">Are you a corporation, foundation, or donor agency looking to support grassroots initiatives in Caraga? Let's collaborate.</p>
              <div className="partner-cta-actions">
                <Link to="/contact#ways-to-help" className="btn-partner-white">
                  <span>Become a Partner</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/contact#ways-to-help" className="btn-partner-glass">
                  <span>Volunteer</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Sticky Donate Bar */}
        <div className="mobile-sticky-donate-bar" aria-hidden="true">
          <a href="#donate" className="btn-sticky-donate">
            <span>DONATE NOW</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
