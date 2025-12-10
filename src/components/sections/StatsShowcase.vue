<template>
  <section class="stats" ref="statsRef">
    <article
      v-for="stat in stats"
      :key="stat.label"
      class="stat"
      data-animate
    >
      <p class="value">{{ stat.value }}</p>
      <p class="label">{{ stat.label }}</p>
    </article>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { createRevealAnimations } from '../../animations/gsapHelpers';
import { useReducedMotion } from '../../composables/useReducedMotion';

const props = defineProps({
  stats: {
    type: Array,
    default: () => []
  }
});

const statsRef = ref(null);
const { reduceMotion } = useReducedMotion();
let cleanup = null;

const init = () => {
  cleanup?.();
  if (statsRef.value) {
    cleanup = createRevealAnimations(statsRef.value.querySelectorAll('[data-animate]'), reduceMotion.value);
  }
};

onMounted(init);
watch(() => reduceMotion.value, () => init());
onBeforeUnmount(() => cleanup?.());
</script>

<style scoped>
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: clamp(0.75rem, 2vw, 2rem);
}

.stat {
  padding: clamp(1rem, 3vw, 1.75rem);
  border-radius: clamp(16px, 3vw, 24px);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  box-shadow: 0 14px 32px rgba(12, 19, 41, 0.06);
  text-align: center;
}

.value {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 0.25rem;
}

.label {
  color: var(--color-neutral-600);
  font-size: var(--text-xs);
  line-height: 1.4;
}

@media (max-width: 480px) {
  .stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
  }

  .stat {
    padding: 0.85rem;
  }

  .value {
    font-size: var(--text-xl);
  }
}

@media (max-width: 360px) {
  .stats {
    gap: 0.5rem;
  }

  .stat {
    padding: 0.75rem;
    border-radius: 12px;
  }

  .value {
    font-size: var(--text-lg);
  }

  .label {
    font-size: 0.65rem;
  }
}
</style>
