import { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import CommonHead from "../../components/CommonHead/CommonHead";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ResourceBanner from "../../components/ResourceBanner/ResourceBanner";
import { getResourceById, RESOURCES, ResourceData } from "../../data/resources";
import { generateResourcePdf } from "../../utils/generateResourcePdf";
import styles from "./Resource.module.css";

const BookIcon: React.FC = () => (
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
      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
    />
  </svg>
);

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
      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    />
  </svg>
);

const TemplateIcon: React.FC = () => (
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
      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"
    />
  </svg>
);

const GlobeIcon: React.FC = () => (
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
      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
    />
  </svg>
);

const VideoIcon: React.FC = () => (
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
      d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
    />
  </svg>
);

const DownloadIconSmall: React.FC = () => (
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

const ArrowLeftIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    />
  </svg>
);

const ArrowRightIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);

const getIcon = (iconType: ResourceData["icon"]) => {
  switch (iconType) {
    case "book":
      return <BookIcon />;
    case "document":
      return <DocumentIcon />;
    case "template":
      return <TemplateIcon />;
    case "globe":
      return <GlobeIcon />;
    case "video":
      return <VideoIcon />;
    case "download":
      return <DownloadIconSmall />;
    default:
      return <DocumentIcon />;
  }
};

interface ResourceContentProps {
  resource: ResourceData;
}

function ResourceContent({ resource }: ResourceContentProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const relatedResources = resource.relatedResources
    ?.map((id) => RESOURCES.find((r) => r.id === id))
    .filter((r): r is ResourceData => r !== undefined);

  const handleDownloadPdf = async () => {
    if (isGenerating) return;

    setIsGenerating(true);
    try {
      await generateResourcePdf({
        name: resource.name,
        category: resource.category,
        content: resource.content,
      });
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.twoColumn}>
        {/* Left Column - Main Content */}
        <div className={styles.leftColumn}>
          <Link to="/modelun/resources" className={styles.backLink}>
            <span className={styles.backIcon}>
              <ArrowLeftIcon />
            </span>
            Back to Resources
          </Link>

          <article className={styles.article}>
            <div
              className={styles.articleContent}
              dangerouslySetInnerHTML={{ __html: resource.content }}
            />
          </article>
        </div>

        {/* Right Column - Sidebar */}
        <div className={styles.rightColumn}>
          {/* Download Card */}
          <div className={styles.downloadCard}>
            <h3 className={styles.sidebarTitle}>Download Resource</h3>
            <p className={styles.downloadDescription}>
              Get a PDF copy of this resource for offline reference.
            </p>
            <button
              onClick={handleDownloadPdf}
              className={styles.downloadButton}
              disabled={isGenerating}
            >
              <span className={styles.downloadIcon}>
                <DownloadIconSmall />
              </span>
              {isGenerating ? "Generating..." : "Download PDF"}
            </button>
          </div>

          {/* Related Resources */}
          {relatedResources && relatedResources.length > 0 && (
            <div className={styles.relatedCard}>
              <h3 className={styles.sidebarTitle}>Related Resources</h3>
              <div className={styles.relatedList}>
                {relatedResources.map((related) => (
                  <Link
                    key={related.id}
                    to={`/modelun/resources/${related.id}`}
                    className={styles.relatedItem}
                  >
                    <span className={styles.relatedIcon}>
                      {getIcon(related.icon)}
                    </span>
                    <div className={styles.relatedInfo}>
                      <span className={styles.relatedName}>{related.name}</span>
                      <span className={styles.relatedCategory}>
                        {related.category}
                      </span>
                    </div>
                    <span className={styles.relatedArrow}>
                      <ArrowRightIcon />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All Resources Link */}
          <div className={styles.allResourcesCard}>
            <h3 className={styles.sidebarTitle}>Explore More</h3>
            <p className={styles.allResourcesDescription}>
              Browse our complete collection of delegate resources.
            </p>
            <Link to="/modelun/resources" className={styles.allResourcesLink}>
              View All Resources
              <span className={styles.allResourcesArrow}>
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const Resource: React.FC = () => {
  const { resourceId } = useParams<{ resourceId: string }>();
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [resourceId]);

  const resource = resourceId ? getResourceById(resourceId) : undefined;

  if (!resource) {
    return <Navigate to="/modelun/resources" replace />;
  }

  return (
    <div className={styles.page}>
      <CommonHead
        title={resource.name}
        description={resource.longDescription}
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
          { label: "Login", href: "/login" },
        ]}
      />

      <ResourceBanner
        name={resource.name}
        category={resource.category}
        description={resource.longDescription}
      />

      <ResourceContent resource={resource} />

      <Footer />
    </div>
  );
};

export default Resource;
