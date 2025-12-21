export interface ResourceData {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: "Getting Started" | "Writing Guides" | "Conference Materials" | "Training";
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
<p>Welcome to the JAMUN Delegate Handbook! This comprehensive guide will prepare you for a successful Model UN experience.</p>

<h2>Introduction to Model UN</h2>
<p>Model United Nations (MUN) is an academic simulation of the United Nations where students learn about diplomacy, international relations, and the UN. Participants role-play as delegates from different countries and attempt to solve real-world issues with the policies and perspectives of their assigned nation.</p>

<h2>Rules of Procedure</h2>
<p>The following rules govern debate and conduct during committee sessions:</p>

<h3>1. Roll Call</h3>
<p>At the beginning of each session, the Chair will conduct a roll call. Delegates must respond <strong>"Present"</strong> or <strong>"Present and Voting."</strong> Those who respond "Present and Voting" may not abstain during substantive votes.</p>

<h3>2. Setting the Agenda</h3>
<p>If there are multiple topics, delegates must first vote to set the agenda. The Chair will entertain motions for which topic to address first.</p>

<h3>3. Speakers' List</h3>
<p>The primary mode of debate. Delegates who wish to speak raise their placards and are added to the list. The default speaking time is <strong>90 seconds</strong>.</p>

<h3>4. Moderated Caucus</h3>
<p>A focused discussion where delegates speak for a set time on a specific sub-topic. To propose, specify:</p>
<ul>
<li>Total time (e.g., 10 minutes)</li>
<li>Speaking time (e.g., 1 minute)</li>
<li>Topic (e.g., "Addressing funding gaps")</li>
</ul>

<h3>5. Unmoderated Caucus</h3>
<p>Free-form discussion time where delegates leave their seats to negotiate and draft working papers. Specify total time when proposing.</p>

<h3>6. Points and Motions</h3>
<ul>
<li><strong>Point of Order:</strong> Address procedural issues</li>
<li><strong>Point of Inquiry:</strong> Ask a question about procedure</li>
<li><strong>Point of Personal Privilege:</strong> Address personal comfort</li>
<li><strong>Motion to Close Debate:</strong> End discussion on current topic</li>
<li><strong>Motion to Table:</strong> Postpone discussion</li>
</ul>

<h2>Writing Resolutions</h2>
<p>Resolutions are the final product of MUN committees. They consist of:</p>

<h3>Header</h3>
<ul>
<li>Committee name</li>
<li>Topic</li>
<li>Sponsors and signatories</li>
</ul>

<h3>Preambulatory Clauses</h3>
<p>Begin with phrases like <em>"Noting," "Recognizing," "Aware of,"</em> etc. These provide context and justification.</p>

<h3>Operative Clauses</h3>
<p>Begin with action-oriented phrases like <em>"Calls upon," "Recommends," "Urges,"</em> etc. These are the actual proposals.</p>

<h2>Delegate Conduct</h2>
<ul>
<li>Always refer to yourself in the third person as "The delegate of [country]"</li>
<li>Address other delegates through the Chair</li>
<li>Maintain diplomatic decorum at all times</li>
<li>Dress professionally (Western business attire)</li>
<li>Be respectful of all perspectives and cultures</li>
</ul>

<p><strong>We wish you the best of luck at JAMUN!</strong></p>
`,
    relatedResources: ["rules-of-procedure", "position-paper-template"],
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
    id: "position-paper-template",
    name: "Position Paper Template",
    shortDescription: "Official template for writing winning position papers.",
    longDescription: "Learn how to write an effective position paper with our official template and guidelines. Position papers are essential for demonstrating your research and earning awards.",
    category: "Writing Guides",
    icon: "template",
    content: `
<h1>Position Paper Guidelines</h1>

<h2>What is a Position Paper?</h2>
<p>A position paper is a one-page document that outlines your country's stance on the committee topic. It demonstrates your research, understanding of the issue, and proposed solutions from your country's perspective.</p>

<h2>Why Are Position Papers Important?</h2>
<ol>
<li>Shows chairs you've done your research</li>
<li>Helps you organize your country's position</li>
<li>Required for award consideration at many conferences</li>
<li>Serves as a reference during committee sessions</li>
</ol>

<h2>Position Paper Format</h2>
<ul>
<li><strong>Length:</strong> 1 page maximum (single-spaced)</li>
<li><strong>Font:</strong> Times New Roman, 12pt</li>
<li><strong>Margins:</strong> 1 inch on all sides</li>
</ul>

<h2>Structure</h2>

<h3>Header</h3>
<p>Include the following information:</p>
<ul>
<li>Committee: [Full Committee Name]</li>
<li>Topic: [Full Topic Title]</li>
<li>Country: [Your Country]</li>
<li>Delegate: [Your Name]</li>
<li>School: [Your School Name]</li>
</ul>

<h3>Paragraph 1: Background</h3>
<p>Provide context on the issue. Include:</p>
<ul>
<li>Brief history of the problem</li>
<li>Current situation and statistics</li>
<li>Why this issue matters internationally</li>
<li>How your country has been affected</li>
</ul>

<h3>Paragraph 2: Your Country's Position</h3>
<p>Explain your country's stance. Include:</p>
<ul>
<li>Past actions your country has taken</li>
<li>Relevant treaties or agreements signed</li>
<li>Voting history in the UN</li>
<li>Key policies and perspectives</li>
</ul>

<h3>Paragraph 3: Proposed Solutions</h3>
<p>Outline what your country wants to achieve. Include:</p>
<ul>
<li>Specific policy recommendations</li>
<li>Potential bloc partners</li>
<li>How solutions align with UN principles</li>
<li>Realistic and actionable proposals</li>
</ul>

<hr>

<h2>Sample Position Paper</h2>

<p><strong>Committee:</strong> United Nations Children's Fund (UNICEF)<br>
<strong>Topic:</strong> Access to Primary Education in Conflict Zones<br>
<strong>Country:</strong> Federal Republic of Germany<br>
<strong>Delegate:</strong> [Name]<br>
<strong>School:</strong> [School Name]</p>

<p>The global education crisis affects over 75 million children worldwide who have had their education disrupted by conflict and crisis. In conflict-affected areas, children are nearly three times more likely to be out of school than their peers in stable regions. The international community must take decisive action to ensure that every child, regardless of their circumstances, has access to quality primary education.</p>

<p>The Federal Republic of Germany has long championed the right to education as a fundamental human right. As one of the largest contributors to humanitarian education funding, Germany has committed over €500 million annually to education initiatives in crisis-affected regions. Germany strongly supports Education Cannot Wait and has consistently advocated for increased international funding mechanisms. Furthermore, Germany co-sponsored Resolution 2601 (2021) protecting schools in conflict zones and remains committed to the Safe Schools Declaration.</p>

<p>Germany proposes a multi-faceted approach to address this crisis. First, we call for the establishment of a rapid response education fund that can deploy resources within 72 hours of crisis onset. Second, we recommend expanding distance learning infrastructure in conflict-prone regions before crises occur. Third, we urge member states to strengthen enforcement of international humanitarian law protecting educational facilities. Germany stands ready to collaborate with like-minded nations in the European bloc and beyond to ensure that conflict never ends a child's education.</p>

<hr>

<h2>Tips for Success</h2>

<h3>1. Research Thoroughly</h3>
<ul>
<li>Use official government websites</li>
<li>Review UN voting records</li>
<li>Read news from your country's perspective</li>
</ul>

<h3>2. Stay In Character</h3>
<ul>
<li>Write from your country's viewpoint, not your own</li>
<li>Use official policy language</li>
<li>Reference real treaties and agreements</li>
</ul>

<h3>3. Be Specific</h3>
<ul>
<li>Include statistics and data</li>
<li>Name specific programs or initiatives</li>
<li>Propose concrete actions</li>
</ul>

<h3>4. Format Properly</h3>
<ul>
<li>Follow the template exactly</li>
<li>Check spelling and grammar</li>
<li>Submit by the deadline</li>
</ul>
`,
    relatedResources: ["delegate-handbook", "resolution-writing-guide"],
  },
  {
    id: "resolution-writing-guide",
    name: "Resolution Writing Guide",
    shortDescription: "Learn how to draft effective UN-style resolutions.",
    longDescription: "Master the art of resolution writing with this comprehensive guide covering preambulatory clauses, operative clauses, and formatting requirements.",
    category: "Writing Guides",
    icon: "document",
    content: `
<h1>Resolution Writing Guide</h1>

<h2>What is a Resolution?</h2>
<p>A resolution is the formal document produced by a UN committee that addresses the topic being discussed. It outlines the committee's position and proposed actions. Resolutions that pass represent the collective will of the body.</p>

<h2>Structure of a Resolution</h2>

<h3>1. Heading</h3>
<ul>
<li>Committee name</li>
<li>Topic</li>
<li>Sponsors (main authors)</li>
<li>Signatories (supporters for introduction)</li>
</ul>

<h3>2. Preambulatory Clauses</h3>
<p>These provide context and justification for the resolution. They:</p>
<ul>
<li>Reference past UN actions</li>
<li>Cite relevant treaties or declarations</li>
<li>Acknowledge the current situation</li>
<li><em>Are not voted on individually</em></li>
</ul>

<h4>Preambulatory Phrases</h4>
<p><em>Acknowledging, Affirming, Alarmed by, Aware of, Bearing in mind, Believing, Confident, Contemplating, Convinced, Declaring, Deeply concerned, Deeply conscious, Deeply convinced, Deeply disturbed, Deeply regretting, Desiring, Emphasizing, Expecting, Expressing its appreciation, Fulfilling, Fully aware, Guided by, Having considered, Having examined, Having received, Keeping in mind, Noting with concern, Noting with satisfaction, Observing, Reaffirming, Realizing, Recalling, Recognizing, Referring, Seeking, Taking into consideration, Taking note, Viewing with appreciation, Welcoming</em></p>

<h3>3. Operative Clauses</h3>
<p>These are the action items of the resolution. They:</p>
<ul>
<li>Propose specific actions</li>
<li>Establish programs or bodies</li>
<li>Call upon member states</li>
<li><strong>Are voted on (can be amended)</strong></li>
</ul>

<h4>Operative Phrases</h4>
<p><strong>Accepts, Affirms, Approves, Authorizes, Calls upon, Condemns, Confirms, Congratulates, Considers, Declares, Demands, Deplores, Designates, Draws attention, Emphasizes, Encourages, Endorses, Expresses its appreciation, Expresses its hope, Further invites, Further proclaims, Further recommends, Further requests, Further resolves, Notes, Proclaims, Reaffirms, Recommends, Regrets, Reminds, Requests, Solemnly affirms, Strongly condemns, Suggests, Supports, Takes note of, Transmits, Trusts, Urges</strong></p>

<hr>

<h2>Formatting Rules</h2>

<h3>Preambulatory Clauses</h3>
<ul>
<li>Begin with an <em>italicized</em> phrase</li>
<li>End with a <strong>comma</strong></li>
</ul>

<h3>Operative Clauses</h3>
<ul>
<li>Begin with a <strong>bold, underlined</strong> phrase</li>
<li>Are numbered (1, 2, 3...)</li>
<li>End with a <strong>semicolon</strong> (except the last, which ends with a period)</li>
<li>May contain sub-clauses (a, b, c...) or sub-sub-clauses (i, ii, iii...)</li>
</ul>

<hr>

<h2>Sample Resolution Format</h2>

<p><strong>COMMITTEE:</strong> [Committee Name]<br>
<strong>TOPIC:</strong> [Topic]<br>
<strong>SPONSORS:</strong> [List of countries]<br>
<strong>SIGNATORIES:</strong> [List of countries]</p>

<p><em>The [Committee Name],</em></p>

<p><em>Recalling</em> General Assembly resolution 70/1 of 25 September 2015, entitled "Transforming our world: the 2030 Agenda for Sustainable Development,"</p>

<p><em>Deeply concerned</em> by the ongoing challenges faced by [affected populations],</p>

<p><em>Recognizing</em> the efforts of member states and international organizations in addressing [issue],</p>

<ol>
<li><strong>Calls upon</strong> all member states to [specific action];</li>
<li><strong>Encourages</strong> the international community to [specific action];</li>
<li><strong>Requests</strong> the Secretary-General to [specific action];</li>
<li><strong>Decides</strong> to remain actively seized of the matter.</li>
</ol>

<hr>

<h2>Tips for Effective Resolutions</h2>

<h3>1. Be Specific</h3>
<ul>
<li>Avoid vague language</li>
<li>Include measurable outcomes</li>
<li>Set realistic timelines</li>
</ul>

<h3>2. Build Coalitions</h3>
<ul>
<li>Incorporate ideas from multiple blocs</li>
<li>Address diverse concerns</li>
<li>Seek broad support</li>
</ul>

<h3>3. Stay Within Mandate</h3>
<ul>
<li>Know your committee's powers</li>
<li>Don't propose actions beyond scope</li>
<li>Reference appropriate bodies for referrals</li>
</ul>

<h3>4. Consider Feasibility</h3>
<ul>
<li>Propose realistic funding mechanisms</li>
<li>Account for implementation challenges</li>
<li>Build on existing frameworks</li>
</ul>

<h2>Common Mistakes to Avoid</h2>
<ol>
<li>Using "demands" for voluntary actions</li>
<li>Creating new UN bodies without funding</li>
<li>Violating national sovereignty inappropriately</li>
<li>Using informal language</li>
<li>Forgetting to end clauses properly</li>
<li>Proposing legally binding actions in non-binding committees</li>
</ol>
`,
    relatedResources: ["position-paper-template", "rules-of-procedure"],
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
<p>Effective country research is the foundation of successful Model UN participation. This guide will help you understand your assigned country's positions, interests, and behavior in the international community.</p>

<h2>Step 1: Basic Country Profile</h2>
<p>Start by gathering fundamental information:</p>

<h3>Geography</h3>
<ul>
<li>Location and neighbors</li>
<li>Natural resources</li>
<li>Climate and geography challenges</li>
<li>Strategic importance</li>
</ul>

<h3>Demographics</h3>
<ul>
<li>Population size and growth</li>
<li>Ethnic and religious composition</li>
<li>Languages spoken</li>
<li>Urban vs. rural distribution</li>
</ul>

<h3>Economy</h3>
<ul>
<li>GDP and income level (developed, developing, LDC)</li>
<li>Major industries and exports</li>
<li>Economic challenges</li>
<li>Trade relationships</li>
</ul>

<h3>Government</h3>
<ul>
<li>Political system</li>
<li>Current leadership</li>
<li>Major political parties</li>
<li>Stability and recent changes</li>
</ul>

<h2>Step 2: Foreign Policy Research</h2>
<p>Understand your country's international stance:</p>

<h3>Alliances and Blocs</h3>
<ul>
<li>Regional organizations (EU, AU, ASEAN, etc.)</li>
<li>Military alliances (NATO, etc.)</li>
<li>Economic partnerships</li>
<li>Voting blocs in the UN</li>
</ul>

<h3>Key Relationships</h3>
<ul>
<li>Major allies</li>
<li>Historical adversaries</li>
<li>Trade partners</li>
<li>Donor/recipient relationships</li>
</ul>

<h3>UN Engagement</h3>
<ul>
<li>Voting patterns in GA resolutions</li>
<li>Treaty ratification status</li>
<li>Contributions to UN budget</li>
<li>Peacekeeping participation</li>
</ul>

<h2>Step 3: Topic-Specific Research</h2>
<p>For your committee's topic, research:</p>

<h3>Domestic Impact</h3>
<ul>
<li>How does this issue affect your country?</li>
<li>What domestic policies exist?</li>
<li>What are the statistics for your country?</li>
</ul>

<h3>Historical Position</h3>
<ul>
<li>Past votes on related resolutions</li>
<li>Statements in UN forums</li>
<li>Treaties signed or rejected</li>
<li>Previous actions taken</li>
</ul>

<h3>Current Policy</h3>
<ul>
<li>Official government statements</li>
<li>Recent initiatives</li>
<li>Allocated resources</li>
<li>Stated priorities</li>
</ul>

<h2>Step 4: Research Sources</h2>

<h3>Official Sources</h3>
<ul>
<li><strong>UN.org</strong> (resolutions, voting records)</li>
<li>Country's UN Mission website</li>
<li>Government websites (.gov domains)</li>
<li>Ministry of Foreign Affairs statements</li>
</ul>

<h3>News Sources</h3>
<ul>
<li>BBC, Reuters, AP (international)</li>
<li>Country's major newspapers</li>
<li>Regional news sources</li>
<li>Academic journals</li>
</ul>

<h3>Data Sources</h3>
<ul>
<li>World Bank</li>
<li>IMF</li>
<li>WHO</li>
<li>UNDP Human Development Index</li>
</ul>

<h3>Think Tanks</h3>
<ul>
<li>Council on Foreign Relations</li>
<li>Chatham House</li>
<li>Brookings Institution</li>
<li>Regional think tanks</li>
</ul>

<h2>Step 5: Understanding Positions</h2>
<p>Consider <strong>why</strong> your country holds its positions:</p>

<h3>Historical Context</h3>
<ul>
<li>Colonial history</li>
<li>Past conflicts</li>
<li>Cultural influences</li>
<li>Economic development path</li>
</ul>

<h3>National Interests</h3>
<ul>
<li>Security concerns</li>
<li>Economic priorities</li>
<li>Regional influence</li>
<li>Domestic politics</li>
</ul>

<h3>Ideological Factors</h3>
<ul>
<li>Political ideology</li>
<li>Religious influences</li>
<li>Cultural values</li>
<li>Development philosophy</li>
</ul>

<h2>Step 6: Finding Your Bloc</h2>
<p>Identify natural allies:</p>

<h3>Geographic Blocs</h3>
<ul>
<li>African Group</li>
<li>Asia-Pacific Group</li>
<li>Eastern European Group</li>
<li>Latin American and Caribbean Group (GRULAC)</li>
<li>Western European and Others Group (WEOG)</li>
</ul>

<h3>Issue-Based Groups</h3>
<ul>
<li>G77 + China (developing nations)</li>
<li>European Union</li>
<li>Arab League</li>
<li>Small Island Developing States (SIDS)</li>
<li>Landlocked Developing Countries</li>
</ul>

<hr>

<h2>Research Checklist</h2>
<p>Before committee, you should know:</p>
<ul>
<li>Basic country facts (capital, leader, population)</li>
<li>Economic status and major challenges</li>
<li>Political system and stability</li>
<li>Regional alliances and relationships</li>
<li>UN voting history on related issues</li>
<li>Treaties ratified related to topic</li>
<li>Domestic policies on the topic</li>
<li>Official statements on the issue</li>
<li>Natural bloc partners</li>
<li>Potential areas of compromise</li>
</ul>
`,
    relatedResources: ["delegate-handbook", "position-paper-template"],
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
