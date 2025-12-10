<template>
  <section class="helplines">
    <article v-for="line in helplines" :key="line.region" class="card">
      <p class="region">{{ line.region }}</p>
      <p class="phone">
        <a :href="`tel:${line.phone.replace(/[^0-9]/g, '')}`">{{ line.phone }}</a>
      </p>
      <p>
        Text: <span>{{ line.text }}</span>
      </p>
      <p class="availability">{{ line.availability }}</p>
    </article>
  </section>
</template>

<script setup>
const props = defineProps({
  helplines: Array
});
</script>

<style scoped>
.helplines {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: clamp(0.75rem, 2vw, 1rem);
}

.card {
  padding: clamp(0.85rem, 2vw, 1rem);
  border-radius: clamp(16px, 3vw, 20px);
  border: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.95);
}

.card p {
  font-size: var(--text-sm);
  margin: 0.25rem 0;
}

.region {
  font-weight: 700;
  font-size: var(--text-base);
}

.phone a {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-neutral-900);
  display: inline-block;
  padding: 0.25rem 0;
}

.availability {
  color: var(--color-neutral-600);
  font-size: var(--text-xs);
}

@media (max-width: 480px) {
  .helplines {
    grid-template-columns: 1fr;
  }

  .card {
    text-align: center;
  }
}

@media (max-width: 360px) {
  .helplines {
    gap: 0.6rem;
  }

  .card {
    padding: 0.75rem;
    border-radius: 12px;
  }

  .phone a {
    font-size: var(--text-lg);
  }
}
</style>
