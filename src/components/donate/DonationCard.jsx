import React, { useState } from 'react';

// EXAMPLES ONLY - confirm real costs with the organization before publishing
const impactExamples = {
  500: 'Provides essential workbooks or coastal seedling kits for 1 youth or volunteer.',
  1000: 'Provides 1 artisanal fisher with life vest repairs and basic marine safety lighting.',
  2500: 'Subsidizes community livelihood materials and starter kits for grassroots members.',
  5000: 'Supports a full day of coastal clean-up logistics, tools, and hydration for local volunteers.'
};

// REPLACE with the organization's real account details. Do not publish placeholders.
const paymentDetails = {
  gcash: {
    label: 'GCash Number:',
    val: '0909-987-3083',
    note: 'FGSCBI-DONATION'
  },
  maya: {
    label: 'Maya Number:',
    val: '0909-987-3083',
    note: 'FGSCBI-DONATION'
  },
  bank: {
    label: 'Bank Account (Landbank):',
    val: '0831-2345-67',
    note: 'FGSCBI GENERAL FUND'
  },
  qrph: {
    label: 'QR Ph Reference:',
    val: 'FGSCBI-QRPH-09099873083',
    note: 'Scan via any Philippine bank or e-wallet app'
  }
};

export default function DonationCard() {
  const [step, setStep] = useState(1);
  const [freq, setFreq] = useState('once');
  const [amount, setAmount] = useState(1000);
  const [isCustom, setIsCustom] = useState(false);
  const [customVal, setCustomVal] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isAnon, setIsAnon] = useState(false);
  const [designation, setDesignation] = useState('General Fund');
  const [method, setMethod] = useState('gcash');
  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAmountChip = (val) => {
    setAmount(val);
    setCustomVal('');
  };

  const handleCustomInput = (e) => {
    const val = parseInt(e.target.value, 10);
    setCustomVal(e.target.value);
    if (!isNaN(val) && val > 0) {
      setAmount(val);
    }
  };

  const handleContinueToDetails = () => {
    if (!amount || amount < 50) {
      alert('Please select or enter an amount of at least ₱50.');
      return;
    }
    setStep(2);
  };

  const handleContinueToPayment = () => {
    if (!isAnon && !name.trim()) {
      alert('Please enter your full name or check "I\'d like to donate anonymously".');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      alert('Please enter a valid email address so we can issue your receipt.');
      return;
    }
    setStep(3);
  };

  const handleCopy = () => {
    const currentInfo = paymentDetails[method] || paymentDetails.gcash;
    navigator.clipboard.writeText(currentInfo.val).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSubmitDonation = () => {
    setIsSubmitted(true);
  };

  const handleResetFlow = () => {
    setStep(1);
    setIsSubmitted(false);
  };

  const currentPayInfo = paymentDetails[method] || paymentDetails.gcash;
  const donorDisplayName = isAnon ? 'Anonymous Supporter' : (name.trim() || 'Supporter');
  const mailSubject = encodeURIComponent(`Payment Proof - FGSCBI Donation (₱${amount.toLocaleString()} ${freq === 'monthly' ? 'Monthly' : 'One-time'})`);
  const mailBody = encodeURIComponent(
    `Hello FGSCBI Team,\n\nI have sent my ${freq} donation of ₱${amount.toLocaleString()} via ${method.toUpperCase()}.\n\nDonor Details:\n- Name: ${donorDisplayName}\n- Email: ${email.trim()}\n- Mobile: ${phone.trim() || 'Not provided'}\n- Designation: ${designation}\n\nAttached is my payment screenshot/reference.\n\nThank you!`
  );

  return (
    <div className="donate-flow-card" id="donationCard">
      {/* Progress Indicators */}
      <nav className="donate-steps-nav" aria-label="Donation progress">
        <div className={`step-indicator-item ${step === 1 ? 'is-active' : ''} ${step > 1 || isSubmitted ? 'is-complete' : ''}`}>
          <span className="step-indicator-badge">1</span>
          <span>Amount</span>
        </div>
        <div className={`step-indicator-item ${step === 2 ? 'is-active' : ''} ${step > 2 || isSubmitted ? 'is-complete' : ''}`}>
          <span className="step-indicator-badge">2</span>
          <span>Your details</span>
        </div>
        <div className={`step-indicator-item ${step === 3 && !isSubmitted ? 'is-active' : ''} ${isSubmitted ? 'is-complete' : ''}`}>
          <span className="step-indicator-badge">3</span>
          <span>Payment</span>
        </div>
      </nav>

      {/* Confirmation Screen */}
      {isSubmitted ? (
        <div className="donate-confirmation-panel is-active" role="region" aria-label="Donation confirmation">
          <div className="conf-check-anim" aria-hidden="true">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '0.75rem' }}>
            Thank you for your generosity!
          </h3>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.75rem', maxWidth: '440px', marginLeft: 'auto', marginRight: 'auto' }}>
            Your support brings immediate impact to community programs across Caraga. An official acknowledgement receipt will be issued once transaction verification is completed.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '320px', margin: '0 auto' }}>
            <a
              href={`mailto:fgsphilippines2017@gmail.com?subject=${mailSubject}&body=${mailBody}`}
              className="btn-step-continue"
              style={{ textDecoration: 'none' }}
            >
              <span>Send us payment proof</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <button type="button" className="btn-step-back" onClick={handleResetFlow} style={{ width: '100%' }}>
              Make another gift
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* STEP 1: AMOUNT */}
          {step === 1 && (
            <div className="donate-step-panel is-visible" role="region" aria-label="Step 1: Choose amount">
              {/* Frequency Toggle */}
              <div className="freq-segmented-group" role="radiogroup" aria-label="Donation frequency">
                <button
                  type="button"
                  className={`freq-segment-btn ${freq === 'once' ? 'is-active' : ''}`}
                  onClick={() => setFreq('once')}
                  role="radio"
                  aria-checked={freq === 'once'}
                >
                  One-time
                </button>
                <button
                  type="button"
                  className={`freq-segment-btn ${freq === 'monthly' ? 'is-active' : ''}`}
                  onClick={() => setFreq('monthly')}
                  role="radio"
                  aria-checked={freq === 'monthly'}
                >
                  Monthly
                </button>
              </div>

              {/* Amount Chips */}
              <div className="amount-chips-grid" role="radiogroup" aria-label="Suggested amounts">
                {[500, 1000, 2500, 5000].map((val) => (
                  <button
                    key={val}
                    type="button"
                    className={`amount-chip-btn ${amount === val && !customVal ? 'is-selected' : ''}`}
                    onClick={() => handleAmountChip(val)}
                    role="radio"
                    aria-checked={amount === val && !customVal}
                  >
                    <span>₱{val.toLocaleString()}</span>
                    <span className="chip-check-icon" aria-hidden="true">✓</span>
                  </button>
                ))}
              </div>

              {/* Enter Other Amount Link */}
              <div style={{ marginBottom: '1.15rem' }}>
                <button
                  type="button"
                  className="link-btn"
                  onClick={() => setIsCustom(!isCustom)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: '#0EA5E9',
                    fontSize: '0.94rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  {isCustom ? 'Hide Custom Amount' : 'Enter Other Amount'}
                </button>
              </div>

              {/* Custom Input */}
              {isCustom && (
                <div className="custom-amount-wrapper is-open" style={{ marginBottom: '1.25rem' }}>
                  <div className="custom-amount-inner">
                    <span className="custom-amount-prefix" aria-hidden="true">₱</span>
                    <input
                      type="number"
                      className="custom-amount-input"
                      placeholder="e.g. 1500"
                      value={customVal}
                      onChange={handleCustomInput}
                      min="50"
                      step="50"
                      aria-label="Custom amount in Philippine Pesos"
                    />
                  </div>
                </div>
              )}

              {/* Dynamic Impact Note */}
              <div className="donate-impact-note">
                <svg className="donate-impact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>
                  {impactExamples[amount] || `Every contribution of ₱${amount.toLocaleString()} directly powers our local programs in Caraga.`}
                </span>
              </div>

              {/* Continue Button */}
              <div className="step-actions-row">
                <button type="button" className="btn-step-continue" onClick={handleContinueToDetails}>
                  <span>Continue to Details</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: YOUR DETAILS */}
          {step === 2 && (
            <div className="donate-step-panel is-visible" role="region" aria-label="Step 2: Your details">
              <div className="form-floating-field">
                <input
                  type="text"
                  id="donorName"
                  className="form-floating-input"
                  placeholder=" "
                  value={isAnon ? 'Anonymous Supporter' : name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isAnon}
                  required
                  autoComplete="name"
                />
                <label htmlFor="donorName" className="form-floating-label">Full Name *</label>
              </div>

              <div className="form-floating-field">
                <input
                  type="email"
                  id="donorEmail"
                  className="form-floating-input"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
                <label htmlFor="donorEmail" className="form-floating-label">Email Address *</label>
              </div>

              <div className="form-floating-field">
                <input
                  type="tel"
                  id="donorPhone"
                  className="form-floating-input"
                  placeholder=" "
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="tel"
                />
                <label htmlFor="donorPhone" className="form-floating-label">Mobile Number (Optional - for GCash confirmation)</label>
              </div>

              <label className="form-checkbox-row">
                <input
                  type="checkbox"
                  checked={isAnon}
                  onChange={(e) => setIsAnon(e.target.checked)}
                />
                <span>I'd like to donate anonymously</span>
              </label>

              <div className="form-floating-field">
                <select
                  id="giftDesignation"
                  className="form-floating-select has-value"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  aria-label="Designate gift to"
                >
                  <option value="General Fund">Where needed most (General Fund)</option>
                  <option value="Fisherfolk Livelihood">Fisherfolk Livelihood Program</option>
                  <option value="Coastal Care">Coastal Environment Care</option>
                  <option value="Youth & Literacy">Youth &amp; Digital Literacy</option>
                </select>
                <label htmlFor="giftDesignation" className="form-floating-label">Designate my gift to</label>
              </div>

              <div className="step-actions-row">
                <button type="button" className="btn-step-back" onClick={() => setStep(1)}>
                  ← Back
                </button>
                <button type="button" className="btn-step-continue" onClick={handleContinueToPayment}>
                  <span>Continue to Payment</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: PAYMENT METHOD */}
          {step === 3 && (
            <div className="donate-step-panel is-visible" role="region" aria-label="Step 3: Payment method">
              <div className="payment-tiles-grid" role="radiogroup" aria-label="Select payment method">
                {[
                  { id: 'gcash', name: 'GCash', badge: 'E-Wallet' },
                  { id: 'maya', name: 'Maya', badge: 'E-Wallet' },
                  { id: 'bank', name: 'Bank Transfer', badge: 'BDO / Landbank' },
                  { id: 'qrph', name: 'QR Ph', badge: 'National Standard' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`payment-tile-card ${method === item.id ? 'is-selected' : ''}`}
                    onClick={() => setMethod(item.id)}
                    role="radio"
                    aria-checked={method === item.id}
                  >
                    <span className="payment-tile-name">{item.name}</span>
                    <span className="payment-tile-badge">{item.badge}</span>
                  </button>
                ))}
              </div>

              {/* Instructions Panel */}
              <div className="payment-instruction-box">
                <div className="payment-detail-row">
                  <span className="payment-detail-label">Account Name:</span>
                  <span className="payment-detail-val" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', textAlign: 'right' }}>
                    Friendship Goals Society Caraga-Butuan Inc.
                  </span>
                </div>
                <div className="payment-detail-row">
                  <span className="payment-detail-label">{currentPayInfo.label}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="payment-detail-val">{currentPayInfo.val}</span>
                    <button type="button" className="btn-copy-chip" onClick={handleCopy} aria-label="Copy account number">
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
                <div className="payment-detail-row">
                  <span className="payment-detail-label">Reference Note:</span>
                  <span className="payment-detail-val" style={{ fontSize: '0.88rem' }}>{currentPayInfo.note}</span>
                </div>
              </div>

              <div className="step-actions-row">
                <button type="button" className="btn-step-back" onClick={() => setStep(2)}>
                  ← Back
                </button>
                <button type="button" className="btn-step-continue" onClick={handleSubmitDonation}>
                  <span>I've sent my donation</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="privacy-lock-note">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>
                  Your contribution is direct, secure and private. We never share your data.
                </span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

