<template>
  <main>

    <!-- Hero -->
    <section class="services-hero">
      <div class="container">
        <p class="section-label">{{ $t('services.label') }}</p>
        <h1 class="section-heading">
          {{ $t('services.page.heading') }} <em>{{ $t('services.page.headingEm') }}</em>
        </h1>
        <p class="section-sub">{{ $t('services.page.subheading') }}</p>
      </div>
    </section>

    <!-- Service rows -->
    <section class="services-list">
      <div class="container">
        <div
          v-for="key in ['formatting','translation','anonymization','matching','templates','japanOutputs','export']"
          :key="key"
          class="service-row"
        >
          <div class="service-meta">
            <div class="service-num">{{ $t(`services.page.${key}.num`) }}</div>
            <h2>{{ $t(`services.page.${key}.heading`) }}</h2>
            <p>{{ $t(`services.page.${key}.body`) }}</p>
            <p v-if="$te(`services.page.${key}.note`)" class="service-note">
              <i class="fa-solid fa-circle-info"></i> {{ $t(`services.page.${key}.note`) }}
            </p>
          </div>
          <div class="service-badge-wrap">
            <div class="service-title-card">
              <span class="stc-num">{{ $t(`services.page.${key}.num`) }}</span>
              <span class="stc-title">{{ $t(`services.page.${key}.title`) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo note -->
    <section class="demo-note">
      <div class="container">
        <div class="demo-inner">
          <i class="fa-solid fa-circle-play demo-icon"></i>
          <div>
            <h3>Demo coming soon</h3>
            <p>We're preparing before/after examples and an interactive walkthrough. Check back once our beta is stable.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQs -->
    <section class="faqs-section">
      <div class="container">
        <p class="section-label">{{ $t('homeFaqs.label') }}</p>
        <h2 class="section-heading">{{ $t('homeFaqs.heading') }} <em>{{ $t('homeFaqs.headingEm') }}</em></h2>
        <div class="faqs-list">
          <FaqItem v-for="(faq, i) in $tm('services.page.faqs')" :key="i" :q="$rt(faq.q)" :a="$rt(faq.a)" />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-band">
      <div class="container">
        <h2>{{ $t('finalCta.heading') }} <em>{{ $t('finalCta.headingEm') }}</em></h2>
        <div class="cta-actions">
          <NuxtLink to="/signup" class="btn-primary">{{ $t('finalCta.cta1') }}</NuxtLink>
          <button class="btn-demo">{{ $t('finalCta.cta2') }}</button>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Services — ResumeDOG | Resume Formatting, Translation & Anonymization',
  description: 'AI resume formatting, English-Japanese translation, candidate anonymization, job description matching, and Word/PDF export for recruitment agencies.'
})
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero */
.services-hero {
  padding: 4rem 0 2.5rem;
}

/* Service rows */
.services-list {
  padding: 1rem 0 3rem;
}
.service-row {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2.5rem;
  align-items: start;
  padding: 2.5rem 0;
  border-bottom: 1px solid var(--border);
}
.service-row:last-child { border-bottom: none; }

.service-num {
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
}
.service-meta h2 {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  line-height: 1.25;
}
.service-meta p {
  font-size: 16px;
  color: var(--ink2);
  line-height: 1.75;
}
.service-note {
  margin-top: 0.75rem;
  font-size: 13px !important;
  color: var(--teal) !important;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.service-badge-wrap {
  padding-top: 2.25rem;
}
.service-title-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.stc-num {
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 0.12em;
}
.stc-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--ink);
}

/* Demo note */
.demo-note {
  padding: 2rem 0;
  background: var(--cream2);
}
.demo-inner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.75rem 2rem;
}
.demo-icon {
  font-size: 2rem;
  color: var(--gold);
  flex-shrink: 0;
}
.demo-inner h3 {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.25rem;
}
.demo-inner p { font-size: 14px; color: var(--ink2); line-height: 1.6; }

/* FAQs */
.faqs-section {
  padding: 3rem 0;
}
.faqs-list {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
/* CTA band */
.cta-band {
  padding: 3.5rem 0;
  background: var(--ink);
  text-align: center;
}
.cta-band h2 {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--cream);
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 2rem;
}
.cta-band em { font-style: italic; color: var(--gold); }
.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-demo {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.3);
  color: rgba(255,255,255,0.8);
  padding: 0.85rem 1.5rem;
  border-radius: 100px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  font-family: var(--font-body);
  transition: border-color 0.2s, color 0.2s;
}
.btn-demo:hover { border-color: rgba(255,255,255,0.6); color: #fff; }
[data-theme="dark"] .btn-demo { background: var(--cream2); }

@media (max-width: 900px) {
  .service-row {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .service-badge-wrap { padding-top: 0; }
}
</style>
