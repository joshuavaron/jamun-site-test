export interface ResourceData {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: "Getting Started" | "Conference Materials" | "Training";
  icon: "book" | "document" | "template" | "globe" | "video" | "download";
  content: string;
  relatedResources?: string[];
}

export const RESOURCES: ResourceData[] = [
  {
    id: "delegate-handbook",
    name: "Delegate Handbook",
    shortDescription: "Complete guide to rules of procedure and parliamentary debate.",
    longDescription: "A comprehensive guide covering everything delegates need to know about Model UN procedures, parliamentary debate, and conference etiquette.",
    category: "Getting Started",
    icon: "book",
    content: `
<h1>Delegate Handbook</h1>
<p>Welcome to the JAMUN Delegate Handbook! Whether this is your first conference or your tenth, this guide will help you feel confident and prepared. We're excited to have you join us!</p>

<h2>Introduction to Model UN</h2>
<p>Model United Nations (MUN) is an academic simulation of the United Nations where students learn about diplomacy, international relations, and the UN. In 1945, fifty-one nations signed the UN Charter, creating an organization dedicated to preventing war and promoting peace through international collaboration. MUN brings this mission to life in the classroom.</p>
<p>As a delegate, you'll role-play as a representative from a country and work with others to solve real-world issues from your assigned nation's perspective. MUN is about more than just debate—it's about collaboration, creative problem-solving, and understanding different perspectives. Don't worry if you're new; everyone starts somewhere, and our chairs and staff are here to help you succeed!</p>

<h2>Types of Committees</h2>
<p>At JAMUN, you may participate in different types of committees:</p>

<h3>General Assembly (GA)</h3>
<p>General Assembly committees are larger committees, typically with 50-150 delegates. Debate moves through formal speeches, moderated caucuses, and unmoderated caucuses as delegates work together to draft and pass resolutions. GA committees are great for delegates who enjoy working with large groups and want to develop their core MUN skills.</p>

<h3>Specialized and Regional Bodies</h3>
<p>These committees function similarly to General Assemblies but are usually smaller (30-75 delegates) and focus on specific issues or regions. Examples include ECOSOC committees, regional bodies like the African Union, and specialized agencies like WHO or UNHCR.</p>

<h3>Crisis Committees</h3>
<p>Crisis committees are fast-paced, smaller committees (15-30 delegates) where the situation evolves throughout the conference. In addition to regular debate, delegates write private "crisis notes" to take individual actions that can change the course of events. Crisis committees reward quick thinking, creativity, and multitasking.</p>

<h2>First-Time Delegates</h2>
<p>New to Model UN? Welcome! Here's what you need to know to hit the ground running:</p>

<h3>Before the Conference</h3>
<ul>
<li><strong>Research your country:</strong> Learn about your country's government, economy, foreign policy, and position on your committee's topic. Check out our Country Research Guide for help!</li>
<li><strong>Write your position paper:</strong> This helps you organize your thoughts and shows your chairs you've prepared.</li>
<li><strong>Read the background guide:</strong> Your chairs have written a guide explaining the topic—read it carefully.</li>
<li><strong>Practice speaking:</strong> Even just a few minutes in front of a mirror can help build confidence.</li>
</ul>

<h3>What to Bring</h3>
<ul>
<li>Your research notes and position paper</li>
<li>A notebook and pens for taking notes</li>
<li>A water bottle and snacks for breaks</li>
<li>Formal attire (see Dress Code below)</li>
<li>A positive attitude and willingness to learn!</li>
</ul>

<h3>Tips for Success</h3>
<ul>
<li><strong>Don't be afraid to speak:</strong> Your voice matters! Start with a short speech or a point—every contribution counts.</li>
<li><strong>Ask questions:</strong> If you're confused about procedure, raise a Point of Inquiry. Chairs are happy to help.</li>
<li><strong>Work with others:</strong> Find allies who share your country's views and collaborate on working papers.</li>
<li><strong>Stay in character:</strong> Remember, you're representing your country, not your personal opinions—even if you disagree with them!</li>
<li><strong>Have fun:</strong> MUN is meant to be enjoyable! Don't stress too much about making mistakes.</li>
</ul>

<h2>Research and Preparation</h2>
<p>Good preparation is the foundation of a successful MUN experience. Here's how to get ready:</p>

<h3>Researching Your Country</h3>
<ul>
<li><strong>Background:</strong> Explore your country's history, geography, political system, and economy. Understanding where your country comes from helps explain its current positions.</li>
<li><strong>Political Leadership:</strong> Know who leads your country and their influence on foreign policy. Research recent elections and political shifts.</li>
<li><strong>Economic Interests:</strong> Understand your country's key industries, trade partners, and economic challenges. Economic interests often drive foreign policy positions.</li>
<li><strong>Regional Relationships:</strong> Examine your country's relationships with neighbors and regional alliances. Who are your allies? Who are your rivals?</li>
<li><strong>UN Involvement:</strong> Look at your country's history in the UN—voting patterns, treaties signed, and past statements on your topic.</li>
</ul>

<h3>Researching Your Topic</h3>
<ul>
<li><strong>Read the background guide:</strong> This is your starting point! Your chairs have done significant research to help you.</li>
<li><strong>Find your country's position:</strong> Search for official government statements, UN speeches, and voting records related to your topic.</li>
<li><strong>Identify relevant UN resolutions:</strong> What has the UN already done on this issue? What treaties exist?</li>
<li><strong>Develop solutions:</strong> Come up with creative, realistic ideas. Don't be afraid to think outside the box!</li>
</ul>

<h2>Rules of Procedure</h2>
<p>The following is a summary of how committee sessions work. For the complete rules, see our official Rules of Procedure document.</p>

<h3>Roll Call</h3>
<p>At the beginning of each session, the Chair will conduct a roll call. When your country is called, respond with one of the following:</p>
<ul>
<li><strong>"Present"</strong> — You may abstain on substantive votes</li>
<li><strong>"Present and Voting"</strong> — You must vote yes or no on substantive votes (no abstaining)</li>
</ul>

<h3>Speakers' List</h3>
<p>The speakers' list is the default mode of debate. Raise your placard to be added to the list, and when called upon, you'll have <strong>90 seconds</strong> to address the committee. After speaking, you may yield your remaining time to the Chair or to another delegate.</p>

<h3>Moderated Caucus</h3>
<p>A moderated caucus is a focused discussion on a specific sub-topic. To propose one, raise your placard and specify:</p>
<ul>
<li>Total time (e.g., "10 minutes")</li>
<li>Speaking time (e.g., "1 minute" — this is the maximum allowed)</li>
<li>Topic (e.g., "Discussing funding mechanisms")</li>
</ul>
<p>The delegate who proposes the caucus may request to speak first or last. If you want to speak during the caucus, raise your placard and the Chair will call on delegates.</p>

<h3>Unmoderated Caucus</h3>
<p>An unmoderated caucus is informal time where you can leave your seat, walk around, and talk directly with other delegates. This is when most negotiation and working paper drafting happens! Maximum duration is <strong>20 minutes</strong>.</p>

<h3>Points</h3>
<p>Points allow you to communicate with the Chair:</p>
<ul>
<li><strong>Point of Order:</strong> Something procedurally incorrect is happening. May be raised at any time.</li>
<li><strong>Point of Inquiry:</strong> You have a question about procedure. Raise when there's no active speaker.</li>
<li><strong>Point of Personal Privilege:</strong> You can't hear, see, or have a personal comfort concern. Raise when there's no active speaker.</li>
<li><strong>Point of Information:</strong> A question directed to the current speaker. Only with the Chair's consent during a speech.</li>
</ul>

<h3>Common Motions</h3>
<p>Motions allow you to change what the committee is doing:</p>
<ul>
<li><strong>Motion for Moderated Caucus:</strong> Start a focused discussion</li>
<li><strong>Motion for Unmoderated Caucus:</strong> Start informal negotiation time</li>
<li><strong>Motion to Open the Speakers' List:</strong> Open or reopen the speakers' list</li>
<li><strong>Motion to Close Debate:</strong> End debate and move toward voting</li>
<li><strong>Motion to Enter Voting Procedure:</strong> Begin voting on draft resolutions</li>
<li><strong>Motion to Suspend:</strong> Take a recess</li>
</ul>
<p>Most motions require a simple majority to pass. The Chair may rule a motion "dilatory" (obstructing progress) and choose not to entertain it.</p>

<h2>Strategy and Diplomacy</h2>
<p>Success in MUN comes from more than just knowing the rules—it's about working effectively with others. Here are some strategies to help you excel:</p>

<h3>The Flow of Debate</h3>
<p>General Assembly committees typically move through four phases:</p>
<ol>
<li><strong>Opening Debate:</strong> Delegates speak about the topic and their country's position. Use this time to identify potential allies and signal your willingness to collaborate.</li>
<li><strong>Working Papers:</strong> Small coalitions form to draft informal documents. This is where relationships matter—find delegates who share your views and start writing together.</li>
<li><strong>Draft Resolutions:</strong> Coalitions merge their working papers into formal draft resolutions. Be flexible and collaborative, but make sure your key ideas are included.</li>
<li><strong>Voting:</strong> The committee votes on resolutions. Present your resolution confidently and be prepared to answer questions.</li>
</ol>

<h3>Building Alliances</h3>
<ul>
<li><strong>Identify key players early:</strong> Notice which delegates are active, knowledgeable, and influential. Try to work with them.</li>
<li><strong>Form coalitions:</strong> Work with like-minded countries to create a unified front. Regional blocs (EU, African Union, etc.) are natural starting points.</li>
<li><strong>Mention other delegates:</strong> In your speeches, reference delegates you want to work with: "The delegation of France looks forward to collaborating with Germany on this issue."</li>
<li><strong>Be inclusive:</strong> Welcome others into your coalition. The more support you have, the better your resolution's chances.</li>
</ul>

<h3>Effective Participation</h3>
<ul>
<li><strong>Deliver a strong opening speech:</strong> Clearly state your position, goals, and willingness to work with others.</li>
<li><strong>Be active in moderated caucuses:</strong> Raise your placard and speak often. Consistent participation keeps you visible.</li>
<li><strong>Use unmoderated caucuses wisely:</strong> Don't just sit with your coalition—network with other groups, gather signatories, and explore compromises.</li>
<li><strong>Ask strategic questions:</strong> When others present resolutions, ask questions that highlight issues or reinforce your position.</li>
</ul>

<h3>Diplomatic Tips</h3>
<ul>
<li><strong>Stay professional:</strong> Even when debates get heated, remain courteous and diplomatic.</li>
<li><strong>Be flexible:</strong> Compromise is essential. Know which of your positions are negotiable and which are not.</li>
<li><strong>Play the mediator:</strong> If two groups are in conflict, offer to help find common ground. This positions you as a leader.</li>
<li><strong>Use silence strategically:</strong> Sometimes it's better to listen first and respond thoughtfully.</li>
</ul>

<h2>Writing Resolutions</h2>
<p>Resolutions are the final product of your committee's work—formal documents proposing solutions to the topic at hand.</p>

<h3>Working Papers</h3>
<p>Before a resolution, you'll likely draft working papers. These are informal documents to develop and share ideas. They don't need sponsors or signatories, so feel free to experiment! Working papers are a great way to test ideas and attract collaborators.</p>

<h3>Draft Resolutions</h3>
<p>When your ideas are ready, you can formalize them into a draft resolution. You'll need:</p>
<ul>
<li><strong>Sponsors:</strong> The main authors of the resolution (maximum 5% of committee, rounded up). Sponsors present the resolution and can accept friendly amendments. Try to be a sponsor—it shows leadership!</li>
<li><strong>Signatories:</strong> Delegates who want to see it debated, even if they don't fully agree (minimum 20% of committee, rounded down). Gather signatories during unmoderated caucuses.</li>
</ul>

<h3>Resolution Format</h3>
<p>Resolutions are written as long sentences with two main parts:</p>
<ul>
<li><strong>Preambulatory Clauses:</strong> Introduce the resolution by outlining the issues and context. Begin with an <em>italicized</em> phrase like <em>"Noting," "Recognizing," "Aware of," "Deeply concerned,"</em> etc. Each clause ends with a comma.</li>
<li><strong>Operative Clauses:</strong> The actual proposals and actions. Begin with an <strong>underlined</strong> phrase like <em>"Calls upon," "Recommends," "Urges," "Requests,"</em> etc. These are numbered and end with semicolons (except the last one, which ends with a period).</li>
</ul>

<h3>Tips for Strong Resolutions</h3>
<ul>
<li><strong>Be specific:</strong> Clearly address the problem with detailed, actionable solutions.</li>
<li><strong>Be realistic:</strong> Propose solutions that are feasible and within the UN's capabilities.</li>
<li><strong>Build broad support:</strong> Include ideas from multiple perspectives to attract votes.</li>
<li><strong>Respect sovereignty:</strong> Avoid solutions that infringe on national sovereignty unless absolutely necessary.</li>
<li><strong>Consider funding:</strong> Think about how your proposals will be paid for—this is a common point of criticism.</li>
</ul>

<h3>Amendments</h3>
<p>Want to change a draft resolution? You can propose an amendment:</p>
<ul>
<li><strong>Friendly amendments:</strong> If all sponsors agree, the change is automatically incorporated.</li>
<li><strong>Unfriendly amendments:</strong> If sponsors don't all agree, the amendment needs its own sponsors and signatories, and the committee votes on it.</li>
</ul>
<p>Be prepared to negotiate on amendments. Know which parts of your resolution are essential and which you can compromise on.</p>

<h2>Voting</h2>
<p>There are two types of votes:</p>
<ul>
<li><strong>Procedural votes:</strong> Votes on motions (like starting a caucus). Everyone must vote—no abstentions allowed. Simple majority wins.</li>
<li><strong>Substantive votes:</strong> Votes on resolutions and amendments. You may abstain if you responded "Present" during roll call. Simple majority of non-abstaining votes wins.</li>
</ul>
<p>Any delegate may request a roll call vote, where each country is called individually to vote "Yes," "No," "Abstain," or "Pass" (pass lets you vote at the end).</p>

<h2>Delegate Conduct</h2>
<p>Model UN simulates real diplomacy, so we ask delegates to act professionally:</p>
<ul>
<li>Refer to yourself in the third person as "The delegate of [country]"</li>
<li>Address other delegates through the Chair (e.g., "The delegate would like to ask the delegate of France...")</li>
<li>Maintain diplomatic courtesy at all times—personal attacks are never acceptable</li>
<li>Be respectful of all perspectives, cultures, and backgrounds</li>
<li>Use electronic devices only with the Chair's permission</li>
</ul>

<h3>Dress Code</h3>
<p>Delegates are expected to wear formal attire during committee sessions. We understand that "formal" means different things in different cultures and for students from different backgrounds. Acceptable attire includes suits, dresses, slacks, blouses, and blazers. We politely ask that you avoid clothing with distracting logos, messages, or images.</p>

<h2>Awards</h2>
<p>At JAMUN, we recognize outstanding delegates with awards. While awards aren't everything, they're a nice way to celebrate your hard work!</p>

<h3>Award Categories</h3>
<ul>
<li><strong>Best Delegate:</strong> The top performer in the committee</li>
<li><strong>Outstanding Delegate:</strong> Exceptional performance</li>
<li><strong>Honorable Mention:</strong> Notable contribution to committee</li>
<li><strong>Best Position Paper:</strong> Exceptional research and writing in your position paper</li>
</ul>

<h3>What Chairs Look For</h3>
<ul>
<li><strong>Preparation:</strong> Knowledge of your country's position and the topic</li>
<li><strong>Diplomacy:</strong> Working well with others, building coalitions, and finding compromise</li>
<li><strong>Speaking:</strong> Clear, persuasive, and confident speeches</li>
<li><strong>Leadership:</strong> Taking initiative in writing papers and guiding debate</li>
<li><strong>Procedure:</strong> Understanding and correctly using rules of procedure</li>
<li><strong>Growth:</strong> Chairs love to see delegates improve throughout the conference!</li>
</ul>
<p>Remember: awards recognize great work, but the real reward is the skills you build and the friends you make. Focus on learning and having fun, and success will follow!</p>

<h2>Final Thoughts</h2>
<p>Model UN can feel overwhelming at first, but we promise it gets easier—and more fun—with practice. Don't be afraid to make mistakes; that's how we all learn. Your chairs and the JAMUN staff are here to support you every step of the way.</p>
<p><strong>We can't wait to see you in committee. Good luck, and happy debating!</strong></p>
`,
    relatedResources: ["rules-of-procedure", "country-research-guide"],
  },
  {
    id: "rules-of-procedure",
    name: "Rules of Procedure",
    shortDescription: "Official parliamentary rules for committee sessions.",
    longDescription: "The official JAMUN Rules of Procedure document that governs all committee sessions, including voting procedures, motions, and points of order.",
    category: "Conference Materials",
    icon: "document",
    content: `
<h2>Article I: General Rules</h2>

<h3>1.1 Scope</h3>
<p>These rules apply to all JAMUN committees unless otherwise specified by the Secretariat.</p>

<h3>1.2 Purpose</h3>
<p>These Rules of Procedure are designed to facilitate orderly and productive debate, enabling delegates to engage in diplomacy, negotiation, and collaborative problem-solving in the spirit of the United Nations.</p>

<h3>1.3 Authority of the Chair</h3>
<p>The Chair shall maintain order, rule on points and motions, and exercise discretion on all procedural matters. The Chair's rulings are final unless overturned by a two-thirds majority vote.</p>

<h3>1.4 Secretariat Interpretation</h3>
<p>The Secretariat holds final authority to interpret these rules. Any disputes regarding rule interpretation shall be referred to the Secretariat, whose decisions are binding.</p>

<h3>1.5 Amendments to Rules</h3>
<p>These rules may be suspended or amended during a session by a two-thirds majority vote, subject to Secretariat approval.</p>

<h2>Article II: Debate Format</h2>

<h3>2.1 Speakers' List</h3>
<ol type="a">
<li>The Chair maintains the speakers' list throughout debate.</li>
<li>Delegates wishing to speak shall raise their placards.</li>
<li>A delegate may speak only when recognized by the Chair.</li>
<li>Default speaking time is <strong>90 seconds</strong> unless modified.</li>
<li>Committee may not proceed if the speakers' list is empty.</li>
</ol>

<h3>2.2 Moderated Caucus</h3>
<ol type="a">
<li>Requires a motion specifying total time, individual speaking time, and topic.</li>
<li>Requires a simple majority to pass.</li>
<li>Maximum individual speaking time is <strong>one minute</strong>.</li>
<li>The Chair calls on delegates who raise their placards.</li>
<li>The moving delegate may request the first or last speaking position.</li>
<li>Delegates may speak multiple times if time permits.</li>
</ol>

<h3>2.3 Unmoderated Caucus</h3>
<ol type="a">
<li>Requires a motion specifying total time.</li>
<li>Requires a simple majority to pass.</li>
<li>Maximum duration is <strong>20 minutes</strong>.</li>
<li>Delegates may move freely and negotiate informally.</li>
</ol>

<h3>2.4 Yielding Time</h3>
<ol type="a">
<li>A delegate may yield remaining speaking time to the Chair or to another delegate.</li>
<li>Time yielded to the Chair concludes the speaker's remarks.</li>
<li>Time yielded to another delegate may not be yielded again.</li>
</ol>

<h2>Article III: Points and Motions</h2>

<h3>3.1 Points (In Order of Precedence)</h3>
<ol type="a">
<li><strong>Point of Order:</strong> Addresses procedural violations. May be raised at any time.</li>
<li><strong>Point of Inquiry:</strong> Questions about procedure. May be raised when there is no active speaker.</li>
<li><strong>Point of Personal Privilege:</strong> Personal comfort concerns. May be raised when there is no active speaker.</li>
<li><strong>Point of Information:</strong> A question directed to the current speaker. May only be raised during a speech with the consent of the Chair.</li>
</ol>

<h3>3.2 Motions (In Order of Precedence)</h3>
<ol type="a">
<li>Motion to Appeal the Chair: Challenges a ruling by the Chair. This motion cannot be ruled dilatory and requires a two-thirds majority to pass.</li>
<li>Motion to Adjourn: Ends the conference session</li>
<li>Motion to Suspend: Suspends for recess</li>
<li>Motion to Enter Voting Procedure: Moves the committee into voting on draft resolutions</li>
<li>Motion to Close Debate: Ends debate on topic</li>
<li>Motion to Open Debate: Opens debate on a new topic</li>
<li>Motion to Open the Speakers' List: Opens or reopens the speakers' list</li>
<li>Motion for Unmoderated Caucus</li>
<li>Motion for Moderated Caucus</li>
</ol>

<h3>3.3 Dilatory Motions</h3>
<p>The Chair may rule any motion dilatory if it is deemed to be obstructing the progress of debate. A motion ruled dilatory will not be entertained.</p>

<h3>3.4 Order of Consideration</h3>
<p>Motions shall be considered in order from most to least disruptive. Disruption is determined first by precedence (as listed above) and then by time (longer durations are more disruptive).</p>

<h2>Article IV: Working Papers and Resolutions</h2>

<h3>4.1 Working Papers</h3>
<ol type="a">
<li>Working papers are informal documents used to develop ideas.</li>
<li>Working papers do not require sponsors or signatories.</li>
<li>Introduction of working papers is at the discretion of the Chair.</li>
</ol>

<h3>4.2 Draft Resolutions</h3>
<ol type="a">
<li>Draft resolutions require sponsors (authors) and signatories (supporters).</li>
<li>The maximum number of sponsors is <strong>5% of delegates in committee, rounded up</strong>.</li>
<li>The minimum number of signatories is <strong>20% of present delegates, rounded down</strong>.</li>
<li>Draft resolutions must follow proper format, including preambulatory and operative clauses.</li>
</ol>

<h3>4.3 Amendments</h3>
<ol type="a">
<li><strong>Friendly amendments</strong> are approved by all sponsors and are automatically incorporated into the draft resolution.</li>
<li><strong>Unfriendly amendments</strong> require a vote to be incorporated and must have their own sponsors and signatories.</li>
</ol>

<h2>Article V: Voting Procedure</h2>

<h3>5.1 Procedural Votes</h3>
<ol type="a">
<li>All delegates must vote on procedural matters; abstentions are not permitted.</li>
<li>A simple majority is required for a procedural vote to pass.</li>
<li>Procedural votes are conducted by a show of placards.</li>
</ol>

<h3>5.2 Substantive Votes</h3>
<ol type="a">
<li>Delegates who responded "Present and Voting" during roll call may not abstain on substantive votes.</li>
<li>Delegates who responded "Present" during roll call may abstain on substantive votes.</li>
<li>A simple majority of non-abstaining votes is required for a substantive vote to pass.</li>
</ol>

<h3>5.3 Roll Call Vote</h3>
<ol type="a">
<li>Any delegate may request a roll call vote before voting begins.</li>
<li>During a roll call vote, delegates may vote "Yes," "No," "Abstain," or "Pass."</li>
<li>A delegate who votes "Pass" will have one opportunity to cast their vote at the end of the roll call.</li>
</ol>

<h2>Article VI: Conduct</h2>

<h3>6.1 Decorum</h3>
<ol type="a">
<li>Delegates shall maintain diplomatic courtesy at all times.</li>
<li>Personal attacks are prohibited.</li>
<li>Use of electronic devices is at the discretion of the Chair.</li>
</ol>

<h3>6.2 Formal Attire</h3>
<ol type="a">
<li>Delegates are expected to wear formal attire during committee sessions.</li>
<li>JAMUN staff understand that formal attire means a variety of things in different cultures and for students from different backgrounds.</li>
<li>Acceptable attire includes suits, dresses, slacks, blouses, and blazers.</li>
<li>Delegates are politely asked not to wear clothing with distracting logos, messages, or images.</li>
</ol>

<h3>6.3 Violations</h3>
<ol type="a">
<li>For a first offense, the delegate will receive a warning from the Chair.</li>
<li>For a second offense, a note will be sent to the delegate's faculty advisor.</li>
<li>For a third offense, the delegate will be removed from committee.</li>
</ol>
`,
    relatedResources: ["delegate-handbook"],
  },
  {
    id: "country-research-guide",
    name: "Country Research Guide",
    shortDescription: "How to effectively research your assigned country.",
    longDescription: "A step-by-step guide to researching your assigned country, understanding its foreign policy positions, and representing it accurately in committee.",
    category: "Getting Started",
    icon: "globe",
    content: `
<h1>Country Research Guide</h1>

<h2>Introduction</h2>
<p>Effective country research is the foundation of successful Model UN participation. This guide will help you understand your assigned country's positions, interests, and behavior in the international community. By taking the time to deeply research your country, you'll be able to represent it authentically and engage meaningfully with other delegates.</p>

<h2>Step 1: Basic Country Profile</h2>
<p>Start by gathering fundamental information about your country. This background knowledge will inform everything else you research and help you understand why your country takes certain positions.</p>

<h3>Geography</h3>
<p>Begin by understanding where your country is located in the world and who its neighbors are. Examine what natural resources your country possesses, as these often drive economic and foreign policy decisions. Consider what climate and geographical challenges your country faces, such as droughts, flooding, or lack of arable land. Finally, think about your country's strategic importance—does it control important waterways, sit at a crossroads of trade routes, or border regions of conflict?</p>

<h3>Demographics</h3>
<p>Research your country's population size and whether it is growing, shrinking, or aging. Understand the ethnic and religious composition of your country, as this often influences domestic politics and foreign relations. Learn what languages are spoken and which are official. Consider the distribution between urban and rural populations, as this affects development priorities and economic policies.</p>

<h3>Economy</h3>
<p>Determine your country's GDP and whether it is classified as developed, developing, or a Least Developed Country (LDC). Identify the major industries and primary exports, as these shape trade relationships and economic interests. Research the key economic challenges your country faces, such as unemployment, inflation, or debt. Understand your country's most important trade relationships and economic partnerships.</p>

<h3>Government</h3>
<p>Learn about your country's political system—is it a democracy, monarchy, one-party state, or something else? Know who the current leaders are, including the head of state and head of government. Research the major political parties and their platforms if applicable. Consider how stable the government is and whether there have been recent changes in leadership or political direction.</p>

<h2>Step 2: Foreign Policy Research</h2>
<p>Once you understand your country's basic profile, dive deeper into how it interacts with the rest of the world. Foreign policy is shaped by geography, history, economics, and ideology.</p>

<h3>Alliances and Blocs</h3>
<p>Identify which regional organizations your country belongs to, such as the European Union, African Union, ASEAN, or Organization of American States. Research whether your country is part of any military alliances like NATO or collective security arrangements. Examine economic partnerships and trade agreements your country has signed. Understand which voting blocs your country aligns with in the United Nations, as this will help you identify natural allies in committee.</p>

<h3>Key Relationships</h3>
<p>Identify your country's major allies—which countries does it cooperate with most closely on security, economic, and diplomatic matters? Research historical adversaries and understand why tensions exist or existed. Know your country's most important trade partners and what goods and services flow between them. If your country receives foreign aid, know who the major donors are; if it provides aid, know where that assistance goes.</p>

<h3>UN Engagement</h3>
<p>Research how your country has voted on General Assembly resolutions, particularly those related to your committee's topic. Examine which major treaties and conventions your country has ratified, signed but not ratified, or refused to sign. Understand your country's contributions to the UN budget and whether it is a major funder or recipient of UN programs. Learn whether your country participates in peacekeeping operations and where those missions are deployed.</p>

<h2>Step 3: Topic-Specific Research</h2>
<p>After building a general understanding of your country, focus on how it relates specifically to your committee's topic. This is where your research becomes most directly useful for debate.</p>

<h3>Domestic Impact</h3>
<p>Examine how the issue your committee is discussing affects your country directly. Research what domestic policies your country has implemented to address this issue at home. Gather relevant statistics about your country—for example, if discussing climate change, know your country's emissions levels; if discussing education, know literacy rates and school enrollment figures.</p>

<h3>Historical Position</h3>
<p>Research how your country has voted on past UN resolutions related to this topic, as this reveals consistent patterns in policy. Find statements your country's representatives have made in UN forums about this issue. Know which relevant treaties your country has signed or rejected and understand why. Research what actions your country has taken in the past to address this issue, both domestically and internationally.</p>

<h3>Current Policy</h3>
<p>Find official government statements about the topic from recent years. Research any recent initiatives or programs your country has launched related to the issue. Understand what resources your country has committed to addressing this problem. Identify your country's stated priorities and goals regarding this topic.</p>

<h2>Step 4: Research Sources</h2>
<p>Knowing where to find reliable information is just as important as knowing what to look for. Use a variety of sources to get a complete picture.</p>

<h3>Official Sources</h3>
<p>The United Nations website (UN.org) is your best source for resolutions, voting records, and official UN documents. Your country's Permanent Mission to the UN often has a website with statements and position papers. Government websites with .gov domains provide official policy information directly from the source. Look for statements from your country's Ministry of Foreign Affairs for diplomatic positions.</p>

<h3>News Sources</h3>
<p>International news organizations like BBC, Reuters, and the Associated Press provide balanced coverage of global events. Reading newspapers from your assigned country helps you understand how issues are perceived domestically. Regional news sources offer perspectives that international outlets might miss. Academic journals provide in-depth analysis and historical context.</p>

<h3>Data Sources</h3>
<p>The World Bank provides comprehensive economic data and development indicators for nearly every country. The International Monetary Fund (IMF) offers detailed economic analysis and forecasts. The World Health Organization (WHO) has health statistics and policy information. The UNDP Human Development Index ranks countries by quality of life indicators beyond just economic measures.</p>

<h3>Think Tanks</h3>
<p>The Council on Foreign Relations provides accessible analysis of international issues with a US perspective. Chatham House (the Royal Institute of International Affairs) offers British and European perspectives on global affairs. The Brookings Institution publishes in-depth policy research on a wide range of topics. Look for think tanks based in your country's region for perspectives closer to home.</p>

<h2>Step 5: Understanding Positions</h2>
<p>The most important part of research is understanding not just what your country's positions are, but why it holds them. This deeper understanding allows you to argue persuasively and respond to unexpected situations.</p>

<h3>Historical Context</h3>
<p>Consider how colonial history has shaped your country's worldview and relationships with other nations. Research past conflicts your country has experienced and how they influence current security concerns. Understand the cultural influences that have shaped your country's values and perspectives. Examine your country's economic development path and how it affects views on issues like trade, aid, and environmental policy.</p>

<h3>National Interests</h3>
<p>Identify your country's primary security concerns—what threats does it face, and how does it seek to address them? Understand your country's economic priorities, including the industries it wants to protect and the markets it wants to access. Consider how your country seeks to maintain or expand its regional influence. Think about how domestic politics shape foreign policy—leaders often take international positions that appeal to their domestic audiences.</p>

<h3>Ideological Factors</h3>
<p>Understand your country's political ideology and how it shapes its approach to international cooperation and sovereignty. Consider how religious beliefs or the separation of church and state influence policy positions. Research the cultural values that are important in your country and how they affect views on issues like human rights, gender equality, or family policy. Understand your country's development philosophy—does it favor state-led development, free markets, or something in between?</p>

<h2>Step 6: Finding Your Bloc</h2>
<p>In Model UN, delegates rarely work alone. Understanding which countries share your interests helps you find allies and build coalitions.</p>

<h3>Geographic Blocs</h3>
<p>The United Nations organizes countries into five regional groups for electoral and organizational purposes. The African Group includes all 54 African nations and often coordinates on development and post-colonial issues. The Asia-Pacific Group is the largest and most diverse, spanning from the Middle East to the Pacific Islands. The Eastern European Group includes former Soviet states and countries that were part of the Eastern Bloc. The Latin American and Caribbean Group (GRULAC) coordinates on regional issues and often shares perspectives on development. The Western European and Others Group (WEOG) includes Western Europe, North America, Australia, and New Zealand, and often aligns on human rights and democratic governance issues.</p>

<h3>Issue-Based Groups</h3>
<p>Beyond geographic blocs, countries form coalitions around shared interests. The G77 plus China is a coalition of developing nations that often coordinate on economic and development issues. The European Union member states frequently speak and vote as a bloc on many issues. The Arab League coordinates positions on Middle Eastern affairs and issues affecting Muslim-majority countries. Small Island Developing States (SIDS) work together on climate change and ocean issues that threaten their very existence. Landlocked Developing Countries face unique challenges in trade and development and often coordinate their positions accordingly.</p>

<hr>

<h2>Research Checklist</h2>
<p>Before committee begins, make sure you can confidently address all of the following areas. This checklist will help ensure you're fully prepared to represent your country.</p>
<p>You should know your country's basic facts, including its capital city, current leader, and population. You should understand your country's economic status, including whether it is developed or developing, and what major economic challenges it faces. You should be able to describe your country's political system and assess its stability. You should know your country's regional alliances and key bilateral relationships. You should have researched your country's UN voting history on issues related to your topic. You should know which relevant treaties your country has ratified. You should understand what domestic policies your country has regarding the topic. You should be able to cite official statements your country has made on the issue. You should know which countries are your natural bloc partners and allies. Finally, you should have identified potential areas where your country might be willing to compromise in order to build broader coalitions.</p>
`,
    relatedResources: ["delegate-handbook", "public-speaking-tips"],
  },
  {
    id: "public-speaking-tips",
    name: "Public Speaking Tips",
    shortDescription: "Master the art of MUN speeches and debate.",
    longDescription: "Improve your public speaking skills with tips and techniques specifically designed for Model UN, from formal speeches to moderated caucus participation.",
    category: "Training",
    icon: "video",
    content: `
<h1>Public Speaking Tips for Model UN</h1>

<h2>Introduction</h2>
<p>Effective public speaking is essential for success in Model UN. Whether you're giving a formal speech, participating in a moderated caucus, or presenting a resolution, these skills will help you communicate persuasively and confidently.</p>

<h2>Before You Speak</h2>

<h3>Preparation</h3>
<ul>
<li>Know your country's position thoroughly</li>
<li>Prepare key talking points</li>
<li>Anticipate counterarguments</li>
<li>Practice your opening statement</li>
</ul>

<h3>Mental Preparation</h3>
<ul>
<li>Take deep breaths</li>
<li>Visualize success</li>
<li>Remember: everyone wants you to succeed</li>
<li>Focus on your message, not yourself</li>
</ul>

<h3>Physical Preparation</h3>
<ul>
<li>Stand tall with good posture</li>
<li>Make eye contact with the dais</li>
<li>Keep hands visible (not in pockets)</li>
<li>Dress professionally</li>
</ul>

<h2>Speech Structure</h2>

<h3>For Formal Speeches (Speakers' List)</h3>

<h4>Opening (15 seconds)</h4>
<ul>
<li>Formal greeting: <em>"Honorable Chair, fellow delegates..."</em></li>
<li>State your country</li>
<li>Preview your main point</li>
</ul>

<h4>Body (60-70 seconds)</h4>
<ul>
<li>Present your country's position</li>
<li>Provide evidence or examples</li>
<li>Connect to the broader issue</li>
<li>Propose or support solutions</li>
</ul>

<h4>Closing (15 seconds)</h4>
<ul>
<li>Summarize key point</li>
<li>Call to action</li>
<li>Thank the committee</li>
<li>Yield your time</li>
</ul>

<h3>For Moderated Caucus</h3>

<h4>Focus</h4>
<ul>
<li>One main point per speech</li>
<li>Directly address the caucus topic</li>
<li>Build on or respond to previous speakers</li>
</ul>

<h4>Structure</h4>
<ul>
<li>Quick greeting (5 seconds)</li>
<li>Main point with support (45 seconds)</li>
<li>Conclusion or call to action (10 seconds)</li>
</ul>

<hr>

<h2>Delivery Techniques</h2>

<h3>Voice</h3>
<ul>
<li>Project from your diaphragm</li>
<li>Vary your pace (slow for emphasis)</li>
<li>Use pauses effectively</li>
<li>Avoid filler words (um, like, you know)</li>
</ul>

<h3>Body Language</h3>
<ul>
<li>Stand confidently</li>
<li>Use purposeful gestures</li>
<li>Make eye contact across the room</li>
<li>Move deliberately, not nervously</li>
</ul>

<h3>Presence</h3>
<ul>
<li>Own your space</li>
<li>Show conviction in your words</li>
<li>Display diplomatic confidence</li>
<li>Remain composed under pressure</li>
</ul>

<h2>Advanced Techniques</h2>

<h3>Building Arguments</h3>
<ol>
<li>State your claim</li>
<li>Provide evidence</li>
<li>Explain the significance</li>
<li>Connect to your country's values</li>
</ol>

<h3>Rhetorical Devices</h3>
<ul>
<li><strong>Rule of Three:</strong> Group points in threes</li>
<li><strong>Rhetorical Questions:</strong> Engage the audience</li>
<li><strong>Repetition:</strong> Emphasize key points</li>
<li><strong>Contrast:</strong> Highlight differences</li>
</ul>

<h3>Handling Questions</h3>
<ul>
<li>Listen completely before responding</li>
<li>Pause briefly to formulate response</li>
<li>Address the specific question</li>
<li>Stay in character</li>
</ul>

<hr>

<h2>Common Mistakes to Avoid</h2>

<h3>1. Speaking Too Fast</h3>
<ul>
<li>Nervousness speeds you up</li>
<li>Practice slowing down</li>
<li>Use pauses deliberately</li>
</ul>

<h3>2. Reading from Paper</h3>
<ul>
<li>Notes are fine, reading is not</li>
<li>Maintain eye contact</li>
<li>Know your content</li>
</ul>

<h3>3. Apologizing</h3>
<ul>
<li>Don't start with "Sorry, but..."</li>
<li>Own your position</li>
<li>Speak with confidence</li>
</ul>

<h3>4. Being Too Informal</h3>
<ul>
<li>Maintain diplomatic language</li>
<li>Avoid slang or casual phrases</li>
<li>Address delegates formally</li>
</ul>

<h3>5. Going Over Time</h3>
<ul>
<li>Time yourself in practice</li>
<li>Have a shortened version ready</li>
<li>Respect the Chair's signals</li>
</ul>

<hr>

<h2>Speech Templates</h2>

<h3>Opening Statement</h3>
<blockquote>
"Honorable Chair, distinguished delegates, the delegation of [Country] is honored to address this committee on the critical issue of [Topic]. As a nation that has [relevant experience], we believe that [position statement]. Today, we will outline our commitment to [goal] and propose concrete solutions for [specific aspect]."
</blockquote>

<h3>Moderated Caucus</h3>
<blockquote>
"Thank you, Chair. On the matter of [caucus topic], [Country] firmly believes that [position]. We have seen [evidence] demonstrate that [point]. Therefore, we urge this committee to [specific action]."
</blockquote>

<h3>Closing Statement</h3>
<blockquote>
"In conclusion, the delegation of [Country] calls upon all member states to [action]. Together, we can [desired outcome]. [Country] stands ready to work with all willing partners to achieve this goal. Thank you, Chair."
</blockquote>

<hr>

<h2>Practice Exercises</h2>

<h3>1. Mirror Practice</h3>
<ul>
<li>Watch your body language</li>
<li>Practice eye contact</li>
<li>Work on gestures</li>
</ul>

<h3>2. Timed Runs</h3>
<ul>
<li>Practice 60-second speeches</li>
<li>Aim for 90 seconds, cut to 60</li>
<li>Get comfortable with timing</li>
</ul>

<h3>3. Record Yourself</h3>
<ul>
<li>Listen for filler words</li>
<li>Check your pacing</li>
<li>Evaluate your delivery</li>
</ul>

<h3>4. Practice with Friends</h3>
<ul>
<li>Simulate committee environment</li>
<li>Get feedback</li>
<li>Take turns speaking</li>
</ul>

<p><strong>Remember:</strong> The best speakers aren't born—they're made through practice and experience. Every speech is an opportunity to improve!</p>
`,
    relatedResources: ["delegate-handbook"],
  },
];

export function getResourceById(id: string): ResourceData | undefined {
  return RESOURCES.find((r) => r.id === id);
}

export function getResourcesByCategory(category: ResourceData["category"]): ResourceData[] {
  return RESOURCES.filter((r) => r.category === category);
}
