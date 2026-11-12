import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main id="main-content">
      {/* 1. Hero Section (Full-screen Reference Layout) */}
      <section className="hero-premium-section" aria-labelledby="hero-heading">
        <div className="hero-bg-viewport" aria-hidden="true">
          <div className="hero-bg-photo hero-ken-burns" style={{ backgroundImage: "url('/assets/images/hero-rdc-meeting.jpg')" }} />
          <div className="hero-overlay-left-fade" />
          <div className="hero-overlay-bottom-fade" />
        </div>

        <div className="container hero-premium-container">
          <div className="hero-content-block">
            <h1 id="hero-heading" className="hero-display-title">
              <span className="title-row-white hero-anim-item hero-anim-1">Stronger Communities.</span>
              <span className="title-row-gradient hero-anim-item hero-anim-2">Brighter Futures.</span>
            </h1>

            <p className="hero-lead-text hero-anim-item hero-anim-3">
              Empowering fisherfolk and marginalized communities across Caraga through advocacy, community development and digital literacy.
            </p>

            <div className="hero-cta-buttons hero-anim-item hero-anim-4">
              <Link to="/contact#ways-to-help" className="btn-hero-primary-gradient">
                <span>Get Involved →</span>
              </Link>
              <Link to="/programs" className="btn-hero-solid-white">
                <span>Explore Programs</span>
              </Link>
            </div>
          </div>

          {/* Bottom Feature Bar & Scroll Hint */}
          <div className="hero-bottom-area hero-anim-item hero-anim-5">
            <div className="hero-feature-bar" role="region" aria-label="Core NGO Focus Areas">
              {/* 1. Fisherfolk Support */}
              <Link to="/programs#livelihoods" className="feature-col-item">
                <div className="feature-icon-box">
                  <svg className="feature-svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 12c3-4 6-4 9 0 3 4 6 4 9 0" />
                    <path d="M2 17c3-4 6-4 9 0 3 4 6 4 9 0" />
                    <path d="M12 2a4 4 0 0 1 4 4c0 3-4 6-4 6s-4-3-4-6a4 4 0 0 1 4-4z" />
                  </svg>
                </div>
                <span className="feature-col-label">FISHERFOLK SUPPORT</span>
              </Link>

              {/* 2. Human Rights Advocacy */}
              <Link to="/programs#human-rights-digital" className="feature-col-item">
                <div className="feature-icon-box">
                  <svg className="feature-svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3v18" />
                    <path d="M6 7l6-3 6 3" />
                    <path d="M4 14l4-7 4 7H4z" />
                    <path d="M16 14l4-7 4 7h-8z" />
                  </svg>
                </div>
                <span className="feature-col-label">HUMAN RIGHTS ADVOCACY</span>
              </Link>

              {/* 3. Coastal & Environmental Care */}
              <Link to="/programs#coastal-cleanup" className="feature-col-item">
                <div className="feature-icon-box">
                  <svg className="feature-svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
                <span className="feature-col-label">COASTAL &amp; ENVIRONMENTAL CARE</span>
              </Link>

              {/* 4. Community Partnerships */}
              <Link to="/contact#ways-to-help" className="feature-col-item">
                <div className="feature-icon-box">
                  <svg className="feature-svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span className="feature-col-label">COMMUNITY PARTNERSHIPS</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Stats Bar */}
      <div className="container">
        <section id="quick-stats" className="stats-bar fade-in-up" aria-label="Organization Key Statistics">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years of Service</div>
              <div className="stat-desc">Continuous community advocacy &amp; civic action</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">18+</div>
              <div className="stat-label">Communities Reached</div>
              <div className="stat-desc">Barangays &amp; coastal fishing sectors engaged</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <div className="stat-label">Partner Agencies</div>
              <div className="stat-desc">Active government &amp; CSO collaborations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1</div>
              <div className="stat-label">RDC Fishery PSR Seat</div>
              <div className="stat-desc">Private Sector Representative in RDC Caraga</div>
            </div>
          </div>
        </section>
      </div>

      {/* 3. Modern About Section */}
      <section className="modern-section" id="about-overview" aria-labelledby="about-overview-heading">
        <div className="container">
          <div className="modern-about-grid">
            <div className="modern-dual-frame fade-in-up">
              <img src="/assets/images/community-group-caraga.jpg" alt="FGSCBI community leaders and families in Caraga" className="modern-main-photo" loading="lazy" decoding="async" />
              <div className="modern-floating-photo-card">
                <img src="/assets/images/rdc-stage-ceremony.jpg" alt="RDC Caraga recognition and partnership ceremony" className="modern-floating-img" loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="modern-about-content fade-in-up">
              <span className="modern-eyebrow">About FGSCBI</span>
              <h2 id="about-overview-heading" className="modern-heading">
                Empowering Grassroots <span className="modern-grad-text">Communities</span>
              </h2>
              <p className="modern-lead">
                Friendship Goals Society Caraga-Butuan Inc. is a registered Philippine non-governmental organization advancing grassroots welfare, artisanal fisheries advocacy, youth resilience, and sustainable development across Butuan City and the Caraga Region.
              </p>

              <div className="modern-split-paras">
                <div>
                  With dedicated community engagement and accredited government partnerships, we bridge local fisherfolk and civic groups into regional policy and resource allocation.
                </div>
                <div>
                  Through hands-on skills training, coastal rehabilitation, and digital rights advocacy, we empower families to build long-term self-reliance and community security.
                </div>
              </div>

              <div className="modern-value-cards-row">
                <div className="modern-value-card">
                  <div className="modern-value-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  </div>
                  <div className="modern-value-title">Empowerment</div>
                </div>

                <div className="modern-value-card">
                  <div className="modern-value-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  </div>
                  <div className="modern-value-title">Integrity</div>
                </div>

                <div className="modern-value-card is-dark">
                  <div className="modern-value-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                  </div>
                  <div className="modern-value-title">Innovation</div>
                </div>
              </div>

              <div className="modern-alliance-box">
                <span className="modern-alliance-tag">Accredited Representation &amp; Institutional Alliances</span>
                <p className="modern-alliance-quote">
                  “Accredited Private Sector Representative for the Fishery Sector in the Caraga Regional Development Council (RDC), working in active collaboration with DOLE, DSWD, and the National Youth Commission.”
                </p>
              </div>

              <div className="modern-actions-row">
                <Link to="/contact#contact-form" className="btn-modern-dark-pill">
                  <span>Connect With Us</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                </Link>
                <Link to="/about" className="btn-modern-outline-pill">
                  <span>More About Us</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Modern Dark Bento Section (Focus Areas) */}
      <section className="modern-bento-section" id="focus-areas" aria-labelledby="bento-heading">
        <div className="container">
          <div className="modern-bento-header fade-in-up">
            <div>
              <span className="modern-eyebrow">Impact Pillars &amp; Initiatives</span>
              <h2 id="bento-heading" className="modern-heading" style={{ color: '#FFFFFF', marginBottom: 0 }}>
                Our <span className="modern-grad-text">Focus Areas</span>
              </h2>
            </div>
            <Link to="/programs" className="btn-modern-glass-pill">
              <span>View All Programs</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>

          <div className="modern-bento-top-grid">
            <Link to="/programs#rdc-participation" className="bento-hero-card fade-in-up">
              <img src="/assets/images/hero-rdc-meeting.jpg" alt="Caraga RDC 122nd Full Council Meeting Session" className="bento-hero-img" loading="lazy" decoding="async" />
              <div className="bento-hero-overlay" aria-hidden="true" />
              <div className="bento-hero-content">
                <span className="bento-badge-pill">Featured • Regional Governance</span>
                <h3 className="bento-hero-title">Fishery Sector Representation</h3>
                <p className="bento-hero-desc">
                  Serving as the accredited Private Sector Representative (PSR) for Fisheries in the Regional Development Council Caraga, bringing artisanal coastal voices to high-level regional policy.
                </p>
                <span className="bento-hero-link">
                  <span>Explore Program</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                </span>
              </div>
            </Link>

            <div className="bento-side-stack">
              <Link to="/programs#livelihood-soap" className="bento-side-card fade-in-up">
                <img src="/assets/images/livelihood-soap-training.jpg" alt="DOLE Livelihood Soap Making Workshop" className="bento-side-thumb" loading="lazy" decoding="async" />
                <div className="bento-side-content">
                  <span className="bento-side-tag">Livelihoods • DOLE DILP</span>
                  <h3 className="bento-side-title">Community Livelihood Support</h3>
                  <p className="bento-side-desc">Hands-on micro-enterprise training in soap making and marketing to foster household economic resilience.</p>
                </div>
              </Link>

              <Link to="/programs#human-rights-digital" className="bento-side-card fade-in-up">
                <img src="/assets/images/human-rights-go-digital-2025.jpg" alt="Human Rights Go Digital Workshop in Butuan City" className="bento-side-thumb" loading="lazy" decoding="async" />
                <div className="bento-side-content">
                  <span className="bento-side-tag">Advocacy • CHR &amp; FNF</span>
                  <h3 className="bento-side-title">Human Rights &amp; Digital Literacy</h3>
                  <p className="bento-side-desc">Capacity-building on ethical online storytelling, civic protection, and community advocacy across Caraga.</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="modern-bento-bottom-grid">
            <Link to="/programs#youth-anti-drug" className="bento-mini-card fade-in-up">
              <div className="bento-mini-header">
                <div className="bento-mini-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <span className="bento-mini-num">.01</span>
              </div>
              <h4 className="bento-mini-title">Youth &amp; Anti-Drug Education</h4>
              <p className="bento-mini-desc">Substance abuse resistance peer workshops and youth leadership recognized by NYC I DARE.</p>
            </Link>

            <Link to="/programs#coastal-cleanup" className="bento-mini-card fade-in-up">
              <div className="bento-mini-header">
                <div className="bento-mini-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
                </div>
                <span className="bento-mini-num">.02</span>
              </div>
              <h4 className="bento-mini-title">Coastal &amp; Marine Care</h4>
              <p className="bento-mini-desc">Mobilizing local fisherfolk and youth volunteers for shoreline clean-ups and habitat preservation.</p>
            </Link>

            <Link to="/programs#social-protection-research" className="bento-mini-card fade-in-up">
              <div className="bento-mini-header">
                <div className="bento-mini-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                </div>
                <span className="bento-mini-num">.03</span>
              </div>
              <h4 className="bento-mini-title">Social Protection Research</h4>
              <p className="bento-mini-desc">Participating in DSWD 4Ps focus evaluations and poverty alleviation studies across Caraga communities.</p>
            </Link>

            <Link to="/services" className="bento-mini-card fade-in-up">
              <div className="bento-mini-header">
                <div className="bento-mini-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
                </div>
                <span className="bento-mini-num">.04</span>
              </div>
              <h4 className="bento-mini-title">SEC Registration Assistance</h4>
              <p className="bento-mini-desc">Advisory, GIS filings, and corporate compliance support for non-stock and grassroots civic organizations.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Recent Activities (News) */}
      <section className="section section-alt" aria-labelledby="news-heading">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="section-eyebrow">Updates &amp; Field Work</span>
            <h2 id="news-heading">Recent Activities</h2>
            <p className="section-lead">Highlights of our latest community engagements, workshops, and regional governance milestones.</p>
          </div>

          <div className="grid-3">
            <article className="card fade-in-up">
              <div className="card-img-wrapper">
                <span className="badge badge-teal card-badge-pos">Advocacy</span>
                <img src="/assets/images/human-rights-go-digital-2025.jpg" alt="Participants at Human Rights Go Digital workshop in Butuan City" className="card-img" width="600" height="375" loading="lazy" decoding="async" />
              </div>
              <div className="card-body">
                <span className="card-partner">Commission on Human Rights &amp; FNF</span>
                <h3 className="card-title">
                  <Link to="/news#news-hr-digital-2025">Regional Digital Advocacy Workshop in Butuan City</Link>
                </h3>
                <p className="card-text">
                  FGSCBI joined civil society organizations for capacity-building on digital advocacy, ethical storytelling, and protecting community rights in August 2025.
                </p>
                <div className="card-footer">
                  <time dateTime="2025-08-12">August 2025</time>
                  <Link to="/news#news-hr-digital-2025" className="btn btn-outline btn-sm">Read Story</Link>
                </div>
              </div>
            </article>

            <article className="card fade-in-up">
              <div className="card-img-wrapper">
                <span className="badge badge-gold card-badge-pos">Recognition</span>
                <img src="/assets/images/rdc-plaque-awarding-group.jpg" alt="RDC Officials and Private Sector Representatives receiving Plaques of Appreciation on stage" className="card-img" width="600" height="375" loading="lazy" decoding="async" />
              </div>
              <div className="card-body">
                <span className="card-partner">Regional Development Council Caraga</span>
                <h3 className="card-title">
                  <Link to="/news#news-rdc-plaque-2025">Caraga RDC Confers Plaque of Appreciation to FGSCBI</Link>
                </h3>
                <p className="card-text">
                  Recognizing dedicated service and policy contributions as Private Sector Representative for the Fishery Sector during the 122nd Full Council Meeting.
                </p>
                <div className="card-footer">
                  <time dateTime="2025-07-24">July 2025</time>
                  <Link to="/news#news-rdc-plaque-2025" className="btn btn-outline btn-sm">Read Story</Link>
                </div>
              </div>
            </article>

            <article className="card fade-in-up">
              <div className="card-img-wrapper">
                <span className="badge badge-blue card-badge-pos">Livelihood</span>
                <img src="/assets/images/livelihood-soap-making-workshop.jpg" alt="Participants mixing soap ingredients during community training in Brgy. J.P. Rizal" className="card-img" width="600" height="375" loading="lazy" decoding="async" />
              </div>
              <div className="card-body">
                <span className="card-partner">DOLE Caraga &amp; Butuan PESO</span>
                <h3 className="card-title">
                  <Link to="/news#news-soap-livelihood-2025">Community Soap Making Training in Brgy. J.P. Rizal</Link>
                </h3>
                <p className="card-text">
                  Grassroots livelihood project under DOLE DILP providing practical production and marketing skills to support local household income.
                </p>
                <div className="card-footer">
                  <time dateTime="2025-05-01">May 2025</time>
                  <Link to="/news#news-soap-livelihood-2025" className="btn btn-outline btn-sm">Read Story</Link>
                </div>
              </div>
            </article>
          </div>

          <div className="text-center mt-xl">
            <Link to="/news" className="btn btn-primary">Browse All Updates &amp; News <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      {/* 6. Partner Agencies Strip */}
      <section className="agency-strip" aria-labelledby="partners-heading">
        <div className="container">
          <div className="agency-strip-header">
            <h3 id="partners-heading">Recognized by &amp; Working Alongside</h3>
          </div>

          <div className="agency-badges-grid">
            <div className="agency-badge-pill">
              <span className="agency-badge-name">National Youth Commission</span>
              <span className="agency-badge-rel">I DARE Youth Project Participant</span>
            </div>
            <div className="agency-badge-pill">
              <span className="agency-badge-name">DSWD Caraga 4Ps Division</span>
              <span className="agency-badge-rel">Social Protection Consulted CSO</span>
            </div>
            <div className="agency-badge-pill">
              <span className="agency-badge-name">Regional Development Council Caraga</span>
              <span className="agency-badge-rel">Private Sector Representative (Fishery)</span>
            </div>
            <div className="agency-badge-pill">
              <span className="agency-badge-name">DOLE Regional Office Caraga</span>
              <span className="agency-badge-rel">DILP Livelihood Program Partner</span>
            </div>
            <div className="agency-badge-pill">
              <span className="agency-badge-name">Commission on Human Rights</span>
              <span className="agency-badge-rel">Digital Advocacy Workshop Participant</span>
            </div>
            <div className="agency-badge-pill">
              <span className="agency-badge-name">Friedrich Naumann Foundation</span>
              <span className="agency-badge-rel">Human Rights CSO Partner</span>
            </div>
            <div className="agency-badge-pill">
              <span className="agency-badge-name">Brain Trust Inc.</span>
              <span className="agency-badge-rel">Poverty Alleviation Study Consulted CSO</span>
            </div>
          </div>

          <p className="agency-disclaimer">
            Note: Agency names are listed strictly to acknowledge formal civil society participation, sectoral representation, or official certificates received, and do not imply commercial endorsement.
          </p>
        </div>
      </section>
    </main>
  );
}
