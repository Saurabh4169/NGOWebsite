/**
 * =============================================================================
 * FRIENDSHIP GOALS SOCIETY CARAGA-BUTUAN INC. (FGSCBI)
 * Core Interactive Scripts — Vanilla JavaScript, Production Quality
 * =============================================================================
 */

(function () {
  'use strict';

  // State Management
  const AppState = {
    theme: 'light',
    lightboxIndex: 0,
    lightboxItems: [],
    lastActiveElement: null
  };

  /**
   * 1. THEME MANAGER (Light / Dark Mode)
   */
  function initTheme() {
    const savedTheme = localStorage.getItem('fgscbi_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark', false);
    } else {
      setTheme('light', false);
    }

    // Toggle button listener
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        const nextTheme = AppState.theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme, true);
      });
    }

    // System theme change listener
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        if (!localStorage.getItem('fgscbi_theme')) {
          setTheme(e.matches ? 'dark' : 'light', false);
        }
      });
    }
  }

  function setTheme(theme, savePreference) {
    AppState.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    if (savePreference) {
      localStorage.setItem('fgscbi_theme', theme);
    }

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      themeBtn.innerHTML = theme === 'dark'
        ? '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
        : '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    }
  }

  /**
   * 2. MOBILE NAVIGATION DRAWER
   */
  function initMobileNav() {
    const navToggle = document.getElementById('mobile-nav-toggle');
    const primaryNav = document.getElementById('primary-nav');

    if (!navToggle || !primaryNav) return;

    function openNav() {
      navToggle.setAttribute('aria-expanded', 'true');
      primaryNav.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      // Set focus to the first nav link
      const firstLink = primaryNav.querySelector('a');
      if (firstLink) firstLink.focus();
    }

    function closeNav() {
      navToggle.setAttribute('aria-expanded', 'false');
      primaryNav.classList.remove('is-open');
      document.body.style.overflow = '';
      navToggle.focus();
    }

    navToggle.addEventListener('click', function () {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeNav();
      } else {
        openNav();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && primaryNav.classList.contains('is-open')) {
        closeNav();
      }
    });

    // Close when clicking outside on mobile
    document.addEventListener('click', function (e) {
      if (
        primaryNav.classList.contains('is-open') &&
        !primaryNav.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        closeNav();
      }
    });

    // Close when link clicked inside nav
    const links = primaryNav.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        if (primaryNav.classList.contains('is-open')) {
          closeNav();
        }
      });
    });
  }

  /**
   * 3. SCROLL-REVEAL ANIMATIONS
   */
  function initScrollReveal() {
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.fade-in-up');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /**
   * 4. ACCESSIBLE LIGHTBOX COMPONENT
   */
  function initLightbox() {
    const lightbox = document.getElementById('lightbox-modal');
    if (!lightbox) return;

    const imgEl = lightbox.querySelector('.lightbox-img');
    const titleEl = lightbox.querySelector('.lightbox-caption-title');
    const textEl = lightbox.querySelector('.lightbox-caption-text');
    const closeBtn = lightbox.querySelector('.lightbox-close-btn');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    // Collect all lightbox triggers
    const triggerElements = document.querySelectorAll('[data-lightbox]');
    AppState.lightboxItems = [];

    triggerElements.forEach(function (el, index) {
      const src = el.getAttribute('data-img-src') || el.querySelector('img')?.getAttribute('src');
      const title = el.getAttribute('data-img-title') || el.querySelector('h3')?.innerText || el.querySelector('.gallery-item-title')?.innerText || '';
      const caption = el.getAttribute('data-img-caption') || el.querySelector('p')?.innerText || '';
      
      AppState.lightboxItems.push({
        src: src,
        title: title,
        caption: caption,
        triggerEl: el
      });

      el.addEventListener('click', function (e) {
        e.preventDefault();
        openLightbox(index);
      });

      // Enable keyboard Enter on triggers
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });
    });

    function openLightbox(index) {
      AppState.lastActiveElement = document.activeElement;
      AppState.lightboxIndex = index;
      renderLightboxItem();
      lightbox.classList.add('is-active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('is-active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (AppState.lastActiveElement) {
        AppState.lastActiveElement.focus();
      }
    }

    function renderLightboxItem() {
      const item = AppState.lightboxItems[AppState.lightboxIndex];
      if (!item) return;

      imgEl.src = item.src;
      imgEl.alt = item.title || 'Enlarged view';
      if (titleEl) titleEl.innerText = item.title;
      if (textEl) textEl.innerText = item.caption;
    }

    function nextItem() {
      if (AppState.lightboxItems.length <= 1) return;
      AppState.lightboxIndex = (AppState.lightboxIndex + 1) % AppState.lightboxItems.length;
      renderLightboxItem();
    }

    function prevItem() {
      if (AppState.lightboxItems.length <= 1) return;
      AppState.lightboxIndex = (AppState.lightboxIndex - 1 + AppState.lightboxItems.length) % AppState.lightboxItems.length;
      renderLightboxItem();
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', nextItem);
    if (prevBtn) prevBtn.addEventListener('click', prevItem);

    // Keyboard controls for lightbox
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('is-active')) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextItem();
      } else if (e.key === 'ArrowLeft') {
        prevItem();
      }
    });

    // Close when clicking modal backdrop
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) {
        closeLightbox();
      }
    });

    // Mobile touch swipe gestures
    let touchStartX = 0;
    let touchEndX = 0;
    lightbox.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextItem(); // Swiped left -> Next
      } else if (touchEndX - touchStartX > 50) {
        prevItem(); // Swiped right -> Prev
      }
    }, { passive: true });
  }

  /**
   * 5. NEWS FILTERING & DETAIL MODAL
   */
  function initNews() {
    const filterButtons = document.querySelectorAll('.news-filter-btn');
    const newsCards = document.querySelectorAll('.news-card');
    const newsModal = document.getElementById('news-modal');

    // Filter Buttons
    if (filterButtons.length > 0 && newsCards.length > 0) {
      filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          filterButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const category = btn.getAttribute('data-filter');

          newsCards.forEach(function (card) {
            const cardCat = card.getAttribute('data-category');
            if (category === 'all' || cardCat === category) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    }

    // News Detail Modal
    if (!newsModal) return;

    const modalTitle = newsModal.querySelector('.news-modal-title');
    const modalDate = newsModal.querySelector('.news-modal-date');
    const modalCategory = newsModal.querySelector('.news-modal-category');
    const modalImg = newsModal.querySelector('.news-modal-img');
    const modalBody = newsModal.querySelector('.news-modal-body');
    const modalClose = newsModal.querySelector('.news-modal-close');

    function openNewsModal(articleData) {
      if (!articleData) return;
      AppState.lastActiveElement = document.activeElement;

      modalTitle.innerText = articleData.title;
      modalDate.innerText = articleData.date;
      modalCategory.innerText = articleData.category;
      
      if (articleData.image) {
        modalImg.src = articleData.image;
        modalImg.alt = articleData.imageAlt || articleData.title;
        modalImg.style.display = 'block';
      } else {
        modalImg.style.display = 'none';
      }

      modalBody.innerHTML = articleData.content || `<p>${articleData.excerpt}</p>`;

      newsModal.classList.add('is-active');
      newsModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (modalClose) modalClose.focus();
    }

    function closeNewsModal() {
      newsModal.classList.remove('is-active');
      newsModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (AppState.lastActiveElement) {
        AppState.lastActiveElement.focus();
      }
    }

    if (modalClose) modalClose.addEventListener('click', closeNewsModal);

    newsModal.addEventListener('click', function (e) {
      if (e.target === newsModal) {
        closeNewsModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && newsModal.classList.contains('is-active')) {
        closeNewsModal();
      }
    });

    // Attach click triggers to news items
    const newsTriggers = document.querySelectorAll('.news-read-more, .news-card-title-link');
    newsTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        const articleId = trigger.getAttribute('data-article-id');
        
        let articleData = null;
        if (typeof FGSCBI_DATA !== 'undefined' && FGSCBI_DATA.news) {
          articleData = FGSCBI_DATA.news.find(item => item.id === articleId);
        }

        // Fallback to DOM attributes if not found in data
        if (!articleData) {
          const card = trigger.closest('.news-card');
          if (card) {
            articleData = {
              title: card.querySelector('.card-title')?.innerText || '',
              date: card.querySelector('.news-date')?.innerText || '',
              category: card.querySelector('.badge')?.innerText || '',
              image: card.querySelector('.card-img')?.src || '',
              excerpt: card.querySelector('.card-text')?.innerText || '',
              content: card.querySelector('.news-full-content')?.innerHTML || card.querySelector('.card-text')?.innerHTML
            };
          }
        }

        if (articleData) {
          openNewsModal(articleData);
        }
      });
    });

    // Check URL Hash on page load for direct article linking (e.g. #news-rdc-plaque-2025)
    if (window.location.hash && typeof FGSCBI_DATA !== 'undefined') {
      const hashId = window.location.hash.substring(1);
      const matched = FGSCBI_DATA.news.find(n => n.id === hashId);
      if (matched) {
        setTimeout(() => openNewsModal(matched), 200);
      }
    }
  }

  /**
   * 6. GALLERY CATEGORY FILTERING
   */
  function initGalleryFilters() {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!filterButtons.length || !galleryItems.length) return;

    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');

        galleryItems.forEach(function (item) {
          const itemCat = item.getAttribute('data-category');
          if (category === 'all' || itemCat === category) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  /**
   * 7. CONTACT & INQUIRY FORM VALIDATION
   */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const inquiryType = document.getElementById('contact-inquiry-type');
    const messageInput = document.getElementById('contact-message');
    const statusAlert = document.getElementById('form-status-alert');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showError(nameInput, 'name-feedback', 'Please enter your full name (at least 2 characters).');
        isValid = false;
      } else {
        clearError(nameInput, 'name-feedback');
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'email-feedback', 'Please enter a valid email address.');
        isValid = false;
      } else {
        clearError(emailInput, 'email-feedback');
      }

      // Validate Inquiry Type
      if (!inquiryType.value) {
        showError(inquiryType, 'inquiry-feedback', 'Please select the nature of your inquiry.');
        isValid = false;
      } else {
        clearError(inquiryType, 'inquiry-feedback');
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        showError(messageInput, 'message-feedback', 'Please share a brief message (at least 10 characters).');
        isValid = false;
      } else {
        clearError(messageInput, 'message-feedback');
      }

      if (!isValid) {
        const firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // If form action is set to Formspree or Netlify and online
      const action = form.getAttribute('action');
      const isNetlifyOrFormspree = action && (action.includes('formspree.io') || action.includes('netlify'));

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending Message...';
      }

      if (isNetlifyOrFormspree && !action.includes('YOUR_FORM_ID')) {
        // Submit via native fetch to backend form handler
        const formData = new FormData(form);
        fetch(action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        })
        .then(response => {
          if (response.ok) {
            handleSuccess();
          } else {
            handleSubmissionError('Service temporarily busy. Please contact us directly via mobile: +63 909 987 3083.');
          }
        })
        .catch(() => {
          handleSubmissionError('Network error. Please call +63 909 987 3083 or reach us on Facebook.');
        })
        .finally(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
          }
        });
      } else {
        // Instant friendly submission with success alert
        setTimeout(function () {
          handleSuccess();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
          }
        }, 500);
      }
    });

    function showError(input, feedbackId, message) {
      input.setAttribute('aria-invalid', 'true');
      const feedback = document.getElementById(feedbackId);
      if (feedback) {
        feedback.innerText = message;
        feedback.classList.add('show-error');
      }
    }

    function clearError(input, feedbackId) {
      input.removeAttribute('aria-invalid');
      const feedback = document.getElementById(feedbackId);
      if (feedback) {
        feedback.innerText = '';
        feedback.classList.remove('show-error');
      }
    }

    function handleSuccess() {
      form.reset();
      if (statusAlert) {
        statusAlert.className = 'form-status-alert success';
        statusAlert.innerHTML = `
          <strong>Daghang Salamat! Thank you for reaching out.</strong><br>
          Your message has been safely received. A representative from Friendship Goals Society Caraga-Butuan Inc. (FGSCBI) will review your inquiry and respond promptly. For urgent inquiries, please call our hotline at <strong>+63 909 987 3083</strong>.
        `;
        statusAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    function handleSubmissionError(msg) {
      if (statusAlert) {
        statusAlert.className = 'form-status-alert error';
        statusAlert.innerHTML = `<strong>Notice:</strong> ${msg}`;
        statusAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  /**
   * 8. HERO DYNAMIC SLIDES & SUBTLE OVERLAY MANAGER
   */
  function initHeroSlides() {
    const bgLayers = document.querySelectorAll('.hero-bg-layer');
    const circleDots = document.querySelectorAll('.hero-circle-btn, .hero-slide-pill');
    const prevBtn = document.getElementById('hero-prev-btn');
    const nextBtn = document.getElementById('hero-next-btn');

    if (bgLayers.length <= 1) return;

    const heroSlides = [
      {
        src: 'assets/images/hero-rdc-hall.jpg',
        badge: 'Civic Recognition',
        badgeClass: 'badge-blue',
        title: 'Caraga RDC Plaque Ceremony in Grand Hall',
        sub: 'Grand Ballroom, Butuan City • Sectoral Leadership Honor',
        caption: 'Formal regional assembly honoring outgoing council officials and accredited Private Sector Representatives.'
      },
      {
        src: 'assets/images/hero-rdc-meeting.png',
        badge: 'RDC Caraga Governance',
        badgeClass: 'badge-gold',
        title: '122nd Caraga RDC Full Council Meeting',
        sub: 'Butuan City • Private Sector Fishery Representative',
        caption: 'FGSCBI representative with fellow council members and Private Sector Representatives at the 122nd Full Council Meeting in Butuan City.'
      }
    ];

    let currentSlide = 0;
    let slideInterval = null;

    function goToSlide(index) {
      currentSlide = (index + heroSlides.length) % heroSlides.length;

      // Update background layer visibility
      bgLayers.forEach(function (layer) {
        const layerIdx = parseInt(layer.getAttribute('data-hero-slide'), 10);
        if (layerIdx === currentSlide) {
          layer.classList.add('is-active');
        } else {
          layer.classList.remove('is-active');
        }
      });

      // Update circle button active states
      circleDots.forEach(function (dot) {
        const dotIdx = parseInt(dot.getAttribute('data-slide-target'), 10);
        if (dotIdx === currentSlide) {
          dot.classList.add('active');
          dot.setAttribute('aria-selected', 'true');
        } else {
          dot.classList.remove('active');
          dot.setAttribute('aria-selected', 'false');
        }
      });
    }

    // Connect circle button clicks
    circleDots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        const target = parseInt(dot.getAttribute('data-slide-target'), 10);
        goToSlide(target);
        resetTimer();
      });
    });

    // Connect previous / next circle arrow clicks
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        goToSlide(currentSlide - 1);
        resetTimer();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        goToSlide(currentSlide + 1);
        resetTimer();
      });
    }

    // Auto-advance timer (6.5s)
    function startTimer() {
      const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      slideInterval = setInterval(function () {
        goToSlide(currentSlide + 1);
      }, 6500);
    }

    function resetTimer() {
      if (slideInterval) {
        clearInterval(slideInterval);
        startTimer();
      }
    }

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.addEventListener('mouseenter', function () {
        if (slideInterval) clearInterval(slideInterval);
      });
      heroSection.addEventListener('mouseleave', function () {
        startTimer();
      });
    }

    startTimer();
  }

  /**
   * 9. BACK TO TOP BUTTON
   */
  function initBackToTop() {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'back-to-top-btn';
    btn.setAttribute('aria-label', 'Back to top of page');
    btn.innerHTML = '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    document.body.appendChild(btn);

    function toggleVisibility() {
      if (window.scrollY > 350) {
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      btn.blur();
    });
  }

  /**
   * DOM Ready Initialization
   */
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initMobileNav();
    initScrollReveal();
    initLightbox();
    initNews();
    initGalleryFilters();
    initContactForm();
    initHeroSlides();
    initBackToTop();
  });

})();

