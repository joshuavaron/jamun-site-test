import React from 'react';
import styles from './ToggleableLeaderboard.module.css';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

// Define the shape of a single leaderboard entry, including previous rank
interface LeaderboardEntry {
  rank: number;
  school: string;
  score: number;
  previousRank: number; // Crucial for calculating movement
}

interface ChangeLogProps {
  data: LeaderboardEntry[];
}

// Interface for the calculated mover data
interface Mover {
  school: string;
  change: number;
}

const ChangeLog: React.FC<ChangeLogProps> = ({ data }) => {
  // 1. Calculate the rank change for each school
  const movers = data.map(entry => ({
    school: entry.school,
    // Negative change means rank improved (moved up the list)
    // e.g., rank 5 (current) - rank 10 (previous) = -5 (a 5 place increase)
    // Positive change means rank worsened (moved down the list)
    // e.g., rank 10 (current) - rank 5 (previous) = +5 (a 5 place decrease)
    change: entry.rank - entry.previousRank,
  }));

  // 2. Separate into increases (change < 0) and decreases (change > 0)
  const increases = movers
    .filter(m => m.change < 0)
    // Sort by largest absolute increase (e.g., -10 is bigger than -5)
    .sort((a, b) => a.change - b.change) 
    .slice(0, 3); // Take top 3

  const decreases = movers
    .filter(m => m.change > 0)
    // Sort by largest decrease
    .sort((a, b) => b.change - a.change) 
    .slice(0, 3); // Take top 3

  // Helper function to render a single mover item
  const renderMoverItem = (mover: Mover, isIncrease: boolean) => {
    const icon = isIncrease ? <FaArrowUp /> : <FaArrowDown />;
    const sign = isIncrease ? '' : '+'; // Hide the '-' for increases since we use the icon
    
    // Use Math.abs for display, so increases show as "+X places"
    const displayChange = Math.abs(mover.change);

    return (
      <li key={mover.school} className={isIncrease ? styles.increase : styles.decrease}>
        <span className={styles.changeIcon}>{icon}</span>
        <span className={styles.changeValue}>{sign}{displayChange}</span>
        <span className={styles.moverSchool}>{mover.school}</span>
      </li>
    );
  };

  return (
    <div className={styles.changeLogContainer}>
      <h3 className={styles.changeLogTitle}>Recent Changes</h3>
      
      {increases.length > 0 && (
        <div className={styles.changeGroup}>
          <h4 className={styles.groupHeader}>Top Gains</h4>
          <ul className={styles.changeList}>
            {increases.map(m => renderMoverItem(m, true))}
          </ul>
        </div>
      )}

      {decreases.length > 0 && (
        <div className={styles.changeGroup}>
          <h4 className={styles.groupHeader}>📉 Top Drops</h4>
          <ul className={styles.changeList}>
            {decreases.map(m => renderMoverItem(m, false))}
          </ul>
        </div>
      )}

      {increases.length === 0 && decreases.length === 0 && (
          <p className={styles.noChanges}>No significant changes this period.</p>
      )}
    </div>
  );
};

export default ChangeLog;