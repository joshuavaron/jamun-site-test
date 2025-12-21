import { useState } from "react";
import React from "react";
import CommonHead from "../../components/CommonHead/CommonHead";
import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Leaderboards.module.css";
import ToggleableLeaderboard from "../../components/ToggleableLeaderboard/ToggleableLeaderboard";
import { LEADERBOARDS } from "../../data/leaderboards";


const Leaderboards: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <CommonHead
        title="School Rankings & Competition Leaderboards"
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
        backgroundImage="/images/DSC02012.webp"
      >
      </Banner>

      <section className={styles.leaderboardsSection}>
        {/* RENDER THE NEW TOGGLEABLE LEADERBOARD HERE */}
        <ToggleableLeaderboard leaderboards={LEADERBOARDS} />
      </section>
    </div>
  );
};

export default Leaderboards;