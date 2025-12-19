import React from 'react';
import styles from './CompetitionButtons.module.css';

interface Competition {
  label: string;
  href: string;
  description: string;
  imageUrl: string;
}

interface CompetitionButtonsProps {
  competitions: Competition[];
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
      </div>
      <div className={styles.cardIcon}>
        <ArrowIcon />
      </div>
    </a>
  );
};

const CompetitionButtons: React.FC<CompetitionButtonsProps> = ({ competitions }) => {
  return (
    <div className={styles.container}>
      {competitions.map((comp) => (
        <CompetitionCard key={comp.href} competition={comp} />
      ))}
    </div>
  );
};

const COMPETITION_DATA: Competition[] = [
  {
    label: 'Model UN',
    href: '/modelun',
    description: 'Debate global issues and practice diplomacy.',
    imageUrl: '/images/leaderboards.webp',
  },
  {
    label: 'Mock Trial',
    href: '/mocktrial',
    description: 'Master legal advocacy and courtroom procedures.',
    imageUrl: '/images/mainbackground.webp',
  },
  {
    label: 'Mathletes',
    href: '/mathletes',
    description: 'Challenge your skills in competitive mathematics.',
    imageUrl: '/images/shape_tomorrow.webp',
  },
];

const CompetitionButtonsWithData: React.FC = () => {
  return <CompetitionButtons competitions={COMPETITION_DATA} />;
};

export default CompetitionButtonsWithData;
