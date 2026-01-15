// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Services from './pages/Services';
import AssetManagement from './pages/AssetManagement';
import Team from './pages/Team';
import Office from './pages/Office';
import Contact from './pages/Contact';
import { translations } from './translations';
import './App.css';

function Navigation({ language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/overview', label: t.nav.overview },
    { path: '/services', label: t.nav.services },
    { path: '/asset-management', label: t.nav.asset },
    { path: '/team', label: t.nav.team },
    { path: '/office', label: t.nav.office },
    { path: '/contact', label: t.nav.contact }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-gray-900">RockyStream</span>
              <span className="text-xs text-gray-600 tracking-wide">GLOBAL WEALTH MANAGEMENT</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-green-700 border-b-2 border-green-700 pb-1' : 'text-gray-700 hover:text-green-700'}`}
              >
                {item.label}
              </Link>
            ))}
            <button 
              onClick={toggleLanguage} 
              className="ml-4 px-4 py-2 border border-gray-300 hover:border-green-700 hover:bg-green-50 rounded text-sm font-medium text-gray-700 hover:text-green-700 transition-all flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? '中文' : 'EN'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-gray-900">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                {item.label}
              </Link>
            ))}
            <button 
              onClick={toggleLanguage} 
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 flex items-center gap-2 hover:bg-gray-100"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? '切换到中文' : 'Switch to English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer({ language }) {
  const t = translations[language];
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-xl font-serif font-bold text-gray-900">RockyStream</span>
              <p className="text-xs text-gray-600 mt-1">GLOBAL WEALTH MANAGEMENT</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.footer.tagline}</p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:border-green-700 hover:bg-green-50 transition-all">
                <img src="https://cdn.cdnlogo.com/logos/w/79/wechat.svg" alt="WeChat" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:border-green-700 hover:bg-green-50 transition-all">
                <svg className="w-5 h-5" fill="#0A66C2" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">{t.contact.office}</h4>
            <p className="text-gray-600 text-sm">{t.contact.address}</p>
            <p className="text-gray-600 text-sm">{t.contact.city}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">{t.nav.contact}</h4>
            <p className="text-gray-600 text-sm mb-2">+1 (212) 555-0100</p>
            <p className="text-gray-600 text-sm mb-4">info@rockystreamglobal.com</p>
            <div className="mt-4">
              <p className="text-xs font-semibold text-gray-900 mb-2">{language === 'en' ? 'Scan to Connect on WeChat' : '扫码添加微信'}</p>
              <div className="w-24 h-24 bg-white border-2 border-gray-200 rounded flex items-center justify-center">
                <img src="https://cdn.cdnlogo.com/logos/w/79/wechat.svg" alt="WeChat QR" className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center text-xs text-gray-500">
          <p className="mb-2">{t.footer.disclosure}</p>
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [language, setLanguage] = useState('en');
  
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navigation language={language} setLanguage={setLanguage} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/overview" element={<Overview language={language} />} />
            <Route path="/services" element={<Services language={language} />} />
            <Route path="/asset-management" element={<AssetManagement language={language} />} />
            <Route path="/team" element={<Team language={language} />} />
            <Route path="/office" element={<Office language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
            <Route path="*" element={<Home language={language} />} />
          </Routes>
        </main>
        <Footer language={language} />
      </div>
    </Router>
  );
}