import { useEffect } from 'react';

const REVEAL_SELECTORS = '.reveal, .reveal-left, .reveal-right, .reveal-scale';

const revealInView = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
};

const useScrollReveal = (pathname) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll(REVEAL_SELECTORS);
    elements.forEach((el) => {
      el.classList.remove('active');
      observer.observe(el);
    });

    // Elements at top of a new route may already be in view before observer fires
    requestAnimationFrame(() => {
      elements.forEach((el) => {
        if (revealInView(el)) {
          el.classList.add('active');
        }
      });
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [pathname]);
};

export default useScrollReveal;
