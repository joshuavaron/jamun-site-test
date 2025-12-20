import { useState } from "react";
import React from "react";
import CommonHead from "../../components/CommonHead/CommonHead";
import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import MUNAbout from "../../components/MUNAbout/MUNAbout";
import MUNWhatIs from "../../components/MUNWhatIs/MUNWhatIs";
import MUNSkills from "../../components/MUNSkills/MUNSkills";
import MUNForParents from "../../components/MUNForParents/MUNForParents";
import MUNForTeachers from "../../components/MUNForTeachers/MUNForTeachers";
import MUNCommittees from "../../components/MUNCommittees/MUNCommittees";
import MUNResources from "../../components/MUNResources/MUNResources";
import MUNRegister from "../../components/MUNRegister/MUNRegister";
import MUNDates from "../../components/MUNDates/MUNDates";
import MUNFAQ from "../../components/MUNFAQ/MUNFAQ";

const ModelUN: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <CommonHead
        title="Model UN for Middle School | Grades 5-8"
        description="Model United Nations for middle school students (grades 5-8) across the USA. Build public speaking, critical thinking, and leadership skills. Beginner-friendly committees, free resources, and financial aid available."
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
        title="JAMUN Model United Nations"
        subtitle="Debate. Diplomacy. Discovery."
        backgroundImage="/images/leaderboards.webp"
      />

      <MUNAbout
        title="Welcome to Model UN!"
        description="Join hundreds of students from across the United States for an immersive Model United Nations experience. Whether you're a first-time delegate or a seasoned debater, JAMUN MUN offers committees for every skill level."
      />

      <MUNCommittees />

      <MUNWhatIs />

      <MUNResources />

      <MUNSkills />

      <MUNForParents />

      <MUNForTeachers />

      <MUNDates />

      <MUNRegister />

      <MUNFAQ />

      <Footer />
    </div>
  );
};

export default ModelUN;
