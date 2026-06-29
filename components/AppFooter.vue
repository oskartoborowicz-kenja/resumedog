<template>
  <footer class="app-footer">
    <NuxtLink to="/" class="logo">Resume<span>DOG</span></NuxtLink>
    <div class="footer-links">
      <NuxtLink to="/privacy">{{ $t('footer.privacy') }}</NuxtLink>
      <NuxtLink to="/terms">{{ $t('footer.terms') }}</NuxtLink>
      <NuxtLink to="/blog">{{ $t('nav.blog') }}</NuxtLink>
      <NuxtLink to="/contact">{{ $t('nav.contact') }}</NuxtLink>
    </div>
    <div class="copyright">{{ $t('footer.copyright') }}</div>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 0.5px solid var(--border);
  padding: 1.25rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: var(--ink2);
}
.logo {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--ink);
  letter-spacing: -0.02em;
}
.logo span { color: var(--accent); font-style: italic; }
.footer-links { display: flex; gap: 2rem; }
.footer-links a { color: var(--ink2); transition: color 0.2s; }
.footer-links a:hover { color: var(--ink); }
.copyright { color: var(--ink2); }
@media (max-width: 600px) {
  .app-footer { flex-direction: column; gap: 1rem; text-align: center; padding: 2rem 1.5rem; }
  .footer-links { flex-wrap: wrap; justify-content: center; gap: 1rem; }
}
@media (max-width: 480px) {
  .app-footer { padding: 1.5rem 1.25rem; }
  .footer-links { gap: 0.75rem; }
}
</style>
