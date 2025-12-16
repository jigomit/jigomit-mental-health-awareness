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
    title: 'Natural Anxiety Relief: Calm Your Mind Fast',
    type: 'Guide',
    length: '10-minute read',
    link: '/blog/natural-anxiety-relief-techniques-that-work-fast',
    description: 'Proven natural techniques including breathing exercises and grounding methods to reduce anxiety quickly.'
  },
  {
    title: 'How to Help Someone with Depression',
    type: 'Guide',
    length: '12-minute read',
    link: '/blog/how-to-help-someone-with-depression-complete-guide',
    description: 'Evidence-based approach for supporting loved ones with depression without overstepping boundaries.'
  },
  {
    title: 'Signs You Need Therapy: When to Seek Help',
    type: 'Article',
    length: '9-minute read',
    link: '/blog/signs-you-need-therapy-when-to-seek-professional-mental-health-help',
    description: 'Know when professional mental health support could help and what to expect from therapy.'
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
    slug: 'free-24-7-mental-health-crisis-helpline-talk-to-someone-now',
    title: 'Free 24/7 Mental Health Crisis Helpline: Talk to Someone Now When You Need Help',
    tag: 'Crisis Support',
    tagColor: 'blue',
    excerpt: 'Access free confidential mental health support anytime. Learn about crisis helplines, what to expect when you call, and how trained counselors can help.',
    date: 'December 15, 2025',
    readTime: 8,
    image: blogImg1,
    content: `
      <p>When you're struggling with your mental health, knowing where to turn for help can be overwhelming. Free 24/7 mental health helplines provide immediate, confidential support from trained counselors who understand what you're going through.</p>

      <h2>Why Call a Mental Health Helpline?</h2>
      <p>Crisis helplines offer immediate support when you need it most:</p>
      <ul>
        <li><strong>Available 24/7:</strong> Help is always just a phone call away</li>
        <li><strong>Completely free:</strong> No insurance or payment required</li>
        <li><strong>100% confidential:</strong> Your privacy is protected</li>
        <li><strong>Trained counselors:</strong> Speak with professionals who care</li>
        <li><strong>No judgment:</strong> Every concern is valid and taken seriously</li>
      </ul>

      <div class="highlight-box">
        <strong>Key Crisis Helplines:</strong>
        <ul>
          <li><strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988 (US)</li>
          <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
          <li><strong>SAMHSA National Helpline:</strong> 1-800-662-4357</li>
          <li><strong>Veterans Crisis Line:</strong> 988, Press 1</li>
        </ul>
      </div>

      <h2>What Happens When You Call?</h2>
      <p>Many people hesitate to call because they don't know what to expect. Here's what typically happens:</p>
      <ol>
        <li><strong>A counselor answers:</strong> You'll be connected with a trained professional</li>
        <li><strong>They listen:</strong> Share as much or as little as you're comfortable with</li>
        <li><strong>They help you cope:</strong> Learn techniques to manage your feelings</li>
        <li><strong>They provide resources:</strong> Get connected to ongoing support if needed</li>
        <li><strong>You stay in control:</strong> The conversation moves at your pace</li>
      </ol>

      <h2>When Should You Call?</h2>
      <p>You don't have to be in a life-threatening crisis to reach out. Call if you're experiencing:</p>
      <ul>
        <li>Overwhelming anxiety or panic</li>
        <li>Thoughts of self-harm or suicide</li>
        <li>Intense sadness or hopelessness</li>
        <li>Trauma or grief</li>
        <li>Relationship problems causing distress</li>
        <li>Any mental health concern you need to talk about</li>
      </ul>

      <blockquote>"Asking for help is not a sign of weakness. It's one of the bravest things you can do."</blockquote>

      <h2>Other Ways to Get Help</h2>
      <ul>
        <li><strong>Text support:</strong> Text HOME to 741741 for Crisis Text Line</li>
        <li><strong>Online chat:</strong> Many helplines offer chat options</li>
        <li><strong>Peer support:</strong> Connect with others who understand</li>
        <li><strong>Local resources:</strong> Find therapists and support groups near you</li>
      </ul>

      <p class="tip">Remember: You deserve support. No matter what you're facing, trained counselors are ready to listen and help 24 hours a day, 7 days a week. You are not alone.</p>
    `
  },
  {
    slug: 'how-to-help-someone-with-depression-complete-guide',
    title: 'How to Help Someone with Depression: A Complete Guide for Friends and Family',
    tag: 'Supporting Others',
    tagColor: 'purple',
    excerpt: 'Learn how to recognize depression in loved ones and provide meaningful support without overstepping boundaries.',
    date: 'December 12, 2025',
    readTime: 12,
    image: blogImg2,
    content: `
      <p>Watching someone you love struggle with depression can feel helpless. While you can't fix their depression, your support can make a real difference in their recovery journey.</p>

      <h2>Recognizing Depression in Someone You Love</h2>
      <p>Depression may show up differently than you expect:</p>
      <ul>
        <li><strong>Withdrawal:</strong> Avoiding social activities they once enjoyed</li>
        <li><strong>Changes in sleep:</strong> Sleeping too much or too little</li>
        <li><strong>Irritability:</strong> Increased frustration or anger</li>
        <li><strong>Fatigue:</strong> Constant tiredness despite rest</li>
        <li><strong>Neglecting responsibilities:</strong> Struggling with daily tasks</li>
        <li><strong>Physical complaints:</strong> Unexplained aches and pains</li>
      </ul>

      <div class="highlight-box">
        <strong>What NOT to Say:</strong>
        <ul>
          <li>"Just snap out of it"</li>
          <li>"Other people have it worse"</li>
          <li>"You don't look depressed"</li>
          <li>"Have you tried being more positive?"</li>
          <li>"It's all in your head"</li>
        </ul>
      </div>

      <h2>How to Offer Meaningful Support</h2>

      <h3>1. Start the Conversation</h3>
      <p>Choose a private, comfortable moment:</p>
      <ul>
        <li>"I've noticed you seem down lately. I'm here if you want to talk."</li>
        <li>"I care about you and I'm worried. How are you really doing?"</li>
        <li>"I'm here for you, no matter what you're going through."</li>
      </ul>

      <h3>2. Listen Without Fixing</h3>
      <p>Your presence matters more than solutions:</p>
      <ul>
        <li>Give them your full attention</li>
        <li>Don't interrupt or rush to give advice</li>
        <li>Validate their feelings: "That sounds really hard"</li>
        <li>Avoid minimizing: Don't say "at least..."</li>
      </ul>

      <h3>3. Offer Practical Help</h3>
      <p>Depression makes everyday tasks overwhelming:</p>
      <ul>
        <li>Help with groceries, cooking, or cleaning</li>
        <li>Offer to drive them to appointments</li>
        <li>Sit with them while they make phone calls</li>
        <li>Help research therapists or support groups</li>
      </ul>

      <h3>4. Stay Connected</h3>
      <p>Don't give up if they push you away:</p>
      <ul>
        <li>Send regular check-in messages</li>
        <li>Invite them to low-pressure activities</li>
        <li>Show up consistently, even briefly</li>
        <li>Remind them you're there without pressure</li>
      </ul>

      <h3>5. Encourage Professional Help</h3>
      <p>Gently suggest they speak with a professional:</p>
      <ul>
        <li>"Would you consider talking to someone who can help?"</li>
        <li>"I can help you find a therapist if you'd like"</li>
        <li>"Treatment really works for many people"</li>
      </ul>

      <blockquote>"The greatest gift you can give someone is your presence when they're in pain."</blockquote>

      <h2>Taking Care of Yourself</h2>
      <p>Supporting someone with depression can be draining. Remember:</p>
      <ul>
        <li>You can't pour from an empty cup</li>
        <li>Set healthy boundaries</li>
        <li>Seek your own support when needed</li>
        <li>You're not responsible for their recovery</li>
      </ul>

      <h2>Emergency Situations</h2>
      <p>If they mention suicide or self-harm:</p>
      <ul>
        <li>Take it seriously—always</li>
        <li>Ask directly: "Are you thinking about hurting yourself?"</li>
        <li>Call 988 together or take them to emergency services</li>
        <li>Don't leave them alone if they're in immediate danger</li>
      </ul>

      <p class="tip">Remember: Your love and support matter, even when it doesn't feel like enough. Being present through someone's depression is one of the most meaningful gifts you can give.</p>
    `
  },
  {
    slug: 'natural-anxiety-relief-techniques-that-work-fast',
    title: 'Natural Anxiety Relief Techniques That Work Fast: Calm Your Mind in Minutes',
    tag: 'Anxiety Relief',
    tagColor: 'green',
    excerpt: 'Discover proven natural techniques to reduce anxiety quickly without medication, including breathing exercises and grounding methods.',
    date: 'December 8, 2025',
    readTime: 10,
    image: blogImg3,
    content: `
      <p>When anxiety strikes, you need relief fast. These natural techniques can help calm your nervous system within minutes, giving you tools to manage anxiety anytime, anywhere.</p>

      <h2>Understanding Your Anxiety Response</h2>
      <p>Anxiety activates your fight-or-flight system, causing:</p>
      <ul>
        <li>Racing heart and rapid breathing</li>
        <li>Muscle tension and trembling</li>
        <li>Racing thoughts and worry</li>
        <li>Sweating and nausea</li>
        <li>Feeling of dread or panic</li>
      </ul>
      <p>These techniques work by activating your parasympathetic nervous system—your body's natural calm-down mechanism.</p>

      <div class="highlight-box">
        <strong>The 4-7-8 Breathing Technique:</strong>
        <ol>
          <li>Breathe in through your nose for 4 seconds</li>
          <li>Hold your breath for 7 seconds</li>
          <li>Exhale slowly through your mouth for 8 seconds</li>
          <li>Repeat 3-4 times</li>
        </ol>
        <p>This technique can reduce anxiety within 60 seconds.</p>
      </div>

      <h2>5 Fast-Acting Anxiety Relief Techniques</h2>

      <h3>1. The 5-4-3-2-1 Grounding Method</h3>
      <p>This sensory technique brings you back to the present moment:</p>
      <ul>
        <li><strong>5 things you can SEE:</strong> Look around and name them</li>
        <li><strong>4 things you can TOUCH:</strong> Feel textures around you</li>
        <li><strong>3 things you can HEAR:</strong> Listen for sounds</li>
        <li><strong>2 things you can SMELL:</strong> Notice any scents</li>
        <li><strong>1 thing you can TASTE:</strong> Focus on your mouth</li>
      </ul>

      <h3>2. Cold Water Technique</h3>
      <p>Cold activates your dive reflex, slowing your heart rate:</p>
      <ul>
        <li>Splash cold water on your face</li>
        <li>Hold ice cubes in your hands</li>
        <li>Place a cold compress on your neck</li>
        <li>Run cold water over your wrists</li>
      </ul>

      <h3>3. Progressive Muscle Relaxation</h3>
      <p>Release tension stored in your body:</p>
      <ol>
        <li>Tense your feet muscles for 5 seconds</li>
        <li>Release and notice the relaxation</li>
        <li>Move up through each muscle group</li>
        <li>End with your face and jaw</li>
      </ol>

      <h3>4. Box Breathing</h3>
      <p>Used by Navy SEALs to stay calm under pressure:</p>
      <ul>
        <li>Breathe in for 4 counts</li>
        <li>Hold for 4 counts</li>
        <li>Breathe out for 4 counts</li>
        <li>Hold for 4 counts</li>
        <li>Repeat 4 times</li>
      </ul>

      <h3>5. The STOP Technique</h3>
      <ul>
        <li><strong>S</strong>top what you're doing</li>
        <li><strong>T</strong>ake a breath</li>
        <li><strong>O</strong>bserve your thoughts and feelings</li>
        <li><strong>P</strong>roceed with awareness</li>
      </ul>

      <blockquote>"You don't have to control your thoughts. You just have to stop letting them control you." — Dan Millman</blockquote>

      <h2>Long-Term Natural Anxiety Management</h2>
      <ul>
        <li><strong>Regular exercise:</strong> 30 minutes daily reduces anxiety significantly</li>
        <li><strong>Limit caffeine:</strong> Can worsen anxiety symptoms</li>
        <li><strong>Sleep hygiene:</strong> Poor sleep amplifies anxiety</li>
        <li><strong>Mindfulness practice:</strong> 10 minutes daily rewires your brain</li>
        <li><strong>Social connection:</strong> Reduces stress hormones</li>
      </ul>

      <h2>When to Seek Professional Help</h2>
      <p>Natural techniques are powerful, but consider therapy if:</p>
      <ul>
        <li>Anxiety interferes with daily life</li>
        <li>You experience panic attacks</li>
        <li>Self-help isn't providing relief</li>
        <li>You're avoiding situations due to fear</li>
      </ul>

      <p class="tip">Remember: Anxiety is manageable. With practice, these techniques become automatic responses that help you stay calm in any situation.</p>
    `
  },
  {
    slug: 'signs-you-need-therapy-when-to-seek-professional-mental-health-help',
    title: 'Signs You Need Therapy: When to Seek Professional Mental Health Help',
    tag: 'Getting Help',
    tagColor: 'teal',
    excerpt: 'Wondering if therapy is right for you? Learn the signs that indicate professional mental health support could help.',
    date: 'December 5, 2025',
    readTime: 9,
    image: blogImg4,
    content: `
      <p>Many people wonder if their struggles are "serious enough" for therapy. The truth? You don't need to be in crisis to benefit from professional support. Therapy is for anyone who wants to improve their mental health and quality of life.</p>

      <h2>Common Signs You Could Benefit from Therapy</h2>

      <h3>Emotional Signs</h3>
      <ul>
        <li>Persistent sadness or hopelessness lasting weeks</li>
        <li>Overwhelming anxiety that won't go away</li>
        <li>Frequent mood swings or irritability</li>
        <li>Feeling emotionally numb or disconnected</li>
        <li>Intense anger that's hard to control</li>
      </ul>

      <h3>Behavioral Signs</h3>
      <ul>
        <li>Withdrawing from friends and activities</li>
        <li>Changes in sleep or appetite</li>
        <li>Difficulty completing daily tasks</li>
        <li>Using substances to cope</li>
        <li>Relationship problems that keep recurring</li>
      </ul>

      <h3>Thought Patterns</h3>
      <ul>
        <li>Constant negative self-talk</li>
        <li>Difficulty concentrating or making decisions</li>
        <li>Intrusive thoughts you can't control</li>
        <li>Thinking about death or self-harm</li>
        <li>Feeling like a burden to others</li>
      </ul>

      <div class="highlight-box">
        <strong>You Don't Need to Hit Rock Bottom</strong>
        <p>Therapy works best as prevention and early intervention—not just crisis management. If something feels off, that's reason enough to seek help.</p>
      </div>

      <h2>Life Situations That Benefit from Therapy</h2>
      <ul>
        <li>Major life transitions (divorce, job loss, moving)</li>
        <li>Grief and loss</li>
        <li>Trauma or past abuse</li>
        <li>Relationship difficulties</li>
        <li>Parenting challenges</li>
        <li>Work stress or burnout</li>
        <li>Identity questions</li>
        <li>Wanting personal growth</li>
      </ul>

      <h2>What to Expect from Therapy</h2>
      <p>Many people avoid therapy because they don't know what happens:</p>
      <ul>
        <li><strong>First session:</strong> Getting to know you and your concerns</li>
        <li><strong>Building rapport:</strong> Developing trust with your therapist</li>
        <li><strong>Setting goals:</strong> Identifying what you want to work on</li>
        <li><strong>Learning tools:</strong> Gaining coping skills and insights</li>
        <li><strong>Making progress:</strong> Gradual improvement over time</li>
      </ul>

      <h2>Finding the Right Therapist</h2>
      <ul>
        <li>Consider what type of therapy might help (CBT, talk therapy, etc.)</li>
        <li>Look for someone who specializes in your concerns</li>
        <li>It's okay to try a few therapists before finding the right fit</li>
        <li>Trust your gut—the relationship matters</li>
      </ul>

      <blockquote>"Seeking help is a sign of strength, not weakness. It takes courage to face your struggles."</blockquote>

      <h2>Overcoming Barriers to Therapy</h2>
      <ul>
        <li><strong>"I can handle it myself":</strong> Getting support is handling it</li>
        <li><strong>"It's too expensive":</strong> Many options exist (sliding scale, community centers, online therapy)</li>
        <li><strong>"I don't have time":</strong> Many therapists offer flexible scheduling and telehealth</li>
        <li><strong>"What will people think?":</strong> Therapy is increasingly common and accepted</li>
      </ul>

      <h2>Immediate Help</h2>
      <p>If you're in crisis, don't wait:</p>
      <ul>
        <li>Call 988 (Suicide & Crisis Lifeline)</li>
        <li>Text HOME to 741741 (Crisis Text Line)</li>
        <li>Go to your nearest emergency room</li>
      </ul>

      <p class="tip">Remember: Reaching out for help is one of the bravest things you can do. You deserve support, and effective treatment is available.</p>
    `
  },
  {
    slug: 'coping-with-grief-and-loss-healthy-ways-to-heal',
    title: 'Coping with Grief and Loss: Healthy Ways to Heal After Losing Someone You Love',
    tag: 'Grief Support',
    tagColor: 'cyan',
    excerpt: 'Understand the grief process and discover healthy ways to cope with loss while honoring your loved one\'s memory.',
    date: 'December 1, 2025',
    readTime: 11,
    image: blogImg5,
    content: `
      <p>Grief is one of the most painful human experiences. Whether you've lost a loved one, a relationship, a job, or your health, grief is a natural response to loss. There's no right way to grieve, but understanding the process can help you heal.</p>

      <h2>Understanding Grief</h2>
      <p>Grief isn't linear—it comes in waves. You might experience:</p>
      <ul>
        <li><strong>Shock and denial:</strong> "This can't be real"</li>
        <li><strong>Pain and guilt:</strong> Intense sadness and "what ifs"</li>
        <li><strong>Anger:</strong> At the situation, others, yourself, or even your loved one</li>
        <li><strong>Bargaining:</strong> Wishing you could change what happened</li>
        <li><strong>Depression:</strong> Deep sadness and withdrawal</li>
        <li><strong>Acceptance:</strong> Learning to live with the loss</li>
      </ul>
      <p>These don't happen in order—you may cycle through them many times.</p>

      <div class="highlight-box">
        <strong>Grief Is Personal</strong>
        <p>There's no timeline for grief. Some days will be harder than others, even years later. Holidays, anniversaries, and unexpected reminders can trigger waves of grief. This is normal.</p>
      </div>

      <h2>Healthy Ways to Cope with Grief</h2>

      <h3>1. Allow Yourself to Feel</h3>
      <ul>
        <li>Don't suppress your emotions</li>
        <li>Cry when you need to</li>
        <li>Express anger safely</li>
        <li>Accept that grief takes time</li>
      </ul>

      <h3>2. Take Care of Your Body</h3>
      <ul>
        <li>Try to maintain regular sleep</li>
        <li>Eat nourishing foods</li>
        <li>Move your body gently</li>
        <li>Limit alcohol and substances</li>
      </ul>

      <h3>3. Connect with Others</h3>
      <ul>
        <li>Accept help when offered</li>
        <li>Share memories with others who knew your loved one</li>
        <li>Join a grief support group</li>
        <li>Be honest about what you need</li>
      </ul>

      <h3>4. Honor Your Loved One</h3>
      <ul>
        <li>Create a memory box or photo album</li>
        <li>Write letters to them</li>
        <li>Continue traditions they loved</li>
        <li>Donate to causes they cared about</li>
      </ul>

      <h3>5. Be Patient with Yourself</h3>
      <ul>
        <li>Lower your expectations temporarily</li>
        <li>Take things one day at a time</li>
        <li>Accept that healing isn't linear</li>
        <li>Don't compare your grief to others'</li>
      </ul>

      <blockquote>"Grief is not a disorder, a disease, or a sign of weakness. It is an emotional, physical, and spiritual necessity, the price you pay for love." — Earl Grollman</blockquote>

      <h2>When to Seek Professional Help</h2>
      <p>Consider grief counseling if you:</p>
      <ul>
        <li>Feel unable to function in daily life after several months</li>
        <li>Have thoughts of harming yourself</li>
        <li>Feel intense guilt or blame yourself</li>
        <li>Withdraw completely from others</li>
        <li>Turn to substances to cope</li>
        <li>Experience prolonged intense grief</li>
      </ul>

      <h2>Supporting Someone Who Is Grieving</h2>
      <ul>
        <li>Show up and be present</li>
        <li>Listen more than you speak</li>
        <li>Avoid clichés like "they're in a better place"</li>
        <li>Help with practical tasks</li>
        <li>Remember them on difficult dates</li>
      </ul>

      <p class="tip">Remember: Grief is the price of love. As painful as it is, your grief reflects the depth of your love. With time and support, you will find ways to carry your loss while also experiencing joy again.</p>
    `
  },
  {
    slug: 'how-to-stop-panic-attacks-fast-proven-techniques',
    title: 'How to Stop Panic Attacks Fast: Proven Techniques for Immediate Relief',
    tag: 'Panic Relief',
    tagColor: 'pink',
    excerpt: 'Learn effective strategies to stop panic attacks quickly and regain control when overwhelming fear strikes.',
    date: 'November 28, 2025',
    readTime: 10,
    image: blogImg6,
    content: `
      <p>A panic attack can feel terrifying—your heart races, you can't breathe, and you might feel like you're dying. While panic attacks aren't dangerous, they're incredibly distressing. These proven techniques can help you regain control.</p>

      <h2>Recognizing a Panic Attack</h2>
      <p>Panic attacks typically peak within 10 minutes and may include:</p>
      <ul>
        <li>Racing or pounding heart</li>
        <li>Shortness of breath or feeling smothered</li>
        <li>Chest pain or tightness</li>
        <li>Dizziness or lightheadedness</li>
        <li>Trembling or shaking</li>
        <li>Sweating or chills</li>
        <li>Nausea or stomach distress</li>
        <li>Feeling detached from reality</li>
        <li>Fear of losing control or dying</li>
      </ul>

      <div class="highlight-box">
        <strong>Important Reminder:</strong>
        <p>Panic attacks, while terrifying, cannot hurt you. Your body is having a false alarm—there's no actual danger. The feelings will pass.</p>
      </div>

      <h2>Immediate Techniques to Stop a Panic Attack</h2>

      <h3>1. Controlled Breathing</h3>
      <p>Slow, deep breathing counteracts hyperventilation:</p>
      <ol>
        <li>Breathe in slowly for 4 counts</li>
        <li>Hold for 1-2 counts</li>
        <li>Exhale slowly for 6 counts</li>
        <li>Repeat until you feel calmer</li>
      </ol>

      <h3>2. Ground Yourself with 5-4-3-2-1</h3>
      <p>Engage your senses to anchor yourself in the present:</p>
      <ul>
        <li>5 things you can see</li>
        <li>4 things you can touch</li>
        <li>3 things you can hear</li>
        <li>2 things you can smell</li>
        <li>1 thing you can taste</li>
      </ul>

      <h3>3. Use Cold Temperature</h3>
      <p>Cold activates your dive reflex, slowing your heart:</p>
      <ul>
        <li>Hold ice cubes in your hands</li>
        <li>Splash cold water on your face</li>
        <li>Place something cold on your neck</li>
      </ul>

      <h3>4. Practice Acceptance</h3>
      <p>Fighting panic often makes it worse. Instead:</p>
      <ul>
        <li>Acknowledge: "I'm having a panic attack"</li>
        <li>Remind yourself: "This will pass"</li>
        <li>Accept the feelings without resistance</li>
        <li>Know that panic cannot harm you</li>
      </ul>

      <h3>5. Focus on Something External</h3>
      <ul>
        <li>Count backwards from 100 by 7s</li>
        <li>Name all the blue objects you can see</li>
        <li>Recite song lyrics or a poem</li>
        <li>Describe your surroundings in detail</li>
      </ul>

      <blockquote>"The way out of anxiety is through it, not around it."</blockquote>

      <h2>Preventing Future Panic Attacks</h2>
      <ul>
        <li><strong>Regular exercise:</strong> Reduces overall anxiety</li>
        <li><strong>Limit caffeine:</strong> Can trigger panic symptoms</li>
        <li><strong>Practice relaxation daily:</strong> Build your calm-down skills</li>
        <li><strong>Get enough sleep:</strong> Fatigue increases vulnerability</li>
        <li><strong>Identify triggers:</strong> Know what sets you off</li>
      </ul>

      <h2>When to Get Professional Help</h2>
      <p>Seek help from a mental health professional if:</p>
      <ul>
        <li>Panic attacks are frequent</li>
        <li>You're avoiding places or situations due to fear</li>
        <li>Panic is interfering with your life</li>
        <li>You're using substances to cope</li>
        <li>You're constantly worried about the next attack</li>
      </ul>

      <h2>Treatment Options</h2>
      <ul>
        <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Highly effective for panic disorder</li>
        <li><strong>Exposure therapy:</strong> Gradually face feared sensations</li>
        <li><strong>Medication:</strong> SSRIs or anti-anxiety medications can help</li>
      </ul>

      <p class="tip">Remember: Panic attacks are treatable. With the right techniques and support, you can reduce their frequency and intensity significantly. You don't have to live in fear.</p>
    `
  },
  {
    slug: 'mental-health-tips-for-college-students-manage-stress-anxiety',
    title: 'Mental Health Tips for College Students: How to Manage Stress and Anxiety',
    tag: 'Student Wellness',
    tagColor: 'indigo',
    excerpt: 'College life brings unique mental health challenges. Learn practical strategies to thrive academically while protecting your wellbeing.',
    date: 'November 25, 2025',
    readTime: 11,
    image: blogImg7,
    content: `
      <p>College is exciting but can also be overwhelming. Academic pressure, social challenges, financial stress, and being away from home can take a toll on mental health. You're not alone—and there are effective ways to cope.</p>

      <h2>Why College Students Struggle</h2>
      <p>Mental health challenges are common in college due to:</p>
      <ul>
        <li>Academic pressure and fear of failure</li>
        <li>Social anxiety and loneliness</li>
        <li>Financial stress and uncertainty</li>
        <li>Sleep deprivation and poor habits</li>
        <li>Identity exploration and life transitions</li>
        <li>First time managing life independently</li>
      </ul>

      <div class="highlight-box">
        <strong>You're Not Alone:</strong>
        <ul>
          <li>1 in 3 college students experience significant depression</li>
          <li>More than 40% report anxiety</li>
          <li>Only 36% seek help</li>
          <li>Treatment is effective for most students</li>
        </ul>
      </div>

      <h2>Practical Mental Health Strategies</h2>

      <h3>1. Build a Healthy Routine</h3>
      <ul>
        <li><strong>Sleep:</strong> Aim for 7-9 hours—it affects everything</li>
        <li><strong>Eat regularly:</strong> Don't skip meals</li>
        <li><strong>Move daily:</strong> Even a 20-minute walk helps</li>
        <li><strong>Limit substances:</strong> Alcohol and drugs worsen anxiety and depression</li>
      </ul>

      <h3>2. Manage Academic Stress</h3>
      <ul>
        <li>Break large projects into smaller tasks</li>
        <li>Use a planner or digital calendar</li>
        <li>Start assignments early to reduce last-minute panic</li>
        <li>Ask for help from professors or tutors</li>
        <li>Accept that perfectionism is harmful</li>
      </ul>

      <h3>3. Build Social Connections</h3>
      <ul>
        <li>Join clubs or organizations aligned with your interests</li>
        <li>Quality over quantity—a few close friends matter more</li>
        <li>Reach out even when it feels hard</li>
        <li>It's normal to feel lonely at first</li>
      </ul>

      <h3>4. Set Boundaries with Technology</h3>
      <ul>
        <li>Limit social media comparison</li>
        <li>Turn off notifications during study time</li>
        <li>Don't check your phone first thing in the morning</li>
        <li>Take regular digital detox breaks</li>
      </ul>

      <h3>5. Practice Self-Compassion</h3>
      <ul>
        <li>Talk to yourself like you'd talk to a friend</li>
        <li>Accept that struggling is part of growth</li>
        <li>Celebrate small wins</li>
        <li>Remember: grades don't define your worth</li>
      </ul>

      <blockquote>"Your mental health is more important than your GPA."</blockquote>

      <h2>Campus Mental Health Resources</h2>
      <p>Most colleges offer free mental health services:</p>
      <ul>
        <li><strong>Counseling center:</strong> Free therapy sessions</li>
        <li><strong>Peer support:</strong> Trained student listeners</li>
        <li><strong>Crisis services:</strong> 24/7 emergency support</li>
        <li><strong>Wellness programs:</strong> Stress management workshops</li>
        <li><strong>Academic accommodations:</strong> Support for mental health conditions</li>
      </ul>

      <h2>Warning Signs to Watch For</h2>
      <p>Seek help if you experience:</p>
      <ul>
        <li>Persistent sadness or hopelessness</li>
        <li>Anxiety that interferes with daily life</li>
        <li>Thoughts of self-harm or suicide</li>
        <li>Withdrawal from friends and activities</li>
        <li>Significant changes in sleep or appetite</li>
        <li>Using substances to cope</li>
      </ul>

      <h2>Immediate Help</h2>
      <ul>
        <li>Call 988 (Suicide & Crisis Lifeline)</li>
        <li>Text HOME to 741741</li>
        <li>Contact your campus counseling center</li>
      </ul>

      <p class="tip">Remember: Asking for help is a sign of strength, not weakness. Your college years should include growth and even some struggle—but you don't have to suffer alone. Support is available.</p>
    `
  },
  {
    slug: 'workplace-mental-health-reduce-job-stress-burnout-prevention',
    title: 'Workplace Mental Health: How to Reduce Job Stress and Prevent Burnout',
    tag: 'Work Wellness',
    tagColor: 'orange',
    excerpt: 'Protect your mental health at work with practical strategies to manage stress, set boundaries, and prevent burnout.',
    date: 'November 20, 2025',
    readTime: 12,
    image: blogImg8,
    content: `
      <p>Work-related stress is one of the leading causes of mental health problems. Learning to protect your wellbeing while meeting professional demands is essential for long-term success and happiness.</p>

      <h2>Signs of Workplace Burnout</h2>
      <p>Burnout develops gradually. Watch for these warning signs:</p>
      <ul>
        <li><strong>Exhaustion:</strong> Feeling drained even after rest</li>
        <li><strong>Cynicism:</strong> Negative attitude toward your job</li>
        <li><strong>Reduced performance:</strong> Difficulty concentrating and producing</li>
        <li><strong>Detachment:</strong> Feeling disconnected from colleagues</li>
        <li><strong>Physical symptoms:</strong> Headaches, sleep problems, illness</li>
        <li><strong>Dread:</strong> Anxiety about going to work</li>
      </ul>

      <div class="highlight-box">
        <strong>Burnout Statistics:</strong>
        <ul>
          <li>76% of employees experience burnout at some point</li>
          <li>Burnout increases risk of depression by 180%</li>
          <li>Companies lose $125-190 billion annually due to burnout</li>
          <li>Recovery can take months without intervention</li>
        </ul>
      </div>

      <h2>Strategies to Protect Your Mental Health at Work</h2>

      <h3>1. Set Clear Boundaries</h3>
      <ul>
        <li>Define work hours and stick to them</li>
        <li>Don't check email outside work hours</li>
        <li>Learn to say no to unrealistic demands</li>
        <li>Protect your lunch break</li>
        <li>Use vacation days without guilt</li>
      </ul>

      <h3>2. Manage Your Workload</h3>
      <ul>
        <li>Prioritize tasks using the 80/20 rule</li>
        <li>Break large projects into smaller steps</li>
        <li>Communicate when you're overwhelmed</li>
        <li>Delegate when possible</li>
        <li>Focus on one task at a time</li>
      </ul>

      <h3>3. Take Regular Breaks</h3>
      <ul>
        <li>Use the Pomodoro technique (25 min work, 5 min break)</li>
        <li>Step away from your desk for lunch</li>
        <li>Take short walks throughout the day</li>
        <li>Practice desk stretches</li>
        <li>Rest your eyes from screens regularly</li>
      </ul>

      <h3>4. Build Supportive Relationships</h3>
      <ul>
        <li>Connect with colleagues you trust</li>
        <li>Find a mentor or peer support</li>
        <li>Communicate openly with your manager</li>
        <li>Don't isolate yourself</li>
      </ul>

      <h3>5. Create a Healthy Work Environment</h3>
      <ul>
        <li>Organize your workspace</li>
        <li>Use natural light when possible</li>
        <li>Add plants or personal items</li>
        <li>Use noise-canceling headphones if needed</li>
      </ul>

      <blockquote>"You can't pour from an empty cup. Taking care of yourself isn't selfish—it's necessary."</blockquote>

      <h2>Having Conversations About Mental Health at Work</h2>
      <ul>
        <li>Know your rights regarding mental health accommodations</li>
        <li>Be honest with HR about what you need</li>
        <li>Frame requests in terms of productivity</li>
        <li>You don't have to share details of diagnoses</li>
      </ul>

      <h2>When Work Stress Becomes Too Much</h2>
      <p>Consider professional help if you:</p>
      <ul>
        <li>Dread going to work every day</li>
        <li>Experience physical symptoms of stress</li>
        <li>Can't stop thinking about work</li>
        <li>Notice your relationships suffering</li>
        <li>Feel hopeless about your situation</li>
        <li>Use substances to cope with work stress</li>
      </ul>

      <h2>Resources</h2>
      <ul>
        <li>Employee Assistance Programs (EAP) offer free counseling</li>
        <li>Talk to your doctor about stress symptoms</li>
        <li>Consider therapy for work-related anxiety</li>
        <li>Know your company's mental health benefits</li>
      </ul>

      <p class="tip">Remember: Your job is what you do, not who you are. Protecting your mental health at work isn't just good for you—it makes you more effective, creative, and resilient in your career.</p>
    `
  }
];
