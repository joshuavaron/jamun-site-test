import { useState } from "react";
import CommonHead from "../../components/CommonHead/CommonHead";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import styles from "./Grants.module.css";

const testimonials = [
  {
    quote: "The JAMUN grant made it possible for me to attend my first Model UN conference. It changed my perspective on global issues and sparked my passion for diplomacy.",
    author: "Sarah M.",
    role: "Grant Recipient, 2024",
  },
  {
    quote: "Our school couldn't afford to start a Mock Trial program until we received the School Program Grant. Now we have 30 students participating!",
    author: "Mr. Johnson",
    role: "Faculty Advisor",
  },
];

const Grants: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.page}>
      <CommonHead
        title="Student Grants - Fund Your Competition Fees"
        description="Apply for JAMUN grants to fund your participation in academic competitions. We believe every student deserves the opportunity to excel."
      />
      <NavBar
        title="jamun-blue-side-logo"
        exploreItems={[
          { label: "Leaderboards", href: "/leaderboards" },
          { label: "Model UN", href: "/modelun" },
          { label: "Mock Trial", href: "/mocktrial" },
          { label: "Mathletes", href: "/mathletes" },
        ]}
        searchValue={query}
        onSearchChange={setQuery}
        rightButtons={[
          { label: "Donate", href: "/donate", variant: "donate" },
          { label: "Register", href: "/register" },
        ]}
      />

      <Banner
        title="Grants That Empower Future Leaders"
        subtitle="We believe every student deserves the opportunity to excel in academic competitions."
        backgroundImage="/images/DSC02135.webp"
      />

      {/* Why Grants Matter Section */}
      <section className={styles.whySection}>
        <div className={styles.whyContent}>
          <div className={styles.whyText}>
            <h2 className={styles.sectionTitle}>Why Our Grants Matter</h2>
            <p className={styles.sectionSubtitle}>
              Academic competitions build critical thinking, public speaking, and leadership skills
              that last a lifetime. But cost shouldn't determine who gets to participate.
            </p>

            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4>Remove Financial Barriers</h4>
                  <p>Cover registration fees, travel costs, and materials so no student is left behind.</p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4>Accelerate Growth</h4>
                  <p>Provide resources and training that help students reach their full potential faster.</p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4>Build Community</h4>
                  <p>Connect students with mentors, peers, and opportunities across the country.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.whyVisual}>
            <div className={styles.visualCard}>
              <div className={styles.visualHeader}>
                <span className={styles.visualBadge}>Impact Story</span>
              </div>
              <blockquote className={styles.testimonialQuote}>
                "{testimonials[0].quote}"
              </blockquote>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>
                  {testimonials[0].author.charAt(0)}
                </div>
                <div>
                  <strong>{testimonials[0].author}</strong>
                  <span>{testimonials[0].role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="how-it-works" className={styles.processSection}>
        <div className={styles.processContent}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionSubtitle}>
            Our streamlined application process makes it easy to apply for funding.
          </p>

          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepConnector} />
              <h3>Submit Application</h3>
              <p>Fill out our simple online form with your information and grant request details.</p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepConnector} />
              <h3>Review Process</h3>
              <p>Our team reviews applications within 2-3 weeks and may reach out for additional information.</p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepConnector} />
              <h3>Receive Decision</h3>
              <p>You'll be notified of the decision via email with next steps if approved.</p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Get Funded</h3>
              <p>Approved grants are disbursed directly to cover your specified expenses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsContent}>
          <h2 className={styles.sectionTitle}>What Recipients Say</h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote>{testimonial.quote}</blockquote>
                <div className={styles.testimonialFooter}>
                  <div className={styles.authorAvatar}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className={styles.formSection}>
        <div className={styles.formContent}>
          <div className={styles.applyCard}>
            <div className={styles.applyIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className={styles.sectionTitle}>Request a Grant</h2>
            <p className={styles.sectionSubtitle}>
              Fill out a short application and our team will review it within 2-3 weeks.
            </p>
            <a
              href="https://forms.gle/YOUR_GOOGLE_FORM_ID"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.applyButton}
            >
              Open Application Form
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <p className={styles.formNote}>
              You'll be redirected to Google Forms to complete your application.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Have Questions?</h2>
          <p>
            We're here to help. Reach out to our grants team for assistance with your application
            or to learn more about our funding opportunities.
          </p>
          <a href="mailto:wballis@jamun.org" className={styles.ctaButton}>
            Contact Grants Team
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grants;
