import React from 'react';
import styles from './CompetitionButtons.module.css';

// Define the shape of a single competition item
interface Competition {
  label: string;
  href: string;
  description: string;
  // --- NEW PROPERTY ---
  imageUrl: string;
}

// Define the props for the CompetitionButtons component (optional, but good practice)
interface CompetitionButtonsProps {
  competitions: Competition[];
}

const CompetitionButtons: React.FC<CompetitionButtonsProps> = ({ competitions }) => {
  return (
    <div className={styles.container}>
      {competitions.map((comp) => (
        <a 
            key={comp.href} 
            href={comp.href} 
            className={styles.buttonLink}
            // Pass the image URL as a CSS custom property (inline style)
            style={{ '--bg-image': `url(${comp.imageUrl})` } as React.CSSProperties}
          >
          <div className={styles.buttonContent}>
            <span className={styles.buttonLabel}>{comp.label}</span>
            <p className={styles.buttonDescription}>{comp.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

// Define the competition data
const COMPETITION_DATA: Competition[] = [
  { 
    label: "Model UN", 
    href: "/modelun", 
    description: "Debate global issues and practice diplomacy.",
    imageUrl: "/images/leaderboards.webp" // CHANGE PATH
  },
  { 
    label: "Mock Trial", 
    href: "/mocktrial", 
    description: "Master legal advocacy and courtroom procedures.",
    imageUrl: "/images/mainbackground.webp" // CHANGE PATH
  },
  { 
    label: "Mathletes", 
    href: "/mathletes", 
    description: "Challenge your skills in competitive mathematics.",
    imageUrl: "/images/shape_tomorrow.webp" // CHANGE PATH
  },
];

// Default export uses the defined data
const CompetitionButtonsWithData: React.FC = () => {
    return (
        <CompetitionButtons competitions={COMPETITION_DATA} />
    );
};

export default CompetitionButtonsWithData;