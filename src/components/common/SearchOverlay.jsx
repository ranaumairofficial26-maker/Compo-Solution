import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Cpu, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { searchSuggestions } from '../../data/mockData';

export default function SearchOverlay({ isOpen, onClose, initialQuery = '', onSelectPart }) {
  const [query, setQuery] = useState(initialQuery);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 100);
    }
  }, [isOpen, initialQuery]);

  if (!isOpen) return null;

  const filteredResults = query.trim() === '' 
    ? searchSuggestions 
    : searchSuggestions.filter(item => 
        item.partNumber.toLowerCase().includes(query.toLowerCase()) ||
        item.mfg.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="compo-search-overlay-backdrop" onClick={onClose}>
      <div className="compo-search-overlay-box" onClick={(e) => e.stopPropagation()}>
        
        {/* Search Input Box */}
        <div className="compo-search-bar-inner">
          <Search size={22} className="compo-search-icon" />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Enter Part Number, Manufacturer (e.g. ST, TI, Nexperia) or Keyword..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="compo-search-clear" onClick={() => setQuery('')}>
              <X size={16} />
            </button>
          )}
          <button className="compo-btn compo-btn-primary compo-search-submit">
            Search
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="compo-search-quick-tags">
          <span className="text-secondary text-xs">Popular searches:</span>
          {['STM32', 'ESP32', 'LM2596', 'MOSFET', 'Relays', 'BME280'].map((tag) => (
            <button 
              key={tag} 
              className="compo-search-tag-chip"
              onClick={() => setQuery(tag)}
            >
              <Zap size={11} />
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="compo-search-results-container">
          <div className="compo-search-results-header">
            <span>{filteredResults.length} Components Available in Real-Time Stock</span>
            <span className="compo-verified-badge">
              <ShieldCheck size={13} />
              Traceable Stock
            </span>
          </div>

          <div className="compo-search-list">
            {filteredResults.length > 0 ? (
              filteredResults.map((item, idx) => (
                <div 
                  key={idx} 
                  className="compo-search-item"
                  onClick={() => {
                    if (onSelectPart) onSelectPart(item);
                    onClose();
                  }}
                >
                  <div className="compo-search-item-left">
                    <div className="compo-part-icon">
                      <Cpu size={20} />
                    </div>
                    <div>
                      <div className="compo-part-header">
                        <span className="compo-part-name">{item.partNumber}</span>
                        <span className="compo-part-mfg">{item.mfg}</span>
                      </div>
                      <div className="compo-part-desc">{item.desc}</div>
                    </div>
                  </div>

                  <div className="compo-search-item-right">
                    <span className="compo-part-stock">{item.stock}</span>
                    <span className="compo-part-price">{item.price} / pc</span>
                    <button className="compo-btn-quote-sm">
                      Quote <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="compo-search-empty">
                <p>No direct match found for "{query}".</p>
                <p className="text-sm text-secondary">Our global sourcing team can source this obsolete or shortage component for you directly from certified distributors.</p>
                <button 
                  className="compo-btn compo-btn-primary mt-3"
                  onClick={() => {
                    onClose();
                    if (onSelectPart) onSelectPart({ partNumber: query });
                  }}
                >
                  Submit Custom RFQ for "{query}"
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
