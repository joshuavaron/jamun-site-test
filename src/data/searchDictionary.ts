// Search dictionary mapping keywords/phrases to page links
// Keys are lowercase search terms, values are { label, href } objects

export interface SearchResult {
  label: string;
  href: string;
}

export const SEARCH_DICTIONARY: Record<string, SearchResult> = {
  // Main pages
  "home": { label: "Home", href: "/" },
  "leaderboards": { label: "Leaderboards", href: "/leaderboards" },
  "leaderboard": { label: "Leaderboards", href: "/leaderboards" },
  "rankings": { label: "Leaderboards", href: "/leaderboards" },
  "scores": { label: "Leaderboards", href: "/leaderboards" },

  // Model UN
  "model un": { label: "Model UN", href: "/modelun" },
  "modelun": { label: "Model UN", href: "/modelun" },
  "mun": { label: "Model UN", href: "/modelun" },
  "united nations": { label: "Model UN", href: "/modelun" },
  "un": { label: "Model UN", href: "/modelun" },

  // Mock Trial
  "mock trial": { label: "Mock Trial", href: "/mocktrial" },
  "mocktrial": { label: "Mock Trial", href: "/mocktrial" },
  "trial": { label: "Mock Trial", href: "/mocktrial" },
  "court": { label: "Mock Trial", href: "/mocktrial" },
  "legal": { label: "Mock Trial", href: "/mocktrial" },
  "law": { label: "Mock Trial", href: "/mocktrial" },

  // Mathletes
  "mathletes": { label: "Mathletes", href: "/mathletes" },
  "math": { label: "Mathletes", href: "/mathletes" },
  "mathematics": { label: "Mathletes", href: "/mathletes" },
  "competition": { label: "Mathletes", href: "/mathletes" },

  // Authentication
  "login": { label: "Login", href: "/login" },
  "sign in": { label: "Login", href: "/login" },
  "signin": { label: "Login", href: "/login" },

  // Grants
  "grants": { label: "Grants", href: "/grants" },
  "funding": { label: "Grants", href: "/grants" },
  "scholarship": { label: "Grants", href: "/grants" },
  "financial": { label: "Grants", href: "/grants" },

  // Resources
  "resources": { label: "Resources", href: "/modelun/resources" },
  "resource": { label: "Resources", href: "/modelun/resources" },
  "guides": { label: "Resources", href: "/modelun/resources" },
  "materials": { label: "Resources", href: "/modelun/resources" },

  // Specific resources
  "delegate handbook": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },
  "handbook": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },
  "delegate": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },

  "rules of procedure": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "rules": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "procedure": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "rop": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "parliamentary": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },

  "position paper": { label: "Position Paper Template", href: "/modelun/resources/position-paper-template" },
  "position paper template": { label: "Position Paper Template", href: "/modelun/resources/position-paper-template" },
  "position": { label: "Position Paper Template", href: "/modelun/resources/position-paper-template" },
  "paper": { label: "Position Paper Template", href: "/modelun/resources/position-paper-template" },
  "template": { label: "Position Paper Template", href: "/modelun/resources/position-paper-template" },

  "resolution writing": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "resolution writing guide": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "resolution": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "resolutions": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "writing": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "clauses": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },

  "country research": { label: "Country Research Guide", href: "/modelun/resources/country-research-guide" },
  "country research guide": { label: "Country Research Guide", href: "/modelun/resources/country-research-guide" },
  "country": { label: "Country Research Guide", href: "/modelun/resources/country-research-guide" },
  "research": { label: "Country Research Guide", href: "/modelun/resources/country-research-guide" },

  "public speaking": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "public speaking tips": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "speaking": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "speech": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "speeches": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "debate": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },

  // MUN-specific terms
  "caucus": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },
  "moderated caucus": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },
  "unmoderated caucus": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },
  "voting": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "motions": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "motion": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "point of order": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "diplomacy": { label: "Model UN", href: "/modelun" },
  "conference": { label: "Model UN", href: "/modelun" },
  "committee": { label: "Model UN", href: "/modelun" },
};

// Get search suggestions based on prefix matching
// Returns up to 3 unique results that exactly match the query as a prefix
export function getSearchSuggestions(query: string, limit: number = 3): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();
  const results: SearchResult[] = [];
  const seenHrefs = new Set<string>();

  // Find all keys that start with the query (prefix matching)
  const matchingEntries = Object.entries(SEARCH_DICTIONARY)
    .filter(([key]) => key.startsWith(normalizedQuery))
    .sort((a, b) => {
      // Prioritize exact matches
      if (a[0] === normalizedQuery) return -1;
      if (b[0] === normalizedQuery) return 1;
      // Then shorter keys (more specific matches)
      return a[0].length - b[0].length;
    });

  for (const [, result] of matchingEntries) {
    // Avoid duplicates (same href)
    if (!seenHrefs.has(result.href)) {
      seenHrefs.add(result.href);
      results.push(result);
      if (results.length >= limit) {
        break;
      }
    }
  }

  return results;
}
