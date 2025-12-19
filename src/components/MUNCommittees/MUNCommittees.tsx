import React, { useEffect, useRef, useState } from "react";
import styles from "./MUNCommittees.module.css";

interface Committee {
  name: string;
  topic: string;
  description: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  delegateCount?: number;
}

interface MUNCommitteesProps {
  tagline?: string;
  title?: string;
  subtitle?: string;
  committees?: Committee[];
  viewAllHref?: string;
  totalCommittees?: number;
}

const DEFAULT_COMMITTEES: Committee[] = [
  {
    name: "General Assembly",
    topic: "Climate Change and Sustainable Development",
    description:
      "Discuss global strategies for combating climate change while promoting economic growth in developing nations.",
    difficulty: "Beginner",
    delegateCount: 120,
  },
  {
    name: "Security Council",
    topic: "Cybersecurity and International Peace",
    description:
      "Address the growing threats of cyber warfare and establish frameworks for digital security cooperation.",
    difficulty: "Advanced",
    delegateCount: 15,
  },
  {
    name: "Human Rights Council",
    topic: "Refugee Rights and Migration",
    description:
      "Examine policies to protect the rights of refugees and create sustainable solutions for global migration.",
    difficulty: "Intermediate",
    delegateCount: 47,
  },
  {
    name: "Economic and Social Council",
    topic: "Global Economic Inequality",
    description:
      "Develop strategies to bridge the wealth gap and promote inclusive economic policies worldwide.",
    difficulty: "Intermediate",
    delegateCount: 54,
  },
];

const UsersIcon: React.FC = () => (
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
      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    />
  </svg>
);

const ArrowRightIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return styles.difficultyBeginner;
    case "Intermediate":
      return styles.difficultyIntermediate;
    case "Advanced":
      return styles.difficultyAdvanced;
    default:
      return "";
  }
};

const MUNCommittees: React.FC<MUNCommitteesProps> = ({
  tagline = "Explore",
  title = "Our Committees",
  subtitle = "Each committee offers unique challenges and opportunities for delegates to engage with pressing global issues.",
  committees = DEFAULT_COMMITTEES,
  viewAllHref = "/modelun/committees",
  totalCommittees = 16,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // committees array is the sample to display (4 on desktop, 3 on mobile via CSS)
  const hasMore = totalCommittees > committees.length;

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
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tagline}>{tagline}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {/* Committees Grid */}
        <div className={styles.grid}>
          {committees.map((committee, index) => (
            <article
              key={committee.name}
              className={`${styles.card} ${hoveredIndex === index ? styles.cardHovered : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className={styles.cardAccent} />

              <div className={styles.cardHeader}>
                <h3 className={styles.committeeName}>{committee.name}</h3>
                {committee.difficulty && (
                  <span
                    className={`${styles.difficultyBadge} ${getDifficultyColor(committee.difficulty)}`}
                  >
                    {committee.difficulty}
                  </span>
                )}
              </div>

              <p className={styles.topic}>{committee.topic}</p>
              <p className={styles.description}>{committee.description}</p>

              <div className={styles.cardFooter}>
                {committee.delegateCount && (
                  <div className={styles.delegateInfo}>
                    <span className={styles.delegateIcon}>
                      <UsersIcon />
                    </span>
                    <span className={styles.delegateCount}>
                      {committee.delegateCount} delegates
                    </span>
                  </div>
                )}
                <span className={styles.learnMore}>
                  Learn more
                  <span className={styles.arrowIcon}>
                    <ArrowRightIcon />
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        {hasMore && (
          <div className={styles.viewAllWrapper}>
            <a href={viewAllHref} className={styles.viewAllButton}>
              View All {totalCommittees} Committees
              <span className={styles.buttonArrow}>
                <ArrowRightIcon />
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default MUNCommittees;
