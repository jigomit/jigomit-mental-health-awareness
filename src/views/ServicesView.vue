<template>
  <div class="page">
    <section class="hero-section">
      <header>
        <p class="eyebrow">Services</p>
        <h1>From first text to long-term care, we make each step softer</h1>
        <p>
          Inspired by CALM, Lifeline, and Mind, we trimmed jargon, added alt text to every illustration,
          and surfaced CTA buttons within every section so visitors never hunt for help.
        </p>
      </header>
      <figure class="hero-image">
        <img :src="servicesImage" alt="Mental health therapy and counseling services" loading="lazy" width="600" height="400" decoding="async" />
      </figure>
    </section>

    <section class="services">
      <article>
        <h2 id="counselling">Counselling</h2>
        <p>
          Video, phone, and in-person therapy with clinicians trained in trauma, perinatal mood
          disorders, and culturally specific care.
        </p>
        <ul>
          <li>Sliding scale from $20</li>
          <li>Interpreter partners for 17 languages</li>
          <li>Secure portal with same-day scheduling</li>
        </ul>
      </article>
      <article>
        <h2>Crisis Support</h2>
        <p>
          24/7 helpline, text, and WhatsApp with real humans who can conference in local services or stay
          with you via live chat.
        </p>
        <ul>
          <li>Average response time: 12 seconds</li>
          <li>Warm line follow-ups, not scripted bots</li>
          <li>Safety plans saved only with consent</li>
        </ul>
      </article>
      <article>
        <h2>Campaigns & Training</h2>
        <p>
          Toolkits and activations for schools, workplaces, and city governments that move audiences from
          awareness to action.
        </p>
        <ul>
          <li>Turn-key creative for social + OOH</li>
          <li>Facilitator guides to host support circles</li>
          <li>Impact dashboards to share with donors</li>
        </ul>
      </article>
      <article>
        <h2>How to Access</h2>
        <p>
          Choose a channel, specify the intensity you need, and get matched with the right responder in
          under two minutes.
        </p>
        <ol>
          <li>Tap “Get Help” for instant phone/text options</li>
          <li>Complete the secure intake in 3 questions</li>
          <li>Schedule or connect immediately</li>
        </ol>
        <RouterLink class="primary" to="/get-help">Start intake</RouterLink>
      </article>
    </section>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { usePageMeta } from '../composables/usePageMeta';
import { useBreadcrumbSchema, useServiceSchema } from '../composables/useSeoSchema';

const route = useRoute();
usePageMeta(route.meta?.title, route.meta?.description, {
  path: '/services',
  image: '/services-image.jpg',
  keywords: 'free online therapy, CBT counseling, trauma therapy, sliding scale therapists, mental health services'
});

// SEO: Breadcrumb schema
useBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' }
]);

// SEO: Service schema for rich snippets
useServiceSchema([
  {
    title: 'Free Online Therapy & Counseling',
    description: 'Video, phone, and in-person therapy with trauma-informed clinicians. Sliding scale from $20, 17 languages supported, same-day scheduling available.'
  },
  {
    title: '24/7 Crisis Support Helpline',
    description: 'Round-the-clock helpline, text, and WhatsApp support. Average response time 12 seconds. Real human responders, not bots. Safety plans saved only with consent.'
  },
  {
    title: 'Mental Health Campaigns & Training',
    description: 'Toolkits for schools, workplaces, and governments. Turn-key creative for social media, facilitator guides, and impact dashboards.'
  },
  {
    title: 'Cognitive Behavioral Therapy (CBT)',
    description: 'Evidence-based CBT therapy for anxiety, depression, and PTSD. Free and low-cost options available without insurance.'
  }
]);

const servicesImage = '/services-image.jpg'; // Therapy session - counseling services
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

.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

article {
  border-radius: 24px;
  border: 1px solid var(--color-border);
  padding: 1.5rem;
  background: #fff;
}

.primary {
  display: inline-block;
  margin-top: 1rem;
  border-radius: 999px;
  background: var(--color-primary);
  color: #fff;
  padding: 0.75rem 1.4rem;
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

  .services {
    gap: 1rem;
  }

  article {
    padding: 1.15rem;
    border-radius: 18px;
  }

  .primary {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 360px) {
  .page {
    padding: 0.75rem 0.5rem;
  }

  .hero-section h1 {
    font-size: 1.35rem;
  }

  article {
    padding: 1rem;
    border-radius: 14px;
  }

  .primary {
    padding: 0.7rem 1.2rem;
  }
}
</style>
