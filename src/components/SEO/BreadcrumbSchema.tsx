import { Helmet } from "react-helmet-async";

const SITE_URL = "https://jamun.org";

export interface BreadcrumbItem {
  name: string;
  /** URL path (e.g., "/modelun" or "/modelun/committees") */
  url: string;
}

export interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * BreadcrumbSchema component for adding BreadcrumbList structured data (JSON-LD)
 * This helps search engines display breadcrumb navigation in search results
 *
 * Usage:
 * <BreadcrumbSchema items={[
 *   { name: "Home", url: "/" },
 *   { name: "Model UN", url: "/modelun" },
 *   { name: "Committees", url: "/modelun/committees" }
 * ]} />
 */
export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
}
