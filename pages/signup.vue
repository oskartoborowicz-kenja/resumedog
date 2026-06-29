<template>
  <main class="auth-page">
    <div class="auth-card">
      <NuxtLink to="/" class="auth-logo">Resume<span>DOG</span></NuxtLink>
      <h1>{{ $t('signup.title') }}</h1>
      <p class="auth-sub">{{ $t('signup.sub') }}</p>

      <form @submit.prevent="handleSignup" novalidate>
        <div class="field" :class="{ error: errors.name }">
          <label for="name">{{ $t('signup.name') }}</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            :placeholder="$t('signup.namePlaceholder')"
            autocomplete="name"
            @blur="validateName"
          />
          <span v-if="errors.name" class="field-error">{{ errors.name }}</span>
        </div>

        <div class="field" :class="{ error: errors.email }">
          <label for="email">{{ $t('signup.email') }}</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            :placeholder="$t('signup.emailPlaceholder')"
            autocomplete="email"
            @blur="validateEmail"
          />
          <span v-if="errors.email" class="field-error">{{ errors.email }}</span>
        </div>

        <div class="field" :class="{ error: errors.password }">
          <label for="password">{{ $t('signup.password') }}</label>
          <div class="input-wrap">
            <input
              id="password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              :placeholder="$t('signup.passwordPlaceholder')"
              autocomplete="new-password"
              @input="validatePassword"
            />
            <button type="button" class="eye-btn" @click="showPassword = !showPassword" :aria-label="showPassword ? $t('login.hidePassword') : $t('login.showPassword')">
              <i :class="showPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'" />
            </button>
          </div>
          <div class="strength-bar" v-if="form.password">
            <div
              v-for="i in 4"
              :key="i"
              class="strength-segment"
              :class="{ filled: i <= passwordStrength.score }"
              :style="i <= passwordStrength.score ? { background: passwordStrength.color } : {}"
            />
          </div>
          <span v-if="form.password && !errors.password" class="strength-label" :style="{ color: passwordStrength.color }">
            {{ passwordStrength.label }}
          </span>
          <span v-if="errors.password" class="field-error">{{ errors.password }}</span>
        </div>

        <div class="field" :class="{ error: errors.confirm }">
          <label for="confirm">{{ $t('signup.confirm') }}</label>
          <div class="input-wrap">
            <input
              id="confirm"
              v-model="form.confirm"
              :type="showConfirm ? 'text' : 'password'"
              :placeholder="$t('signup.confirmPlaceholder')"
              autocomplete="new-password"
              @blur="validateConfirm"
            />
            <button type="button" class="eye-btn" @click="showConfirm = !showConfirm" :aria-label="showConfirm ? $t('login.hidePassword') : $t('login.showPassword')">
              <i :class="showConfirm ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'" />
            </button>
          </div>
          <span v-if="errors.confirm" class="field-error">{{ errors.confirm }}</span>
        </div>

        <!-- EULA -->
        <div class="eula-wrap" :class="{ error: errors.eula }">
          <label class="checkbox-label">
            <input type="checkbox" v-model="form.eulaAccepted" @change="errors.eula = ''" />
            <span>
              {{ $t('signup.eulaText') }}
              <a href="/eula" target="_blank">{{ $t('signup.eulaLink') }}</a>
            </span>
          </label>
          <span v-if="errors.eula" class="field-error">{{ errors.eula }}</span>
        </div>

        <p v-if="authError" class="form-error">{{ authError }}</p>

        <button type="submit" class="btn-primary submit-btn" :disabled="loading">
          <i v-if="loading" class="fa-solid fa-circle-notch fa-spin" />
          <span>{{ loading ? $t('signup.submitting') : $t('signup.submit') }}</span>
        </button>
      </form>

      <p class="auth-footer">
        {{ $t('signup.hasAccount') }} <NuxtLink to="/login">{{ $t('signup.loginLink') }}</NuxtLink>
      </p>
    </div>
  </main>
</template>

<script setup>
useSeoMeta({ title: 'Sign up — ResumeAI' })

const { t } = useI18n()
const form = reactive({ name: '', email: '', password: '', confirm: '', eulaAccepted: false })
const errors = reactive({ name: '', email: '', password: '', confirm: '', eula: '' })
const authError = ref('')
const loading = ref(false)
const showPassword = ref(false)
const showConfirm = ref(false)

const passwordStrength = computed(() => {
  const p = form.password
  if (!p) return { score: 0, label: '', color: '' }
  let score = 0
  if (p.length >= 8) score++
  if (p.length >= 12) score++
  if (/[A-Z]/.test(p) && /[0-9]/.test(p)) score++
  if (/[^A-Za-z0-9]/.test(p)) score++
  const levels = [
    { label: t('signup.strength.weak'),   color: '#e53e3e' },
    { label: t('signup.strength.fair'),   color: '#dd6b20' },
    { label: t('signup.strength.good'),   color: '#d69e2e' },
    { label: t('signup.strength.strong'), color: '#38a169' }
  ]
  return { score, ...levels[Math.max(0, score - 1)] }
})

const validateName    = () => { errors.name    = form.name.trim() ? '' : t('signup.errors.nameRequired') }
const validateEmail   = () => {
  if (!form.email) errors.email = t('signup.errors.emailRequired')
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = t('signup.errors.emailInvalid')
  else errors.email = ''
}
const validatePassword = () => {
  if (!form.password) errors.password = t('signup.errors.passwordRequired')
  else if (form.password.length < 8) errors.password = t('signup.errors.passwordTooShort')
  else errors.password = ''
}
const validateConfirm  = () => {
  if (!form.confirm) errors.confirm = t('signup.errors.confirmRequired')
  else if (form.confirm !== form.password) errors.confirm = t('signup.errors.confirmMismatch')
  else errors.confirm = ''
}

const validateForm = () => {
  validateName(); validateEmail(); validatePassword(); validateConfirm()
  if (!form.eulaAccepted) errors.eula = t('signup.errors.eulaRequired')
  return !errors.name && !errors.email && !errors.password && !errors.confirm && !errors.eula
}

const handleSignup = async () => {
  authError.value = ''
  if (!validateForm()) return
  loading.value = true
  try {
    // TODO: connect to auth backend
    await new Promise(r => setTimeout(r, 800))
    navigateTo('/')
  } catch {
    authError.value = t('signup.errorGeneric')
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
.auth-logo span { color: var(--accent); }

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

label {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink);
}

.input-wrap { position: relative; }

input[type="text"],
input[type="email"],
input[type="password"] {
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
input[type="text"]::placeholder,
input[type="email"]::placeholder,
input[type="password"]::placeholder { color: var(--ink2); opacity: 0.5; }
input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus { border-color: var(--teal); }
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

.strength-bar {
  display: flex;
  gap: 4px;
  margin-top: 6px;
}
.strength-segment {
  flex: 1;
  height: 3px;
  border-radius: 2px;
  background: var(--border);
  transition: background 0.3s;
}

.strength-label {
  font-size: 11px;
  font-weight: 500;
  margin-top: 2px;
}

.field-error { font-size: 12px; color: #e53e3e; }

.eula-wrap {
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  font-size: 13px;
  color: var(--ink2);
  line-height: 1.5;
}
.checkbox-label input[type="checkbox"] {
  width: 16px;
  height: 16px;
  min-width: 16px;
  margin-top: 1px;
  accent-color: var(--teal);
  cursor: pointer;
  border-radius: 4px;
  padding: 0;
  border: none;
  background: none;
}
.checkbox-label a { color: var(--teal); text-decoration: underline; }
.eula-wrap.error .checkbox-label { color: #e53e3e; }

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
