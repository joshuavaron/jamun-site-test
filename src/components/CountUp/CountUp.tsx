import { useState, useEffect, useRef } from "react";

interface CountUpProps {
  end: number;
  baseDuration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

// Calculate duration based on leftmost digit (1-9)
const getDurationFromLeftmostDigit = (num: number, baseDuration: number): number => {
  const leftmostDigit = parseInt(String(Math.abs(num))[0], 10) || 1;
  // Scale duration: digit 1 = shortest, digit 9 = longest
  // Range from 30% to 200% of base duration
  return baseDuration * (0.3 + (leftmostDigit / 9) * 1.7);
};

const CountUp: React.FC<CountUpProps> = ({
  end,
  baseDuration = 2500,
  prefix = "",
  suffix = "",
  className,
}) => {
  const duration = getDurationFromLeftmostDigit(end, baseDuration);
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOut);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default CountUp;
