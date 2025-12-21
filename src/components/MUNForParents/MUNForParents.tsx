import React, { useEffect, useRef, useState } from "react";
import styles from "./MUNForParents.module.css";

const BENEFITS = [
  {
    title: "Safe, Supervised Environment",
    description: "All conferences supervised by trained volunteers with strict safety protocols.",
  },
  {
    title: "Affordable & Accessible",
    description: "100% nonprofit with financial aid available for every family.",
  },
  {
    title: "Academic Benefits",
    description: "Strengthens research, writing, and critical analysis skills.",
  },
  {
    title: "Lasting Friendships",
    description: "Students connect with peers who share their global interests.",
  },
];

const MUNForParents: React.FC = () => {
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
        threshold: 0.1,
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
      className={`${styles.section} ${isVisible ? styles.visible : styles.hidden}`}
    >
      <div className={styles.container}>
        <div className={styles.contentColumn}>
          <span className={styles.tagline}>For Parents</span>
          <h2 className={styles.title}>Supporting Your Child's MUN Journey</h2>
          <p className={styles.intro}>
            We know you want the best for your child. Here's how Model UN can
            help them grow academically, socially, and personally.
          </p>

          <div className={styles.benefitsGrid}>
            {BENEFITS.map((benefit, index) => (
              <div key={benefit.title} className={styles.benefitItem}>
                <span className={styles.benefitNumber}>{String(index + 1).padStart(2, '0')}</span>
                <div className={styles.benefitContent}>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.testimonial}>
            <blockquote className={styles.quote}>
              "JAMUN helped my daughter find her voice. She used to be shy about speaking
              in class, but now she feels confident talking to groups of her peers."
            </blockquote>
            <cite className={styles.cite}>— Parent of 2024 JAMUN Delegate</cite>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <img
            src="/images/DSC01362.webp"
            alt="JAMUN students enjoying lunch together at conference"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default MUNForParents;
