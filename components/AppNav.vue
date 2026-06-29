<template>
  <nav class="navbar">
    <NuxtLink to="/" class="logo">
      <span class="logo-icon">
        <svg width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><g fill="currentColor"><ellipse cx="9" cy="9" rx="3" ry="4"></ellipse><ellipse cx="16" cy="6.5" rx="3" ry="4"></ellipse><ellipse cx="23" cy="9" rx="3" ry="4"></ellipse><ellipse cx="27" cy="16" rx="2.5" ry="3.5"></ellipse><path d="M16 13c-4.5 0-8 3.5-8 7.5 0 3 2 5 4.5 5 1.5 0 2.5-.6 3.5-.6s2 .6 3.5.6c2.5 0 4.5-2 4.5-5 0-4-3.5-7.5-8-7.5z"></path></g></svg>
      </span>
      <span class="logo-name">Resume<span class="logo-dog">DOG</span></span>
    </NuxtLink>
    <ul class="nav-links">
      <li><NuxtLink to="/" :class="{ active: isHome }">{{ $t('nav.home') }}</NuxtLink></li>
      <li><NuxtLink to="/about" :class="{ active: isAbout }">{{ $t('nav.about') }}</NuxtLink></li>
      <li><NuxtLink to="/services" :class="{ active: isServices }">{{ $t('nav.services') }}</NuxtLink></li>
      <li><NuxtLink to="/pricing" :class="{ active: isPricing }">{{ $t('nav.pricing') }}</NuxtLink></li>
      <li><NuxtLink to="/blog" :class="{ active: isBlog }">{{ $t('nav.blog') }}</NuxtLink></li>
      <li><NuxtLink to="/contact" :class="{ active: isContact }">{{ $t('nav.contact') }}</NuxtLink></li>
    </ul>
    <div class="nav-right">
      <button class="lang-switch" aria-label="Switch language" @click="toggleLang">
        <span class="lang-opt" :class="{ 'lang-active': locale === 'en' }">
          <img src="https://flagcdn.com/20x15/us.png" class="lang-flag" alt="EN" />EN
        </span>
        <span class="lang-opt" :class="{ 'lang-active': locale === 'ja' }">
          <img src="https://flagcdn.com/20x15/jp.png" class="lang-flag" alt="JP" />JP
        </span>
      </button>
      <button class="theme-toggle" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'" @click="toggleTheme">
        <i :class="isDark ? 'fa-solid fa-sun' : 'fa-regular fa-moon'" />
      </button>
      <NuxtLink to="/login" class="nav-login">{{ $t('nav.login') }}</NuxtLink>
      <NuxtLink to="/signup" class="btn-primary nav-cta">{{ $t('nav.cta') }}</NuxtLink>
    </div>
  </nav>
</template>

<script setup>
const base = useRuntimeConfig().app.baseURL
const { isDark, toggleTheme } = useTheme()
const { locale, setLocale } = useI18n()
const toggleLang = () => setLocale(locale.value === 'en' ? 'ja' : 'en')
const route = useRoute()

const isHome = computed(() => route.path === '/')
const isPricing = computed(() => route.path === '/pricing')
const isBlog = computed(() => route.path.startsWith('/blog'))
const isAbout = computed(() => route.path === '/about')
const isServices = computed(() => route.path === '/services')
const isContact = computed(() => route.path === '/contact')
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 3rem;
  background: var(--cream);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 0.5px solid var(--border);
  transition: background 0.25s;
}
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}
.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--ink);
  color: var(--cream);
  flex-shrink: 0;
}
.logo-name {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: -0.02em;
  user-select: none;
  -webkit-user-select: none;
}
.logo-dog { color: var(--gold); font-style: italic; }
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
  color: var(--ink);
  border: 1px solid var(--border);
  border-radius: 100px;
  padding: 0.45rem 1.1rem;
  transition: border-color 0.2s, background 0.2s;
}
.nav-login:hover {
  border-color: var(--ink2);
  background: var(--cream2);
}

.lang-switch {
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 4px;
  border-radius: 100px;
  border: 1px solid var(--border);
  background: var(--card-bg);
  cursor: pointer;
  font-family: var(--font-body);
}
.lang-opt {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 6px 12px;
  border-radius: 100px;
  color: var(--ink2);
  transition: background 0.2s, color 0.2s;
  line-height: 1;
}
.lang-flag {
  width: 18px;
  height: 13px;
  border-radius: 2px;
  object-fit: cover;
  display: block;
}
.lang-active {
  background: var(--gold);
  color: #fff;
}

.theme-toggle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: var(--ink);
  color: var(--cream);
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
}
.theme-toggle:hover {
  background: var(--teal);
}
[data-theme="dark"] .theme-toggle {
  color: var(--gold);
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
@media (max-width: 680px) {
  .navbar { padding: 0.75rem 1rem; }
  .nav-login { display: none; }
  .nav-cta {
    font-size: 12px;
    padding: 0.45rem 0.9rem;
    white-space: nowrap;
  }
}
</style>
