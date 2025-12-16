import { createRouter, createWebHistory } from 'vue-router';

// Prefetch critical routes for better performance
const HomeView = () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue');
const GetHelpView = () => import(/* webpackChunkName: "get-help" */ '../views/GetHelpView.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Free 24/7 Mental Health Helpline | Talk to Someone About Depression & Anxiety Now',
      description:
        'Need someone to talk to right now? Free 24/7 mental health crisis helpline with licensed counselors. Get immediate support for anxiety attacks, depression, suicidal thoughts. Free online therapy chat - no insurance needed, 100% confidential.',
      keywords: 'free mental health helpline 24/7, talk to someone about depression free, i need someone to talk to about my problems, free crisis counseling'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About Our Free Mental Health Support Team | Licensed Therapists Available 24/7',
      description:
        'Meet our team of 120+ licensed therapists providing free 24/7 mental health support. Trusted nonprofit organization helping 18,000+ people with anxiety, depression, panic attacks, and crisis intervention. No insurance required.',
      keywords: 'licensed therapists free consultation, nonprofit mental health organization, free counseling services near me'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: 'Free Online Therapy for Depression & Anxiety | No Insurance Needed | CBT Counseling',
      description:
        'Free online therapy for depression and anxiety without insurance. Cognitive behavioral therapy (CBT), trauma-informed care, sliding scale pricing. Talk to a licensed therapist from home - video, phone, or chat options available 24/7.',
      keywords: 'free online therapy no insurance, CBT therapy free, trauma therapy near me free, sliding scale therapists'
    }
  },
  {
    path: '/resources',
    name: 'resources',
    component: () => import('../views/ResourcesView.vue'),
    meta: {
      title: 'Free Mental Health Worksheets PDF Download | Anxiety & Depression Self-Help Guides',
      description:
        'Download free mental health worksheets PDF. Anxiety self-help workbooks, depression coping skills printables, DBT worksheets free, 5-4-3-2-1 grounding technique guide, panic attack relief exercises, mindfulness meditation scripts.',
      keywords: 'free mental health worksheets pdf, anxiety workbook free download, depression coping skills worksheet, DBT skills worksheets free'
    }
  },
  {
    path: '/impact',
    name: 'impact',
    component: () => import('../views/ImpactView.vue'),
    meta: {
      title: 'Success Stories | How Free Mental Health Support Changed 18,000+ Lives',
      description:
        'Read real success stories from our free 24/7 mental health helpline. See how free online therapy helped people overcome depression, manage anxiety attacks, and recover from crisis. 42 countries served, <30 second response time.',
      keywords: 'mental health recovery stories, depression success stories, anxiety treatment success rate, crisis intervention outcomes'
    }
  },
  {
    path: '/get-help',
    name: 'get-help',
    component: GetHelpView,
    meta: {
      title: 'Get Free Mental Health Help Now | 24/7 Crisis Hotline | Talk to Someone Immediately',
      description:
        'Talk to a licensed therapist online free right now. 24/7 suicide prevention hotline (988), depression helpline, anxiety crisis support. Free therapy chat - no insurance, no waiting, 100% confidential. Crisis text line: text HOME to 741741.',
      keywords: 'talk to someone now free, 988 suicide hotline, crisis text line, free therapy chat online now, i need help with depression'
    }
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/EventsView.vue'),
    meta: {
      title: 'Free Mental Health Workshops 2025 | Online Anxiety Support Groups Near Me',
      description:
        'Join free mental health workshops and support groups online in 2025. Weekly anxiety support groups, depression peer support meetings, mindfulness meditation classes, stress management seminars. Virtual and in-person options - all free.',
      keywords: 'free anxiety support groups online, depression support group near me, mental health workshops 2025, free wellness events'
    }
  },
  {
    path: '/donate',
    name: 'donate',
    component: () => import('../views/DonateView.vue'),
    meta: {
      title: 'Donate to Mental Health Charity | Fund Free Crisis Helplines & Therapy Programs',
      description:
        'Make a tax-deductible donation to mental health research and free crisis helplines. $35 funds one crisis chat session. $75 provides three free therapy sessions. Support suicide prevention, 24/7 counseling, and mental health education.',
      keywords: 'donate to mental health charity, support suicide prevention, mental health nonprofit donation, fund free therapy'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact Us | Volunteer for Mental Health | Request Workplace Wellness Programs',
      description:
        'Contact our mental health support team. Become a crisis helpline volunteer, request workplace mental wellness programs, inquire about free therapy services, or partner with us for mental health awareness campaigns.',
      keywords: 'mental health volunteer opportunities, workplace wellness programs, contact mental health counselor, corporate mental health partnership'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue'),
    meta: {
      title: 'Mental Health Blog | Expert Tips: How to Calm Anxiety Fast & Manage Depression',
      description:
        'Expert mental health articles and guides. Learn how to calm anxiety at work fast, signs of depression vs burnout, natural remedies for panic attacks, how to sleep better with anxiety, building mental resilience, and evidence-based self-care tips.',
      keywords: 'how to calm anxiety fast, am i depressed or just tired quiz, natural anxiety remedies, mental health tips, stress relief techniques'
    }
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: () => import('../views/BlogPostView.vue'),
    meta: {
      title: 'Mental Health Article | Expert Advice & Evidence-Based Coping Strategies',
      description:
        'In-depth mental health article with expert advice from licensed therapists. Learn practical coping strategies for anxiety and depression, panic attack relief techniques, mindfulness exercises, and evidence-based wellness tips.',
      keywords: 'mental health advice, coping strategies anxiety depression, panic attack help, mindfulness techniques'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;
