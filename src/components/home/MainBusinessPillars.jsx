import React, { useState } from 'react';
import { 
  Zap, 
  TrendingDown, 
  Layers, 
  ShieldCheck, 
  Clock, 
  PackageCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Building2
} from 'lucide-react';
import { mainBusinessServices } from '../../data/compoCorporateData';

const iconMap = {
  Zap: Zap,
  TrendingDown: TrendingDown,
  Layers: Layers,
  ShieldCheck: ShieldCheck,
  Clock: Clock,
  PackageCheck: PackageCheck
};

export default function MainBusinessPillars({ onOpenQuote }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="compo-main-business-section" id="main-business">
      <div className="compo-container">
        
        {/* Section Header */}
        <div className="compo-mb-header reveal-on-scroll">
          <div className="compo-mb-tag">
            <Sparkles size={14} className="text-cyan-500" />
            <span>MAIN BUSINESS SERVICES • 6 CORE PILLARS</span>
          </div>
          <h2 className="compo-mb-title">
            Comprehensive Supply Chain &amp; <span className="compo-mb-title-gradient">Procurement Solutions</span>
          </h2>
          <p className="compo-mb-desc">
            From emergency shortage allocations and PPV cost reductions to turnkey BOM kitting and Vendor-Managed Inventory, 
            COMPO delivers end-to-end semiconductor lifecycle support for global OEMs and EMS innovators.
          </p>
        </div>

        {/* 6 Business Pillars Grid */}
        <div className="compo-mb-grid reveal-stagger">
          {mainBusinessServices.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Zap;
            const isHovered = hoveredCard === service.id;

            return (
              <div 
                key={service.id}
                className={`compo-mb-card compo-mb-accent-${service.accentColor} ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Visual Image Header */}
                <div className="compo-mb-card-media">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="compo-mb-card-img"
                    loading="lazy"
                  />
                  <div className="compo-mb-media-overlay"></div>
                  <div className="compo-mb-media-badges">
                    <span className="compo-mb-pillar-num">0{idx + 1}</span>
                    <div className="compo-mb-icon-badge">
                      <IconComponent size={20} />
                    </div>
                  </div>
                </div>

                {/* Card Header Info */}
                <div className="compo-mb-card-header">
                  <span className="compo-mb-card-tagline">{service.tagline}</span>
                  <h3 className="compo-mb-card-title">{service.title}</h3>
                </div>

                {/* Card Body */}
                <div className="compo-mb-card-body">
                  <p className="compo-mb-card-desc">{service.desc}</p>

                  <div className="compo-mb-bullets-list">
                    {service.bulletPoints.map((pt, pIdx) => (
                      <div key={pIdx} className="compo-mb-bullet-item">
                        <CheckCircle2 size={15} className="compo-mb-check-icon" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="compo-mb-card-footer">
                  <button 
                    className="compo-mb-card-btn"
                    onClick={onOpenQuote}
                  >
                    <span>Inquire Solution</span>
                    <ArrowRight size={15} className="compo-mb-btn-arrow" />
                  </button>
                </div>

                {/* Glowing Border Beam */}
                <div className="compo-mb-border-glow"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Assurance Callout Banner */}
        <div className="compo-mb-bottom-callout reveal-on-scroll">
          <div className="compo-mb-callout-left">
            <Building2 size={24} className="text-cyan-400" />
            <div>
              <h4 className="compo-mb-callout-title">Need a Custom Sourcing or Supply Program?</h4>
              <p className="compo-mb-callout-sub">Our 200+ worldwide specialists configure tailored FAE support, buffer stock, and credit terms.</p>
            </div>
          </div>
          <button 
            className="compo-btn compo-btn-primary compo-btn-glow"
            onClick={onOpenQuote}
          >
            <span>Speak with a Solutions Director</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
