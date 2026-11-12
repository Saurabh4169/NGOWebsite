import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';

export default function RecognitionsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const recognitions = [
    {
      id: 'plaque-rdc',
      categories: ['government'],
      tag: 'Regional Governance Plaque',
      tagClass: 'tag-blue',
      date: '2022–2025',
      title: 'Plaque of Appreciation — RDC Caraga Fishery Sector PSR',
      partner: 'Republic of the Philippines • RDC Caraga Region',
      desc: 'Conferred to Ronald M. Lisayan for exemplary service as the accredited Private Sector Representative for the Fishery Sector during the 2022 and 2023–2025 term.',
      scope: 'Sector: Artisanal Fisheries',
      linkText: 'EXPAND CITATION →',
      imgSrc: 'assets/images/plaque-rdc-fisheries-lisayan.jpg',
      imgAlt: 'Official Plaque of Appreciation presented to Ronald M. Lisayan by Caraga Regional Development Council',
      containFit: true,
      caption: 'Presented to Ronald M. Lisayan for dedicated service as Private Sector Representative (PSR) for the Fisheries Sector of the Caraga Regional Development Council (RDC) for the 2022 and 2023–2025 Term of Office. Conferred on 19 June 2025 in Butuan City by Hon. Nilo P. Demerey Jr., Chairperson, Caraga RDC.',
    },
    {
      id: 'cert-dswd',
      categories: ['government', 'civic'],
      tag: 'Official DSWD Citation',
      tagClass: 'tag-emerald',
      date: 'March 17, 2025',
      title: 'Certificate of Appreciation — DSWD Caraga FO XIII',
      partner: 'DSWD Field Office Caraga',
      desc: 'Awarded to Friendship Goals Society Caraga-Butuan Inc. for active participation and invaluable support during the 2024 RIMC Field Visit in Lanuza, Surigao del Sur.',
      scope: 'Partner: DSWD FO XIII',
      linkText: 'VIEW CERTIFICATE →',
      imgSrc: 'assets/images/cert-dswd-rimc-lanuza.jpg',
      imgAlt: 'Official Certificate of Appreciation from DSWD Caraga presented to Friendship Goals Society Caraga Butuan Inc.',
      containFit: true,
      caption: 'Presented to Friendship Goals Society Caraga Butuan Inc. in sincere appreciation of active participation and invaluable contributions to the successful conduct of the 2024 Regional Independent Monitoring Committee (RIMC) Field Visit in Lanuza, Surigao del Sur. Signed by Regional Director Mari-Flor A. Dollaga-Libang on 17 March 2025.',
    },
    {
      id: 'stage-ceremony-rdc',
      categories: ['government'],
      tag: 'Regional Governance Plaque',
      tagClass: 'tag-blue',
      date: 'June 2025',
      title: 'Awarding Ceremony — Caraga RDC Officials & PSRs',
      partner: 'Caraga Regional Development Council (RDC)',
      desc: 'Formal presentation to outgoing council officials and accredited private sector representatives during the 122nd RDC Full Council Session at Grand Palace Hotel.',
      scope: 'Delegation: Council Assembly',
      linkText: 'OFFICIAL CITATION →',
      imgSrc: 'assets/images/rdc-plaque-awarding-group.jpg',
      imgAlt: 'Outgoing RDC Officials and PSRs with Plaques of Appreciation on stage',
      containFit: false,
      caption: 'Formal stage ceremony honoring outgoing Caraga Regional Development Council Officials and Private Sector Representatives during the 122nd Full Council Session at Grand Palace Hotel.',
    },
    {
      id: 'dswd-manual-handover',
      categories: ['civic', 'research'],
      tag: 'Social Welfare Partnership',
      tagClass: 'tag-purple',
      date: 'December 2024',
      title: 'DSWD RIMC Operations Manual Workshop Citation',
      partner: 'DSWD National Community-Driven Development Program (KC)',
      desc: 'Presentation of the framed certificate during the Regional Independent Monitoring Committee Operations Manual Workshop at Luciana Hotel, Butuan City.',
      scope: 'Scope: Independent Monitoring',
      linkText: 'EXPLORE RECORD →',
      imgSrc: 'assets/images/dswd-rimc-manual-handover.jpg',
      imgAlt: 'DSWD RIMC Operations Manual Workshop framed certificate handover with FGSCBI leadership',
      containFit: false,
      caption: 'Presentation of the framed certificate during the Regional Independent Monitoring Committee Operations Manual Workshop at Luciana Hotel, Butuan City.',
    },
    {
      id: 'dswd-alayon',
      categories: ['civic', 'government'],
      tag: 'CSO Engagement',
      tagClass: 'tag-amber',
      date: 'October 2024',
      title: 'DSWD ALAYON 2024 Social Investment Forum',
      partner: 'DSWD Recognized Civil Society Partners',
      desc: 'FGSCBI delegation recognized at the 2024 ALAYON Social Investment Forum celebrating sustained regional development cooperation.',
      scope: 'Forum: Regional Investment',
      linkText: 'VIEW PROGRAM →',
      imgSrc: 'assets/images/dswd-alayon-summit-group.jpg',
      imgAlt: 'FGSCBI delegation with ALAYON 2024 medals at DSWD Social Investment Forum',
      containFit: false,
      caption: 'FGSCBI leadership delegates wearing ALAYON 2024 medals at the DSWD 4Ps Regional Partners\' Summit.',
    },
    {
      id: 'cert-nyc',
      categories: ['youth'],
      tag: 'National Youth Recognition',
      tagClass: 'tag-rose',
      date: 'October 2021',
      title: 'Certificate of Participation — NYC I DARE Youth',
      partner: 'National Youth Commission & Office of the President',
      desc: 'Conferred for active participation in the nationwide "Search for Outstanding Illegal Drug Abuse Resistance Education Projects for the Youth" (I DARE Youth).',
      scope: 'Level: Office of the President',
      linkText: 'VIEW CITATION →',
      imgSrc: 'assets/images/cert-nyc-idare-2021.jpg',
      imgAlt: 'Official Certificate of Participation presented to FGSCBI by National Youth Commission',
      containFit: true,
      caption: 'Presented to Friendship Goals Society Caraga-Butuan Inc. (FGSCBI) for participating in the I DARE Youth project. Manila, Philippines, 24 November 2021.',
    },
    {
      id: 'cert-braintrust',
      categories: ['research'],
      tag: 'Research Accreditation',
      tagClass: 'tag-teal',
      date: 'May 2024',
      title: 'Certificate of Participation — Brain Trust Inc.',
      partner: 'Brain Trust National Development Consultants & DSWD',
      desc: 'Acknowledging contribution to the Field Study Assessment of the Pantawid Pamilyang Pilipino Program (4Ps) during its Caraga validation.',
      scope: 'Study: 4Ps Validation Study',
      linkText: 'VERIFY RECORD →',
      imgSrc: 'assets/images/cert-braintrust-4ps-study.jpg',
      imgAlt: 'Certificate of Participation from Brain Trust Inc. on behalf of DSWD',
      containFit: true,
      caption: 'Focus Group Discussion for national study on 4Ps and social protection programs led by Dr. Cielito F. Habito on behalf of DSWD.',
    },
    {
      id: 'dswd-council-session',
      categories: ['civic', 'government', 'research'],
      tag: 'Public Governance',
      tagClass: 'tag-emerald',
      date: 'June 2024',
      title: 'DSWD Field Office Caraga RIMC Council Session',
      partner: 'DSWD Conference Hall, Butuan City',
      desc: 'Active deliberation on independent monitoring protocols, community evaluation framework, and consensus validation with regional CSO leadership.',
      scope: 'Affiliation: DSWD Field Regional',
      linkText: 'VIEW DOCUMENT →',
      imgSrc: 'assets/images/dswd-rimc-conference-room.jpg',
      imgAlt: 'DSWD Conference Hall Session with FGSCBI representatives',
      containFit: false,
      caption: 'Technical deliberations and monitoring review session at the DSWD Conference Hall, Field Office Caraga, Butuan City.',
    },
  ];

  // ESC key listener for lightbox modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveLightbox(null);
      }
    };
    if (activeLightbox) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightbox]);

  const filterTabs = [
    { key: 'all', label: 'All Recognitions (8)' },
    { key: 'government', label: 'Government & Region' },
    { key: 'civic', label: 'Civic & Environmental' },
    { key: 'youth', label: 'Youth & Leadership' },
    { key: 'research', label: 'Research & Policy' },
  ];

  const visibleRecognitions = activeFilter === 'all'
    ? recognitions
    : recognitions.filter(item => item.categories.includes(activeFilter));

  return (
    <main id="main-content">
      {/* Page Header Banner */}
      <PageHeader
        title="Our"
        highlight="Recognitions"
        subtitle="Awards and appreciation from partner agencies and the Caraga Regional Development Council."
        breadcrumb="Recognitions"
      />

      {/* Citation Archive & Controls */}
      <section className="section" style={{ paddingTop: '2.5rem', paddingBottom: '1.5rem' }} aria-label="Recognition Archive and Stats">
        <div className="container text-center">
          {/* Subtitle Archive Label */}
          <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0EA5E9', display: 'block', marginBottom: '0.35rem' }}>
              INSTITUTIONAL CITATION ARCHIVE
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 700, color: 'var(--color-text-primary, #0B1B2B)', marginBottom: '0.35rem' }}>
              Certificates &amp; Plaques
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.84rem', color: 'var(--color-text-muted, #64748B)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#0EA5E9' }}></span>
              Click any certificate or plaque to open high-resolution view
            </p>
          </div>

          {/* 4-Stat Strip */}
          <div className="recog-stats-bar fade-in-up">
            <div className="recog-stat-col">
              <div className="recog-stat-val">8+</div>
              <div className="recog-stat-lbl">REGIONAL CITATIONS</div>
            </div>
            <div className="recog-stat-col">
              <div className="recog-stat-val">4</div>
              <div className="recog-stat-lbl">LINE AGENCY PARTNERS</div>
            </div>
            <div className="recog-stat-col">
              <div className="recog-stat-val">1st</div>
              <div className="recog-stat-lbl">FISHERY SECTOR PSR</div>
            </div>
            <div className="recog-stat-col">
              <div className="recog-stat-val">100%</div>
              <div className="recog-stat-lbl">VERIFIED INTEGRITY</div>
            </div>
          </div>

          {/* Filter Pills Bar */}
          <div className="recog-filter-bar fade-in-up" role="tablist" aria-label="Recognition categories">
            {filterTabs.map(tab => (
              <button
                key={tab.key}
                type="button"
                className={`recog-filter-pill ${activeFilter === tab.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Card Grid Section */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '4rem' }}>
        <div className="container">
          <div className="recog-reference-grid">
            {visibleRecognitions.map(item => (
              <article
                key={item.id}
                id={item.id}
                className="recog-ref-card fade-in-up"
                data-category={item.categories.join(' ')}
              >
                <div
                  className="recog-card-preview"
                  onClick={() => setActiveLightbox(item)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveLightbox(item); } }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Enlarge ${item.title}`}
                >
                  <img
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    className={`recog-card-img ${item.containFit ? 'contain-fit' : ''}`}
                    width="600"
                    height="425"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="recog-card-overlay" aria-hidden="true">
                    <span className="recog-card-overlay-btn">🔍 View {item.title.includes('Plaque') ? 'Plaque' : item.title.includes('Ceremony') || item.title.includes('Session') || item.title.includes('Summit') ? 'Photo' : 'Certificate'}</span>
                  </div>
                </div>

                <div className="recog-card-body">
                  <div className="recog-meta-top">
                    <span className={`recog-tag-pill ${item.tagClass}`}>{item.tag}</span>
                    <span className="recog-date-lbl">{item.date}</span>
                  </div>
                  <h3 className="recog-card-title">{item.title}</h3>
                  <div className="recog-card-partner">{item.partner}</div>
                  <p className="recog-card-desc">{item.desc}</p>
                  <div className="recog-card-footer">
                    <span className="recog-footer-scope">{item.scope}</span>
                    <button
                      type="button"
                      className="recog-footer-link"
                      onClick={() => setActiveLightbox(item)}
                      aria-label={`Expand ${item.title} citation`}
                    >
                      {item.linkText}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Institutional Authenticity & Public Records Dark Banner Box */}
          <section className="recog-auth-banner fade-in-up" aria-labelledby="auth-banner-title">
            <div className="recog-auth-inner">
              <div className="recog-auth-badge">
                <span className="badge-dot-green"></span>
                <span>Institutional Transparency &amp; Verification</span>
              </div>
              <h2 id="auth-banner-title" className="recog-auth-title">
                Institutional Authenticity &amp; Public Records
              </h2>
              <p className="recog-auth-text">
                All certificates, plaques, and resolutions are actively on file at the FGSCBI Secretariat Office in Butuan City and verifiable upon request by civic partners, grantors, and regional oversight bodies.
              </p>
              <div className="recog-auth-actions">
                <Link to="/contact?type=verification#contact-form" className="btn-auth-solid">
                  REQUEST VERIFICATION DOSSIER →
                </Link>
                <Link to="/contact#contact-form" className="btn-auth-outline">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download Governance Portfolio (PDF)</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Accessible Lightbox Modal */}
      {activeLightbox && (
        <div
          id="lightbox-modal"
          className="lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Image Viewer"
          style={{ display: 'flex' }}
          onClick={() => setActiveLightbox(null)}
        >
          <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              type="button"
              aria-label="Close image viewer"
              onClick={() => setActiveLightbox(null)}
            >
              &times;
            </button>
            <div className="lightbox-image-wrap">
              <img
                src={activeLightbox.imgSrc}
                alt={activeLightbox.imgAlt}
                className="lightbox-img"
              />
            </div>
            <div className="lightbox-info">
              <h3 className="lightbox-title">{activeLightbox.title}</h3>
              <p className="lightbox-caption">{activeLightbox.caption}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

