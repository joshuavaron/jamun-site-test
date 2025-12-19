import { useState } from "react";
import React from "react";
import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import MUNAbout from "../../components/MUNAbout/MUNAbout";
import MUNCommittees from "../../components/MUNCommittees/MUNCommittees";
import MUNResources from "../../components/MUNResources/MUNResources";
import MUNRegister from "../../components/MUNRegister/MUNRegister";
import MUNDates from "../../components/MUNDates/MUNDates";

const ModelUN: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
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
        rightButtons={[{ label: "Login", href: "/login" }]}
      />

      <Banner
        title="JAMUN Model United Nations"
        subtitle="Debate. Diplomacy. Discovery."
        backgroundImage="/images/leaderboards.webp"
      />

      <MUNAbout
        title="Welcome to Model UN!"
        description="Join hundreds of students from around the region for an immersive Model United Nations experience. Whether you're a first-time delegate or a seasoned debater, JAMUN MUN offers committees for every skill level."
      />

      <MUNCommittees />

      <MUNDates />

      <MUNResources />

      <MUNRegister />

      <Footer />
    </div>
  );
};

export default ModelUN;
