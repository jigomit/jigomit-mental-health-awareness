<template>
  <section class="grid" ref="gridRef">
    <article v-for="card in cards" :key="card.title" class="card" data-animate>
      <p class="icon" aria-hidden="true">{{ card.icon }}</p>
      <h3>{{ card.title }}</h3>
      <p>{{ card.copy }}</p>
      <RouterLink :to="card.link" class="link">Learn more</RouterLink>
    </article>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { createRevealAnimations } from '../../animations/gsapHelpers';
import { useReducedMotion } from '../../composables/useReducedMotion';

const props = defineProps({
  cards: {
    type: Array,
    default: () => []
  }
});

const gridRef = ref(null);
const { reduceMotion } = useReducedMotion();
let cleanup = null;

const init = () => {
  cleanup?.();
  if (gridRef.value) {
    cleanup = createRevealAnimations(gridRef.value.querySelectorAll('[data-animate]'), reduceMotion.value);
  }
};

onMounted(init);
watch(() => reduceMotion.value, () => init());
onBeforeUnmount(() => cleanup?.());
</script>

<style scoped>
.grid {
  display: grid;
  gap: clamp(1rem, 2vw, 2.5rem);
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.card {
  padding: clamp(1.25rem, 3vw, 2rem);
  border-radius: clamp(18px, 3vw, 24px);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  min-height: auto;
  box-shadow: 0 18px 35px rgba(12, 19, 41, 0.07);
  display: flex;
  flex-direction: column;
}

.card h3 {
  font-size: var(--text-lg);
}

.card p {
  font-size: var(--text-sm);
  flex: 1;
}

.icon {
  font-size: clamp(1.5rem, 4vw, 1.8rem);
  margin-bottom: 0.5rem;
}

.link {
  color: var(--color-primary);
  font-weight: 600;
  font-size: var(--text-sm);
  margin-top: auto;
  padding-top: 0.5rem;
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .card {
    padding: 1rem;
  }

  .card h3 {
    font-size: var(--text-base);
  }
}

@media (max-width: 360px) {
  .card {
    padding: 0.85rem;
    border-radius: 14px;
  }

  .icon {
    font-size: 1.35rem;
  }
}
</style>
