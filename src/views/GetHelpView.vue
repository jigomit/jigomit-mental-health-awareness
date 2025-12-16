<template>
  <div class="page">
    <section class="hero-section">
      <header>
        <p class="eyebrow">Get help now</p>
        <h1>You deserve support in this moment</h1>
        <p>
          Call 988 or tap the button below to start a live chat. If you or someone near you is in immediate
          danger, contact local emergency services.
        </p>
        <div class="actions">
          <a class="primary" href="tel:988" aria-label="Call 988 Suicide and Crisis Lifeline now">Call 988 now</a>
          <button class="secondary" type="button" @click="modalOpen = true">Preview chatbot beta</button>
        </div>
      </header>
      <figure class="hero-image">
        <img :src="crisisImage" alt="Crisis support and mental health help" loading="lazy" width="600" height="400" decoding="async" />
      </figure>
    </section>

    <section>
      <h2>Global helpline directory</h2>
      <HelplinePanel :helplines="helplineDirectory" />
    </section>

    <section class="safety">
      <h2>Safety planning snapshot</h2>
      <ol>
        <li>Pause, breathe, and notice five items around you.</li>
        <li>Call or text a trusted supporter; we can conference them in.</li>
        <li>Remove harmful items nearby or ask someone to help.</li>
        <li>Create a micro-plan for the next hour (rest, hydrate, contact friend).</li>
      </ol>
      <p class="microcopy">We only store your plan with consent and you can delete it anytime.</p>
    </section>

    <SupportModal :open="modalOpen" @close="modalOpen = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePageMeta } from '../composables/usePageMeta';
import { useBreadcrumbSchema, useFaqSchema } from '../composables/useSeoSchema';
import HelplinePanel from '../components/sections/HelplinePanel.vue';
import SupportModal from '../components/sections/SupportModal.vue';
import { helplineDirectory } from '../data/content';

const route = useRoute();
usePageMeta(route.meta?.title, route.meta?.description, {
  path: '/get-help',
  image: '/crisis-image.jpg',
  keywords: 'talk to someone now free, 988 crisis helpline, crisis text line, free therapy chat, depression helpline, anxiety crisis support, suicide prevention hotline'
});

// SEO: Breadcrumb schema
useBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Get Help Now', path: '/get-help' }
]);

// SEO: FAQ schema for crisis help page
useFaqSchema([
  {
    question: 'How do I get free mental health help right now?',
    answer: 'Call 988 (free, 24/7), text HOME to 741741, or use our online chat. All services are completely free, confidential, and available immediately with no insurance required.'
  },
  {
    question: 'Is the 988 crisis helpline really free?',
    answer: 'Yes, the 988 Suicide and Crisis Lifeline is 100% free, available 24/7, and confidential. You can call, text, or chat online with trained counselors at no cost.'
  },
  {
    question: 'What should I do if someone I know is suicidal?',
    answer: 'Stay with them, listen without judgment, remove access to harmful items if possible, and call 988 together. Do not leave them alone. If in immediate danger, call 911.'
  },
  {
    question: 'Can I text instead of calling a crisis line?',
    answer: 'Yes! Text HOME to 741741 for the Crisis Text Line, or text 988. Both are free, confidential, and available 24/7 with trained crisis counselors.'
  }
]);

const crisisImage = '/crisis-image.jpg'; // Crisis helpline - urgent support hand reaching

const modalOpen = ref(false);
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
  color: var(--color-alert);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.primary,
.secondary {
  border-radius: 999px;
  padding: 0.85rem 1.6rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.primary:active,
.secondary:active {
  transform: scale(0.98);
}

.primary {
  background: var(--color-alert);
  color: #fff;
}

.secondary {
  border: 1px solid var(--color-alert);
  color: var(--color-alert);
  background: transparent;
}

.safety {
  border-radius: 20px;
  border: 1px solid var(--color-border);
  padding: 1.5rem;
  background: #fff;
}

ol {
  padding-left: 1.25rem;
}

.microcopy {
  font-size: 0.9rem;
  color: var(--color-neutral-600);
}

@media (max-width: 768px) {
  .hero-section {
    text-align: center;
  }

  .hero-image {
    order: -1;
  }

  .actions {
    justify-content: center;
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

  .actions {
    flex-direction: column;
    gap: 0.75rem;
  }

  .primary,
  .secondary {
    width: 100%;
    text-align: center;
    padding: 0.85rem 1.4rem;
  }

  .safety {
    padding: 1.15rem;
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

  .primary,
  .secondary {
    padding: 0.75rem 1.2rem;
    font-size: 0.9rem;
  }

  .safety {
    padding: 1rem;
    border-radius: 14px;
  }

  ol {
    padding-left: 1rem;
  }
}
</style>
