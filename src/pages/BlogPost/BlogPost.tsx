import { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import CommonHead from "../../components/CommonHead/CommonHead";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { getBlogPostById, BLOG_POSTS, BlogPost as BlogPostType, formatDate } from "../../data/blog";
import styles from "./BlogPost.module.css";

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

const TagIcon: React.FC = () => (
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
      d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
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

interface BlogPostContentProps {
  post: BlogPostType;
}

function BlogPostContent({ post }: BlogPostContentProps) {
  const relatedPosts = post.relatedPosts
    ?.map((id) => BLOG_POSTS.find((p) => p.id === id))
    .filter((p): p is BlogPostType => p !== undefined);

  return (
    <div className={styles.content}>
      <div className={styles.twoColumn}>
        {/* Left Column - Main Content */}
        <div className={styles.leftColumn}>
          <Link to="/blog" className={styles.backLink}>
            <span className={styles.backIcon}>
              <ArrowLeftIcon />
            </span>
            Back to Blog
          </Link>

          <article className={styles.article}>
            <div
              className={styles.articleContent}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>

        {/* Right Column - Sidebar */}
        <div className={styles.rightColumn}>
          {/* Post Info Card */}
          <div className={styles.infoCard}>
            <h3 className={styles.sidebarTitle}>About this post</h3>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}><UserIcon /></span>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>Author</span>
                  <span className={styles.infoValue}>{post.author}</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}><CalendarIcon /></span>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>Published</span>
                  <span className={styles.infoValue}>{formatDate(post.publishDate)}</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}><TagIcon /></span>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>Category</span>
                  <span className={`${styles.categoryBadge} ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts && relatedPosts.length > 0 && (
            <div className={styles.relatedCard}>
              <h3 className={styles.sidebarTitle}>Related Posts</h3>
              <div className={styles.relatedList}>
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.id}`}
                    className={styles.relatedItem}
                  >
                    <div className={styles.relatedInfo}>
                      <span className={styles.relatedName}>{related.title}</span>
                      <span className={styles.relatedMeta}>
                        {formatDate(related.publishDate)}
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

          {/* All Posts Link */}
          <div className={styles.allPostsCard}>
            <h3 className={styles.sidebarTitle}>Explore More</h3>
            <p className={styles.allPostsDescription}>
              Browse all articles on our blog.
            </p>
            <Link to="/blog" className={styles.allPostsLink}>
              View All Posts
              <span className={styles.allPostsArrow}>
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  const post = postId ? getBlogPostById(postId) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className={styles.page}>
      <CommonHead
        title={post.title.length <= 40 ? `${post.title} - MUN Guide` : post.title}
        description={post.excerpt}
        ogImage={post.imageUrl}
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

      {/* Post Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <span className={`${styles.categoryBadge} ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.excerpt}>{post.excerpt}</p>
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <span className={styles.metaIcon}><UserIcon /></span>
              {post.author}
            </span>
            <span className={styles.metaDivider}>|</span>
            <span className={styles.metaItem}>
              <span className={styles.metaIcon}><CalendarIcon /></span>
              {formatDate(post.publishDate)}
            </span>
          </div>
        </div>
      </div>

      <BlogPostContent post={post} />

      <Footer />
    </div>
  );
};

export default BlogPostPage;
