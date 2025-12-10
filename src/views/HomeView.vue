<template>
  <div class="page home">
    <HeroBanner
      eyebrow="Immediate, stigma-free care"
      title="Hope, helplines, and healing you can trust today"
      description="Connect with licensed counsellors, community responders, and peer supporters who answer within seconds and stay until you feel steady."
      :primary-cta="{ label: 'Get help now', to: '/get-help' }"
      :secondary-cta="{ label: 'Explore resources', to: '/resources' }"
      microcopy="Confidential + encrypted helpline."
      :image="heroImage"
    />

    <StatsShowcase :stats="quickStats" />

    <section class="section">
      <div class="section__header">
        <p class="eyebrow">What we provide</p>
        <h2>Care pathways designed with clinicians and lived-experience leaders</h2>
      </div>
      <CardGrid :cards="serviceHighlights" />
    </section>

    <section class="section illustration">
      <div>
        <p class="eyebrow">Campaigns with empathy</p>
        <h2>Every message pairs a calming tone with a clear action</h2>
        <p>
          Inspired by global leaders such as Beyond Blue and CALM, we crafted microcopy that thanks
          supporters, outlines privacy, and gets to the point faster so visitors know exactly what to do.
        </p>
        <ul>
          <li>Warm helpline button persists on every page</li>
          <li>Donation ask follows impact metric within 2 scrolls</li>
          <li>Reduced-motion toggle for sensory-friendly journeys</li>
        </ul>
      </div>
      <figure>
        <img :src="communityImage" alt="Person finding inner peace through mindfulness" loading="lazy" />
        <figcaption>Finding calm through mindful self-care practices.</figcaption>
      </figure>
    </section>

    <TestimonialCarousel :testimonials="testimonials" />

    <CallToAction
      eyebrow="Ready when you are"
      title="Start with a gentle text or dive into a full care plan."
      copy="No insurance prerequisites, no judgement. Choose the rhythm and location that keeps you grounded."
      :primary="{ label: 'Plan a care session', to: '/services' }"
      :secondary="{ label: 'Fund a responder', to: '/donate' }"
    />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { usePageMeta } from '../composables/usePageMeta';
import HeroBanner from '../components/sections/HeroBanner.vue';
import StatsShowcase from '../components/sections/StatsShowcase.vue';
import CardGrid from '../components/sections/CardGrid.vue';
import TestimonialCarousel from '../components/sections/TestimonialCarousel.vue';
import CallToAction from '../components/sections/CallToAction.vue';
import { serviceHighlights, quickStats, testimonials } from '../data/content';

const route = useRoute();
usePageMeta(route.meta?.title, route.meta?.description);

const heroImage = {
  src: 'https://i.pinimg.com/736x/9f/a4/3d/9fa43da63004514558bc7b7f80511261.jpg',
  srcset: '',
  alt: 'Mental health awareness - support and hope'
};

const communityImage = 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80';
</script>

<style scoped>
.page {
  padding: clamp(1rem, 3vw, 3.25rem);
  display: flex;
  flex-direction: column;
  gap: clamp(1.75rem, 4vw, 3.75rem);
}

.section {
  display: grid;
  gap: clamp(1rem, 2vw, 1.5rem);
}

.section__header {
  max-width: 560px;
}

.section__header h2 {
  font-size: var(--text-2xl);
}

.eyebrow {
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.illustration {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-items: center;
  gap: clamp(1.5rem, 3vw, 2.5rem);
}

.illustration > div {
  order: 1;
}

.illustration figure {
  order: 2;
  margin: 0;
}

.illustration h2 {
  font-size: var(--text-xl);
}

.illustration p {
  font-size: var(--text-sm);
  line-height: 1.7;
}

figure img {
  width: 100%;
  border-radius: clamp(16px, 3vw, 24px);
}

figure figcaption {
  font-size: var(--text-xs);
  color: var(--color-neutral-500);
  margin-top: 0.75rem;
  text-align: center;
}

ul {
  padding-left: 1.25rem;
  font-size: var(--text-sm);
}

ul li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .section__header {
    text-align: center;
    max-width: 100%;
  }

  .illustration {
    text-align: center;
  }

  .illustration ul {
    text-align: left;
    display: inline-block;
  }
}

@media (max-width: 480px) {
  .page {
    padding: 0.75rem;
    gap: 1.5rem;
  }

  .section__header h2 {
    font-size: var(--text-xl);
  }

  .illustration h2 {
    font-size: var(--text-lg);
  }

  figure figcaption {
    margin-top: 0.5rem;
  }
}

@media (max-width: 360px) {
  .page {
    padding: 0.5rem;
    gap: 1.25rem;
  }

  .section__header h2 {
    font-size: var(--text-lg);
  }

  .illustration h2 {
    font-size: var(--text-base);
  }

  ul {
    padding-left: 1rem;
  }
}
</style>
