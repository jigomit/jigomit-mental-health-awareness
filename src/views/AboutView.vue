<template>
  <div class="page">
    <section class="hero-section">
      <header>
        <p class="eyebrow">About us</p>
        <h1>Clinicians, designers, and advocates working in sync</h1>
        <p>
          We studied leading organisations like 988 Lifeline, Mind UK, and Beyond Blue to architect a
          calmer visitor journey—transparent copy, faster CTAs, and data-backed storytelling.
        </p>
      </header>
      <figure class="hero-image">
        <img :src="aboutImage" alt="About our mental health community and mission" loading="lazy" />
      </figure>
    </section>
    <section class="grid">
      <article>
        <h2>Mission</h2>
        <p>
          Build a world where asking for help is as normal as texting a friend. We co-design programs with
          survivors and centre confidentiality across counselling, campaigns, and crisis response.
        </p>
      </article>
      <article>
        <h2>Evidence</h2>
        <ul>
          <li>Peer-reviewed safety planning tools adopted by 240+ clinics</li>
          <li>90% of callers report feeling calmer after the first exchange</li>
          <li>ISO 27001 controls on the helpline tech stack</li>
        </ul>
      </article>
      <figure>
        <img :src="teamImage" alt="Collaborative counselling session" loading="lazy" />
        <figcaption>Illustration of collaborative counselling.</figcaption>
      </figure>
    </section>
    <section>
      <h2>Team</h2>
      <div class="team">
        <article v-for="member in team" :key="member.name">
          <p class="name">{{ member.name }}</p>
          <p class="role">{{ member.role }}</p>
          <p>{{ member.focus }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { usePageMeta } from '../composables/usePageMeta';

const route = useRoute();
usePageMeta(route.meta?.title, route.meta?.description);

const aboutImage = 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80'; // Our mission - mental health journey
const teamImage = 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80'; // Team collaboration - caring professionals

const team = [
  { name: 'Dr. Lila Morgan', role: 'Clinical Director', focus: 'Trauma-informed therapy + telehealth quality.' },
  { name: 'Samuel Lee', role: 'Campaign Strategist', focus: 'Hopeful storytelling and donor conversion.' },
  { name: 'Amira Santos', role: 'Peer Support Lead', focus: 'Volunteer listening labs and warm lines.' }
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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  align-items: center;
}

.team {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.team article {
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
}

.name {
  font-weight: 600;
}

.role {
  color: var(--color-neutral-600);
}

figure img {
  width: 100%;
  border-radius: 24px;
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

  .team article {
    padding: 0.85rem;
  }

  .grid {
    gap: 1rem;
  }
}

@media (max-width: 360px) {
  .page {
    padding: 0.75rem 0.5rem;
  }

  .hero-section h1 {
    font-size: 1.35rem;
  }

  .team {
    gap: 0.75rem;
  }

  .team article {
    padding: 0.75rem;
    border-radius: 12px;
  }
}
</style>
