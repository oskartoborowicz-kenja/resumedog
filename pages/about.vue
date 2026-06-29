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
        <div class="ab-hero-img" :style="{ backgroundImage: `url(${base}/images/woman.png)` }" />
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
            <img :src="`${base}/images/${locale}/error-cv.png`" class="ab-img-blend" alt="Recruiter overwhelmed with paperwork" />
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
          <WorkflowDiagram />
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
          <div class="ab-img" :style="{ backgroundImage: `url(${base}/images/${locale}/recruiter-cv.png)` }" />
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
const { locale } = useI18n()
</script>

<style scoped>
.container {
  max-width: 1200px;
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
  color: var(--accent);
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
@media (max-width: 480px) {
  .container { padding: 0 1.25rem; }
  .ab-section { padding: 3rem 0; }
  .ab-hero { padding: 3rem 0; }
  .ab-hero-img { height: 200px; }
}
</style>
