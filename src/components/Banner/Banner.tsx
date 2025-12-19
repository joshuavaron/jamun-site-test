import { useState, useEffect } from "react";
import styles from "./Banner.module.css";

export interface BannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

const SCROLL_THRESHOLD = 10;
const TYPING_SPEED = 35; // ms per character (fast)
const TYPING_DELAY = 200; // initial delay before typing starts

function useTypewriter(text: string) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);

    const startTimeout = setTimeout(() => {
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsComplete(true);
        }
      }, TYPING_SPEED);

      return () => clearInterval(typeInterval);
    }, TYPING_DELAY);

    return () => clearTimeout(startTimeout);
  }, [text]);

  return { displayedText, isComplete };
}

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

export default function Banner({
  title,
  subtitle,
  backgroundImage,
  children,
}: BannerProps) {
  const { displayedText, isComplete } = useTypewriter(title);
  const isChevronVisible = useScrollVisibility(SCROLL_THRESHOLD);

  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1>{displayedText}</h1>
        {subtitle && (
          <p className={`${styles.subtitle} ${isComplete ? styles.subtitleVisible : ""}`}>
            {subtitle}
          </p>
        )}
        {children && (
          <div className={`${styles.children} ${isComplete ? styles.childrenVisible : ""}`}>
            {children}
          </div>
        )}
      </div>

      <div className={`${styles.chevron} ${isChevronVisible ? "" : styles.hidden}`} />
    </div>
  );
}
