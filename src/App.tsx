import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';

// 7 Dedicated Page Components
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { TransformationsPage } from './pages/TransformationsPage';
import { CommercialPage } from './pages/CommercialPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Scroll restoration helper */}
      <ScrollToTop />

      <div className="w-full min-h-screen bg-[#FAFAFA] text-zinc-900 relative selection:bg-emerald-600 selection:text-white flex flex-col justify-between">
        {/* Floating Glass Navigation Header */}
        <Navbar />

        {/* Dynamic Route View */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/commercial" element={<CommercialPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/transformations" element={<TransformationsPage />} />
            <Route path="/service-areas" element={<Navigate to="/commercial" replace />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Multi-Page Footer */}
        <Footer />

        {/* Sticky Mobile Call & WhatsApp Bar */}
        <StickyMobileBar />
      </div>
    </BrowserRouter>
  );
};

export default App;
