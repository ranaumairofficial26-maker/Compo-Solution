import { useEffect } from 'react';

/**
 * Custom hook to activate bidirectional on-scroll reveal animations across the entire page.
 * Re-triggers smoothly whenever an element scrolls into view from either direction (scrolling UP or DOWN).
 * Uses native IntersectionObserver with 60fps hardware acceleration.
 */
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const SELECTORS = [
      '.reveal-on-scroll',
      '.reveal-scale',
      '.reveal-left',
      '.reveal-right',
      '.reveal-stagger',
      '.compo-team-card',
      '.compo-team-stat-card',
      '.compo-culture-bullet-item',
      '.compo-culture-stat-box'
    ].join(', ');

    // If IntersectionObserver is not supported, reveal all immediately
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll(SELECTORS).forEach(el => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        } else {
          // When scrolled out of viewport (either scrolled up past it or scrolled down past it),
          // remove is-revealed so that scrolling back into view re-triggers the animation!
          entry.target.classList.remove('is-revealed');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    const registered = new WeakSet();

    const registerElements = () => {
      const elementsToReveal = document.querySelectorAll(SELECTORS);
      elementsToReveal.forEach(el => {
        if (!registered.has(el)) {
          registered.add(el);
          observer.observe(el);
        }
      });
    };

    registerElements();

    // Small delay to catch any children rendered after initial tick
    const timer = setTimeout(registerElements, 100);

    // Watch for DOM mutations (e.g. filtered tab switches, search input)
    const mutationObserver = new MutationObserver(() => {
      registerElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, deps);
}
