import { useState } from "react";
import React from "react";
import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import MUNAbout from "../../components/MUNAbout/MUNAbout";
import MUNCommittees from "../../components/MUNCommittees/MUNCommittees";
import MUNResources from "../../components/MUNResources/MUNResources";
import styles from "./ModelUN.module.css";

interface ImportantDate {
  date: string;
  event: string;
}

const IMPORTANT_DATES: ImportantDate[] = [
  { date: "January 15", event: "Registration Opens" },
  { date: "February 28", event: "Early Bird Deadline" },
  { date: "March 15", event: "Position Papers Due" },
  { date: "April 5-7", event: "Conference Dates" },
];

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

      {/* Important Dates Section */}
      <section className={styles.datesSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTagline}>Mark Your Calendar</span>
          <h2 className={styles.sectionTitle}>Important Dates</h2>
        </div>
        <div className={styles.timeline}>
          {IMPORTANT_DATES.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <span className={styles.timelineDate}>{item.date}</span>
                <span className={styles.timelineEvent}>{item.event}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <MUNResources />

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Join?</h2>
          <p className={styles.ctaDescription}>
            Registration is now open! Secure your delegation's spot at the most
            exciting MUN conference of the year.
          </p>
          <div className={styles.ctaButtons}>
            <a href="#" className={styles.primaryButton}>
              Register Now
            </a>
            <a href="#" className={styles.secondaryButton}>
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ModelUN;
