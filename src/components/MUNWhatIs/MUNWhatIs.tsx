import React, { useEffect, useRef, useState } from "react";
import styles from "./MUNWhatIs.module.css";

const MUNWhatIs: React.FC = () => {
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
        <div className={styles.header}>
          <span className={styles.tagline}>New to Model UN?</span>
          <h2 className={styles.title}>What is Model United Nations?</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.mainText}>
            <p>
              <strong>Model United Nations (MUN)</strong> is an educational
              simulation where students role-play as diplomats representing
              countries from around the world. Just like real UN delegates,
              participants research global issues, debate solutions, negotiate
              with other nations, and draft resolutions to address pressing
              international challenges.
            </p>
            <p>
              At JAMUN, our Model UN program is designed specifically for{" "}
              <strong>middle school students in grades 5-8</strong> across the
              United States. Whether your student is passionate about world
              affairs, wants to improve their public speaking, or is looking for
              a meaningful extracurricular activity, Model UN provides a
              supportive environment to grow.
            </p>
          </div>

          <div className={styles.howItWorks}>
            <h3 className={styles.subheading}>How Does a Model UN Conference Work?</h3>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h4>Get Assigned a Country</h4>
                  <p>
                    Each delegate is assigned a country to represent. You'll
                    research your country's positions on global issues and
                    advocate for their interests.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h4>Join a Committee</h4>
                  <p>
                    Committees focus on specific topics like human rights,
                    security, or the environment. We offer beginner,
                    intermediate, and advanced committees.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h4>Debate and Negotiate</h4>
                  <p>
                    During the conference, you'll give speeches, form alliances
                    with other countries, and negotiate solutions to complex
                    global problems.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h4>Write Resolutions</h4>
                  <p>
                    Work with other delegates to draft and vote on resolutions
                    &mdash; formal documents proposing solutions to the issues
                    being discussed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.beginnerNote}>
            <div className={styles.beginnerIcon}>
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
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>
            <div className={styles.beginnerText}>
              <h4>No Experience Required</h4>
              <p>
                JAMUN welcomes first-time delegates! Our beginner-friendly
                committees and comprehensive training materials help new
                participants build confidence before their first conference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MUNWhatIs;
