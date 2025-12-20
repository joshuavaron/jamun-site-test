import React from 'react';
import styles from './CompetitionButtons.module.css';

interface Competition {
  label: string;
  href: string;
  description: string;
  imageUrl: string;
  highlights?: string[];
  cta?: string;
}

interface CompetitionButtonsProps {
  competitions: Competition[];
  showHeader?: boolean;
  headerTagline?: string;
  headerTitle?: string;
  headerSubtitle?: string;
}

const ArrowIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

const CompetitionCard: React.FC<{ competition: Competition }> = ({ competition }) => {
  return (
    <a href={competition.href} className={styles.card}>
      <div
        className={styles.cardBackground}
        style={{ backgroundImage: `url(${competition.imageUrl})` }}
      />
      <div className={styles.cardOverlay} />
      <div className={styles.cardContent}>
        <div className={styles.cardAccent} />
        <h3 className={styles.cardLabel}>{competition.label}</h3>
        <p className={styles.cardDescription}>{competition.description}</p>
        {competition.highlights && competition.highlights.length > 0 && (
          <ul className={styles.cardHighlights}>
            {competition.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        )}
        {competition.cta && (
          <span className={styles.cardCta}>{competition.cta}</span>
        )}
      </div>
      <div className={styles.cardIcon}>
        <ArrowIcon />
      </div>
    </a>
  );
};

const CompetitionButtons: React.FC<CompetitionButtonsProps> = ({
  competitions,
  showHeader = false,
  headerTagline,
  headerTitle,
  headerSubtitle,
}) => {
  return (
    <section className={styles.section}>
      {showHeader && (
        <div className={styles.header}>
          {headerTagline && <span className={styles.tagline}>{headerTagline}</span>}
          {headerTitle && <h2 className={styles.title}>{headerTitle}</h2>}
          {headerSubtitle && <p className={styles.subtitle}>{headerSubtitle}</p>}
        </div>
      )}
      <div className={styles.container}>
        {competitions.map((comp) => (
          <CompetitionCard key={comp.href} competition={comp} />
        ))}
      </div>
    </section>
  );
};

export default CompetitionButtons;
