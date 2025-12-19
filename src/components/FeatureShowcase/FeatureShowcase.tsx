import React, { useEffect, useRef, useState } from 'react';
import styles from './FeatureShowcase.module.css';

export interface FeatureShowcaseProps {
  title: string;
  description: string;
  imageUrl: string;
  imageOnLeft?: boolean;
  tagline?: string;
  highlights?: string[];
}

const CheckIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  title,
  description,
  imageUrl,
  imageOnLeft = false,
  tagline,
  highlights,
}) => {
  const [isVisible, setIsVisible] = useState(false);
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
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerClasses = [
    styles.showcaseContainer,
    imageOnLeft ? styles.reverse : '',
    isVisible ? styles.visible : styles.hidden,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={containerRef} className={containerClasses}>
      {/* Image Block */}
      <div className={styles.imageBlock}>
        <div className={styles.imageWrapper}>
          <img
            src={imageUrl}
            alt={`Illustration of ${title}`}
            className={styles.featureImage}
            loading="lazy"
          />
          <div className={`${styles.floatingAccent} ${styles.top}`} />
          <div className={`${styles.floatingAccent} ${styles.bottom}`} />
        </div>
      </div>

      {/* Text Block */}
      <div className={styles.textBlock}>
        {tagline && <span className={styles.tagline}>{tagline}</span>}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {highlights && highlights.length > 0 && (
          <ul className={styles.highlights}>
            {highlights.map((item, index) => (
              <li key={index} className={styles.highlightItem}>
                <span className={styles.checkIcon}>
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FeatureShowcase;
