import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Zap, 
  Award, 
  Globe2, 
  Activity, 
  Truck, 
  Users, 
  FileText, 
  Mail, 
  BarChart3, 
  CircleDot
} from 'lucide-react';

import ValueProps from '../components/common/ValueProps';
import BrandLogos from '../components/common/BrandLogos';
import AnimatedNumber from '../components/common/AnimatedNumber';
import useScrollReveal from '../hooks/useScrollReveal';
import ServerPartsSection from '../components/home/ServerPartsSection';
import BusinessModelsSection from '../components/home/BusinessModelsSection';
import MainBusinessPillars from '../components/home/MainBusinessPillars';
import QualityControlSystem from '../components/home/QualityControlSystem';
import CompanyMilestonesTimeline from '../components/home/CompanyMilestonesTimeline';

export default function HomePage({ onOpenQuote, onOpenSearch, onSearchSubmit }) {
  // Activate silky 60fps on-scroll reveal animations
  useScrollReveal();

  const [heroSearchInput, setHeroSearchInput] = useState('');
  const [activeSlide, setActiveSlide] = useState(0);
  const industryVideoRef = useRef(null);

  // Auto-pause video when scrolled away / auto-resume when in view
  useEffect(() => {
    const videoEl = industryVideoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = videoEl.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
          } else {
            videoEl.pause();
          }
        });
      },
      {
        threshold: 0.2 // Pauses as soon as video scrolls out of view
      }
    );

    observer.observe(videoEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  const heroSlides = [
    {
      id: 'sourcing',
      bgImage: '/hero-bg-1.jpg',
      eyebrow: 'GLOBAL ELECTRONIC COMPONENT SOURCING',
      title1: 'Global Electronic',
      title2: 'Component Sourcing.',
      highlight: 'Built on Trust.',
      description: 'Reliable sourcing, quality assurance, and supply solutions for global industries.'
    },
    {
      id: 'semiconductor-wafer',
      bgImage: '/hero-bg-2.jpg',
      eyebrow: 'ADVANCED SEMICONDUCTOR & SILICON SOURCING',
      title1: 'Semiconductor Wafer &',
      title2: 'Silicon Inventory.',
      highlight: 'Direct OEM Traceability.',
      description: 'AEC-Q100 qualified microcontrollers, ICs, and silicon components ready for immediate dispatch.'
    },
    {
      id: 'verification-lab',
      bgImage: '/hero-bg-3.jpg',
      eyebrow: '100% VERIFIED AUTHENTIC TESTING LABS',
      title1: '100% Verified',
      title2: 'Original Components.',
      highlight: 'Guaranteed Quality.',
      description: 'In-house Decapsulation, X-Ray & Electrical Testing Labs for zero-defect assurance.'
    }
  ];

  // Automatic slide rotation every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const currentSlide = heroSlides[activeSlide];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(heroSearchInput);
    } else {
      onOpenSearch();
    }
  };

  return (
    <main className="compo-home-page">
      
      {/* =========================================================================
          HERO SECTION (SMOOTH CROSSFADE & STAGGERED CINEMATIC ANIMATIONS)
         ========================================================================= */}
      <section className="compo-hero-section">
        
        {/* Multi-image Crossfading Backgrounds */}
        <div className="compo-hero-bg-wrapper">
          {heroSlides.map((slide, idx) => (
            <img 
              key={slide.id}
              src={slide.bgImage} 
              alt={slide.title1} 
              className={`compo-hero-bg-img ${activeSlide === idx ? 'active' : ''}`}
            />
          ))}
          <div className="compo-hero-overlay"></div>
        </div>

        {/* Hero Content Container */}
        <div className="compo-hero-container">
          <div className="compo-hero-content" key={`slide-content-${activeSlide}`}>
            
            {/* Top Eyebrow Tag with pulsing dot */}
            <div className="compo-hero-eyebrow animate-hero-eyebrow">
              <span>{currentSlide.eyebrow}</span>
            </div>

            {/* Main Headline - Staggered lines */}
            <h1 className="compo-hero-heading">
              <span className="compo-hero-line animate-hero-line-1">{currentSlide.title1}</span>
              <span className="compo-hero-line animate-hero-line-2">{currentSlide.title2}</span>
              <span className="compo-hero-highlight animate-hero-highlight">{currentSlide.highlight}</span>
            </h1>

            {/* Description Subtitle */}
            <p className="compo-hero-desc animate-hero-desc">
              {currentSlide.description}
            </p>

            {/* Hero Search Bar */}
            <form className="compo-hero-search-form animate-hero-form" onSubmit={handleSearchSubmit}>
              <div className="compo-hero-search-input-wrap">
                <input 
                  type="text" 
                  className="compo-hero-search-input"
                  placeholder="Search by Part Number, Manufacturer, or Component..."
                  value={heroSearchInput}
                  onChange={(e) => setHeroSearchInput(e.target.value)}
                />
                <button 
                  type="submit" 
                  className="compo-hero-search-btn"
                  aria-label="Submit Search"
                >
                  <Search size={18} />
                </button>
              </div>
            </form>

            {/* Action Buttons & Slide Indicators */}
            <div className="compo-hero-actions-row animate-hero-actions">
              <div className="compo-hero-actions">
                <button 
                  className="compo-btn compo-btn-primary compo-hero-btn-quote"
                  onClick={onOpenQuote}
                >
                  Request a Quote <ArrowRight size={16} />
                </button>
                
                <a href="#products" className="compo-btn compo-btn-glass compo-hero-btn-explore">
                  Explore Solutions <ArrowRight size={16} />
                </a>
              </div>

              {/* Slide Indicator Pills */}
              <div className="compo-hero-indicators">
                {heroSlides.map((slide, idx) => (
                  <button 
                    key={slide.id}
                    className={`compo-hero-dot ${activeSlide === idx ? 'active' : ''}`}
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <span className="compo-dot-inner"></span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 4 Bottom Value Proposition Badges */}
        <div className="compo-hero-bottom-bar">
          <div className="compo-hero-bottom-container">
            <ValueProps />
          </div>
          
          {/* Elegant Curved Wave Transition to Brands Section */}
          <div className="compo-hero-bottom-curve">
            <svg 
              viewBox="0 0 1440 54" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              preserveAspectRatio="none"
              className="compo-curve-svg"
            >
              <path 
                d="M0,0 C380,54 1060,54 1440,0 L1440,54 L0,54 Z" 
                fill="#dbeafe" 
              />
            </svg>
          </div>
        </div>

      </section>

      {/* =========================================================================
          BRAND LOGOS STRIP (MATCHES SCREENSHOT)
         ========================================================================= */}
      <BrandLogos />

      {/* =========================================================================
          WHAT COMPO DOES - MORE THAN COMPONENT SUPPLY SECTION (MATCHES SCREENSHOT)
         ========================================================================= */}
      <section className="compo-section compo-what-we-do-section" id="products">
        <div className="compo-container">
          
          {/* 2-Column Industry Spotlight: Left Story & Right Live Cleanroom/SMT Video */}
          <div className="compo-industry-spotlight reveal-on-scroll">
            
            {/* Left Column: Industry Text & Highlights */}
            <div className="compo-industry-text-col">
              <div className="compo-what-we-do-tag">
                <span className="compo-tag-live-dot" aria-hidden="true"></span>
                <span>WHAT COMPO DOES • GLOBAL ELECTRONICS SUPPLY</span>
              </div>
              
              <h2 className="compo-what-we-do-title">
                Independent Electronic Distribution — <span className="compo-title-highlight-dark">Powering Global Tech</span>
              </h2>

              <p className="compo-industry-lead-text">
                Compo Electronics Inc. is a leader in the independent electronic distribution sector. We serve OEMs and contract manufacturers on a worldwide basis. Our clientele includes top-level EMS &amp; OEM accounts.
              </p>

              <p className="compo-industry-sub-text">
                With a strong emphasis on serving world-class customers with expertise and efficiency, we specialize in allocated and hard-to-find semiconductors and integrated circuits. We stock a broad line of devices and source millions of products through our established worldwide network. The quality of our parts, the value that we provide, and the service that we deliver, help to make us a partner for life with our customers. We think one-step ahead for you!
              </p>

              {/* 4 Quick Industry Badges */}
              <div className="compo-industry-badges-grid">
                <div className="compo-ind-badge-item">
                  <ShieldCheck size={16} className="text-cyan-600" />
                  <span>100% Traceability &amp; CoC Reports</span>
                </div>
                <div className="compo-ind-badge-item">
                  <Award size={16} className="text-emerald-600" />
                  <span>ISO 9001 &amp; AS9120B QA Lab</span>
                </div>
                <div className="compo-ind-badge-item">
                  <Zap size={16} className="text-amber-600" />
                  <span>2-4h Rapid BOM Cost Valuation</span>
                </div>
                <div className="compo-ind-badge-item">
                  <Globe2 size={16} className="text-blue-600" />
                  <span>5,000+ Verified Global Partners</span>
                </div>
              </div>

              {/* CTA Row */}
              <div className="compo-industry-cta-row">
                <button 
                  className="compo-btn compo-btn-primary compo-btn-glow"
                  onClick={onOpenQuote}
                >
                  <span>Request Component Sourcing</span>
                  <ArrowRight size={16} />
                </button>
                <a href="#services-grid" className="compo-btn compo-btn-glass-subtle">
                  <span>Explore Capabilities</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* Right Column: High-Tech Video Showcase Card */}
            <div className="compo-industry-video-col">
              <div className="compo-video-showcase-card">
                
                {/* HUD Top Bar */}
                <div className="compo-video-hud-header">
                  <div className="compo-video-status">
                    <span className="compo-video-rec-dot"></span>
                    <span className="compo-video-rec-text">LIVE LAB FEED: CLEANROOM &amp; SMT TESTING</span>
                  </div>
                  <span className="compo-video-quality-tag">4K UHD • 60 FPS</span>
                </div>

                {/* Video Container with Responsive 16:9 Aspect Ratio */}
                <div className="compo-video-frame-wrap">
                  <video 
                    ref={industryVideoRef}
                    className="compo-industry-video-player"
                    src="/compo-Video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="auto"
                  >
                    Your browser does not support the video tag.
                  </video>

                  {/* High-Tech Cyber Corner Accents */}
                  <div className="compo-cyber-corner top-left"></div>
                  <div className="compo-cyber-corner top-right"></div>
                  <div className="compo-cyber-corner bottom-left"></div>
                  <div className="compo-cyber-corner bottom-right"></div>
                </div>

                {/* Video Info Footer */}
                <div className="compo-video-hud-footer">
                  <div className="compo-video-desc-wrap">
                    <div className="compo-video-title-row">
                      <Activity size={16} className="text-cyan-400" />
                      <h4 className="compo-video-title">COMPO Advanced Fabrication &amp; Parametric Testing</h4>
                    </div>
                    <p className="compo-video-subtitle">
                      Automated Optical Inspection (AOI) • X-Ray Die Verification • Decapsulation &amp; Solderability
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className="compo-what-we-do-grid reveal-stagger" id="services-grid">
            {/* Card 1: Component Sourcing */}
            <div className="compo-what-card">
              <div className="compo-what-card-top">
                <div className="compo-what-icon-wrap">
                  <Cpu size={28} />
                </div>
                <h3 className="compo-what-card-title">Component Sourcing</h3>
                <p className="compo-what-card-desc">
                  Find the components your business needs through our global supply network.
                </p>
              </div>
              <a href="#quote" className="compo-what-card-link" onClick={(e) => { e.preventDefault(); onOpenQuote(); }}>
                Explore Sourcing <ArrowRight size={15} />
              </a>
            </div>

            {/* Card 2: Supply Solutions */}
            <div className="compo-what-card">
              <div className="compo-what-card-top">
                <div className="compo-what-icon-wrap">
                  <Truck size={28} />
                </div>
                <h3 className="compo-what-card-title">Supply Solutions</h3>
                <p className="compo-what-card-desc">
                  Support your procurement requirements with reliable sourcing and delivery.
                </p>
              </div>
              <a href="#quote" className="compo-what-card-link" onClick={(e) => { e.preventDefault(); onOpenQuote(); }}>
                Explore Solutions <ArrowRight size={15} />
              </a>
            </div>

            {/* Card 3: Quality Assurance */}
            <div className="compo-what-card">
              <div className="compo-what-card-top">
                <div className="compo-what-icon-wrap">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="compo-what-card-title">Quality Assurance</h3>
                <p className="compo-what-card-desc">
                  Focus on component authenticity, quality and reliable supply.
                </p>
              </div>
              <a href="#quality" className="compo-what-card-link">
                Our Quality <ArrowRight size={15} />
              </a>
            </div>

            {/* Card 4: Global Supply Network */}
            <div className="compo-what-card">
              <div className="compo-what-card-top">
                <div className="compo-what-icon-wrap">
                  <Globe2 size={28} />
                </div>
                <h3 className="compo-what-card-title">Global Supply Network</h3>
                <p className="compo-what-card-desc">
                  Connect with suppliers and markets across multiple regions.
                </p>
              </div>
              <a href="#quote" className="compo-what-card-link" onClick={(e) => { e.preventDefault(); onOpenQuote(); }}>
                Our Network <ArrowRight size={15} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          WHY COMPO SECTION (MATCHES SCREENSHOT)
         ========================================================================= */}
      <section className="compo-why-section" id="about">
        {/* Background Image / Overlay with glowing fiber-optic tech waves */}
        <div className="compo-why-bg-wrapper">
          <img src="/why-compo-bg.jpg" alt="Why COMPO Background" className="compo-why-bg-img" />
          <div className="compo-why-overlay"></div>
        </div>

        {/* Top Wave Curve */}
        <div className="compo-why-curve-top">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,48 C480,0 960,0 1440,48 L1440,0 L0,0 Z" fill="#ffffff" />
          </svg>
        </div>

        <div className="compo-container compo-why-container">
          
          <div className="compo-why-header text-center reveal-on-scroll">
            <h2 className="compo-why-title">Why <span className="compo-why-title-accent">COMPO</span></h2>
            <p className="compo-why-desc">
              Compo Electronics delivers high-quality semiconductor products and reliable services, empowering global industries through expertise, integrity, and long-term partnerships.
            </p>
          </div>

          <div className="compo-why-slider-wrapper">
            <div className="compo-why-grid reveal-stagger">
              {/* Card 1 */}
              <div className="compo-why-card">
                <div className="compo-why-icon-wrap">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="compo-why-card-title">Quality You Can Rely On</h3>
                <p className="compo-why-card-desc">
                  Authentic products with rigorous quality management to ensure reliability and performance.
                </p>
              </div>

              {/* Card 2 */}
              <div className="compo-why-card">
                 <div className="compo-why-icon-wrap">
                   <Globe2 size={28} />
                 </div>
                 <h3 className="compo-why-card-title">Global Reach</h3>
                 <p className="compo-why-card-desc">
                   A strong network of <strong style={{ color: '#00f0ff', fontWeight: 700 }}><AnimatedNumber value="5,000+" /></strong> trusted suppliers and customers worldwide, ensuring competitive pricing and consistent supply.
                 </p>
               </div>

               {/* Card 3 */}
               <div className="compo-why-card">
                 <div className="compo-why-icon-wrap">
                   <Users size={28} />
                 </div>
                 <h3 className="compo-why-card-title">Proven Semiconductor Expertise</h3>
                 <p className="compo-why-card-desc">
                   <strong style={{ color: '#00f0ff', fontWeight: 700 }}><AnimatedNumber value="23+" /></strong> years of excellence in IC distribution, backed by <strong style={{ color: '#00f0ff', fontWeight: 700 }}><AnimatedNumber value="200+" /></strong> professionals committed to driving global impact.
                 </p>
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Wave Curve */}
        <div className="compo-why-curve-bottom">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 C480,48 960,48 1440,0 L1440,48 L0,48 Z" fill="#030c22" />
          </svg>
        </div>
      </section>

      {/* =========================================================================
          MAIN BUSINESS SERVICES (SLIDE 05 - 6 CORE PILLARS)
         ========================================================================= */}
      <MainBusinessPillars onOpenQuote={onOpenQuote} />

      {/* =========================================================================
          SERVER PARTS (CPU, MEMORY, SSD, HDD, GPU, NIC)
         ========================================================================= */}
      <ServerPartsSection 
        onOpenQuote={onOpenQuote} 
        onOpenSearch={onOpenSearch} 
      />

      {/* =========================================================================
          EXCESS & PPV BUSINESS MODELS
         ========================================================================= */}
      <BusinessModelsSection 
        onOpenQuote={onOpenQuote} 
      />

      {/* =========================================================================
          QUALITY CONTROL SYSTEM (SLIDES 03, 09, 10, 11, 12)
         ========================================================================= */}
      <QualityControlSystem 
        onOpenQuote={onOpenQuote} 
      />

      {/* =========================================================================
          COMPANY OVERVIEW & HISTORICAL MILESTONES (SLIDES 02, 04)
         ========================================================================= */}
      <CompanyMilestonesTimeline 
        onOpenQuote={onOpenQuote} 
      />

      {/* =========================================================================
          INDUSTRIES WE SERVE SECTION (MATCHES SCREENSHOT)
         ========================================================================= */}
      <section className="compo-section compo-industries-section" id="industries">
        <div className="compo-container">
          
          <div className="compo-industries-header reveal-on-scroll">
            <div className="compo-industries-tag">INDUSTRIES</div>
            <h2 className="compo-industries-title">Industries we serve</h2>
          </div>

          <div className="compo-industries-grid reveal-stagger">
            {[
              { id: 'aerospace', name: 'Aerospace and Defense', icon: Search },
              { id: 'automation', name: 'Automation', icon: FileText },
              { id: 'automotive', name: 'Automotive', icon: Mail },
              { id: 'computing', name: 'Computing', icon: BarChart3 },
              { id: 'consumer', name: 'Consumer Electronics', icon: CheckCircle2 },
              { id: 'datacenter', name: 'Data Center', icon: CircleDot },
              { id: 'iot', name: 'IoT', icon: Search },
              { id: 'medical', name: 'Medical', icon: FileText },
              { id: 'telecom', name: 'Telecom', icon: Mail },
              { id: 'industrial', name: 'Industrial', icon: BarChart3 },
              { id: 'energy', name: 'Energy', icon: CheckCircle2 },
              { id: 'other', name: 'Custom Applications', icon: CircleDot },
            ].map((ind) => {
              const IconComponent = ind.icon;
              return (
                <div 
                  key={ind.id} 
                  className="compo-industry-card"
                  onClick={() => onOpenQuote()}
                >
                  <div className="compo-ind-icon-box">
                    <IconComponent size={22} />
                  </div>
                  <span className="compo-ind-name">{ind.name}</span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}
