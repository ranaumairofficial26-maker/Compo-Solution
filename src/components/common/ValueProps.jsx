import React from 'react';
import { ShieldCheck, Globe2, Award, Headphones } from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';

export default function ValueProps() {
  const stats = [
    {
      id: 1,
      num: 20,
      suffix: '+ Years',
      subtitle: 'Industry Experience',
      icon: ShieldCheck,
      color: 'cyan'
    },
    {
      id: 2,
      num: 150,
      suffix: '+ Hubs',
      subtitle: 'Global Supply Network',
      icon: Globe2,
      color: 'emerald'
    },
    {
      id: 3,
      num: 100,
      suffix: '% Assured',
      subtitle: 'Tested Original Parts',
      icon: Award,
      color: 'amber'
    },
    {
      id: 4,
      num: 24,
      suffix: '/7 Active',
      subtitle: 'Worldwide Engineering Desk',
      icon: Headphones,
      color: 'violet'
    }
  ];

  return (
    <div className="compo-hero-stats-row reveal-stagger">
      {stats.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.id} className={`compo-stat-badge compo-stat-${item.color}`}>
            <div className="compo-stat-icon-wrapper">
              <Icon size={26} className="compo-stat-icon" />
              <div className="compo-stat-glow"></div>
            </div>
            <div className="compo-stat-content">
              <span className="compo-stat-title">
                <AnimatedNumber value={item.num} suffix={item.suffix} />
              </span>
              <span className="compo-stat-subtitle">{item.subtitle}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
