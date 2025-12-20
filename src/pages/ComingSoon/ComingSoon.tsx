import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CommonHead from "../../components/CommonHead/CommonHead";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./ComingSoon.module.css";

const ComingSoon: React.FC = () => {
  const [query, setQuery] = useState("");
  const [dots, setDots] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const location = useLocation();

  const pageName = location.pathname === "/mocktrial" ? "Mock Trial" : "Mathletes";

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleHardhatClick = () => {
    setClickCount((prev) => prev + 1);
  };

  const getEasterEggMessage = () => {
    if (clickCount >= 10) return "You're persistent! We love that energy!";
    if (clickCount >= 5) return "Still clicking? You must really want this!";
    if (clickCount >= 3) return "Hey, that tickles!";
    return null;
  };

  const easterEgg = getEasterEggMessage();

  return (
    <div className={styles.container}>
      <CommonHead
        title={`${pageName} - Coming Soon`}
        description={`JAMUN ${pageName} is coming soon! We're building an incredible experience with interactive learning, practice resources, and competition prep tools.`}
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

      <main className={styles.content}>
        <div className={styles.constructionIcon} onClick={handleHardhatClick}>
          <div className={styles.crane}>
            <div className={styles.craneArm}></div>
            <div className={styles.craneHook}></div>
          </div>
          <div className={styles.hardhat}>
            <span className={styles.hardhatEmoji}>🏗️</span>
          </div>
        </div>

        <div className={styles.textContent}>
          <span className={styles.badge}>Coming Soon</span>
          <h1 className={styles.title}>{pageName}</h1>
          <p className={styles.subtitle}>
            Building something amazing{dots}
          </p>
          <p className={styles.description}>
            We're working hard to bring you an incredible {pageName} experience.
            Get ready for interactive learning, practice resources, and competition prep tools!
          </p>

          {easterEgg && (
            <p className={styles.easterEgg}>{easterEgg}</p>
          )}
        </div>

        <div className={styles.progressSection}>
          <div className={styles.progressLabel}>
            <span>Progress</span>
            <span className={styles.progressPercent}>42%</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill}>
              <div className={styles.progressShimmer}></div>
            </div>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>📚</span>
            <span className={styles.featureText}>Study Materials</span>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🎯</span>
            <span className={styles.featureText}>Practice Sessions</span>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🏆</span>
            <span className={styles.featureText}>Competitions</span>
          </div>
        </div>

        <div className={styles.actions}>
          <Link to="/" className={styles.primaryButton}>
            Back to Home
          </Link>
          <Link to="/modelun" className={styles.secondaryButton}>
            Explore Model UN
          </Link>
        </div>

        <div className={styles.floatingElements}>
          <div className={`${styles.floatingIcon} ${styles.float1}`}>⚡</div>
          <div className={`${styles.floatingIcon} ${styles.float2}`}>✨</div>
          <div className={`${styles.floatingIcon} ${styles.float3}`}>🚀</div>
          <div className={`${styles.floatingIcon} ${styles.float4}`}>💡</div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;
