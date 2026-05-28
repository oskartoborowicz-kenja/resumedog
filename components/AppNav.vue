<template>
  <nav class="navbar">
    <NuxtLink to="/" class="logo">Resume<span>DOG</span></NuxtLink>
    <ul class="nav-links">
      <li><NuxtLink to="/#about" :class="{ active: activeSection === 'about' }">{{ $t('nav.about') }}</NuxtLink></li>
      <li><NuxtLink to="/#services" :class="{ active: activeSection === 'services' }">{{ $t('nav.services') }}</NuxtLink></li>
      <li><NuxtLink to="/pricing" :class="{ active: isPricing }">{{ $t('nav.pricing') }}</NuxtLink></li>
      <li><NuxtLink to="/blog" :class="{ active: isBlog }">{{ $t('nav.blog') }}</NuxtLink></li>
    </ul>
    <div class="nav-right">
      <button class="lang-toggle" :aria-label="`Switch to ${locale === 'en' ? 'Japanese' : 'English'}`" @click="toggleLang">
        {{ locale === 'en' ? 'JP' : 'EN' }}
      </button>
      <button class="theme-toggle" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'" @click="toggleTheme">
        <i :class="isDark ? 'fa-regular fa-sun' : 'fa-regular fa-moon'" />
      </button>
      <NuxtLink to="/login" class="nav-login">Log in</NuxtLink>
      <NuxtLink to="/signup" class="btn-primary nav-cta">{{ $t('nav.cta') }}</NuxtLink>
    </div>
  </nav>
</template>

<script setup>
const { isDark, toggleTheme } = useTheme()
const { locale, setLocale } = useI18n()
const toggleLang = () => setLocale(locale.value === 'en' ? 'ja' : 'en')
const route = useRoute()
const activeSection = ref('')

const isPricing = computed(() => route.path === '/pricing')
const isBlog = computed(() => route.path.startsWith('/blog'))

const onScroll = () => {
  const threshold = window.innerHeight * 0.4
  let current = ''
  for (const id of ['about', 'services']) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= threshold) current = id
  }
  activeSection.value = current
}

const startTracking = () => {
  activeSection.value = ''
  nextTick(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })
}

const stopTracking = () => {
  window.removeEventListener('scroll', onScroll)
  activeSection.value = ''
}

onMounted(() => { if (route.path === '/') startTracking() })
onUnmounted(() => stopTracking())

watch(() => route.path, (path) => {
  if (path === '/') startTracking()
  else stopTracking()
})
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 3rem;
  background: var(--cream);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 0.5px solid var(--border);
  transition: background 0.25s;
}
.logo {
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: var(--ink);
  letter-spacing: -0.02em;
}
.logo span { color: var(--gold); font-style: italic; }
.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
.nav-links a {
  color: var(--ink2);
  font-size: 14px;
  font-weight: 400;
  transition: color 0.2s;
  position: relative;
  padding-bottom: 2px;
}
.nav-links a:hover { color: var(--ink); }
.nav-links a.active {
  color: var(--teal);
  font-weight: 500;
}
.nav-links a.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--teal);
  border-radius: 2px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nav-login {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink2);
  transition: color 0.2s;
}
.nav-login:hover { color: var(--ink); }

.lang-toggle {
  height: 36px;
  padding: 0 0.75rem;
  border-radius: 100px;
  border: 0.5px solid var(--border);
  background: transparent;
  color: var(--ink2);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  font-family: var(--font-body);
}
.lang-toggle:hover {
  background: var(--cream2);
  color: var(--ink);
  border-color: var(--ink2);
}

.theme-toggle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 0.5px solid var(--border);
  background: transparent;
  color: var(--ink2);
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.theme-toggle:hover {
  background: var(--cream2);
  color: var(--ink);
  border-color: var(--ink2);
}

.nav-cta {
  background: var(--ink);
  color: var(--cream) !important;
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s;
}
.nav-cta:hover { background: var(--teal) !important; }

@media (max-width: 900px) {
  .navbar { padding: 1rem 1.5rem; }
  .nav-links { display: none; }
}
</style>
