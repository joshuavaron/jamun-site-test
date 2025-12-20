import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommonHead from "../../components/CommonHead/CommonHead";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { COMMITTEES } from "../../data/committees";
import styles from "./CommitteesList.module.css";

type GroupFilter = "General Assembly" | "Crisis";
type DifficultyFilter = "Beginner" | "Intermediate" | "Advanced";
type SizeFilter = "Small" | "Medium" | "Large";

function getCommitteeSize(delegateCount: number): SizeFilter {
  if (delegateCount < 24) return "Small";
  if (delegateCount < 40) return "Medium";
  return "Large";
}

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

const CommitteesList: React.FC = () => {
  const [query, setQuery] = useState("");
  const [groupFilters, setGroupFilters] = useState<Set<GroupFilter>>(new Set());
  const [difficultyFilters, setDifficultyFilters] = useState<Set<DifficultyFilter>>(new Set());
  const [sizeFilters, setSizeFilters] = useState<Set<SizeFilter>>(new Set());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFilter = <T extends string>(
    set: Set<T>,
    setter: React.Dispatch<React.SetStateAction<Set<T>>>,
    value: T
  ) => {
    const newSet = new Set(set);
    if (newSet.has(value)) {
      newSet.delete(value);
    } else {
      newSet.add(value);
    }
    setter(newSet);
  };

  const gaCommittees = COMMITTEES.filter((c) => c.group === "General Assembly");
  const crisisCommittees = COMMITTEES.filter((c) => c.group === "Crisis");

  const filteredCommittees = COMMITTEES.filter((c) => {
    // Group filter (if none selected, show all)
    if (groupFilters.size > 0 && !groupFilters.has(c.group)) {
      return false;
    }
    // Difficulty filter (if none selected, show all)
    if (difficultyFilters.size > 0 && !difficultyFilters.has(c.difficulty)) {
      return false;
    }
    // Size filter (if none selected, show all)
    if (sizeFilters.size > 0 && !sizeFilters.has(getCommitteeSize(c.delegateCount))) {
      return false;
    }
    return true;
  });

  return (
    <div className={styles.page}>
      <CommonHead
        title="Model UN Committees - Beginner to Advanced"
        description="Explore all Model UN committees available at JAMUN, including General Assembly and Crisis committees for all skill levels."
      />
      <NavBar
        title="jamun-blue-side-logo"
        exploreItems={[
          { label: "Leaderboards", href: "/leaderboards" },
          { label: "Model UN", href: "/modelun" },
          { label: "Mock Trial", href: "/mocktrial" },
          { label: "Mathletes", href: "/mathletes" },
        ]}
        searchValue={query}
        onSearchChange={setQuery}
        rightButtons={[
          { label: "Donate", href: "/donate", variant: "donate" },
          { label: "Register", href: "/register" },
        ]}
      />

      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>All Committees</h1>
          <p className={styles.subtitle}>
            Explore all {COMMITTEES.length} committees available at JAMUN, including {gaCommittees.length} General Assembly and {crisisCommittees.length} Crisis committees.
          </p>
          <div className={styles.filtersContainer}>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Type</span>
              <div className={styles.filters}>
                <button
                  className={`${styles.filterButton} ${groupFilters.has("General Assembly") ? styles.filterActive : ""}`}
                  onClick={() => toggleFilter(groupFilters, setGroupFilters, "General Assembly")}
                >
                  General Assembly ({gaCommittees.length})
                </button>
                <button
                  className={`${styles.filterButton} ${groupFilters.has("Crisis") ? styles.filterActive : ""}`}
                  onClick={() => toggleFilter(groupFilters, setGroupFilters, "Crisis")}
                >
                  Crisis ({crisisCommittees.length})
                </button>
              </div>
            </div>

            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Difficulty</span>
              <div className={styles.filters}>
                <button
                  className={`${styles.filterButton} ${difficultyFilters.has("Beginner") ? styles.filterActive : ""}`}
                  onClick={() => toggleFilter(difficultyFilters, setDifficultyFilters, "Beginner")}
                >
                  Beginner
                </button>
                <button
                  className={`${styles.filterButton} ${difficultyFilters.has("Intermediate") ? styles.filterActive : ""}`}
                  onClick={() => toggleFilter(difficultyFilters, setDifficultyFilters, "Intermediate")}
                >
                  Intermediate
                </button>
                <button
                  className={`${styles.filterButton} ${difficultyFilters.has("Advanced") ? styles.filterActive : ""}`}
                  onClick={() => toggleFilter(difficultyFilters, setDifficultyFilters, "Advanced")}
                >
                  Advanced
                </button>
              </div>
            </div>

            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Size</span>
              <div className={styles.filters}>
                <button
                  className={`${styles.filterButton} ${sizeFilters.has("Small") ? styles.filterActive : ""}`}
                  onClick={() => toggleFilter(sizeFilters, setSizeFilters, "Small")}
                >
                  Small (&lt;24)
                </button>
                <button
                  className={`${styles.filterButton} ${sizeFilters.has("Medium") ? styles.filterActive : ""}`}
                  onClick={() => toggleFilter(sizeFilters, setSizeFilters, "Medium")}
                >
                  Medium (24-39)
                </button>
                <button
                  className={`${styles.filterButton} ${sizeFilters.has("Large") ? styles.filterActive : ""}`}
                  onClick={() => toggleFilter(sizeFilters, setSizeFilters, "Large")}
                >
                  Large (40+)
                </button>
              </div>
            </div>
          </div>

          {(groupFilters.size > 0 || difficultyFilters.size > 0 || sizeFilters.size > 0) && (
            <div className={styles.activeFilters}>
              <span className={styles.resultsCount}>
                Showing {filteredCommittees.length} of {COMMITTEES.length} committees
              </span>
              <button
                className={styles.clearFilters}
                onClick={() => {
                  setGroupFilters(new Set());
                  setDifficultyFilters(new Set());
                  setSizeFilters(new Set());
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.grid}>
          {filteredCommittees.map((committee) => (
            <Link
              to={`/modelun/committees/${committee.id}`}
              key={committee.id}
              className={styles.card}
            >
              <div className={styles.cardAccent} />

              <div className={styles.cardHeader}>
                <h3 className={styles.committeeName}>
                  {committee.shorthand || committee.name}
                </h3>
                <span
                  className={`${styles.difficultyBadge} ${getDifficultyColor(committee.difficulty)}`}
                >
                  {committee.difficulty}
                </span>
              </div>

              <span className={styles.groupBadge}>{committee.group}</span>

              <p className={styles.topic}>{committee.topic}</p>
              <p className={styles.description}>{committee.description}</p>

              <div className={styles.cardFooter}>
                <div className={styles.delegateInfo}>
                  <span className={styles.delegateIcon}>
                    <UsersIcon />
                  </span>
                  <span className={styles.delegateCount}>
                    {committee.delegateCount} delegates
                  </span>
                </div>
                <span className={styles.learnMore}>
                  Learn more
                  <span className={styles.arrowIcon}>
                    <ArrowRightIcon />
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CommitteesList;
