<template>
  <main>
    <section class="placeholder-section">
      <div class="container">
        <p class="section-label">{{ $t('privacy.label') }}</p>
        <h1 class="section-heading">{{ $t('privacy.heading') }}</h1>
        <p class="placeholder-note">{{ $t('privacy.coming') }}</p>
      </div>
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Privacy Policy — ResumeDOG',
})
</script>

<style scoped>
.container { max-width: 800px; margin: 0 auto; padding: 0 2rem; }
.placeholder-section { padding: 8rem 0; background: var(--cream); }
.placeholder-note { font-size: 17px; color: var(--ink2); margin-top: 1rem; }
</style>
