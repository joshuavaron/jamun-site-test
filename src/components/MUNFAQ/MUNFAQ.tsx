import React, { useEffect, useRef, useState } from "react";
import styles from "./MUNFAQ.module.css";

interface FAQ {
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    question: "Is Model UN good for college applications?",
    answer:
      "Colleges highly value Model UN participation. It demonstrates leadership, critical thinking, public speaking skills, and global awareness. Many successful MUN delegates highlight their experience in college essays and interviews.",
  },
  {
    question: "Does my child need prior experience?",
    answer:
      "Not at all! JAMUN welcomes first-time delegates. We offer beginner-friendly committees with experienced chairs who guide new participants. We also provide comprehensive training materials and practice sessions before each conference.",
  },
  {
    question: "What is the time commitment?",
    answer:
      "Students typically meet weekly with their school's MUN club for 1-2 hours. Before a conference, delegates spend additional time researching their assigned country and topic. Conferences are usually 1-2 days.",
  },
  {
    question: "How much does Model UN cost?",
    answer:
      "Conference registration fees typically range from $40-$80 per delegate. JAMUN offers financial assistance for families who need support. We believe no student should be excluded due to cost.",
  },
  {
    question: "Can shy students participate in Model UN?",
    answer:
      "Model UN is excellent for building confidence in shy students. Delegates start with less speaking and gradually increase participation as they become comfortable. Many shy students become confident speakers through MUN.",
  },
  {
    question: "What should my child wear to a conference?",
    answer:
      "Delegates wear Western business attire (business professional dress code). This typically means dress pants/skirt, button-down shirts, blazers, and closed-toe shoes. Detailed dress code information is provided before each conference.",
  },
];

const MUNFAQ: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      ref={containerRef}
      className={`${styles.section} ${isVisible ? styles.visible : styles.hidden}`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tagline}>Have Questions?</span>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Find answers to common questions about Model UN, our conferences,
            and how to get involved.
          </p>
        </div>

        <div className={styles.faqList}>
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${openFaq === index ? styles.faqOpen : ""}`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
              >
                <span>{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={styles.faqChevron}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MUNFAQ;
