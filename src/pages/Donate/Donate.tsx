import { useState, useEffect } from "react";
import CommonHead from "../../components/CommonHead/CommonHead";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import QuoteBlock from "../../components/QuoteBlock/QuoteBlock";
import styles from "./Donate.module.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "givebutter-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { id: string },
        HTMLElement
      >;
    }
  }
}

const Donate: React.FC = () => {
  const [query, setQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load Givebutter script
    const script = document.createElement("script");
    script.src = "https://widgets.givebutter.com/latest.umd.cjs?acct=3VthXuG6YBH7y7nq&p=other";
    script.async = true;
    document.head.appendChild(script);

    // Trigger animations after mount
    const timer = setTimeout(() => setIsVisible(true), 100);

    return () => {
      clearTimeout(timer);
      // Clean up script on unmount
      const existingScript = document.querySelector(
        'script[src*="givebutter"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className={styles.page}>
      <CommonHead
        title="Donate"
        description="Support JAMUN's mission to empower the next generation of leaders. Your donation funds educational programs, competition resources, and student opportunities."
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
          { label: "Login", href: "/login" },
        ]}
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb1} />
          <div className={styles.gradientOrb2} />
          <div className={styles.gradientOrb3} />
        </div>

        <div className={`${styles.heroContent} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </span>
            Support Our Mission
          </div>

          <h1 className={styles.heroTitle}>
            Help Us Empower the Next Generation of
            <span className={styles.highlight}> Leaders</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Your donation directly funds educational programs, competition resources,
            and opportunities for students who might not otherwise have access.
            Together, we can make learning accessible to everyone.
          </p>

          <div className={styles.impactStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Students Impacted</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Schools Reached</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Volunteer Run</span>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Widget Section */}
      <section className={styles.donateSection}>
        <div className={`${styles.widgetContainer} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.widgetCard}>
            <div className={styles.widgetHeader}>
              <h2 className={styles.widgetTitle}>Make Your Impact</h2>
              <p className={styles.widgetSubtitle}>
                Every contribution, no matter the size, helps us continue our mission.
              </p>
            </div>
            <div className={styles.widgetWrapper}>
              <givebutter-widget id="L4K9wj"></givebutter-widget>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className={styles.whyDonate}>
        <div className={styles.whyDonateContent}>
          <h2 className={styles.sectionTitle}>Where Your Donation Goes</h2>
          <div className={styles.impactCards}>
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3>Educational Materials</h3>
              <p>Fund prep guides, practice materials, and resources that help students excel in competitions.</p>
            </div>

            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3>Student Scholarships</h3>
              <p>Enable students from all backgrounds to participate in competitions and conferences.</p>
            </div>

            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3>Program Expansion</h3>
              <p>Help us reach more schools and students with our Model UN, Mock Trial, and Mathletes programs.</p>
            </div>
          </div>
        </div>
      </section>

      <QuoteBlock
        quote="JAMUN gave me the confidence to speak up and think critically about global issues. Without their support, I never would have discovered my passion for international relations."
        source="Former Student Participant"
      />

      <Footer />
    </div>
  );
};

export default Donate;
