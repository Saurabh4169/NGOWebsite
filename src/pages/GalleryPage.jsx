import React, { useState, useEffect } from 'react';
import PageHeader from '../components/layout/PageHeader';
import { galleryItems } from '../data/gallery';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filterTabs = [
    { key: 'all', label: 'All Photos' },
    { key: 'livelihood', label: 'Livelihood' },
    { key: 'governance', label: 'Governance' },
    { key: 'advocacy', label: 'Advocacy' },
    { key: 'environment', label: 'Environment' },
    { key: 'recognition', label: 'Recognition' },
  ];

  const visibleItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.categorySlug === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % visibleItems.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + visibleItems.length) % visibleItems.length);
      }
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, visibleItems.length]);

  const activeLightboxItem = lightboxIndex !== null ? visibleItems[lightboxIndex] : null;

  const getBadgeClass = (categorySlug) => {
    switch (categorySlug) {
      case 'livelihood':
        return 'badge-blue';
      case 'governance':
      case 'recognition':
        return 'badge-gold';
      case 'advocacy':
      case 'environment':
        return 'badge-teal';
      default:
        return 'badge-blue';
    }
  };

  return (
    <main id="main-content">
      {/* Page Header Banner */}
      <PageHeader
        title="Our"
        highlight="Gallery"
        subtitle="Moments from our events, workshops and community activities."
        breadcrumb="Gallery"
      />

      {/* Gallery Section with Filter Tabs */}
      <section className="section" aria-label="Photo Gallery Grid">
        <div className="container">
          {/* Filter Tabs */}
          <div className="filter-tabs" role="tablist" aria-label="Filter gallery items by category">
            {filterTabs.map(tab => (
              <button
                key={tab.key}
                type="button"
                className={`filter-btn gallery-filter-btn ${activeFilter === tab.key ? 'active' : ''}`}
                role="tab"
                aria-selected={activeFilter === tab.key}
                onClick={() => {
                  setActiveFilter(tab.key);
                  setLightboxIndex(null);
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="gallery-grid" id="gallery-container">
            {visibleItems.map((item, idx) => (
              <article
                key={item.id}
                className="gallery-item fade-in-up"
                data-category={item.categorySlug}
                tabIndex={0}
                role="button"
                aria-label={`Enlarge ${item.title}`}
                onClick={() => setLightboxIndex(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxIndex(idx);
                  }
                }}
              >
                <div className="gallery-item-img-wrap">
                  <span className={`badge ${getBadgeClass(item.categorySlug)} card-badge-pos`}>
                    {item.category}
                  </span>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-item-img"
                    width="600"
                    height="450"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="gallery-item-caption">
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-meta">{item.location} • {item.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Accessible Lightbox Modal */}
      {activeLightboxItem && (
        <div
          id="lightbox-modal"
          className="lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Viewer"
          style={{ display: 'flex' }}
          onClick={() => setLightboxIndex(null)}
        >
          <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              type="button"
              aria-label="Close image viewer"
              onClick={() => setLightboxIndex(null)}
            >
              &times;
            </button>
            <button
              className="lightbox-nav-btn lightbox-prev"
              type="button"
              aria-label="Previous image"
              onClick={() => setLightboxIndex((prev) => (prev - 1 + visibleItems.length) % visibleItems.length)}
            >
              &#10094;
            </button>
            <button
              className="lightbox-nav-btn lightbox-next"
              type="button"
              aria-label="Next image"
              onClick={() => setLightboxIndex((prev) => (prev + 1) % visibleItems.length)}
            >
              &#10095;
            </button>

            <div className="lightbox-image-wrap">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="lightbox-img"
              />
            </div>
            <div className="lightbox-info">
              <h3 className="lightbox-title">{activeLightboxItem.title}</h3>
              <p className="lightbox-caption">{activeLightboxItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

