import React, { useState, useRef } from 'react';
import { 
  Calendar, 
  Award, 
  Building2, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight,
  TrendingUp,
  Globe2,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Layers,
  Target,
  Eye,
  Briefcase,
  Cpu,
  Truck,
  FileCheck
} from 'lucide-react';
import { companyMilestones, companyOverviewStats } from '../../data/compoCorporateData';
import AnimatedNumber from '../common/AnimatedNumber';

const iconMap = {
  Building2: Building2,
  Globe2: Globe2,
  TrendingUp: TrendingUp,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Award: Award,
  Zap: Zap,
  Layers: Layers
};

export default function CompanyMilestonesTimeline({ onOpenQuote }) {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [activeEra, setActiveEra] = useState('all');
  const trackRef = useRef(null);

  const eras = [
    { id: 'all', label: 'All Milestones (2003–2026)' },
    { id: 'foundation', label: '2003–2008: Foundation', start: 2003, end: 2008 },
    { id: 'mna', label: '2009–2018: Strategic M&A', start: 2009, end: 2018 },
    { id: 'franchised', label: '2019–2023: Global Franchised', start: 2019, end: 2023 },
    { id: 'nextgen', label: '2024–2026: Semiconductor Next-Gen', start: 2024, end: 2026 }
  ];

  const filteredMilestones = companyMilestones.filter(m => {
    if (activeEra === 'all') return true;
    const era = eras.find(e => e.id === activeEra);
    const yr = parseInt(m.year, 10);
    return yr >= era.start && yr <= era.end;
  });

  const currentIndex = companyMilestones.findIndex(m => m.year === selectedYear);
  const activeMilestone = companyMilestones[currentIndex !== -1 ? currentIndex : companyMilestones.length - 1];
  const ActiveIcon = iconMap[activeMilestone.icon] || Sparkles;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedYear(companyMilestones[currentIndex - 1].year);
    }
  };

  const handleNext = () => {
    if (currentIndex < companyMilestones.length - 1) {
      setSelectedYear(companyMilestones[currentIndex + 1].year);
    }
  };

  const scrollTrack = (direction) => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const commitments = [
    {
      title: 'Comprehensive Product Portfolio',
      desc: 'Offering a wide range of components, including Integrated Circuits (ICs), Relays, Switches, MOSFETs, and more.',
      icon: Cpu,
      badge: 'Extensive Inventory',
      color: 'cyan'
    },
    {
      title: 'Industry Expertise',
      desc: 'Deep knowledge and experience in various industries, such as automotive, power, healthcare, and new energy.',
      icon: Briefcase,
      badge: '20+ Years Know-How',
      color: 'blue'
    },
    {
      title: 'Robust Supply Chain',
      desc: 'A reliable supply chain network to ensure timely delivery of components.',
      icon: Truck,
      badge: '99.5% On-Time',
      color: 'emerald'
    },
    {
      title: 'Value Added Services',
      desc: 'Value added services like spot buying, obsolete part procurement, and BOM optimization.',
      icon: Zap,
      badge: 'Full Turnkey',
      color: 'amber'
    },
    {
      title: 'Global Reach',
      desc: 'A global presence with offices and warehouses strategically located worldwide.',
      icon: Globe2,
      badge: '5,000+ Partners',
      color: 'sky'
    },
    {
      title: 'Quality Assurance',
      desc: 'Certified to ISO 9001, ISO 14001, ISO 13485, ISO 27001, ISO 28000, ISO 45001, AS9120, and C-TPAT.',
      icon: ShieldCheck,
      badge: 'Multi-ISO Certified',
      color: 'purple'
    }
  ];

  const partnerBenefits = [
    'Accelerate your time to market',
    'Optimize your supply chain',
    'Reduce costs and improve efficiency',
    'Access the latest technologies and innovations'
  ];

  return (
    <section className="compo-milestones-section" id="company-overview">
      <div className="compo-container">

        {/* Section Header with Official Corporate Overview from Slide 02 */}
        <div className="compo-milestones-header text-center reveal-on-scroll">
          <div className="compo-milestones-tag">
            <Calendar size={14} className="text-cyan-400" />
            <span>23-YEAR HERITAGE &amp; GLOBAL SUPPLY CHAIN PARTNER</span>
          </div>
          <h2 className="compo-milestones-title">
            Company Overview &amp; <span className="compo-milestones-title-gradient">Historical Milestones</span>
          </h2>
          <p className="compo-milestones-desc">
            Founded in 2003, <strong>Compo Electronics Asia Limited</strong> has emerged as a leading global distributor and supply chain partner for electronic components. With over two decades of industry experience, we have established strong relationships with top manufacturers like <strong>NXP, TE, ZEISS, and Preci Dip</strong>.
          </p>

          {/* Official Slide 02 Company Overview Stats Grid */}
          <div className="compo-overview-stats-grid">
            {companyOverviewStats.map((st) => (
              <div key={st.id} className={`compo-overview-stat-card compo-stat-${st.color}`}>
                <div className="compo-stat-number-box">
                  <span className="compo-stat-num">
                    <AnimatedNumber 
                      value={st.value} 
                      prefix={st.prefix || ''} 
                      suffix={st.suffix || ''}
                      decimals={st.decimals || 0}
                    />
                  </span>
                </div>
                <h4 className="compo-stat-title">{st.title}</h4>
                <p className="compo-stat-sub">{st.subtitle}</p>
                <div className="compo-stat-glow-bar"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Main High-Tech Showcase Roadmap Hub */}
        <div className="compo-roadmap-showcase-hub reveal-on-scroll">
          
          {/* Top Control Bar: Era Filters & Navigation Arrows */}
          <div className="compo-roadmap-top-bar">
            <div className="compo-roadmap-title-box">
              <div className="compo-roadmap-live-badge">
                <span className="compo-roadmap-dot"></span>
                <span>COMPO GROWTH ROADMAP</span>
              </div>
              <h3 className="compo-roadmap-heading">23+ Years of Innovation (2003 – 2026)</h3>
            </div>

            {/* Era Filter Pills */}
            <div className="compo-roadmap-era-pills">
              {eras.map((era) => (
                <button
                  key={era.id}
                  className={`compo-era-btn ${activeEra === era.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveEra(era.id);
                    if (era.id !== 'all') {
                      const firstInEra = companyMilestones.find(m => {
                        const yr = parseInt(m.year, 10);
                        return yr >= era.start && yr <= era.end;
                      });
                      if (firstInEra) setSelectedYear(firstInEra.year);
                    }
                  }}
                >
                  {era.label}
                </button>
              ))}
            </div>

            {/* Track Scroll Controls */}
            <div className="compo-roadmap-nav-btns">
              <button 
                className="compo-rm-nav-btn" 
                onClick={() => scrollTrack('left')} 
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                className="compo-rm-nav-btn" 
                onClick={() => scrollTrack('right')} 
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Interactive Horizontal Cards Track */}
          <div className="compo-roadmap-track-container">
            <div className="compo-roadmap-track" ref={trackRef}>
              {filteredMilestones.map((m) => {
                const isSelected = selectedYear === m.year;
                const IconComponent = iconMap[m.icon] || Sparkles;

                return (
                  <div
                    key={m.year}
                    className={`compo-rm-card ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedYear(m.year)}
                  >
                    {/* Top Tag & Year Badge */}
                    <div className="compo-rm-card-top">
                      <span className="compo-rm-year-pill">{m.year}</span>
                      <span className="compo-rm-tag-pill">{m.tag}</span>
                      <div className="compo-rm-icon-circle">
                        <IconComponent size={16} />
                      </div>
                    </div>

                    {/* Card Content */}
                    <h4 className="compo-rm-card-title">{m.title}</h4>
                    <span className="compo-rm-card-highlight">{m.highlight}</span>
                    <p className="compo-rm-card-desc">{m.desc}</p>

                    {/* Bottom Active Indicator */}
                    <div className="compo-rm-card-footer">
                      <span className="compo-rm-select-label">
                        {isSelected ? 'Currently Viewing' : 'Click to View'}
                      </span>
                      <ArrowRight size={14} className="compo-rm-arrow" />
                    </div>

                    {/* Glowing active outline */}
                    <div className="compo-rm-glow-border"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Featured Active Landmark Spotlight Box */}
          <div className="compo-rm-spotlight-panel">
            <div className="compo-rm-spotlight-left">
              <div className="compo-rm-spotlight-year-hud">
                <span className="compo-rm-hud-label">LANDMARK YEAR</span>
                <span className="compo-rm-hud-year">{activeMilestone.year}</span>
              </div>
              <div className="compo-rm-spotlight-badge">
                <ActiveIcon size={20} className="text-cyan-400" />
                <span>{activeMilestone.tag}</span>
              </div>
            </div>

            <div className="compo-rm-spotlight-center">
              <span className="compo-rm-spotlight-highlight">{activeMilestone.highlight}</span>
              <h4 className="compo-rm-spotlight-title">{activeMilestone.title}</h4>
              <p className="compo-rm-spotlight-desc">{activeMilestone.desc}</p>
            </div>

            <div className="compo-rm-spotlight-right">
              <div className="compo-rm-spotlight-step-nav">
                <button 
                  className="compo-rm-step-btn" 
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  title="Previous Milestone"
                >
                  <ChevronLeft size={16} />
                  <span>Prev</span>
                </button>
                <span className="compo-rm-step-count">
                  {currentIndex + 1} / {companyMilestones.length}
                </span>
                <button 
                  className="compo-rm-step-btn" 
                  onClick={handleNext}
                  disabled={currentIndex === companyMilestones.length - 1}
                  title="Next Milestone"
                >
                  <span>Next</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              <button 
                className="compo-btn compo-btn-primary compo-btn-sm compo-rm-quote-btn"
                onClick={onOpenQuote}
              >
                <span>Partner with COMPO</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>

        {/* =========================================================================
            OUR COMMITMENT TO EXCELLENCE & MISSION / VISION SHOWCASE
           ========================================================================= */}
        <div className="compo-excellence-mission-hub reveal-on-scroll">
          
          {/* Header */}
          <div className="compo-excellence-header text-center">
            <div className="compo-excellence-tag">
              <span className="compo-tag-live-dot" aria-hidden="true"></span>
              <span>CORE COMMITMENTS &amp; STRATEGIC VISION</span>
            </div>
            <h3 className="compo-excellence-title">
              Our Commitment to <span className="compo-title-highlight-cyan">Excellence</span>
            </h3>
            <p className="compo-excellence-sub">
              Empowering global industries with verified semiconductor reliability, comprehensive inventory, and world-class customer service.
            </p>
          </div>

          {/* 6 Commitments Grid */}
          <div className="compo-commitments-grid reveal-stagger">
            {commitments.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className={`compo-commitment-card compo-com-accent-${item.color}`}>
                  <div className="compo-commitment-card-top">
                    <div className="compo-commitment-icon-wrap">
                      <ItemIcon size={22} />
                    </div>
                    <span className="compo-commitment-badge">{item.badge}</span>
                  </div>
                  <h4 className="compo-commitment-card-title">{item.title}</h4>
                  <p className="compo-commitment-card-desc">{item.desc}</p>
                  <div className="compo-commitment-glow"></div>
                </div>
              );
            })}
          </div>

          {/* 2-Column Bottom Box: Partner Benefits (Left) & Mission / Vision (Right) */}
          <div className="compo-partner-mission-row">
            
            {/* Left: Partner With Compo Benefits */}
            <div className="compo-partner-benefits-box">
              <div className="compo-partner-box-header">
                <div className="compo-partner-icon-badge">
                  <ShieldCheck size={26} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="compo-partner-box-title">Partner with Compo Electronics Asia Limited to:</h4>
                  <p className="compo-partner-box-sub">Drive measurable supply chain advantages and high-yield operational efficiency</p>
                </div>
              </div>

              <div className="compo-partner-benefits-list">
                {partnerBenefits.map((b, bIdx) => (
                  <div key={bIdx} className="compo-partner-benefit-item">
                    <div className="compo-benefit-check-circle">
                      <CheckCircle2 size={16} />
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <button 
                className="compo-btn compo-btn-primary compo-btn-glow compo-partner-cta-btn"
                onClick={onOpenQuote}
              >
                <span>Initiate Sourcing Partnership</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Right: Mission & Vision Cards */}
            <div className="compo-mission-vision-col">
              
              {/* Mission Card */}
              <div className="compo-mv-card compo-mission-card">
                <div className="compo-mv-icon-badge">
                  <Target size={24} className="text-cyan-400" />
                </div>
                <div className="compo-mv-content">
                  <span className="compo-mv-label">OUR MISSION</span>
                  <h4 className="compo-mv-title">Trusted Partner for Sustainable Value</h4>
                  <p className="compo-mv-desc">
                    To be the most trusted and reliable partner for our customers by providing innovative solutions, exceptional service, and superior value.
                  </p>
                </div>
                <div className="compo-mv-glow-bar"></div>
              </div>

              {/* Vision Card */}
              <div className="compo-mv-card compo-vision-card">
                <div className="compo-mv-icon-badge">
                  <Eye size={24} className="text-blue-400" />
                </div>
                <div className="compo-mv-content">
                  <span className="compo-mv-label compo-mv-label-vision">OUR VISION</span>
                  <h4 className="compo-mv-title">Global Leadership in Semiconductor Distribution</h4>
                  <p className="compo-mv-desc">
                    To be a global leader in the distribution of electronic components, empowering our customers to succeed.
                  </p>
                </div>
                <div className="compo-mv-glow-bar"></div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

