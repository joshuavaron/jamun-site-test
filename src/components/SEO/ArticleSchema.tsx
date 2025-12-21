import { Helmet } from "react-helmet-async";

const SITE_URL = "https://jamun.org";

export interface ArticleSchemaProps {
  title: string;
  description: string;
  /** URL path (e.g., "/blog/my-article") */
  url: string;
  /** ISO 8601 date string (e.g., "2024-01-15") */
  datePublished: string;
  /** ISO 8601 date string for last modification */
  dateModified?: string;
  /** Author name */
  author?: string;
  /** Image path (relative or absolute) */
  image?: string;
  /** Article category/section */
  category?: string;
  /** Keywords/tags for the article */
  keywords?: string[];
}

/**
 * ArticleSchema component for adding Article/BlogPosting structured data (JSON-LD)
 * This helps search engines display rich snippets for blog posts and articles
 */
export default function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = "JAMUN Team",
  image,
  category,
  keywords,
}: ArticleSchemaProps) {
  const absoluteUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;
  const absoluteImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : `${SITE_URL}/images/og-default.webp`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    url: absoluteUrl,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author === "JAMUN Team" ? "JAMUN" : author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "JAMUN - Junior Assembly of Model United Nations",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/jamun-blue-logo.webp`,
      },
    },
    image: {
      "@type": "ImageObject",
      url: absoluteImage,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl,
    },
    ...(category && { articleSection: category }),
    ...(keywords && keywords.length > 0 && { keywords: keywords.join(", ") }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    </Helmet>
  );
}
