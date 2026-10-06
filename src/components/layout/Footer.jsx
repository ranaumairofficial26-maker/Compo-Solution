import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Lock,
  Cpu,
  ChevronUp,
  Zap,
  Globe2
} from 'lucide-react';

import Logo from '../common/Logo';

export default function Footer({ onOpenQuote, onOpenSearch }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="compo-footer">
      
      {/* Animated Aurora Ambient Glows */}
      <div className="compo-footer-aurora compo-aurora-cyan"></div>
      <div className="compo-footer-aurora compo-aurora-purple"></div>
      <div className="compo-footer-aurora compo-aurora-blue"></div>
      <div className="compo-footer-mesh-pattern"></div>

      {/* Floating High-Tech Animated Sourcing CTA Card */}
      <div className="compo-footer-cta-wrap">
        <div className="compo-container">
          <div className="compo-footer-cta-card reveal-scale">
            <div className="compo-cta-animated-border"></div>
            <div className="compo-cta-light-sweep"></div>
            
            <div className="compo-footer-cta-inner">
              <div className="compo-footer-cta-content">
                <div className="compo-footer-cta-badge">
                  <span className="compo-badge-dot"></span>
                  <Zap size={14} className="text-cyan-animated" />
                  <span>24-48H RAPID SOURCING &amp; ALLOCATION DESK</span>
                </div>
                <h3 className="compo-footer-cta-title">
                  Need Hard-to-Find or Obsolete <span className="compo-title-highlight">Electronic Components?</span>
                </h3>
                <p className="compo-footer-cta-desc">
                  Tap into 2,000,000+ line items with full factory traceability, certified CoC, in-house anti-counterfeit testing, and immediate dispatch.
                </p>
              </div>

              <div className="compo-footer-cta-actions">
                <button 
                  className="compo-btn-animated-primary" 
                  onClick={onOpenQuote}
                >
                  <span className="compo-btn-shine"></span>
                  <Sparkles size={17} className="compo-sparkle-spin" />
                  <span>Request Instant RFQ</span>
                  <ArrowRight size={17} className="compo-btn-arrow" />
                </button>
                <button 
                  className="compo-btn-animated-secondary"
                  onClick={onOpenSearch || onOpenQuote}
                >
                  <Cpu size={17} />
                  <span>Search Inventory</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer Grid */}
      <div className="compo-footer-main">
        <div className="compo-container">
          <div className="compo-footer-grid reveal-stagger">
            
            {/* Col 1: Brand & Core Trust Seals */}
            <div className="compo-footer-col compo-footer-brand-col">
              <a href="#" className="compo-footer-logo-link" aria-label="COMPO Electronics Home">
                <Logo variant="footer" />
              </a>
              <p className="compo-footer-brand-bio">
                Leading independent global distributor of authentic semiconductors, active ICs, passive devices, and mission-critical board-level components.
              </p>

              {/* Glowing Trust Badges */}
              <div className="compo-footer-trust-pills">
                <div className="compo-trust-pill compo-pill-cyan">
                  <ShieldCheck size={16} className="compo-icon-cyan" />
                  <span>ISO 9001:2015 &amp; AS9120B Certified</span>
                </div>
                <div className="compo-trust-pill compo-pill-emerald">
                  <CheckCircle2 size={16} className="compo-icon-emerald" />
                  <span>In-House Anti-Counterfeit Lab</span>
                </div>
                <div className="compo-trust-pill compo-pill-purple">
                  <Lock size={16} className="compo-icon-purple" />
                  <span>100% Traceable CoC &amp; Test Reports</span>
                </div>
              </div>
            </div>

            {/* Col 2: Component Categories */}
            <div className="compo-footer-col">
              <h4 className="compo-footer-heading">Component Categories</h4>
              <ul className="compo-footer-links">
                <li><a href="#products"><span className="compo-arrow-bullet">›</span><span>Microcontrollers &amp; DSPs</span></a></li>
                <li><a href="#products"><span className="compo-arrow-bullet">›</span><span>Power Management (PMIC)</span></a></li>
                <li><a href="#products"><span className="compo-arrow-bullet">›</span><span>MLCC &amp; Precision Passives</span></a></li>
                <li><a href="#products"><span className="compo-arrow-bullet">›</span><span>FPGA, CPLD &amp; Memories</span></a></li>
                <li><a href="#products"><span className="compo-arrow-bullet">›</span><span>Automotive &amp; Board Connectors</span></a></li>
                <li><a href="#products"><span className="compo-arrow-bullet">›</span><span>RF, Wireless &amp; IoT Modules</span></a></li>
              </ul>
            </div>

            {/* Col 3: Quality Testing Lab */}
            <div className="compo-footer-col">
              <h4 className="compo-footer-heading">Quality Testing Lab</h4>
              <ul className="compo-footer-links">
                <li><a href="#quality"><span className="compo-arrow-bullet">›</span><span>Incoming Optical Inspection</span></a></li>
                <li><a href="#quality"><span className="compo-arrow-bullet">›</span><span>Real-Time X-Ray &amp; Die Analysis</span></a></li>
                <li><a href="#quality"><span className="compo-arrow-bullet">›</span><span>Heated Chemical De-Marking</span></a></li>
                <li><a href="#quality"><span className="compo-arrow-bullet">›</span><span>Electrical Parametric Testing</span></a></li>
                <li><a href="#quality"><span className="compo-arrow-bullet">›</span><span>Solderability &amp; Coplanarity</span></a></li>
                <li><a href="#about"><span className="compo-arrow-bullet">›</span><span>BOM Cost Optimization</span></a></li>
              </ul>
            </div>

            {/* Col 4: Global HQ & Live Procurement Desk */}
            <div className="compo-footer-col compo-footer-contact-col">
              <h4 className="compo-footer-heading">Global Contact</h4>
              
              <ul className="compo-footer-contact-list">
                <li className="compo-contact-item">
                  <div className="compo-contact-icon-box compo-contact-icon-map">
                    <MapPin size={17} />
                  </div>
                  <div className="compo-contact-text">
                    <strong className="compo-contact-title">Hong Kong Headquarters</strong>
                    <span className="compo-contact-desc">Unit 1205-08, 12/F, Cyberport 3, Core E, HK</span>
                  </div>
                </li>

                <li className="compo-contact-item">
                  <div className="compo-contact-icon-box compo-contact-icon-phone">
                    <Phone size={17} />
                  </div>
                  <div className="compo-contact-text">
                    <span className="compo-contact-phone">+852 3955 8820</span>
                    <span className="compo-contact-desc">+86 755 8279 0912 (China Hub)</span>
                  </div>
                </li>

                <li className="compo-contact-item">
                  <div className="compo-contact-icon-box compo-contact-icon-mail">
                    <Mail size={17} />
                  </div>
                  <div className="compo-contact-text">
                    <a href="mailto:sales@compo-electronics.com" className="compo-contact-email">
                      sales@compo-electronics.com
                    </a>
                    <span className="compo-contact-desc">Direct RFQ &amp; Sourcing Desk</span>
                  </div>
                </li>
              </ul>

              {/* 24/7 Animated Status Card */}
              <div className="compo-live-status-card">
                <div className="compo-live-radar">
                  <span className="compo-radar-core"></span>
                  <span className="compo-radar-wave"></span>
                </div>
                <div className="compo-live-status-info">
                  <span className="compo-live-title">Procurement Desk Online</span>
                  <span className="compo-live-sub">24/7 Global Response &bull; &lt; 45 Mins</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright, Compliance & Back To Top */}
      <div className="compo-footer-bottom">
        <div className="compo-container">
          <div className="compo-footer-bottom-inner">
            <div className="compo-footer-copy">
              <p>&copy; {new Date().getFullYear()} COMPO Electronics Asia Limited. All rights reserved.</p>
              <span className="compo-footer-subcopy">
                Zero Counterfeit Policy &bull; RoHS &amp; REACH Compliant &bull; AS9120B Certified
              </span>
            </div>

            <div className="compo-footer-legal-links">
              <a href="#about">Privacy Policy</a>
              <span className="compo-legal-separator">&bull;</span>
              <a href="#about">Terms of Supply</a>
              <span className="compo-legal-separator">&bull;</span>
              <a href="#quality">Quality Charter</a>
              <span className="compo-legal-separator">&bull;</span>
              <a href="#quality">Anti-Counterfeit Policy</a>
            </div>

            <button 
              onClick={scrollToTop} 
              className="compo-back-to-top-btn"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ChevronUp size={16} className="compo-chevron-animated" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
