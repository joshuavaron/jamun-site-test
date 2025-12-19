import React, { useEffect, useRef, useState } from "react";
import styles from "./MUNAbout.module.css";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface MUNAboutProps {
  tagline?: string;
  title: string;
  description: string;
  stats?: Stat[];
}

const DEFAULT_STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Delegates" },
  { value: 16, suffix: "", label: "Committees" },
  { value: 2, suffix: "", label: "Days" },
  { value: 30, suffix: "+", label: "Schools" },
];

const GlobeIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
    />
  </svg>
);

const AnimatedCounter: React.FC<{
  value: number;
  suffix: string;
  isVisible: boolean;
}> = ({ value, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span className={styles.statNumber}>
      {count}
      {suffix}
    </span>
  );
};

const MUNAbout: React.FC<MUNAboutProps> = ({
  tagline = "About Our Conference",
  title,
  description,
  stats = DEFAULT_STATS,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStatIndex, setActiveStatIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className={`${styles.aboutSection} ${isVisible ? styles.visible : styles.hidden}`}
    >
      <div className={styles.container}>
        {/* Header with Icon */}
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <GlobeIcon />
          </div>
          <span className={styles.tagline}>{tagline}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`${styles.statCard} ${activeStatIndex === index ? styles.active : ""}`}
              onMouseEnter={() => setActiveStatIndex(index)}
              onMouseLeave={() => setActiveStatIndex(null)}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={styles.statGlow} />
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                isVisible={isVisible}
              />
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MUNAbout;
