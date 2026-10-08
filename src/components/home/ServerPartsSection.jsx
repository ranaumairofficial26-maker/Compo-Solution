import React, { useState } from 'react';
import { 
  Cpu, 
  HardDrive, 
  Layers, 
  Activity, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Server,
  Zap,
  ShieldCheck,
  Search
} from 'lucide-react';
import { serverPartsList } from '../../data/serverPartsData';
import AnimatedNumber from '../common/AnimatedNumber';

export default function ServerPartsSection({ onOpenQuote, onOpenSearch }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Server Hardware', count: serverPartsList.length },
    { id: 'compute', label: 'Compute & AI (CPU, GPU)', count: 2 },
    { id: 'storage', label: 'Storage & RAM (SSD, HDD, MEMORY)', count: 3 },
    { id: 'network', label: 'Networking (NIC Cards)', count: 1 }
  ];

  const filteredParts = serverPartsList.filter(part => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'compute') return part.id === 'cpu' || part.id === 'gpu';
    if (activeFilter === 'storage') return part.id === 'ssd' || part.id === 'hdd' || part.id === 'memory';
    if (activeFilter === 'network') return part.id === 'nic';
    return true;
  });

  return (
    <section className="compo-server-parts-section" id="server-parts">
      <div className="compo-container">
        
        {/* Section Header */}
        <div className="compo-server-header text-center reveal-on-scroll">
          <div className="compo-server-tag">
            <Server size={14} className="text-cyan-400" />
            <span>ENTERPRISE &amp; DATA CENTER PORTFOLIO</span>
          </div>
          <h2 className="compo-server-title">
            Enterprise Server Parts &amp; <span className="compo-title-highlight">Compute Infrastructure</span>
          </h2>
          <p className="compo-server-desc">
            Direct global allocation and immediate dispatch for hyperscale data center hardware. 
            Original manufacturer packaging, certified CoC, and comprehensive parametric lab testing.
          </p>

          {/* Quick Category Filter Tabs */}
          <div className="compo-server-filter-tabs" role="tablist">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                className={`compo-server-tab-btn ${activeFilter === tab.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab.id)}
                role="tab"
                aria-selected={activeFilter === tab.id}
              >
                <span>{tab.label}</span>
                <span className="compo-tab-count">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 6 Server Parts Grid */}
        <div className="compo-server-grid reveal-stagger">
          {filteredParts.map(part => (
            <div key={part.id} className="compo-server-card">
              
              {/* Image Box with Glow & Badge */}
              <div className="compo-server-img-box">
                <img 
                  src={part.image} 
                  alt={part.name} 
                  className="compo-server-img"
                  loading="lazy" 
                />
                <span className={`compo-server-badge compo-badge-${part.badgeColor}`}>
                  <span className="compo-badge-dot"></span>
                  {part.badge}
                </span>
                <div className="compo-server-category-pill">{part.category}</div>
              </div>

              {/* Card Body */}
              <div className="compo-server-card-body">
                <div className="compo-server-brand-pills">
                  {part.brands.map((b, i) => (
                    <span key={i} className="compo-server-brand-tag">{b}</span>
                  ))}
                </div>

                <h3 className="compo-server-card-name">{part.name}</h3>
                
                <div className="compo-server-specs-box">
                  <div className="compo-spec-row">
                    <span className="compo-spec-k">Key Specs:</span>
                    <span className="compo-spec-v">{part.specs}</span>
                  </div>
                  <div className="compo-spec-row">
                    <span className="compo-spec-k">Available:</span>
                    <span className="compo-spec-v compo-stock-highlight">
                      <AnimatedNumber value={part.stock} />
                    </span>
                  </div>
                </div>

                <p className="compo-server-card-desc">{part.desc}</p>

                {/* Card Action */}
                <div className="compo-server-card-footer">
                  <button 
                    className="compo-btn compo-btn-primary w-full"
                    onClick={onOpenQuote}
                  >
                    <span>Request Server Quote</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner: Sourcing Desk Hotline */}
        <div className="compo-server-bottom-banner reveal-scale">
          <div className="compo-server-banner-content">
            <div className="compo-server-banner-icon">
              <Zap size={24} className="text-cyan-400" />
            </div>
            <div className="compo-server-banner-text">
              <h4>Need Immediate Data Center Allocation or Full Rack BOM Sourcing?</h4>
              <p>Our dedicated enterprise hardware desk tracks global spot pricing and factory-sealed surplus across Tier-1 cloud operators.</p>
            </div>
          </div>
          <div className="compo-server-banner-actions">
            <button 
              className="compo-btn compo-btn-animated-primary"
              onClick={onOpenQuote}
            >
              <span>Instant Server RFQ</span>
              <ArrowRight size={16} />
            </button>
            <button 
              className="compo-btn compo-btn-outline"
              onClick={onOpenSearch}
            >
              <Search size={16} />
              <span>Search Part Number</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
