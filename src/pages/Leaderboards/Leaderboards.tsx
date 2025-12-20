import { useState } from "react";
import React from "react";
import CommonHead from "../../components/CommonHead/CommonHead";
import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Leaderboards.module.css";
// IMPORT THE NEW COMPONENT
import ToggleableLeaderboard from "../../components/ToggleableLeaderboard/ToggleableLeaderboard";

// Sample Data for the leaderboards
const sampleLeaderboards = [
  {
    title: "Model UN",
    data: [
      // 🚀 TOP GAIN (4 places up): Current 4, Previous 8. Change is -4.
      { rank: 1, school: "Parkway Middle School", score: 12500, previousRank: 5 },
      
      // ⬆️ MEDIUM GAIN (2 places up): Current 2, Previous 4. Change is -2.
      { rank: 2, school: "Atlas Jr. High School", score: 12100, previousRank: 4 },
      
      // ⬇️ DROP (2 places down): Current 3, Previous 1. Change is +2.
      { rank: 3, school: "Cropley Middle School", score: 11950, previousRank: 1 },
      
      // ⬆️ BIGGEST GAIN (5 places up): Current 4, Previous 9. Change is -5. (This will be the #1 mover)
      { rank: 4, school: "Rhodes Middle School", score: 10500, previousRank: 9 },
      
      // ⬇️ DROP (1 place down): Current 5, Previous 4. Change is +1.
      { rank: 5, school: "Cary East Middle School", score: 9800, previousRank: 4 },
      
      // NO CHANGE: Current 6, Previous 6. Change is 0.
      { rank: 6, school: "Eastwood School", score: 9500, previousRank: 6 },
      
      // ⬇️ BIGGEST DROP (3 places down): Current 7, Previous 4. Change is +3.
      { rank: 7, school: "Riverdale High", score: 8800, previousRank: 4 },
      
      // ⬆️ SMALL GAIN (1 place up): Current 8, Previous 9. Change is -1.
      { rank: 8, school: "Lakeside School", score: 8500, previousRank: 9 },
      
      // NO CHANGE (New entry - set to current rank to exclude from movers)
      { rank: 9, school: "New Horizons", score: 8000, previousRank: 9 }, 
    ],
  },
  {
    title: "Model UN",
    data: [
      { rank: 1, school: "Westlake Academy", score: 5500 },
      { rank: 2, school: "Oakwood High", score: 5100, isCurrentUserSchool: true },
      { rank: 3, school: "Pine Valley School", score: 4900 },
      { rank: 4, school: "North Star Prep", score: 4100 },
      { rank: 5, school: "City College High", score: 3800 },
    ],
  },
  {
    title: "Mathletes",
    data: [
      { rank: 1, school: "North Star Prep", score: 4000 },
      { rank: 2, school: "Eastwood School", score: 3850 },
      { rank: 3, school: "Oakwood High", score: 3700, isCurrentUserSchool: true },
      { rank: 4, school: "Summit Heights", score: 3500 },
      { rank: 5, school: "Lakeside High", score: 3100 },
    ],
  },
];


const Leaderboards: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <CommonHead
        title="Leaderboards"
        description="Track school scores and compete with peers. View rankings for Model UN, Mock Trial, and Mathletes competitions."
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

      <Banner
        title="Leaderboards"
        subtitle="Track school scores and help your school climb to the top!"
        backgroundImage="/images/leaderboards.webp"
      >
      </Banner>

      <section className={styles.leaderboardsSection}>
        {/* RENDER THE NEW TOGGLEABLE LEADERBOARD HERE */}
        <ToggleableLeaderboard leaderboards={sampleLeaderboards} />
      </section>
    </div>
  );
};

export default Leaderboards;