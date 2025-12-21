import React, { useEffect, useRef, useState } from "react";
import styles from "./MUNDates.module.css";

export interface ImportantDate {
  date: string;
  event: string;
  description?: string;
}

export interface MUNDatesProps {
  dates?: ImportantDate[];
}

const DEFAULT_DATES: ImportantDate[] = [
  { date: "November 15", event: "Registration Opens", description: "Schools can begin registering delegations" },
  { date: "February 28", event: "Registration Closes", description: "Schools will recieve committee assignments" },
  { date: "April 10", event: "Position Papers Due", description: "Submit papers for feedback" },
  { date: "April 11-12", event: "Conference Dates", description: "The main JAMUN conference" },
];

export default function MUNDates({ dates = DEFAULT_DATES }: MUNDatesProps) {
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
          <span className={styles.tagline}>Mark Your Calendar</span>
          <h2 className={styles.title}>Important Dates</h2>
          <p className={styles.intro}>
            Plan ahead for a successful Model UN experience. Here are the key
            dates you need to know.
          </p>

          <div className={styles.timeline}>
            {dates.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineMarker}>
                  <span className={styles.markerNumber}>{index + 1}</span>
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineDate}>{item.date}</span>
                  <span className={styles.timelineEvent}>{item.event}</span>
                  {item.description && (
                    <span className={styles.timelineDescription}>{item.description}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imageColumn}>
          <img
            src="/images/DSC00217.webp"
            alt="JAMUN delegates listening attentively in committee session"
            className={styles.image}
          />
          <div className={styles.imageOverlay}>
            <div className={styles.nextEvent}>
              <span className={styles.nextEventLabel}>Next Conference</span>
              <span className={styles.nextEventDate}>April 11-12, 2025</span>
              <span className={styles.nextEventLocation}>Chicago, IL; Raleigh, NC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
