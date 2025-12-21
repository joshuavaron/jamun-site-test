import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTrophy, FaArrowUp } from 'react-icons/fa';
import styles from './ToggleableLeaderboard.module.css';

// --- Types ---

interface LeaderboardEntry {
  rank: number;
  school: string;
  score: number;
  previousRank: number;
}

interface Leaderboard {
  title: string;
  data: LeaderboardEntry[];
}

interface ToggleableLeaderboardProps {
  leaderboards: Leaderboard[];
}

// --- Helper Components ---

const RankBadge: React.FC<{ rank: number }> = ({ rank }) => {
  const getRankClass = () => {
    if (rank === 1) return styles.rankGold;
    if (rank === 2) return styles.rankSilver;
    if (rank === 3) return styles.rankBronze;
    return '';
  };

  return (
    <span className={`${styles.rank} ${getRankClass()}`}>
      {rank <= 3 && <FaTrophy className={styles.trophy} />}
      {rank}
    </span>
  );
};

const LeaderboardRow: React.FC<LeaderboardEntry> = ({
  rank,
  school,
  score,
}) => (
  <tr className={styles.row}>
    <td>
      <RankBadge rank={rank} />
    </td>
    <td className={styles.school}>{school}</td>
    <td className={styles.score}>{score.toLocaleString()}</td>
  </tr>
);

const Sidebar: React.FC<{ data: LeaderboardEntry[] }> = ({ data }) => {
  const topMovers = data
    .map((entry) => ({
      school: entry.school,
      change: entry.previousRank - entry.rank,
    }))
    .filter((m) => m.change > 0)
    .sort((a, b) => b.change - a.change)
    .slice(0, 5);

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.sidebarTitle}>Recent Movement</h3>

      {topMovers.length > 0 ? (
        <>
          <h4 className={styles.sidebarSubtitle}>Top Gains</h4>
          <ul className={styles.moversList}>
            {topMovers.map((mover) => (
              <li key={mover.school} className={styles.moverItem}>
                <span className={styles.moverIcon}>
                  <FaArrowUp />
                </span>
                <span className={styles.moverChange}>+{mover.change}</span>
                <span className={styles.moverSchool}>{mover.school}</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className={styles.noMovers}>No rank changes this period.</p>
      )}
    </aside>
  );
};

// --- Main Component ---

const ToggleableLeaderboard: React.FC<ToggleableLeaderboardProps> = ({
  leaderboards,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!leaderboards || leaderboards.length === 0) {
    return <div className={styles.emptyState}>No leaderboard data available.</div>;
  }

  const currentBoard = leaderboards[currentIndex];
  const total = leaderboards.length;

  const goNext = () => setCurrentIndex((i) => (i + 1) % total);
  const goPrev = () => setCurrentIndex((i) => (i === 0 ? total - 1 : i - 1));
  const goTo = (index: number) => setCurrentIndex(index);

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainPanel}>
        {/* Header */}
        <header className={styles.header}>
          <button
            className={styles.navButton}
            onClick={goPrev}
            aria-label="Previous leaderboard"
          >
            <FaChevronLeft />
          </button>
          <h2 className={styles.title}>{currentBoard.title}</h2>
          <button
            className={styles.navButton}
            onClick={goNext}
            aria-label="Next leaderboard"
          >
            <FaChevronRight />
          </button>
        </header>

        {/* Pagination dots */}
        {total > 1 && (
          <div className={styles.pagination}>
            {leaderboards.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                onClick={() => goTo(index)}
                aria-label={`Go to leaderboard ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Table */}
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>School</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {currentBoard.data.map((entry) => (
                <LeaderboardRow key={`${entry.school}-${entry.rank}`} {...entry} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Sidebar data={currentBoard.data} />
    </div>
  );
};

export default ToggleableLeaderboard;
