import { useEffect } from 'react';

/**
 * Custom hook to activate smooth on-scroll reveal animations across the entire page.
 * Uses native IntersectionObserver for maximum 60fps hardware-accelerated performance.
 * Works seamlessly across route switches, tab changes, and dynamic lists.
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

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once revealed, keep it visible
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px', // triggers slightly before entering full view
      threshold: 0.1
    });

    const registerElements = () => {
      const elementsToReveal = document.querySelectorAll(SELECTORS);
      elementsToReveal.forEach(el => {
        if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      });
    };

    registerElements();

    // Small delay to catch any children rendered after initial tick
    const timer = setTimeout(registerElements, 80);

    // Watch for DOM mutations (e.g. filtered tab switches, search input)
    const mutationObserver = new MutationObserver(() => {
      registerElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup observer on unmount
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, deps);
}
