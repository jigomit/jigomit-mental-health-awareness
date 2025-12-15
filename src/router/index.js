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
      title: 'Free 24/7 Mental Health Helpline | Talk to Someone Now',
      description:
        'Need someone to talk to? Free 24/7 mental health helpline with licensed counselors. Get immediate support for anxiety, depression, and crisis situations. Confidential and free.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About Us | Mental Health Nonprofit Organization',
      description:
        'Meet our team of licensed therapists providing free 24/7 mental health support. Trusted nonprofit organization helping thousands with anxiety, depression, and crisis intervention.'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: 'Free Online Therapy for Depression & Anxiety | No Insurance Needed',
      description:
        'Free online therapy and counseling services. Affordable anxiety treatment, trauma therapy, cognitive behavioral therapy, and depression support without insurance required.'
    }
  },
  {
    path: '/resources',
    name: 'resources',
    component: () => import('../views/ResourcesView.vue'),
    meta: {
      title: 'Free Mental Health Worksheets PDF | Anxiety & Depression Guides',
      description:
        'Download free mental health worksheets PDF. Anxiety self-help guides, depression coping skills, stress management techniques, mindfulness exercises, and panic attack relief.'
    }
  },
  {
    path: '/impact',
    name: 'impact',
    component: () => import('../views/ImpactView.vue'),
    meta: {
      title: 'Our Impact | Free Mental Health Helpline Success Stories',
      description:
        'See how our free 24/7 mental health helpline has helped thousands. Read success stories of anxiety recovery, depression support, and crisis intervention outcomes.'
    }
  },
  {
    path: '/get-help',
    name: 'get-help',
    component: GetHelpView,
    meta: {
      title: 'Get Free Mental Health Help Now | 24/7 Crisis Support Chat',
      description:
        'Talk to a therapist online free right now. 24/7 suicide prevention hotline, depression helpline, anxiety crisis support. Free therapy chat online - confidential and immediate.'
    }
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/EventsView.vue'),
    meta: {
      title: 'Free Mental Health Workshops & Support Groups Online',
      description:
        'Join free mental health workshops online. Anxiety support groups near me, depression support group meetings, mental health awareness events 2025. All free to attend.'
    }
  },
  {
    path: '/donate',
    name: 'donate',
    component: () => import('../views/DonateView.vue'),
    meta: {
      title: 'Donate to Mental Health Charity | Support Free Helplines',
      description:
        'Donate to mental health research and free crisis helplines. Your tax-deductible donation funds free therapy, suicide prevention programs, and 24/7 counseling services.'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact Mental Health Professional Online | Volunteer With Us',
      description:
        'Contact our mental health support team. Volunteer for mental health organization, request workplace wellness programs, or inquire about free therapy services.'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue'),
    meta: {
      title: 'Mental Health Blog | How to Calm Anxiety & Depression Tips',
      description:
        'Expert mental health articles. Learn how to calm anxiety at work fast, am I depressed quiz, stress relief techniques, how to sleep better with anxiety, and self-care tips.'
    }
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: () => import('../views/BlogPostView.vue'),
    meta: {
      title: 'Mental Health Article | Expert Advice & Coping Strategies',
      description:
        'In-depth mental health article with expert advice. Learn practical coping strategies for anxiety and depression, panic attack relief, and evidence-based wellness tips.'
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
