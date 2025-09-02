import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration = 2, 
  suffix = "" 
}) => {
  const [count, setCount] = useState<number>(0);
  const { ref, controls } = useScrollAnimation();

  useEffect(() => {
    if (controls) {
      let startTime: number | null = null;
      const animate = (timestamp: number): void => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [controls, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

export default AnimatedCounter;