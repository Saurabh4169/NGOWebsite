import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';

export default function AboutPage() {
  const leadership = [
    {
      name: 'Maria Elena Santos',
      role: 'President & Lead Representative',
      subRole: 'Private Sector Representative, RDC Caraga',
      bio: 'Spearheading organizational direction, stakeholder coordination, and regional fishery advocacy across Caraga.',
      img: '/assets/images/leader-maria-santos.jpg'
    },
    {
      name: 'Engr. Roberto D. Alcantara',
      role: 'Vice President',
      subRole: 'Operations & Community Mobilization',
      bio: 'Supervising coastal community clean-ups, grassroots workshops, and field project execution.',
      img: '/assets/images/leader-roberto-alcantara.jpg'
    },
    {
      name: 'Atty. Liza Marie Gomez',
      role: 'Corporate Secretary',
      subRole: 'Institutional Governance & Records',
      bio: 'Overseeing official organizational documentation, SEC compliance, and board resolutions.',
      img: '/assets/images/leader-liza-gomez.jpg'
    },
    {
      name: 'Jocelyn Ramos',
      role: 'Treasurer & Finance Officer',
      subRole: 'Financial Stewardship & Auditing',
      bio: 'Maintaining fiscal discipline, transparent accounting, and accountable program resource management.',
      img: '/assets/images/leader-jocelyn-ramos.jpg'
    },
    {
      name: 'David Reyes',
      role: 'Youth Program Coordinator',
      subRole: 'Youth Anti-Drug Resistance',
      bio: 'Leading youth peer counseling, sports activities, and the NYC I DARE Youth network.',
      img: '/assets/images/leader-david-reyes.jpg'
    },
    {
      name: 'Carlos Miguel Tan',
      role: 'Environmental Officer',
      subRole: 'Marine Ecology & Coastal Programs',
      bio: 'Coordinating volunteer clean-up expeditions, marine waste audits, and mangrove care.',
      img: '/assets/images/leader-carlos-tan.jpg'
    }
  ];

  return (
    <main id="main-content">
      <PageHeader
        breadcrumb="About FGSCBI"
        titlePrefix="About"
        titleGrad="FGSCBI"
        subtitle="A registered non-governmental organization serving Butuan City and the Caraga Region."
      />

      {/* 1. Foundation: Mission, Vision & Core Values */}
      <section className="section" aria-labelledby="foundation-heading">
        <div className="container">
          <div className="section-header fade-in-up" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <span className="modern-eyebrow">Guiding Principles</span>
            <h2 id="foundation-heading" className="modern-heading">
              Our Foundation &amp; <span className="modern-grad-text">Core Purpose</span>
            </h2>
            <p className="section-lead">
              Rooted in participatory grassroots advocacy, FGSCBI operates on transparent, sustainable, and inclusive community empowerment across Butuan City and the Caraga Region.
            </p>
          </div>

          <div className="about-mvv-grid">
            <article className="about-mvv-card fade-in-up">
              <div className="about-mvv-icon-wrap" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>
              </div>
              <h3 className="about-mvv-title">Our Mission</h3>
              <p className="about-mvv-text">
                To empower grassroots communities, artisanal fisherfolk, and youth in Butuan City and Caraga through participatory social services, skills-based livelihood opportunities, active environmental stewardship, and dedicated civic representation in regional development policy-making.
              </p>
            </article>

            <article className="about-mvv-card fade-in-up">
              <div className="about-mvv-icon-wrap" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <h3 className="about-mvv-title">Our Vision</h3>
              <p className="about-mvv-text">
                A resilient, self-sustaining Caraga Region where coastal communities thrive, youth actively resist substance abuse through positive leadership, and civil society voices collaboratively guide inclusive regional growth.
              </p>
            </article>

            <article className="about-mvv-card fade-in-up">
              <div className="about-mvv-icon-wrap" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3 className="about-mvv-title">Our Core Values</h3>
              <ul className="about-values-list">
                <li className="about-value-item">
                  <span className="about-value-check" aria-hidden="true">✓</span>
                  <span><strong>Grassroots Solidarity:</strong> Prioritizing vulnerable families and coastal fisherfolk.</span>
                </li>
                <li className="about-value-item">
                  <span className="about-value-check" aria-hidden="true">✓</span>
                  <span><strong>Civic Integrity:</strong> Upholding transparency, stewardship, and accountability.</span>
                </li>
                <li className="about-value-item">
                  <span className="about-value-check" aria-hidden="true">✓</span>
                  <span><strong>Environmental Respect:</strong> Protecting marine and shoreline ecosystems.</span>
                </li>
                <li className="about-value-item">
                  <span className="about-value-check" aria-hidden="true">✓</span>
                  <span><strong>Youth Empowerment:</strong> Nurturing healthy, purpose-driven future leaders.</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* 2. RDC Fishery Sector Private Sector Representation Feature */}
      <section className="section section-alt" aria-labelledby="psr-heading">
        <div className="container">
          <div className="about-governance-card fade-in-up">
            <div className="about-governance-grid">
              <div>
                <span className="about-governance-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  <span>Civic Governance Highlight</span>
                </span>
                <h2 id="psr-heading" className="about-governance-title">
                  Private Sector Representative (Fishery Sector) in <span className="modern-grad-text">RDC Caraga</span>
                </h2>
                <p className="about-governance-desc">
                  Friendship Goals Society Caraga-Butuan Inc. proudly serves as an accredited <strong>Private Sector Representative (PSR) for the Fishery Sector</strong> in the <strong>Caraga Regional Development Council (RDC)</strong>.
                </p>
                <p className="about-governance-desc">
                  The RDC is the highest socio-economic planning and policy-coordinating body in Region XIII, bringing together provincial governors, city mayors, regional line agency directors, and accredited private sector leaders.
                </p>
                <p className="about-governance-desc">
                  In this key governance role, FGSCBI actively represents the socio-economic welfare, environmental protection, and livelihood security of Caraga's coastal fishing communities.
                </p>

                <div className="about-governance-chips">
                  <div className="about-gov-chip">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                    <span>122nd Full Council Session</span>
                  </div>
                  <div className="about-gov-chip">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    <span>Regional Policy &amp; Resolutions</span>
                  </div>
                  <div className="about-gov-chip">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 12c3-4 6-4 9 0 3 4 6 4 9 0" /><path d="M2 17c3-4 6-4 9 0 3 4 6 4 9 0" /></svg>
                    <span>Artisanal Fishery Advocacy</span>
                  </div>
                </div>

                <div>
                  <Link to="/recognitions" className="btn-step-continue" style={{ display: 'inline-flex', textDecoration: 'none', padding: '0.85rem 1.85rem' }}>
                    <span>View RDC Plaque &amp; Recognitions</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </Link>
                </div>
              </div>

              <div>
                <div className="about-governance-photo-frame">
                  <img src="/assets/images/rdc-122nd-full-council-meeting.jpg" alt="FGSCBI representative with Council Members at the 122nd Caraga RDC Full Council Meeting" className="about-governance-img" loading="lazy" decoding="async" />
                  <div className="about-governance-caption">
                    FGSCBI representative with fellow council members and Private Sector Representatives at the 122nd Caraga RDC Full Council Meeting in Butuan City.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Organization Facts & Transparency Bento */}
      <section id="facts-section" className="section" aria-labelledby="facts-heading">
        <div className="container">
          <div className="section-header fade-in-up" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <span className="modern-eyebrow">Institutional Transparency</span>
            <h2 id="facts-heading" className="modern-heading">
              Organization Facts &amp; <span className="modern-grad-text">Registration</span>
            </h2>
            <p className="section-lead">
              Official institutional information for government agencies, donor partners, and civil society collaborators.
            </p>
          </div>

          <div className="about-facts-bento fade-in-up">
            <div className="about-fact-card is-featured">
              <div>
                <span className="about-fact-label">Full Registered Legal Name</span>
                <h3 className="about-fact-value">Friendship Goals Society Caraga-Butuan Inc.</h3>
                <p className="about-fact-sub">
                  Known as <strong>FGSCBI</strong> · Founded and incorporated in <strong>2020</strong> as a Non-Governmental Organization dedicated to social services and sustainable community development.
                </p>
              </div>
              <div style={{ marginTop: '1.25rem' }}>
                <span className="about-leader-role-pill">Registered Non-Governmental Organization</span>
              </div>
            </div>

            <div className="about-fact-card">
              <div>
                <span className="about-fact-label">SEC Registration</span>
                <h3 className="about-fact-value" style={{ color: '#059669', fontSize: '1.25rem' }}>SEC Reg. No. CN2021-08942</h3>
                <p className="about-fact-sub">
                  Official non-stock, non-profit society registration with the Securities and Exchange Commission.
                </p>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <Link to="/services" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0EA5E9', textDecoration: 'underline' }}>SEC Compliance Services →</Link>
              </div>
            </div>

            <div className="about-fact-card">
              <div>
                <span className="about-fact-label">Regional Governance Designation</span>
                <h3 className="about-fact-value" style={{ fontSize: '1.15rem' }}>Private Sector Representative (Fishery Sector)</h3>
                <p className="about-fact-sub">
                  Accredited civil society representation in the Caraga Regional Development Council (RDC).
                </p>
              </div>
            </div>

            <div className="about-fact-card is-featured">
              <div>
                <span className="about-fact-label">Official Headquarters Address</span>
                <h3 className="about-fact-value" style={{ fontSize: '1.15rem' }}>
                  KM 3, J.C. Aquino Avenue, Barangay Doongan, Butuan City
                </h3>
                <p className="about-fact-sub">
                  Agusan del Norte, Caraga Region 8600, Philippines · Open Monday through Friday, 8:00 AM – 5:00 PM PST.
                </p>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#0EA5E9', fontWeight: 700 }}>📍 Butuan City, Caraga Region</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership & Officers Section */}
      <section className="section section-alt" aria-labelledby="leadership-heading">
        <div className="container">
          <div className="section-header fade-in-up" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <span className="modern-eyebrow">Governance &amp; Accountability</span>
            <h2 id="leadership-heading" className="modern-heading">
              Leadership &amp; <span className="modern-grad-text">Officers</span>
            </h2>
            <p className="section-lead">
              Guided by dedicated civic leaders passionate about grassroots development, transparent governance, and environmental care in Caraga.
            </p>
          </div>

          <div className="about-team-modern-grid">
            {leadership.map((officer) => (
              <article key={officer.name} className="about-team-modern-card fade-in-up">
                <div className="about-avatar-ring">
                  <img src={officer.img} alt={officer.name} className="about-avatar-photo" width="104" height="104" loading="lazy" decoding="async" />
                </div>
                <h3 className="about-leader-name">{officer.name}</h3>
                <span className="about-leader-role-pill">{officer.role}</span>
                <div className="about-leader-sub-role">{officer.subRole}</div>
                <p className="about-leader-bio">{officer.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

