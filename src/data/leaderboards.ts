// Raw entry without rank (rank is computed from score)
interface RawLeaderboardEntry {
  school: string;
  score: number;
  previousRank: number;
}

// Entry with computed rank
export interface LeaderboardEntry {
  rank: number;
  school: string;
  score: number;
  previousRank: number;
}

export interface Leaderboard {
  title: string;
  data: LeaderboardEntry[];
}

// Helper to sort by score (desc), then alphabetically for ties, and assign ranks
function withRanks(entries: RawLeaderboardEntry[]): LeaderboardEntry[] {
  const sorted = [...entries].sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    // Ties: sort alphabetically by school name
    return a.school.localeCompare(b.school);
  });

  // Assign ranks, accounting for ties (same score = same rank)
  let currentRank = 1;
  return sorted.map((entry, index) => {
    if (index > 0 && sorted[index - 1].score !== entry.score) {
      // Different score from previous, so rank = position + 1
      currentRank = index + 1;
    }
    return {
      ...entry,
      rank: currentRank,
    };
  });
}

// Individual competition data (without ranks - they're computed)
const modelUNRaw: RawLeaderboardEntry[] = [
  { school: "Parkway Middle School", score: 15400, previousRank: 5 },
  { school: "Atlas Jr. High School", score: 12100, previousRank: 4 },
  { school: "Cropley Middle School", score: 11950, previousRank: 1 },
  { school: "Rhodes Middle School", score: 10500, previousRank: 9 },
  { school: "Cary East Middle School", score: 9800, previousRank: 4 },
  { school: "Eastwood School", score: 9500, previousRank: 6 },
  { school: "Riverdale High", score: 8800, previousRank: 4 },
  { school: "Lakeside School", score: 8500, previousRank: 9 },
  { school: "New Horizons", score: 18000, previousRank: 9 },
];

const mockTrialRaw: RawLeaderboardEntry[] = [
  { school: "Westlake Academy", score: 5500, previousRank: 2 },
  { school: "Oakwood High", score: 5100, previousRank: 1 },
  { school: "Pine Valley School", score: 4900, previousRank: 3 },
  { school: "North Star Prep", score: 4100, previousRank: 6 },
  { school: "City College High", score: 3800, previousRank: 5 },
  { school: "Riverside Academy", score: 3600, previousRank: 8 },
  { school: "Summit Heights", score: 3400, previousRank: 4 },
  { school: "Harbor View School", score: 3200, previousRank: 7 },
  { school: "Mountain Ridge", score: 2900, previousRank: 9 },
];

const mathletesRaw: RawLeaderboardEntry[] = [
  { school: "North Star Prep", score: 4000, previousRank: 1 },
  { school: "Eastwood School", score: 3850, previousRank: 3 },
  { school: "Oakwood High", score: 3700, previousRank: 2 },
  { school: "Summit Heights", score: 3500, previousRank: 7 },
  { school: "Lakeside High", score: 3100, previousRank: 5 },
  { school: "Cropley Middle School", score: 2950, previousRank: 4 },
  { school: "Atlas Jr. High School", score: 2800, previousRank: 6 },
  { school: "Parkway Middle School", score: 2600, previousRank: 10 },
  { school: "Rhodes Middle School", score: 2400, previousRank: 8 },
];

// Generate overall leaderboard by combining all scores
function generateOverallLeaderboard(): LeaderboardEntry[] {
  const allRaw = [modelUNRaw, mockTrialRaw, mathletesRaw];
  const schoolScores = new Map<string, { score: number; previousRank: number }>();

  for (const competition of allRaw) {
    for (const entry of competition) {
      const existing = schoolScores.get(entry.school);
      if (existing) {
        schoolScores.set(entry.school, {
          score: existing.score + entry.score,
          previousRank: existing.previousRank,
        });
      } else {
        schoolScores.set(entry.school, {
          score: entry.score,
          previousRank: entry.previousRank,
        });
      }
    }
  }

  const rawEntries: RawLeaderboardEntry[] = Array.from(schoolScores.entries()).map(
    ([school, { score, previousRank }]) => ({ school, score, previousRank })
  );

  return withRanks(rawEntries);
}

// Export the leaderboards array
export const LEADERBOARDS: Leaderboard[] = [
  {
    title: "Overall",
    data: generateOverallLeaderboard(),
  },
  {
    title: "Model UN",
    data: withRanks(modelUNRaw),
  },
  {
    title: "Mock Trial",
    data: withRanks(mockTrialRaw),
  },
  {
    title: "Mathletes",
    data: withRanks(mathletesRaw),
  },
];

export function getLeaderboardByTitle(title: string): Leaderboard | undefined {
  return LEADERBOARDS.find((l) => l.title.toLowerCase() === title.toLowerCase());
}
