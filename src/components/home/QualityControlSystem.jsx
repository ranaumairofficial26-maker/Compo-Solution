import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  FileText, 
  Truck, 
  FileCheck, 
  Microscope, 
  Warehouse, 
  Package, 
  Plane, 
  Sparkles, 
  Award, 
  Camera, 
  Ruler, 
  Sliders, 
  CheckSquare, 
  Box, 
  ShieldAlert,
  Flame,
  Activity,
  Cpu,
  Layers,
  Lock
} from 'lucide-react';

import { 
  qcFlowPipeline, 
  materialQcInspectionSteps, 
  laboratoryTestingEquipment, 
  qualificationsAndCertifications,
  industryMemberships
} from '../../data/compoCorporateData';

const iconMap = {
  Truck: Truck,
  FileCheck: FileCheck,
  ArrowRight: ArrowRight,
  ShieldAlert: ShieldAlert,
  Microscope: Microscope,
  Warehouse: Warehouse,
  Package: Package,
  Plane: Plane,
  Box: Box,
  FileText: FileText,
  Camera: Camera,
  Ruler: Ruler,
  Sliders: Sliders,
  CheckSquare: CheckSquare,
  Award: Award
};

export default function QualityControlSystem({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('flow'); // 'flow' | 'process' | 'equipment' | 'certs'
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <section className="compo-quality-system-section" id="quality">
      <div className="compo-container">

        {/* Section Header */}
        <div className="compo-qc-header text-center reveal-on-scroll">
          <div className="compo-qc-tag">
            <ShieldCheck size={15} className="text-cyan-400" />
            <span>ZERO-DEFECT QUALITY ASSURANCE SYSTEM</span>
          </div>
          <h2 className="compo-qc-title">
            Laser-Focused Quality Control &amp; <span className="compo-qc-title-gradient">Lab Testing Pipeline</span>
          </h2>
          <p className="compo-qc-desc">
            "Excellence of quality is the core of our business in terms of extreme control of Supply Chain System and laser-focused inspection."
          </p>

          {/* 4 Interactive Navigation Tabs */}
          <div className="compo-qc-nav-tabs" role="tablist">
            <button 
              className={`compo-qc-nav-btn ${activeTab === 'flow' ? 'active' : ''}`}
              onClick={() => setActiveTab('flow')}
            >
              <Activity size={16} />
              <span>1. 8-Step QC Flow</span>
            </button>
            <button 
              className={`compo-qc-nav-btn ${activeTab === 'process' ? 'active' : ''}`}
              onClick={() => setActiveTab('process')}
            >
              <CheckSquare size={16} />
              <span>2. Material QC Inspection</span>
            </button>
            <button 
              className={`compo-qc-nav-btn ${activeTab === 'equipment' ? 'active' : ''}`}
              onClick={() => setActiveTab('equipment')}
            >
              <Microscope size={16} />
              <span>3. Lab Testing Machines</span>
            </button>
            <button 
              className={`compo-qc-nav-btn ${activeTab === 'certs' ? 'active' : ''}`}
              onClick={() => setActiveTab('certs')}
            >
              <Award size={16} />
              <span>4. ISO Certifications &amp; ESD</span>
            </button>
          </div>
        </div>

        {/* TAB 1: 8-STEP QC FLOW PIPELINE (Slide 09) */}
        {activeTab === 'flow' && (
          <div className="compo-qc-tab-content reveal-on-scroll">
            <div className="compo-qc-flow-container">
              <div className="compo-qc-flow-header">
                <div>
                  <span className="compo-qc-flow-badge">OFFICIAL QC FLOW PIPELINE</span>
                  <h3 className="compo-qc-flow-title">Comprehensive 8-Stage Supply Chain Quality Flow</h3>
                </div>
                <div className="compo-qc-flow-legend">
                  <span className="legend-pass"><span className="legend-dot pass"></span> Approved Path</span>
                  <span className="legend-reject"><span className="legend-dot reject"></span> Strict Rejection Gate</span>
                </div>
              </div>

              {/* 8 Pipeline Step Cards Grid / Pipeline */}
              <div className="compo-qc-pipeline-grid">
                {qcFlowPipeline.map((item, idx) => {
                  const IconComp = iconMap[item.icon] || ShieldCheck;
                  return (
                    <div 
                      key={item.step} 
                      className={`compo-pipeline-card ${item.hasReject ? 'has-reject-gate' : ''}`}
                    >
                      <div className="compo-pipeline-step-badge">
                        <span className="step-num">{item.step}</span>
                      </div>

                      <div className="compo-pipeline-icon-wrap">
                        <IconComp size={22} />
                      </div>

                      <div className="compo-pipeline-info">
                        <h4 className="compo-pipeline-title">{item.title}</h4>
                        <p className="compo-pipeline-desc">{item.desc}</p>
                      </div>

                      {item.hasReject && (
                        <div className="compo-pipeline-reject-tag">
                          <AlertTriangle size={13} />
                          <span>NO ➔ REJECT</span>
                        </div>
                      )}

                      {idx < qcFlowPipeline.length - 1 && (
                        <div className="compo-pipeline-connector" aria-hidden="true">
                          <span className="connector-arrow">➔</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Tagline Callout Footer */}
              <div className="compo-qc-flow-footer-banner">
                <ShieldCheck size={28} className="text-cyan-400" />
                <p className="compo-qc-flow-footer-text">
                  <strong>Zero Compromise Guarantee:</strong> Any lot failing receiving verification or physical/die inspection is immediately rejected and quarantined, protecting your factory lines with 100% genuine parts.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: STRICT MATERIAL QC APPEARANCE INSPECTION (Slide 10) */}
        {activeTab === 'process' && (
          <div className="compo-qc-tab-content reveal-on-scroll">
            <div className="compo-qc-material-container">
              <div className="compo-qc-flow-header">
                <div>
                  <span className="compo-qc-flow-badge">SLIDE 10 STANDARD</span>
                  <h3 className="compo-qc-flow-title">Material QC — 8-Step Appearance &amp; Physical Inspection Process</h3>
                </div>
                <span className="compo-qc-sub-tag">IDEA-STD-1010-B Level 3 Standard</span>
              </div>

              <div className="compo-material-steps-grid">
                {materialQcInspectionSteps.map((step) => {
                  const IconComp = iconMap[step.icon] || CheckSquare;
                  return (
                    <div key={step.num} className="compo-mat-step-card">
                      <div className="compo-mat-step-header">
                        <span className="compo-mat-step-number">STEP {step.num}</span>
                        <div className="compo-mat-step-icon">
                          <IconComp size={20} />
                        </div>
                      </div>
                      <h4 className="compo-mat-step-title">{step.name}</h4>
                      <p className="compo-mat-step-desc">{step.desc}</p>
                      <div className="compo-mat-step-check">
                        <CheckCircle2 size={14} className="text-emerald-400" />
                        <span>Certified Checkpoint</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 8 LABORATORY TESTING MACHINES (Slide 11) */}
        {activeTab === 'equipment' && (
          <div className="compo-qc-tab-content reveal-on-scroll">
            <div className="compo-qc-equipment-container">
              <div className="compo-qc-flow-header">
                <div>
                  <span className="compo-qc-flow-badge">IN-HOUSE LAB INFRASTRUCTURE</span>
                  <h3 className="compo-qc-flow-title">8 Advanced Laboratory Testing Machines &amp; Instruments</h3>
                </div>
                <p className="compo-qc-sub-text-right">High commitment to quality driven by cutting-edge equipment &amp; professional QC engineers.</p>
              </div>

              <div className="compo-equipment-grid">
                {laboratoryTestingEquipment.map((eq) => (
                  <div key={eq.id} className="compo-equipment-card">
                    <div className="compo-eq-card-top">
                      <span className="compo-eq-category">{eq.category}</span>
                      <span className="compo-eq-badge">{eq.badge}</span>
                    </div>
                    <div className="compo-eq-icon-banner">
                      <Microscope size={28} className="compo-eq-main-icon" />
                    </div>
                    <div className="compo-eq-card-body">
                      <h4 className="compo-eq-name">{eq.name}</h4>
                      <p className="compo-eq-desc">{eq.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ISO CERTIFICATIONS & SECURE WAREHOUSING (Slide 03 & 12) */}
        {activeTab === 'certs' && (
          <div className="compo-qc-tab-content reveal-on-scroll">
            <div className="compo-qc-certs-container">
              
              {/* 5 ISO Certifications */}
              <div className="compo-certs-block">
                <div className="compo-qc-flow-header">
                  <div>
                    <span className="compo-qc-flow-badge">QUALIFICATIONS</span>
                    <h3 className="compo-qc-flow-title">5 Major International ISO &amp; Aerospace Certifications</h3>
                  </div>
                </div>

                <div className="compo-iso-certs-grid">
                  {qualificationsAndCertifications.map((cert) => (
                    <div key={cert.code} className={`compo-iso-card compo-iso-${cert.color}`}>
                      <div className="compo-iso-badge-top">{cert.badge}</div>
                      <div className="compo-iso-seal">
                        <Award size={32} />
                        <span className="compo-iso-code">{cert.code}</span>
                      </div>
                      <h4 className="compo-iso-name">{cert.name}</h4>
                      <p className="compo-iso-desc">{cert.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Memberships & Warehousing */}
              <div className="compo-certs-lower-grid">
                {/* Memberships */}
                <div className="compo-memberships-box">
                  <h4 className="compo-box-title">
                    <ShieldCheck size={18} className="text-cyan-400" />
                    <span>Membership in Professional Associations</span>
                  </h4>
                  <div className="compo-membership-cards-row">
                    {industryMemberships.map((m) => (
                      <div key={m.name} className="compo-membership-item">
                        <div className="compo-mem-header">
                          <span className="compo-mem-name">{m.name}</span>
                          <span className="compo-mem-tag">{m.badge}</span>
                        </div>
                        <h5 className="compo-mem-full">{m.fullName}</h5>
                        <p className="compo-mem-desc">{m.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secure Warehousing (Slide 12) */}
                <div className="compo-warehousing-box">
                  <h4 className="compo-box-title">
                    <Warehouse size={18} className="text-amber-400" />
                    <span>Secure Warehousing &amp; Logistics Standards</span>
                  </h4>
                  <div className="compo-wh-features-list">
                    {warehousingAndLogisticsData.features.map((f, idx) => (
                      <div key={idx} className="compo-wh-feat-row">
                        <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                        <div>
                          <strong className="compo-wh-feat-name">{f.title}:</strong>
                          <span className="compo-wh-feat-desc"> {f.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
