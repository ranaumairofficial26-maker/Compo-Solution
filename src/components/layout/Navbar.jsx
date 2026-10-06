import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ChevronDown, 
  Menu, 
  X, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Activity, 
  PhoneCall, 
  FileText,
  Radio,
  Cable,
  Factory,
  Car,
  Wifi,
  Sparkles
} from 'lucide-react';

import Logo from '../common/Logo';

export default function Navbar({ onOpenQuote, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Home', 
      href: '#', 
      active: true 
    },
    { 
      name: 'Products', 
      hasDropdown: true,
      items: [
        { label: 'Semiconductors & ICs', desc: 'MCUs, DSPs, Memory, Power ICs', icon: Cpu },
        { label: 'Passive Components', desc: 'High-Q MLCCs, Resistors, Inductors', icon: Layers },
        { label: 'Connectors & Interconnect', desc: 'Automotive, Headers, Terminal blocks', icon: Cable },
        { label: 'Sensors & Transducers', desc: 'Pressure, MEMS, Thermal, Gas sensors', icon: Radio },
      ]
    },
    { 
      name: 'About Us', 
      hasDropdown: true,
      items: [
        { label: 'Company Overview', desc: 'Our heritage, mission, and vision', icon: ShieldCheck },
        { label: 'Global Offices & Hubs', desc: 'Hong Kong, Shenzhen, Singapore & Europe', icon: Wifi },
      ]
    },
    { 
      name: 'Quality', 
      hasDropdown: true,
      items: [
        { label: 'Quality Assurance System', desc: 'ISO 9001 & AS9120 Certified process', icon: ShieldCheck },
        { label: 'Testing Lab & Inspection', desc: '3-tier Anti-Counterfeit Verification', icon: Activity },
      ]
    },
    { 
      name: 'Insights', 
      hasDropdown: true,
      items: [
        { label: 'Market Intelligence Reports', desc: 'Lead time trends & price analysis', icon: FileText },
        { label: 'Industry Articles & News', desc: 'Semiconductor supply chain insights', icon: Sparkles },
      ]
    }
  ];

  return (
    <header className={`compo-navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="compo-navbar-container">
        
        {/* LOGO */}
        <a href="#" className="compo-logo" aria-label="COMPO Electronics Home">
          <Logo variant="white" />
        </a>

        {/* DESKTOP NAVIGATION MENU */}
        <nav className="compo-nav-desktop" aria-label="Main Navigation">
          <ul className="compo-nav-list">
            {navLinks.map((item, idx) => (
              <li 
                key={idx} 
                className={`compo-nav-item ${item.hasDropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={item.href || '#'} 
                  className={`compo-nav-link ${item.active ? 'active' : ''}`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown size={14} className="compo-dropdown-chevron" />
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="compo-dropdown-menu">
                    <div className="compo-dropdown-grid">
                      {item.items.map((sub, sIdx) => {
                        const IconComponent = sub.icon;
                        return (
                          <a key={sIdx} href="#" className="compo-dropdown-item">
                            <div className="compo-dropdown-icon">
                              <IconComponent size={18} />
                            </div>
                            <div className="compo-dropdown-text">
                              <div className="compo-dropdown-title">{sub.label}</div>
                              <div className="compo-dropdown-desc">{sub.desc}</div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* HEADER ACTIONS */}
        <div className="compo-nav-actions">
          {/* Search Trigger Button */}
          <button 
            className="compo-search-trigger" 
            onClick={onOpenSearch} 
            title="Search Components"
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          {/* Contact Us Button */}
          <a href="#contact" className="compo-btn compo-btn-outline">
            Contact Us
          </a>

          {/* Request a Quote Button */}
          <button 
            className="compo-btn compo-btn-primary"
            onClick={onOpenQuote}
          >
            Request a Quote
          </button>

          {/* Mobile Menu Hamburger */}
          <button 
            className="compo-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* MOBILE NAV DRAWER */}
      {mobileMenuOpen && (
        <div className="compo-mobile-drawer">
          <div className="compo-mobile-nav">
            {navLinks.map((item, idx) => (
              <div key={idx} className="compo-mobile-nav-group">
                <a 
                  href="#" 
                  className={`compo-mobile-nav-link ${item.active ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </div>
            ))}
            <div className="compo-mobile-actions">
              <button 
                className="compo-btn compo-btn-outline w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
              >
                Search Part Numbers
              </button>
              <button 
                className="compo-btn compo-btn-primary w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
