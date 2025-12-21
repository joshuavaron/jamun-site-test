import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Sitemap from "vite-plugin-sitemap";

// Static routes for the sitemap (excluding root which is added automatically)
const staticRoutes = [
  "/about",
  "/blog",
  "/donate",
  "/grants",
  "/leaderboards",
  "/modelun",
  "/modelun/committees",
  "/modelun/resources",
  "/mocktrial",
  "/mathletes",
  "/privacy",
  "/terms",
];

// Dynamic routes for blog posts
const blogPostIds = [
  "so-youve-done-model-un-now-what",
  "writing-comprehensive-working-papers",
  "how-do-i-model-un",
  "how-to-make-the-perfect-bloc",
  "crisis-committees-and-joint-crisis",
  "how-to-stand-out",
  "building-relationships-with-fellow-delegates",
  "on-local-government",
  "the-delegate-who-listens",
  "how-to-prepare-for-your-first-conference",
  "from-simulation-to-reality",
  "a-young-leaders-guide-to-model-un",
  "becoming-the-master-of-the-unmod",
  "the-role-of-resolutions",
  "ga-better-than-crisis",
  "ad-hoc-better-than-crisis",
  "mastering-your-first-position-paper",
];

// Dynamic routes for committees
const committeeIds = [
  "unicef",
  "african-union",
  "specpol",
  "asean",
  "sochum",
  "disec",
  "european-union",
  "ecosoc-corruption",
  "haiti-independence",
  "chinese-civil-war",
  "adhoc",
  "great-depression",
  "american-civil-war",
  "sudan-civil-war",
  "cuban-missile-crisis",
  "rwandan-genocide",
];

// Dynamic routes for resources
const resourceIds = [
  "delegate-handbook",
  "rules-of-procedure",
  "position-paper-template",
  "resolution-writing-guide",
  "country-research-guide",
  "public-speaking-tips",
];

// Generate all dynamic routes
const blogRoutes = blogPostIds.map((id) => `/blog/${id}`);
const committeeRoutes = committeeIds.map((id) => `/modelun/committees/${id}`);
const resourceRoutes = resourceIds.map((id) => `/modelun/resources/${id}`);

const allRoutes = [
  ...staticRoutes,
  ...blogRoutes,
  ...committeeRoutes,
  ...resourceRoutes,
];

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://jamun.org",
      dynamicRoutes: allRoutes,
      exclude: ["/404"],
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date(),
      readable: true,
    }),
  ],
});
