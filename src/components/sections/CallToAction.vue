<template>
  <section class="cta">
    <div>
      <p class="eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
      <p>{{ copy }}</p>
    </div>
    <div class="cta__actions">
      <RouterLink class="primary" :to="primary.to">{{ primary.label }}</RouterLink>
      <RouterLink class="secondary" :to="secondary.to">{{ secondary.label }}</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  eyebrow: { type: String, default: 'Next step' },
  title: String,
  copy: String,
  primary: Object,
  secondary: Object
});
</script>

<style scoped>
.cta {
  margin: clamp(1.5rem, 3vw, 3rem) 0;
  padding: clamp(1.25rem, 3vw, 2rem);
  border-radius: clamp(20px, 4vw, 32px);
  background: linear-gradient(120deg, var(--color-primary-soft), var(--color-accent-soft));
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: clamp(1rem, 3vw, 2rem);
}

.cta > div:first-child {
  flex: 1;
  min-width: 200px;
}

.cta h2 {
  font-size: var(--text-xl);
}

.cta p {
  font-size: var(--text-sm);
}

.cta__actions {
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 1rem);
  flex-wrap: wrap;
}

.primary,
.secondary {
  border-radius: 999px;
  padding: clamp(0.7rem, 2vw, 0.9rem) clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 600;
  font-size: var(--text-sm);
  text-align: center;
  transition: transform 0.2s ease;
  white-space: nowrap;
}

.primary:active,
.secondary:active {
  transform: scale(0.98);
}

.primary {
  background: var(--color-primary);
  color: #fff;
}

.secondary {
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
}

@media (max-width: 640px) {
  .cta {
    flex-direction: column;
    text-align: center;
  }

  .cta__actions {
    width: 100%;
    flex-direction: column;
  }

  .primary,
  .secondary {
    width: 100%;
  }
}

@media (max-width: 360px) {
  .cta {
    padding: 1rem;
    border-radius: 16px;
  }

  .cta h2 {
    font-size: var(--text-lg);
  }

  .primary,
  .secondary {
    padding: 0.65rem 1rem;
  }
}
</style>
