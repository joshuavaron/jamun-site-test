import React, { useState, useEffect } from "react";
import styles from "./Banner.module.css";

export interface BannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

// Define the scroll threshold (e.g., disappear after scrolling 100 pixels)
const SCROLL_THRESHOLD = 10;

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  children,
}) => {
  // State to manage visibility
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      // Check if the vertical scroll position is greater than the threshold
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Attach the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Cleanup function: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this runs only on mount and unmount

  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImage})`}}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {children}
      </div>
      
      {/* Conditionally apply a class based on the visibility state */}
      <div className={isVisible ? styles.chevron : `${styles.chevron} ${styles.hidden}`}>
        {/* Chevron content (either SVG or empty for CSS approach) */}
      </div>
    </div>
  );
};

export default Banner;