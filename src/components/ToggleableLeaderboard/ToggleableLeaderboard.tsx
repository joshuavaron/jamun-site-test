import React, { useState } from "react";
import styles from "./ToggleableLeaderboard.module.css";
import { FaChevronLeft, FaChevronRight, FaTrophy, FaArrowUp } from "react-icons/fa"; // Removed FaArrowDown

// --- Data Interfaces ---

// Define the shape of a single leaderboard entry (row)
interface LeaderboardEntry {
  rank: number;
  school: string;
  score: number;
  isCurrentUserSchool?: boolean;
  previousRank: number; // Crucial for calculating movement
}

// Define the shape of a full leaderboard (a specific category)
interface Leaderboard {
  title: string;
  data: LeaderboardEntry[];
}

// Props for the ToggleableLeaderboard component
interface ToggleableLeaderboardProps {
  leaderboards: Leaderboard[];
}

// Interface for the calculated mover data
interface Mover {
  school: string;
  change: number; // Negative means rank improved
}

// --- Leaderboard Row Component (Helper) ---

const LeaderboardRow: React.FC<LeaderboardEntry> = ({
  rank,
  school,
  score,
  isCurrentUserSchool,
}) => {
  const rowClass = isCurrentUserSchool
    ? styles.highlightedRow
    : styles.leaderboardRow;

  return (
    <tr className={rowClass}>
      <td>
        <span className={styles.rankBadge}>
          {rank <= 3 && <FaTrophy className={styles.trophyIcon} />}
          {rank}
        </span>
      </td>
      <td className={styles.schoolName}>{school}</td>
      <td className={styles.scoreValue}>{score.toLocaleString()}</td>
    </tr>
  );
};

// --- ChangeLog Component (Sidebar) ---

const ChangeLog: React.FC<{ data: LeaderboardEntry[] }> = ({ data }) => {
  // 1. Calculate the rank change for each school
  const movers: Mover[] = data.map(entry => ({
    school: entry.school,
    // Negative change means rank improved (moved up the list)
    change: entry.rank - entry.previousRank,
  }));

  // 2. Filter for increases (change < 0) and sort by the largest gain (most negative value)
  const topImprovers = movers
    .filter(m => m.change < 0)
    // Sort by largest absolute increase (e.g., -10 is bigger than -5)
    .sort((a, b) => a.change - b.change) 
    .slice(0, 6); // Take top 6 improvers

  // Helper function to render a single mover item
  const renderMoverItem = (mover: Mover) => {
    // Only use the up arrow since we are only showing improvers
    const icon = <FaArrowUp />;
    const sign = '+'; 
    
    // Use Math.abs for display
    const displayChange = Math.abs(mover.change);

    return (
      <li key={mover.school} className={styles.increase}>
        <span className={styles.changeIcon}>{icon}</span>
        <span className={styles.changeValue}>{sign}{displayChange}</span>
        <span className={styles.moverSchool}>{mover.school}</span>
      </li>
    );
  };

  return (
    <div className={styles.changeLogContainer}>
      <h3 className={styles.changeLogTitle}>Top 6 Movers</h3>
      
      {topImprovers.length > 0 ? (
        <div className={styles.changeGroup}>
          <h4 className={styles.groupHeader}>Top Gains</h4>
          <ul className={styles.changeList}>
            {topImprovers.map(renderMoverItem)}
          </ul>
        </div>
      ) : (
          <p className={styles.noChanges}>No rank improvements this period.</p>
      )}
    </div>
  );
};

// --- Main ToggleableLeaderboard Component ---

const ToggleableLeaderboard: React.FC<ToggleableLeaderboardProps> = ({
  leaderboards,
}) => {
  const [currentBoardIndex, setCurrentBoardIndex] = useState(0);

  if (!leaderboards || leaderboards.length === 0) {
    return <div className={styles.noData}>No leaderboard data available.</div>;
  }

  const currentBoard = leaderboards[currentBoardIndex];
  const totalBoards = leaderboards.length;

  const goToNextBoard = () => {
    setCurrentBoardIndex((prevIndex) => (prevIndex + 1) % totalBoards);
  };

  const goToPrevBoard = () => {
    setCurrentBoardIndex((prevIndex) =>
      prevIndex === 0 ? totalBoards - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.leaderboardTwoColumnWrapper}> 
      
      {/* 1. MAIN LEADERBOARD COLUMN */}
      <div className={styles.leaderboardContainer}>
        <div className={styles.leaderboardHeader}>
          <button
            className={styles.toggleButton}
            onClick={goToPrevBoard}
            aria-label="Previous Leaderboard"
          >
            <FaChevronLeft />
          </button>

          <h2 className={styles.leaderboardTitle}>{currentBoard.title}</h2>

          <button
            className={styles.toggleButton}
            onClick={goToNextBoard}
            aria-label="Next Leaderboard"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className={styles.leaderboardTableWrapper}>
          <table className={styles.leaderboardTable}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>School</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {currentBoard.data.map((entry) => (
                <LeaderboardRow key={entry.school} {...entry} /> 
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* 2. CHANGE LOG SIDEBAR COLUMN */}
      <ChangeLog data={currentBoard.data} />
      
    </div>
  );
};

export default ToggleableLeaderboard;