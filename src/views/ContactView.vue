<template>
  <div class="page">
    <section class="hero-section">
      <header>
        <p class="eyebrow">Contact & Volunteer</p>
        <h1>We respond with empathy and action within two business hours</h1>
        <p>
          Prefer texting? Mention that in the form and we will shift to your safest channel. All
          submissions are encrypted and monitored by clinical supervisors.
        </p>
      </header>
      <figure class="hero-image">
        <img :src="contactImage" alt="Contact our mental health support team" loading="lazy" />
      </figure>
    </section>
    <section class="grid">
      <ContactForm :options="volunteerOptions" />
      <article class="details">
        <h2>Other ways to reach us</h2>
        <ul>
          <li>Email: <a href="mailto:partners@mentalhealthawareness.org">partners@mentalhealthawareness.org</a></li>
          <li>Media line: <a href="tel:+18005559876">+1 (800) 555-9876</a></li>
          <li>Press kit: download via Resources page</li>
        </ul>
        <p class="microcopy">We never share submissions outside the support team.</p>
      </article>
    </section>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { usePageMeta } from '../composables/usePageMeta';
import ContactForm from '../components/sections/ContactForm.vue';
import { volunteerOptions } from '../data/content';

const route = useRoute();
usePageMeta(route.meta?.title, route.meta?.description);

const contactImage = 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=600&q=80'; // Contact - reaching out for help
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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.details {
  border-radius: 24px;
  border: 1px solid var(--color-border);
  padding: 1.5rem;
  background: #fff;
}

.details h2 {
  font-size: var(--text-xl);
  margin-bottom: 1rem;
}

ul {
  padding-left: 1.25rem;
  margin: 0 0 1rem 0;
}

ul li {
  margin-bottom: 0.75rem;
  line-height: 1.5;
  font-size: var(--text-sm);
}

ul li a {
  color: var(--color-primary);
  word-break: break-all;
  display: inline;
}

.microcopy {
  font-size: var(--text-xs);
  color: var(--color-neutral-600);
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
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

  .grid {
    gap: 1rem;
  }

  .details {
    padding: 1.15rem;
    border-radius: 18px;
  }

  .details h2 {
    font-size: var(--text-lg);
  }

  ul li {
    font-size: var(--text-xs);
  }
}

@media (max-width: 360px) {
  .page {
    padding: 0.75rem 0.5rem;
  }

  .hero-section h1 {
    font-size: 1.35rem;
  }

  .details {
    padding: 1rem;
    border-radius: 14px;
  }

  .details h2 {
    font-size: var(--text-base);
    margin-bottom: 0.75rem;
  }

  ul {
    padding-left: 1rem;
  }

  ul li {
    margin-bottom: 0.6rem;
  }

  .microcopy {
    margin-top: 0.75rem;
    padding-top: 0.75rem;
  }
}
</style>
