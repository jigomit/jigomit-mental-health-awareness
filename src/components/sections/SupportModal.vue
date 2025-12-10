<template>
  <teleport to="body">
    <div v-if="open" class="backdrop" role="dialog" aria-modal="true" aria-label="Live chat placeholder">
      <section class="modal">
        <header>
          <p>Calm Chatbot (beta)</p>
          <button @click="$emit('close')" aria-label="Close modal">×</button>
        </header>
        <div class="body">
          <p>
            Our AI-assisted responder drafts grounding questions while a human supervisor reviews every
            message. Launching Q3—tap “Get Help” to opt into early tests.
          </p>
          <ul>
            <li>Encrypted and deleted after 24 hours</li>
            <li>Pairs you with a clinician in under 2 minutes</li>
            <li>Shares consent settings before any personal question</li>
          </ul>
          <RouterLink class="primary" to="/get-help">Preview hotline scripts</RouterLink>
        </div>
      </section>
    </div>
  </teleport>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  open: Boolean
});

defineEmits(['close']);
</script>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(23, 32, 56, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}

.modal {
  width: min(90vw, 480px);
  background: #fff;
  border-radius: 24px;
  padding: 1.5rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

header button {
  border: none;
  background: transparent;
  font-size: 1.5rem;
}

.body ul {
  margin: 1rem 0;
  padding-left: 1.1rem;
}

.primary {
  display: inline-block;
  margin-top: 1rem;
  background: var(--color-primary);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
}

@media (max-width: 480px) {
  .modal {
    padding: 1.25rem;
    border-radius: 20px;
  }

  .body ul {
    padding-left: 1rem;
  }

  .primary {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 360px) {
  .modal {
    padding: 1rem;
    border-radius: 16px;
  }

  header p {
    font-size: 0.9rem;
  }

  .body p,
  .body li {
    font-size: 0.85rem;
  }

  .body ul {
    margin: 0.75rem 0;
  }

  .primary {
    padding: 0.65rem 1.25rem;
    font-size: 0.9rem;
  }
}
</style>
