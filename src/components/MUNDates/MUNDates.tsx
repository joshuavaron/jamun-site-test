import styles from "./MUNDates.module.css";

export interface ImportantDate {
  date: string;
  event: string;
}

export interface MUNDatesProps {
  dates?: ImportantDate[];
}

const DEFAULT_DATES: ImportantDate[] = [
  { date: "January 15", event: "Registration Opens" },
  { date: "February 28", event: "Early Bird Deadline" },
  { date: "March 15", event: "Position Papers Due" },
  { date: "April 5-7", event: "Conference Dates" },
];

export default function MUNDates({ dates = DEFAULT_DATES }: MUNDatesProps) {
  return (
    <section className={styles.datesSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTagline}>Mark Your Calendar</span>
        <h2 className={styles.sectionTitle}>Important Dates</h2>
      </div>
      <div className={styles.timeline}>
        {dates.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot} />
            <div className={styles.timelineContent}>
              <span className={styles.timelineDate}>{item.date}</span>
              <span className={styles.timelineEvent}>{item.event}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
