import React, { useEffect, useRef, useState } from 'react';

/**
 * AnimatedNumber
 * Smoothly animates numbers starting strictly from 0 up to target value when scrolled into view.
 * Automatically re-triggers every time the user scrolls the element into view.
 */
export default function AnimatedNumber({ 
  value, 
  duration, 
  className = "", 
  prefix = "", 
  suffix = "" 
}) {
  const parsed = parseValue(value);
  const initialDisplay = formatNumber(0, parsed.decimals, parsed.hasCommas);
  const [displayValue, setDisplayValue] = useState(initialDisplay);
  const elementRef = useRef(null);
  const animFrameRef = useRef(null);
  const hasEverAnimated = useRef(false);

  // Dynamic duration: small numbers (like 20) need slightly slower ticks so increments are clear
  const effectiveDuration = duration || (parsed.target <= 30 ? 1400 : 1800);

  useEffect(() => {
    if (parsed.isStatic || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(parsed.raw);
      return;
    }

    const currentEl = elementRef.current;
    if (!currentEl) return;

    let isVisible = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            hasEverAnimated.current = true;
            // Cancel any ongoing animation frame
            if (animFrameRef.current) {
              cancelAnimationFrame(animFrameRef.current);
            }
            // Start count up from 0 to target
            startCountUp(parsed.target, parsed.decimals, parsed.hasCommas, effectiveDuration);
          } else {
            // When scrolled out of view, reset back to 0 so next scroll into view animates again
            if (isVisible) {
              isVisible = false;
              if (animFrameRef.current) {
                cancelAnimationFrame(animFrameRef.current);
              }
              setDisplayValue(formatNumber(0, parsed.decimals, parsed.hasCommas));
            }
          }
        });
      },
      {
        threshold: 0.2, // At least 20% visible before triggering
        rootMargin: '0px 0px -20px 0px'
      }
    );

    observer.observe(currentEl);

    return () => {
      observer.disconnect();
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [value, effectiveDuration]);

  const startCountUp = (target, decimals, hasCommas, animDuration) => {
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / animDuration, 1);
      
      // Easing: easeOutCubic for natural slowing down as it reaches the target
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = easedProgress * target;

      setDisplayValue(formatNumber(current, decimals, hasCommas));

      if (progress < 1) {
        animFrameRef.current = window.requestAnimationFrame(step);
      } else {
        // Guarantee final exact integer or decimal precision
        setDisplayValue(formatNumber(target, decimals, hasCommas));
      }
    };

    animFrameRef.current = window.requestAnimationFrame(step);
  };

  const finalPrefix = prefix || parsed.prefix;
  const finalSuffix = suffix || parsed.suffix;

  return (
    <span ref={elementRef} className={`compo-animated-number ${className}`}>
      {finalPrefix}
      {displayValue}
      {finalSuffix}
    </span>
  );
}

/**
 * Format a numeric value with decimals and thousands commas
 */
function formatNumber(val, decimals, hasCommas) {
  let formatted;
  if (decimals > 0) {
    formatted = Number(val).toFixed(decimals);
  } else {
    formatted = Math.floor(Number(val)).toString();
  }

  if (hasCommas) {
    const parts = formatted.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    formatted = parts.join('.');
  }

  return formatted;
}

/**
 * Parse strings like "20+ Years", "2,000,000+", "99.98%", "5,000+" or numbers
 */
function parseValue(val) {
  if (typeof val === 'number') {
    return {
      target: val,
      decimals: val % 1 !== 0 ? 2 : 0,
      hasCommas: val >= 1000,
      prefix: '',
      suffix: '',
      raw: val.toString(),
      isStatic: false
    };
  }

  const str = String(val || '').trim();
  
  // Match prefix, number with commas/decimals, and suffix
  const match = str.match(/^([^\d.]*)((?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?)(.*)$/);
  
  if (!match) {
    return {
      target: 0,
      decimals: 0,
      hasCommas: false,
      prefix: '',
      suffix: '',
      raw: str,
      isStatic: true
    };
  }

  const [, leadingPrefix, numStr, trailingSuffix] = match;
  const hasCommas = numStr.includes(',');
  const cleanNumStr = numStr.replace(/,/g, '');
  const target = parseFloat(cleanNumStr);
  const decimals = cleanNumStr.includes('.') ? cleanNumStr.split('.')[1].length : 0;

  return {
    target: isNaN(target) ? 0 : target,
    decimals,
    hasCommas,
    prefix: leadingPrefix,
    suffix: trailingSuffix,
    raw: str,
    isStatic: isNaN(target)
  };
}
