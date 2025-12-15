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
    title: 'Staying Present: Mindful Grounding Cards',
    type: 'Toolkit',
    length: '12 prompts',
    link: '#',
    description: 'Printable deck with bilingual scripts to calm an anxious brain in under 90 seconds.'
  },
  {
    title: 'Guide: Talking About Suicide with Loved Ones',
    type: 'Guide',
    length: '8-minute read',
    link: '#',
    description: 'Evidence-based approach for asking caring questions and creating collaborative safety plans.'
  },
  {
    title: 'Article: Culturally Inclusive Teletherapy',
    type: 'Article',
    length: '6-minute read',
    link: '#',
    description: 'Clinical insights on building belonging digitally for LGBTQIA+ and BIPOC communities.'
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

// Blog post images - 4 main mental health topics with local images
const blogImg1 = '/blog-anxiety.jpg'; // Anxiety - peaceful woman relaxing
const blogImg2 = '/blog-depression.jpg'; // Depression - supportive therapy
const blogImg3 = '/blog-stress.jpg'; // Stress - yoga meditation wellness
const blogImg4 = '/blog-wellness.jpg'; // Mental wellness - hopeful sunrise

export const blogPosts = [
  {
    slug: 'how-to-overcome-anxiety-naturally-without-medication',
    title: 'How to Overcome Anxiety Naturally Without Medication: 10 Proven Techniques',
    tag: 'Anxiety',
    tagColor: 'blue',
    excerpt: 'Discover effective natural remedies and coping strategies to manage anxiety symptoms and regain control of your life.',
    date: 'December 8, 2025',
    readTime: 12,
    image: blogImg1,
    content: `
      <p>Living with anxiety can feel overwhelming, but there are many natural approaches that can help you manage symptoms without medication. These evidence-based techniques can provide relief and help you build long-term resilience.</p>

      <h2>Understanding Anxiety and Its Impact on Your Body</h2>
      <p>Anxiety triggers your body's fight-or-flight response, causing physical symptoms like:</p>
      <ul>
        <li><strong>Rapid heartbeat</strong> and chest tightness</li>
        <li><strong>Shallow breathing</strong> or hyperventilation</li>
        <li><strong>Muscle tension</strong> in neck, shoulders, and jaw</li>
        <li><strong>Digestive problems</strong> including nausea and IBS</li>
        <li><strong>Sleep disturbances</strong> and chronic fatigue</li>
        <li><strong>Difficulty concentrating</strong> and racing thoughts</li>
      </ul>

      <div class="highlight-box">
        <strong>The 4-7-8 Breathing Technique for Instant Calm:</strong>
        <ol>
          <li>Inhale quietly through your nose for 4 seconds</li>
          <li>Hold your breath for 7 seconds</li>
          <li>Exhale completely through your mouth for 8 seconds</li>
          <li>Repeat this cycle 3-4 times</li>
        </ol>
      </div>

      <h2>10 Natural Ways to Reduce Anxiety</h2>

      <h3>1. Practice Deep Breathing Daily</h3>
      <p>Diaphragmatic breathing activates your parasympathetic nervous system, signaling your body to relax. Practice for 5-10 minutes each morning.</p>

      <h3>2. Exercise Regularly</h3>
      <p>Physical activity releases endorphins and reduces cortisol. Even a 20-minute walk can significantly reduce anxiety levels.</p>

      <h3>3. Limit Caffeine and Alcohol</h3>
      <p>Both substances can trigger or worsen anxiety symptoms. Try reducing intake gradually and notice the difference.</p>

      <h3>4. Prioritize Quality Sleep</h3>
      <p>Poor sleep amplifies anxiety. Maintain consistent sleep schedules and create a calming bedtime routine.</p>

      <h3>5. Try Progressive Muscle Relaxation</h3>
      <p>Systematically tense and release each muscle group to release physical tension stored in your body.</p>

      <h3>6. Practice Mindfulness Meditation</h3>
      <p>Just 10 minutes daily can rewire your brain's response to stress and reduce anxiety over time.</p>

      <h3>7. Connect with Supportive People</h3>
      <p>Social connection releases oxytocin, which counteracts stress hormones. Don't isolate yourself.</p>

      <h3>8. Spend Time in Nature</h3>
      <p>Research shows that 20 minutes in nature significantly lowers cortisol levels.</p>

      <h3>9. Journal Your Thoughts</h3>
      <p>Writing down worries helps externalize them and reduces their power over you.</p>

      <h3>10. Use Grounding Techniques</h3>
      <p>The 5-4-3-2-1 technique helps bring you back to the present moment during anxiety spikes.</p>

      <blockquote>"You don't have to control your thoughts. You just have to stop letting them control you." — Dan Millman</blockquote>

      <h2>When to Seek Professional Help</h2>
      <p>Natural techniques work well for mild to moderate anxiety, but consider professional support if:</p>
      <ul>
        <li>Anxiety significantly interferes with daily life</li>
        <li>You experience frequent panic attacks</li>
        <li>Self-help strategies aren't providing relief</li>
        <li>You're using substances to cope</li>
      </ul>

      <p class="tip">Remember: Managing anxiety is a journey, not a destination. Be patient with yourself and celebrate small victories along the way.</p>
    `
  },
  {
    slug: 'warning-signs-of-depression-and-how-to-get-help',
    title: 'Warning Signs of Depression and How to Get Help: A Complete Mental Health Guide',
    tag: 'Depression',
    tagColor: 'purple',
    excerpt: 'Learn to recognize depression symptoms early and discover the most effective treatment options available today.',
    date: 'December 5, 2025',
    readTime: 14,
    image: blogImg2,
    content: `
      <p>Depression is more than feeling sad—it's a serious mental health condition that affects millions worldwide. Recognizing the warning signs early and knowing how to seek help can make a significant difference in recovery.</p>

      <h2>Common Warning Signs of Depression</h2>
      <p>Depression manifests differently in everyone, but common symptoms include:</p>
      <ul>
        <li><strong>Persistent sadness</strong> or feeling "empty" for weeks</li>
        <li><strong>Loss of interest</strong> in activities you once enjoyed</li>
        <li><strong>Changes in appetite</strong> and significant weight changes</li>
        <li><strong>Sleep disturbances</strong>—insomnia or sleeping too much</li>
        <li><strong>Fatigue</strong> and lack of energy despite rest</li>
        <li><strong>Difficulty concentrating</strong> and making decisions</li>
        <li><strong>Feelings of worthlessness</strong> or excessive guilt</li>
        <li><strong>Physical symptoms</strong> like headaches or body aches</li>
      </ul>

      <div class="highlight-box">
        <strong>Urgent Warning Signs Requiring Immediate Help:</strong>
        <ul>
          <li>Thoughts of death or suicide</li>
          <li>Making plans to harm yourself</li>
          <li>Giving away possessions</li>
          <li>Saying goodbye to loved ones</li>
          <li>Feeling like a burden to others</li>
        </ul>
        <p><strong>If you experience these, call 988 (Suicide & Crisis Lifeline) immediately.</strong></p>
      </div>

      <h2>What Causes Depression?</h2>
      <p>Depression results from a complex interaction of factors:</p>
      <ul>
        <li><strong>Brain chemistry:</strong> Imbalances in neurotransmitters like serotonin</li>
        <li><strong>Genetics:</strong> Family history increases risk</li>
        <li><strong>Life events:</strong> Trauma, loss, or major stress</li>
        <li><strong>Medical conditions:</strong> Chronic illness or hormonal changes</li>
        <li><strong>Medication side effects:</strong> Some drugs can trigger depression</li>
      </ul>

      <h2>Effective Treatment Options for Depression</h2>

      <h3>Psychotherapy (Talk Therapy)</h3>
      <p>Evidence-based therapies include:</p>
      <ul>
        <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Identifies and changes negative thought patterns</li>
        <li><strong>Interpersonal Therapy:</strong> Focuses on improving relationships</li>
        <li><strong>Psychodynamic Therapy:</strong> Explores past experiences affecting current mood</li>
      </ul>

      <h3>Medication</h3>
      <p>Antidepressants can help balance brain chemistry. Work with a psychiatrist to find the right medication and dosage.</p>

      <h3>Lifestyle Changes</h3>
      <ul>
        <li>Regular exercise (30 minutes, 5 days a week)</li>
        <li>Healthy diet rich in omega-3s and whole foods</li>
        <li>Consistent sleep schedule</li>
        <li>Limiting alcohol and avoiding drugs</li>
        <li>Social connection and support</li>
      </ul>

      <blockquote>"The only way out of the darkness is through it. And there is light on the other side." — Unknown</blockquote>

      <h2>How to Support Someone with Depression</h2>
      <ul>
        <li>Listen without judgment or trying to "fix" them</li>
        <li>Encourage professional help without pressuring</li>
        <li>Check in regularly—don't give up if they pull away</li>
        <li>Help with practical tasks when they're overwhelmed</li>
        <li>Take care of your own mental health too</li>
      </ul>

      <p class="tip">Remember: Depression is treatable. With proper support and treatment, most people experience significant improvement. You are not alone, and recovery is possible.</p>
    `
  },
  {
    slug: 'stress-management-techniques-for-busy-professionals',
    title: 'Stress Management Techniques for Busy Professionals: Work-Life Balance Guide',
    tag: 'Stress Relief',
    tagColor: 'green',
    excerpt: 'Master practical stress reduction strategies designed for demanding careers without sacrificing productivity.',
    date: 'December 1, 2025',
    readTime: 10,
    image: blogImg3,
    content: `
      <p>Chronic workplace stress leads to burnout, health problems, and decreased productivity. Learning to manage stress effectively isn't just about feeling better—it's essential for sustainable success and well-being.</p>

      <h2>Signs You're Experiencing Chronic Stress</h2>
      <p>Recognize these warning signals before burnout sets in:</p>
      <ul>
        <li><strong>Physical:</strong> Headaches, muscle tension, fatigue, sleep problems</li>
        <li><strong>Emotional:</strong> Irritability, anxiety, feeling overwhelmed</li>
        <li><strong>Cognitive:</strong> Difficulty concentrating, forgetfulness, negative thinking</li>
        <li><strong>Behavioral:</strong> Changes in appetite, procrastination, social withdrawal</li>
      </ul>

      <div class="highlight-box">
        <strong>The 2-Minute Stress Reset:</strong>
        <ol>
          <li>Step away from your screen</li>
          <li>Take 5 slow, deep breaths</li>
          <li>Roll your shoulders and stretch your neck</li>
          <li>Think of one thing you're grateful for</li>
          <li>Return to work with renewed focus</li>
        </ol>
      </div>

      <h2>Effective Stress Management Strategies</h2>

      <h3>1. Time Blocking and Prioritization</h3>
      <p>Use the Eisenhower Matrix to categorize tasks by urgency and importance. Focus on what truly matters and learn to delegate or eliminate the rest.</p>

      <h3>2. Set Clear Boundaries</h3>
      <ul>
        <li>Define specific work hours and stick to them</li>
        <li>Turn off notifications after hours</li>
        <li>Learn to say "no" to non-essential commitments</li>
        <li>Protect time for breaks and lunch</li>
      </ul>

      <h3>3. Practice Micro-Mindfulness</h3>
      <p>You don't need an hour to meditate. Try:</p>
      <ul>
        <li>Three conscious breaths between meetings</li>
        <li>Mindful coffee or tea breaks</li>
        <li>One-minute body scans at your desk</li>
        <li>Walking meditation during lunch</li>
      </ul>

      <h3>4. Move Your Body Regularly</h3>
      <p>Exercise is one of the most effective stress reducers:</p>
      <ul>
        <li>Take walking meetings when possible</li>
        <li>Use stairs instead of elevators</li>
        <li>Set hourly reminders to stand and stretch</li>
        <li>Exercise before or after work, even briefly</li>
      </ul>

      <h3>5. Build a Support Network</h3>
      <p>Connection reduces stress hormones. Cultivate relationships with colleagues, mentors, and friends who understand your challenges.</p>

      <blockquote>"Almost everything will work again if you unplug it for a few minutes, including you." — Anne Lamott</blockquote>

      <h2>Creating a Sustainable Work-Life Balance</h2>
      <ul>
        <li><strong>Schedule personal time</strong> like you schedule meetings</li>
        <li><strong>Unplug completely</strong> for at least one day per week</li>
        <li><strong>Pursue hobbies</strong> unrelated to your career</li>
        <li><strong>Invest in relationships</strong> outside of work</li>
        <li><strong>Take vacations</strong> and actually disconnect</li>
      </ul>

      <h2>When Stress Becomes Unmanageable</h2>
      <p>Seek professional support if you experience:</p>
      <ul>
        <li>Persistent anxiety or panic attacks</li>
        <li>Depression or hopelessness</li>
        <li>Physical symptoms that don't improve</li>
        <li>Difficulty functioning at work or home</li>
        <li>Reliance on substances to cope</li>
      </ul>

      <p class="tip">Remember: Taking care of your mental health isn't a luxury—it's essential for long-term success. Prioritize stress management as a non-negotiable part of your professional development.</p>
    `
  },
  {
    slug: 'building-mental-resilience-strategies-for-emotional-strength',
    title: 'Building Mental Resilience: 8 Strategies for Developing Emotional Strength',
    tag: 'Mental Wellness',
    tagColor: 'teal',
    excerpt: 'Learn how to develop mental toughness and bounce back stronger from life\'s challenges with proven resilience-building techniques.',
    date: 'November 28, 2025',
    readTime: 11,
    image: blogImg4,
    content: `
      <p>Mental resilience is the ability to adapt and bounce back from adversity, trauma, and stress. It's not about avoiding difficulties—it's about developing the inner strength to navigate them effectively.</p>

      <h2>What Makes Someone Mentally Resilient?</h2>
      <p>Resilient people share common characteristics:</p>
      <ul>
        <li><strong>Optimistic outlook:</strong> They see setbacks as temporary and specific</li>
        <li><strong>Emotional awareness:</strong> They recognize and manage their feelings</li>
        <li><strong>Strong connections:</strong> They nurture supportive relationships</li>
        <li><strong>Sense of purpose:</strong> They have clear values and goals</li>
        <li><strong>Adaptability:</strong> They embrace change and uncertainty</li>
        <li><strong>Self-compassion:</strong> They treat themselves with kindness</li>
      </ul>

      <div class="highlight-box">
        <strong>The Resilience Formula:</strong>
        <p>Resilience = Adversity + Support + Coping Skills + Growth Mindset</p>
        <p>You can strengthen each component through intentional practice.</p>
      </div>

      <h2>8 Strategies to Build Mental Resilience</h2>

      <h3>1. Cultivate a Growth Mindset</h3>
      <p>View challenges as opportunities for growth rather than threats. When facing difficulties, ask: "What can I learn from this?"</p>

      <h3>2. Build Strong Social Connections</h3>
      <p>Relationships are the foundation of resilience:</p>
      <ul>
        <li>Invest time in meaningful friendships</li>
        <li>Be willing to ask for and accept help</li>
        <li>Join communities aligned with your values</li>
        <li>Practice vulnerability with trusted people</li>
      </ul>

      <h3>3. Practice Self-Care Consistently</h3>
      <p>You can't pour from an empty cup:</p>
      <ul>
        <li>Prioritize sleep (7-9 hours nightly)</li>
        <li>Nourish your body with healthy food</li>
        <li>Move regularly—find exercise you enjoy</li>
        <li>Make time for activities that bring joy</li>
      </ul>

      <h3>4. Develop Emotional Intelligence</h3>
      <p>Learn to identify, understand, and manage your emotions. Practice naming your feelings without judgment and explore healthy ways to express them.</p>

      <h3>5. Set Meaningful Goals</h3>
      <p>Purpose provides direction during difficult times. Set goals aligned with your values and break them into achievable steps.</p>

      <h3>6. Practice Mindfulness and Presence</h3>
      <p>Mindfulness builds the mental muscle to stay grounded during stress. Even 5-10 minutes daily makes a difference.</p>

      <h3>7. Reframe Negative Thoughts</h3>
      <p>Challenge catastrophic thinking:</p>
      <ul>
        <li>Is this thought based on facts or fears?</li>
        <li>What would I tell a friend in this situation?</li>
        <li>What's another way to view this?</li>
        <li>What's within my control right now?</li>
      </ul>

      <h3>8. Embrace Discomfort Gradually</h3>
      <p>Resilience grows by facing challenges, not avoiding them. Step outside your comfort zone regularly in small ways.</p>

      <blockquote>"The oak fought the wind and was broken, the willow bent when it must and survived." — Robert Jordan</blockquote>

      <h2>Building Resilience After Setbacks</h2>
      <ul>
        <li><strong>Allow yourself to grieve</strong> losses and disappointments</li>
        <li><strong>Look for meaning</strong> in difficult experiences</li>
        <li><strong>Focus on what you can control</strong></li>
        <li><strong>Take action</strong>, even small steps forward</li>
        <li><strong>Celebrate progress</strong>, not just outcomes</li>
      </ul>

      <h2>When You Need Additional Support</h2>
      <p>Building resilience doesn't mean going it alone. Seek professional help if you:</p>
      <ul>
        <li>Feel stuck in overwhelming emotions</li>
        <li>Experience trauma symptoms</li>
        <li>Notice your coping strategies aren't working</li>
        <li>Want guided support in developing resilience</li>
      </ul>

      <p class="tip">Remember: Resilience is not a trait you either have or don't—it's a skill that can be developed at any age. Every challenge you face is an opportunity to grow stronger.</p>
    `
  }
];
