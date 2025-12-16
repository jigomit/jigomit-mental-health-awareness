<template>
  <div class="page home" role="article">
    <HeroBanner
      eyebrow="Your Mental Wellness Matters"
      title="Find Peace, Support & Healing Today"
      description="Connect with compassionate counsellors and mental health professionals available 24/7. You're not alone in this journey."
      :primary-cta="{ label: 'Get Help Now', to: '/get-help' }"
      :secondary-cta="{ label: 'Learn More', to: '/resources', ariaLabel: 'Learn more about our mental health resources and guides' }"
      :image="heroImage"
    />

    <StatsShowcase :stats="quickStats" />

    <section class="section" aria-labelledby="services-heading">
      <div class="section__header">
        <p class="eyebrow">Our Services</p>
        <h2 id="services-heading">Comprehensive Mental Health Support</h2>
      </div>
      <CardGrid :cards="serviceHighlights" />
    </section>

    <section class="section illustration" aria-labelledby="campaigns-heading">
      <div>
        <p class="eyebrow">Why Choose Us</p>
        <h2 id="campaigns-heading">Compassionate Care When You Need It Most</h2>
        <p>
          We believe everyone deserves access to quality mental health support. Our team of dedicated professionals is here to guide you through life's challenges with empathy and understanding.
        </p>
        <ul>
          <li>24/7 confidential support available</li>
          <li>Licensed and experienced professionals</li>
          <li>Personalized treatment plans</li>
          <li>Safe and judgment-free environment</li>
        </ul>
      </div>
      <figure>
        <img :src="communityImage" alt="Supportive hands reaching out - mental health community" loading="lazy" width="300" height="200" decoding="async" fetchpriority="low" />
      </figure>
    </section>

    <TestimonialCarousel :testimonials="testimonials" />

    <CallToAction
      eyebrow="Take the First Step"
      title="Your Journey to Wellness Starts Here"
      copy="Whether you need someone to talk to or comprehensive mental health care, we're here for you. No judgment, just support."
      :primary="{ label: 'Start Your Journey', to: '/services', ariaLabel: 'Start your mental wellness journey with our services' }"
      :secondary="{ label: 'Contact Us', to: '/contact', ariaLabel: 'Contact our mental health support team' }"
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
  src: '/hero-image.jpg',
  srcset: '',
  alt: 'Glowing brain held by hands - mental health awareness and neural wellness'
};

const communityImage = '/community-image.jpg';
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
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: clamp(16px, 3vw, 24px);
  contain: layout;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
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
