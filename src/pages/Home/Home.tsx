import { useState } from "react";
import React from "react";
import Banner from "../../components/Banner/Banner";
// Import the new component
import FeatureShowcase from "../../components/FeatureShowcase/FeatureShowcase"; 
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Home.module.css";

const Home: React.FC = () => {
 const [query, setQuery] = useState("");

 return (
  <div>
   <NavBar
        title="jamun-blue-side-logo"
        // CHANGED: Now using objects with 'label' and 'href'
        exploreItems={[
          { label: "Leaderboards", href: "/leaderboards" },
          { label: "Model UN", href: "/modelun" },
          { label: "Mock Trial", href: "/mocktrial" },
          { label: "Mathletes", href: "/mathletes" },
        ]}
        // REMOVED: The onExploreSelect prop is no longer needed

        searchValue={query}
        onSearchChange={setQuery}
        rightButtons={[
          { label: "Login", href: "/login" },
        ]}
      />

   <Banner
    title="JAMUN makes learning fun!"
    subtitle="Join our community of students, parents, and teachers today."
    backgroundImage="/images/mainbackground.webp"
   >
   </Banner>

      {/* --- REPLACED FEATURE CARDS WITH FEATURE SHOWCASE --- */}
   <section className={styles.featuresSection}>
    <h2>Why Us?</h2>

        {/* Feature 2: Image on Left, Text on Right (reversed) */}
        <FeatureShowcase
            title="Interactive Extracurricular Experiences"
            description="Access expertly curated material for Model UN, Mock Trial, and Mathletes. Our modules are designed to be engaging, practical, and highly effective for test prep."
            imageUrl="/images/shape_tomorrow.webp" // **Update path to your image**
            imageOnLeft={false}
        />

        {/* Feature 1: Text on Left, Image on Right (default) */}
        <FeatureShowcase
            title="Real-Time Leaderboards"
            description="Compete with peers globally! Our dynamic leaderboards track progress across multiple subjects and competitions, offering recognition for top performers."
            imageUrl="/images/leaderboard.webp" // **Update path to your image**
            imageOnLeft={true}
        />

        
        
        {/* Feature 3: Text on Left, Image on Right (default) */}
        <FeatureShowcase
            title="No Experience Required"
            description="It doesn't matter whether this is your first tournament or your hundreth! Our library of prep materials will make sure you are ready to compete at your best!"
            imageUrl="/images/teacher_dashboard.webp" // **Update path to your image**
            imageOnLeft={false}
        />
        
   </section>

   <section className={styles.ctaSection}>
    <h2>Ready to Dive In?</h2>
    <p>Start building your application today with modern React.</p>
    <button className={styles.secondaryButton}>Learn More</button>
   </section>
  </div>
 );
};

export default Home;