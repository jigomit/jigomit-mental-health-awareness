<template>
  <div class="page">
    <section class="hero-section">
      <header>
        <p class="eyebrow">Resources</p>
        <h1>Articles and guides curated with clinical review</h1>
        <p>
          Downloadable PDFs, interactive worksheets, and bilingual audio groundings. Every piece includes
          alt text suggestions and plain-language summaries for SEO clarity.
        </p>
      </header>
      <figure class="hero-image">
        <img :src="resourcesImage" alt="Mental health self-help resources and guides" loading="lazy" width="600" height="400" decoding="async" />
      </figure>
    </section>
    <ResourceList :resources="resourceLibrary" />
    <CallToAction
      eyebrow="Need a facilitator?"
      title="Request a custom workshop kit for your organisation."
      copy="We adapt every slide, script, and workbook to your team’s lived experience."
      :primary="{ label: 'Book a consult', to: '/contact' }"
      :secondary="{ label: 'Download samples', to: '/resources' }"
    />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { usePageMeta } from '../composables/usePageMeta';
import ResourceList from '../components/sections/ResourceList.vue';
import CallToAction from '../components/sections/CallToAction.vue';
import { resourceLibrary } from '../data/content';

const route = useRoute();
usePageMeta(route.meta?.title, route.meta?.description);

const resourcesImage = '/resources-image.jpg'; // Self-help meditation - mental wellness resources
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

@media (max-width: 768px) {
  .hero-section {
    text-align: center;
  }

  .hero-image {
    order: -1;
    margin: 0;
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
}

@media (max-width: 360px) {
  .page {
    padding: 0.75rem 0.5rem;
  }

  .hero-section h1 {
    font-size: 1.35rem;
  }
}
</style>
