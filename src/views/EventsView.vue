<template>
  <div class="page">
    <section class="hero-section">
      <header>
        <p class="eyebrow">Events & Campaigns</p>
        <h1>Join drives that blend empathy with measurable outcomes</h1>
        <p>
          We shorten registration flows and include helpline CTAs across every campaign landing page so
          supporters remain focused on action.
        </p>
      </header>
      <figure class="hero-image">
        <img :src="eventsImage" alt="Mental health awareness events and community gatherings" loading="lazy" width="600" height="400" decoding="async" />
      </figure>
    </section>
    <EventsCalendar :events="eventsSchedule" />
    <section class="campaign">
      <div>
        <h2>Upcoming flagship campaign</h2>
        <p>
          The "Hold Space" tour mirrors best practices from Movember and Bell Let’s Talk—paired-down copy,
          a single CTA per screen, and community testimonials recorded with consent.
        </p>
        <RouterLink class="primary" to="/contact">Host a stop</RouterLink>
      </div>
      <figure>
        <img :src="campaignImage" alt="Mental health awareness campaigns" loading="lazy" width="400" height="300" decoding="async" />
      </figure>
    </section>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { usePageMeta } from '../composables/usePageMeta';
import { useBreadcrumbSchema, useEventSchema } from '../composables/useSeoSchema';
import EventsCalendar from '../components/sections/EventsCalendar.vue';
import { eventsSchedule } from '../data/content';

const route = useRoute();
usePageMeta(route.meta?.title, route.meta?.description, {
  path: '/events',
  image: '/events-image.jpg',
  keywords: 'free mental health workshops 2025, anxiety support groups online, depression support group near me, mental health awareness events, wellness workshops free'
});

// SEO: Breadcrumb schema
useBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' }
]);

// SEO: Event schema for rich snippets
useEventSchema(eventsSchedule);

const eventsImage = '/events-image.jpg'; // Mental health workshop - group support event
const campaignImage = '/campaign-image.jpg'; // Awareness campaign - community gathering
</script>

<style scoped>
.page {
  padding: clamp(1.75rem, 3vw, 3.25rem);
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 3vw, 3.5rem);
}

.hero-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);
  align-items: center;
}

.hero-image {
  margin: 0;
}

.hero-image img {
  width: 100%;
  border-radius: clamp(16px, 3vw, 24px);
  aspect-ratio: 3 / 2;
  object-fit: cover;
  background: #1e293b;
  contain: layout;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: var(--text-xs);
  color: var(--color-primary);
}

.campaign {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  align-items: center;
}

.primary {
  display: inline-block;
  margin-top: 1rem;
  border-radius: 999px;
  background: var(--color-primary);
  color: #fff;
  padding: 0.75rem 1.4rem;
}

figure img {
  width: 100%;
  border-radius: 24px;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  background: #1e293b;
  contain: layout;
}

@media (max-width: 768px) {
  .hero-section {
    text-align: center;
  }

  .hero-image {
    order: -1;
  }

  .campaign {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .page {
    padding: 1rem 0.75rem;
    gap: 1.5rem;
  }

  .hero-section {
    gap: 1.25rem;
  }

  .campaign {
    gap: 1rem;
  }

  .primary {
    width: 100%;
    text-align: center;
  }

  figure img {
    border-radius: 18px;
  }
}

@media (max-width: 360px) {
  .page {
    padding: 0.75rem 0.5rem;
  }

  .hero-section h1 {
    font-size: 1.35rem;
  }

  .primary {
    padding: 0.7rem 1.2rem;
  }

  figure img {
    border-radius: 14px;
  }
}
</style>
