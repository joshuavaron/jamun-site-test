import { useState } from "react";
import CommonHead from "../../components/CommonHead/CommonHead";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./Privacy.module.css";

const Privacy: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.page}>
      <CommonHead
        title="Privacy Policy"
        description="JAMUN's privacy policy explains how we collect, use, and protect your personal information when you use our website and programs."
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
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: December 12, 2025</p>

          <section className={styles.section}>
            <h2>Introduction</h2>
            <p>
              The Junior Assembly of Model United Nations ("JAMUN," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website jamun.org and participate in our programs.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Register for our programs (Model UN, Mock Trial, or Mathletes)</li>
              <li>Subscribe to our newsletter</li>
              <li>Make a donation</li>
              <li>Contact us with inquiries</li>
              <li>Apply for grants or volunteer positions</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name and contact information (email address, phone number)</li>
              <li>School name and grade level</li>
              <li>Parent/guardian contact information (for minor participants)</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your device, including your IP address, browser type, operating system, and browsing behavior. We use Google Analytics to help us understand how visitors use our site.
            </p>
          </section>

          <section className={styles.section}>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Administer our programs and events</li>
              <li>Communicate with participants, parents, and educators</li>
              <li>Process donations and issue tax receipts</li>
              <li>Improve our website and services</li>
              <li>Send newsletters and program updates (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist us in operating our website and programs</li>
              <li>Schools and educators involved in our programs (with appropriate consent)</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Children's Privacy</h2>
            <p>
              Our programs serve students in grades 5-8. We are committed to protecting the privacy of children. We collect information about minor participants only with parental or guardian consent and use it solely for program administration. Parents and guardians may contact us at any time to review, update, or delete their child's information.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Photography and Video</h2>
            <p>
              JAMUN may take photographs and video recordings of participants at our events, conferences, and programs. These images and videos may be used for promotional and educational purposes, including but not limited to:
            </p>
            <ul>
              <li>Our website and social media channels</li>
              <li>Marketing materials and brochures</li>
              <li>Newsletters and email communications</li>
              <li>Grant applications and annual reports</li>
              <li>Press releases and media coverage</li>
            </ul>
            <p>
              By registering for and participating in JAMUN programs, participants (and their parents/guardians for minors) consent to the use of their likeness in photographs and videos for these purposes. If you do not wish to have your child photographed or recorded, please notify us in writing at <a href="mailto:contact@jamun.org">contact@jamun.org</a> prior to the event. We will make reasonable efforts to accommodate such requests, though we cannot guarantee complete exclusion from group photos or wide-angle shots.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Cookies</h2>
            <p>
              Our website uses cookies and similar technologies to enhance your browsing experience and collect analytics data. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at:
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

export default Privacy;
