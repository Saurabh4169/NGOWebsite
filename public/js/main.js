/**
 * =============================================================================
 * FRIENDSHIP GOALS SOCIETY CARAGA-BUTUAN INC. (FGSCBI)
 * Core Interactive Scripts — Vanilla JavaScript, Production Quality
 * =============================================================================
 */

(function () {
  'use strict';

  // Application State
  const AppState = {
    theme: 'light',
    lightboxIndex: 0,
    lightboxItems: [],
    lastActiveElement: null,
    heroCurrentSlide: 0,
    heroTimer: null
  };

  /**
   * 1. THEME MANAGER (Light / Dark Mode with System Preference & Storage)
   */
  function initTheme() {
    const savedTheme = localStorage.getItem('fgscbi_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark', false);
    } else {
      setTheme('light', false);
    }

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        const nextTheme = AppState.theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme, true);
      });
    }

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
   * 2. STICKY HEADER SCROLL SHRINK
   */
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    function handleScroll() {
      if (window.scrollY > 40) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /**
   * 3. MOBILE NAVIGATION DRAWER
   */
  function initMobileNav() {
    const navToggle = document.getElementById('mobile-nav-toggle');
    const primaryNav = document.getElementById('primary-nav');

    if (!navToggle || !primaryNav) return;

    function openNav() {
      navToggle.setAttribute('aria-expanded', 'true');
      primaryNav.classList.add('is-open');
      document.body.style.overflow = 'hidden';
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

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && primaryNav.classList.contains('is-open')) {
        closeNav();
      }
    });

    document.addEventListener('click', function (e) {
      if (
        primaryNav.classList.contains('is-open') &&
        !primaryNav.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        closeNav();
      }
    });

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
   * 4. HERO IMAGE CAROUSEL (Dot Navigation, Cross-Fade, 6s Auto-Play, Pause, Touch Swipe)
   */
  function initHeroCarousel() {
    const heroSection = document.querySelector('.hero-section');
    const bgLayers = document.querySelectorAll('.hero-bg-layer');
    const dots = document.querySelectorAll('.hero-dot');
    const heroTitle = document.getElementById('hero-heading');
    const heroSub = document.querySelector('.hero-subtitle');
    const heroBadge = document.querySelector('.hero-badge');

    if (!heroSection || bgLayers.length === 0) return;

    const slidesData = (typeof FGSCBI_DATA !== 'undefined' && FGSCBI_DATA.heroSlides) ? FGSCBI_DATA.heroSlides : [
      {
        badge: "🌊 Coastal & Environmental Care",
        headline: "Building Stronger Communities in Caraga",
        subtext: "Empowering grassroots families, safeguarding coastal ecosystems, and mobilizing community volunteers for clean shorelines across Butuan Bay and the Caraga Region."
      },
      {
        badge: "🏛️ Regional Policy & Governance",
        headline: "Representing Fishery Sectors in RDC Caraga",
        subtext: "Serving as the accredited Private Sector Representative (PSR) for the Fishery Sector in the Caraga Regional Development Council, bringing artisanal fisherfolk voices to regional policymaking."
      },
      {
        badge: "🏆 Civic Dedication & Recognition",
        headline: "Honoring Dedicated Civic Service",
        subtext: "Conferred official Plaques of Appreciation and citations from regional councils and national agencies for steadfast commitment to social development."
      }
    ];

    function showSlide(index) {
      AppState.heroCurrentSlide = (index + bgLayers.length) % bgLayers.length;

      // Update Background Image Cross-Fade
      bgLayers.forEach(function (layer, idx) {
        if (idx === AppState.heroCurrentSlide) {
          layer.classList.add('is-active');
        } else {
          layer.classList.remove('is-active');
        }
      });

      // Update Centered Dot Indicators
      dots.forEach(function (dot, idx) {
        if (idx === AppState.heroCurrentSlide) {
          dot.classList.add('is-active');
          dot.setAttribute('aria-current', 'true');
        } else {
          dot.classList.remove('is-active');
          dot.removeAttribute('aria-current');
        }
      });

      // Update Text with Gentle Cross-Fade
      const slide = slidesData[AppState.heroCurrentSlide];
      if (slide) {
        if (heroTitle) {
          heroTitle.style.opacity = '0';
          setTimeout(() => {
            heroTitle.innerText = slide.headline;
            heroTitle.style.opacity = '1';
          }, 180);
        }
        if (heroSub) {
          heroSub.style.opacity = '0';
          setTimeout(() => {
            heroSub.innerText = slide.subtext;
            heroSub.style.opacity = '1';
          }, 180);
        }
        if (heroBadge && slide.badge) {
          heroBadge.innerText = slide.badge;
        }
      }
    }

    // Attach Click and Keyboard to Dots
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        const targetIdx = parseInt(dot.getAttribute('data-slide-index'), 10);
        showSlide(targetIdx);
        resetAutoPlay();
      });

      dot.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          dot.click();
        }
      });
    });

    // Auto-play every 6 seconds
    function startAutoPlay() {
      const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      AppState.heroTimer = setInterval(function () {
        showSlide(AppState.heroCurrentSlide + 1);
      }, 6000);
    }

    function stopAutoPlay() {
      if (AppState.heroTimer) {
        clearInterval(AppState.heroTimer);
        AppState.heroTimer = null;
      }
    }

    function resetAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    // Pause on Hover & Focus
    heroSection.addEventListener('mouseenter', stopAutoPlay);
    heroSection.addEventListener('mouseleave', startAutoPlay);
    heroSection.addEventListener('focusin', stopAutoPlay);
    heroSection.addEventListener('focusout', startAutoPlay);

    // Mobile Touch Swipe Support
    let touchStartX = 0;
    let touchEndX = 0;

    heroSection.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSection.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const threshold = 45;
      if (touchStartX - touchEndX > threshold) {
        // Swiped Left -> Next Slide
        showSlide(AppState.heroCurrentSlide + 1);
        resetAutoPlay();
      } else if (touchEndX - touchStartX > threshold) {
        // Swiped Right -> Previous Slide
        showSlide(AppState.heroCurrentSlide - 1);
        resetAutoPlay();
      }
    }

    // Start on Initial Load
    startAutoPlay();
  }

  /**
   * 5. SCROLL-REVEAL ANIMATIONS (IntersectionObserver with Reduced Motion check)
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
   * 6. ACCESSIBLE LIGHTBOX COMPONENT
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
      imgEl.alt = item.title || 'Enlarged certificate or recognition photo';
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

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-dialog') === false && !e.target.closest('.lightbox-dialog')) {
        closeLightbox();
      }
    });

    let touchStartX = 0;
    let touchEndX = 0;
    lightbox.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextItem();
      } else if (touchEndX - touchStartX > 50) {
        prevItem();
      }
    }, { passive: true });
  }

  /**
   * 7. NEWS FILTERING & DETAIL MODAL
   */
  function initNews() {
    const filterButtons = document.querySelectorAll('.news-filter-btn');
    const newsCards = document.querySelectorAll('.news-card');
    const newsModal = document.getElementById('news-modal');

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

    const newsTriggers = document.querySelectorAll('.news-read-more, .news-card-title-link');
    newsTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        const articleId = trigger.getAttribute('data-article-id');
        
        let articleData = null;
        if (typeof FGSCBI_DATA !== 'undefined' && FGSCBI_DATA.news) {
          articleData = FGSCBI_DATA.news.find(item => item.id === articleId);
        }

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

    if (window.location.hash && typeof FGSCBI_DATA !== 'undefined') {
      const hashId = window.location.hash.substring(1);
      const matched = FGSCBI_DATA.news.find(n => n.id === hashId);
      if (matched) {
        setTimeout(() => openNewsModal(matched), 200);
      }
    }
  }

  /**
   * 8. GALLERY CATEGORY FILTERING
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
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  /**
   * 9. CONTACT & INQUIRY FORM VALIDATION
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

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending Message...';
      }

      // Simulated clean submission
      setTimeout(function () {
        handleSuccess();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Send Message';
        }
      }, 600);
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
  }

  /**
   * DOM Ready Initialization
   */
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initHeaderScroll();
    initMobileNav();
    initHeroCarousel();
    initScrollReveal();
    initLightbox();
    initNews();
    initGalleryFilters();
    initContactForm();
  });

})();
