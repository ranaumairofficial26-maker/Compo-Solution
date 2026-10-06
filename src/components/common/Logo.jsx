import React from 'react';

export default function Logo({ className = '', variant = 'default' }) {
  return (
    <div className={`compo-brand-logo ${className}`}>
      <img 
        src="/compo-logo.png" 
        alt="COMPO Electronics" 
        className={`compo-logo-img ${variant === 'footer' ? 'compo-logo-footer-img' : ''}`}
        loading="eager"
      />
    </div>
  );
}
