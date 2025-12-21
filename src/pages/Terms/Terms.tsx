import { useState } from "react";
import CommonHead from "../../components/CommonHead/CommonHead";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./Terms.module.css";

const Terms: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.page}>
      <CommonHead
        title="Terms of Service"
        description="Terms of Service for using JAMUN's website and participating in our Model UN, Mock Trial, and Mathletes programs."
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

      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last updated: December 12, 2025</p>

          <section className={styles.section}>
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the JAMUN website (jamun.org) and participating in our programs, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>About JAMUN</h2>
            <p>
              The Junior Assembly of Model United Nations ("JAMUN") is a 501(c)(3) nonprofit organization that provides Model UN, Mock Trial, and Mathletes programs for students in grades 5-8. Our programs are designed to develop public speaking, critical thinking, and leadership skills.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Program Participation</h2>
            <h3>Eligibility</h3>
            <p>
              Our programs are primarily designed for students in grades 5-8. Participation in JAMUN programs requires registration and, for minor participants, parental or guardian consent.
            </p>

            <h3>Code of Conduct</h3>
            <p>All participants are expected to:</p>
            <ul>
              <li>Treat fellow participants, volunteers, and staff with respect</li>
              <li>Follow the rules and guidelines of each program</li>
              <li>Maintain academic integrity and honesty</li>
              <li>Dress appropriately for conferences and events (Western business attire for Model UN)</li>
              <li>Refrain from disruptive or inappropriate behavior</li>
            </ul>
            <p>
              JAMUN reserves the right to remove any participant who violates our code of conduct.
            </p>

            <h3>Registration and Fees</h3>
            <p>
              Program registration fees, when applicable, are outlined during the registration process. Financial assistance is available for families who demonstrate need. Refund policies vary by program and will be communicated at the time of registration.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Website Use</h2>
            <h3>Permitted Use</h3>
            <p>You may use our website for lawful purposes related to learning about and participating in JAMUN programs. You agree not to:</p>
            <ul>
              <li>Use the website in any way that violates applicable laws</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Copy, distribute, or modify website content without permission</li>
              <li>Use automated systems to access the website without our consent</li>
            </ul>

            <h3>User Accounts</h3>
            <p>
              If you create an account on our website, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Intellectual Property</h2>
            <p>
              All content on the JAMUN website, including text, graphics, logos, images, and educational materials, is the property of JAMUN or its content providers and is protected by copyright and other intellectual property laws.
            </p>
            <p>
              Educational resources provided by JAMUN may be used for personal, non-commercial educational purposes. Redistribution or commercial use requires written permission.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Donations</h2>
            <p>
              JAMUN is a registered 501(c)(3) nonprofit organization. Donations are tax-deductible to the extent allowed by law. All donations are final and non-refundable unless otherwise required by law.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Disclaimer of Warranties</h2>
            <p>
              The JAMUN website and services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, JAMUN and its volunteers, officers, and directors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or participation in our programs.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless JAMUN, its volunteers, officers, and directors from any claims, damages, losses, or expenses arising from your violation of these Terms of Service or your use of our website and services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes are posted constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@jamun.org">contact@jamun.org</a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
