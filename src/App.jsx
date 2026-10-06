import React, { useState } from 'react';
import './styles/variables.css';
import './styles/global.css';
import './styles/layout.css';
import './styles/pages.css';
import './styles/components.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import RequestQuoteModal from './components/common/RequestQuoteModal';
import SearchOverlay from './components/common/SearchOverlay';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  // Global 60fps on-scroll reveal engine
  useScrollReveal();

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

  return (
    <div className="compo-app-root">
      {/* Navigation Header */}
      <Navbar 
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenSearch={() => handleOpenSearchWithQuery('')}
      />

      {/* Main Home View */}
      <HomePage 
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenSearch={() => handleOpenSearchWithQuery('')}
        onSearchSubmit={(q) => handleOpenSearchWithQuery(q)}
      />

      {/* Footer */}
      <Footer 
        onOpenQuote={() => setIsQuoteOpen(true)}
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
