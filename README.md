# Friendship Goals Society Caraga-Butuan Inc. (FGSCBI) — Website Documentation

A complete, production-ready, mobile-first website for **Friendship Goals Society Caraga-Butuan Inc. (FGSCBI)**, a registered non-governmental organization (Social Services and Community Development) based in Butuan City, Caraga Region, Philippines, and accredited Private Sector Representative (Fishery Sector) in the Regional Development Council (RDC) Caraga.

---

## 📁 Project Structure

```text
├── index.html                 # Home page (Hero, Stats, Pillars, Recent News, Badges, CTA)
├── about.html                 # About Us (Mission, Vision, Values, RDC PSR Role, Facts, Officers)
├── programs.html              # Programs & Projects (NYC Youth, Coastal Care, DOLE Soap Making, etc.)
├── recognitions.html          # Recognitions & Awards (Certificates, Plaques, 2021-2025 Timeline)
├── news.html                  # News & Field Updates (Category filter & accessible article modal)
├── gallery.html               # Photo Gallery (Masonry grid with filter tabs & accessible lightbox)
├── contact.html               # Contact & Get Involved (Channels, Form with validation, Ways to Help, Map)
├── donate.html                # Online Donation & Payment (GCash/QR Ph, Credit Card, Landbank, Receipt)
├── favicon.svg                # Browser favicon
├── css/
│   └── style.css              # Core responsive stylesheet (light/dark mode, WCAG AA contrast)
├── js/
│   ├── data.js                # Centralized content store (non-developer friendly for editing)
│   └── main.js                # Interactions (theme switcher, mobile nav, lightbox, modal, validation)
└── assets/
    └── images/                # Optimized project photos, certificates, logos, and placeholders
```

---

## 🚀 How to Run Locally

Because this website uses **standard vanilla HTML5, CSS3, and JavaScript**, there is **no build step, no compiler, and no node_modules required**.

1. Simply double-click any `.html` file (e.g., `index.html`) in File Explorer to open it directly in Chrome, Edge, Safari, or Firefox.
2. Alternatively, if you have Python or Node installed, you can spin up a local preview server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Or with npx (Node)
   npx serve .
   ```
   Then visit `http://localhost:8000` in your web browser.

---

## ✏️ How to Edit Content

### 1. Centralized Data File (`js/data.js`)
Editable organization details, news posts, gallery entries, and timeline milestones are stored in `js/data.js` with clear comments:
- **Organization Info**: Phone number, email, address, registration details.
- **News Articles**: Add a new post by duplicating an object in `FGSCBI_DATA.news`.
- **Gallery Items**: Add new photo entries by adding an object in `FGSCBI_DATA.gallery`.
- **Leadership**: Update officer names, titles, and bios in `FGSCBI_DATA.leadership`.

### 2. Direct HTML Edits
You can also open any `.html` file in VS Code or Notepad to update text directly. All pages are pre-populated with realistic dummy data (SEC number, office address, leadership roster, and official email) and are ready for live deployment.

---

## 🎨 Theme & Visual Styling
- **Color Scheme:** Coastal Green, Crisp Pure White, and Deep Ocean Blue.
- **Glossy & Glassmorphic Effects:** Modern frosted glass cards with `backdrop-filter`, subtle gradient borders, top reflection highlights, and shiny elevated gradient buttons.
- **HD Imagery:** Integrated high-resolution volunteer and community photos with optimized contrast and aspect ratios.

---

## 🖼️ Replacing Images

All images are stored in `/assets/images/`. To update an image:
1. **Hero Coastal Clean-Up Photo**:
   - Save your official community clean-up photo as `hero-cleanup.jpg` and overwrite `assets/images/hero-cleanup.jpg`.
2. **Adding New Event Photos**:
   - Copy your photo to `assets/images/your-photo-name.jpg`.
   - In `gallery.html` or `js/data.js`, reference your new file.
3. **Privacy & Consent Reminder**:
   - Always ensure written consent is secured before publishing photos showing identifiable individuals, particularly beneficiaries or minors.
   - Do not display personal beneficiary full names or monetary grant amounts on public pages.

---

## 📬 Setting Up the Contact Form

The form in `contact.html` features client-side validation and is ready to connect to a free form backend:

### Option A: Formspree (Recommended for any static host)
1. Go to [https://formspree.io](https://formspree.io) and create a free account.
2. Create a new form and copy your Form ID (e.g. `xpzvyzqw`).
3. In `contact.html`, find:
   ```html
   <form id="contact-form" action="https://formspree.io/f/[TODO:YOUR_FORM_ID]" method="POST">
   ```
   Replace `[TODO:YOUR_FORM_ID]` with your Formspree ID:
   ```html
   <form id="contact-form" action="https://formspree.io/f/xpzvyzqw" method="POST">
   ```
4. Submissions will be sent directly to your organization email address!

### Option B: Netlify Forms
If hosting on Netlify, change the form tag in `contact.html` to:
```html
<form id="contact-form" name="contact" method="POST" data-netlify="true">
```

---

## 🌐 Deploying for Free

This site can be deployed instantly for free on any modern static web host:

### 1. Netlify (Drag & Drop — Easiest, 2 minutes)
1. Visit [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the whole project folder into the browser window.
3. Your site is live immediately with an SSL HTTPS certificate!
4. (Optional) Connect a custom domain (e.g., `fgscbi.org`).

### 2. GitHub Pages
1. Push this repository to GitHub.
2. In your repository, go to **Settings** → **Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your website will be live at `https://<username>.github.io/<repo-name>/`.

### 3. Vercel
1. Install Vercel CLI (`npm i -g vercel`) and run `vercel`, or import your repository on [https://vercel.com](https://vercel.com).
2. Deploy as a static project.

---

## 📋 Master Checklist of Client [TODO] Items

Before public launch, the client or organization secretariat should provide and verify the following items:

- [ ] **SEC Registration Number**: Official certificate number from the Securities and Exchange Commission (Philippines).
- [ ] **Year Founded / Incorporated**: Exact establishment or incorporation year.
- [ ] **Official Office Address**: Complete street, barangay, and postal address in Butuan City.
- [ ] **Official Organization Email**: e.g., `info@fgscbi.org` or `fgscbi.caraga@gmail.com`.
- [ ] **Official Facebook Page URL**: Direct link to the official Facebook page.
- [x] **Hero Regional Assembly Photo**: Official high-resolution photo provided and integrated exclusively into the hero section (`assets/images/hero-rdc-meeting.jpg`).
- [x] **Coastal Clean-Up & Livelihood Field Photos**: Official community photos integrated into Programs and Gallery (`assets/images/hero-cleanup.jpg`, `assets/images/livelihood-soap-making-workshop.jpg`).
- [ ] **Official Mission & Vision Statements**: Final approved wording from the Board of Trustees.
- [ ] **Leadership Roster**: Official names, designations, and portraits (with consent) for the Board of Trustees and Executive Officers.
- [ ] **Key Statistics**:
  - Exact years of community service.
  - Number of partner communities/barangays reached.
  - Number of partner government agencies and CSOs.
- [ ] **Donation / Bank Details**:
  - Official GCash Account Name and Number.
  - Official Bank Name, Branch, and Account Number.
- [ ] **Verification of Brain Trust Certificate**:
  - Confirm whether the issued physical certificate has FGSCBI named on the recipient line (the uploaded scan copy has a blank recipient line).
- [ ] **Form Service Setup**:
  - Create free Formspree or Netlify account and insert the form endpoint in `contact.html`.
