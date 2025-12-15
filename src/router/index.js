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
      title: '24/7 Mental Health Crisis Helpline | Free Counselling Support',
      description:
        'Get free 24/7 mental health crisis support. Connect with licensed therapists for anxiety, depression, and stress. Confidential online counselling and crisis helpline available now.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About Us | Licensed Mental Health Professionals & Crisis Counsellors',
      description:
        'Meet our team of licensed therapists and crisis counsellors providing 24/7 mental health support. Evidence-based treatment for anxiety, depression, and trauma.'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: 'Mental Health Services | Online Therapy, Crisis Support & Counselling',
      description:
        'Explore our mental health services: free online counselling for anxiety, depression therapy, 24/7 crisis intervention, stress management programs, and confidential support.'
    }
  },
  {
    path: '/resources',
    name: 'resources',
    component: () => import('../views/ResourcesView.vue'),
    meta: {
      title: 'Free Mental Health Resources | Anxiety & Depression Self-Help Guides',
      description:
        'Download free mental health resources: anxiety coping strategies, depression self-help guides, stress management worksheets, and mindfulness exercises.'
    }
  },
  {
    path: '/impact',
    name: 'impact',
    component: () => import('../views/ImpactView.vue'),
    meta: {
      title: 'Our Impact | Mental Health Crisis Support Success Stories',
      description:
        'See how our 24/7 mental health helpline has helped thousands. Read success stories of anxiety recovery, depression support, and crisis intervention outcomes.'
    }
  },
  {
    path: '/get-help',
    name: 'get-help',
    component: GetHelpView,
    meta: {
      title: 'Get Help Now | 24/7 Mental Health Crisis Hotline & Free Chat',
      description:
        'Need help now? Call our 24/7 mental health crisis hotline or chat free with licensed counsellors. Immediate support for anxiety, depression, suicidal thoughts, and emotional crisis.'
    }
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/EventsView.vue'),
    meta: {
      title: 'Mental Health Events | Awareness Workshops & Support Groups',
      description:
        'Join free mental health workshops, anxiety support groups, depression awareness events, and wellness seminars. Community mental health programs near you.'
    }
  },
  {
    path: '/donate',
    name: 'donate',
    component: () => import('../views/DonateView.vue'),
    meta: {
      title: 'Donate | Support Free Mental Health Services & Crisis Helplines',
      description:
        'Support free mental health services. Your donation funds 24/7 crisis helplines, free counselling for anxiety and depression, and suicide prevention programs.'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact Us | Mental Health Support & Volunteer Opportunities',
      description:
        'Contact our mental health support team. Volunteer as a crisis counsellor, request workplace wellness programs, or inquire about therapy services.'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue'),
    meta: {
      title: 'Mental Health Blog | Expert Tips for Anxiety, Depression & Wellness',
      description:
        'Read expert mental health articles: how to cope with anxiety, depression recovery tips, stress management techniques, mindfulness guides, and self-care strategies.'
    }
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: () => import('../views/BlogPostView.vue'),
    meta: {
      title: 'Mental Health Article | Expert Advice & Coping Strategies',
      description: 'In-depth mental health article with expert advice, practical coping strategies for anxiety and depression, and evidence-based wellness tips.'
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
