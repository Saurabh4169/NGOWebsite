import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import RecognitionsPage from './pages/RecognitionsPage';
import NewsPage from './pages/NewsPage';
import GalleryPage from './pages/GalleryPage';
import CareersPage from './pages/CareersPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Clean routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/recognitions" element={<RecognitionsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donate" element={<DonatePage />} />

        {/* Legacy .html aliases for backward compatibility */}
        <Route path="/index.html" element={<HomePage />} />
        <Route path="/about.html" element={<AboutPage />} />
        <Route path="/programs.html" element={<ProgramsPage />} />
        <Route path="/recognitions.html" element={<RecognitionsPage />} />
        <Route path="/news.html" element={<NewsPage />} />
        <Route path="/gallery.html" element={<GalleryPage />} />
        <Route path="/careers.html" element={<CareersPage />} />
        <Route path="/services.html" element={<ServicesPage />} />
        <Route path="/contact.html" element={<ContactPage />} />
        <Route path="/donate.html" element={<DonatePage />} />
        <Route path="/404.html" element={<NotFoundPage />} />

        {/* 404 Catch-All */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

