<template>
  <section class="events">
    <article v-for="event in events" :key="event.name" class="event" data-animate>
      <p class="date">{{ event.date }}</p>
      <div>
        <h3>{{ event.name }}</h3>
        <p class="location">{{ event.location }}</p>
        <p>{{ event.detail }}</p>
      </div>
      <RouterLink class="link" to="/contact" :aria-label="`RSVP for ${event.name}`">RSVP</RouterLink>
    </article>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  events: {
    type: Array,
    default: () => []
  }
});
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
}

.event {
  display: grid;
  grid-template-columns: 70px 1fr auto;
  gap: clamp(0.75rem, 2vw, 1rem);
  padding: clamp(1rem, 3vw, 1.5rem);
  border-radius: clamp(18px, 3vw, 24px);
  background: var(--color-neutral-50);
  border: 1px solid var(--color-border);
  align-items: center;
}

.event h3 {
  font-size: var(--text-lg);
  margin-bottom: 0.25rem;
}

.event p {
  font-size: var(--text-sm);
  margin: 0.15rem 0;
}

.date {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-primary);
  text-align: center;
}

.location {
  color: var(--color-neutral-600);
  font-size: var(--text-xs);
}

.link {
  align-self: center;
  color: var(--color-primary);
  font-weight: 600;
  font-size: var(--text-sm);
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-primary);
  border-radius: 999px;
  transition: background 0.2s ease, color 0.2s ease;
}

.link:active {
  background: var(--color-primary);
  color: #fff;
}

@media (max-width: 680px) {
  .event {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .date {
    font-size: var(--text-lg);
  }

  .link {
    justify-self: center;
    width: 100%;
    max-width: 200px;
    text-align: center;
  }
}

@media (max-width: 360px) {
  .events {
    gap: 0.6rem;
  }

  .event {
    padding: 0.85rem;
    border-radius: 14px;
    gap: 0.6rem;
  }

  .event h3 {
    font-size: var(--text-base);
  }

  .date {
    font-size: var(--text-base);
  }

  .link {
    padding: 0.4rem 0.85rem;
    font-size: var(--text-xs);
  }
}
</style>
