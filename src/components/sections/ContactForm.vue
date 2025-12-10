<template>
  <div class="form-wrapper">
    <!-- Success State -->
    <div v-if="submitted" class="success-state">
      <div class="success-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12l2.5 2.5L16 9" />
        </svg>
      </div>
      <h3 class="success-title">Message Sent Successfully!</h3>
      <p class="success-text">Thank you for reaching out. Our team will respond within 2 business hours with empathy and care.</p>
      <div class="success-details">
        <div class="detail-item">
          <span class="detail-label">Name</span>
          <span class="detail-value">{{ formData.name }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Email</span>
          <span class="detail-value">{{ formData.email }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Interest</span>
          <span class="detail-value">{{ formData.interest }}</span>
        </div>
      </div>
      <button type="button" class="btn-secondary" @click="resetForm">Send Another Message</button>
    </div>

    <!-- Form State -->
    <form v-else class="contact" @submit.prevent="handleSubmit">
      <label>
        Full name
        <input type="text" v-model="formData.name" required placeholder="Your name" />
      </label>
      <label>
        Email address
        <input type="email" v-model="formData.email" required placeholder="you@example.com" />
      </label>
      <label>
        Volunteer interest
        <select v-model="formData.interest">
          <option v-for="option in options" :key="option">{{ option }}</option>
        </select>
      </label>
      <label>
        Message
        <textarea v-model="formData.message" rows="4" placeholder="Share how we can support you"></textarea>
      </label>
      <label class="consent">
        <input type="checkbox" v-model="formData.consent" required />
        I agree to private follow-ups and understand I can opt out anytime.
      </label>
      <button type="submit" :disabled="isSubmitting">
        <span v-if="isSubmitting" class="spinner"></span>
        {{ isSubmitting ? 'Sending...' : 'Send confidential message' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    default: () => []
  }
});

const submitted = ref(false);
const isSubmitting = ref(false);

const formData = reactive({
  name: '',
  email: '',
  interest: props.options[0] || '',
  message: '',
  consent: false
});

const handleSubmit = () => {
  isSubmitting.value = true;

  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false;
    submitted.value = true;
  }, 1500);
};

const resetForm = () => {
  submitted.value = false;
  formData.name = '';
  formData.email = '';
  formData.interest = props.options[0] || '';
  formData.message = '';
  formData.consent = false;
};
</script>

<style scoped>
.form-wrapper {
  width: 100%;
}

.contact {
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1rem);
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: var(--text-sm);
  font-weight: 500;
}

input,
textarea,
select {
  width: 100%;
  border-radius: clamp(12px, 2vw, 16px);
  border: 1px solid var(--color-border);
  padding: clamp(0.65rem, 2vw, 0.85rem);
  font-size: var(--text-base);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
textarea:focus,
select:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(90, 107, 255, 0.15);
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button {
  border: none;
  background: var(--color-primary);
  color: #fff;
  border-radius: 999px;
  padding: clamp(0.8rem, 2vw, 0.95rem);
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

.consent {
  flex-direction: row;
  gap: 0.75rem;
  align-items: flex-start;
  font-size: var(--text-sm);
  line-height: 1.5;
}

.consent input[type="checkbox"] {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
  accent-color: var(--color-primary);
}

/* Success State Styles */
.success-state {
  text-align: center;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  border-radius: 20px;
  border: 1px solid #a7f3d0;
}

.success-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: scaleIn 0.4s ease;
}

.success-icon svg {
  width: 40px;
  height: 40px;
  color: #fff;
}

.success-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #065f46;
  margin-bottom: 0.75rem;
}

.success-text {
  color: #047857;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.success-details {
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  text-align: left;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.detail-item:last-child {
  border-bottom: none;
}

.detail-label {
  font-size: 0.85rem;
  color: #6b7280;
}

.detail-value {
  font-weight: 500;
  color: #1f2937;
}

.btn-secondary {
  background: #fff;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
  background: var(--color-primary);
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

@keyframes scaleIn {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@media (max-width: 480px) {
  .contact {
    gap: 0.85rem;
  }

  .success-state {
    padding: 1.5rem 1rem;
  }

  .success-icon {
    width: 60px;
    height: 60px;
  }

  .success-icon svg {
    width: 30px;
    height: 30px;
  }

  .success-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 360px) {
  .contact {
    gap: 0.75rem;
  }

  label {
    font-size: 0.85rem;
  }

  input,
  textarea,
  select {
    padding: 0.6rem;
    border-radius: 10px;
    font-size: 0.9rem;
  }

  textarea {
    min-height: 80px;
  }

  .consent {
    gap: 0.5rem;
    font-size: 0.8rem;
  }

  .consent input[type="checkbox"] {
    width: 18px;
    height: 18px;
  }

  button {
    padding: 0.75rem;
    font-size: 0.9rem;
  }

  .success-state {
    padding: 1.25rem 0.85rem;
    border-radius: 16px;
  }

  .success-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
  }

  .success-icon svg {
    width: 25px;
    height: 25px;
  }

  .success-title {
    font-size: 1.1rem;
  }

  .success-text {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .success-details {
    padding: 0.85rem;
    border-radius: 10px;
  }

  .detail-label,
  .detail-value {
    font-size: 0.8rem;
  }
}
</style>
