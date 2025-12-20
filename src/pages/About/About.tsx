import { useState } from "react";
import { Link } from "react-router-dom";
import CommonHead from "../../components/CommonHead/CommonHead";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import styles from "./About.module.css";

const teamMembers = [
  {
    name: "Joshua Varon",
    role: "Founder",
    initials: "JV",
    image: undefined,
    bio: "Student at Duke University studying mathematics and computer science. Passionate about making academic competitions accessible to all students.",
  },
  {
    name: "Charlie Fumerton",
    role: "Director of Model UN",
    initials: "CF",
    image: "/images/charlie.webp",
    bio: "Volleyball player with a keen interest in politics and international relations. Dedicated to fostering diplomatic skills in young delegates.",
  },
  {
    name: "Dustin Simon",
    role: "Director of Mock Trial",
    initials: "DS",
    image: "/images/dustin.webp",
    bio: "Tennis enthusiast studying mathematics. Committed to helping students develop critical thinking and advocacy skills through legal simulation.",
  },
  {
    name: "Will Ballis",
    role: "Director of Mathletes",
    initials: "WB",
    image: "/images/will.webp",
    bio: "Former Mathletes champion who studied advanced mathematics. Passionate about philanthropy and expanding math competition opportunities.",
  },
];

const About: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.page}>
      <CommonHead
        title="About Us | Middle School Model UN, Mock Trial & Math Competitions"
        description="JAMUN provides Model UN, Mock Trial, and Mathletes programs for middle school and high school students. Our volunteer-run nonprofit helps students develop public speaking, critical thinking, and leadership skills that prepare them for college and beyond."
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
        title="Empowering Middle School Students Through Academic Competition"
        subtitle="JAMUN is a volunteer-run nonprofit bringing Model UN, Mock Trial, and Mathletes programs to middle school and high school students nationwide. We help young learners build the public speaking, critical thinking, and leadership skills they need to succeed in college and life."
        backgroundImage="/images/homebackground.webp"
      />

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.missionContent}>
          <div className={styles.missionText}>
            <h2 className={styles.sectionTitle}>Building Future Leaders Through Academic Competition</h2>
            <p className={styles.sectionSubtitle}>
              We believe every middle school and high school student deserves access to programs that
              develop critical thinking, public speaking, and leadership skills—regardless of their
              school's resources or family income.
            </p>
            <p>
              Founded by students who experienced firsthand the transformative power of
              Model UN, Mock Trial, and Mathletes, JAMUN was created to break down barriers
              and expand access to these life-changing academic competitions for students in grades 6-12.
            </p>
            <p>
              Research shows that students who participate in academic competitions perform better
              academically, develop stronger communication skills, and are more likely to succeed
              in college admissions. Our programs give your child or students the competitive edge
              they need—while also being genuinely fun and engaging.
            </p>
            <p>
              We're 100% volunteer-run by college students and recent graduates who are passionate
              about mentoring the next generation. Every donation goes directly toward supporting
              students through grants, educational materials, and program expansion.
            </p>
          </div>

          <div className={styles.statsCard}>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Middle & High School Students</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Partner Schools</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>25+</div>
                <div className={styles.statLabel}>Dedicated Volunteers</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Volunteer Run</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - For Parents and Teachers */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsContent}>
          <h2 className={styles.sectionTitle}>Why Parents and Teachers Choose JAMUN</h2>
          <p className={styles.sectionSubtitle}>
            Our programs deliver measurable benefits that prepare middle school and high school
            students for academic success and future careers.
          </p>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <div className={styles.benefitText}>
                <h3>Strengthens College Applications</h3>
                <p>
                  Students who participate in academic competitions stand out to admissions officers.
                  Model UN, Mock Trial, and math competitions demonstrate intellectual curiosity,
                  dedication, and the ability to excel under pressure.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div className={styles.benefitText}>
                <h3>Develops Critical Thinking Skills</h3>
                <p>
                  Our programs challenge students to analyze complex problems, evaluate evidence,
                  and construct logical arguments—skills that transfer directly to classroom
                  success and standardized test performance.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                </svg>
              </div>
              <div className={styles.benefitText}>
                <h3>Builds Public Speaking Confidence</h3>
                <p>
                  Students gain hands-on experience presenting ideas, debating peers, and speaking
                  in front of audiences. These skills boost confidence in the classroom and prepare
                  students for future job interviews and presentations.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <div className={styles.benefitText}>
                <h3>Fosters Teamwork and Leadership</h3>
                <p>
                  Students learn to collaborate effectively, take on leadership roles, and support
                  their teammates. These interpersonal skills are essential for success in school
                  group projects and future careers.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className={styles.benefitText}>
                <h3>Expands Knowledge Beyond the Classroom</h3>
                <p>
                  Model UN exposes students to global affairs and international relations. Mock
                  Trial teaches the legal system and civic engagement. Mathletes develops advanced
                  problem-solving abilities that extend beyond standard curriculum.
                </p>
              </div>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <div className={styles.benefitText}>
                <h3>Safe, Supportive Learning Environment</h3>
                <p>
                  Our volunteer mentors create an encouraging atmosphere where it's safe to make
                  mistakes and learn. We focus on growth and improvement, not just winning, so
                  every student leaves feeling more confident and capable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContent}>
          <h2 className={styles.sectionTitle}>What We Stand For</h2>
          <p className={styles.sectionSubtitle}>
            Our core values guide everything we do, from organizing conferences to
            supporting individual students.
          </p>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM7 10a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3>Accessibility</h3>
              <p>
                We work tirelessly to remove financial and geographic barriers, ensuring
                every student can participate regardless of background.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>
                We maintain high standards in all our programs, preparing students
                for success in competition and beyond.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3>Growth</h3>
              <p>
                We foster an environment where making mistakes is part of learning,
                and every experience is an opportunity to improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.teamContent}>
          <h2 className={styles.sectionTitle}>Meet Our Volunteer Leadership Team</h2>
          <p className={styles.sectionSubtitle}>
            JAMUN is led by passionate college students and recent graduates who volunteer their time
            to mentor the next generation. Our team brings firsthand experience from top academic
            competitions and a genuine commitment to helping middle school and high school students succeed.
          </p>

          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.teamAvatarImage}
                  />
                ) : (
                  <div className={styles.teamAvatar}>{member.initials}</div>
                )}
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
                <p className={styles.teamBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className={styles.programsSection}>
        <div className={styles.programsContent}>
          <h2 className={styles.sectionTitle}>Academic Competition Programs for Grades 6-12</h2>
          <p className={styles.sectionSubtitle}>
            We offer three engaging extracurricular programs designed for middle school and high school
            students. Each program develops unique skills while preparing students for college and beyond.
          </p>

          <div className={styles.programsGrid}>
            <Link to="/modelun" className={styles.programCard}>
              <div className={styles.programIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3>Model United Nations for Middle School</h3>
              <p>
                Students simulate UN committees, research global issues, and develop diplomatic,
                public speaking, and research skills. Perfect for students interested in politics,
                international relations, and current events.
              </p>
              <span className={styles.programLink}>
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>

            <Link to="/mocktrial" className={styles.programCard}>
              <div className={styles.programIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <h3>Mock Trial for Kids and Teens</h3>
              <p>
                Students experience courtroom simulations, master legal argumentation, and build
                persuasive speaking abilities. Ideal for students curious about law, justice, and
                civic engagement.
              </p>
              <span className={styles.programLink}>
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>

            <Link to="/mathletes" className={styles.programCard}>
              <div className={styles.programIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                </svg>
              </div>
              <h3>Math Competitions for Middle Schoolers</h3>
              <p>
                Students challenge themselves with competitive mathematics, problem-solving contests,
                and team-based challenges. Great for students who love numbers and want to strengthen
                their quantitative reasoning skills.
              </p>
              <span className={styles.programLink}>
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Help Your Students Thrive?</h2>
          <p>
            Whether you're a parent looking to enroll your child, a teacher wanting to bring
            Model UN, Mock Trial, or Mathletes to your school, or someone who wants to support
            our mission—we're here to help.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/donate" className={styles.ctaButtonPrimary}>
              Support Student Success
            </Link>
            <Link to="/grants" className={styles.ctaButtonSecondary}>
              Apply for a School Grant
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
