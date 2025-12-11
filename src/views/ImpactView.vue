<template>
  <div class="page">
    <section class="hero-section">
      <header>
        <p class="eyebrow">Impact</p>
        <h1>Every donation and call fuels measurable change</h1>
        <p>
          Inspired by transparent dashboards from Crisis Text Line and R U OK?, we surface live numbers,
          story snippets, and a timeline that shows how we continuously improve.
        </p>
      </header>
      <figure class="hero-image">
        <img :src="impactImage" alt="Mental health impact and positive outcomes" loading="lazy" />
      </figure>
    </section>
    <StatsShowcase :stats="quickStats" />

    <section>
      <h2>Stories in motion</h2>
      <div class="stories">
        <article v-for="story in stories" :key="story.name">
          <p class="name">{{ story.name }}</p>
          <p>{{ story.summary }}</p>
        </article>
      </div>
    </section>

    <section>
      <h2>Progress timeline</h2>
      <TimelineShowcase :items="impactTimeline" />
    </section>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { usePageMeta } from '../composables/usePageMeta';
import StatsShowcase from '../components/sections/StatsShowcase.vue';
import TimelineShowcase from '../components/sections/TimelineShowcase.vue';
import { quickStats, impactTimeline } from '../data/content';

const route = useRoute();
usePageMeta(route.meta?.title, route.meta?.description);

const impactImage = 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80'; // Positive impact - healing hands together

const stories = [
  {
    name: 'Avery, 22',
    summary: 'Used our late-night WhatsApp line and was matched with a queer-affirming therapist by sunrise.'
  },
  {
    name: 'Riverside EMS',
    summary: 'Replaced two police dispatches with our crisis team, reducing involuntary holds by 40%.'
  },
  {
    name: 'Sahana & Dev',
    summary: 'Parents who now host monthly listening circles with toolkits we co-created.'
  }
];
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
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: var(--text-xs);
  color: var(--color-primary);
}

.stories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.stories article {
  border-radius: 20px;
  border: 1px solid var(--color-border);
  padding: 1rem;
}

.name {
  font-weight: 600;
}

@media (max-width: 768px) {
  .hero-section {
    text-align: center;
  }

  .hero-image {
    order: -1;
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

  .stories {
    gap: 0.75rem;
  }

  .stories article {
    padding: 0.85rem;
    border-radius: 16px;
  }
}

@media (max-width: 360px) {
  .page {
    padding: 0.75rem 0.5rem;
  }

  .hero-section h1 {
    font-size: 1.35rem;
  }

  .stories article {
    padding: 0.75rem;
    border-radius: 12px;
  }
}
</style>
