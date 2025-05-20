'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  endNumber: number;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ endNumber, duration = 2 }) => {
  const numberRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!numberRef.current) return;

    const countUp = numberRef.current;

    gsap.fromTo(
      countUp,
      {
        innerText: 0,
      },
      {
        innerText: endNumber,
        duration: duration,
        scrollTrigger: {
          trigger: countUp,
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
          onUpdate: () => {
            const currentText = Math.floor(Number(countUp.innerText));
            countUp.innerText = currentText.toString(); // Update text while scrolling
          },
        },
        ease: 'power2.out',
        snap: { innerText: 1 },
      }
    );
  }, [endNumber, duration]);

  return <div ref={numberRef} style={{ fontSize: '3rem' }}></div>;
};

export default CountUp;
