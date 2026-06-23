<template>
  <main>

    <!-- Section 1: ResumeDOG -->
    <section class="ab-hero">
      <div class="container">
        <p class="section-label">{{ $t('about.page.s1.label') }}</p>
        <h1 class="section-heading ab-h1">{{ $t('about.page.s1.heading') }}</h1>
        <p class="ab-body">{{ $t('about.page.s1.body') }}</p>
      </div>
    </section>

    <!-- Section 2: The Problem -->
    <section class="ab-section ab-alt">
      <div class="container ab-split">
        <div class="ab-marker">
          <span class="ab-num">01</span>
          <div class="ab-line"></div>
        </div>
        <div class="ab-content">
          <p class="section-label">{{ $t('about.page.s2.label') }}</p>
          <h2 class="section-heading">{{ $t('about.page.s2.heading') }}</h2>
          <p class="ab-body">{{ $t('about.page.s2.body') }}</p>
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
        <div class="ab-content">
          <p class="section-label">{{ $t('about.page.s3.label') }}</p>
          <h2 class="section-heading">{{ $t('about.page.s3.heading') }}</h2>
          <p class="ab-body">{{ $t('about.page.s3.body') }}</p>
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
        <div class="ab-content">
          <p class="section-label">{{ $t('about.page.s4.label') }}</p>
          <h2 class="section-heading">{{ $t('about.page.s4.heading') }}</h2>
          <p class="ab-body">{{ $t('about.page.s4.body') }}</p>
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

@media (max-width: 600px) {
  .ab-split {
    grid-template-columns: 1fr;
  }
  .ab-marker { flex-direction: row; gap: 0.75rem; }
  .ab-line { display: none; }
}
</style>
