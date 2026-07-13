<template>
  <main>

    <!-- Section 1: Hero -->
    <section class="sv-hero">
      <div class="container sv-hero-split">
        <div>
          <p class="section-label">{{ $t('services.label') }}</p>
          <h1 class="section-heading sv-h1">{{ $t('services.page.heading') }}</h1>
          <p class="sv-body">{{ $t('services.page.bodyBefore') }} Resume<em class="sv-brand-dog">DOG</em> {{ $t('services.page.bodyAfter') }}</p>
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
            <div class="sv-doc">
              <div class="sv-doc-stripe"></div>
              <div class="sv-doc-header">
                <span class="sv-doc-icon"><i :class="icon"></i></span>
                <span class="sv-doc-file">{{ cardDocs[key].file }}</span>
                <span class="sv-doc-dot"></span>
              </div>

              <div v-if="key === 'anonymization'" class="sv-doc-lines">
                <div class="sv-doc-line heading">{{ $t(`services.page.cards.${key}.docHeading`) }}</div>
                <div class="sv-doc-redacted"></div>
                <div class="sv-doc-redacted short"></div>
              </div>

              <div v-else-if="key === 'matching'" class="sv-doc-match">
                <span class="sv-doc-match-num">92%</span>
                <span class="sv-doc-match-label">{{ $t(`services.page.cards.${key}.docHeading`) }}</span>
              </div>

              <div v-else-if="key === 'export'" class="sv-doc-lines">
                <div class="sv-doc-line heading">{{ $t(`services.page.cards.${key}.docHeading`) }}</div>
                <div class="sv-doc-exports">
                  <span class="sv-doc-export-tag"><i class="fa-solid fa-file-word"></i> DOCX</span>
                  <span class="sv-doc-export-tag"><i class="fa-regular fa-file-pdf"></i> PDF</span>
                </div>
              </div>

              <div v-else class="sv-doc-lines">
                <div class="sv-doc-line heading">{{ $t(`services.page.cards.${key}.docHeading`) }}</div>
                <div class="sv-doc-line">{{ $t(`services.page.cards.${key}.docLine1`) }}</div>
                <div class="sv-doc-line muted">{{ $t(`services.page.cards.${key}.docLine2`) }}</div>
              </div>

              <span class="sv-doc-tag">{{ $t(`services.page.cards.${key}.docTag`) }}</span>
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
            <p class="sv-body">{{ $t('services.page.workflowCta.bodyBefore') }} Resume<em class="sv-brand-dog">DOG</em> {{ $t('services.page.workflowCta.bodyAfter') }}</p>
          </div>
          <NuxtLink to="/about" class="btn-primary sv-wf-btn">{{ $t('services.page.workflowCta.cta') }}</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Section 4: AI Explainer Video -->
    <section class="sv-video">
      <div class="container">
        <p class="section-label">Meet Resume<em class="sv-brand-dog">DOG</em></p>
        <h2 class="section-heading">Meet Resume<em class="sv-brand-dog">DOG</em>.</h2>
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


  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Services — ResumeDOG | Resume Formatting, Translation & Anonymization',
  description: 'AI resume formatting, English-Japanese translation, candidate anonymization, job description matching, and Word/PDF export for recruitment agencies.'
})
const base = useRuntimeConfig().app.baseURL.replace(/\/$/, '')
const { locale } = useI18n()

const cardIcons = {
  'fa-solid fa-align-left':      'formatting',
  'fa-solid fa-language':        'translation',
  'fa-solid fa-user-shield':     'anonymization',
  'fa-solid fa-bullseye':        'matching',
  'fa-solid fa-sliders':         'templates',
  'fa-solid fa-file-arrow-down': 'export',
}

const cardDocs = {
  formatting:    { file: 'resume_raw.docx' },
  translation:   { file: 'resume_ja.docx' },
  anonymization: { file: 'candidate_002.docx' },
  matching:      { file: 'job_match.docx' },
  templates:     { file: 'template.docx' },
  export:        { file: 'client_ready.docx' },
}

</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ── Hero ── */
.sv-hero {
  padding: 5rem 0 4.5rem;
  background: var(--cream);
}

.sv-brand-dog { color: var(--accent); font-style: italic; }
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
.sv-doc {
  position: relative;
  background: var(--cream);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0.9rem 0.9rem 1.6rem;
  overflow: hidden;
}
.sv-doc-stripe {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(to right, var(--teal), var(--accent));
}
.sv-doc-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.65rem;
}
.sv-doc-icon {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: var(--teal2);
  color: var(--teal);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  flex-shrink: 0;
}
.sv-doc-file {
  font-size: 9.5px;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ink2);
}
.sv-doc-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--border);
  margin-left: auto;
}
.sv-doc-lines {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.sv-doc-line {
  font-size: 11px;
  color: var(--ink);
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sv-doc-line.heading {
  font-size: 8.5px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1px;
}
.sv-doc-line.muted {
  color: var(--ink2);
  font-size: 10.5px;
}
.sv-doc-redacted {
  height: 9px;
  width: 80%;
  border-radius: 3px;
  background: var(--ink2);
  opacity: 0.35;
  margin-top: 4px;
}
.sv-doc-redacted.short { width: 55%; }
.sv-doc-match {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}
.sv-doc-match-num {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--accent);
}
.sv-doc-match-label {
  font-size: 8.5px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink2);
}
.sv-doc-exports {
  display: flex;
  gap: 0.4rem;
  margin-top: 4px;
}
.sv-doc-export-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 9.5px;
  font-family: monospace;
  font-weight: 600;
  color: var(--ink2);
  background: var(--cream2);
  border: 1px solid var(--border);
  padding: 3px 7px;
  border-radius: 6px;
}
.sv-doc-tag {
  position: absolute;
  bottom: 0.6rem;
  right: 0.6rem;
  font-size: 8px;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: var(--ink);
  color: var(--cream);
  padding: 2px 6px;
  border-radius: 4px;
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


/* ── Responsive ── */
@media (max-width: 900px) {
  .sv-grid { grid-template-columns: repeat(2, 1fr); }
  .sv-wf-inner { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 600px) {
  .sv-grid { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .container { padding: 0 1.25rem; }
  .sv-hero,
  .sv-services,
  .sv-workflow-cta,
  .sv-video { padding: 3rem 0; }
  .sv-card { padding: 1.25rem; }
  .sv-wf-inner { gap: 1.5rem; }
}
</style>
