<template>
  <main>

    <!-- Hero -->
    <section class="about-hero">
      <div class="container">
        <p class="section-label">{{ $t('about.label') }}</p>
        <h1 class="section-heading">
          {{ $t('about.page.heading') }} <em>{{ $t('about.page.headingEm') }}</em>
        </h1>
        <p class="section-sub">{{ $t('about.page.body') }}</p>
      </div>
    </section>

    <!-- Why ResumeDOG Exists -->
    <section class="why-section">
      <div class="container">
        <div class="why-inner">
          <div>
            <p class="section-label">{{ $t('about.page.why.label') }}</p>
            <h2 class="section-heading">
              {{ $t('about.page.why.heading') }} <em>{{ $t('about.page.why.headingEm') }}</em>
            </h2>
            <p class="body-text">{{ $t('about.page.why.p1') }}</p>
            <p class="body-text">{{ $t('about.page.why.p2') }}</p>
          </div>
          <div class="why-visual">
            <div class="stat-card">
              <span class="stat-val">75%</span>
              <span class="stat-label">of resumes rejected by ATS before a human sees them</span>
            </div>
            <div class="stat-card">
              <span class="stat-val">3×</span>
              <span class="stat-label">more client submissions with a tailored resume</span>
            </div>
            <div class="stat-card">
              <span class="stat-val">30s</span>
              <span class="stat-label">average time to transform a candidate resume</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who ResumeDOG Is For -->
    <section class="who-for">
      <div class="container">
        <p class="section-label">{{ $t('about.page.whoFor.label') }}</p>
        <h2 class="section-heading">
          {{ $t('about.page.whoFor.heading') }} <em>{{ $t('about.page.whoFor.headingEm') }}</em>
        </h2>
        <p class="section-sub">{{ $t('about.page.whoFor.body') }}</p>
        <ul class="who-list">
          <li v-for="n in 5" :key="n">
            <i class="fa-solid fa-check"></i>
            {{ $t(`about.page.whoFor.bullet${n}`) }}
          </li>
        </ul>
      </div>
    </section>

    <!-- What We Believe -->
    <section class="believe-section">
      <div class="container">
        <div class="believe-inner">
          <div>
            <p class="section-label">{{ $t('about.page.believe.label') }}</p>
            <h2 class="section-heading">
              {{ $t('about.page.believe.heading') }} <em>{{ $t('about.page.believe.headingEm') }}</em>
            </h2>
            <p class="body-text">{{ $t('about.page.believe.body') }}</p>
          </div>
          <blockquote class="believe-quote">
            <span class="quote-mark">"</span>
            {{ $t('whyWeBuilt.quote') }}
          </blockquote>
        </div>
      </div>
    </section>

    <!-- FAQs -->
    <section class="faqs-section">
      <div class="container">
        <p class="section-label">{{ $t('homeFaqs.label') }}</p>
        <h2 class="section-heading">{{ $t('homeFaqs.heading') }} <em>{{ $t('homeFaqs.headingEm') }}</em></h2>
        <div class="faqs-list">
          <FaqItem v-for="(faq, i) in $tm('about.page.faqs')" :key="i" :q="$rt(faq.q)" :a="$rt(faq.a)" />
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
  title: 'About ResumeDOG | AI Resume Formatting for Recruitment Agencies',
  description: 'ResumeDOG was built to remove the resume formatting bottleneck for recruitment agencies. Learn why we built it and who it\'s for.'
})
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero */
.about-hero {
  padding: 4rem 0 2.5rem;
}

/* Why section */
.why-section {
  padding: 3rem 0;
  background: var(--cream2);
}
.why-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;
}
.body-text {
  font-size: 16px;
  color: var(--ink2);
  line-height: 1.75;
  margin-bottom: 1rem;
}
.why-visual {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.stat-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
}
.stat-val {
  font-family: var(--font-display);
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--gold);
  letter-spacing: -0.03em;
  flex-shrink: 0;
}
.stat-label {
  font-size: 14px;
  color: var(--ink2);
  line-height: 1.5;
}

/* Who for */
.who-for {
  padding: 3rem 0;
}
.who-list {
  list-style: none;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.who-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 16px;
  color: var(--ink);
  padding: 1rem 1.25rem;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
}
.who-list li i { color: var(--gold); margin-top: 3px; flex-shrink: 0; }

/* Believe section */
.believe-section {
  padding: 3rem 0;
  background: var(--cream2);
}
.believe-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
}
.believe-quote {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-left: 3px solid var(--gold);
  border-radius: 0 14px 14px 0;
  padding: 2rem;
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--ink);
  line-height: 1.65;
}
.quote-mark {
  display: block;
  font-size: 3rem;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 0.5rem;
}

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
  .why-inner,
  .believe-inner { grid-template-columns: 1fr; }
}
</style>
