import React from 'react';
import styles from './QuoteBlock.module.css';

interface QuoteBlockProps {
  quote: string;
  source: string;
  title?: string; // Optional title/role of the source
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ quote, source, title }) => {
  return (
    <section className={styles.quoteSection}>
      <blockquote className={styles.quoteBlock}>
        <span className={styles.quoteSymbol}>&ldquo;</span>
        <p className={styles.quoteText}>{quote}</p>
        <span className={styles.quoteSymbol}>&rdquo;</span>
      </blockquote>
      <div className={styles.sourceContainer}>
        <p className={styles.sourceName}>&mdash; {source}</p>
        {title && <p className={styles.sourceTitle}>{title}</p>}
      </div>
    </section>
  );
};

export default QuoteBlock;