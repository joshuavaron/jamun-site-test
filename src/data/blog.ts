export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: "MUN Prep" | "Delegate Advice" | "Crisis Committees" | "Committees" | "MUN Skills" | "Reflections" | "Global Impact";
  imageUrl?: string;
  relatedPosts?: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "so-youve-done-model-un-now-what",
    title: "So, You've Done Model UN. Now What?",
    excerpt: "After finishing your Model UN conference—once the excitement fades—you may be left with a nagging question: what's next?",
    author: "Alexandra Fumerton",
    publishDate: "2025-09-05",
    category: "Reflections",
    content: `
<h1>So, You've Done Model UN. Now What?</h1>

<p>After completing a Model UN conference, participants often wonder about next steps and how to create meaningful impact. The skills you've developed—debate, public speaking, collaboration, and problem-solving—can connect directly to real-world activism and advancing global development objectives.</p>

<h2>The Sustainable Development Goals</h2>

<p>The United Nations' Sustainable Development Goals (SDGs), launched in 2015, comprise seventeen objectives that provide a framework for meaningful action. Your Model UN experience has prepared you to engage with these goals in tangible ways.</p>

<h2>Taking Action</h2>

<p>Start locally by identifying community issues requiring attention. Meaningful change requires consistency—consider establishing monthly service projects, student clubs, or ongoing campaigns rather than expecting immediate solutions.</p>

<p>Your abilities in debate, public speaking, collaboration, and problem-solving can connect directly to advancing these global development objectives. The diplomatic skills you've honed in committee translate remarkably well to real-world advocacy.</p>

<h2>The 17 Sustainable Development Goals</h2>

<ol>
<li>No Poverty</li>
<li>Zero Hunger</li>
<li>Good Health and Well-Being</li>
<li>Quality Education</li>
<li>Gender Equality</li>
<li>Clean Water and Sanitation</li>
<li>Affordable and Clean Energy</li>
<li>Decent Work and Economic Growth</li>
<li>Industry, Innovation and Infrastructure</li>
<li>Reduced Inequalities</li>
<li>Sustainable Cities and Communities</li>
<li>Responsible Consumption and Production</li>
<li>Climate Action</li>
<li>Life Below Water</li>
<li>Life on Land</li>
<li>Peace, Justice and Strong Institutions</li>
<li>Partnerships for the Goals</li>
</ol>

<p>Model UN isn't just a simulation—it's preparation for making a real difference in the world.</p>
`,
    relatedPosts: ["a-young-leaders-guide-to-model-un", "from-simulation-to-reality"],
  },
  {
    id: "writing-comprehensive-working-papers",
    title: "Writing Comprehensive and Concise Working Papers That Succeed",
    excerpt: "Learn how to craft effective clauses and working papers that other delegates can support.",
    author: "Nolan Zinman",
    publishDate: "2025-09-05",
    category: "MUN Prep",
    content: `
<h1>Writing Comprehensive and Concise Working Papers That Succeed</h1>

<p>This guide teaches Model UN delegates how to craft effective clauses—formal instructions for UN action. Clarity and collaboration are essential throughout the writing process.</p>

<h2>Foundation</h2>

<p>Begin by articulating the core problem in a single sentence, then support it with one or two relevant facts to establish importance.</p>

<h2>Structure: The Who-What-How Framework</h2>

<p>Every effective clause follows the "Who-What-How" framework. For example:</p>

<blockquote>
"Requests the United Nations Development Programme to create a small grant fund for coastal adaptation projects, with the first funds distributed within 12 months and yearly progress reports."
</blockquote>

<p>This clause identifies all three essential elements: who (UNDP), what (grant fund), and how (12-month timeline with reports).</p>

<h2>Language Selection</h2>

<p>Choose balanced verbs like "establish" or "support" rather than weak terms ("encourage") or overly rigid language ("must punish immediately"). Your language should convey appropriate urgency without being unrealistic.</p>

<h2>Refinement Process</h2>

<ul>
<li>Test clauses aloud with peers</li>
<li>Collaborate with your bloc throughout drafting</li>
<li>Maintain drafts with changelogs to track revisions</li>
<li>Prepare compromise versions for negotiations</li>
</ul>

<h2>Presentation</h2>

<p>Lead with impact and clear benefits to engage fellow delegates effectively. Your working paper should solve problems, not just describe them.</p>
`,
    relatedPosts: ["the-role-of-resolutions", "how-to-make-the-perfect-bloc"],
  },
  {
    id: "how-do-i-model-un",
    title: "How Do I Model UN?",
    excerpt: "First conferences can feel intimidating, but preparation and research matter more than appearance or pre-existing blocs.",
    author: "Dustin Simon",
    publishDate: "2025-09-02",
    category: "Delegate Advice",
    content: `
<h1>How Do I Model UN?</h1>

<p>This post addresses newcomers to Model UN, acknowledging that first conferences can feel intimidating. But here's the truth: preparation and research matter more than appearance or pre-existing blocs.</p>

<p><strong>You're prepared. You know what to do, and you know what to say. You did your research just as well as anyone else.</strong></p>

<h2>What Model UN Really Is</h2>

<p>Model UN fundamentally involves diplomacy and debate focused on problem-solving—not gaming the system. Experienced delegates often appear more confident, but everyone shares the same objective: finding solutions to global challenges.</p>

<h2>Adaptation Is Key</h2>

<p>Here's something important to understand: 0% of the plans you make before committee will play out exactly as imagined. Flexibility proves essential since some speeches get months of preparation while others emerge impromptu within seconds.</p>

<h2>Overcoming Self-Doubt</h2>

<p>Recognizing shared uncertainty among all delegates becomes empowering. Everyone in that committee room has moments of doubt. The difference between successful delegates and struggling ones isn't confidence—it's action despite uncertainty.</p>

<p>Personal mental barriers—not external factors—limit delegates' performance. The experienced delegate across the room? They were once exactly where you are now.</p>
`,
    relatedPosts: ["how-to-prepare-for-your-first-conference", "the-delegate-who-listens"],
  },
  {
    id: "how-to-make-the-perfect-bloc",
    title: "How to Make the Perfect Bloc",
    excerpt: "A bloc requires a clear goal, friendly outreach and communication, and organized teamwork.",
    author: "Nolan Zinman",
    publishDate: "2025-09-02",
    category: "Delegate Advice",
    content: `
<h1>How to Make the Perfect Bloc</h1>

<p>Successful blocs rely on intentional planning rather than chance, particularly for newcomers to the activity.</p>

<h2>Core Strategy</h2>

<p>Begin with a single clarifying statement about your bloc's objectives. Write a single, clear sentence that explains your bloc's purpose before recruiting allies.</p>

<h2>Five Essential Practices</h2>

<h3>1. Early Engagement</h3>
<p>Initiative matters. Introduce yourself and your goals to other participants promptly—don't wait for them to come to you.</p>

<h3>2. Streamlined Organization</h3>
<p>Rather than assigning formal positions, emphasize collaborative drafting, regular agreement-checking, and peer coaching.</p>

<h3>3. Transparent Coordination</h3>
<p>Maintain clear documentation of changes and versions to avoid miscommunication. Nothing derails a bloc faster than confusion about what was agreed upon.</p>

<h3>4. Consistent Talking Points</h3>
<p>Align on a brief summary before floor presentations. Everyone in your bloc should be able to articulate the core message.</p>

<h3>5. Respectful Negotiation</h3>
<p>Hold core principles while remaining flexible on secondary issues. This strengthens alliances and demonstrates diplomatic maturity.</p>

<h2>Philosophy</h2>

<p>Effective teamwork depends on accessibility and communication rather than hierarchical structures. Smoother collaboration and genuine participation ultimately produce both better resolutions and more capable delegates.</p>
`,
    relatedPosts: ["building-relationships-with-fellow-delegates", "becoming-the-master-of-the-unmod"],
  },
  {
    id: "crisis-committees-and-joint-crisis",
    title: "Crisis Committees and Joint Crisis Committees",
    excerpt: "Explore different crisis committee formats and their strategic differences for more dynamic Model UN experiences.",
    author: "Andrew Calderon",
    publishDate: "2025-08-27",
    category: "Crisis Committees",
    content: `
<h1>Crisis Committees and Joint Crisis Committees</h1>

<p>Crisis committees demand quicker thinking and faster-paced decision-making than a General Assembly committee. These committees combine pre-planned scenarios with delegate decisions, requiring crisis staff to both prepare extensively and improvise when unexpected directives arise.</p>

<h2>What Makes Crisis Different</h2>

<p>Unlike GA committees where you represent a country, crisis committees often have you embody a specific character within an evolving scenario. The situation changes based on delegate actions, creating a dynamic and unpredictable experience.</p>

<h2>Joint Crisis Committees</h2>

<p>Joint crisis committees are a distinct variant where two separate committees operate within the same scenario universe. For instance, at JAMUN III, a Bolshevik cabinet and Russian cabinet during the Russian Revolution will coexist, with each group's decisions affecting the other.</p>

<h2>Why Joint Crisis Excels</h2>

<p>Joint crisis committees generate heightened engagement because delegates understand their actions have consequences beyond their immediate group. This dynamic introduces additional unpredictability for both participants and crisis management teams.</p>

<p>The psychological awareness that another group of delegates simultaneously making decisions impacts your committee's outcomes creates an especially stimulating experience.</p>
`,
    relatedPosts: ["ad-hoc-better-than-crisis", "ga-better-than-crisis"],
  },
  {
    id: "how-to-stand-out",
    title: "How to Stand Out in Your Model UN Committee",
    excerpt: "Success extends beyond how often you speak or how many resolutions have your name on them.",
    author: "Alexander Rechitsky",
    publishDate: "2025-08-27",
    category: "MUN Prep",
    content: `
<h1>How to Stand Out in Your Model UN Committee</h1>

<p>Standing out in Model UN committees requires balance rather than dominance. The most memorable delegates are not always the loudest, but rather the ones who bring thoughtful ideas and cooperation.</p>

<h2>Opening Speech</h2>

<p>Seize your first chance to speak with a strong opening speech:</p>
<ul>
<li>Start with compelling facts or examples</li>
<li>Clearly state your country's position</li>
<li>Deliver with confidence</li>
</ul>

<h2>Unmoderated Caucuses</h2>

<p>During unmoderated caucuses, successful delegates balance asserting their viewpoints with inclusive listening. Judges look for delegates' ability to voice their opinions while also listening to the group.</p>

<h2>Resolution Drafting</h2>

<p>Rather than vague language, craft specific actions that connect directly to real-world policy. Taking on drafting responsibilities offers influence but requires respecting consensus.</p>

<h2>Professionalism</h2>

<p>Small actions build credibility without appearing overbearing:</p>
<ul>
<li>Arrive punctually</li>
<li>Dress appropriately</li>
<li>Engage respectfully</li>
<li>Acknowledge peers' contributions</li>
</ul>

<h2>The Complete Package</h2>

<p>Impactful delegates combine strong oratory, effective collaboration, precise writing, and diplomatic conduct throughout the conference.</p>
`,
    relatedPosts: ["the-delegate-who-listens", "building-relationships-with-fellow-delegates"],
  },
  {
    id: "building-relationships-with-fellow-delegates",
    title: "Building Relationships with Fellow Delegates",
    excerpt: "Model UN is a people game where relationships determine diplomatic success.",
    author: "Nolan Zinman",
    publishDate: "2025-08-09",
    category: "MUN Skills",
    content: `
<h1>Building Relationships with Fellow Delegates</h1>

<p>Model UN success depends fundamentally on interpersonal connections rather than procedural knowledge alone. Model UN is a people game.</p>

<h2>Proactive Introductions</h2>

<p>Rather than waiting passively, initiate conversations before committees begin. Introduce yourself and share relevant national priorities.</p>

<h2>Finding Common Ground</h2>

<p>Identify fellow delegates with aligned interests—whether environmental policy, human rights, or public health. This enables bloc-building and collaborative clause-writing.</p>

<h2>Micro-Interactions</h2>

<p>Small gestures like compliments or casual check-ins create goodwill that becomes valuable during negotiations.</p>

<h2>Active Listening</h2>

<p>Understanding others' positions thoroughly, asking clarifying questions, and paraphrasing their concerns demonstrates respect and opens doors for compromise.</p>

<h2>Follow-Up Communication</h2>

<p>Send post-session notes with draft clauses or constructive feedback. This reinforces reliability and commitment to shared work.</p>

<h2>Mutual Celebration</h2>

<p>Treat allies' victories as equally important as personal wins. This builds reciprocal trust essential for future collaboration.</p>

<p>Diplomatic success is rooted in creating genuine human connections where delegates feel valued, ultimately enabling more impactful resolutions and speeches.</p>
`,
    relatedPosts: ["how-to-make-the-perfect-bloc", "how-to-stand-out"],
  },
  {
    id: "on-local-government",
    title: "On Local Government",
    excerpt: "JAMUN's involvement in community governance and reflections on local government engagement.",
    author: "Joshua Varon",
    publishDate: "2025-08-06",
    category: "Reflections",
    content: `
<h1>On Local Government</h1>

<p>I recently attended a Deerfield Village Hall board meeting where JAMUN received a commendation. What I expected to be brief turned into a 157-minute session examining a proposed office-to-housing conversion project, complete with testimony from contractors, developers, and traffic experts.</p>

<h2>A Question Emerges</h2>

<p>This experience prompted me to contemplate the fundamental purpose of local governance. While I understood the necessity of federal and state governments handling complex, large-scale issues, I initially questioned why a municipality of 19,000 residents needed a dedicated board rather than direct citizen referendums.</p>

<h2>The Value of Public Service</h2>

<p>I concluded that local government's true value lies in public service—elected officials voluntarily dedicating their time to review technical reports, consider community concerns, and make decisions in their neighbors' interests. Citizens generally lack the time and interest to engage with detailed traffic analyses or infrastructure comparisons independently.</p>

<h2>Connection to JAMUN</h2>

<p>There's a parallel between the board members' civic commitment and the mission of JAMUN delegates, who debate issues that might not even affect them to fulfill their civic responsibility and improve the world.</p>

<p>Model UN teaches us that engagement with complex issues—even those beyond our immediate concern—is a form of public service.</p>
`,
    relatedPosts: ["from-simulation-to-reality", "so-youve-done-model-un-now-what"],
  },
  {
    id: "the-delegate-who-listens",
    title: "The Delegate Who Listens",
    excerpt: "The best delegates aren't always the loudest. Learn how effective listening strategies triumph in committees.",
    author: "Dustin Simon",
    publishDate: "2025-08-05",
    category: "Reflections",
    content: `
<h1>The Delegate Who Listens</h1>

<p>This piece challenges the common misconception that success in Model UN comes from being the most vocal participant. Louder doesn't mean better.</p>

<h2>Two Archetypes</h2>

<p>Consider two types of delegates: those who dominate every discussion and those who observe strategically before contributing. I initially believed assertiveness was essential but discovered otherwise through experience.</p>

<h2>A Lesson in Strategic Silence</h2>

<p>I once watched a delegate who remained quiet during early sessions while observing coalition dynamics. Then, with a single well-timed contribution, they reframed the entire crisis direction—ultimately earning two awards.</p>

<h2>Real Diplomacy</h2>

<p>Effective Model UN participation aligns with real diplomatic practice. Meaningful impact comes through thoughtful, timely contributions rather than frequent speaking.</p>

<p><strong>Make your time count. The best delegates aren't always the loudest.</strong></p>

<p>Strategic silence, careful listening, and precise communication are superior alternatives to constant participation.</p>
`,
    relatedPosts: ["how-to-stand-out", "building-relationships-with-fellow-delegates"],
  },
  {
    id: "how-to-prepare-for-your-first-conference",
    title: "How to Prepare for Your First Model UN Conference",
    excerpt: "A comprehensive guide for delegates entering their initial conference experience.",
    author: "Charlie Fumerton",
    publishDate: "2025-08-04",
    category: "MUN Prep",
    content: `
<h1>How to Prepare for Your First Model UN Conference</h1>

<p>This comprehensive guide helps first-time MUN attendees prepare for their conference experience.</p>

<h2>1. Understanding MUN Basics</h2>

<p>Learn parliamentary procedure and committee types. Familiarize yourself with formal debate, moderated caucus, and unmoderated caucus formats before attending.</p>

<h2>2. Research Requirements</h2>

<p>Proper preparation involves:</p>
<ul>
<li>Studying your assigned country's background</li>
<li>Understanding the committee topic through official UN reports</li>
<li>Identifying your nation's established policy positions on relevant issues</li>
</ul>

<h2>3. MUN Vocabulary</h2>

<p>Learning terminology like "motion to open debate" and "yielding time" helps delegates participate more confidently and smoothly throughout proceedings.</p>

<h2>4. Professional Presentation</h2>

<ul>
<li>Wear business attire</li>
<li>Bring notebooks and printed materials</li>
<li>Stay hydrated during long conference days</li>
</ul>

<h2>5. Flexibility and Enjoyment</h2>

<p>Adaptability matters more than perfect preparation. MUN isn't just about winning awards—it's about learning and building confidence.</p>

<p>Your first conference is the beginning of an incredible journey. Embrace the experience!</p>
`,
    relatedPosts: ["how-do-i-model-un", "a-young-leaders-guide-to-model-un"],
  },
  {
    id: "from-simulation-to-reality",
    title: "From Simulation to Reality: MUN and Its Connection to the UN",
    excerpt: "How Model UN connects to real United Nations principles and empowers the next generation of leaders.",
    author: "Mehrnaz Kharoliwalla",
    publishDate: "2025-08-04",
    category: "Global Impact",
    content: `
<h1>From Simulation to Reality: MUN and Its Connection to the UN</h1>

<p>Model United Nations serves as a bridge between classroom learning and genuine diplomatic practice. The world must work together to achieve peace, security, and development—a foundational UN principle that MUN also emphasizes.</p>

<h2>Multilateralism in Action</h2>

<p>Both the UN and MUN require collaboration across different perspectives and boundaries. MUN delegates engage with real-world challenges—climate change, disarmament, refugee crises, and global health—mirroring actual UN priorities.</p>

<h2>From Conference to Advocacy</h2>

<p>I've attended the UN Commission on the Status of Women and met young advocates whose activism originated from high school MUN resolutions. One delegate's passion for opposing child marriage began with drafting a conference resolution, later evolving into policy-level work.</p>

<h2>Personal Journey</h2>

<p>Participating in MUN provided me the confidence to become an advocate, ultimately leading to speaking at the UN regarding financial education for young women.</p>

<p><strong>MUN doesn't just reflect the mission of the United Nations—it empowers the next generation to carry that mission forward.</strong></p>
`,
    relatedPosts: ["so-youve-done-model-un-now-what", "on-local-government"],
  },
  {
    id: "a-young-leaders-guide-to-model-un",
    title: "A Young Leader's Guide to Model UN",
    excerpt: "Foundational guidance for developing leaders interested in diplomatic simulation.",
    author: "Alexandra Fumerton",
    publishDate: "2025-07-31",
    category: "Reflections",
    content: `
<h1>A Young Leader's Guide to Model UN</h1>

<p>With five years of Model UN experience, I've learned that this activity offers far more than awards and accolades. It builds skills that last a lifetime.</p>

<h2>My Journey</h2>

<p>I started Model UN as a freshman with friends who launched our school's first team. Despite early struggles and no initial awards, the experience built invaluable skills in public speaking and adaptability.</p>

<h2>Leadership Philosophy</h2>

<p>Effective Model UN leadership isn't about dominance. The best delegates are the ones who listen, ask questions, and include everyone in their groups and solutions. Collaboration across all delegates—not just friend groups—matters most.</p>

<h2>Message to New Delegates</h2>

<p><strong>Show up.</strong> Raise your placards, voice your opinions, but above all, have fun with it. JAMUN welcomes delegates at any experience level.</p>

<h2>Our Mission</h2>

<p>Through JAMUN, we aim to educate younger delegates about Model UN procedures and create inclusive spaces for exploring diplomacy and global issues.</p>
`,
    relatedPosts: ["how-to-prepare-for-your-first-conference", "how-do-i-model-un"],
  },
  {
    id: "becoming-the-master-of-the-unmod",
    title: "Becoming the Master of the Unmod",
    excerpt: "Tips for succeeding in your first unmoderated caucus session.",
    author: "Abby Kettlewell",
    publishDate: "2025-07-30",
    category: "MUN Prep",
    content: `
<h1>Becoming the Master of the Unmod</h1>

<p>An unmoderated caucus (un-mod) is a committee period where delegates freely meet to discuss solutions and draft resolutions. You are free to meet with other delegates to discuss solutions to the issue your committee is addressing.</p>

<h2>Seven Key Tips for Success</h2>

<h3>1. Know Your Goal</h3>
<p>Stay focused on the specific task—whether forming a bloc, drafting a paper, or merging proposals.</p>

<h3>2. Stand Up and Network</h3>
<p>Go talk to people! You don't get anywhere by sitting in your chair the whole time. Send notes during moderated sessions to align beforehand.</p>

<h3>3. Build a Diverse Bloc</h3>
<p>Recruit smaller blocs with differing perspectives to create comprehensive solutions.</p>

<h3>4. Start Writing Early</h3>
<p>Begin drafting promptly, as writing consumes significant time. Gather ideas upfront to avoid duplicate clauses.</p>

<h3>5. Represent Your Country</h3>
<p>Balance innovation with your nation's actual policies and positions.</p>

<h3>6. Include Everyone</h3>
<p>Ensure all bloc members participate meaningfully in the process.</p>

<h3>7. Secure Signatories</h3>
<p>Assign non-writing delegates to pitch the resolution and gather support, increasing passage likelihood.</p>
`,
    relatedPosts: ["how-to-make-the-perfect-bloc", "the-role-of-resolutions"],
  },
  {
    id: "the-role-of-resolutions",
    title: "The Role of Resolutions in Model UN",
    excerpt: "How draft resolutions finalize negotiated committee agreements and transform ideas into action.",
    author: "Alexander Rechitsky",
    publishDate: "2025-07-30",
    category: "MUN Prep",
    content: `
<h1>The Role of Resolutions in Model UN</h1>

<p>Resolutions are formal documents that transform collaborative ideas into actionable policy proposals.</p>

<h2>Committee Types</h2>

<p>Resolutions are used primarily in General Assembly and specialized agency committees, while crisis committees instead employ directives for faster-paced decision-making.</p>

<h2>Resolution Development Process</h2>

<p>A group of three to five delegates is ideal, striking a balance between staying focused and including multiple perspectives.</p>

<h3>Resolution Structure:</h3>
<ul>
<li>A memorable title (often an acronym)</li>
<li>Sponsors and signatories</li>
<li>Preambulatory clauses explaining the rationale</li>
<li>Operative clauses detailing specific measures (typically 3-10 clauses)</li>
</ul>

<h2>Committee Workflow</h2>

<p>After drafting, delegates present their working papers to the full committee. Similar proposals can merge into unified documents, promoting collaboration. The finalized versions then undergo voting, with possible amendments proposed beforehand.</p>

<h2>The Value of Every Resolution</h2>

<p>Even unsuccessful resolutions demonstrate meaningful progress, as they showcase delegates' ability to convert discussion into structured solutions.</p>
`,
    relatedPosts: ["writing-comprehensive-working-papers", "becoming-the-master-of-the-unmod"],
  },
  {
    id: "ga-better-than-crisis",
    title: "Are GA Committees Better than Crisis Committees?",
    excerpt: "A comparative analysis of General Assembly versus crisis committee formats to help you choose.",
    author: "Sahana Shah",
    publishDate: "2025-07-28",
    category: "Committees",
    content: `
<h1>Are GA Committees Better than Crisis Committees?</h1>

<p>Choosing between committee types depends on your preferences and experience level.</p>

<h2>General Assembly Committees</h2>

<p>GA committees represent countries addressing global issues like climate change and healthcare. These traditional, structured formats emphasize speeches, resolution writing, and formal debate—ideal for newcomers learning foundational skills.</p>

<h2>Crisis Committees</h2>

<p>Crisis committees take a different approach. Participants embody historical or fictional characters within evolving scenarios. Beyond speeches, delegates submit "crisis notes" for behind-the-scenes actions, creating faster-paced, dramatic experiences.</p>

<h2>Making Your Choice</h2>

<p>GA suits those preferring preparation time and real-world policy focus, while crisis appeals to experienced delegates seeking quick decision-making and creative problem-solving.</p>

<h3>Quick Comparison:</h3>
<ul>
<li><strong>GA:</strong> Teamwork, formal resolution writing, structured debate</li>
<li><strong>Crisis:</strong> Fast thinking, strategic maneuvering, character-driven</li>
</ul>

<h2>Recommendation</h2>

<p>Beginners should start with GA to build foundational knowledge. More experienced delegates may progress to crisis for greater complexity and excitement. Try both formats to develop diverse skills!</p>
`,
    relatedPosts: ["ad-hoc-better-than-crisis", "crisis-committees-and-joint-crisis"],
  },
  {
    id: "ad-hoc-better-than-crisis",
    title: "Are Ad Hoc Crises Better than Regular Crisis Committees?",
    excerpt: "Both formats follow a continuous crisis format with evolving scenarios, but with key differences.",
    author: "Andrew Calderon",
    publishDate: "2025-07-28",
    category: "Crisis Committees",
    content: `
<h1>Are Ad Hoc Crises Better than Regular Crisis Committees?</h1>

<p>Both crisis formats follow a continuous structure where delegates receive periodic updates presenting new challenges, and personal portfolio goals often take priority over committee-wide resolutions.</p>

<h2>Traditional Crisis Committees</h2>

<p>Traditional crisis committees offer preparation time beforehand, allowing delegates to research topics, understand their portfolio power, and write position papers. This groundwork helps clarify personal objectives before the committee begins.</p>

<h2>Ad Hoc Crisis Committees</h2>

<p>Ad Hoc crisis committees provide minimal preparation time. Delegates must read the background guide at the beginning of the conference, which creates intensity and quicker thinking. This format suits experienced participants but may intimidate those who struggle under pressure.</p>

<h2>Which Is Better?</h2>

<p>While both formats offer valuable learning experiences, ad hoc committees excel at developing real-world applicable skills. One invites more pressure and quicker thinking, which is often what you find in the real world.</p>

<p>However, the "better" choice depends on individual delegate preferences and comfort levels with high-pressure situations.</p>
`,
    relatedPosts: ["crisis-committees-and-joint-crisis", "ga-better-than-crisis"],
  },
  {
    id: "mastering-your-first-position-paper",
    title: "Mastering Your First Position Paper",
    excerpt: "A guide to help new delegates navigate research and writing for their initial position papers.",
    author: "Joshua Varon",
    publishDate: "2025-07-27",
    category: "MUN Prep",
    content: `
<h1>Mastering Your First Position Paper</h1>

<p>Writing your first Model UN position paper can feel daunting, but with the right approach, you'll create a document that showcases your research and sets you up for success in committee.</p>

<h2>Understanding Your Country</h2>

<p>Begin by understanding your country's current position across key areas like education, healthcare, and women's rights. This foundation informs everything else you write.</p>

<h2>Three Core Steps</h2>

<ol>
<li><strong>Define the problem clearly</strong> - What exactly is the issue your committee addresses?</li>
<li><strong>Document past actions</strong> - What has your country previously accomplished on this issue?</li>
<li><strong>Propose future actions</strong> - What should the committee do, supported by evidence?</li>
</ol>

<h2>Start with the End in Mind</h2>

<p>Deciding on a claim is the hardest part, but familiarity with your own experiences produces stronger positions than research alone.</p>

<h2>Find Your Voice</h2>

<p>Effective position papers require distinctive voice and persuasive language rather than monotonous fact-listing. Take risks and explore positions outside your comfort zone.</p>

<p>I once wrote about international adoption—a topic far outside my experience—and found it more growth-oriented than more conventional topics.</p>
`,
    relatedPosts: ["how-to-prepare-for-your-first-conference", "writing-comprehensive-working-papers"],
  },
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.id === id);
}

export function getBlogPostsByCategory(category: BlogPost["category"]): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.category === category);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
