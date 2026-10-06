import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Globe2, 
  Award, 
  MapPin, 
  Clock, 
  Mail, 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  Users, 
  Cpu, 
  CheckCircle2, 
  X,
  PhoneCall,
  Search
} from 'lucide-react';

const LinkedInIcon = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import { teamDepartments, teamMembers, teamStats } from '../data/teamData';
import AnimatedNumber from '../components/common/AnimatedNumber';
import useScrollReveal from '../hooks/useScrollReveal';

export default function TeamPage({ onOpenQuote, onOpenSearch }) {
  const [activeDept, setActiveDept] = useState('all');
  const [selectedMember, setSelectedMember] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // 60fps on-scroll reveal engine reacting to active filters and search
  useScrollReveal([activeDept, searchTerm]);

  // Filter members by department and search term
  const filteredMembers = teamMembers.filter((m) => {
    const matchesDept = activeDept === 'all' || m.department === activeDept;
    const matchesSearch = searchTerm.trim() === '' || 
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="compo-team-page">
      
      {/* =========================================================================
          HERO SECTION (FUSION WORLDWIDE INSPIRED, MATCHING OUR HIGH-TECH PALETTE)
         ========================================================================= */}
      <section className="compo-team-hero">
        <div className="compo-team-hero-bg">
          <div className="compo-team-glow compo-team-glow-cyan"></div>
          <div className="compo-team-glow compo-team-glow-blue"></div>
          <div className="compo-team-grid-overlay"></div>
        </div>

        <div className="compo-container compo-team-hero-content reveal-on-scroll">
          <div className="compo-team-eyebrow">
            <span className="compo-eyebrow-pulse"></span>
            <Users size={14} className="text-cyan-400" />
            <span>ABOUT COMPO &bull; OUR GLOBAL TEAM</span>
          </div>

          <h1 className="compo-team-title">
            Meet Our Expert Team of <span className="compo-text-glow-gradient">Electronic Component Specialists</span>
          </h1>

          <p className="compo-team-subtitle">
            Discover COMPO’s worldwide network of semiconductor commodity traders, metallurgical forensic engineers, 
            and supply chain architects dedicated to resolving allocation crunches and obsolete part bottlenecks.
          </p>

          {/* Quick Stats Row */}
          <div className="compo-team-stats-grid reveal-stagger">
            {teamStats.map((stat, idx) => (
              <div key={idx} className="compo-team-stat-card">
                <span className="compo-team-stat-val">
                  <AnimatedNumber value={stat.value} />
                </span>
                <span className="compo-team-stat-lbl">{stat.label}</span>
                <span className="compo-team-stat-sub">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Wave Divider */}
        <div className="compo-team-wave-divider">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,0 C480,48 960,48 1440,0 L1440,48 L0,48 Z" fill="#f0f7ff" />
          </svg>
        </div>
      </section>

      {/* =========================================================================
          FILTER & SEARCH CONTROLS
         ========================================================================= */}
      <section className="compo-team-filter-section reveal-on-scroll">
        <div className="compo-container">
          
          <div className="compo-team-controls-bar">
            {/* Department Filter Tabs */}
            <div className="compo-team-tabs" role="tablist">
              {teamDepartments.map((dept) => {
                const count = dept.id === 'all' 
                  ? teamMembers.length 
                  : teamMembers.filter((m) => m.department === dept.id).length;

                return (
                  <button
                    key={dept.id}
                    className={`compo-team-tab-btn ${activeDept === dept.id ? 'active' : ''}`}
                    onClick={() => setActiveDept(dept.id)}
                    role="tab"
                    aria-selected={activeDept === dept.id}
                  >
                    <span>{dept.label}</span>
                    <span className="compo-tab-count">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search Input */}
            <div className="compo-team-search-wrap">
              <Search size={16} className="compo-team-search-icon" />
              <input 
                type="text" 
                placeholder="Search specialist or role..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="compo-team-search-input"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')} 
                  className="compo-team-search-clear"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          TEAM MEMBERS GRID
         ========================================================================= */}
      <section className="compo-team-grid-section">
        <div className="compo-container">

          {filteredMembers.length === 0 ? (
            <div className="compo-team-empty-state">
              <Users size={48} className="text-slate-400 mb-3" />
              <h3>No specialists found matching "{searchTerm}"</h3>
              <p>Try searching by different keywords or selecting "All Specialists".</p>
              <button 
                onClick={() => { setActiveDept('all'); setSearchTerm(''); }}
                className="compo-btn compo-btn-primary mt-4"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="compo-team-cards-grid reveal-stagger">
              {filteredMembers.map((member) => (
                <div key={member.id} className="compo-team-card">
                  
                  {/* Photo & Overlay Badges */}
                  <div className="compo-team-card-image-box">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="compo-team-card-img" 
                      loading="lazy" 
                    />
                    <div className="compo-team-dept-pill">
                      {member.deptLabel}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="compo-team-card-body">
                    <h3 className="compo-team-card-name">{member.name}</h3>
                    <p className="compo-team-card-role">{member.role}</p>

                    {/* Metadata Chips */}
                    <div className="compo-team-card-meta">
                      <div className="compo-team-meta-item">
                        <MapPin size={13} className="text-cyan-500" />
                        <span>{member.location}</span>
                      </div>
                      <div className="compo-team-meta-item">
                        <Clock size={13} className="text-emerald-500" />
                        <span><AnimatedNumber value={member.tenure} /></span>
                      </div>
                    </div>

                    {/* Specialty Highlight */}
                    <div className="compo-team-specialty-box">
                      <strong className="compo-spec-label">Focus Area:</strong>
                      <span className="compo-spec-val">{member.specialty}</span>
                    </div>

                    <p className="compo-team-card-snippet">
                      {member.bio.substring(0, 115)}...
                    </p>

                    {/* Card Actions Footer */}
                    <div className="compo-team-card-footer">
                      <button 
                        className="compo-team-view-btn"
                        onClick={() => setSelectedMember(member)}
                      >
                        <span>View Executive Bio</span>
                        <ArrowRight size={15} />
                      </button>

                      <div className="compo-team-social-icons">
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="compo-team-social-link"
                          aria-label={`${member.name} LinkedIn Profile`}
                        >
                          <LinkedInIcon size={15} />
                        </a>
                        <a 
                          href={`mailto:${member.email}`} 
                          className="compo-team-social-link"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail size={15} />
                        </a>
                      </div>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* =========================================================================
          COMPANY CULTURE & LEADERSHIP PILLARS (FROM FUSIONWW)
         ========================================================================= */}
      <section className="compo-team-culture-section">
        <div className="compo-container">
          
          <div className="compo-culture-card reveal-scale">
            <div className="compo-culture-glow"></div>
            
            <div className="compo-culture-grid">
              <div className="compo-culture-text">
                <span className="compo-culture-tag">OUR SOURCING CULTURE</span>
                <h2 className="compo-culture-title">
                  Open-Door Leadership &amp; Global Sourcing Excellence
                </h2>
                <p className="compo-culture-desc">
                  At COMPO, our executive leaders work side-by-side on active trading desks with sourcing specialists, 
                  metallurgists, and commodity experts. We champion direct accessibility, technical rigor, 
                  and mentorship that accelerates component resolution for tier-1 manufacturers globally.
                </p>

                <div className="compo-culture-bullets reveal-stagger">
                  <div className="compo-culture-bullet-item">
                    <ShieldCheck size={20} className="text-cyan-400" />
                    <div>
                      <strong>Decentralized Trading Autonomy</strong>
                      <span>Real-time purchasing decisions to capture fleeting spot allocations.</span>
                    </div>
                  </div>

                  <div className="compo-culture-bullet-item">
                    <Award size={20} className="text-emerald-400" />
                    <div>
                      <strong>Zero-Defect Quality Mandate</strong>
                      <span>Every specialist is certified in counterfeit detection protocols.</span>
                    </div>
                  </div>

                  <div className="compo-culture-bullet-item">
                    <Globe2 size={20} className="text-sky-400" />
                    <div>
                      <strong>Global Clock Continuity</strong>
                      <span>Hand-off sourcing desks ensuring continuous 24/7 RFQ coverage.</span>
                    </div>
                  </div>
                </div>

                <div className="compo-culture-actions">
                  <button 
                    className="compo-btn compo-btn-primary compo-btn-lg"
                    onClick={onOpenQuote}
                  >
                    <span>Connect with Our Specialists</span>
                    <ArrowRight size={17} />
                  </button>
                  <button 
                    className="compo-btn compo-btn-outline compo-btn-lg"
                    onClick={onOpenSearch}
                  >
                    <span>Search Component Stock</span>
                  </button>
                </div>
              </div>

              <div className="compo-culture-sidebar reveal-stagger">
                <div className="compo-culture-stat-box">
                  <span className="compo-stat-num">
                    <AnimatedNumber value={4} />
                  </span>
                  <span className="compo-stat-name">Global Hub Continents</span>
                  <p>Americas, Europe, Greater China &amp; Southeast Asia</p>
                </div>
                <div className="compo-culture-stat-box">
                  <span className="compo-stat-num">
                    <AnimatedNumber value="2,000,000+" prefix="> " />
                  </span>
                  <span className="compo-stat-name">Active Line Items</span>
                  <p>Tracked daily with direct OEM and authorized traceability</p>
                </div>
                <div className="compo-culture-stat-box">
                  <span className="compo-stat-num">
                    <AnimatedNumber value="100%" />
                  </span>
                  <span className="compo-stat-name">In-House Authenticated</span>
                  <p>Certified AS9120B, ISO 9001 and IDEA-STD-1010 testing</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          MEMBER BIO DETAIL MODAL
         ========================================================================= */}
      {selectedMember && (
        <div className="compo-modal-backdrop" onClick={() => setSelectedMember(null)}>
          <div 
            className="compo-member-modal-container" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="compo-modal-close-btn"
              onClick={() => setSelectedMember(null)}
              aria-label="Close Profile"
            >
              <X size={20} />
            </button>

            <div className="compo-member-modal-content">
              {/* Left Column: Member Photo & Quick Info */}
              <div className="compo-member-modal-aside">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="compo-member-modal-img" 
                />
                <span className="compo-modal-dept-badge">{selectedMember.deptLabel}</span>
                
                <div className="compo-modal-meta-stack">
                  <div className="compo-modal-meta-line">
                    <MapPin size={15} className="text-cyan-500" />
                    <span>{selectedMember.location}</span>
                  </div>
                  <div className="compo-modal-meta-line">
                    <Clock size={15} className="text-emerald-500" />
                    <span>{selectedMember.tenure}</span>
                  </div>
                </div>

                <div className="compo-modal-contact-btns">
                  <a 
                    href={`mailto:${selectedMember.email}`} 
                    className="compo-btn compo-btn-outline w-full"
                  >
                    <Mail size={15} />
                    <span>Send Direct Email</span>
                  </a>
                  <button 
                    className="compo-btn compo-btn-primary w-full"
                    onClick={() => {
                      setSelectedMember(null);
                      onOpenQuote();
                    }}
                  >
                    <PhoneCall size={15} />
                    <span>Request RFQ with Team</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Full Career Bio & Accreditations */}
              <div className="compo-member-modal-main">
                <h2 className="compo-modal-member-name">{selectedMember.name}</h2>
                <h4 className="compo-modal-member-role">{selectedMember.role}</h4>

                <div className="compo-modal-specialty-banner">
                  <strong>Specialty Discipline:</strong> {selectedMember.specialty}
                </div>

                <div className="compo-modal-bio-text">
                  <h3>Executive Background &amp; Contributions</h3>
                  <p>{selectedMember.bio}</p>
                </div>

                {selectedMember.badges && selectedMember.badges.length > 0 && (
                  <div className="compo-modal-badges-section">
                    <h4>Key Accreditations &amp; Industry Roles</h4>
                    <div className="compo-modal-badges-list">
                      {selectedMember.badges.map((b, idx) => (
                        <span key={idx} className="compo-modal-pill-tag">
                          <CheckCircle2 size={13} className="text-cyan-500" />
                          <span>{b}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
