import React, { useEffect, useRef, useState } from "react";
import styles from "./MUNSkills.module.css";

const SKILLS = [
  {
    title: "Public Speaking",
    description: "Build confidence delivering speeches and presenting arguments to large audiences.",
  },
  {
    title: "Critical Thinking",
    description: "Analyze complex global issues from multiple perspectives and construct logical arguments.",
  },
  {
    title: "Research Skills",
    description: "Investigate countries, policies, and global issues using credible sources.",
  },
  {
    title: "Teamwork & Collaboration",
    description: "Build alliances and draft resolutions through compromise and cooperation.",
  },
  {
    title: "Global Awareness",
    description: "Understand international relations and develop empathy for different cultures.",
  },
  {
    title: "College Preparation",
    description: "Develop skills recognized by universities as valuable for academic success.",
  },
];

const MUNSkills: React.FC = () => {
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
        <div className={styles.imageColumn}>
          <img
            src="/images/main.webp"
            alt="JAMUN Model UN delegates in session"
            className={styles.image}
          />
          <div className={styles.imageOverlay}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>85%</span>
              <span className={styles.statLabel}>of MUN alumni say it shaped their career</span>
            </div>
          </div>
        </div>

        <div className={styles.contentColumn}>
          <span className={styles.tagline}>Why Model UN?</span>
          <h2 className={styles.title}>Skills That Last a Lifetime</h2>
          <p className={styles.intro}>
            Model UN isn't just an activity — it's an investment in your student's future.
          </p>

          <ul className={styles.skillsList}>
            {SKILLS.map((skill, index) => (
              <li key={skill.title} className={styles.skillItem}>
                <span className={styles.skillNumber}>{String(index + 1).padStart(2, '0')}</span>
                <div className={styles.skillContent}>
                  <h3 className={styles.skillTitle}>{skill.title}</h3>
                  <p className={styles.skillDescription}>{skill.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MUNSkills;
