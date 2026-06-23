<template>
  <main class="auth-page">
    <div class="auth-card">
      <NuxtLink to="/" class="auth-logo">Resume<span>DOG</span></NuxtLink>
      <h1>{{ $t('login.title') }}</h1>
      <p class="auth-sub">{{ $t('login.sub') }}</p>

      <form @submit.prevent="handleLogin" novalidate>
        <div class="field" :class="{ error: errors.email }">
          <label for="email">{{ $t('login.email') }}</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            :placeholder="$t('login.emailPlaceholder')"
            autocomplete="email"
            @blur="validateEmail"
          />
          <span v-if="errors.email" class="field-error">{{ errors.email }}</span>
        </div>

        <div class="field" :class="{ error: errors.password }">
          <div class="label-row">
            <label for="password">{{ $t('login.password') }}</label>
            <NuxtLink to="/forgot-password" class="forgot-link">{{ $t('login.forgotPassword') }}</NuxtLink>
          </div>
          <div class="input-wrap">
            <input
              id="password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              :placeholder="$t('login.passwordPlaceholder')"
              autocomplete="current-password"
            />
            <button type="button" class="eye-btn" @click="showPassword = !showPassword" :aria-label="showPassword ? $t('login.hidePassword') : $t('login.showPassword')">
              <i :class="showPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'" />
            </button>
          </div>
          <span v-if="errors.password" class="field-error">{{ errors.password }}</span>
        </div>

        <p v-if="authError" class="form-error">{{ authError }}</p>

        <button type="submit" class="btn-primary submit-btn" :disabled="loading">
          <i v-if="loading" class="fa-solid fa-circle-notch fa-spin" />
          <span>{{ loading ? $t('login.submitting') : $t('login.submit') }}</span>
        </button>
      </form>

      <p class="auth-footer">
        {{ $t('login.noAccount') }} <NuxtLink to="/signup">{{ $t('login.signupLink') }}</NuxtLink>
      </p>
    </div>
  </main>
</template>

<script setup>
useSeoMeta({ title: 'Log in - ResumeAI' })

const { t } = useI18n()
const form = reactive({ email: '', password: '' })
const errors = reactive({ email: '', password: '' })
const authError = ref('')
const loading = ref(false)
const showPassword = ref(false)

const validateEmail = () => {
  if (!form.email) errors.email = t('login.errors.emailRequired')
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = t('login.errors.emailInvalid')
  else errors.email = ''
}

const validateForm = () => {
  validateEmail()
  errors.password = form.password ? '' : t('login.errors.passwordRequired')
  return !errors.email && !errors.password
}

const handleLogin = async () => {
  authError.value = ''
  if (!validateForm()) return
  loading.value = true
  try {
    // TODO: connect to auth backend
    await new Promise(r => setTimeout(r, 800))
    navigateTo('/')
  } catch {
    authError.value = t('login.errorInvalid')
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
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 1.25rem;
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

label {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink);
}

.forgot-link {
  font-size: 12px;
  color: var(--teal);
  transition: opacity 0.2s;
}
.forgot-link:hover { opacity: 0.75; }

.input-wrap { position: relative; }

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
.input-wrap input { padding-right: 2.5rem; }

.eye-btn {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--ink2);
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  line-height: 1;
}

.field-error { font-size: 12px; color: #e53e3e; }

.form-error {
  font-size: 13px;
  color: #e53e3e;
  background: #fff5f5;
  border: 1px solid #fed7d7;
  border-radius: 8px;
  padding: 0.6rem 0.9rem;
  margin-bottom: 1rem;
}

.submit-btn {
  width: 100%;
  justify-content: center;
  margin-top: 0.5rem;
  padding: 0.8rem;
  font-size: 15px;
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
