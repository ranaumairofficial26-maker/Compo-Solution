import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Radio, 
  Cable, 
  Sun, 
  ToggleRight,
  CheckCircle2, 
  Zap, 
  Award, 
  Globe2, 
  Activity, 
  FileCheck,
  Building2,
  Lock,
  Sparkles,
  Truck,
  Users,
  FileText,
  Mail,
  BarChart3,
  CircleDot,
  Plane,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import ValueProps from '../components/common/ValueProps';
import BrandLogos from '../components/common/BrandLogos';
import AnimatedNumber from '../components/common/AnimatedNumber';
import useScrollReveal from '../hooks/useScrollReveal';
import { productCategories, testingProcedures, qualityCertifications, industrySolutions } from '../data/mockData';

export default function HomePage({ onOpenQuote, onOpenSearch, onSearchSubmit }) {
  // Activate silky 60fps on-scroll reveal animations
  useScrollReveal();

  const [heroSearchInput, setHeroSearchInput] = useState('');
  const [activeSlide, setActiveSlide] = useState(0);

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

  const categoryIcons = {
    semiconductors: Cpu,
    passive: Layers,
    electromechanical: ToggleRight,
    connectors: Cable,
    optoelectronics: Sun,
    sensors: Radio
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
                fill="#f0f7ff" 
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
          
          <div className="compo-what-we-do-header reveal-on-scroll">
            <div className="compo-what-we-do-tag">WHAT COMPO DOES</div>
            <h2 className="compo-what-we-do-title">More Than Component Supply</h2>
            <p className="compo-what-we-do-desc">
              We connect products, suppliers, industries and global markets.
            </p>
          </div>

          <div className="compo-what-we-do-grid reveal-stagger">
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
            <path d="M0,48 C480,0 960,0 1440,48 L1440,0 L0,0 Z" fill="#edf5fc" />
          </svg>
        </div>

        <div className="compo-container compo-why-container">
          
          <div className="compo-why-header text-center reveal-on-scroll">
            <div className="compo-why-tag">WHY COMPO</div>
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
                   <strong style={{ color: '#00f0ff', fontWeight: 700 }}><AnimatedNumber value="21+" /></strong> years of excellence in IC trading, backed by <strong style={{ color: '#00f0ff', fontWeight: 700 }}><AnimatedNumber value="300+" /></strong> professionals committed to driving global impact.
                 </p>
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Wave Curve */}
        <div className="compo-why-curve-bottom">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 C480,48 960,48 1440,0 L1440,48 L0,48 Z" fill="#edf6fd" />
          </svg>
        </div>
      </section>

      {/* =========================================================================
          ZERO DEFECT POLICY - IN-HOUSE ANTI-COUNTERFEIT INSPECTION LAB
         ========================================================================= */}
      <section className="compo-section compo-quality-section" id="quality">
        <div className="compo-container">
          
          <div className="compo-section-header text-center reveal-on-scroll">
            <div className="compo-section-tag">ZERO DEFECT POLICY</div>
            <h2 className="compo-section-title">In-House Anti-Counterfeit Inspection Lab</h2>
            <p className="compo-section-desc max-w-2xl mx-auto">
              Every single batch undergoes rigorous 4-step authentication and parametric testing to guarantee 100% genuine parts.
            </p>
          </div>

          {/* 4-Step Testing Process */}
          <div className="compo-testing-grid reveal-stagger">
            {testingProcedures.map((proc, index) => (
              <div key={index} className="compo-testing-card">
                <div className="compo-step-number">
                  <AnimatedNumber value={index + 1} prefix="0" />
                </div>
                <h4 className="compo-step-title">{proc.title}</h4>
                <p className="compo-step-desc">{proc.desc}</p>
                <div className="compo-step-indicator"></div>
              </div>
            ))}
          </div>


          {/* =========================================================================
              LAB TESTING & QA PROTOCOLS SHOWCASE (MATCHES SCREENSHOT)
             ========================================================================= */}
          <div className="compo-lab-protocols-wrap">
            <div className="compo-lab-header-wrap text-center reveal-on-scroll">
              <h3 className="compo-lab-main-title">LAB TESTING & QA PROTOCOLS</h3>
              <p className="compo-lab-main-desc">
                Advanced metallurgical, optical, and radiographic inspection facilities ensuring zero-defect semiconductor distribution.
              </p>
            </div>

            <div className="compo-lab-grid reveal-stagger">
              {/* Card 1 */}
              <div className="compo-lab-card">
                <div className="compo-lab-img-box">
                  <img src="/lab/lab-xray.jpg" alt="X-Ray Inspection" className="compo-lab-img" />
                  <div className="compo-lab-badge">2D/3D Radiography</div>
                </div>
                <div className="compo-lab-card-body">
                  <h4 className="compo-lab-card-title">X-Ray Inspection</h4>
                  <p className="compo-lab-card-desc">
                    High-resolution real-time X-ray inspection for internal bond wires, die integrity, void detection, and leadframe consistency.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="compo-lab-card">
                <div className="compo-lab-img-box">
                  <img src="/lab/lab-decapsulation.jpg" alt="Decapsulation & Die Analysis" className="compo-lab-img" />
                  <div className="compo-lab-badge">Die Verification</div>
                </div>
                <div className="compo-lab-card-body">
                  <h4 className="compo-lab-card-title">Decapsulation & Die Analysis</h4>
                  <p className="compo-lab-card-desc">
                    Chemical and laser decapsulation to verify authentic manufacturer logos, mask codes, and wafer die markings.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="compo-lab-card">
                <div className="compo-lab-img-box">
                  <img src="/lab/lab-chemical.jpg" alt="Heated Chemical & Surface Testing" className="compo-lab-img" />
                  <div className="compo-lab-badge">Anti-Counterfeit</div>
                </div>
                <div className="compo-lab-card-body">
                  <h4 className="compo-lab-card-title">Decapsulation & Chemical Testing</h4>
                  <p className="compo-lab-card-desc">
                    Solvent and scraping tests to detect package sanding, remarking, blacktopping, and counterfeit top-coating.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="compo-lab-card">
                <div className="compo-lab-img-box">
                  <img src="/lab/lab-functional.jpg" alt="Functional Parameter Testing" className="compo-lab-img" />
                  <div className="compo-lab-badge">Electrical QA</div>
                </div>
                <div className="compo-lab-card-body">
                  <h4 className="compo-lab-card-title">Functional Parameter Testing</h4>
                  <p className="compo-lab-card-desc">
                    Full electrical characterization, pin threshold voltage, and timing measurements against original datasheets.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="compo-lab-card">
                <div className="compo-lab-img-box">
                  <img src="/lab/lab-solderability.jpg" alt="Solderability & Pin Analysis" className="compo-lab-img" />
                  <div className="compo-lab-badge">Solder Integrity</div>
                </div>
                <div className="compo-lab-card-body">
                  <h4 className="compo-lab-card-title">Solderability & Pin Analysis</h4>
                  <p className="compo-lab-card-desc">
                    Dip and look solderability testing to verify pin coplanarity, lead oxidation, and reliable solder wettability.
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="compo-lab-card">
                <div className="compo-lab-img-box">
                  <img src="/lab/lab-visual.jpg" alt="Visual & Optical Microscopy" className="compo-lab-img" />
                  <div className="compo-lab-badge">Optical QA</div>
                </div>
                <div className="compo-lab-card-body">
                  <h4 className="compo-lab-card-title">Visual & Optical Microscopy</h4>
                  <p className="compo-lab-card-desc">
                    High-magnification digital microscope inspection for packaging integrity, pin condition, and laser marking verification.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
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
