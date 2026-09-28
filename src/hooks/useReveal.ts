import { useEffect, useRef } from 'react';

/** Reveal once on entry; leave content visible when motion is reduced. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const items = root.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12 });
    items.forEach(item => { item.classList.add('will-reveal'); observer.observe(item); });
    return () => observer.disconnect();
  }, []);
  return ref;
}
