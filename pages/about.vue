<template>
  <main>

    <!-- Section 1: ResumeDOG -->
    <section class="ab-hero">
      <div class="container ab-hero-split">
        <div class="ab-hero-text">
          <p class="section-label">{{ $t('about.page.s1.label') }}</p>
          <h1 class="section-heading ab-h1">{{ $t('about.page.s1.heading') }}</h1>
          <p class="ab-body">{{ $t('about.page.s1.body') }}</p>
        </div>
        <div class="ab-hero-img" :style="{ backgroundImage: `url(${base}/images/about-hero.jpg)` }" />
      </div>
    </section>

    <!-- Section 2: The Problem -->
    <section class="ab-section ab-alt">
      <div class="container ab-split">
        <div class="ab-marker">
          <span class="ab-num">01</span>
          <div class="ab-line"></div>
        </div>
        <div class="ab-content ab-content-split">
          <div>
            <p class="section-label">{{ $t('about.page.s2.label') }}</p>
            <h2 class="section-heading">{{ $t('about.page.s2.heading') }}</h2>
            <p class="ab-body">{{ $t('about.page.s2.body') }}</p>
          </div>
          <div class="ab-img-card">
            <img :src="`${base}/images/18000e96-e85f-4b3f-ac52-dfe20455fd2b.png`" class="ab-img-blend" alt="Recruiter overwhelmed with paperwork" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: The Solution -->
    <section class="ab-section">
      <div class="container ab-split">
        <div class="ab-marker">
          <span class="ab-num">02</span>
          <div class="ab-line"></div>
        </div>
        <div class="ab-content ab-content-split">
          <div>
            <p class="section-label">{{ $t('about.page.s3.label') }}</p>
            <h2 class="section-heading">{{ $t('about.page.s3.heading') }}</h2>
            <p class="ab-body">{{ $t('about.page.s3.body') }}</p>
          </div>
          <div class="ab-diagram">
            <div class="abd-pipeline">
              <div class="abd-pill abd-pill-in">
                <i class="fa-solid fa-upload"></i>
                <span>{{ $t('about.page.s3.diagram.input') }}</span>
              </div>
              <template v-for="(step, i) in $tm('about.page.s3.diagram.steps')" :key="i">
                <div class="abd-pipe-arrow">›</div>
                <div class="abd-pipe-step">
                  <i :class="$rt($tm('about.page.s3.diagram.icons')[i])"></i>
                  <span>{{ $rt(step) }}</span>
                </div>
              </template>
              <div class="abd-pipe-arrow">›</div>
              <div class="abd-pill abd-pill-out">
                <i class="fa-solid fa-circle-check"></i>
                <span>{{ $t('about.page.s3.diagram.output') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Our Approach -->
    <section class="ab-section ab-alt">
      <div class="container ab-split">
        <div class="ab-marker">
          <span class="ab-num">03</span>
          <div class="ab-line"></div>
        </div>
        <div class="ab-content ab-content-split">
          <div>
            <p class="section-label">{{ $t('about.page.s4.label') }}</p>
            <h2 class="section-heading">{{ $t('about.page.s4.heading') }}</h2>
            <p class="ab-body">{{ $t('about.page.s4.body') }}</p>
          </div>
          <div class="ab-img" :style="{ backgroundImage: `url(${base}/images/man-cv.png)` }" />
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
useSeoMeta({
  title: 'About ResumeDOG | AI Resume Formatting for Recruitment Agencies',
  description: 'ResumeDOG was built to reduce the manual resume preparation work that slows down client submissions. Learn what we built and why.'
})
const base = useRuntimeConfig().app.baseURL.replace(/\/$/, '')
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero */
.ab-hero {
  padding: 5rem 0 4rem;
  background: var(--cream);
}
.ab-hero-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.ab-hero-img {
  height: 380px;
  border-radius: 18px;
  background-size: cover;
  background-position: center;
}
.ab-h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  max-width: 720px;
  margin-bottom: 1.5rem;
}
.ab-body {
  font-size: 17px;
  color: var(--ink2);
  line-height: 1.8;
  max-width: 640px;
}
.ab-content-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}
.ab-img {
  height: 260px;
  border-radius: 14px;
  background-size: cover;
  background-position: center;
}
.ab-img-card {
  background: #e0f2fe;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 260px;
}
.ab-img-blend {
  width: 100%;
  height: 100%;
  object-fit: contain;
  mix-blend-mode: multiply;
}

/* Numbered sections */
.ab-section {
  padding: 5rem 0;
  background: var(--cream);
}
.ab-alt {
  background: var(--cream2);
}
.ab-split {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 2.5rem;
  align-items: start;
}
.ab-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.2rem;
}
.ab-num {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 0.08em;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.3rem 0.6rem;
  white-space: nowrap;
}
.ab-line {
  width: 1px;
  flex: 1;
  min-height: 80px;
  background: var(--border);
  margin-top: 0.75rem;
}
.ab-content .section-heading {
  max-width: 600px;
  margin-bottom: 1.25rem;
}
.ab-content .ab-body {
  max-width: 580px;
}

/* Diagram */
.ab-diagram {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.5rem 1.25rem;
  align-items: center;
  height: 260px;
  justify-content: center;
}
.abd-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  width: 100%;
  text-align: center;
}
.abd-input {
  background: var(--cream2);
  border: 1px solid var(--border);
}
.abd-output {
  background: color-mix(in srgb, var(--gold) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--gold) 30%, transparent);
}
.abd-node-icon {
  font-size: 1.25rem;
  color: var(--gold);
}
.abd-node-title {
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--ink);
}
.abd-node-sub {
  font-size: 0.72rem;
  color: var(--ink2);
}
.abd-pain {
  color: #ef4444;
  font-weight: 600;
}
/* Horizontal pipeline */
.abd-pipeline {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 0.25rem;
}
.abd-pill {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  padding: 0.6rem 0.75rem;
  border-radius: 10px;
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;
}
.abd-pill i { font-size: 1rem; margin-bottom: 0.1rem; }
.abd-pill-in {
  background: var(--cream2);
  border: 1px solid var(--border);
  color: var(--ink);
}
.abd-pill-in i { color: var(--gold); }
.abd-pill-out {
  background: color-mix(in srgb, #22c55e 12%, transparent);
  border: 1px solid color-mix(in srgb, #22c55e 35%, transparent);
  color: var(--ink);
}
.abd-pill-out i { color: #22c55e; }
.abd-pipe-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.55rem 0.65rem;
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--ink2);
  white-space: nowrap;
  flex-shrink: 0;
}
.abd-pipe-step i { font-size: 0.9rem; color: var(--gold); }
.abd-pipe-arrow {
  color: var(--ink2);
  opacity: 0.35;
  font-size: 1.1rem;
  flex-shrink: 0;
  line-height: 1;
}
.abd-sub-line {
  font-size: 0.75rem;
  color: #22c55e;
  font-weight: 600;
  text-align: center;
  margin-top: 0.75rem;
}
.abd-output-good {
  background: color-mix(in srgb, #22c55e 12%, transparent);
  border: 1px solid color-mix(in srgb, #22c55e 30%, transparent);
}
.abd-good {
  color: #22c55e;
  font-weight: 600;
}

@media (max-width: 900px) {
  .ab-hero-split { grid-template-columns: 1fr; }
  .ab-hero-img { height: 240px; }
  .ab-content-split { grid-template-columns: 1fr; }
  .ab-img { height: 200px; }
}
@media (max-width: 600px) {
  .ab-split { grid-template-columns: 1fr; }
  .ab-marker { flex-direction: row; gap: 0.75rem; }
  .ab-line { display: none; }
}
</style>
