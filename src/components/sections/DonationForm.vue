<template>
  <div class="form-wrapper">
    <!-- Success State -->
    <div v-if="submitted" class="success-state">
      <div class="success-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
        </svg>
      </div>
      <h3 class="success-title">Thank You for Your Generosity!</h3>
      <p class="success-text">Your donation will directly support mental health services, helplines, and community programs.</p>

      <div class="success-details">
        <div class="detail-item highlight">
          <span class="detail-label">Donation Amount</span>
          <span class="detail-value amount">${{ finalAmount }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Frequency</span>
          <span class="detail-value">{{ frequency }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Impact</span>
          <span class="detail-value">{{ selectedTierImpact }}</span>
        </div>
      </div>

      <div class="impact-message">
        <span class="impact-icon">💜</span>
        <p>{{ selectedTierLabel }}</p>
      </div>

      <div class="success-actions">
        <button type="button" class="btn-primary" @click="resetForm">Make Another Donation</button>
        <RouterLink to="/impact" class="btn-secondary" aria-label="See your donation impact on mental health programs">See Your Impact</RouterLink>
      </div>
    </div>

    <!-- Form State -->
    <form v-else class="donation" @submit.prevent="handleSubmit">
      <fieldset>
        <legend>Choose an amount</legend>
        <label v-for="tier in tiers" :key="tier.amount">
          <input type="radio" name="amount" :value="tier.amount" v-model="selected" />
          <span class="amount">${{ tier.amount }}</span>
          <p>
            {{ tier.label }}
            <span>{{ tier.impact }}</span>
          </p>
        </label>
        <label class="custom">
          <span>Custom amount</span>
          <input type="number" min="10" placeholder="100" v-model="customAmount" @focus="selected = null" />
        </label>
      </fieldset>
      <label>
        Donation frequency
        <select v-model="frequency">
          <option>Monthly</option>
          <option>One-time</option>
          <option>Annual</option>
        </select>
      </label>
      <button type="submit" :disabled="isSubmitting">
        <span v-if="isSubmitting" class="spinner"></span>
        {{ isSubmitting ? 'Processing...' : 'Proceed to secure checkout' }}
      </button>
      <p class="privacy">{{ confidentiality }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  tiers: Array,
  confidentiality: String
});

const selected = ref(props.tiers?.[0]?.amount ?? 35);
const customAmount = ref('');
const frequency = ref('Monthly');
const submitted = ref(false);
const isSubmitting = ref(false);

const finalAmount = computed(() => {
  return customAmount.value || selected.value || 35;
});

const selectedTier = computed(() => {
  return props.tiers?.find(t => t.amount === selected.value);
});

const selectedTierLabel = computed(() => {
  if (customAmount.value) {
    return `Your generous $${customAmount.value} donation will make a real difference in someone's mental health journey.`;
  }
  return selectedTier.value?.label || 'Your donation will support mental health services.';
});

const selectedTierImpact = computed(() => {
  if (customAmount.value) {
    return 'Multiple therapy sessions and crisis support';
  }
  return selectedTier.value?.impact || 'Support mental health programs';
});

const handleSubmit = () => {
  isSubmitting.value = true;

  // Simulate payment processing
  setTimeout(() => {
    isSubmitting.value = false;
    submitted.value = true;
  }, 2000);
};

const resetForm = () => {
  submitted.value = false;
  selected.value = props.tiers?.[0]?.amount ?? 35;
  customAmount.value = '';
  frequency.value = 'Monthly';
};
</script>

<style scoped>
.form-wrapper {
  width: 100%;
}

.donation {
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
  padding: clamp(1.25rem, 3vw, 2rem);
  border-radius: clamp(18px, 3vw, 24px);
  border: 1px solid var(--color-border);
  background: #fff;
}

fieldset {
  border: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
  padding: 0;
}

fieldset legend {
  font-weight: 600;
  margin-bottom: 0.75rem;
  grid-column: 1 / -1;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: clamp(0.75rem, 2vw, 1rem);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;
}

label:has(input[type="radio"]:checked) {
  border-color: var(--color-primary);
  background: var(--color-primary-soft);
}

label p {
  margin: 0;
  font-size: var(--text-sm);
}

label input[type="radio"] {
  width: 18px;
  height: 18px;
  accent-color: var(--color-primary);
}

.amount {
  font-weight: 700;
  font-size: var(--text-lg);
}

.custom {
  grid-column: 1 / -1;
}

.custom input,
select {
  border-radius: 12px;
  border: 1px solid var(--color-border);
  padding: clamp(0.6rem, 2vw, 0.75rem);
  font-size: var(--text-base);
  width: 100%;
}

.custom input:focus,
select:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

button {
  border: none;
  background: var(--color-primary);
  color: #fff;
  border-radius: 999px;
  padding: clamp(0.85rem, 2vw, 0.95rem);
  font-weight: 600;
  font-size: var(--text-base);
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

button:active:not(:disabled) {
  transform: scale(0.98);
}

.privacy {
  font-size: var(--text-xs);
  color: var(--color-neutral-600);
  text-align: center;
}

/* Success State Styles */
.success-state {
  text-align: center;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
  border-radius: 24px;
  border: 1px solid #ddd6fe;
}

.success-icon {
  width: 90px;
  height: 90px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: heartBeat 1s ease;
}

.success-icon svg {
  width: 45px;
  height: 45px;
  color: #fff;
}

.success-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #5b21b6;
  margin-bottom: 0.75rem;
}

.success-text {
  color: #7c3aed;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.success-details {
  background: #fff;
  border-radius: 16px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  text-align: left;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.1);
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3e8ff;
}

.detail-item:last-child {
  border-bottom: none;
}

.detail-item.highlight {
  background: linear-gradient(135deg, #f3e8ff 0%, #ede9fe 100%);
  margin: -1.25rem -1.25rem 0.75rem -1.25rem;
  padding: 1.25rem;
  border-radius: 16px 16px 0 0;
  border-bottom: none;
}

.detail-label {
  font-size: 0.9rem;
  color: #6b7280;
}

.detail-value {
  font-weight: 600;
  color: #1f2937;
}

.detail-value.amount {
  font-size: 1.5rem;
  color: #7c3aed;
}

.impact-message {
  background: #fff;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-align: left;
  border: 1px solid #ddd6fe;
}

.impact-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.impact-message p {
  margin: 0;
  font-size: 0.95rem;
  color: #5b21b6;
  line-height: 1.5;
}

.success-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.btn-primary {
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  color: #fff;
  text-decoration: none;
  display: block;
  width: 100%;
}

.btn-secondary {
  background: #fff;
  color: #7c3aed;
  border: 2px solid #7c3aed;
  text-decoration: none;
  display: block;
  text-align: center;
  padding: clamp(0.85rem, 2vw, 0.95rem);
  border-radius: 999px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: #7c3aed;
  color: #fff;
}

/* Spinner */
.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes heartBeat {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.1); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); opacity: 1; }
}

@media (max-width: 480px) {
  fieldset {
    grid-template-columns: 1fr;
  }

  .success-state {
    padding: 1.5rem 1rem;
  }

  .success-icon {
    width: 70px;
    height: 70px;
  }

  .success-icon svg {
    width: 35px;
    height: 35px;
  }

  .success-title {
    font-size: 1.35rem;
  }

  .detail-value.amount {
    font-size: 1.25rem;
  }
}

@media (max-width: 360px) {
  .donation {
    padding: 1rem;
    border-radius: 14px;
  }

  label {
    padding: 0.65rem;
    border-radius: 10px;
  }

  .amount {
    font-size: var(--text-base);
  }

  .success-state {
    padding: 1.25rem 0.85rem;
    border-radius: 16px;
  }

  .success-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }

  .success-icon svg {
    width: 30px;
    height: 30px;
  }

  .success-title {
    font-size: 1.15rem;
  }

  .success-text {
    font-size: 0.9rem;
  }

  .success-details {
    padding: 1rem;
    border-radius: 12px;
  }

  .detail-value.amount {
    font-size: 1.1rem;
  }

  .impact-message {
    padding: 0.85rem;
  }

  .impact-message p {
    font-size: 0.85rem;
  }

  button {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
}
</style>
