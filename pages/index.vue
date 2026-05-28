<template>
  <main>
    <!-- About -->
    <section id="about" class="about">
      <div class="container">
        <p class="section-label">{{ $t('about.label') }}</p>
        <h2 class="section-heading">
          {{ $t('about.heading1') }}<br>{{ $t('about.heading2') }} <em>{{ $t('about.headingEm') }}</em>
        </h2>
        <p class="section-sub">{{ $t('about.sub') }}</p>
        <div class="about-grid">
          <div class="about-card">
            <span class="about-icon"><i class="fa-solid fa-bolt"></i></span>
            <h3>{{ $t('about.fast.title') }}</h3>
            <p>{{ $t('about.fast.desc') }}</p>
          </div>
          <div class="about-card">
            <span class="about-icon"><i class="fa-solid fa-bullseye"></i></span>
            <h3>{{ $t('about.targeted.title') }}</h3>
            <p>{{ $t('about.targeted.desc') }}</p>
          </div>
          <div class="about-card">
            <span class="about-icon"><i class="fa-solid fa-shield-halved"></i></span>
            <h3>{{ $t('about.private.title') }}</h3>
            <p>{{ $t('about.private.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="services">
      <div class="container">
        <p class="section-label">{{ $t('services.label') }}</p>
        <h2 class="section-heading">
          {{ $t('services.heading') }} <em>{{ $t('services.headingEm') }}</em>
        </h2>
        <p class="section-sub">{{ $t('services.sub') }}</p>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-num">01</div>
            <h3>{{ $t('services.rewrite.title') }}</h3>
            <p>{{ $t('services.rewrite.desc') }}</p>
          </div>
          <div class="service-card">
            <div class="service-num">02</div>
            <h3>{{ $t('services.matching.title') }}</h3>
            <p>{{ $t('services.matching.desc') }}</p>
          </div>
          <div class="service-card">
            <div class="service-num">03</div>
            <h3>{{ $t('services.format.title') }}</h3>
            <p>{{ $t('services.format.desc') }}</p>
          </div>
          <div class="service-card">
            <div class="service-num">04</div>
            <h3>{{ $t('services.cover.title') }}</h3>
            <p>{{ $t('services.cover.desc') }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'ResumeAI — Your resume, reimagined',
  description: 'Upload your CV and let AI rewrite, convert, and match it to any job description — in seconds.'
})
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* About */
.about {
  padding: 7rem 0 5rem;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}

.about-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
}

.about-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: var(--teal2);
  color: var(--teal);
  border-radius: 10px;
  font-size: 16px;
  margin-bottom: 1.25rem;
}

.about-card h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.5rem;
}

.about-card p {
  font-size: 15px;
  color: var(--ink2);
  line-height: 1.6;
}

/* Services */
.services {
  padding: 5rem 0 7rem;
  background: var(--cream2);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}

.service-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2.25rem;
}

.service-num {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--teal);
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.6rem;
}

.service-card p {
  font-size: 15px;
  color: var(--ink2);
  line-height: 1.65;
}

@media (max-width: 900px) {
  .about-grid,
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
