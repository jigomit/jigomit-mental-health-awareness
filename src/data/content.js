export const serviceHighlights = [
  {
    title: 'Confidential Counselling',
    copy:
      'One-on-one and group sessions led by trauma-informed clinicians with sliding-scale pricing and multilingual support.',
    icon: '🧠',
    link: '/services#counselling'
  },
  {
    title: '24/7 Crisis Support',
    copy:
      'Rapid response helplines, safety planning, and peer warm lines that stay with callers until they feel steady.',
    icon: '📞',
    link: '/get-help'
  },
  {
    title: 'Campaigns & Workshops',
    copy:
      'Community activations, workplace trainings, and school outreach that dismantle stigma and spark donations.',
    icon: '🤝',
    link: '/events'
  }
];

export const quickStats = [
  { label: 'People Helped', value: '18,000+' },
  { label: 'Expert Counsellors', value: '120+' },
  { label: 'Countries Served', value: '42' },
  { label: 'Response Time', value: '<30 sec' }
];

export const testimonials = [
  {
    quote:
      'The helpline advocate stayed with me for 40 minutes and texted local resources so I never felt alone between appointments.',
    name: 'Jordan, survivor & volunteer'
  },
  {
    quote:
      'Our students now have a trusted counselor every Thursday thanks to donors funding rural teletherapy.',
    name: 'Principal, Hope Valley High'
  },
  {
    quote:
      'Their campaigns pair empathy with action—every message includes a next step and privacy assurance.',
    name: 'Maya, corporate partner'
  }
];

export const resourceLibrary = [
  {
    title: 'Free Online Mental Health Chat Support 24/7',
    type: 'Guide',
    length: '8-minute read',
    link: '/blog/free-online-mental-health-chat-support-24-7-talk-to-counselor',
    description: 'Connect with trained counselors through free anonymous online chat anytime you need support.'
  },
  {
    title: 'How to Find Free Therapy Without Insurance',
    type: 'Guide',
    length: '10-minute read',
    link: '/blog/how-to-find-free-therapy-near-me-no-insurance-low-cost-options',
    description: 'Discover low-cost therapy options including sliding scale fees, community centers, and online resources.'
  },
  {
    title: 'Free Online Support Groups for Anxiety & Depression',
    type: 'Article',
    length: '9-minute read',
    link: '/blog/free-online-support-groups-anxiety-depression-mental-health',
    description: 'Find free peer support communities and connect with others who understand what you are going through.'
  }
];

export const impactTimeline = [
  {
    year: '2021',
    title: 'Launched community responder pilot',
    detail: 'Partnered with three cities to deploy non-police crisis teams that handle 2k+ calls each month.'
  },
  {
    year: '2022',
    title: 'Scaled 988 readiness trainings',
    detail: 'Trained 5,400 hotline staff on compassionate scripts, de-escalation, and secure follow-up workflows.'
  },
  {
    year: '2023',
    title: 'Global youth storytelling tours',
    detail: 'Elevated 32 young advocates who now mentor peers and influence national policy statements.'
  },
  {
    year: '2024',
    title: 'AI triage copilot beta',
    detail: 'Ethical chatbot prototype speeds up matching between callers and clinicians within 2 minutes.'
  }
];

export const helplineDirectory = [
  { region: 'United States', phone: '988', text: 'Text 988', availability: '24/7 nationwide' },
  { region: 'Canada', phone: '1-833-456-4566', text: 'Text 45645', availability: 'Available 24/7' },
  { region: 'United Kingdom', phone: '116 123', text: 'Text SHOUT to 85258', availability: 'Samaritans, confidential' },
  { region: 'Australia', phone: '13 11 14', text: 'Text 0477 13 11 14', availability: 'Lifeline, around the clock' }
];

export const eventsSchedule = [
  {
    date: 'Jan 15, 2025',
    name: 'Compassionate Classrooms Workshop',
    location: 'Virtual',
    detail: 'Live training for educators to recognize early warning signs.'
  },
  {
    date: 'Feb 08, 2025',
    name: 'Community Sunrise Walk',
    location: 'Austin, TX',
    detail: 'Fundraising walk with wellbeing check-in tents and art therapy corners.'
  },
  {
    date: 'Mar 22, 2025',
    name: 'Policy Pulse Briefing',
    location: 'Washington, DC',
    detail: 'Briefing on national mental health legislation with advocates and senators.'
  }
];

export const donationTiers = [
  { amount: 35, label: 'Covers one live chat triage session', impact: 'Outfit a volunteer with secure texting tools.' },
  { amount: 75, label: 'Funds three therapy sessions', impact: 'Provide a month of care for an uninsured teen.' },
  { amount: 150, label: 'Backs an entire campaign day', impact: 'Deploy pop-up support kiosks in transit hubs.' }
];

export const confidentialityNotes =
  'We store the minimum data possible, encrypt helpline logs, and never sell supporter information.';

export const volunteerOptions = [
  'Helpline Advocate',
  'Campaign Captain',
  'Clinical Advisor',
  'Corporate Partner'
];

export const seoChecklist = [
  'Unique title and meta description declared per route via usePageMeta composable.',
  'Semantic headings (H1-H3) reflect visitor intent and include high-intent keywords.',
  'Descriptive alt text on every illustrative asset with lazy loading for performance.',
  'Internal links to priority conversion pages (Get Help and Donate) from each route.',
  'Readable URL slugs with fast Vite build delivering preloaded critical CSS.'
];

export const accessibilityChecklist = [
  'Color palette meets WCAG AA contrast with testable CSS custom properties.',
  'Keyboard-focus styles are visible and skip-to-content shortcuts appear on tab.',
  'Animation controls respect prefers-reduced-motion and manual toggle state.',
  'ARIA labels on sticky helpline button, modal, and navigation toggles.',
  'Forms use associated labels, helpful hints, and error states ready for validation.'
];

export const heroAlternatives = {
  paragraph:
    'Mental Health Awareness surrounds every visitor with immediate care pathways—whether you need a quiet text-based check-in, an on-site counsellor, or a community that rallies until the crisis passes.',
  ctas: ['Talk to Someone Now', 'Book a Counselling Intro Call', 'Download the Safety Planning Guide']
};

// Blog post images - 8 mental health topics with local images
const blogImg1 = '/blog-anxiety.jpg';
const blogImg2 = '/blog-depression.jpg';
const blogImg3 = '/blog-stress.jpg';
const blogImg4 = '/blog-wellness.jpg';
const blogImg5 = '/meditation-calm.jpg';
const blogImg6 = '/peaceful-nature.jpg';
const blogImg7 = '/healing-sunset.jpg';
const blogImg8 = '/community-support.jpg';

export const blogPosts = [
  {
    slug: 'free-online-mental-health-chat-support-24-7-talk-to-counselor',
    title: 'Free Online Mental Health Chat Support 24/7: Talk to a Counselor Anonymously',
    tag: 'Online Support',
    tagColor: 'blue',
    excerpt: 'Connect with trained mental health counselors through free online chat anytime. Learn about anonymous support options and how text-based therapy can help.',
    date: 'December 15, 2025',
    readTime: 8,
    image: blogImg1,
    content: `
      <p>Sometimes talking on the phone feels too overwhelming. Free online mental health chat support offers a comfortable alternative—connect with trained counselors through text-based conversations, completely anonymously and at no cost.</p>

      <h2>Why Choose Online Chat Support?</h2>
      <p>Text-based mental health support has unique advantages:</p>
      <ul>
        <li><strong>Anonymous:</strong> No need to share your name or identity</li>
        <li><strong>Private:</strong> Chat from anywhere without being overheard</li>
        <li><strong>Comfortable:</strong> Express yourself through writing at your own pace</li>
        <li><strong>Accessible:</strong> Available 24/7 from any device</li>
        <li><strong>Free:</strong> No insurance or payment required</li>
      </ul>

      <div class="highlight-box">
        <strong>Free Online Chat Resources:</strong>
        <ul>
          <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
          <li><strong>988 Lifeline Chat:</strong> Visit 988lifeline.org</li>
          <li><strong>IMAlive:</strong> imalive.org - Trained volunteer chat</li>
          <li><strong>7 Cups:</strong> Free listener support and chat rooms</li>
        </ul>
      </div>

      <h2>What to Expect from Online Chat Support</h2>
      <ol>
        <li><strong>Quick connection:</strong> Usually matched with a counselor within minutes</li>
        <li><strong>Confidential conversation:</strong> Share what's on your mind safely</li>
        <li><strong>Active listening:</strong> Counselors are trained to understand and respond</li>
        <li><strong>Coping strategies:</strong> Learn techniques to manage difficult emotions</li>
        <li><strong>Resource referrals:</strong> Get connected to additional support if needed</li>
      </ol>

      <h2>Who Can Benefit from Chat Support?</h2>
      <ul>
        <li>People who feel more comfortable writing than talking</li>
        <li>Those in situations where they can't speak privately</li>
        <li>Anyone experiencing anxiety about phone calls</li>
        <li>People seeking support outside business hours</li>
        <li>Those who want to process thoughts before sharing</li>
      </ul>

      <blockquote>"Sometimes the hardest conversations are easier to type. Your feelings are valid however you choose to express them."</blockquote>

      <h2>Tips for Effective Chat Support</h2>
      <ul>
        <li>Find a quiet, private space to chat</li>
        <li>Be honest about what you're experiencing</li>
        <li>Take your time—there's no rush</li>
        <li>Ask questions if something isn't clear</li>
        <li>Save helpful resources shared during the conversation</li>
      </ul>

      <p class="tip">Remember: Reaching out through chat is just as valid as calling. What matters is that you're taking a step toward feeling better. Support is available whenever you need it.</p>
    `
  },
  {
    slug: 'how-to-find-free-therapy-near-me-no-insurance-low-cost-options',
    title: 'How to Find Free Therapy Near Me Without Insurance: Low-Cost Mental Health Options',
    tag: 'Affordable Care',
    tagColor: 'purple',
    excerpt: 'Discover free and low-cost therapy options in your area. Learn about sliding scale fees, community mental health centers, and online resources for affordable counseling.',
    date: 'December 12, 2025',
    readTime: 10,
    image: blogImg2,
    content: `
      <p>Mental health care shouldn't be a luxury. If you're searching for free therapy without insurance, there are more options than you might think. This guide will help you find affordable mental health support in your community.</p>

      <h2>Free Mental Health Resources</h2>
      <p>These services are completely free:</p>
      <ul>
        <li><strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988 for 24/7 support</li>
        <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
        <li><strong>SAMHSA Helpline:</strong> 1-800-662-4357 for treatment referrals</li>
        <li><strong>NAMI Helpline:</strong> 1-800-950-6264 for support and resources</li>
      </ul>

      <div class="highlight-box">
        <strong>Community Mental Health Centers</strong>
        <p>Federally funded community mental health centers are required to provide services regardless of ability to pay. Search "community mental health center near me" or visit findtreatment.gov</p>
      </div>

      <h2>Low-Cost Therapy Options</h2>

      <h3>1. Sliding Scale Therapists</h3>
      <p>Many private therapists offer reduced fees based on income:</p>
      <ul>
        <li>Ask directly: "Do you offer sliding scale fees?"</li>
        <li>Search Open Path Collective (sessions $30-$80)</li>
        <li>Check Psychology Today's filter for sliding scale</li>
        <li>Fees can range from $20-$60 per session</li>
      </ul>

      <h3>2. University Training Clinics</h3>
      <p>Graduate students provide therapy under supervision:</p>
      <ul>
        <li>Often $5-$30 per session</li>
        <li>Students are closely supervised by licensed professionals</li>
        <li>Search "[your city] university psychology clinic"</li>
        <li>Quality care at significantly reduced rates</li>
      </ul>

      <h3>3. Online Therapy Platforms</h3>
      <ul>
        <li><strong>7 Cups:</strong> Free listener support and affordable therapy</li>
        <li><strong>Open Path:</strong> $30-$80 per session with licensed therapists</li>
        <li><strong>BetterHelp/Talkspace:</strong> Financial aid available</li>
      </ul>

      <h3>4. Support Groups (Free)</h3>
      <ul>
        <li>NAMI support groups nationwide</li>
        <li>DBSA (Depression and Bipolar Support Alliance)</li>
        <li>AA, NA, and other 12-step programs</li>
        <li>Grief support groups through hospices</li>
      </ul>

      <h2>Questions to Ask When Calling</h2>
      <ul>
        <li>"Do you offer sliding scale fees?"</li>
        <li>"What is your lowest rate for uninsured clients?"</li>
        <li>"Do you have a waiting list for reduced-fee services?"</li>
        <li>"Can you recommend other low-cost options?"</li>
      </ul>

      <blockquote>"Asking about cost doesn't make you a burden—it makes you resourceful. Good therapists understand financial barriers."</blockquote>

      <h2>State and Local Programs</h2>
      <ul>
        <li>Medicaid (if you qualify)</li>
        <li>State-funded mental health programs</li>
        <li>County mental health services</li>
        <li>Nonprofit counseling centers</li>
        <li>Religious organizations with counseling services</li>
      </ul>

      <p class="tip">Remember: Financial barriers shouldn't stop you from getting help. With persistence, you can find affordable mental health care. Start with one phone call today.</p>
    `
  },
  {
    slug: 'mental-health-awareness-campaign-ideas-schools-workplace-community',
    title: 'Mental Health Awareness Campaign Ideas for Schools, Workplaces, and Communities',
    tag: 'Campaigns',
    tagColor: 'green',
    excerpt: 'Plan impactful mental health awareness campaigns with proven ideas for schools, workplaces, and community organizations. Download free resources and templates.',
    date: 'December 8, 2025',
    readTime: 12,
    image: blogImg3,
    content: `
      <p>Mental health awareness campaigns save lives by reducing stigma and connecting people with resources. Whether you're organizing for a school, workplace, or community, these proven ideas will help you create meaningful impact.</p>

      <h2>Why Mental Health Campaigns Matter</h2>
      <ul>
        <li>1 in 5 adults experience mental illness each year</li>
        <li>Stigma prevents 60% of people from seeking help</li>
        <li>Awareness campaigns increase help-seeking behavior by 25%</li>
        <li>Early intervention improves outcomes dramatically</li>
      </ul>

      <div class="highlight-box">
        <strong>Key Awareness Dates:</strong>
        <ul>
          <li><strong>May:</strong> Mental Health Awareness Month</li>
          <li><strong>September:</strong> Suicide Prevention Month</li>
          <li><strong>October 10:</strong> World Mental Health Day</li>
          <li><strong>First week of October:</strong> Mental Illness Awareness Week</li>
        </ul>
      </div>

      <h2>School Campaign Ideas</h2>

      <h3>For Students</h3>
      <ul>
        <li>Peer support training programs</li>
        <li>"It's OK to Not Be OK" poster campaigns</li>
        <li>Mental health resource fairs</li>
        <li>Stress-relief activity stations during exams</li>
        <li>Anonymous question boxes with counselor responses</li>
      </ul>

      <h3>For Staff</h3>
      <ul>
        <li>Mental Health First Aid training</li>
        <li>Warning signs recognition workshops</li>
        <li>Self-care for educators sessions</li>
        <li>Crisis response protocol reviews</li>
      </ul>

      <h2>Workplace Campaign Ideas</h2>
      <ul>
        <li>Lunch-and-learn mental health workshops</li>
        <li>Employee mental health champion programs</li>
        <li>Mindfulness and meditation sessions</li>
        <li>Mental health days policy advocacy</li>
        <li>EAP (Employee Assistance Program) awareness drives</li>
        <li>Leadership mental health training</li>
        <li>Desk wellness kits with stress-relief tools</li>
      </ul>

      <h2>Community Campaign Ideas</h2>
      <ul>
        <li>Mental health awareness walks/runs</li>
        <li>Community storytelling events</li>
        <li>Free mental health screening days</li>
        <li>Resource distribution at public events</li>
        <li>Social media awareness challenges</li>
        <li>Local business partnership programs</li>
        <li>Art therapy community workshops</li>
      </ul>

      <blockquote>"Every conversation about mental health helps break down stigma. Your campaign could be the reason someone reaches out for help."</blockquote>

      <h2>Campaign Planning Checklist</h2>
      <ol>
        <li>Define your goals and target audience</li>
        <li>Choose appropriate dates and duration</li>
        <li>Partner with mental health organizations</li>
        <li>Prepare resources and helpline information</li>
        <li>Train volunteers and speakers</li>
        <li>Create promotional materials</li>
        <li>Plan follow-up support resources</li>
        <li>Measure impact and gather feedback</li>
      </ol>

      <h2>Free Resources for Campaigns</h2>
      <ul>
        <li>NAMI campaign toolkits</li>
        <li>SAMHSA promotional materials</li>
        <li>Mental Health America resources</li>
        <li>WHO World Mental Health Day materials</li>
      </ul>

      <p class="tip">Remember: The most effective campaigns combine education with action. Always include specific resources and helpline numbers so people know exactly where to get help.</p>
    `
  },
  {
    slug: 'volunteer-mental-health-helpline-training-become-crisis-counselor',
    title: 'Volunteer Mental Health Helpline Training: How to Become a Crisis Counselor',
    tag: 'Volunteering',
    tagColor: 'teal',
    excerpt: 'Learn how to become a trained crisis helpline volunteer. Discover training programs, requirements, and how you can make a difference in mental health support.',
    date: 'December 5, 2025',
    readTime: 9,
    image: blogImg4,
    content: `
      <p>Crisis helpline volunteers save lives every day. If you want to make a meaningful difference in mental health support, becoming a trained crisis counselor is one of the most impactful ways to help. Here's everything you need to know about getting started.</p>

      <h2>Why Volunteer for a Crisis Helpline?</h2>
      <ul>
        <li>Directly help people in their most difficult moments</li>
        <li>Gain valuable counseling and communication skills</li>
        <li>Flexible scheduling—volunteer from home</li>
        <li>Build experience for mental health careers</li>
        <li>Join a supportive community of helpers</li>
        <li>Make a real difference in suicide prevention</li>
      </ul>

      <div class="highlight-box">
        <strong>Organizations Seeking Volunteers:</strong>
        <ul>
          <li><strong>Crisis Text Line:</strong> Text-based crisis support</li>
          <li><strong>988 Suicide & Crisis Lifeline:</strong> Phone and chat</li>
          <li><strong>NAMI Helpline:</strong> Mental health information</li>
          <li><strong>IMAlive:</strong> Online chat crisis support</li>
          <li><strong>Local crisis centers:</strong> Community-based support</li>
        </ul>
      </div>

      <h2>Training Requirements</h2>

      <h3>Typical Requirements</h3>
      <ul>
        <li>Must be 18+ years old (some require 21+)</li>
        <li>Commit to minimum volunteer hours (usually 4-8 hours/week)</li>
        <li>Complete comprehensive training (30-50+ hours)</li>
        <li>Pass background check</li>
        <li>Reliable internet connection for remote volunteering</li>
        <li>Emotional stability and self-awareness</li>
      </ul>

      <h3>What Training Covers</h3>
      <ul>
        <li>Active listening and empathy skills</li>
        <li>Crisis de-escalation techniques</li>
        <li>Suicide risk assessment</li>
        <li>Safety planning protocols</li>
        <li>Confidentiality and ethics</li>
        <li>Self-care for helpers</li>
        <li>Resource referral procedures</li>
      </ul>

      <h2>How to Apply</h2>
      <ol>
        <li>Research organizations in your area or online opportunities</li>
        <li>Submit an application and personal statement</li>
        <li>Complete an interview process</li>
        <li>Attend orientation and training sessions</li>
        <li>Complete supervised practice shifts</li>
        <li>Begin independent volunteer shifts</li>
      </ol>

      <blockquote>"You don't need to have all the answers. Sometimes the most powerful thing you can do is simply listen and let someone know they're not alone."</blockquote>

      <h2>Skills You'll Develop</h2>
      <ul>
        <li>Active listening and reflection</li>
        <li>Emotional regulation</li>
        <li>Crisis intervention</li>
        <li>Empathetic communication</li>
        <li>Boundary setting</li>
        <li>Resource navigation</li>
      </ul>

      <h2>Self-Care for Volunteers</h2>
      <p>Helping others can be emotionally demanding:</p>
      <ul>
        <li>Attend regular supervision and support groups</li>
        <li>Practice personal self-care routines</li>
        <li>Set boundaries between volunteering and personal life</li>
        <li>Seek your own support when needed</li>
        <li>Take breaks when feeling overwhelmed</li>
      </ul>

      <p class="tip">Remember: Crisis counseling volunteers are trained, supported, and supervised. You won't be alone in this work. If you have the heart to help, training will give you the skills.</p>
    `
  },
  {
    slug: 'free-online-support-groups-anxiety-depression-mental-health',
    title: 'Free Online Support Groups for Anxiety and Depression: Find Your Community',
    tag: 'Support Groups',
    tagColor: 'cyan',
    excerpt: 'Connect with others who understand. Find free online support groups for anxiety, depression, and other mental health challenges. Join from anywhere, anytime.',
    date: 'December 1, 2025',
    readTime: 9,
    image: blogImg5,
    content: `
      <p>You don't have to face anxiety or depression alone. Free online support groups connect you with people who truly understand what you're going through. Whether you prefer live meetings or message boards, there's a community waiting for you.</p>

      <h2>Benefits of Support Groups</h2>
      <ul>
        <li><strong>You're not alone:</strong> Connect with others who understand</li>
        <li><strong>Learn coping strategies:</strong> Share what works</li>
        <li><strong>Reduce isolation:</strong> Build meaningful connections</li>
        <li><strong>Free:</strong> No cost to participate</li>
        <li><strong>Flexible:</strong> Join from home, anytime</li>
        <li><strong>Anonymous options:</strong> Share without revealing identity</li>
      </ul>

      <div class="highlight-box">
        <strong>Top Free Online Support Communities:</strong>
        <ul>
          <li><strong>NAMI Connection:</strong> Peer-led recovery groups</li>
          <li><strong>DBSA Online:</strong> Depression and bipolar support</li>
          <li><strong>Anxiety and Depression Association:</strong> Peer communities</li>
          <li><strong>7 Cups:</strong> Free chat rooms and forums</li>
          <li><strong>Mental Health America:</strong> Screening and support</li>
        </ul>
      </div>

      <h2>Types of Online Support Groups</h2>

      <h3>Live Video/Audio Groups</h3>
      <ul>
        <li>Real-time interaction with facilitator</li>
        <li>Scheduled meeting times</li>
        <li>More personal connection</li>
        <li>Usually 60-90 minutes</li>
      </ul>

      <h3>Chat-Based Groups</h3>
      <ul>
        <li>Text-based conversations</li>
        <li>More anonymous</li>
        <li>Can participate while doing other things</li>
        <li>Drop in anytime</li>
      </ul>

      <h3>Forum/Message Board Communities</h3>
      <ul>
        <li>Post and respond at your own pace</li>
        <li>Read others' experiences</li>
        <li>Build ongoing relationships</li>
        <li>24/7 access</li>
      </ul>

      <h2>Finding the Right Group</h2>
      <ul>
        <li>Consider your specific needs (anxiety, depression, grief, etc.)</li>
        <li>Try different formats to see what fits</li>
        <li>Look for moderated/facilitated groups</li>
        <li>Check if it's peer-led or professionally led</li>
        <li>Give it a few sessions before deciding</li>
      </ul>

      <blockquote>"In the right support group, you realize you're not broken—you're human. And you're surrounded by others who get it."</blockquote>

      <h2>Support Group Etiquette</h2>
      <ul>
        <li>Respect confidentiality—what's shared stays in the group</li>
        <li>Listen as much as you share</li>
        <li>Avoid giving unsolicited advice</li>
        <li>Be supportive, not judgmental</li>
        <li>Speak from your own experience</li>
      </ul>

      <h2>Specialized Support Groups</h2>
      <ul>
        <li>Grief and loss support</li>
        <li>PTSD and trauma survivors</li>
        <li>Addiction recovery</li>
        <li>Caregiver support</li>
        <li>LGBTQ+ mental health</li>
        <li>New parents and postpartum</li>
        <li>Chronic illness support</li>
      </ul>

      <p class="tip">Remember: Support groups complement but don't replace professional treatment. If you're in crisis, reach out to a helpline first. Groups work best as part of your overall mental health toolkit.</p>
    `
  },
  {
    slug: 'confidential-counselling-services-what-to-expect-first-session',
    title: 'Confidential Counselling Services: What to Expect in Your First Therapy Session',
    tag: 'Counselling',
    tagColor: 'pink',
    excerpt: 'Nervous about your first counselling session? Learn exactly what to expect, how confidentiality works, and how to prepare for therapy.',
    date: 'November 28, 2025',
    readTime: 10,
    image: blogImg6,
    content: `
      <p>Taking the step to see a counsellor can feel intimidating, especially if you don't know what to expect. Understanding how confidential counselling works can help ease your anxiety and make your first session more productive.</p>

      <h2>How Confidentiality Works</h2>
      <p>Your privacy is protected by law and professional ethics:</p>
      <ul>
        <li><strong>What you share stays private:</strong> Counsellors cannot share your information without consent</li>
        <li><strong>No one will know:</strong> Your employer, family, or insurance can't access session content</li>
        <li><strong>Secure records:</strong> Notes are kept confidential and secure</li>
        <li><strong>Your choice:</strong> You control who knows you're in therapy</li>
      </ul>

      <div class="highlight-box">
        <strong>Limits to Confidentiality:</strong>
        <p>Counsellors must break confidentiality only if there's risk of harm to yourself or others, or in cases of child/elder abuse. They'll explain these limits in your first session.</p>
      </div>

      <h2>What Happens in the First Session</h2>

      <h3>Before You Arrive</h3>
      <ul>
        <li>Complete any intake paperwork</li>
        <li>Prepare questions you want to ask</li>
        <li>Think about what you want to work on</li>
        <li>Know that feeling nervous is normal</li>
      </ul>

      <h3>During the Session</h3>
      <ol>
        <li><strong>Introductions:</strong> Get to know your counsellor</li>
        <li><strong>Confidentiality review:</strong> Understand your privacy rights</li>
        <li><strong>Your story:</strong> Share what brings you to therapy</li>
        <li><strong>Questions:</strong> Counsellor learns about your history and goals</li>
        <li><strong>Treatment planning:</strong> Discuss how you'll work together</li>
        <li><strong>Next steps:</strong> Schedule future appointments</li>
      </ol>

      <h2>Questions to Ask Your Counsellor</h2>
      <ul>
        <li>What type of therapy do you practice?</li>
        <li>What experience do you have with my concerns?</li>
        <li>How often should we meet?</li>
        <li>How will I know if therapy is working?</li>
        <li>What's your cancellation policy?</li>
        <li>How do you handle emergencies between sessions?</li>
      </ul>

      <blockquote>"The therapeutic relationship is built on trust. A good counsellor creates a safe space where you can be completely honest without judgment."</blockquote>

      <h2>Types of Counselling Available</h2>
      <ul>
        <li><strong>Individual therapy:</strong> One-on-one sessions</li>
        <li><strong>Couples counselling:</strong> Work on relationships</li>
        <li><strong>Family therapy:</strong> Address family dynamics</li>
        <li><strong>Group therapy:</strong> Share with others facing similar issues</li>
        <li><strong>Online/telehealth:</strong> Sessions via video or phone</li>
      </ul>

      <h2>Tips for Getting the Most from Therapy</h2>
      <ul>
        <li>Be honest, even when it's uncomfortable</li>
        <li>Share what's really on your mind</li>
        <li>Give feedback if something isn't working</li>
        <li>Do homework or exercises between sessions</li>
        <li>Be patient—change takes time</li>
        <li>Attend sessions consistently</li>
      </ul>

      <h2>It's Okay If...</h2>
      <ul>
        <li>You cry during sessions</li>
        <li>You don't know what to say</li>
        <li>You feel worse before feeling better</li>
        <li>You need to try different counsellors</li>
        <li>Progress isn't linear</li>
      </ul>

      <p class="tip">Remember: Finding the right counsellor may take time. If you don't feel comfortable with your first therapist, it's okay to try someone else. The relationship matters as much as the techniques.</p>
    `
  }
];
