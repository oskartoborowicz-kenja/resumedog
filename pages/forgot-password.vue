<template>
  <main class="auth-page">
    <div class="auth-card">
      <NuxtLink to="/" class="auth-logo">Resume<span>DOG</span></NuxtLink>

      <!-- Success state -->
      <template v-if="sent">
        <div class="success-icon"><i class="fa-regular fa-circle-check" /></div>
        <h1>{{ $t('forgotPassword.successTitle') }}</h1>
        <p class="auth-sub">{{ $t('forgotPassword.successSub', { email: submittedEmail }) }}</p>
        <p class="spam-note">{{ $t('forgotPassword.spamNote') }}</p>
        <NuxtLink to="/login" class="btn-primary submit-btn">{{ $t('forgotPassword.backToLogin') }}</NuxtLink>
      </template>

      <!-- Request state -->
      <template v-else>
        <h1>{{ $t('forgotPassword.title') }}</h1>
        <p class="auth-sub">{{ $t('forgotPassword.sub') }}</p>

        <form @submit.prevent="handleSubmit" novalidate>
          <div class="field" :class="{ error: errors.email }">
            <label for="email">{{ $t('forgotPassword.email') }}</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              :placeholder="$t('forgotPassword.emailPlaceholder')"
              autocomplete="email"
              @blur="validateEmail"
            />
            <span v-if="errors.email" class="field-error">{{ errors.email }}</span>
          </div>

          <button type="submit" class="btn-primary submit-btn" :disabled="loading">
            <i v-if="loading" class="fa-solid fa-circle-notch fa-spin" />
            <span>{{ loading ? $t('forgotPassword.submitting') : $t('forgotPassword.submit') }}</span>
          </button>
        </form>

        <p class="auth-footer">
          {{ $t('forgotPassword.rememberIt') }} <NuxtLink to="/login">{{ $t('forgotPassword.backToLogin') }}</NuxtLink>
        </p>
      </template>
    </div>
  </main>
</template>

<script setup>
useSeoMeta({ title: 'Forgot password — ResumeAI' })

const { t } = useI18n()
const form = reactive({ email: '' })
const errors = reactive({ email: '' })
const loading = ref(false)
const sent = ref(false)
const submittedEmail = ref('')

const validateEmail = () => {
  if (!form.email) errors.email = t('forgotPassword.errors.emailRequired')
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = t('forgotPassword.errors.emailInvalid')
  else errors.email = ''
}

const handleSubmit = async () => {
  validateEmail()
  if (errors.email) return
  loading.value = true
  try {
    // TODO: connect to auth backend
    await new Promise(r => setTimeout(r, 800))
    submittedEmail.value = form.email
    sent.value = true
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.auth-page {
  min-height: calc(100vh - 130px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
}

.auth-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 2.5rem;
  width: 100%;
  max-width: 420px;
}

.auth-logo {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--ink);
  letter-spacing: -0.02em;
  display: inline-block;
  margin-bottom: 2rem;
}
.auth-logo span { color: var(--gold); }

.success-icon {
  font-size: 2.5rem;
  color: #38a169;
  margin-bottom: 1rem;
}

h1 {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.02em;
  margin-bottom: 0.25rem;
}

.auth-sub {
  font-size: 14px;
  color: var(--ink2);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.spam-note {
  font-size: 12px;
  color: var(--ink2);
  margin-bottom: 1.5rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 1.25rem;
}

label {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink);
}

input {
  width: 100%;
  padding: 0.7rem 0.9rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--cream);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}
input::placeholder { color: var(--ink2); opacity: 0.5; }
input:focus { border-color: var(--teal); }
.field.error input { border-color: #e53e3e; }

.field-error { font-size: 12px; color: #e53e3e; }

.submit-btn {
  width: 100%;
  justify-content: center;
  margin-top: 0.25rem;
  padding: 0.8rem;
  font-size: 15px;
  display: inline-flex;
  text-align: center;
}
.submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.auth-footer {
  text-align: center;
  font-size: 13px;
  color: var(--ink2);
  margin-top: 1.5rem;
}
.auth-footer a { color: var(--teal); font-weight: 500; }
.auth-footer a:hover { text-decoration: underline; }
</style>
