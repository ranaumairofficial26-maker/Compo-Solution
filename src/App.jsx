import React, { useState } from 'react';
import './styles/variables.css';
import './styles/global.css';
import './styles/layout.css';
import './styles/pages.css';
import './styles/components.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import RequestQuoteModal from './components/common/RequestQuoteModal';
import SearchOverlay from './components/common/SearchOverlay';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'team'
  
  // Global 60fps on-scroll reveal engine reacting to page switches
  useScrollReveal([currentPage]);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenSearchWithQuery = (query = '') => {
    setSearchQuery(query);
    setIsSearchOpen(true);
  };

  const handleSelectPartForQuote = (part) => {
    setIsQuoteOpen(true);
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="compo-app-root">
      {/* Navigation Header */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenSearch={() => handleOpenSearchWithQuery('')}
      />

      {/* Dynamic View: Home or Team Page */}
      {currentPage === 'team' ? (
        <TeamPage 
          onOpenQuote={() => setIsQuoteOpen(true)}
          onOpenSearch={() => handleOpenSearchWithQuery('')}
        />
      ) : (
        <HomePage 
          onOpenQuote={() => setIsQuoteOpen(true)}
          onOpenSearch={() => handleOpenSearchWithQuery('')}
          onSearchSubmit={(q) => handleOpenSearchWithQuery(q)}
        />
      )}

      {/* Footer */}
      <Footer 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenSearch={() => handleOpenSearchWithQuery('')}
      />

      {/* Interactive RFQ Modal */}
      <RequestQuoteModal 
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      {/* Live Component Search Overlay */}
      <SearchOverlay 
        isOpen={isSearchOpen}
        initialQuery={searchQuery}
        onClose={() => setIsSearchOpen(false)}
        onSelectPart={handleSelectPartForQuote}
      />
    </div>
  );
}
