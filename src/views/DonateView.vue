<template>
  <div class="page">
    <section class="hero-section">
      <header>
        <p class="eyebrow">Donate</p>
        <h1>Fuel counsellors, crisis lines, and prevention tours</h1>
        <p>
          Inspired by GiveWell-grade UX, we trimmed friction to three steps: choose amount, share contact,
          confirm payment. Every level pairs a tangible impact statement.
        </p>
      </header>
      <figure class="hero-image">
        <img :src="donationImage" alt="Support mental health through donations" loading="lazy" width="600" height="400" decoding="async" />
      </figure>
    </section>
    <section class="grid">
      <DonationForm :tiers="donationTiers" :confidentiality="confidentialityNotes" />
      <article class="impact">
        <h2>Where your support goes</h2>
        <ul>
          <li>24/7 helpline staffing and secondary supervision</li>
          <li>Pop-up calm rooms during campaign activations</li>
          <li>Scholarships for ongoing counselling post-crisis</li>
        </ul>
        <RouterLink class="secondary" to="/impact">See transparency report</RouterLink>
      </article>
    </section>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { usePageMeta } from '../composables/usePageMeta';
import DonationForm from '../components/sections/DonationForm.vue';
import { donationTiers, confidentialityNotes } from '../data/content';

const route = useRoute();
usePageMeta(route.meta?.title, route.meta?.description);

const donationImage = '/donate-image.jpg'; // Donate - giving heart hands support
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
  max-width: 400px;
  margin: 0 auto;
  display: block;
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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.impact {
  border-radius: 24px;
  border: 1px solid var(--color-border);
  padding: 1.5rem;
  background: var(--color-neutral-50);
}

.secondary {
  display: inline-block;
  margin-top: 1.5rem;
  border-radius: 999px;
  border: 1px solid var(--color-primary);
  padding: 0.75rem 1.4rem;
  color: var(--color-primary);
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

  .impact {
    padding: 1.15rem;
    border-radius: 18px;
  }

  .secondary {
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

  .impact {
    padding: 1rem;
    border-radius: 14px;
  }

  .secondary {
    padding: 0.7rem 1.2rem;
  }
}
</style>
