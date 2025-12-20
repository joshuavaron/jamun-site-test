import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import CommonHead from "../../components/CommonHead/CommonHead";
import Banner from "../../components/Banner/Banner";
import FeatureShowcase from "../../components/FeatureShowcase/FeatureShowcase";
import NavBar from "../../components/NavBar/NavBar";
import CompetitionButtons from "../../components/CompetitionButtons/CompetitionButtons";
import QuoteBlock from "../../components/QuoteBlock/QuoteBlock";
import CountUp from "../../components/CountUp/CountUp";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <CommonHead
        title="Model UN & Academic Competitions for Grades 5-8"
        description="JAMUN offers Model UN, Mock Trial, and Mathletes programs for grades 5-8. Join 500+ students from 30+ schools. 100% volunteer-run nonprofit with grants available."
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
        title="JAMUN Makes Learning Fun!"
        subtitle="Academic competition programs for grades 5-8. Build public speaking, critical thinking, and leadership skills."
        backgroundImage="/images/homebackground.webp"
      />

      {/* Impact Statistics Section */}
      <section className={styles.impactSection}>
        <div className={styles.impactContent}>
          <h2 className={styles.impactTitle}>Empowering Young Leaders Nationwide</h2>
          <p className={styles.impactSubtitle}>
            JAMUN is a 100% volunteer-run nonprofit making academic competitions accessible to middle school students across the country.
          </p>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <CountUp end={500} suffix="+" baseDuration={1200} className={styles.statNumber} />
              <span className={styles.statLabel}>Students Impacted</span>
            </div>
            <div className={styles.statCard}>
              <CountUp end={30} suffix="+" baseDuration={1200} className={styles.statNumber} />
              <span className={styles.statLabel}>Schools Reached</span>
            </div>
            <div className={styles.statCard}>
              <CountUp end={80} suffix="+" baseDuration={1200} className={styles.statNumber} />
              <span className={styles.statLabel}>Volunteers</span>
            </div>
            <div className={styles.statCard}>
              <CountUp end={70} prefix="$" suffix="K+" baseDuration={1200} className={styles.statNumber} />
              <span className={styles.statLabel}>Raised for Programs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Sections */}
      <section className={styles.audienceSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTagline}>Who We Serve</span>
          <h2 className={styles.sectionTitle}>Programs for Students, Parents & Educators</h2>
        </div>

        <div className={styles.audienceGrid}>
          <div className={styles.audienceCard}>
            <div className={styles.audienceIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </div>
            <h3>For Students (Grades 5-8)</h3>
            <p>
              Whether you're a first-time competitor or experienced delegate, our beginner-friendly
              programs help you develop public speaking, critical thinking, and teamwork skills
              through Model UN conferences, Mock Trial competitions, and Mathletes challenges.
            </p>
            <Link to="/register" className={styles.audienceLink} onClick={() => window.scrollTo(0, 0)}>
              Register Now →
            </Link>
          </div>

          <div className={styles.audienceCard}>
            <div className={styles.audienceIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h3>For Parents</h3>
            <p>
              Looking for meaningful extracurricular activities that build skills for college and beyond?
              JAMUN offers free and low-cost academic enrichment programs that develop leadership,
              communication, and analytical thinking in a supportive environment.
            </p>
            <Link to="/about" className={styles.audienceLink} onClick={() => window.scrollTo(0, 0)}>
              Learn About Our Programs →
            </Link>
          </div>

          <div className={styles.audienceCard}>
            <div className={styles.audienceIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3>For Teachers & Schools</h3>
            <p>
              Bring Model UN, Mock Trial, or Mathletes to your school with our free resources
              and curriculum guides. We provide training materials, competition prep, and
              ongoing support to help educators build successful programs.
            </p>
            <Link to="/modelun/resources" className={styles.audienceLink} onClick={() => window.scrollTo(0, 0)}>
              Access Free Resources →
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Overview Section - Visual cards with SEO content */}
      <CompetitionButtons
        showHeader={true}
        headerTagline="Our Programs"
        headerTitle="Three Paths to Academic Excellence"
        headerSubtitle="Choose from Model United Nations, Mock Trial, or Mathletes—each designed to develop essential skills through engaging competition."
        competitions={[
          {
            label: "Model United Nations",
            href: "/modelun",
            description: "Simulate UN committees, represent countries, and debate global issues. Perfect for students interested in international relations, public speaking, and diplomacy.",
            imageUrl: "/images/DSC00848.webp",
            highlights: ["Beginner-friendly", "Diplomatic skills", "Research & debate"],
            cta: "Explore Model UN →",
          },
          {
            label: "Mock Trial",
            href: "/mocktrial",
            description: "Experience the courtroom firsthand as attorneys and witnesses. Develop argumentation, evidence analysis, and persuasive presentation skills.",
            imageUrl: "/images/DSC02088.webp",
            highlights: ["Courtroom simulation", "Legal reasoning", "Cross-examination"],
            cta: "Explore Mock Trial →",
          },
          {
            label: "Mathletes",
            href: "/mathletes",
            description: "Challenge yourself with competitive mathematics and problem-solving contests. Build analytical thinking and teamwork through math team competitions.",
            imageUrl: "/images/DSC01852.webp",
            highlights: ["Team competitions", "Problem-solving", "MATHCOUNTS-style"],
            cta: "Explore Mathletes →",
          },
        ]}
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
          imageUrl="/images/DSC01722.webp"
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
          imageUrl="/images/DSC02012.webp"
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
          imageUrl="/images/DSC00832.webp"
          imageOnLeft={false}
          highlights={[
            "Beginner-friendly tutorials",
            "Step-by-step learning paths",
            "Mentor support available",
          ]}
        />
      </section>

      <QuoteBlock
        quote="This was something they were passionate about, and they put in an extraordinary amount of time and care into putting together a learning experience our students will not forget."
        source="Mr. Komie and Ms. Mastin"
        title="Middle School Social Studies Teachers"
      />

      {/* FAQ Section for SEO */}
      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTagline}>Questions & Answers</span>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to know about getting started with Model UN, Mock Trial, and Mathletes.
          </p>
        </div>

        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>What is Model UN for middle school students?</h3>
            <p>
              Model United Nations (Model UN or MUN) is an educational simulation where students
              role-play as delegates representing countries in UN committees. Middle school
              students learn about international relations, diplomacy, public speaking, and
              global issues while developing research and debate skills in a supportive environment.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I prepare for my first Mock Trial competition?</h3>
            <p>
              JAMUN provides free preparation materials including case studies, witness preparation
              guides, and opening/closing statement templates. Our beginner-friendly resources
              help students understand courtroom procedures, develop argumentation skills, and
              practice cross-examination techniques before their first competition.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>What grades can participate in JAMUN programs?</h3>
            <p>
              JAMUN programs are designed for students in grades 5-8 (approximately ages 10-14).
              Our conferences and competitions are specifically tailored for middle school students,
              with beginner-friendly formats that welcome first-time participants alongside more
              experienced competitors.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>Are there free resources for math competitions?</h3>
            <p>
              Yes! JAMUN offers free Mathletes practice problems, competition strategies, and
              study guides. Our materials cover topics commonly seen in middle school math
              competitions like MATHCOUNTS, Math Olympiad, and other regional math leagues.
              All resources are available at no cost to students and teachers.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How can my school start a Model UN or Mock Trial program?</h3>
            <p>
              Teachers and schools can access our free curriculum guides, training materials,
              and ongoing support to start Model UN, Mock Trial, or Mathletes programs.
              JAMUN also offers grants to help schools cover competition fees and travel costs.
              Visit our Resources page or contact us to get started.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>Is JAMUN a nonprofit organization?</h3>
            <p>
              Yes, JAMUN is a 100% volunteer-run nonprofit organization. We've raised over
              $70,000 to support student programs, with all donations going directly toward
              educational materials, competition grants, and expanding access to academic
              enrichment opportunities for middle school students.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
