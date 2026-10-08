import React, { useState } from 'react';
import { 
  PackageCheck, 
  TrendingDown, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  DollarSign, 
  FileText,
  Clock,
  Layers,
  BarChart3
} from 'lucide-react';
import { businessModels } from '../../data/serverPartsData';
import AnimatedNumber from '../common/AnimatedNumber';

export default function BusinessModelsSection({ onOpenQuote }) {
  const [activeModel, setActiveModel] = useState('both'); // 'both' | 'excess' | 'ppv'

  return (
    <section className="compo-business-models-section" id="business-models">
      <div className="compo-container">
        
        {/* Header */}
        <div className="compo-bm-header text-center reveal-on-scroll">
          <div className="compo-bm-tag">
            <Sparkles size={14} className="text-cyan-400" />
            <span>STRATEGIC SOURCING &amp; CAPITAL SOLUTIONS</span>
          </div>
          <h2 className="compo-bm-title">
            Enterprise <span className="compo-title-highlight">EXCESS &amp; PPV</span> Business Models
          </h2>
          <p className="compo-bm-desc">
            Empowering OEMs, EMS providers, and tier-1 manufacturers with agile inventory recovery 
            and aggressive Purchase Price Variance (PPV) cost reduction across volatile electronic markets.
          </p>

          {/* Quick Filter Pill */}
          <div className="compo-bm-toggle-bar">
            <button 
              className={`compo-bm-toggle-btn ${activeModel === 'both' ? 'active' : ''}`}
              onClick={() => setActiveModel('both')}
            >
              All Strategic Programs
            </button>
            <button 
              className={`compo-bm-toggle-btn ${activeModel === 'excess' ? 'active' : ''}`}
              onClick={() => setActiveModel('excess')}
            >
              EXCESS Inventory Management
            </button>
            <button 
              className={`compo-bm-toggle-btn ${activeModel === 'ppv' ? 'active' : ''}`}
              onClick={() => setActiveModel('ppv')}
            >
              PPV Cost-Down Sourcing
            </button>
          </div>
        </div>

        {/* 2-Column Showcase Grid */}
        <div className="compo-bm-grid reveal-stagger">
          {businessModels
            .filter(bm => activeModel === 'both' || activeModel === bm.id)
            .map(bm => {
              const isExcess = bm.id === 'excess';
              return (
                <div key={bm.id} className={`compo-bm-card compo-bm-${bm.color}`}>
                  
                  {/* Glowing Ambient Corner Accent */}
                  <div className="compo-bm-card-glow"></div>

                  {/* Top Image Showcase Box */}
                  <div className="compo-bm-img-box">
                    <img 
                      src={bm.image} 
                      alt={bm.title} 
                      className="compo-bm-img" 
                      loading="lazy" 
                    />
                    <div className="compo-bm-img-overlay"></div>
                    <div className="compo-bm-img-badges">
                      <span className={`compo-bm-badge compo-badge-${bm.color}`}>
                        {isExcess ? (
                          <PackageCheck size={14} className="text-emerald-400" />
                        ) : (
                          <TrendingDown size={14} className="text-cyan-400" />
                        )}
                        <span>{bm.tag}</span>
                      </span>
                      <span className="compo-bm-sla-pill">{bm.badge}</span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="compo-bm-body">
                    <div className="compo-bm-title-row">
                      <h3 className="compo-bm-card-title">{bm.title}</h3>
                      <p className="compo-bm-card-subtitle">{bm.subtitle}</p>
                    </div>

                    {/* 3 Live Metric HUD Badges */}
                    <div className="compo-bm-stats-row">
                      {bm.keyStats.map((stat, idx) => (
                        <div key={idx} className="compo-bm-stat-item">
                          <div className="compo-bm-stat-val-wrap">
                            <span className="compo-bm-stat-val">
                              <AnimatedNumber 
                                value={stat.num} 
                                prefix={stat.prefix || ''} 
                                suffix={stat.suffix || ''} 
                              />
                            </span>
                          </div>
                          <span className="compo-bm-stat-lbl">{stat.label}</span>
                          <div className="compo-bm-stat-line"></div>
                        </div>
                      ))}
                    </div>

                    {/* 4 Feature Pillars (How Our Program Works) */}
                    <div className="compo-bm-features-list">
                      <div className="compo-bm-features-header">
                        <span className="compo-bm-features-tag">PROGRAM EXECUTION</span>
                        <h4 className="compo-bm-features-title">How Our Program Works:</h4>
                      </div>
                      <div className="compo-bm-features-grid">
                        {bm.features.map((feat, idx) => (
                          <div key={idx} className="compo-bm-feature-item">
                            <div className="compo-bm-step-badge">{feat.step}</div>
                            <div className="compo-bm-feat-body">
                              <h5 className="compo-bm-feat-title">{feat.title}</h5>
                              <p className="compo-bm-feat-desc">{feat.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer CTA */}
                    <div className="compo-bm-card-actions">
                      <button 
                        className={`compo-btn compo-btn-lg ${isExcess ? 'compo-btn-emerald' : 'compo-btn-cyan-glow'} w-full`}
                        onClick={onOpenQuote}
                      >
                        <span>{bm.ctaText}</span>
                        <ArrowRight size={18} className="compo-btn-arrow-shift" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
        </div>

        {/* Informational Callout Bar */}
        <div className="compo-bm-assurance-strip reveal-on-scroll">
          <div className="compo-assurance-item">
            <ShieldCheck size={20} className="text-cyan-400" />
            <span>100% Traceable CoC &amp; Test Lab Reports</span>
          </div>
          <div className="compo-assurance-item">
            <Clock size={20} className="text-emerald-400" />
            <span>2-4 Hour Rapid Valuation &amp; BOM Cost Analysis</span>
          </div>
          <div className="compo-assurance-item">
            <FileText size={20} className="text-blue-400" />
            <span>Strict NDA &amp; OEM Brand Channel Protection</span>
          </div>
        </div>

      </div>
    </section>
  );
}
