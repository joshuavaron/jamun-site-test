import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export interface CommonHeadProps {
  /** Page-specific title - will be appended with site name */
  title?: string;
  /** Page-specific description for SEO */
  description?: string;
  /** Page-specific image for Open Graph (relative path, will be made absolute) */
  ogImage?: string;
  /** Override automatic canonical URL generation */
  canonicalUrl?: string;
  /** Include Organization schema on this page (recommended for home page) */
  includeOrgSchema?: boolean;
}

const SITE_NAME = "JAMUN";
const SITE_URL = "https://jamun.org";
const DEFAULT_DESCRIPTION = "The Junior Assembly of Model United Nations - Empowering young minds through diplomacy and debate.";
const DEFAULT_OG_IMAGE = "/images/og-default.webp";

// Organization + EducationalOrganization structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "EducationalOrganization", "NGO"],
  "@id": `${SITE_URL}/#organization`,
  name: "JAMUN - Junior Assembly of Model United Nations",
  alternateName: "JAMUN",
  url: SITE_URL,
  logo: `${SITE_URL}/images/jamun-blue-logo.webp`,
  image: `${SITE_URL}/images/og-default.webp`,
  description: "JAMUN is a 100% volunteer-run nonprofit providing free Model UN, Mock Trial, and Mathletes programs for students in grades 5-8. We empower young minds through diplomacy, debate, and academic competition.",
  foundingDate: "2020",
  nonprofitStatus: "Nonprofit501c3",
  areaServed: {
    "@type": "Country",
    name: "United States"
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "Middle school students (grades 5-8)"
  },
  sameAs: [
    "https://www.instagram.com/jamun_usa/",
    "https://www.linkedin.com/company/jamun-org"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "General Inquiry",
    email: "contact@jamun.org"
  },
  keywords: [
    "Model United Nations",
    "Model UN",
    "MUN",
    "Mock Trial",
    "Mathletes",
    "middle school",
    "academic enrichment",
    "nonprofit",
    "extracurricular",
    "debate",
    "diplomacy"
  ]
};

export default function CommonHead({
  title,
  description = DEFAULT_DESCRIPTION,
  ogImage = DEFAULT_OG_IMAGE,
  canonicalUrl,
  includeOrgSchema = false,
}: CommonHeadProps) {
  const location = useLocation();
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  // Generate canonical URL from current path if not provided
  const canonical = canonicalUrl || `${SITE_URL}${location.pathname}`;

  // Ensure OG image is absolute URL
  const absoluteOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${SITE_URL}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={canonical} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Favicon */}
      <link rel="icon" type="image/webp" href="/images/jamun-blue-logo.webp" />

      {/* Google Analytics (gtag) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-JYTR5V7G12"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JYTR5V7G12');
        `}
      </script>

      {/* Organization Schema (JSON-LD) */}
      {includeOrgSchema && (
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      )}

      {/* Additional common meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#2563eb" />
    </Helmet>
  );
}
