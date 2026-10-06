import React from 'react';
import { ShieldCheck, Globe2, Award, Headphones } from 'lucide-react';

export default function ValueProps() {
  const stats = [
    {
      id: 1,
      title: '20+ Years',
      subtitle: 'Industry Experience',
      icon: ShieldCheck,
      color: 'cyan'
    },
    {
      id: 2,
      title: 'Global Supply',
      subtitle: 'Network',
      icon: Globe2,
      color: 'emerald'
    },
    {
      id: 3,
      title: 'Quality Assured',
      subtitle: 'Components',
      icon: Award,
      color: 'amber'
    },
    {
      id: 4,
      title: 'Worldwide',
      subtitle: 'Support',
      icon: Headphones,
      color: 'violet'
    }
  ];

  return (
    <div className="compo-hero-stats-row">
      {stats.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.id} className={`compo-stat-badge compo-stat-${item.color}`}>
            <div className="compo-stat-icon-wrapper">
              <Icon size={26} className="compo-stat-icon" />
              <div className="compo-stat-glow"></div>
            </div>
            <div className="compo-stat-content">
              <span className="compo-stat-title">{item.title}</span>
              <span className="compo-stat-subtitle">{item.subtitle}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
