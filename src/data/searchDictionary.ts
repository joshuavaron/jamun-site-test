// Search dictionary mapping keywords/phrases to page links
// Keys are lowercase search terms, values are { label, href } objects

export interface SearchResult {
  label: string;
  href: string;
}

export const SEARCH_DICTIONARY: Record<string, SearchResult> = {
  // ==========================================
  // MAIN PAGES
  // ==========================================

  // Home
  "home": { label: "Home", href: "/" },
  "homepage": { label: "Home", href: "/" },
  "main": { label: "Home", href: "/" },
  "welcome": { label: "Home", href: "/" },
  "start": { label: "Home", href: "/" },
  "jamun": { label: "Home", href: "/" },

  // About
  "about": { label: "About", href: "/about" },
  "about us": { label: "About", href: "/about" },
  "mission": { label: "About", href: "/about" },
  "team": { label: "About", href: "/about" },
  "history": { label: "About", href: "/about" },
  "organization": { label: "About", href: "/about" },
  "who we are": { label: "About", href: "/about" },
  "our story": { label: "About", href: "/about" },
  "impact": { label: "About", href: "/about" },

  // Leaderboards
  "leaderboards": { label: "Leaderboards", href: "/leaderboards" },
  "leaderboard": { label: "Leaderboards", href: "/leaderboards" },
  "rankings": { label: "Leaderboards", href: "/leaderboards" },
  "scores": { label: "Leaderboards", href: "/leaderboards" },
  "points": { label: "Leaderboards", href: "/leaderboards" },
  "standings": { label: "Leaderboards", href: "/leaderboards" },
  "top delegates": { label: "Leaderboards", href: "/leaderboards" },
  "winners": { label: "Leaderboards", href: "/leaderboards" },
  "awards": { label: "Leaderboards", href: "/leaderboards" },
  "best delegate": { label: "Leaderboards", href: "/leaderboards" },
  "outstanding delegate": { label: "Leaderboards", href: "/leaderboards" },
  "honorable mention": { label: "Leaderboards", href: "/leaderboards" },

  // Blog
  "blog": { label: "Blog", href: "/blog" },
  "articles": { label: "Blog", href: "/blog" },
  "posts": { label: "Blog", href: "/blog" },
  "news": { label: "Blog", href: "/blog" },
  "updates": { label: "Blog", href: "/blog" },
  "stories": { label: "Blog", href: "/blog" },
  "insights": { label: "Blog", href: "/blog" },
  "tips": { label: "Blog", href: "/blog" },
  "advice": { label: "Blog", href: "/blog" },

  // Donate
  "donate": { label: "Donate", href: "/donate" },
  "donation": { label: "Donate", href: "/donate" },
  "donations": { label: "Donate", href: "/donate" },
  "contribute": { label: "Donate", href: "/donate" },
  "support": { label: "Donate", href: "/donate" },
  "give": { label: "Donate", href: "/donate" },
  "fundraise": { label: "Donate", href: "/donate" },
  "fundraising": { label: "Donate", href: "/donate" },
  "sponsor": { label: "Donate", href: "/donate" },
  "charity": { label: "Donate", href: "/donate" },

  // Privacy
  "privacy": { label: "Privacy Policy", href: "/privacy" },
  "privacy policy": { label: "Privacy Policy", href: "/privacy" },
  "data protection": { label: "Privacy Policy", href: "/privacy" },
  "data privacy": { label: "Privacy Policy", href: "/privacy" },
  "cookies": { label: "Privacy Policy", href: "/privacy" },
  "gdpr": { label: "Privacy Policy", href: "/privacy" },

  // Terms
  "terms": { label: "Terms of Service", href: "/terms" },
  "terms of service": { label: "Terms of Service", href: "/terms" },
  "terms and conditions": { label: "Terms of Service", href: "/terms" },
  "tos": { label: "Terms of Service", href: "/terms" },
  "legal terms": { label: "Terms of Service", href: "/terms" },
  "user agreement": { label: "Terms of Service", href: "/terms" },

  // ==========================================
  // MODEL UN
  // ==========================================
  "model un": { label: "Model UN", href: "/modelun" },
  "modelun": { label: "Model UN", href: "/modelun" },
  "mun": { label: "Model UN", href: "/modelun" },
  "united nations": { label: "Model UN", href: "/modelun" },
  "un": { label: "Model UN", href: "/modelun" },
  "diplomacy": { label: "Model UN", href: "/modelun" },
  "conference": { label: "Model UN", href: "/modelun" },
  "simulation": { label: "Model UN", href: "/modelun" },
  "international relations": { label: "Model UN", href: "/modelun" },
  "global affairs": { label: "Model UN", href: "/modelun" },

  // ==========================================
  // MOCK TRIAL
  // ==========================================
  "mock trial": { label: "Mock Trial", href: "/mocktrial" },
  "mocktrial": { label: "Mock Trial", href: "/mocktrial" },
  "trial": { label: "Mock Trial", href: "/mocktrial" },
  "court": { label: "Mock Trial", href: "/mocktrial" },
  "legal": { label: "Mock Trial", href: "/mocktrial" },
  "law": { label: "Mock Trial", href: "/mocktrial" },
  "lawyer": { label: "Mock Trial", href: "/mocktrial" },
  "attorney": { label: "Mock Trial", href: "/mocktrial" },
  "litigation": { label: "Mock Trial", href: "/mocktrial" },
  "courtroom": { label: "Mock Trial", href: "/mocktrial" },
  "prosecution": { label: "Mock Trial", href: "/mocktrial" },
  "defense": { label: "Mock Trial", href: "/mocktrial" },
  "witness": { label: "Mock Trial", href: "/mocktrial" },
  "objection": { label: "Mock Trial", href: "/mocktrial" },
  "verdict": { label: "Mock Trial", href: "/mocktrial" },
  "jury": { label: "Mock Trial", href: "/mocktrial" },
  "cross examination": { label: "Mock Trial", href: "/mocktrial" },
  "direct examination": { label: "Mock Trial", href: "/mocktrial" },
  "opening statement": { label: "Mock Trial", href: "/mocktrial" },
  "closing argument": { label: "Mock Trial", href: "/mocktrial" },

  // ==========================================
  // MATHLETES
  // ==========================================
  "mathletes": { label: "Mathletes", href: "/mathletes" },
  "math": { label: "Mathletes", href: "/mathletes" },
  "mathematics": { label: "Mathletes", href: "/mathletes" },
  "math competition": { label: "Mathletes", href: "/mathletes" },
  "math olympiad": { label: "Mathletes", href: "/mathletes" },
  "mathcounts": { label: "Mathletes", href: "/mathletes" },
  "amc": { label: "Mathletes", href: "/mathletes" },
  "algebra": { label: "Mathletes", href: "/mathletes" },
  "geometry": { label: "Mathletes", href: "/mathletes" },
  "calculus": { label: "Mathletes", href: "/mathletes" },
  "problem solving": { label: "Mathletes", href: "/mathletes" },
  "number theory": { label: "Mathletes", href: "/mathletes" },

  // ==========================================
  // AUTHENTICATION
  // ==========================================
  "login": { label: "Login", href: "/login" },
  "sign in": { label: "Login", href: "/login" },
  "signin": { label: "Login", href: "/login" },
  "log in": { label: "Login", href: "/login" },
  "account": { label: "Login", href: "/login" },
  "register": { label: "Login", href: "/login" },
  "sign up": { label: "Login", href: "/login" },
  "signup": { label: "Login", href: "/login" },

  // ==========================================
  // GRANTS
  // ==========================================
  "grants": { label: "Grants", href: "/grants" },
  "grant": { label: "Grants", href: "/grants" },
  "funding": { label: "Grants", href: "/grants" },
  "scholarship": { label: "Grants", href: "/grants" },
  "scholarships": { label: "Grants", href: "/grants" },
  "financial aid": { label: "Grants", href: "/grants" },
  "financial assistance": { label: "Grants", href: "/grants" },
  "school funding": { label: "Grants", href: "/grants" },
  "educational grants": { label: "Grants", href: "/grants" },
  "apply for funding": { label: "Grants", href: "/grants" },
  "delegation funding": { label: "Grants", href: "/grants" },

  // ==========================================
  // COMMITTEES LIST
  // ==========================================
  "committees": { label: "Committees", href: "/modelun/committees" },
  "committee list": { label: "Committees", href: "/modelun/committees" },
  "all committees": { label: "Committees", href: "/modelun/committees" },
  "browse committees": { label: "Committees", href: "/modelun/committees" },
  "view committees": { label: "Committees", href: "/modelun/committees" },
  "ga committees": { label: "Committees", href: "/modelun/committees" },
  "crisis committees": { label: "Committees", href: "/modelun/committees" },
  "general assembly": { label: "Committees", href: "/modelun/committees" },

  // ==========================================
  // GENERAL ASSEMBLY COMMITTEES
  // ==========================================

  // UNICEF
  "unicef": { label: "UNICEF", href: "/modelun/committees/unicef" },
  "children": { label: "UNICEF", href: "/modelun/committees/unicef" },
  "education": { label: "UNICEF", href: "/modelun/committees/unicef" },
  "primary education": { label: "UNICEF", href: "/modelun/committees/unicef" },
  "conflict zones": { label: "UNICEF", href: "/modelun/committees/unicef" },
  "child rights": { label: "UNICEF", href: "/modelun/committees/unicef" },
  "beginner committee": { label: "UNICEF", href: "/modelun/committees/unicef" },

  // African Union
  "african union": { label: "African Union", href: "/modelun/committees/african-union" },
  "au": { label: "African Union", href: "/modelun/committees/african-union" },
  "africa": { label: "African Union", href: "/modelun/committees/african-union" },
  "colonial": { label: "African Union", href: "/modelun/committees/african-union" },
  "colonialism": { label: "African Union", href: "/modelun/committees/african-union" },
  "decolonization": { label: "African Union", href: "/modelun/committees/african-union" },
  "independence": { label: "African Union", href: "/modelun/committees/african-union" },
  "territories": { label: "African Union", href: "/modelun/committees/african-union" },

  // SPECPOL
  "specpol": { label: "SPECPOL", href: "/modelun/committees/specpol" },
  "special political": { label: "SPECPOL", href: "/modelun/committees/specpol" },
  "trade": { label: "SPECPOL", href: "/modelun/committees/specpol" },
  "international trade": { label: "SPECPOL", href: "/modelun/committees/specpol" },
  "trade security": { label: "SPECPOL", href: "/modelun/committees/specpol" },
  "commerce": { label: "SPECPOL", href: "/modelun/committees/specpol" },

  // ASEAN
  "asean": { label: "ASEAN", href: "/modelun/committees/asean" },
  "southeast asia": { label: "ASEAN", href: "/modelun/committees/asean" },
  "asia": { label: "ASEAN", href: "/modelun/committees/asean" },
  "labor laws": { label: "ASEAN", href: "/modelun/committees/asean" },
  "labor": { label: "ASEAN", href: "/modelun/committees/asean" },
  "workers rights": { label: "ASEAN", href: "/modelun/committees/asean" },
  "accountability": { label: "ASEAN", href: "/modelun/committees/asean" },

  // SOCHUM
  "sochum": { label: "SOCHUM", href: "/modelun/committees/sochum" },
  "social humanitarian": { label: "SOCHUM", href: "/modelun/committees/sochum" },
  "homelessness": { label: "SOCHUM", href: "/modelun/committees/sochum" },
  "homeless": { label: "SOCHUM", href: "/modelun/committees/sochum" },
  "refugees": { label: "SOCHUM", href: "/modelun/committees/sochum" },
  "refugee": { label: "SOCHUM", href: "/modelun/committees/sochum" },
  "europe": { label: "SOCHUM", href: "/modelun/committees/sochum" },
  "humanitarian": { label: "SOCHUM", href: "/modelun/committees/sochum" },

  // DISEC
  "disec": { label: "DISEC", href: "/modelun/committees/disec" },
  "disarmament": { label: "DISEC", href: "/modelun/committees/disec" },
  "nuclear": { label: "DISEC", href: "/modelun/committees/disec" },
  "nuclear weapons": { label: "DISEC", href: "/modelun/committees/disec" },
  "nuclear weaponry": { label: "DISEC", href: "/modelun/committees/disec" },
  "weapons": { label: "DISEC", href: "/modelun/committees/disec" },
  "arms": { label: "DISEC", href: "/modelun/committees/disec" },
  "proliferation": { label: "DISEC", href: "/modelun/committees/disec" },
  "advanced committee": { label: "DISEC", href: "/modelun/committees/disec" },

  // European Union
  "european union": { label: "European Union", href: "/modelun/committees/european-union" },
  "eu": { label: "European Union", href: "/modelun/committees/european-union" },
  "border security": { label: "European Union", href: "/modelun/committees/european-union" },
  "borders": { label: "European Union", href: "/modelun/committees/european-union" },
  "migration": { label: "European Union", href: "/modelun/committees/european-union" },
  "asylum": { label: "European Union", href: "/modelun/committees/european-union" },
  "schengen": { label: "European Union", href: "/modelun/committees/european-union" },

  // ECOSOC
  "ecosoc": { label: "ECOSOC", href: "/modelun/committees/ecosoc" },
  "economic social": { label: "ECOSOC", href: "/modelun/committees/ecosoc" },
  "corruption": { label: "ECOSOC", href: "/modelun/committees/ecosoc" },
  "government corruption": { label: "ECOSOC", href: "/modelun/committees/ecosoc" },
  "transparency": { label: "ECOSOC", href: "/modelun/committees/ecosoc" },
  "anti-corruption": { label: "ECOSOC", href: "/modelun/committees/ecosoc" },

  // ==========================================
  // CRISIS COMMITTEES
  // ==========================================

  // Haiti's Independence
  "haiti": { label: "Haiti's Independence", href: "/modelun/committees/haitis-independence" },
  "haitian revolution": { label: "Haiti's Independence", href: "/modelun/committees/haitis-independence" },
  "toussaint": { label: "Haiti's Independence", href: "/modelun/committees/haitis-independence" },
  "louverture": { label: "Haiti's Independence", href: "/modelun/committees/haitis-independence" },
  "slave revolt": { label: "Haiti's Independence", href: "/modelun/committees/haitis-independence" },
  "caribbean": { label: "Haiti's Independence", href: "/modelun/committees/haitis-independence" },

  // Chinese Civil War
  "chinese civil war": { label: "Chinese Civil War", href: "/modelun/committees/chinese-civil-war" },
  "china": { label: "Chinese Civil War", href: "/modelun/committees/chinese-civil-war" },
  "mao": { label: "Chinese Civil War", href: "/modelun/committees/chinese-civil-war" },
  "chiang kai-shek": { label: "Chinese Civil War", href: "/modelun/committees/chinese-civil-war" },
  "kuomintang": { label: "Chinese Civil War", href: "/modelun/committees/chinese-civil-war" },
  "communist party": { label: "Chinese Civil War", href: "/modelun/committees/chinese-civil-war" },
  "nationalists": { label: "Chinese Civil War", href: "/modelun/committees/chinese-civil-war" },

  // Ad-Hoc Committee
  "ad hoc": { label: "Ad-Hoc Committee", href: "/modelun/committees/ad-hoc-committee" },
  "adhoc": { label: "Ad-Hoc Committee", href: "/modelun/committees/ad-hoc-committee" },
  "secretary general": { label: "Ad-Hoc Committee", href: "/modelun/committees/ad-hoc-committee" },
  "classified": { label: "Ad-Hoc Committee", href: "/modelun/committees/ad-hoc-committee" },
  "mystery": { label: "Ad-Hoc Committee", href: "/modelun/committees/ad-hoc-committee" },
  "surprise committee": { label: "Ad-Hoc Committee", href: "/modelun/committees/ad-hoc-committee" },

  // Great Depression
  "great depression": { label: "The Great Depression", href: "/modelun/committees/great-depression" },
  "depression": { label: "The Great Depression", href: "/modelun/committees/great-depression" },
  "1929": { label: "The Great Depression", href: "/modelun/committees/great-depression" },
  "economic crisis": { label: "The Great Depression", href: "/modelun/committees/great-depression" },
  "wall street crash": { label: "The Great Depression", href: "/modelun/committees/great-depression" },
  "stock market": { label: "The Great Depression", href: "/modelun/committees/great-depression" },
  "new deal": { label: "The Great Depression", href: "/modelun/committees/great-depression" },

  // American Civil War
  "american civil war": { label: "American Civil War (Union)", href: "/modelun/committees/american-civil-war" },
  "civil war": { label: "American Civil War (Union)", href: "/modelun/committees/american-civil-war" },
  "union": { label: "American Civil War (Union)", href: "/modelun/committees/american-civil-war" },
  "lincoln": { label: "American Civil War (Union)", href: "/modelun/committees/american-civil-war" },
  "confederacy": { label: "American Civil War (Union)", href: "/modelun/committees/american-civil-war" },
  "slavery": { label: "American Civil War (Union)", href: "/modelun/committees/american-civil-war" },
  "abolition": { label: "American Civil War (Union)", href: "/modelun/committees/american-civil-war" },
  "emancipation": { label: "American Civil War (Union)", href: "/modelun/committees/american-civil-war" },

  // Sudan Civil War
  "sudan": { label: "Sudan Civil War", href: "/modelun/committees/sudan-civil-war" },
  "sudan civil war": { label: "Sudan Civil War", href: "/modelun/committees/sudan-civil-war" },
  "darfur": { label: "Sudan Civil War", href: "/modelun/committees/sudan-civil-war" },
  "south sudan": { label: "Sudan Civil War", href: "/modelun/committees/sudan-civil-war" },
  "khartoum": { label: "Sudan Civil War", href: "/modelun/committees/sudan-civil-war" },
  "african conflict": { label: "Sudan Civil War", href: "/modelun/committees/sudan-civil-war" },

  // Cuban Missile Crisis
  "cuban missile crisis": { label: "Cuban Missile Crisis", href: "/modelun/committees/cuban-missile-crisis" },
  "cuba": { label: "Cuban Missile Crisis", href: "/modelun/committees/cuban-missile-crisis" },
  "missile crisis": { label: "Cuban Missile Crisis", href: "/modelun/committees/cuban-missile-crisis" },
  "kennedy": { label: "Cuban Missile Crisis", href: "/modelun/committees/cuban-missile-crisis" },
  "khrushchev": { label: "Cuban Missile Crisis", href: "/modelun/committees/cuban-missile-crisis" },
  "cold war": { label: "Cuban Missile Crisis", href: "/modelun/committees/cuban-missile-crisis" },
  "nuclear standoff": { label: "Cuban Missile Crisis", href: "/modelun/committees/cuban-missile-crisis" },
  "soviets": { label: "Cuban Missile Crisis", href: "/modelun/committees/cuban-missile-crisis" },

  // Rwandan Genocide
  "rwanda": { label: "Rwandan Genocide", href: "/modelun/committees/rwandan-genocide" },
  "rwandan genocide": { label: "Rwandan Genocide", href: "/modelun/committees/rwandan-genocide" },
  "genocide": { label: "Rwandan Genocide", href: "/modelun/committees/rwandan-genocide" },
  "hutu": { label: "Rwandan Genocide", href: "/modelun/committees/rwandan-genocide" },
  "tutsi": { label: "Rwandan Genocide", href: "/modelun/committees/rwandan-genocide" },
  "1994": { label: "Rwandan Genocide", href: "/modelun/committees/rwandan-genocide" },
  "un peacekeeping": { label: "Rwandan Genocide", href: "/modelun/committees/rwandan-genocide" },

  // ==========================================
  // RESOURCES LIST
  // ==========================================
  "resources": { label: "Resources", href: "/modelun/resources" },
  "resource": { label: "Resources", href: "/modelun/resources" },
  "guides": { label: "Resources", href: "/modelun/resources" },
  "materials": { label: "Resources", href: "/modelun/resources" },
  "learning": { label: "Resources", href: "/modelun/resources" },
  "tutorials": { label: "Resources", href: "/modelun/resources" },
  "training": { label: "Resources", href: "/modelun/resources" },
  "preparation": { label: "Resources", href: "/modelun/resources" },
  "how to": { label: "Resources", href: "/modelun/resources" },
  "getting started": { label: "Resources", href: "/modelun/resources" },

  // ==========================================
  // SPECIFIC RESOURCES
  // ==========================================

  // Delegate Handbook
  "delegate handbook": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },
  "handbook": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },
  "delegate": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },
  "caucus": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },
  "moderated caucus": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },
  "unmoderated caucus": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },
  "mod caucus": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },
  "unmod": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },
  "formal debate": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },
  "informal debate": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },
  "bloc formation": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },

  // Rules of Procedure
  "rules of procedure": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "rules": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "procedure": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "rop": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "parliamentary": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "parliamentary procedure": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "voting": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "motions": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "motion": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "point of order": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "point of inquiry": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "point of information": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "roll call": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "placard": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "quorum": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "simple majority": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "two thirds majority": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },

  // Position Paper Template
  "position paper": { label: "Position Paper Template", href: "/modelun/resources/position-paper-template" },
  "position paper template": { label: "Position Paper Template", href: "/modelun/resources/position-paper-template" },
  "position": { label: "Position Paper Template", href: "/modelun/resources/position-paper-template" },
  "paper": { label: "Position Paper Template", href: "/modelun/resources/position-paper-template" },
  "template": { label: "Position Paper Template", href: "/modelun/resources/position-paper-template" },
  "policy paper": { label: "Position Paper Template", href: "/modelun/resources/position-paper-template" },
  "country position": { label: "Position Paper Template", href: "/modelun/resources/position-paper-template" },
  "policy statement": { label: "Position Paper Template", href: "/modelun/resources/position-paper-template" },
  "opening speech": { label: "Position Paper Template", href: "/modelun/resources/position-paper-template" },

  // Resolution Writing Guide
  "resolution writing": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "resolution writing guide": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "resolution": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "resolutions": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "writing": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "clauses": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "preambulatory": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "operative": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "operative clauses": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "preambulatory clauses": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "working paper": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "draft resolution": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "amendments": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "friendly amendment": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },
  "unfriendly amendment": { label: "Resolution Writing Guide", href: "/modelun/resources/resolution-writing-guide" },

  // Country Research Guide
  "country research": { label: "Country Research Guide", href: "/modelun/resources/country-research-guide" },
  "country research guide": { label: "Country Research Guide", href: "/modelun/resources/country-research-guide" },
  "country": { label: "Country Research Guide", href: "/modelun/resources/country-research-guide" },
  "research": { label: "Country Research Guide", href: "/modelun/resources/country-research-guide" },
  "foreign policy": { label: "Country Research Guide", href: "/modelun/resources/country-research-guide" },
  "nation": { label: "Country Research Guide", href: "/modelun/resources/country-research-guide" },
  "state": { label: "Country Research Guide", href: "/modelun/resources/country-research-guide" },
  "cia world factbook": { label: "Country Research Guide", href: "/modelun/resources/country-research-guide" },
  "un member": { label: "Country Research Guide", href: "/modelun/resources/country-research-guide" },
  "background guide": { label: "Country Research Guide", href: "/modelun/resources/country-research-guide" },

  // Public Speaking Tips
  "public speaking": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "public speaking tips": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "speaking": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "speech": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "speeches": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "debate": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "presentation": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "oratory": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "rhetoric": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "confidence": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "stage fright": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "nervousness": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "body language": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "eye contact": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },
  "voice projection": { label: "Public Speaking Tips", href: "/modelun/resources/public-speaking-tips" },

  // ==========================================
  // BLOG POSTS
  // ==========================================

  // "So, You've Done Model UN. Now What?"
  "now what": { label: "So, You've Done Model UN. Now What?", href: "/blog/now-what" },
  "after mun": { label: "So, You've Done Model UN. Now What?", href: "/blog/now-what" },
  "post conference": { label: "So, You've Done Model UN. Now What?", href: "/blog/now-what" },
  "next steps": { label: "So, You've Done Model UN. Now What?", href: "/blog/now-what" },
  "career": { label: "So, You've Done Model UN. Now What?", href: "/blog/now-what" },
  "future": { label: "So, You've Done Model UN. Now What?", href: "/blog/now-what" },

  // "Writing Comprehensive Working Papers That Succeed"
  "working papers": { label: "Writing Comprehensive Working Papers", href: "/blog/working-papers" },
  "comprehensive working paper": { label: "Writing Comprehensive Working Papers", href: "/blog/working-papers" },
  "successful paper": { label: "Writing Comprehensive Working Papers", href: "/blog/working-papers" },
  "paper writing": { label: "Writing Comprehensive Working Papers", href: "/blog/working-papers" },

  // "How Do I Model UN?"
  "how do i model un": { label: "How Do I Model UN?", href: "/blog/how-do-i-mun" },
  "how to mun": { label: "How Do I Model UN?", href: "/blog/how-do-i-mun" },
  "beginner": { label: "How Do I Model UN?", href: "/blog/how-do-i-mun" },
  "beginners": { label: "How Do I Model UN?", href: "/blog/how-do-i-mun" },
  "new delegate": { label: "How Do I Model UN?", href: "/blog/how-do-i-mun" },
  "first time": { label: "How Do I Model UN?", href: "/blog/how-do-i-mun" },
  "newbie": { label: "How Do I Model UN?", href: "/blog/how-do-i-mun" },
  "starter": { label: "How Do I Model UN?", href: "/blog/how-do-i-mun" },

  // "How to Make the Perfect Bloc"
  "perfect bloc": { label: "How to Make the Perfect Bloc", href: "/blog/perfect-bloc" },
  "bloc": { label: "How to Make the Perfect Bloc", href: "/blog/perfect-bloc" },
  "blocs": { label: "How to Make the Perfect Bloc", href: "/blog/perfect-bloc" },
  "coalition": { label: "How to Make the Perfect Bloc", href: "/blog/perfect-bloc" },
  "alliance": { label: "How to Make the Perfect Bloc", href: "/blog/perfect-bloc" },
  "merge": { label: "How to Make the Perfect Bloc", href: "/blog/perfect-bloc" },
  "merging blocs": { label: "How to Make the Perfect Bloc", href: "/blog/perfect-bloc" },

  // "Crisis Committees and Joint Crisis"
  "joint crisis": { label: "Crisis Committees and Joint Crisis", href: "/blog/crisis-committees" },
  "crisis": { label: "Crisis Committees and Joint Crisis", href: "/blog/crisis-committees" },
  "jcc": { label: "Crisis Committees and Joint Crisis", href: "/blog/crisis-committees" },
  "crisis note": { label: "Crisis Committees and Joint Crisis", href: "/blog/crisis-committees" },
  "backroom": { label: "Crisis Committees and Joint Crisis", href: "/blog/crisis-committees" },
  "crisis arc": { label: "Crisis Committees and Joint Crisis", href: "/blog/crisis-committees" },
  "directives": { label: "Crisis Committees and Joint Crisis", href: "/blog/crisis-committees" },
  "portfolio powers": { label: "Crisis Committees and Joint Crisis", href: "/blog/crisis-committees" },

  // "How to Stand Out in Your Model UN Committee"
  "stand out": { label: "How to Stand Out in Committee", href: "/blog/stand-out" },
  "standing out": { label: "How to Stand Out in Committee", href: "/blog/stand-out" },
  "get noticed": { label: "How to Stand Out in Committee", href: "/blog/stand-out" },
  "impress": { label: "How to Stand Out in Committee", href: "/blog/stand-out" },
  "win award": { label: "How to Stand Out in Committee", href: "/blog/stand-out" },
  "best delegate award": { label: "How to Stand Out in Committee", href: "/blog/stand-out" },

  // "Building Relationships with Fellow Delegates"
  "relationships": { label: "Building Relationships with Delegates", href: "/blog/building-relationships" },
  "networking": { label: "Building Relationships with Delegates", href: "/blog/building-relationships" },
  "fellow delegates": { label: "Building Relationships with Delegates", href: "/blog/building-relationships" },
  "making friends": { label: "Building Relationships with Delegates", href: "/blog/building-relationships" },
  "connections": { label: "Building Relationships with Delegates", href: "/blog/building-relationships" },
  "socializing": { label: "Building Relationships with Delegates", href: "/blog/building-relationships" },

  // "On Local Government"
  "local government": { label: "On Local Government", href: "/blog/local-government" },
  "city council": { label: "On Local Government", href: "/blog/local-government" },
  "municipal": { label: "On Local Government", href: "/blog/local-government" },
  "civic engagement": { label: "On Local Government", href: "/blog/local-government" },
  "community": { label: "On Local Government", href: "/blog/local-government" },

  // "The Delegate Who Listens"
  "listening": { label: "The Delegate Who Listens", href: "/blog/delegate-who-listens" },
  "active listening": { label: "The Delegate Who Listens", href: "/blog/delegate-who-listens" },
  "listen": { label: "The Delegate Who Listens", href: "/blog/delegate-who-listens" },
  "communication skills": { label: "The Delegate Who Listens", href: "/blog/delegate-who-listens" },

  // "How to Prepare for Your First Conference"
  "first conference": { label: "How to Prepare for Your First Conference", href: "/blog/first-conference" },
  "conference prep": { label: "How to Prepare for Your First Conference", href: "/blog/first-conference" },
  "preparing": { label: "How to Prepare for Your First Conference", href: "/blog/first-conference" },
  "prepare": { label: "How to Prepare for Your First Conference", href: "/blog/first-conference" },
  "pre-conference": { label: "How to Prepare for Your First Conference", href: "/blog/first-conference" },
  "conference preparation": { label: "How to Prepare for Your First Conference", href: "/blog/first-conference" },

  // "From Simulation to Reality"
  "simulation to reality": { label: "From Simulation to Reality", href: "/blog/simulation-to-reality" },
  "real world": { label: "From Simulation to Reality", href: "/blog/simulation-to-reality" },
  "real un": { label: "From Simulation to Reality", href: "/blog/simulation-to-reality" },
  "actual un": { label: "From Simulation to Reality", href: "/blog/simulation-to-reality" },
  "global impact": { label: "From Simulation to Reality", href: "/blog/simulation-to-reality" },
  "making a difference": { label: "From Simulation to Reality", href: "/blog/simulation-to-reality" },

  // "A Young Leader's Guide to Model UN"
  "young leader": { label: "A Young Leader's Guide to Model UN", href: "/blog/young-leaders-guide" },
  "leadership": { label: "A Young Leader's Guide to Model UN", href: "/blog/young-leaders-guide" },
  "leader": { label: "A Young Leader's Guide to Model UN", href: "/blog/young-leaders-guide" },
  "youth leadership": { label: "A Young Leader's Guide to Model UN", href: "/blog/young-leaders-guide" },
  "student leader": { label: "A Young Leader's Guide to Model UN", href: "/blog/young-leaders-guide" },

  // "Becoming the Master of the Unmod"
  "master of unmod": { label: "Becoming the Master of the Unmod", href: "/blog/master-of-unmod" },
  "unmod tips": { label: "Becoming the Master of the Unmod", href: "/blog/master-of-unmod" },
  "unmoderated tips": { label: "Becoming the Master of the Unmod", href: "/blog/master-of-unmod" },
  "unmod strategy": { label: "Becoming the Master of the Unmod", href: "/blog/master-of-unmod" },
  "informal session": { label: "Becoming the Master of the Unmod", href: "/blog/master-of-unmod" },

  // "The Role of Resolutions in Model UN"
  "role of resolutions": { label: "The Role of Resolutions in Model UN", href: "/blog/role-of-resolutions" },
  "resolution importance": { label: "The Role of Resolutions in Model UN", href: "/blog/role-of-resolutions" },
  "why resolutions": { label: "The Role of Resolutions in Model UN", href: "/blog/role-of-resolutions" },
  "resolution purpose": { label: "The Role of Resolutions in Model UN", href: "/blog/role-of-resolutions" },

  // "Are GA Committees Better than Crisis Committees?"
  "ga vs crisis": { label: "GA vs Crisis Committees", href: "/blog/ga-vs-crisis" },
  "ga better": { label: "GA vs Crisis Committees", href: "/blog/ga-vs-crisis" },
  "which committee": { label: "GA vs Crisis Committees", href: "/blog/ga-vs-crisis" },
  "committee type": { label: "GA vs Crisis Committees", href: "/blog/ga-vs-crisis" },
  "ga or crisis": { label: "GA vs Crisis Committees", href: "/blog/ga-vs-crisis" },

  // "Are Ad Hoc Crises Better than Regular Crisis Committees?"
  "ad hoc crisis": { label: "Ad Hoc vs Regular Crisis", href: "/blog/adhoc-vs-crisis" },
  "ad hoc vs crisis": { label: "Ad Hoc vs Regular Crisis", href: "/blog/adhoc-vs-crisis" },
  "regular crisis": { label: "Ad Hoc vs Regular Crisis", href: "/blog/adhoc-vs-crisis" },
  "crisis types": { label: "Ad Hoc vs Regular Crisis", href: "/blog/adhoc-vs-crisis" },

  // ==========================================
  // GENERAL MUN TERMS
  // ==========================================
  "committee": { label: "Committees", href: "/modelun/committees" },
  "delegate experience": { label: "Model UN", href: "/modelun" },
  "secretariat": { label: "Model UN", href: "/modelun" },
  "dais": { label: "Model UN", href: "/modelun" },
  "chair": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "chairperson": { label: "Rules of Procedure", href: "/modelun/resources/rules-of-procedure" },
  "head delegate": { label: "Delegate Handbook", href: "/modelun/resources/delegate-handbook" },
  "faculty advisor": { label: "Model UN", href: "/modelun" },
  "delegation": { label: "Model UN", href: "/modelun" },
  "gavel": { label: "Leaderboards", href: "/leaderboards" },
  "gavels": { label: "Leaderboards", href: "/leaderboards" },
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
