import { useState } from "react";
import React from "react";
import Banner from "../../components/Banner/Banner";
import FeatureShowcase from "../../components/FeatureShowcase/FeatureShowcase";
import NavBar from "../../components/NavBar/NavBar";
import CompetitionButtons from "../../components/CompetitionButtons/CompetitionButtons";
import QuoteBlock from "../../components/QuoteBlock/QuoteBlock";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";

const Home: React.FC = () => {
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
        title="JAMUN makes learning fun!"
        subtitle="Join our community of students, parents, and teachers today."
        backgroundImage="/images/homebackground.webp"
      />

      <section className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTagline}>Why Choose JAMUN</span>
          <h2 className={styles.sectionTitle}>
            Everything You Need to Excel
          </h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive tools and resources designed to help students succeed
            in competitive academics.
          </p>
        </div>

        <FeatureShowcase
          tagline="Engaging Content"
          title="Interactive Extracurricular Experiences"
          description="Access expertly curated material for Model UN, Mock Trial, and Mathletes. Our modules are designed to be engaging, practical, and highly effective for competition prep."
          imageUrl="/images/shape_tomorrow.webp"
          imageOnLeft={false}
          highlights={[
            "Expert-designed curriculum",
            "Practice scenarios & simulations",
            "Progress tracking dashboards",
          ]}
        />

        <FeatureShowcase
          tagline="Compete & Grow"
          title="Real-Time Leaderboards"
          description="Compete with peers globally! Our dynamic leaderboards track progress across multiple subjects and competitions, offering recognition for top performers."
          imageUrl="/images/leaderboard.webp"
          imageOnLeft={true}
          highlights={[
            "Global & local rankings",
            "Achievement badges & rewards",
            "Weekly competition cycles",
          ]}
        />

        <FeatureShowcase
          tagline="Start Today"
          title="No Experience Required"
          description="It doesn't matter whether this is your first tournament or your hundredth! Our library of prep materials will make sure you are ready to compete at your best."
          imageUrl="/images/shape_tomorrow.webp"
          imageOnLeft={false}
          highlights={[
            "Beginner-friendly tutorials",
            "Step-by-step learning paths",
            "Mentor support available",
          ]}
        />
      </section>

      <CompetitionButtons />

      <QuoteBlock
        quote="This was something they were passionate about, and they put in an extraordinary amount of time and care into putting together a learning experience our students will not forget."
        source="Mr. Komie and Ms. Mastin"
        title="Middle School Social Studies Teachers"
      />

      <Footer />
    </div>
  );
};

export default Home;
