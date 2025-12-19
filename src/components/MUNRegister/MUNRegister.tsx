import styles from "./MUNRegister.module.css";

export interface MUNRegisterProps {
  backgroundImage?: string;
  registerUrl?: string;
}

export default function MUNRegister({
  backgroundImage = "/images/mainbackground.webp",
  registerUrl = "#",
}: MUNRegisterProps) {
  return (
    <section
      className={styles.register}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay} />
      <a href={registerUrl} className={styles.button}>
        <span className={styles.buttonText}>Register Now</span>
      </a>
    </section>
  );
}
