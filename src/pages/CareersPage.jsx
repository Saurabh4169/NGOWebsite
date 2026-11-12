import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';

export default function CareersPage() {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [selectedJob, setSelectedJob] = useState('');
  const [copyStatus, setCopyStatus] = useState('Copy email address');

  const careersData = [
    {
      id: 'job-1',
      title: 'Community Development Officer',
      office: 'Programs Division',
      type: 'Permanent',
      location: 'Butuan City, Caraga Region',
      deadline: '2026-12-31',
      description: 'Lead grassroots capacity building, community organizing, and program implementation across partner coastal barangays.',
      requirements: "Bachelor's degree in Social Work, Community Development, or related field with at least 1 year relevant community experience."
    },
    {
      id: 'job-2',
      title: 'Fisherfolk Livelihood Coordinator',
      office: 'Programs Division',
      type: 'Contract',
      location: 'Butuan City / Caraga Municipal Waters',
      deadline: '2026-12-15',
      description: 'Coordinate enterprise development, soap compounding workshops, and artisanal fishery support initiatives.',
      requirements: 'Experience in enterprise mentoring, vocational training, or cooperatives management.'
    },
    {
      id: 'job-3',
      title: 'Administrative Assistant',
      office: 'Administration',
      type: 'Permanent',
      location: 'FGSCBI Central Office, Butuan City',
      deadline: '2023-06-19',
      description: 'Provide clerical, logistics, records management, and secretariat support for executive council sessions.',
      requirements: "Completion of at least 2 years college studies or Bachelor's degree; civil service eligible preferred."
    }
  ];

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const getJobStatus = (deadlineStr) => {
    const dDate = new Date(deadlineStr);
    dDate.setHours(0, 0, 0, 0);
    const isOpen = dDate >= now;
    const diffTime = dDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return { isOpen, diffDays };
  };

  const formatDate = (dateStr) => {
    try {
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        const date = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      }
    } catch {
      // fallback
    }
    return dateStr;
  };

  const filteredJobs = careersData.filter(job => {
    const { isOpen } = getJobStatus(job.deadline);
    if (currentFilter === 'open') return isOpen;
    if (currentFilter === 'closed') return !isOpen;
    return true;
  });

  const handleApplyClick = (title) => {
    setSelectedJob(title);
    const el = document.getElementById('how-to-apply');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopyEmail = () => {
    const email = 'fgsphilippines2017@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus('Copy email address'), 2000);
    }).catch(() => {
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus('Copy email address'), 2000);
    });
  };

  return (
    <main id="main-content">
      {/* Page Header Banner */}
      <PageHeader
        title="Join Our"
        highlight="Team"
        subtitle="Explore openings and learn how to apply."
        breadcrumb="Careers"
      />

      {/* Current Openings Section */}
      <section className="section" id="openings" aria-labelledby="openings-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Public Service &amp; Community Careers</span>
            <h2 id="openings-heading" className="section-title">Current Openings</h2>
            <p className="section-lead">
              We foster merit-based, transparent recruitment for professionals passionate about grassroots empowerment,
              artisanal fisheries, and civil society governance.
            </p>
          </div>

          {/* Filter Chips: All / Open / Closed */}
          <div className="careers-filter-bar fade-in-up" role="tablist" aria-label="Filter job openings by status">
            <button
              type="button"
              className={`filter-chip ${currentFilter === 'all' ? 'active' : ''}`}
              role="tab"
              aria-selected={currentFilter === 'all'}
              onClick={() => setCurrentFilter('all')}
            >
              All Roles
            </button>
            <button
              type="button"
              className={`filter-chip ${currentFilter === 'open' ? 'active' : ''}`}
              role="tab"
              aria-selected={currentFilter === 'open'}
              onClick={() => setCurrentFilter('open')}
            >
              Open Positions
            </button>
            <button
              type="button"
              className={`filter-chip ${currentFilter === 'closed' ? 'active' : ''}`}
              role="tab"
              aria-selected={currentFilter === 'closed'}
              onClick={() => setCurrentFilter('closed')}
            >
              Closed Positions
            </button>
          </div>

          {/* Dynamic Jobs Grid */}
          {filteredJobs.length === 0 ? (
            <div id="jobs-empty-state" className="careers-empty-card" style={{ display: 'block' }}>
              <div className="careers-empty-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-heading)', marginBottom: '0.5rem' }}>
                No open positions right now
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Send us your CV and we will keep you in mind for upcoming projects and community initiatives.
              </p>
              <a href="mailto:fgsphilippines2017@gmail.com?subject=General%20Application%20-%20Curriculum%20Vitae" className="btn-careers-primary btn-sm">
                Send General Application →
              </a>
            </div>
          ) : (
            <div className="jobs-grid" id="jobs-container" aria-live="polite">
              {filteredJobs.map(job => {
                const { isOpen, diffDays } = getJobStatus(job.deadline);
                const formattedDeadline = formatDate(job.deadline);

                return (
                  <article key={job.id} className={`job-card is-visible ${isOpen ? '' : 'is-closed'}`}>
                    <div>
                      <div className="job-card-top">
                        <div className="job-icon-badge" aria-hidden="true">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                          </svg>
                        </div>
                        {isOpen ? (
                          <span className="badge-status-open">
                            <span className="pulse-dot"></span> OPEN • {diffDays === 0 ? 'Closing today' : `${diffDays} days left`}
                          </span>
                        ) : (
                          <span className="badge-status-closed">CLOSED</span>
                        )}
                      </div>

                      <h3 className="job-card-title">{job.title}</h3>

                      <div className="job-meta-row">
                        <span className="job-tag tag-office">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
                          </svg>
                          {job.office}
                        </span>
                        <span className="job-tag">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 14 14"></polyline>
                          </svg>
                          {job.type}
                        </span>
                        <span className="job-tag" style={{ background: 'rgba(100, 116, 139, 0.1)', color: '#475569' }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          {job.location}
                        </span>
                      </div>

                      <p className="job-desc">{job.description}</p>
                    </div>

                    <div className="job-card-footer">
                      <div className="job-deadline-wrap">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>Deadline: <strong>{formattedDeadline}</strong></span>
                      </div>
                      {isOpen ? (
                        <button
                          type="button"
                          className="btn-careers-primary btn-sm"
                          onClick={() => handleApplyClick(job.title)}
                        >
                          Apply Now →
                        </button>
                      ) : (
                        <button type="button" className="btn-disabled btn-sm" disabled aria-disabled="true">
                          Application Closed
                        </button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="section section-alt" id="how-to-apply" aria-labelledby="apply-guide-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Application Procedures</span>
            <h2 id="apply-guide-heading" className="section-title">How to Apply</h2>
            <p className="section-lead">
              Follow our structured 4-step recruitment process to submit your qualifications for consideration.
            </p>
          </div>

          {/* Selected Job Alert if any */}
          {selectedJob && (
            <div
              style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '12px',
                padding: '1rem 1.5rem',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span style={{ fontSize: '0.8rem', color: '#059669', textTransform: 'uppercase', fontWeight: 700 }}>Selected Position</span>
                <h4 style={{ margin: '0.2rem 0 0 0', color: 'var(--color-heading)' }}>{selectedJob}</h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedJob('')}
                style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', fontSize: '0.9rem', textDecoration: 'underline' }}
              >
                Clear
              </button>
            </div>
          )}

          {/* 4-Step Timeline */}
          <div className="apply-timeline fade-in-up">
            <div className="timeline-step-card">
              <div className="step-num-pill" aria-hidden="true">1</div>
              <h3 className="step-card-title">Choose a Position</h3>
              <p className="step-card-desc">
                Browse current vacancies, review duty statements, and confirm alignment with your background.
              </p>
            </div>

            <div className="timeline-step-card">
              <div className="step-num-pill" aria-hidden="true">2</div>
              <h3 className="step-card-title">Prepare Documents</h3>
              <p className="step-card-desc">
                Assemble your application letter, notarized PDS, and complete supporting credentials.
              </p>
            </div>

            <div className="timeline-step-card">
              <div className="step-num-pill" aria-hidden="true">3</div>
              <h3 className="step-card-title">Submit Application</h3>
              <p className="step-card-desc">
                Email your complete application dossier and supporting credentials directly to our HR recruitment inbox.
              </p>
            </div>

            <div className="timeline-step-card">
              <div className="step-num-pill" aria-hidden="true">4</div>
              <h3 className="step-card-title">Wait for Our Review</h3>
              <p className="step-card-desc">
                Our recruitment committee screens credentials and contacts shortlisted candidates for interview.
              </p>
            </div>
          </div>

          {/* Two-Column Layout */}
          <div className="apply-cols-grid">
            {/* LEFT: Required Documents */}
            <div className="apply-col-card fade-in-up">
              <h3 className="apply-col-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span>Required Documents</span>
              </h3>

              <ol className="req-doc-list">
                <li className="req-doc-item">
                  <svg className="req-doc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span><strong>1. Application Letter</strong> addressed to the Executive Committee, stating the specific position applied for.</span>
                </li>
                <li className="req-doc-item">
                  <svg className="req-doc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span><strong>2. Duly notarized Personal Data Sheet (PDS)</strong> with recent passport-sized picture (CS Form 212, Revised 2017).</span>
                </li>
                <li className="req-doc-item">
                  <svg className="req-doc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span><strong>3. Certificate of Employment</strong> from previous employers or organizations, detailing relevant duties.</span>
                </li>
                <li className="req-doc-item">
                  <svg className="req-doc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span><strong>4. Certificate of Trainings Attended</strong> in community development, project management, or specialized fields.</span>
                </li>
                <li className="req-doc-item">
                  <svg className="req-doc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span><strong>5. Certified True Copy of Transcript of Records</strong> (TOR) from an accredited collegiate institution.</span>
                </li>
                <li className="req-doc-item">
                  <svg className="req-doc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span><strong>6. Certified True Copy of PRC License or Civil Service Eligibility</strong> (if applicable to the post).</span>
                </li>
              </ol>

              <div className="alert-incomplete-docs" role="alert">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span><strong>NOTE:</strong> Applications with incomplete documents will not be processed.</span>
              </div>
            </div>

            {/* RIGHT: Prefer Email Card */}
            <div className="apply-col-card fade-in-up">
              <h3 className="apply-col-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Prefer Email?</span>
              </h3>

              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                You can also send your complete application by email. Please compress your scanned documentary requirements into a single PDF or ZIP archive.
              </p>

              <div style={{ background: 'rgba(14, 165, 233, 0.08)', border: '1px solid rgba(14, 165, 233, 0.25)', borderRadius: '12px', padding: '1.15rem', marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, color: '#0284C7', marginBottom: '0.35rem' }}>
                  Official Recruitment Inbox
                </p>
                <p style={{ fontFamily: 'monospace', fontSize: '0.95rem', fontWeight: 700, color: '#0B1B2B', wordBreak: 'break-all', margin: 0 }}>
                  fgsphilippines2017@gmail.com
                </p>
              </div>

              <a
                href={`mailto:fgsphilippines2017@gmail.com?subject=Application%20for%20${encodeURIComponent(selectedJob || '[Position]')}`}
                className="btn-careers-primary"
                style={{ width: '100%', marginBottom: '0.75rem' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                <span>Apply via Email</span>
              </a>

              <div className="copy-email-row">
                <button
                  type="button"
                  className="btn-copy-email"
                  aria-label="Copy HR email address"
                  onClick={handleCopyEmail}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span>{copyStatus}</span>
                </button>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Direct submission</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section section-alt" aria-labelledby="why-work-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Our Culture &amp; Values</span>
            <h2 id="why-work-heading" className="section-title">Why Work With Us</h2>
            <p className="section-lead">
              Contribute your skills toward meaningful grassroots impact across Butuan City and the Caraga Region.
            </p>
          </div>

          <div className="why-work-grid fade-in-up">
            <article className="why-work-card">
              <div className="why-work-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h3 className="why-work-title">Purpose-Driven Work</h3>
              <p className="why-work-desc">
                Serve artisanal fisherfolk, coastal communities, and youth across Caraga Region through participatory social initiatives.
              </p>
            </article>

            <article className="why-work-card">
              <div className="why-work-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="why-work-title">Community Partnerships</h3>
              <p className="why-work-desc">
                Collaborate closely with local barangays, regional line agencies, and civil society coalitions to deliver grassroots solutions.
              </p>
            </article>

            <article className="why-work-card">
              <div className="why-work-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="why-work-title">Growth &amp; Learning</h3>
              <p className="why-work-desc">
                Expand your professional expertise in community development, civil society advocacy, and regional governance processes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="container">
        <div className="careers-cta-band fade-in-up">
          <h2 className="careers-cta-title">
            Don't see a role that fits? Volunteer or partner with us.
          </h2>
          <p className="careers-cta-desc">
            We welcome civic volunteers, technical partners, and community allies dedicated to sustainable coastal welfare and regional development.
          </p>
          <div className="careers-cta-actions">
            <Link to="/contact#ways-to-help" className="btn-careers-primary">Become a Volunteer</Link>
            <Link to="/contact#ways-to-help" className="btn-careers-white">Partner With Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

