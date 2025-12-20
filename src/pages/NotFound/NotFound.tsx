import { useState } from "react";
import { Link } from "react-router-dom";
import CommonHead from "../../components/CommonHead/CommonHead";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./NotFound.module.css";

const NotFound: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.container}>
      <CommonHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Explore JAMUN's programs and resources instead."
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

      <main className={styles.content}>
        <h1 className={styles.title}>We couldn't find that page</h1>
        <p className={styles.description}>
          No worries! There's still plenty to explore. Check out our programs
          and resources to get started on your learning journey.
        </p>
        <div className={styles.links}>
          <Link to="/" className={styles.primaryButton}>
            Go to Home
          </Link>
          <Link to="/modelun" className={styles.secondaryButton}>
            Explore Model UN
          </Link>
          <Link to="/leaderboards" className={styles.secondaryButton}>
            View Leaderboards
          </Link>
        </div>
        <span className={styles.errorCode}>Error Code: 404</span>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
