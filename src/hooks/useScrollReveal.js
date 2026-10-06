import { useEffect } from 'react';

/**
 * Custom hook to activate smooth on-scroll reveal animations across the entire page.
 * Uses native IntersectionObserver for maximum 60fps hardware-accelerated performance.
 */
export default function useScrollReveal() {
  useEffect(() => {
    // If IntersectionObserver is not supported, reveal all immediately
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll, .reveal-scale, .reveal-left, .reveal-right').forEach(el => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once revealed, unobserve so it remains smoothly visible
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -60px 0px', // triggers slightly before full view for smooth perception
      threshold: 0.12
    });

    const elementsToReveal = document.querySelectorAll(
      '.reveal-on-scroll, .reveal-scale, .reveal-left, .reveal-right, .reveal-stagger'
    );

    elementsToReveal.forEach(el => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);
}
