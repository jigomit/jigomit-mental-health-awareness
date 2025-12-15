<template>
  <div class="helpline" role="complementary" aria-label="Emergency helpline">
    <a class="primary" href="tel:988" aria-label="Call 988 suicide and crisis lifeline">Call 988</a>
    <RouterLink class="secondary" to="/get-help" aria-label="Get help via chat or text">Chat / Text</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.helpline {
  position: fixed;
  bottom: clamp(0.75rem, 2vw, 1.25rem);
  right: clamp(0.75rem, 2vw, 1.25rem);
  display: flex;
  gap: 0.5rem;
  padding: 0.4rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 10px 30px rgba(40, 60, 120, 0.22);
  z-index: 12;
  contain: layout style;
}

.primary,
.secondary {
  border-radius: 999px;
  padding: clamp(0.55rem, 1.5vw, 0.65rem) clamp(0.75rem, 2vw, 1rem);
  font-weight: 600;
  font-size: var(--text-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary:active,
.secondary:active {
  transform: scale(0.97);
}

.primary {
  background: var(--color-alert);
  color: #fff;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.35);
}

.secondary {
  border: 1px solid var(--color-alert);
  color: var(--color-alert);
}

@media (max-width: 640px) {
  .helpline {
    left: 0.75rem;
    right: 0.75rem;
    bottom: 0.75rem;
    justify-content: center;
  }

  .primary,
  .secondary {
    flex: 1;
    text-align: center;
    max-width: 160px;
  }
}

@media (max-width: 380px) {
  .helpline {
    flex-direction: column;
    border-radius: 20px;
    left: 0.5rem;
    right: 0.5rem;
  }

  .primary,
  .secondary {
    max-width: none;
  }
}

@media (max-width: 360px) {
  .helpline {
    bottom: 0.5rem;
    left: 0.35rem;
    right: 0.35rem;
    padding: 0.35rem;
    border-radius: 16px;
  }

  .primary,
  .secondary {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
  }
}
</style>
