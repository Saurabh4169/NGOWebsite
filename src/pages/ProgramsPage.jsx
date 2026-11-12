import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';

export default function ProgramsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { key: 'all', label: 'All Initiatives (7)' },
    { key: 'youth', label: 'Youth Leadership' },
    { key: 'environmental', label: 'Environmental & Coastal' },
    { key: 'livelihood', label: 'Livelihood & Skills' },
    { key: 'governance', label: 'Civic Governance' },
  ];

  const programs = [
    {
      id: 'youth-anti-drug',
      category: 'youth',
      tag: 'POSITIVE ADDICTION',
      tagClass: 'tag-cyan',
      partner: 'NYC / Office of the Pres.',
      imgSrc: 'assets/images/cert-nyc-idare-2021.jpg',
      imgAlt: 'Official Certificate of Participation from National Youth Commission for I DARE Youth project',
      containThumb: true,
      title: '1. Youth Anti-Drug Abuse Resistance Education',
      partnerSub: 'Partner: National Youth Commission (NYC), Office of the President',
      desc: 'Formally recognized in the nationwide "Search for Outstanding Illegal Drug Abuse Resistance Education Projects for the Youth" (I DARE Youth), providing proactive preventive education, peer guidance, character-building, and positive civic activities.',
      metaTitle: 'Milestone:',
      metaData: 'Manila, 24 Nov 2021',
      actionText: 'VIEW MILESTONE DETAILS',
      actionLink: '/recognitions#cert-nyc',
      btnClass: 'btn-card-outline-action',
    },
    {
      id: 'coastal-cleanup',
      category: 'environmental',
      tag: 'COASTAL & MARINE CARE',
      tagClass: 'tag-teal',
      partner: '• Routine Drives',
      imgSrc: 'assets/images/hero-cleanup.jpg',
      imgAlt: 'Community volunteers and families in blue shirts holding collection bags for environmental care',
      containThumb: false,
      title: '2. Environmental & Coastal Clean-ups',
      partnerSub: 'Partner: Community Barangays, Local Fisherfolk & Volunteers',
      desc: 'Mobilizing Caraga youth, coastal neighborhood residents, and artisanal fisherfolk for regular shoreline sanitation, plastic pollution interception, and mangrove habitat stewardship across Butuan Bay.',
      metaTitle: 'Cadence:',
      metaData: 'Ongoing Volunteer Drives',
      actionText: 'JOIN AS VOLUNTEER',
      actionLink: '/contact#ways-to-help',
      btnClass: 'btn-card-solid-action',
    },
    {
      id: 'livelihood-soap',
      category: 'livelihood',
      tag: 'MICRO-ENTERPRISE',
      tagClass: 'tag-amber',
      partner: 'DOLE Caraga & PESO',
      imgSrc: 'assets/images/livelihood-soap-making-workshop.jpg',
      imgAlt: 'Hands-on soap making and compounding workshop in Brgy. J.P. Rizal',
      containThumb: false,
      title: '3. Community Livelihood: Soap Making & Marketing',
      partnerSub: 'Partner: DOLE Regional Office Caraga (DILP) & Butuan PESO',
      desc: 'Assisted by the Department of Labor and Employment Integrated Livelihood Program (DILP), delivering hands-on training in formulating household soaps, product packaging, and local micro-enterprise marketing.',
      metaTitle: 'Started:',
      metaData: 'May 1, 2025 • Butuan',
      actionText: 'EXPLORE PROJECT',
      actionLink: '/contact#ways-to-help',
      btnClass: 'btn-card-outline-action',
    },
    {
      id: 'human-rights-digital',
      category: 'governance',
      tag: 'ADVOCACY & RIGHTS',
      tagClass: 'tag-blue',
      partner: 'CHR & FNF',
      imgSrc: 'assets/images/human-rights-go-digital-2025.jpg',
      imgAlt: 'Participants at the Human Rights Go Digital Regional Advocacy Workshop in Butuan City',
      containThumb: false,
      title: '4. Human Rights Go Digital: Regional CSO Advocacy',
      partnerSub: 'Partner: CHR & Friedrich Naumann Foundation (FNF)',
      desc: 'Capacity building for civil society advocates on digital campaigning, rights-based public communication, digital safety protocols, and ethical advocacy across regional online platforms.',
      metaTitle: 'Conducted:',
      metaData: 'July 28–29, 2025 • Butuan City',
      actionText: 'READ HIGHLIGHTS',
      actionLink: '/news',
      btnClass: 'btn-card-outline-action',
    },
    {
      id: 'rdc-participation',
      category: 'governance',
      tag: 'CIVIC GOVERNANCE',
      tagClass: 'tag-purple',
      partner: 'RDC & NEDA Caraga',
      imgSrc: 'assets/images/rdc-plaque-awarding-group.jpg',
      imgAlt: 'Outgoing RDC Officials and PSRs with Plaques of Appreciation on stage',
      containThumb: false,
      title: '5. Regional Development Council (RDC) Participation',
      partnerSub: 'Partner: Caraga RDC & NEDA Regional Office',
      desc: 'Serving as the accredited Private Sector Representative (PSR) for the Fishery Sector. Delivering empirical grassroots insights on post-harvest facilities, fuel subsidies, and coastal zoning in RDC Full Council sessions.',
      metaTitle: 'Mandate:',
      metaData: '122nd Council Session',
      actionText: 'VIEW COUNCIL BRIEFING',
      actionLink: '/recognitions#plaque-rdc',
      btnClass: 'btn-card-outline-action',
    },
    {
      id: 'fisherfolk-sanctuary',
      category: 'environmental',
      tag: 'MARINE STEWARDSHIP',
      tagClass: 'tag-cyan',
      partner: 'BFAR Caraga',
      imgSrc: 'assets/images/coastal-cleanup-community.jpg',
      imgAlt: 'Coastal community and fisherfolk along Caraga shoreline',
      containThumb: false,
      title: '6. Artisanal Fisherfolk Welfare & Sanctuary Defense',
      partnerSub: 'Partner: BFAR Caraga & Coastal Fisherfolk Alliances',
      desc: 'Safeguarding artisanal fishing grounds against illegal maritime encroachment, distributing ecological fishing gear, and establishing community-level marine conservation monitoring in Butuan Bay.',
      metaTitle: 'Coverage:',
      metaData: 'Caraga Municipal Waters',
      actionText: 'SUPPORT INITIATIVE',
      actionLink: '/donate',
      btnClass: 'btn-card-solid-action',
    },
    {
      id: 'sec-compliance',
      category: 'governance',
      tag: 'INSTITUTIONAL SERVICE',
      tagClass: 'tag-blue',
      partner: 'SEC Assistance Desk',
      isCustomThumb: true,
      title: '7. SEC Registration & Compliance Assistance',
      partnerSub: 'Direct Guidance for Non-Profits, Associations & Businesses',
      desc: 'Assisting grassroots associations, foundations, and enterprises with SEC registration documentation, GIS filing, and mandatory annual compliance.',
      metaTitle: 'Service:',
      metaData: 'Advisory & Documentation',
      actionText: 'Learn more →',
      actionLink: '/services',
      btnClass: 'btn-card-solid-action',
    },
  ];

  const visiblePrograms = activeFilter === 'all'
    ? programs
    : programs.filter(p => p.category === activeFilter);

  return (
    <main id="main-content">
      {/* Page Header Banner */}
      <PageHeader
        title="Our"
        highlight="Programs"
        subtitle="Livelihood, advocacy and community development initiatives for fisherfolk and marginalized sectors."
        breadcrumb="Programs"
      />

      {/* Program Cards Detailed Section */}
      <section className="section" aria-label="Detailed Programs List">
        <div className="container">
          {/* Interactive Filter Tabs */}
          <div className="program-filter-bar" role="tablist" aria-label="Filter initiatives by focus area">
            {filterTabs.map(tab => (
              <button
                key={tab.key}
                type="button"
                className={`program-filter-pill ${activeFilter === tab.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab.key)}
                role="tab"
                aria-selected={activeFilter === tab.key}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 6-Card / 7-Card Grid */}
          <div className="programs-reference-grid" id="programsGrid">
            {visiblePrograms.map(prog => (
              <article
                key={prog.id}
                id={prog.id}
                className="program-ref-card fade-in-up"
                data-category={prog.category}
              >
                <div className="program-card-topbar">
                  <span className={`program-tag-pill ${prog.tagClass}`}>{prog.tag}</span>
                  <span className="program-partner-label">{prog.partner}</span>
                </div>

                {prog.isCustomThumb ? (
                  <div
                    className="program-card-thumb"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(14, 165, 233, 0.15) 100%)',
                      minHeight: '200px',
                    }}
                  >
                    <div
                      className="program-gradient-icon"
                      style={{
                        width: '76px',
                        height: '76px',
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, #10B981 0%, #0EA5E9 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        boxShadow: '0 8px 24px rgba(16, 185, 129, 0.35)',
                      }}
                      aria-hidden="true"
                    >
                      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className={`program-card-thumb ${prog.containThumb ? 'contain-thumb' : ''}`}>
                    <img
                      src={prog.imgSrc}
                      alt={prog.imgAlt}
                      width="480"
                      height="300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}

                <div className="program-card-body">
                  <h2 className="program-card-heading">{prog.title}</h2>
                  <div className="program-card-partner-sub">{prog.partnerSub}</div>
                  <p className="program-card-paragraph">{prog.desc}</p>
                  <div className="program-card-bottom">
                    <div className="program-card-meta-row">
                      <span className="program-meta-title">{prog.metaTitle}</span>
                      <span className="program-meta-data">{prog.metaData}</span>
                    </div>
                    <Link to={prog.actionLink} className={prog.btnClass}>
                      {prog.actionText}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="section section-alt" aria-labelledby="partner-banner-heading">
        <div className="container">
          <div className="cta-banner fade-in-up">
            <h2 id="partner-banner-heading">Partner With Us on Community Development</h2>
            <p>
              We welcome collaboration with government agencies, LGUs, academic institutions, and fellow non-governmental organizations to co-implement impactful programs in Caraga.
            </p>
            <div className="cta-buttons">
              <Link to="/contact#contact-form" className="btn btn-accent btn-lg">Propose a Partnership</Link>
              <Link to="/about" className="btn btn-outline-white btn-lg">Learn About Our Mission</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

