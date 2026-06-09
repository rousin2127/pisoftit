import { useEffect, useRef, useState } from 'react';

const parseValue = (text) => {
  const match = text.match(/^([\d.]+)(.*)$/);
  if (!match) return null;
  return { num: parseFloat(match[1]), suffix: match[2] };
};

const useCountUp = (endValue, duration = 2000) => {
  const [display, setDisplay] = useState('0');
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const parsed = parseValue(endValue);
    if (!parsed) {
      setDisplay(endValue);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const { num, suffix } = parsed;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = num * eased;
            const formatted =
              num % 1 !== 0
                ? current.toFixed(1)
                : Math.floor(current).toString();
            setDisplay(`${formatted}${suffix}`);

            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [endValue, duration]);

  return { ref, display };
};

export default useCountUp;
