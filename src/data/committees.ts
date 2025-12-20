export interface Executive {
  name: string;
  role: string;
  pronouns?: string;
  image?: string;
}

export interface Document {
  title: string;
  type: "Background Guide" | "Rules of Procedure" | "Position Paper Template" | "Other";
  url: string;
}

export interface CommitteeData {
  id: string;
  name: string;
  shorthand?: string;
  group: "General Assembly" | "Crisis";
  topic: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  delegateCount: number;
  backgroundImage?: string;
  executives: Executive[];
  letterFromChair: string;
  documents: Document[];
  countries: string[];
  // Special Ad-Hoc committee properties
  isAdHoc?: boolean;
  redHerringTopics?: string[];
  realTopic?: string;
}

export const COMMITTEES: CommitteeData[] = [
  // General Assembly Committees
  {
    id: "unicef",
    name: "United Nations Children's Fund",
    shorthand: "UNICEF",
    group: "General Assembly",
    topic: "Access to Primary Education in Conflict Zones",
    description:
      "Address the challenges of providing quality primary education to children living in conflict-affected regions worldwide.",
    difficulty: "Beginner",
    delegateCount: 40,
    executives: [
      { name: "Abby Kettlewell", role: "Chair" },
      { name: "Grant Nusinow", role: "Vice Chair" },
      { name: "Abraham Ergashev", role: "Director" },
    ],
    letterFromChair: `Dear Delegates,

Welcome to UNICEF at JAMUN! We are excited to have you join us as we tackle the critical issue of access to primary education in conflict zones.

Around the world, millions of children are denied their fundamental right to education due to ongoing conflicts. Our committee will work to develop innovative solutions that can provide safe, quality education to these vulnerable populations.

We look forward to your thoughtful contributions and creative problem-solving.

Best regards,
Abby Kettlewell
Chair, UNICEF`,
    documents: [
      { title: "Background Guide", type: "Background Guide", url: "#" },
      { title: "Rules of Procedure", type: "Rules of Procedure", url: "#" },
      { title: "Position Paper Template", type: "Position Paper Template", url: "#" },
    ],
    countries: [
      "Afghanistan", "Australia", "Bangladesh", "Belgium", "Brazil",
      "Canada", "China", "Colombia", "Denmark", "Egypt",
      "Ethiopia", "Finland", "France", "Germany", "India",
      "Indonesia", "Iraq", "Ireland", "Italy", "Japan",
      "Jordan", "Kenya", "Lebanon", "Mexico", "Netherlands",
      "Nigeria", "Norway", "Pakistan", "Philippines", "Poland",
      "Russia", "Saudi Arabia", "South Africa", "Spain", "Sweden",
      "Syria", "Turkey", "Ukraine", "United Kingdom", "United States"
    ],
  },
  {
    id: "african-union",
    name: "African Union",
    shorthand: "AU",
    group: "General Assembly",
    topic: "The Independence of Colonial Territories",
    description:
      "Examine the ongoing struggles for independence and self-determination in remaining colonial territories across Africa.",
    difficulty: "Intermediate",
    delegateCount: 55,
    executives: [
      { name: "Alex Silverman", role: "Chair" },
      { name: "Alex Rechitsky", role: "Vice Chair" },
    ],
    letterFromChair: `Dear Delegates,

Welcome to the African Union committee at JAMUN! We will be exploring the important topic of colonial territories and the path to independence.

The legacy of colonialism continues to shape the African continent, and our discussions will focus on supporting self-determination while addressing the complex political and economic realities involved.

We look forward to engaging debates and meaningful resolutions.

Best regards,
Alex Silverman
Chair, African Union`,
    documents: [
      { title: "Background Guide", type: "Background Guide", url: "#" },
      { title: "Rules of Procedure", type: "Rules of Procedure", url: "#" },
      { title: "Position Paper Template", type: "Position Paper Template", url: "#" },
    ],
    countries: [
      "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso",
      "Cameroon", "Chad", "Côte d'Ivoire", "Egypt", "Eritrea",
      "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea",
      "Kenya", "Libya", "Madagascar", "Malawi", "Mali",
      "Mauritania", "Morocco", "Mozambique", "Namibia", "Niger",
      "Nigeria", "Rwanda", "Senegal", "Somalia", "South Africa",
      "Sudan", "Tanzania", "Tunisia", "Uganda", "Zambia", "Zimbabwe"
    ],
  },
  {
    id: "specpol",
    name: "Special Political and Decolonization Committee",
    shorthand: "SPECPOL",
    group: "General Assembly",
    topic: "International Trade Security of Colonized Nations",
    description:
      "Address trade inequalities and economic exploitation affecting colonized and formerly colonized nations.",
    difficulty: "Intermediate",
    delegateCount: 45,
    executives: [
      { name: "Rishi Mowan", role: "Chair" },
      { name: "Emma Lagunas", role: "Vice Chair" },
      { name: "Finn Morrow", role: "Director" },
    ],
    letterFromChair: `Dear Delegates,

Welcome to SPECPOL at JAMUN! Our committee will tackle the critical intersection of international trade and the economic security of colonized nations.

Trade relationships have historically been shaped by colonial power dynamics, and many nations continue to face unfair economic conditions. We will work together to develop solutions that promote equitable trade practices.

We look forward to your research and diplomatic skills.

Best regards,
Rishi Mowan
Chair, SPECPOL`,
    documents: [
      { title: "Background Guide", type: "Background Guide", url: "#" },
      { title: "Rules of Procedure", type: "Rules of Procedure", url: "#" },
      { title: "Position Paper Template", type: "Position Paper Template", url: "#" },
    ],
    countries: [
      "Argentina", "Australia", "Bangladesh", "Belgium", "Brazil",
      "Canada", "Chile", "China", "Colombia", "Cuba",
      "Egypt", "France", "Germany", "Ghana", "India",
      "Indonesia", "Iran", "Ireland", "Italy", "Japan",
      "Kenya", "Malaysia", "Mexico", "Morocco", "Netherlands",
      "New Zealand", "Nigeria", "Norway", "Pakistan", "Peru",
      "Philippines", "Poland", "Russia", "Saudi Arabia", "Singapore",
      "South Africa", "South Korea", "Spain", "Thailand", "Turkey",
      "United Kingdom", "United States", "Venezuela", "Vietnam"
    ],
  },
  {
    id: "asean",
    name: "Association of Southeast Asian Nations",
    shorthand: "ASEAN",
    group: "General Assembly",
    topic: "Labor Laws and Accountability",
    description:
      "Develop regional frameworks for fair labor practices and corporate accountability across Southeast Asia.",
    difficulty: "Intermediate",
    delegateCount: 20,
    executives: [
      { name: "Abby Vandesteeg", role: "Chair" },
      { name: "Holden Moons", role: "Vice Chair" },
    ],
    letterFromChair: `Dear Delegates,

Welcome to ASEAN at JAMUN! Our committee will focus on the important topic of labor laws and corporate accountability in the Southeast Asian region.

As economies continue to grow and evolve, ensuring fair treatment of workers and holding corporations accountable becomes increasingly important. We will work to develop regional standards that protect workers' rights.

We look forward to productive discussions.

Best regards,
Abby Vandesteeg
Chair, ASEAN`,
    documents: [
      { title: "Background Guide", type: "Background Guide", url: "#" },
      { title: "Rules of Procedure", type: "Rules of Procedure", url: "#" },
      { title: "Position Paper Template", type: "Position Paper Template", url: "#" },
    ],
    countries: [
      "Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia",
      "Myanmar", "Philippines", "Singapore", "Thailand", "Vietnam",
      "Australia", "China", "India", "Japan", "New Zealand",
      "South Korea", "Russia", "United States"
    ],
  },
  {
    id: "sochum",
    name: "Social, Humanitarian and Cultural Committee",
    shorthand: "SOCHUM",
    group: "General Assembly",
    topic: "Homeless Persons and Refugees in Europe",
    description:
      "Address the humanitarian crisis of homelessness and refugee displacement across European nations.",
    difficulty: "Beginner",
    delegateCount: 35,
    executives: [
      { name: "Jaden Livshutz", role: "Chair" },
      { name: "Jonathan Greenspon", role: "Vice Chair" },
    ],
    letterFromChair: `Dear Delegates,

Welcome to SOCHUM at JAMUN! We will be addressing the pressing humanitarian issues of homelessness and refugee displacement in Europe.

These interconnected challenges require compassionate and practical solutions. Our committee will work to develop policies that protect the dignity and rights of all people regardless of their housing status.

We look forward to meaningful debate and collaboration.

Best regards,
Jaden Livshutz
Chair, SOCHUM`,
    documents: [
      { title: "Background Guide", type: "Background Guide", url: "#" },
      { title: "Rules of Procedure", type: "Rules of Procedure", url: "#" },
      { title: "Position Paper Template", type: "Position Paper Template", url: "#" },
    ],
    countries: [
      "Albania", "Austria", "Belgium", "Bulgaria", "Croatia",
      "Czech Republic", "Denmark", "Estonia", "Finland", "France",
      "Germany", "Greece", "Hungary", "Ireland", "Italy",
      "Latvia", "Lithuania", "Luxembourg", "Netherlands", "Norway",
      "Poland", "Portugal", "Romania", "Serbia", "Slovakia",
      "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey",
      "Ukraine", "United Kingdom"
    ],
  },
  {
    id: "disec",
    name: "Disarmament and International Security Committee",
    shorthand: "DISEC",
    group: "General Assembly",
    topic: "Nuclear Weaponry",
    description:
      "Negotiate frameworks for nuclear disarmament and non-proliferation in the modern era.",
    difficulty: "Advanced",
    delegateCount: 50,
    executives: [
      { name: "Miranda Winters", role: "Chair" },
      { name: "Noah Cohen", role: "Vice Chair" },
    ],
    letterFromChair: `Dear Delegates,

Welcome to DISEC at JAMUN! Our committee will tackle one of the most consequential issues in international security: nuclear weaponry.

The threat of nuclear weapons continues to shape global politics and security arrangements. We will work to find pathways toward disarmament while addressing the legitimate security concerns of all nations.

This is an advanced committee requiring sophisticated understanding of international relations.

Best regards,
Miranda Winters
Chair, DISEC`,
    documents: [
      { title: "Background Guide", type: "Background Guide", url: "#" },
      { title: "Rules of Procedure", type: "Rules of Procedure", url: "#" },
      { title: "Position Paper Template", type: "Position Paper Template", url: "#" },
    ],
    countries: [
      "Argentina", "Australia", "Brazil", "Canada", "China",
      "Egypt", "France", "Germany", "India", "Indonesia",
      "Iran", "Israel", "Italy", "Japan", "Kazakhstan",
      "Mexico", "Netherlands", "Nigeria", "North Korea", "Norway",
      "Pakistan", "Poland", "Russia", "Saudi Arabia", "South Africa",
      "South Korea", "Spain", "Sweden", "Switzerland", "Turkey",
      "Ukraine", "United Arab Emirates", "United Kingdom", "United States"
    ],
  },
  {
    id: "european-union",
    name: "European Union",
    shorthand: "EU",
    group: "General Assembly",
    topic: "Border Security and Refugees",
    description:
      "Balance border security concerns with humanitarian obligations toward refugees seeking safety in Europe.",
    difficulty: "Intermediate",
    delegateCount: 27,
    executives: [
      { name: "Naomi Altneu", role: "Chair" },
      { name: "Noah Cook", role: "Vice Chair" },
    ],
    letterFromChair: `Dear Delegates,

Welcome to the European Union committee at JAMUN! We will be tackling the challenging topic of border security and refugee policy.

The EU faces the difficult task of maintaining secure borders while upholding its commitment to human rights and refugee protection. Our discussions will seek to find balanced approaches to these complex issues.

We look forward to thoughtful debate.

Best regards,
Naomi Altneu
Chair, European Union`,
    documents: [
      { title: "Background Guide", type: "Background Guide", url: "#" },
      { title: "Rules of Procedure", type: "Rules of Procedure", url: "#" },
      { title: "Position Paper Template", type: "Position Paper Template", url: "#" },
    ],
    countries: [
      "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus",
      "Czech Republic", "Denmark", "Estonia", "Finland", "France",
      "Germany", "Greece", "Hungary", "Ireland", "Italy",
      "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands",
      "Poland", "Portugal", "Romania", "Slovakia", "Slovenia",
      "Spain", "Sweden"
    ],
  },
  {
    id: "ecosoc-corruption",
    name: "Economic and Social Council",
    shorthand: "ECOSOC",
    group: "General Assembly",
    topic: "Government Embezzlement and Transparency",
    description:
      "Combat corruption and promote government transparency through international cooperation and frameworks.",
    difficulty: "Intermediate",
    delegateCount: 54,
    executives: [
      { name: "Andrew Calderon", role: "Chair" },
      { name: "Lainey Reinglass", role: "Vice Chair" },
      { name: "Josh Walsh", role: "Director" },
    ],
    letterFromChair: `Dear Delegates,

Welcome to ECOSOC at JAMUN! Our committee will focus on the critical issues of government embezzlement and transparency.

Corruption undermines economic development, erodes public trust, and diverts resources from those who need them most. We will work to develop international frameworks that promote accountability and transparency in governance.

We look forward to your contributions.

Best regards,
Andrew Calderon
Chair, ECOSOC`,
    documents: [
      { title: "Background Guide", type: "Background Guide", url: "#" },
      { title: "Rules of Procedure", type: "Rules of Procedure", url: "#" },
      { title: "Position Paper Template", type: "Position Paper Template", url: "#" },
    ],
    countries: [
      "Afghanistan", "Argentina", "Australia", "Austria", "Belgium",
      "Brazil", "Canada", "Chile", "China", "Colombia",
      "Denmark", "Egypt", "Ethiopia", "Finland", "France",
      "Germany", "Ghana", "India", "Indonesia", "Iran",
      "Ireland", "Israel", "Italy", "Japan", "Kenya",
      "Malaysia", "Mexico", "Morocco", "Netherlands", "Nigeria",
      "Norway", "Pakistan", "Peru", "Philippines", "Poland",
      "Russia", "Saudi Arabia", "Singapore", "South Africa", "South Korea",
      "Spain", "Sweden", "Switzerland", "Thailand", "Turkey",
      "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Venezuela"
    ],
  },
  // Crisis Committees
  {
    id: "haiti-independence",
    name: "Haiti's Independence",
    group: "Crisis",
    topic: "The Haitian Revolution",
    description:
      "Navigate the complex political and military landscape of Haiti's struggle for independence from colonial rule.",
    difficulty: "Advanced",
    delegateCount: 15,
    executives: [
      { name: "Eric Nodland", role: "Chair" },
      { name: "Stephanie Jiang", role: "Vice Chair" },
    ],
    letterFromChair: `Dear Delegates,

Welcome to the Haiti's Independence crisis committee at JAMUN! You will be stepping into one of history's most significant revolutionary moments.

The Haitian Revolution represents the only successful slave rebellion that led to the founding of a state. As crisis delegates, you will navigate complex alliances, military strategy, and the fight for freedom.

Prepare for an intense and dynamic committee experience.

Best regards,
Eric Nodland
Chair, Haiti's Independence`,
    documents: [
      { title: "Background Guide", type: "Background Guide", url: "#" },
      { title: "Crisis Procedures", type: "Other", url: "#" },
    ],
    countries: [],
  },
  {
    id: "chinese-civil-war",
    name: "Chinese Civil War",
    group: "Crisis",
    topic: "The Struggle for China",
    description:
      "Experience the pivotal conflict between Nationalist and Communist forces that shaped modern China.",
    difficulty: "Advanced",
    delegateCount: 15,
    executives: [
      { name: "Sam Harutyunyan", role: "Chair" },
      { name: "Scarlett Jackson", role: "Vice Chair" },
    ],
    letterFromChair: `Dear Delegates,

Welcome to the Chinese Civil War crisis committee at JAMUN! You will be immersed in one of the 20th century's most consequential conflicts.

This crisis will challenge you to think strategically about military, political, and ideological dimensions of conflict. Your decisions will shape the future of a nation.

Come prepared for intense crisis simulations.

Best regards,
Sam Harutyunyan
Chair, Chinese Civil War`,
    documents: [
      { title: "Background Guide", type: "Background Guide", url: "#" },
      { title: "Crisis Procedures", type: "Other", url: "#" },
    ],
    countries: [],
  },
  {
    id: "adhoc",
    name: "Ad-Hoc Committee of the Secretary General",
    shorthand: "ADHOC",
    group: "Crisis",
    topic: "CLASSIFIED",
    description: "CLASSIFIED",
    difficulty: "Advanced",
    delegateCount: 15,
    isAdHoc: true,
    realTopic: "Global Economic Meltdown",
    redHerringTopics: [
      "Climate Change Mitigation Strategies",
      "International Space Law Reform",
      "Cybersecurity and Digital Sovereignty",
      "Global Pandemic Response Framework",
      "Arctic Resource Distribution",
      "Artificial Intelligence Governance",
      "Nuclear Non-Proliferation Treaty Review",
      "Transnational Organized Crime",
      "Ocean Biodiversity Conservation",
      "Refugee Resettlement Protocols",
    ],
    executives: [
      { name: "Osiris Khan", role: "Chair" },
      { name: "Andrew Walsh", role: "Vice Chair" },
    ],
    letterFromChair: `Dear Delegates,

Welcome to the Ad-Hoc Committee of the Secretary General at JAMUN! You have been selected for a committee of the utmost importance and sensitivity.

The nature of this committee requires discretion. You will be thrust into one of the most challenging moments in modern history.

As key decision-makers during this crisis, you will need to balance competing interests, make rapid decisions under pressure, and navigate complex interconnections that span the global system.

Further details will be revealed at the appropriate time. Prepare for high-stakes crisis simulation.

Best regards,
[REDACTED]
Chair, Ad-Hoc Committee`,
    documents: [],
    countries: [],
  },
  {
    id: "great-depression",
    name: "The Great Depression",
    group: "Crisis",
    topic: "Economic Collapse and Recovery",
    description:
      "Address the unprecedented economic challenges of the 1930s and develop strategies for recovery.",
    difficulty: "Intermediate",
    delegateCount: 15,
    executives: [
      { name: "Myra Amin", role: "Chair" },
      { name: "Augusto Aguilar", role: "Vice Chair" },
    ],
    letterFromChair: `Dear Delegates,

Welcome to The Great Depression crisis committee at JAMUN! You will be navigating the deepest economic crisis of the 20th century.

This committee will challenge you to think creatively about economic policy, social welfare, and international cooperation during times of extreme hardship.

We look forward to seeing how you respond to this historic challenge.

Best regards,
Myra Amin
Chair, The Great Depression`,
    documents: [
      { title: "Background Guide", type: "Background Guide", url: "#" },
      { title: "Crisis Procedures", type: "Other", url: "#" },
    ],
    countries: [],
  },
  {
    id: "american-civil-war",
    name: "American Civil War (Union)",
    group: "Crisis",
    topic: "Preserving the Union",
    description:
      "Lead the Union through the crucible of civil war and shape the future of American democracy.",
    difficulty: "Advanced",
    delegateCount: 18,
    executives: [
      { name: "Daniel Greenspon", role: "Chair" },
      { name: "Maxwell Leuthner", role: "Vice Chair" },
      { name: "Lucas Bryan", role: "Director" },
    ],
    letterFromChair: `Dear Delegates,

Welcome to the American Civil War (Union) crisis committee at JAMUN! You will be taking on the roles of key Union leaders during America's most divisive conflict.

Your decisions will affect military strategy, political unity, and the fundamental question of slavery in America. This is an advanced crisis requiring quick thinking and strategic acumen.

Prepare for an intense committee experience.

Best regards,
Daniel Greenspon
Chair, American Civil War (Union)`,
    documents: [
      { title: "Background Guide", type: "Background Guide", url: "#" },
      { title: "Crisis Procedures", type: "Other", url: "#" },
    ],
    countries: [],
  },
  {
    id: "sudan-civil-war",
    name: "Sudan Civil War",
    group: "Crisis",
    topic: "Conflict Resolution in Sudan",
    description:
      "Navigate the complex ethnic, political, and humanitarian dimensions of Sudan's ongoing civil conflict.",
    difficulty: "Advanced",
    delegateCount: 15,
    executives: [
      { name: "Gregory Kislovsky", role: "Chair" },
      { name: "Austin Blumberg", role: "Vice Chair" },
    ],
    letterFromChair: `Dear Delegates,

Welcome to the Sudan Civil War crisis committee at JAMUN! You will be grappling with one of the most complex humanitarian crises of our time.

This committee requires understanding of ethnic tensions, regional politics, and humanitarian law. Your crisis responses will shape the lives of millions.

Come prepared for challenging and meaningful debate.

Best regards,
Gregory Kislovsky
Chair, Sudan Civil War`,
    documents: [
      { title: "Background Guide", type: "Background Guide", url: "#" },
      { title: "Crisis Procedures", type: "Other", url: "#" },
    ],
    countries: [],
  },
  {
    id: "cuban-missile-crisis",
    name: "Cuban Missile Crisis",
    group: "Crisis",
    topic: "Thirteen Days on the Brink",
    description:
      "Experience the tension of the closest the world came to nuclear war and make decisions that could save or destroy civilization.",
    difficulty: "Advanced",
    delegateCount: 18,
    executives: [
      { name: "Bee Kuehn", role: "Chair" },
      { name: "Ceci Frye", role: "Vice Chair" },
      { name: "Charlie Fumerton", role: "Director" },
    ],
    letterFromChair: `Dear Delegates,

Welcome to the Cuban Missile Crisis committee at JAMUN! You will be experiencing the most dangerous thirteen days in human history.

As members of key decision-making bodies during this nuclear standoff, your choices will determine whether humanity survives or faces nuclear annihilation. This is crisis committee at its most intense.

Prepare for an unforgettable experience.

Best regards,
Bee Kuehn
Chair, Cuban Missile Crisis`,
    documents: [
      { title: "Background Guide", type: "Background Guide", url: "#" },
      { title: "Crisis Procedures", type: "Other", url: "#" },
    ],
    countries: [],
  },
  {
    id: "rwandan-genocide",
    name: "Rwandan Genocide",
    group: "Crisis",
    topic: "International Response to Genocide",
    description:
      "Confront the international community's response to one of history's darkest chapters and work to prevent future atrocities.",
    difficulty: "Advanced",
    delegateCount: 18,
    executives: [
      { name: "Danielle Murray", role: "Chair" },
      { name: "Dylan Liu", role: "Vice Chair" },
      { name: "Anson Ni", role: "Director" },
    ],
    letterFromChair: `Dear Delegates,

Welcome to the Rwandan Genocide crisis committee at JAMUN! This committee will tackle one of the most tragic failures of the international community.

You will grapple with difficult questions about intervention, sovereignty, and the responsibility to protect. This committee requires maturity and sensitivity to handle its challenging subject matter.

We look forward to meaningful and respectful engagement.

Best regards,
Danielle Murray
Chair, Rwandan Genocide`,
    documents: [
      { title: "Background Guide", type: "Background Guide", url: "#" },
      { title: "Crisis Procedures", type: "Other", url: "#" },
    ],
    countries: [],
  },
];

export function getCommitteeById(id: string): CommitteeData | undefined {
  return COMMITTEES.find((c) => c.id === id);
}

export function getCommitteeByName(name: string): CommitteeData | undefined {
  return COMMITTEES.find(
    (c) => c.name.toLowerCase().replace(/\s+/g, "-") === name.toLowerCase().replace(/\s+/g, "-")
  );
}
