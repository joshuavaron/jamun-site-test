import React from 'react';
import styles from './FeatureShowcase.module.css';

/**
 * Defines the props for the FeatureShowcase component.
 * @property {string} title - The main title of the feature.
 * @property {string} description - The detailed explanation of the feature.
 * @property {string} imageUrl - The path to the transparent background image (e.g., PNG).
 * @property {boolean} [imageOnLeft=false] - If true, the image is on the left; otherwise, text is on the left.
 */
export interface FeatureShowcaseProps {
  title: string;
  description: string;
  imageUrl: string;
  imageOnLeft?: boolean;
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  title,
  description,
  imageUrl,
  imageOnLeft = false, // Default: image on the right (text on the left)
}) => {
  // Use a class to conditionally reverse the order using flex-direction-reverse in CSS
  const containerClass = imageOnLeft
    ? `${styles.showcaseContainer} ${styles.reverse}`
    : styles.showcaseContainer;

  return (
    <div className={containerClass}>
      {/* 1. IMAGE BLOCK */}
      <div className={styles.imageBlock}>
        <div className={styles.imageWrapper}>
          <img 
            src={imageUrl} 
            alt={`Illustration of ${title}`} 
            className={styles.featureImage}
          />
        </div>
      </div>

      {/* 2. TEXT BLOCK */}
      <div className={styles.textBlock}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {/* Optional: Add a button here if needed */}
      </div>
    </div>
  );
};

export default FeatureShowcase;