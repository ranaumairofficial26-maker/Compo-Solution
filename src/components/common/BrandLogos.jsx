import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

export default function BrandLogos() {
  const trackRef = useRef(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Exact 13 requested semiconductor & electronic component brands
  const brandItemsList = [
    {
      id: 'nexperia',
      name: 'Nexperia',
      logo: '/brands/nexperia.svg',
      title: 'Nexperia Semiconductors'
    },
    {
      id: 'trex',
      name: 'TREX Technology',
      logo: '/brands/trex.svg',
      title: 'T-Rex Technology'
    },
    {
      id: 'te-connectivity',
      name: 'TE Connectivity',
      logo: '/brands/te-connectivity.svg',
      title: 'TE Connectivity'
    },
    {
      id: 'zeiss',
      name: 'ZEISS',
      logo: '/brands/zeiss.svg',
      title: 'Carl Zeiss'
    },
    {
      id: 'preci-dip',
      name: 'PRECI-DIP',
      logo: '/brands/preci-dip.svg',
      title: 'PRECI-DIP Interconnect'
    },
    {
      id: 'mote',
      name: 'MOTE',
      logo: '/brands/mote.svg',
      title: 'MOTE Semiconductor'
    },
    {
      id: 'zmjsemi',
      name: 'ZMJSEMI',
      logo: '/brands/zmjsemi.svg',
      title: 'ZMJ Semiconductor'
    },
    {
      id: 'hunduck',
      name: 'HUNDUCK',
      logo: '/brands/hunduck.svg',
      title: 'HUNDUCK Electronics'
    },
    {
      id: 'utc',
      name: 'UTC',
      logo: '/brands/utc.svg',
      title: 'UTC Unisonic Technologies'
    },
    {
      id: 'relmon',
      name: 'RELMON',
      logo: '/brands/relmon.svg',
      title: 'RELMON Semiconductor'
    },
    {
      id: 'belling',
      name: 'BELLING',
      logo: '/brands/belling.svg',
      title: 'Shanghai Belling IC'
    },
    {
      id: 'runic',
      name: 'RUNIC',
      logo: '/brands/runic.svg',
      title: 'RUNIC Technology'
    },
    {
      id: 'wch',
      name: 'WCH',
      logo: '/brands/wch.svg',
      title: 'WCH QinHeng Microelectronics'
    }
  ];

  const renderBrandGroup = (groupKey) => (
    <div className="compo-brands-group" key={groupKey}>
      {brandItemsList.map((brand) => (
        <div 
          key={`${groupKey}-${brand.id}`} 
          className="compo-brand-item" 
          title={brand.title}
        >
          <div className="compo-brand-card">
            <img 
              src={brand.logo} 
              alt={brand.name} 
              className="compo-brand-img"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="compo-brands-section" aria-label="Trusted Component Brands">
      <div className="compo-brands-container compo-brands-centered">
        
        {/* Centered Top Heading with Badge */}
        <div className="compo-brands-header-center reveal-on-scroll">
          <div className="compo-brands-tag">
            <Sparkles size={14} className="text-cyan-500" />
            <span>CERTIFIED OEM & FRANCHISED NETWORK</span>
          </div>
          <h2 className="compo-brands-title-main">Trusted Component Brands</h2>
          <p className="compo-brands-subtitle">
            Direct partnerships with world-leading semiconductor and electromechanical manufacturers.
          </p>
        </div>

        {/* Centered Full-Width Animated Marquee Track */}
        <div className="compo-brands-slider-wrap reveal-scale">
          <div className="compo-brands-track-overflow" ref={trackRef}>
            <div className="compo-brands-track-animated">
              {renderBrandGroup('g1')}
              {renderBrandGroup('g2')}
              {renderBrandGroup('g3')}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
