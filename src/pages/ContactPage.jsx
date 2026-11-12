import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry_type: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInquiryTypeSelect = (type) => {
    setFormData((prev) => ({ ...prev, inquiry_type: type }));
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.inquiry_type || !formData.message) {
      setFormStatus({
        state: 'error',
        message: 'Please complete all required fields marked with an asterisk (*).',
      });
      return;
    }

    setFormStatus({ state: 'submitting', message: 'Sending your message to FGSCBI...' });

    try {
      const response = await fetch('https://formspree.io/f/xbjvkqwo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({
          state: 'success',
          message: 'Thank you! Your message has been sent successfully. Our secretariat will be in touch with you shortly.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiry_type: '',
          message: '',
        });
      } else {
        setFormStatus({
          state: 'error',
          message: 'There was an issue sending your message. Please reach us directly via our hotline or email.',
        });
      }
    } catch {
      setFormStatus({
        state: 'error',
        message: 'Network error. Please reach us directly via phone or email.',
      });
    }
  };

  return (
    <main id="main-content">
      {/* Page Header Banner */}
      <PageHeader
        title="Contact"
        highlight="Us"
        subtitle="We would love to hear from you."
        breadcrumb="Contact"
      />

      {/* Ways to Help Section */}
      <section id="ways-to-help" className="section" aria-labelledby="ways-to-help-heading">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="section-eyebrow">Make an Impact</span>
            <h2 id="ways-to-help-heading">Ways to Help &amp; Collaborate</h2>
            <p className="section-lead">Choose how you would like to participate in our mission across Caraga Region.</p>
          </div>

          <div className="grid-3">
            {/* Option 1: Volunteer */}
            <article className="help-card fade-in-up">
              <div className="help-icon" aria-hidden="true">🤝</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.45rem' }}>Volunteer With Us</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.55, color: 'var(--color-text-muted)', flexGrow: 1 }}>
                Join our hands-on coastal shoreline clean-ups, mangrove protection activities, youth drug abuse resistance forums, or community livelihood workshops. We welcome volunteers of all backgrounds.
              </p>
              <div style={{ marginTop: '0.85rem' }}>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => handleInquiryTypeSelect('volunteer')}
                >
                  Sign Up to Volunteer
                </button>
              </div>
            </article>

            {/* Option 2: Partner */}
            <article className="help-card featured fade-in-up">
              <div className="help-icon" aria-hidden="true">🏛️</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.45rem' }}>Institutional Partnership</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.55, color: 'var(--color-text-muted)', flexGrow: 1 }}>
                We partner with local government units (LGUs), regional agencies (DOLE, DSWD, CHR, NYC), academic institutions, and international foundations to design, implement, and monitor community welfare initiatives.
              </p>
              <div style={{ marginTop: '0.85rem' }}>
                <button
                  type="button"
                  className="btn btn-accent btn-sm"
                  onClick={() => handleInquiryTypeSelect('partnership')}
                >
                  Propose a Partnership
                </button>
              </div>
            </article>

            {/* Option 3: Donate */}
            <article className="help-card fade-in-up">
              <div className="help-icon" aria-hidden="true">💚</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.45rem' }}>Community Support &amp; Donations</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.55, color: 'var(--color-text-muted)', marginBottom: '0.45rem' }}>
                Support supplies for community soap-making livelihood trainings, coastal clean-up materials (trash bags, gloves, rakes), or youth development activities.
              </p>

              <div style={{ backgroundColor: 'var(--color-bg-alt)', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-md)', fontSize: '0.82rem', marginTop: '0.35rem', border: '1px solid var(--color-surface-border)' }}>
                <p style={{ marginBottom: '0.2rem' }}><strong>GCash Account:</strong> 0909 987 3083 (FGSCBI)</p>
                <p style={{ marginBottom: 0 }}><strong>Bank Transfer:</strong> Land Bank - Butuan | Acct: 0451-2839-44</p>
              </div>

              <div className="donation-advisory" role="note" style={{ marginTop: '0.5rem' }}>
                <strong>⚠️ Verification Advisory:</strong> Please verify all donation and financial account details exclusively through our official hotline (<a href="tel:+639099873083" style={{ fontWeight: 700 }}>+63 909 987 3083</a>) or official channels before transferring any funds.
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Details & Form Section */}
      <section className="section section-alt" aria-labelledby="form-section-heading">
        <div className="container">
          <div className="grid-2">
            {/* Column 1: Contact Information & Office Details */}
            <div id="contact-details" className="contact-info-card fade-in-up">
              <span className="section-eyebrow">Get in Touch</span>
              <h2 id="form-section-heading" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Direct Channels</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-xl)' }}>
                Our secretariat is available Monday through Friday to address formal correspondence, collaboration proposals, and volunteer sign-ups.
              </p>

              {/* Phone */}
              <div className="contact-method">
                <div className="contact-icon" aria-hidden="true">📞</div>
                <div className="contact-method-detail">
                  <h4>Mobile Hotline</h4>
                  <p>
                    <a href="tel:+639099873083" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none' }}>
                      +63 909 987 3083
                    </a>
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Available for calls and SMS inquiries</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-method">
                <div className="contact-icon" aria-hidden="true">✉️</div>
                <div className="contact-method-detail">
                  <h4>Official Email Address</h4>
                  <p>
                    <a href="mailto:fgsphilippines2017@gmail.com" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>
                      fgsphilippines2017@gmail.com
                    </a>
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Direct communication with secretariat</p>
                </div>
              </div>

              {/* Address */}
              <div className="contact-method">
                <div className="contact-icon" aria-hidden="true">📍</div>
                <div className="contact-method-detail">
                  <h4>Official Office Address</h4>
                  <p>
                    KM 3, J.C. Aquino Avenue, Barangay Doongan, Butuan City, Agusan del Norte, Caraga Region 8600, Philippines
                  </p>
                </div>
              </div>

              {/* Facebook */}
              <div className="contact-method">
                <div className="contact-icon" aria-hidden="true">🌐</div>
                <div className="contact-method-detail">
                  <h4>Social &amp; Facebook Page</h4>
                  <p>
                    <a href="https://facebook.com/friendshipgoalscaraga" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                      facebook.com/friendshipgoalscaraga
                    </a>
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Follow our ongoing field updates and events</p>
                </div>
              </div>

              <div style={{ marginTop: 'var(--space-xl)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-surface-border)' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.35rem' }}>Sectoral Representation Desk</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: 0 }}>
                  For official communications concerning the <strong>Private Sector Representative (Fishery Sector) in RDC Caraga</strong>, please address correspondence to the Lead Representative.
                </p>
              </div>
            </div>

            {/* Column 2: Inquiry & Volunteer Form */}
            <div className="contact-info-card fade-in-up">
              <span className="section-eyebrow">Send a Message</span>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Inquiry &amp; Volunteer Form</h2>

              {formStatus.message && (
                <div
                  id="form-status-alert"
                  className="form-status-alert"
                  role="alert"
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    backgroundColor: formStatus.state === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                    color: formStatus.state === 'success' ? '#059669' : '#DC2626',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                  }}
                >
                  {formStatus.message}
                </div>
              )}

              <form id="contact-form" onSubmit={handleSubmit} noValidate>
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Full Name <span className="req" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="form-control"
                    placeholder="Juan dela Cruz"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email Address <span className="req" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className="form-control"
                    placeholder="juan@example.com"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Phone Number */}
                <div className="form-group">
                  <label htmlFor="contact-phone" className="form-label">
                    Phone / Mobile Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    className="form-control"
                    placeholder="+63 900 000 0000"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Inquiry Type */}
                <div className="form-group">
                  <label htmlFor="contact-inquiry-type" className="form-label">
                    Nature of Inquiry <span className="req" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="contact-inquiry-type"
                    name="inquiry_type"
                    className="form-control"
                    required
                    value={formData.inquiry_type}
                    onChange={handleChange}
                  >
                    <option value="" disabled>-- Select an Inquiry Category --</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="partnership">Institutional / Government Partnership</option>
                    <option value="donation">Community Donation or In-Kind Support</option>
                    <option value="rdc_governance">RDC Caraga / Fishery Sector Inquiry</option>
                    <option value="general">General Inquiries &amp; Information</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message / Details <span className="req" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="How can we collaborate or assist you?"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%' }}
                  disabled={formStatus.state === 'submitting'}
                >
                  {formStatus.state === 'submitting' ? 'Sending Message...' : 'Send Message to FGSCBI'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="section" aria-labelledby="map-heading">
        <div className="container">
          <div className="section-header fade-in-up">
            <span className="section-eyebrow">Location</span>
            <h2 id="map-heading">Our Base: Butuan City, Caraga Region</h2>
            <p className="section-lead">Located at the heart of northeastern Mindanao along the historic Agusan River and Butuan Bay.</p>
          </div>

          <div className="map-container fade-in-up">
            <iframe
              title="Map of Butuan City, Caraga Region, Philippines"
              src="https://www.openstreetmap.org/export/embed.html?bbox=125.4600%2C8.9000%2C125.6000%2C9.0200&amp;layer=mapnik&amp;marker=8.9515%2C125.5280"
              loading="lazy"
            ></iframe>
          </div>

          <div className="text-center mt-md">
            <a
              href="https://www.openstreetmap.org/?mlat=8.9515&amp;mlon=125.5280#map=13/8.9515/125.5280"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              View Larger Map on OpenStreetMap ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

