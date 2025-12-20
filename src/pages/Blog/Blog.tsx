import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommonHead from "../../components/CommonHead/CommonHead";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { BLOG_POSTS, BlogPost, formatDate } from "../../data/blog";
import styles from "./Blog.module.css";

type CategoryFilter = BlogPost["category"];

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

const CalendarIcon: React.FC = () => (
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
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    />
  </svg>
);

const UserIcon: React.FC = () => (
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
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    />
  </svg>
);

const getCategoryColor = (category: string) => {
  switch (category) {
    case "MUN Prep":
      return styles.categoryMUNPrep;
    case "Delegate Advice":
      return styles.categoryDelegateAdvice;
    case "Crisis Committees":
      return styles.categoryCrisis;
    case "Committees":
      return styles.categoryCommittees;
    case "MUN Skills":
      return styles.categoryMUNSkills;
    case "Reflections":
      return styles.categoryReflections;
    case "Global Impact":
      return styles.categoryGlobalImpact;
    default:
      return "";
  }
};

const CATEGORIES: CategoryFilter[] = ["MUN Prep", "Delegate Advice", "Crisis Committees", "Committees", "MUN Skills", "Reflections", "Global Impact"];

const Blog: React.FC = () => {
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

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (categoryFilters.size > 0 && !categoryFilters.has(post.category)) {
      return false;
    }
    return true;
  }).sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  const getCategoryCount = (category: CategoryFilter) => {
    return BLOG_POSTS.filter((post) => post.category === category).length;
  };

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className={styles.page}>
      <CommonHead
        title="Blog"
        description="Insights, tips, and news from the world of Model UN. Stay updated with the latest from JAMUN."
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
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>
            Insights, tips, and news from the world of Model UN. Stay updated with the latest from JAMUN.
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
                Showing {filteredPosts.length} of {BLOG_POSTS.length} posts
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
        {featuredPost && (
          <Link to={`/blog/${featuredPost.id}`} className={styles.featuredCard}>
            <div className={styles.featuredContent}>
              <span className={`${styles.categoryBadge} ${getCategoryColor(featuredPost.category)}`}>
                {featuredPost.category}
              </span>
              <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
              <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
              <div className={styles.featuredMeta}>
                <span className={styles.metaItem}>
                  <span className={styles.metaIcon}><UserIcon /></span>
                  {featuredPost.author}
                </span>
                <span className={styles.metaItem}>
                  <span className={styles.metaIcon}><CalendarIcon /></span>
                  {formatDate(featuredPost.publishDate)}
                </span>
              </div>
              <span className={styles.readMore}>
                Read article
                <span className={styles.arrowIcon}><ArrowRightIcon /></span>
              </span>
            </div>
          </Link>
        )}

        {otherPosts.length > 0 && (
          <div className={styles.grid}>
            {otherPosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className={styles.card}>
                <div className={styles.cardContent}>
                  <span className={`${styles.categoryBadge} ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <div className={styles.cardMeta}>
                    <span className={styles.metaItem}>
                      <span className={styles.metaIcon}><UserIcon /></span>
                      {post.author}
                    </span>
                    <span className={styles.metaItem}>
                      <span className={styles.metaIcon}><CalendarIcon /></span>
                      {formatDate(post.publishDate)}
                    </span>
                  </div>
                  <span className={styles.readMore}>
                    Read article
                    <span className={styles.arrowIcon}><ArrowRightIcon /></span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className={styles.emptyState}>
            <p>No posts found matching your filters.</p>
            <button
              className={styles.clearFiltersButton}
              onClick={() => setCategoryFilters(new Set())}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
