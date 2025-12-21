import React, { useEffect, useRef, useState } from "react";
import styles from "./MUNForTeachers.module.css";

const REASONS = [
  {
    title: "Aligns with Curriculum Standards",
    description:
      "Model UN supports Common Core standards in reading, writing, speaking, and listening while reinforcing social studies content.",
  },
  {
    title: "Develops 21st Century Skills",
    description:
      "Students build critical thinking, collaboration, communication, and creativity — the essential skills employers and colleges seek.",
  },
  {
    title: "Engages Diverse Learners",
    description:
      "From history buffs to future lawyers to those passionate about social justice — there's a committee for everyone.",
  },
  {
    title: "No Experience Required",
    description:
      "JAMUN provides comprehensive advisor training and ongoing support. You don't need prior MUN experience to start.",
  },
];

const RESOURCES = [
  { title: "General Assembly Guide", description: "Comprehensive guide to competing in a committee" },
  { title: "Position Paper Outline", description: "Easy outline for delegate position papers" },
  { title: "Sample Draft Resolution", description: "Prepare students for their first conference" },
];

const MUNForTeachers: React.FC = () => {
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
            src="/images/DSC01852.webp"
            alt="JAMUN Model UN committee session with students and chairs"
            className={styles.image}
          />
          <div className={styles.imageOverlay}>
            <div className={styles.resourcesCompact}>
              <span className={styles.resourcesLabel}>Free Resources</span>
              {RESOURCES.map((resource, index) => (
                <div key={index} className={styles.resourceItem}>
                  <span className={styles.resourceBullet}>→</span>
                  <span>{resource.title}</span>
                </div>
              ))}
              <a href="/modelun/resources" className={styles.resourcesLink}>
                Access All Resources
              </a>
            </div>
          </div>
        </div>

        <div className={styles.contentColumn}>
          <span className={styles.tagline}>For Educators</span>
          <h2 className={styles.title}>Bring Model UN to Your School</h2>
          <p className={styles.intro}>
            Whether you're an experienced MUN advisor or looking to start a new
            program, we provide the resources and support you need.
          </p>

          <div className={styles.reasonsList}>
            {REASONS.map((reason, index) => (
              <div key={reason.title} className={styles.reasonItem}>
                <span className={styles.reasonNumber}>{String(index + 1).padStart(2, '0')}</span>
                <div className={styles.reasonContent}>
                  <h3 className={styles.reasonTitle}>{reason.title}</h3>
                  <p className={styles.reasonDescription}>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="/register" className={styles.ctaButton}>
            Register Your School
          </a>
        </div>
      </div>
    </section>
  );
};

export default MUNForTeachers;
