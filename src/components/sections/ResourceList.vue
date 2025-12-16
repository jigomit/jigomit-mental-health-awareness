<template>
  <section class="resources">
    <article v-for="item in resources" :key="item.title" class="resource" data-animate>
      <p class="type">{{ item.type }} · {{ item.length }}</p>
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <a :href="item.link" class="link" :aria-label="`Read more about ${item.title}`">Download / Read</a>
    </article>
  </section>
</template>

<script setup>
const props = defineProps({
  resources: {
    type: Array,
    default: () => []
  }
});
</script>

<style scoped>
.resources {
  display: grid;
  gap: clamp(0.85rem, 2vw, 1.25rem);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.resource {
  border-radius: clamp(16px, 3vw, 20px);
  border: 1px solid var(--color-border);
  padding: clamp(1rem, 2vw, 1.25rem);
  background: #fff;
  display: flex;
  flex-direction: column;
}

.resource h3 {
  font-size: var(--text-lg);
}

.resource p {
  font-size: var(--text-sm);
}

.type {
  font-size: var(--text-xs);
  color: var(--color-primary-dark);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.link {
  color: var(--color-primary);
  font-weight: 600;
  font-size: var(--text-sm);
  margin-top: auto;
  padding-top: 0.5rem;
}

@media (max-width: 480px) {
  .resources {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 360px) {
  .resource {
    padding: 0.85rem;
    border-radius: 12px;
  }

  .resource h3 {
    font-size: var(--text-base);
  }
}
</style>
