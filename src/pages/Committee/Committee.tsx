import { useState, useEffect, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import CommonHead from "../../components/CommonHead/CommonHead";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import CommitteeBanner from "../../components/CommitteeBanner/CommitteeBanner";
import { getCommitteeById, CommitteeData } from "../../data/committees";
import styles from "./Committee.module.css";

// Minecraft-style obfuscation charset - similar width characters that cycle rapidly
const OBFUSCATION_CHARS = "ᒲ∷╎ᓵᒷ⍑╎ᓭ⍑ᔑᓭ⎓∴ᓵ╎↸ᔑ⎓ᔑ↸∷ᓵᒲꖎ⍑⎓";

// Words/phrases to obfuscate in the letter
const OBFUSCATE_PATTERNS = [
  "Ad-Hoc Committee of the Secretary General",
  "utmost importance",
  "sensitivity",
  "discretion",
  "challenging moments",
  "modern history",
  "decision-makers",
  "crisis",
  "competing interests",
  "rapid decisions",
  "pressure",
  "complex interconnections",
  "global system",
  "Further details",
  "revealed",
  "appropriate time",
  "high-stakes",
  "[REDACTED]",
];

const COUNTRY_CODES: Record<string, string> = {
  "Afghanistan": "af", "Albania": "al", "Algeria": "dz", "Angola": "ao",
  "Argentina": "ar", "Australia": "au", "Austria": "at", "Bangladesh": "bd",
  "Belgium": "be", "Benin": "bj", "Bolivia": "bo", "Botswana": "bw",
  "Brazil": "br", "Brunei": "bn", "Bulgaria": "bg", "Burkina Faso": "bf",
  "Cambodia": "kh", "Cameroon": "cm", "Canada": "ca", "Chad": "td",
  "Chile": "cl", "China": "cn", "Colombia": "co", "Costa Rica": "cr",
  "Côte d'Ivoire": "ci", "Croatia": "hr", "Cuba": "cu", "Cyprus": "cy",
  "Czech Republic": "cz", "Denmark": "dk", "Ecuador": "ec", "Egypt": "eg",
  "Eritrea": "er", "Estonia": "ee", "Ethiopia": "et", "Finland": "fi",
  "France": "fr", "Gabon": "ga", "Gambia": "gm", "Germany": "de",
  "Ghana": "gh", "Greece": "gr", "Guatemala": "gt", "Guinea": "gn",
  "Honduras": "hn", "Hungary": "hu", "India": "in", "Indonesia": "id",
  "Iran": "ir", "Iraq": "iq", "Ireland": "ie", "Israel": "il",
  "Italy": "it", "Jamaica": "jm", "Japan": "jp", "Jordan": "jo",
  "Kazakhstan": "kz", "Kenya": "ke", "Kuwait": "kw", "Kyrgyzstan": "kg",
  "Laos": "la", "Latvia": "lv", "Lebanon": "lb", "Libya": "ly",
  "Lithuania": "lt", "Luxembourg": "lu", "Madagascar": "mg", "Malawi": "mw",
  "Malaysia": "my", "Maldives": "mv", "Mali": "ml", "Malta": "mt",
  "Mauritania": "mr", "Mexico": "mx", "Montenegro": "me", "Morocco": "ma",
  "Mozambique": "mz", "Myanmar": "mm", "Namibia": "na", "Nepal": "np",
  "Netherlands": "nl", "New Zealand": "nz", "Niger": "ne", "Nigeria": "ng",
  "North Korea": "kp", "Norway": "no", "Pakistan": "pk", "Paraguay": "py",
  "Peru": "pe", "Philippines": "ph", "Poland": "pl", "Portugal": "pt",
  "Qatar": "qa", "Romania": "ro", "Russia": "ru", "Rwanda": "rw",
  "Saudi Arabia": "sa", "Senegal": "sn", "Serbia": "rs", "Singapore": "sg",
  "Slovakia": "sk", "Slovenia": "si", "Somalia": "so", "South Africa": "za",
  "South Korea": "kr", "Spain": "es", "Sri Lanka": "lk", "Sudan": "sd",
  "Sweden": "se", "Switzerland": "ch", "Syria": "sy", "Tanzania": "tz",
  "Thailand": "th", "Tunisia": "tn", "Turkey": "tr", "Uganda": "ug",
  "Ukraine": "ua", "United Arab Emirates": "ae", "United Kingdom": "gb",
  "United States": "us", "Venezuela": "ve", "Vietnam": "vn", "Zambia": "zm",
  "Zimbabwe": "zw"
};

function getCountryFlagUrl(country: string): string {
  const code = COUNTRY_CODES[country];
  if (!code) return "";
  // Use flat flag images at higher resolution (w80 = 80px wide)
  return `https://flagcdn.com/w80/${code}.png`;
}

const DocumentIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    />
  </svg>
);

const DownloadIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
    />
  </svg>
);

interface CommitteeContentProps {
  committee: CommitteeData;
}

function CommitteeContent({ committee }: CommitteeContentProps) {
  const delegationSize = committee.delegateCount <= 20 ? "Single" : "Double";

  return (
    <div className={styles.content}>
      {/* Two Column Layout */}
      <div className={styles.twoColumn}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          {/* Topic */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Topic</h2>
            <p className={styles.infoValue}>{committee.topic}</p>
          </section>

          {/* Delegation Size */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Delegation Size</h2>
            <p className={styles.infoValue}>{delegationSize}</p>
          </section>

          {/* Number of Delegates */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Number of Delegates</h2>
            <p className={styles.infoValue}>{committee.delegateCount}</p>
          </section>

          {/* Executives */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Committee Executives</h2>
            <div className={styles.executivesList}>
              {committee.executives.map((exec) => (
                <div key={exec.name} className={styles.executiveItem}>
                  <span className={styles.executiveName}>{exec.name}</span>
                  {exec.pronouns && (
                    <span className={styles.executivePronouns}>({exec.pronouns})</span>
                  )}
                  <span className={styles.executiveRole}> — {exec.role}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          {/* Letter from Chair */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Letter from the Chair</h2>
            <div className={styles.letterCard}>
              <pre className={styles.letterText}>{committee.letterFromChair}</pre>
            </div>
          </section>

          {/* Documents */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Committee Documents</h2>
            <div className={styles.documentsList}>
              {committee.documents.map((doc) => (
                <a
                  key={doc.title}
                  href={doc.url}
                  className={styles.documentCard}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.documentIcon}>
                    <DocumentIcon />
                  </span>
                  <div className={styles.documentInfo}>
                    <span className={styles.documentTitle}>{doc.title}</span>
                    <span className={styles.documentType}>{doc.type}</span>
                  </div>
                  <span className={styles.downloadIcon}>
                    <DownloadIcon />
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Countries - Full Width Below */}
      <section className={styles.countriesSection}>
        <h2 className={styles.sectionTitle}>Country Assignments</h2>
        <p className={styles.sectionSubtitle}>
          The following countries are available for delegation in this committee.
        </p>
        <div className={styles.countriesGrid}>
          {committee.countries.map((country) => (
            <div key={country} className={styles.countryItem}>
              <img
                src={getCountryFlagUrl(country)}
                alt={`${country} flag`}
                className={styles.countryFlag}
              />
              <span className={styles.countryName}>{country}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ========================================
// AD-HOC COMMITTEE SPECIAL COMPONENTS
// ========================================

interface GlitchingLetterProps {
  text: string;
}

function GlitchingLetter({ text }: GlitchingLetterProps) {
  const [displayChars, setDisplayChars] = useState<Array<{ char: string; isObfuscated: boolean }>>([]);
  const obfuscationMapRef = useRef<Set<number>>(new Set());

  // Initialize and find indices to obfuscate
  useEffect(() => {
    const obfuscationSet = new Set<number>();
    const textLower = text.toLowerCase();

    OBFUSCATE_PATTERNS.forEach(pattern => {
      const patternLower = pattern.toLowerCase();
      let startIndex = 0;
      let index;

      while ((index = textLower.indexOf(patternLower, startIndex)) !== -1) {
        for (let i = index; i < index + pattern.length; i++) {
          obfuscationSet.add(i);
        }
        startIndex = index + 1;
      }
    });

    obfuscationMapRef.current = obfuscationSet;

    // Initialize display chars
    setDisplayChars(text.split('').map((char, i) => ({
      char,
      isObfuscated: obfuscationSet.has(i)
    })));
  }, [text]);

  // Glitch effect loop - constantly scramble obfuscated characters at ~20 ticks/sec
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setDisplayChars(prev => prev.map((item, index) => {
        if (item.isObfuscated && text[index] !== '\n' && text[index] !== ' ') {
          return {
            ...item,
            char: OBFUSCATION_CHARS[Math.floor(Math.random() * OBFUSCATION_CHARS.length)]
          };
        }
        return item;
      }));
    }, 50);

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <pre className={styles.letterText}>
      {displayChars.map((item, index) => (
        item.isObfuscated && text[index] !== '\n' && text[index] !== ' ' ? (
          <span key={index} className={styles.obfuscatedChar}>{item.char}</span>
        ) : (
          text[index]
        )
      ))}
    </pre>
  );
}

interface CyclingTopicProps {
  realTopic: string;
  redHerringTopics: string[];
}

function CyclingTopic({ realTopic, redHerringTopics }: CyclingTopicProps) {
  const [currentTopic, setCurrentTopic] = useState(redHerringTopics[0] || realTopic);
  const allTopics = useRef([...redHerringTopics, realTopic]);

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * allTopics.current.length);
      setCurrentTopic(allTopics.current[randomIndex]);
    }, 100);

    return () => clearInterval(cycleInterval);
  }, []);

  return <>{currentTopic}</>;
}

interface AdHocCommitteeContentProps {
  committee: CommitteeData;
}

function AdHocCommitteeContent({ committee }: AdHocCommitteeContentProps) {
  const delegationSize = committee.delegateCount <= 20 ? "Single" : "Double";

  return (
    <div className={styles.content}>
      {/* Two Column Layout */}
      <div className={styles.twoColumn}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          {/* Topic - Cycling */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Topic</h2>
            <p className={styles.infoValue}>
              <CyclingTopic
                realTopic={committee.realTopic || "CLASSIFIED"}
                redHerringTopics={committee.redHerringTopics || []}
              />
            </p>
          </section>

          {/* Delegation Size */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Delegation Size</h2>
            <p className={styles.infoValue}>{delegationSize}</p>
          </section>

          {/* Number of Delegates */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Number of Delegates</h2>
            <p className={styles.infoValue}>{committee.delegateCount}</p>
          </section>

          {/* Executives */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Committee Executives</h2>
            <div className={styles.executivesList}>
              {committee.executives.map((exec) => (
                <div key={exec.name} className={styles.executiveItem}>
                  <span className={styles.executiveName}>{exec.name}</span>
                  {exec.pronouns && (
                    <span className={styles.executivePronouns}>({exec.pronouns})</span>
                  )}
                  <span className={styles.executiveRole}> — {exec.role}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          {/* Letter from Chair - Glitching */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Letter from the Chair</h2>
            <div className={styles.letterCard}>
              <GlitchingLetter text={committee.letterFromChair} />
            </div>
          </section>

          {/* Documents - empty for ad-hoc */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Committee Documents</h2>
            <div className={styles.documentsList}>
              <p className={styles.infoValue}>Documents will be provided at committee.</p>
            </div>
          </section>
        </div>
      </div>

      {/* Countries - Full Width Below - crisis committees have no countries */}
      <section className={styles.countriesSection}>
        <h2 className={styles.sectionTitle}>Country Assignments</h2>
        <p className={styles.sectionSubtitle}>
          This is a crisis committee. Delegate roles will be assigned upon registration.
        </p>
      </section>
    </div>
  );
}

const Committee: React.FC = () => {
  const { committeeId } = useParams<{ committeeId: string }>();
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [committeeId]);

  const committee = committeeId ? getCommitteeById(committeeId) : undefined;

  if (!committee) {
    return <Navigate to="/modelun" replace />;
  }

  return (
    <div className={styles.page}>
      <CommonHead
        title={committee.name}
        description={`${committee.name} (${committee.shorthand}) - ${committee.isAdHoc ? 'Crisis committee' : committee.topic}. Learn about this JAMUN Model UN committee.`}
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

      <CommitteeBanner
        name={committee.name}
        shorthand={committee.shorthand}
        group={committee.group}
        topic={committee.isAdHoc ? "CLASSIFIED" : committee.topic}
        backgroundImage={committee.backgroundImage}
      />

      {committee.isAdHoc ? (
        <AdHocCommitteeContent committee={committee} />
      ) : (
        <CommitteeContent committee={committee} />
      )}

      <Footer />
    </div>
  );
};

export default Committee;
