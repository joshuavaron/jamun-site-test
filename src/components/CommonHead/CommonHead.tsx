import { Helmet } from "react-helmet-async";

export interface CommonHeadProps {
  /** Page-specific title - will be appended with site name */
  title?: string;
  /** Page-specific description for SEO */
  description?: string;
  /** Page-specific image for Open Graph */
  ogImage?: string;
  /** Page-specific URL for canonical and Open Graph */
  canonicalUrl?: string;
}

const SITE_NAME = "JAMUN";
const DEFAULT_DESCRIPTION = "The Junior Assembly of Model United Nations - Empowering young minds through diplomacy and debate.";
const DEFAULT_OG_IMAGE = "/images/og-default.webp";

export default function CommonHead({
  title,
  description = DEFAULT_DESCRIPTION,
  ogImage = DEFAULT_OG_IMAGE,
  canonicalUrl,
}: CommonHeadProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Favicon */}
      <link rel="icon" type="image/webp" href="/images/jamun-blue-logo.webp" />

      {/* Google Analytics (gtag) - Replace GA_MEASUREMENT_ID with your actual ID */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </script>

      {/* Additional common meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#2563eb" />
    </Helmet>
  );
}
