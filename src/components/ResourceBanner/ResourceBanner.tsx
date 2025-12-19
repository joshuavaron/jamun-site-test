import { useState, useEffect } from "react";
import styles from "./ResourceBanner.module.css";

export interface ResourceBannerProps {
  name: string;
  category: string;
  description: string;
  backgroundImage?: string;
}

const SCROLL_THRESHOLD = 10;

function useScrollVisibility(threshold: number) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isVisible;
}

export default function ResourceBanner({
  name,
  category,
  description,
  backgroundImage = "/images/leaderboards.webp",
}: ResourceBannerProps) {
  const isChevronVisible = useScrollVisibility(SCROLL_THRESHOLD);

  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.category}>{category}</p>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={`${styles.chevron} ${isChevronVisible ? "" : styles.hidden}`} />
    </div>
  );
}
