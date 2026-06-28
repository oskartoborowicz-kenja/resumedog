<template>
  <main>

    <!-- Section 1: Hero -->
    <section class="sv-hero">
      <div class="container sv-hero-split">
        <div>
          <p class="section-label">{{ $t('services.label') }}</p>
          <h1 class="section-heading sv-h1">{{ $t('services.page.heading') }}</h1>
          <p class="sv-body">{{ $t('services.page.body') }}</p>
          <NuxtLink to="/about" class="btn-primary sv-cta">{{ $t('services.page.heroCta') }}</NuxtLink>
        </div>
        <div class="sv-hero-img" :style="{ backgroundImage: `url(${base}/images/home-resume.jpg)` }" />
      </div>
    </section>

    <!-- Section 2: Core Services Grid -->
    <section class="sv-services">
      <div class="container">
        <div class="sv-grid">
          <div
            v-for="(key, icon) in cardIcons"
            :key="key"
            class="sv-card"
          >
            <div class="sv-card-icon">
              <i :class="icon"></i>
            </div>
            <h3>{{ $t(`services.page.cards.${key}.title`) }}</h3>
            <p>{{ $t(`services.page.cards.${key}.body`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Workflow CTA -->
    <section class="sv-workflow-cta">
      <div class="container">
        <div class="sv-wf-inner">
          <div>
            <p class="section-label">{{ $t('services.page.workflowCta.label') }}</p>
            <h2 class="section-heading">{{ $t('services.page.workflowCta.heading') }}</h2>
            <p class="sv-body">{{ $t('services.page.workflowCta.body') }}</p>
          </div>
          <NuxtLink to="/about" class="btn-primary sv-wf-btn">{{ $t('services.page.workflowCta.cta') }}</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Section 4: AI Explainer Video -->
    <section class="sv-video">
      <div class="container">
        <p class="section-label">{{ $t('services.page.video.label') }}</p>
        <h2 class="section-heading">{{ $t('services.page.video.heading') }}</h2>
        <p class="sv-body sv-video-body">{{ $t('services.page.video.body') }}</p>
        <div class="sv-video-frame">
          <div class="sv-video-placeholder">
            <div class="sv-video-icon">
              <i class="fa-solid fa-dog"></i>
            </div>
            <p class="sv-video-coming">{{ $t('services.page.video.note') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Ask a Question -->
    <section class="sv-ask">
      <div class="container">
        <div class="sv-ask-inner">
          <div class="sv-ask-copy">
            <p class="section-label">{{ $t('services.page.askUs.label') }}</p>
            <h2 class="section-heading">{{ $t('services.page.askUs.heading') }}</h2>
            <p class="sv-body">{{ $t('services.page.askUs.body') }}</p>
          </div>
          <form class="sv-ask-form" @submit.prevent>
            <div class="sv-ask-row">
              <div class="sv-field">
                <label>{{ $t('services.page.askUs.name') }}</label>
                <input type="text" :placeholder="$t('services.page.askUs.name')" />
              </div>
              <div class="sv-field">
                <label>{{ $t('services.page.askUs.company') }}</label>
                <input type="text" :placeholder="$t('services.page.askUs.company')" />
              </div>
            </div>
            <div class="sv-field">
              <label>{{ $t('services.page.askUs.email') }}</label>
              <input type="email" :placeholder="$t('services.page.askUs.email')" />
            </div>
            <div class="sv-field">
              <label>{{ $t('services.page.askUs.question') }}</label>
              <textarea rows="4" :placeholder="$t('services.page.askUs.questionPlaceholder')"></textarea>
            </div>
            <button type="submit" class="btn-primary">{{ $t('services.page.askUs.cta') }}</button>
          </form>
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
const base = useRuntimeConfig().app.baseURL.replace(/\/$/, '')

const cardIcons = {
  'fa-solid fa-align-left':      'formatting',
  'fa-solid fa-language':        'translation',
  'fa-solid fa-user-shield':     'anonymization',
  'fa-solid fa-bullseye':        'matching',
  'fa-solid fa-sliders':         'templates',
  'fa-solid fa-file-arrow-down': 'export',
}
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ── Hero ── */
.sv-hero {
  padding: 5rem 0 4.5rem;
  background: var(--cream);
}
.sv-hero-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.sv-hero-img {
  height: 360px;
  border-radius: 18px;
  background-size: cover;
  background-position: center;
}
.sv-h1 {
  max-width: 700px;
  margin-bottom: 1.25rem;
}
.sv-body {
  font-size: 17px;
  color: var(--ink2);
  line-height: 1.8;
  max-width: 580px;
  margin-bottom: 2rem;
}
.sv-cta { display: inline-flex; }
@media (max-width: 900px) {
  .sv-hero-split { grid-template-columns: 1fr; }
  .sv-hero-img { height: 220px; }
}

/* ── Services Grid ── */
.sv-services {
  padding: 5rem 0;
  background: var(--cream2);
}
.sv-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.sv-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.sv-card-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: var(--teal2);
  color: var(--teal);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
.sv-card h3 {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.3;
}
.sv-card p {
  font-size: 14px;
  color: var(--ink2);
  line-height: 1.7;
}

/* ── Workflow CTA ── */
.sv-workflow-cta {
  padding: 5rem 0;
  background: var(--cream);
}
.sv-wf-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  flex-wrap: wrap;
}
.sv-wf-inner .section-heading { margin-bottom: 0.75rem; }
.sv-wf-inner .sv-body { margin-bottom: 0; }
.sv-wf-btn { flex-shrink: 0; }

/* ── Video Section ── */
.sv-video {
  padding: 5rem 0;
  background: var(--cream2);
}
.sv-video-body { margin-bottom: 2.5rem; }
.sv-video-frame {
  border-radius: 20px;
  overflow: hidden;
  background: var(--card-bg);
  border: 1px solid var(--border);
  aspect-ratio: 16 / 9;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}
.sv-video-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  opacity: 0.45;
}
.sv-video-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: var(--cream2);
  border: 2px dashed var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--ink2);
}
.sv-video-coming {
  font-size: 13px;
  color: var(--ink2);
  font-style: italic;
  max-width: 320px;
  text-align: center;
}

/* ── Ask a Question ── */
.sv-ask {
  padding: 5rem 0;
  background: var(--cream);
}
.sv-ask-inner {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: start;
}
.sv-ask-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.sv-ask-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.sv-field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.sv-field label {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink2);
}
.sv-field input,
.sv-field textarea {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.7rem 1rem;
  font-size: 14px;
  font-family: var(--font-body);
  color: var(--ink);
  outline: none;
  transition: border-color 0.2s;
  resize: none;
  width: 100%;
}
.sv-field input:focus,
.sv-field textarea:focus { border-color: var(--gold); }
.sv-field input::placeholder,
.sv-field textarea::placeholder { color: var(--ink2); opacity: 0.5; }

/* ── Responsive ── */
@media (max-width: 900px) {
  .sv-grid { grid-template-columns: repeat(2, 1fr); }
  .sv-wf-inner { flex-direction: column; align-items: flex-start; }
  .sv-ask-inner { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .sv-grid { grid-template-columns: 1fr; }
  .sv-ask-row { grid-template-columns: 1fr; }
}
</style>
