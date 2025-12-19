import { useState, useEffect } from "react";
import styles from "./CommitteeBanner.module.css";

export interface CommitteeBannerProps {
  name: string;
  shorthand?: string;
  group: "General Assembly" | "Crisis";
  topic: string;
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

export default function CommitteeBanner({
  name,
  shorthand,
  group,
  topic,
  backgroundImage = "/images/leaderboards.webp",
}: CommitteeBannerProps) {
  const isChevronVisible = useScrollVisibility(SCROLL_THRESHOLD);

  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.name}>{name}</h1>
        {shorthand && <p className={styles.shorthand}>{shorthand}</p>}
        <p className={styles.group}>{group}</p>
        <p className={styles.topic}>{topic}</p>
      </div>

      <div className={`${styles.chevron} ${isChevronVisible ? "" : styles.hidden}`} />
    </div>
  );
}
