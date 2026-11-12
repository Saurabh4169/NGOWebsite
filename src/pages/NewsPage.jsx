import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import { newsArticles } from '../data/news';

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filterTabs = [
    { key: 'all', label: 'All Updates' },
    { key: 'advocacy', label: 'Advocacy' },
    { key: 'recognition', label: 'Recognition' },
    { key: 'livelihood', label: 'Livelihood' },
    { key: 'events', label: 'Events' },
  ];

  const visibleArticles = activeFilter === 'all'
    ? newsArticles
    : newsArticles.filter(item => item.categorySlug === activeFilter);

  // ESC key listener for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedArticle(null);
      }
    };
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedArticle]);

  const getBadgeClass = (categorySlug) => {
    switch (categorySlug) {
      case 'advocacy':
        return 'badge-teal';
      case 'recognition':
        return 'badge-gold';
      case 'livelihood':
        return 'badge-blue';
      default:
        return 'badge-teal';
    }
  };

  const getPartnerName = (id) => {
    switch (id) {
      case 'news-hr-digital-2025':
        return 'CHR & Friedrich Naumann Foundation';
      case 'news-rdc-plaque-2025':
        return 'Regional Development Council Caraga';
      case 'news-dswd-recognition-2025':
        return 'DSWD Caraga 4Ps Division & Brain Trust';
      case 'news-soap-livelihood-2025':
        return 'DOLE Caraga DILP & Butuan PESO';
      case 'news-youth-empowerment':
        return 'National Youth Commission (NYC)';
      default:
        return 'FGSCBI Secretariat';
    }
  };

  return (
    <main id="main-content">
      {/* Page Header Banner */}
      <PageHeader
        title="News &"
        highlight="Updates"
        subtitle="The latest stories and announcements from FGSCBI."
        breadcrumb="News"
      />

      {/* News Section with Category Filter */}
      <section className="section" aria-label="News Articles Feed">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="filter-tabs" role="tablist" aria-label="Filter news by category">
            {filterTabs.map(tab => (
              <button
                key={tab.key}
                className={`filter-btn news-filter-btn ${activeFilter === tab.key ? 'active' : ''}`}
                type="button"
                role="tab"
                aria-selected={activeFilter === tab.key}
                onClick={() => setActiveFilter(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* News Cards Grid */}
          <div className="grid-3" id="news-container">
            {visibleArticles.map(article => (
              <article
                key={article.id}
                id={article.id}
                className="card news-card fade-in-up"
                data-category={article.categorySlug}
              >
                <div className="card-img-wrapper">
                  <span className={`badge ${getBadgeClass(article.categorySlug)} card-badge-pos`}>
                    {article.category}
                  </span>
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="card-img"
                    width="600"
                    height="375"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="card-body">
                  <span className="card-partner">{getPartnerName(article.id)}</span>
                  <h2 className="card-title">
                    <button
                      type="button"
                      className="news-card-title-link"
                      onClick={() => setSelectedArticle(article)}
                      style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', font: 'inherit', color: 'inherit', cursor: 'pointer' }}
                    >
                      {article.title}
                    </button>
                  </h2>
                  <p className="card-text">{article.excerpt}</p>
                  <div className="card-footer">
                    <time className="news-date" dateTime={article.dateIso}>
                      {article.date}
                    </time>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm news-read-more"
                      onClick={() => setSelectedArticle(article)}
                    >
                      Read Article
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Accessible News Detail Modal */}
      {selectedArticle && (
        <div
          id="news-modal"
          className="news-modal is-open"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-article-title"
          style={{ display: 'flex' }}
          onClick={() => setSelectedArticle(null)}
        >
          <div className="news-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="news-modal-close"
              type="button"
              aria-label="Close article modal"
              onClick={() => setSelectedArticle(null)}
            >
              &times;
            </button>

            <span className={`badge ${getBadgeClass(selectedArticle.categorySlug)} news-modal-category`} style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
              {selectedArticle.category}
            </span>
            <h2 id="modal-article-title" className="news-modal-title" style={{ marginBottom: '0.25rem' }}>
              {selectedArticle.title}
            </h2>
            <time
              className="news-modal-date"
              style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'block', marginBottom: '1rem' }}
            >
              {selectedArticle.date}
            </time>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.imageAlt}
              className="news-modal-img"
              loading="lazy"
              style={{ borderRadius: 'var(--radius-md, 12px)', marginBottom: '1.5rem', width: '100%', maxHeight: '380px', objectFit: 'cover' }}
            />

            <div
              className="news-modal-body"
              style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-text)' }}
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
            />

            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--color-surface-border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                Published by FGSCBI Secretariat
              </span>
              <Link to="/contact" className="btn btn-outline btn-sm">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

