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
      title: 'Hope-centered mental health support',
      description:
        'Immediate helpline access, compassionate counselling, and action-focused mental health campaigns built to empower every visitor to seek support sooner.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About our mission-driven mental health collective',
      description:
        'Learn about the clinicians, advocates, and evidence-based strategies driving Mental Health Awareness initiatives across counselling, crisis response, and advocacy.'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: 'Counselling, crisis support, and prevention services',
      description:
        'Discover confidential counselling pathways, real-time crisis interventions, and public campaigns that make professional mental health care approachable.'
    }
  },
  {
    path: '/resources',
    name: 'resources',
    component: () => import('../views/ResourcesView.vue'),
    meta: {
      title: 'Articles, toolkits, and downloadable guides',
      description:
        'Browse curated mental health toolkits, trauma-informed tip sheets, and downloadable guides crafted with clinical review and inclusive language.'
    }
  },
  {
    path: '/impact',
    name: 'impact',
    component: () => import('../views/ImpactView.vue'),
    meta: {
      title: 'Impact metrics and lived-experience stories',
      description:
        'Track the lives supported, volunteer hours logged, and policy wins from Mental Health Awareness programs alongside immersive community stories.'
    }
  },
  {
    path: '/get-help',
    name: 'get-help',
    component: GetHelpView,
    meta: {
      title: 'Get help now — helplines and urgent actions',
      description:
        'Call, chat, or text a counsellor immediately, find local helplines, and review safety planning steps tailored for individuals and supporters.'
    }
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/EventsView.vue'),
    meta: {
      title: 'Upcoming events and awareness campaigns',
      description:
        'Join training sessions, community walks, and advocacy campaigns designed to normalize mental wellness conversations year-round.'
    }
  },
  {
    path: '/donate',
    name: 'donate',
    component: () => import('../views/DonateView.vue'),
    meta: {
      title: 'Donate or fundraise for suicide prevention',
      description:
        'Fuel 24/7 helplines, culturally competent counselling, and school-based prevention workshops through a transparent donation experience.'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact, media inquiries, and volunteer signup',
      description:
        'Reach our care coordinators, request a speaker, or pledge volunteer hours with privacy-first forms and rapid follow ups.'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue'),
    meta: {
      title: 'Mental Health Blog - Articles, Tips & Resources',
      description:
        'Expert mental health articles covering anxiety management, depression support, self-care routines, and workplace wellness strategies.'
    }
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: () => import('../views/BlogPostView.vue'),
    meta: {
      title: 'Mental Health Article',
      description: 'In-depth mental health article with practical advice and resources.'
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
