import React, { useEffect, useRef, useState } from "react";
import styles from "./HomeFAQ.module.css";

interface FAQ {
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    question: "What is Model UN for middle school students?",
    answer:
      "Model United Nations (Model UN or MUN) is an educational simulation where students role-play as delegates representing countries in UN committees. Middle school students learn about international relations, diplomacy, public speaking, and global issues while developing research and debate skills in a supportive environment.",
  },
  {
    question: "How do I prepare for my first Mock Trial competition?",
    answer:
      "JAMUN provides free preparation materials including case studies, witness preparation guides, and opening/closing statement templates. Our beginner-friendly resources help students understand courtroom procedures, develop argumentation skills, and practice cross-examination techniques before their first competition.",
  },
  {
    question: "What grades can participate in JAMUN programs?",
    answer:
      "JAMUN programs are designed for students in grades 5-8 (approximately ages 10-14). Our conferences and competitions are specifically tailored for middle school students, with beginner-friendly formats that welcome first-time participants alongside more experienced competitors.",
  },
  {
    question: "Are there free resources for math competitions?",
    answer:
      "Yes! JAMUN offers free Mathletes practice problems, competition strategies, and study guides. Our materials cover topics commonly seen in middle school math competitions like MATHCOUNTS, Math Olympiad, and other regional math leagues. All resources are available at no cost to students and teachers.",
  },
  {
    question: "How can my school start a Model UN or Mock Trial program?",
    answer:
      "Teachers and schools can access our free curriculum guides, training materials, and ongoing support to start Model UN, Mock Trial, or Mathletes programs. JAMUN also offers grants to help schools cover competition fees and travel costs. Visit our Resources page or contact us to get started.",
  },
  {
    question: "Is JAMUN a nonprofit organization?",
    answer:
      "Yes, JAMUN is a 100% volunteer-run nonprofit organization. We've raised over $70,000 to support student programs, with all donations going directly toward educational materials, competition grants, and expanding access to academic enrichment opportunities for middle school students.",
  },
];

const HomeFAQ: React.FC = () => {
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
          <span className={styles.tagline}>Questions & Answers</span>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Everything you need to know about getting started with Model UN, Mock Trial, and Mathletes.
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

export default HomeFAQ;
