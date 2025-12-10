<template>
  <section class="timeline">
    <article v-for="item in items" :key="item.year" class="milestone">
      <p class="year">{{ item.year }}</p>
      <h3>{{ item.title }}</h3>
      <p>{{ item.detail }}</p>
    </article>
  </section>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});
</script>

<style scoped>
.timeline {
  display: grid;
  gap: clamp(0.75rem, 2vw, 1rem);
  border-left: 2px solid var(--color-border);
  padding-left: clamp(0.85rem, 2vw, 1rem);
  margin-left: 0.5rem;
}

.milestone {
  position: relative;
  padding: clamp(0.85rem, 2vw, 1rem);
  border-radius: clamp(12px, 2vw, 16px);
  background: rgba(255, 255, 255, 0.9);
}

.milestone h3 {
  font-size: var(--text-lg);
}

.milestone p {
  font-size: var(--text-sm);
  line-height: 1.6;
}

.milestone::before {
  content: '';
  position: absolute;
  left: calc(-1 * clamp(1.35rem, 3vw, 1.6rem));
  top: 1.2rem;
  width: clamp(0.6rem, 1.5vw, 0.8rem);
  height: clamp(0.6rem, 1.5vw, 0.8rem);
  background: var(--color-primary);
  border-radius: 50%;
}

.year {
  color: var(--color-primary);
  font-weight: 700;
  font-size: var(--text-sm);
}

@media (max-width: 480px) {
  .timeline {
    margin-left: 0.25rem;
    padding-left: 0.75rem;
  }

  .milestone::before {
    left: -1.15rem;
    width: 0.5rem;
    height: 0.5rem;
  }
}

@media (max-width: 360px) {
  .timeline {
    padding-left: 0.6rem;
    gap: 0.6rem;
  }

  .milestone {
    padding: 0.75rem;
    border-radius: 10px;
  }

  .milestone h3 {
    font-size: var(--text-base);
  }

  .milestone::before {
    left: -1rem;
    top: 1rem;
  }
}
</style>
