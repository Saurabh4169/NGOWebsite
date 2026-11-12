import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader({
  breadcrumb,
  title,
  highlight,
  titlePrefix,
  titleGrad,
  subtitle,
}) {
  const prefix = titlePrefix || title || '';
  const grad = titleGrad || highlight || '';

  return (
    <section className="page-header">
      <div className="page-header__grid" />
      <div className="page-header__glow page-header__glow--blue" />
      <div className="page-header__glow page-header__glow--green" />
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator" aria-hidden="true">›</span>
          <span aria-current="page">{breadcrumb}</span>
        </nav>
        <h1>
          {prefix}{grad ? <> <span className="grad">{grad}</span></> : null}
        </h1>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
