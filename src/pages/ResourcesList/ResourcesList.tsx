import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommonHead from "../../components/CommonHead/CommonHead";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { RESOURCES, ResourceData } from "../../data/resources";
import styles from "./ResourcesList.module.css";

type CategoryFilter = ResourceData["category"];

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
      return <DownloadIcon />;
    default:
      return <DocumentIcon />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Getting Started":
      return styles.categoryGettingStarted;
    case "Writing Guides":
      return styles.categoryWritingGuides;
    case "Conference Materials":
      return styles.categoryConferenceMaterials;
    case "Training":
      return styles.categoryTraining;
    default:
      return "";
  }
};

const CATEGORIES: CategoryFilter[] = [
  "Getting Started",
  "Writing Guides",
  "Conference Materials",
  "Training",
];

const ResourcesList: React.FC = () => {
  const [query, setQuery] = useState("");
  const [categoryFilters, setCategoryFilters] = useState<Set<CategoryFilter>>(new Set());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFilter = (value: CategoryFilter) => {
    const newSet = new Set(categoryFilters);
    if (newSet.has(value)) {
      newSet.delete(value);
    } else {
      newSet.add(value);
    }
    setCategoryFilters(newSet);
  };

  const filteredResources = RESOURCES.filter((r) => {
    if (categoryFilters.size > 0 && !categoryFilters.has(r.category)) {
      return false;
    }
    return true;
  });

  const getCategoryCount = (category: CategoryFilter) => {
    return RESOURCES.filter((r) => r.category === category).length;
  };

  return (
    <div className={styles.page}>
      <CommonHead
        title="Delegate Resources"
        description="Everything you need to prepare for a successful Model UN experience. Browse guides, templates, and training materials."
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

      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Delegate Resources</h1>
          <p className={styles.subtitle}>
            Everything you need to prepare for a successful Model UN experience. Browse our collection of {RESOURCES.length} resources including guides, templates, and training materials.
          </p>
          <div className={styles.filtersContainer}>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Category</span>
              <div className={styles.filters}>
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    className={`${styles.filterButton} ${categoryFilters.has(category) ? styles.filterActive : ""}`}
                    onClick={() => toggleFilter(category)}
                  >
                    {category} ({getCategoryCount(category)})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {categoryFilters.size > 0 && (
            <div className={styles.activeFilters}>
              <span className={styles.resultsCount}>
                Showing {filteredResources.length} of {RESOURCES.length} resources
              </span>
              <button
                className={styles.clearFilters}
                onClick={() => setCategoryFilters(new Set())}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.grid}>
          {filteredResources.map((resource) => (
            <Link
              to={`/modelun/resources/${resource.id}`}
              key={resource.id}
              className={styles.card}
            >
              <div className={styles.cardAccent} />

              <div className={styles.cardHeader}>
                <span className={styles.iconWrapper}>
                  {getIcon(resource.icon)}
                </span>
                <span
                  className={`${styles.categoryBadge} ${getCategoryColor(resource.category)}`}
                >
                  {resource.category}
                </span>
              </div>

              <h3 className={styles.resourceName}>{resource.name}</h3>
              <p className={styles.description}>{resource.shortDescription}</p>

              <div className={styles.cardFooter}>
                <span className={styles.learnMore}>
                  Read more
                  <span className={styles.arrowIcon}>
                    <ArrowRightIcon />
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ResourcesList;
