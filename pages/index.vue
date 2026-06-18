<template>
  <main>

    <!-- 1. Hero -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-content">
          <div class="hero-eyebrow">{{ $t('hero.eyebrow') }}</div>
          <h1>{{ $t('hero.heading') }} <em>{{ $t('hero.headingEm') }}</em></h1>
          <p class="hero-supporting">{{ $t('hero.supporting') }}</p>
          <p class="hero-body">{{ $t('hero.body') }}</p>
          <div class="hero-actions">
            <NuxtLink to="/signup" class="btn-primary">{{ $t('hero.cta1') }}</NuxtLink>
            <button class="btn-demo">{{ $t('hero.cta2') }}</button>
          </div>
          <div class="hero-trust">
            <span class="trust-dot"></span>{{ $t('hero.trust1') }}
            <span class="trust-sep">·</span>
            {{ $t('hero.trust2') }}
          </div>
        </div>
        <div class="hero-visual">
          <!-- Main mockup window -->
          <div class="hv-window">
            <div class="hv-dots-bg"></div>
            <!-- Title bar -->
            <div class="hv-titlebar">
              <div class="hv-dot"></div>
              <div class="hv-dot"></div>
              <div class="hv-dot"></div>
              <span class="hv-titlebar-label">resumedog · transform</span>
              <span class="hv-live"><span class="hv-pulse"></span>live</span>
            </div>
            <!-- Canvas area -->
            <div class="hv-canvas">
              <!-- SVG connectors -->
              <svg class="hv-svg" viewBox="0 0 600 480" preserveAspectRatio="none">
                <path d="M180 200 C 250 220, 280 240, 300 250" stroke="rgba(212,162,76,0.5)" stroke-width="1.4" stroke-dasharray="3 5" fill="none"/>
                <path d="M300 250 C 360 250, 400 230, 460 200" stroke="rgba(15,28,46,0.32)" stroke-width="1.4" stroke-dasharray="3 5" fill="none"/>
              </svg>

              <!-- Raw input card -->
              <div class="hv-card hv-card-raw">
                <div class="hv-card-header">
                  <span class="hv-mono">resume_raw.docx</span>
                  <div class="hv-dot-sm"></div>
                </div>
                <div class="hv-lines">
                  <div class="hv-line dark short"></div>
                  <div class="hv-line long"></div>
                  <div class="hv-line med"></div>
                  <div class="hv-line-gap"></div>
                  <div class="hv-line dark short"></div>
                  <div class="hv-line long"></div>
                  <div class="hv-line long"></div>
                  <div class="hv-line med"></div>
                  <div class="hv-line-gap"></div>
                  <div class="hv-line long"></div>
                  <div class="hv-line med"></div>
                </div>
                <div class="hv-badge-raw">Raw input</div>
              </div>

              <!-- JD card -->
              <div class="hv-card hv-card-jd">
                <div class="hv-card-header">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="hv-icon-amber"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6"/></svg>
                  <span class="hv-mono">job_description.txt</span>
                </div>
                <div class="hv-lines">
                  <div class="hv-line dark short" style="height:6px"></div>
                  <div class="hv-line long" style="height:6px"></div>
                  <div class="hv-line long" style="height:6px"></div>
                  <div class="hv-line med" style="height:6px"></div>
                  <div class="hv-line long" style="height:6px"></div>
                  <div class="hv-line" style="height:6px;width:70%"></div>
                </div>
              </div>

              <!-- Center AI orb -->
              <div class="hv-orb-wrap">
                <div class="hv-ring-outer"></div>
                <div class="hv-ring-inner"></div>
                <div class="hv-orb">
                  <svg width="26" height="26" viewBox="0 0 32 32"><g fill="currentColor"><ellipse cx="9" cy="9" rx="3" ry="4"/><ellipse cx="16" cy="6.5" rx="3" ry="4"/><ellipse cx="23" cy="9" rx="3" ry="4"/><ellipse cx="27" cy="16" rx="2.5" ry="3.5"/><path d="M16 13c-4.5 0-8 3.5-8 7.5 0 3 2 5 4.5 5 1.5 0 2.5-.6 3.5-.6s2 .6 3.5.6c2.5 0 4.5-2 4.5-5 0-4-3.5-7.5-8-7.5z"/></g></svg>
                </div>
              </div>

              <!-- Output card -->
              <div class="hv-card hv-card-out">
                <div class="hv-card-stripe"></div>
                <div class="hv-card-header" style="padding-top:0.25rem">
                  <div class="hv-out-logo">
                    <svg width="11" height="11" viewBox="0 0 32 32"><g fill="currentColor"><ellipse cx="9" cy="9" rx="3" ry="4"/><ellipse cx="16" cy="6.5" rx="3" ry="4"/><ellipse cx="23" cy="9" rx="3" ry="4"/><ellipse cx="27" cy="16" rx="2.5" ry="3.5"/><path d="M16 13c-4.5 0-8 3.5-8 7.5 0 3 2 5 4.5 5 1.5 0 2.5-.6 3.5-.6s2 .6 3.5.6c2.5 0 4.5-2 4.5-5 0-4-3.5-7.5-8-7.5z"/></g></svg>
                  </div>
                  <span class="hv-mono">Your Agency</span>
                  <span class="hv-mono amber" style="margin-left:auto">v.final</span>
                </div>
                <div class="hv-out-candidate">
                  <div class="hv-avatar"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg></div>
                  <div class="hv-out-info">
                    <div class="hv-line dark" style="width:70%;height:7px"></div>
                    <div class="hv-line amber short" style="height:5px;margin-top:4px"></div>
                  </div>
                </div>
                <div class="hv-lines" style="margin-top:0.5rem">
                  <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px"><div class="hv-amber-dot"></div><div class="hv-line dark" style="width:38%;height:6px"></div></div>
                  <div class="hv-line long"></div>
                  <div class="hv-line long"></div>
                  <div class="hv-line med"></div>
                  <div class="hv-line-gap"></div>
                  <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px"><div class="hv-amber-dot"></div><div class="hv-line dark" style="width:42%;height:6px"></div></div>
                  <div class="hv-line long"></div>
                  <div class="hv-line med"></div>
                </div>
                <div class="hv-badge-out">Client-ready</div>
              </div>

              <!-- Floating pills -->
              <div class="hv-pill hv-pill-amber" style="top:22%;left:38%">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
                EN→JP translate
              </div>
              <div class="hv-pill hv-pill-dark" style="top:56%;left:34%">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
                Anonymize
              </div>
              <div class="hv-pill hv-pill-light" style="top:74%;right:28%">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19l10-10M14 4l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3zM19 14l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z"/></svg>
                Tailored to JD
              </div>

              <!-- Export buttons -->
              <div class="hv-exports">
                <button class="hv-export-btn">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v12m0 0-4-4m4 4 4-4M4 20h16"/></svg>
                  DOCX
                </button>
                <button class="hv-export-btn">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v12m0 0-4-4m4 4 4-4M4 20h16"/></svg>
                  PDF
                </button>
              </div>
            </div>
          </div>

          <!-- Stat cards below -->
          <div class="hv-stats">
            <div class="hv-stat-card">
              <div class="hv-stat-top">
                <div class="hv-stat-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg></div>
                <span class="hv-stat-num">30s</span>
              </div>
              <div class="hv-stat-title">30-second processing</div>
              <div class="hv-stat-body">From raw upload to client-ready output, in under a minute.</div>
            </div>
            <div class="hv-stat-card">
              <div class="hv-stat-top">
                <div class="hv-stat-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg></div>
                <span class="hv-stat-num">2 lang</span>
              </div>
              <div class="hv-stat-title">EN ⇄ JP translation</div>
              <div class="hv-stat-body">Native Japanese handling and Rirekisho support built in.</div>
            </div>
            <div class="hv-stat-card">
              <div class="hv-stat-top">
                <div class="hv-stat-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z"/></svg></div>
                <span class="hv-stat-num">100%</span>
              </div>
              <div class="hv-stat-title">Enterprise-grade security</div>
              <div class="hv-stat-body">Anonymization, role-based access, and audit-ready exports.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. What ResumeDOG Does -->
    <section class="what-we-do">
      <div class="container">
        <p class="section-label">{{ $t('whatWeDo.label') }}</p>
        <h2 class="section-heading">
          {{ $t('whatWeDo.heading') }} <em>{{ $t('whatWeDo.headingEm') }}</em>
        </h2>
        <p class="section-sub">{{ $t('whatWeDo.body') }}</p>
        <div class="wwd-grid">
          <div class="wwd-card">
            <span class="wwd-icon"><i class="fa-solid fa-align-left"></i></span>
            <h3>{{ $t('whatWeDo.formatting.title') }}</h3>
            <p>{{ $t('whatWeDo.formatting.desc') }}</p>
          </div>
          <div class="wwd-card">
            <span class="wwd-icon"><i class="fa-solid fa-language"></i></span>
            <h3>{{ $t('whatWeDo.translation.title') }}</h3>
            <p>{{ $t('whatWeDo.translation.desc') }}</p>
          </div>
          <div class="wwd-card">
            <span class="wwd-icon"><i class="fa-solid fa-user-slash"></i></span>
            <h3>{{ $t('whatWeDo.anonymization.title') }}</h3>
            <p>{{ $t('whatWeDo.anonymization.desc') }}</p>
          </div>
          <div class="wwd-card">
            <span class="wwd-icon"><i class="fa-solid fa-bullseye"></i></span>
            <h3>{{ $t('whatWeDo.matching.title') }}</h3>
            <p>{{ $t('whatWeDo.matching.desc') }}</p>
          </div>
          <div class="wwd-card">
            <span class="wwd-icon"><i class="fa-solid fa-sliders"></i></span>
            <h3>{{ $t('whatWeDo.templates.title') }}</h3>
            <p>{{ $t('whatWeDo.templates.desc') }}</p>
          </div>
          <div class="wwd-card">
            <span class="wwd-icon"><i class="fa-solid fa-file-export"></i></span>
            <h3>{{ $t('whatWeDo.export.title') }}</h3>
            <p>{{ $t('whatWeDo.export.desc') }}</p>
          </div>
        </div>
        <div class="section-footer">
          <NuxtLink to="/services" class="read-more">{{ $t('services.readMore') }} <i class="fa-solid fa-arrow-right"></i></NuxtLink>
        </div>
      </div>
    </section>

    <!-- 3. How It Works -->
    <section class="how-it-works">
      <div class="container">
        <p class="section-label">{{ $t('howItWorks.label') }}</p>
        <h2 class="section-heading">
          {{ $t('howItWorks.heading') }} <em>{{ $t('howItWorks.headingEm') }}</em>
        </h2>
        <p class="section-sub">{{ $t('howItWorks.body') }}</p>
        <div class="steps-grid">
          <div v-for="n in 6" :key="n" class="step-card">
            <div class="step-num">{{ $t(`howItWorks.step${n}.num`) }}</div>
            <h3>{{ $t(`howItWorks.step${n}.title`) }}</h3>
            <p>{{ $t(`howItWorks.step${n}.desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Built for Recruiters -->
    <section class="for-recruiters">
      <div class="container">
        <div class="fr-header">
          <div>
            <p class="section-label">{{ $t('recruiters.label') }}</p>
            <h2 class="section-heading">
              {{ $t('recruiters.heading') }} <em>{{ $t('recruiters.headingEm') }}</em>
            </h2>
            <p class="section-sub">{{ $t('recruiters.body') }}</p>
          </div>
          <div class="fr-tagline">
            <span>{{ $t('recruiters.tagline') }}</span>
          </div>
        </div>
        <div class="fr-grid">
          <div v-for="key in ['jd','formatting','consistent','multilingual','anonymize','export']" :key="key" class="fr-card">
            <i class="fa-solid fa-check fr-check"></i>
            <div>
              <h3>{{ $t(`recruiters.${key}.title`) }}</h3>
              <p>{{ $t(`recruiters.${key}.desc`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Japan / Multilingual -->
    <section class="japan-section">
      <div class="container">
        <div class="japan-inner">
          <div class="japan-content">
            <p class="section-label">{{ $t('japan.label') }}</p>
            <h2 class="section-heading">
              {{ $t('japan.heading') }} <em>{{ $t('japan.headingEm') }}</em>
            </h2>
            <p class="section-sub">{{ $t('japan.body') }}</p>
            <div class="japan-badges">
              <span class="badge-pill">{{ $t('japan.badge1') }}</span>
              <span class="badge-pill">{{ $t('japan.badge2') }}</span>
              <span class="badge-pill">{{ $t('japan.badge3') }}</span>
            </div>
          </div>
          <div class="japan-workflow">
            <p class="workflow-label">{{ $t('japan.workflowLabel') }}</p>
            <div class="workflow-steps">
              <div v-for="key in ['w1','w2','w3','w4','w5']" :key="key" class="wf-step">
                <span>{{ $t(`japan.${key}`) }}</span>
                <i v-if="key !== 'w5'" class="fa-solid fa-arrow-right wf-arrow"></i>
              </div>
            </div>
            <div class="haken-box">
              <p class="haken-label">{{ $t('japan.hakenLabel') }}</p>
              <h3>{{ $t('japan.hakenHeading') }}</h3>
              <p>{{ $t('japan.hakenBody') }}</p>
              <p class="haken-note">{{ $t('japan.hakenNote') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Why We Built It -->
    <section class="why-we-built">
      <div class="container">
        <div class="wwb-inner">
          <div class="wwb-content">
            <p class="section-label">{{ $t('whyWeBuilt.label') }}</p>
            <h2 class="section-heading">
              {{ $t('whyWeBuilt.heading') }} <em>{{ $t('whyWeBuilt.headingEm') }}</em>
            </h2>
            <p>{{ $t('whyWeBuilt.p1') }}</p>
            <p>{{ $t('whyWeBuilt.p2') }}</p>
            <p>{{ $t('whyWeBuilt.p3') }}</p>
          </div>
          <blockquote class="wwb-quote">
            <span class="quote-mark">"</span>
            {{ $t('whyWeBuilt.quote') }}
          </blockquote>
        </div>
      </div>
    </section>

    <!-- 7. Plan Preview -->
    <section class="plan-preview">
      <div class="container">
        <p class="section-label">{{ $t('pricing.eyebrow') }}</p>
        <h2 class="section-heading">{{ $t('pricing.heading') }} <em>{{ $t('pricing.headingEm') }}</em></h2>
        <p class="section-sub">{{ $t('pricing.sub') }}</p>
        <div class="plans-grid">
          <div v-for="plan in ['free','pro','team']" :key="plan" class="plan-card" :class="{ popular: plan === 'pro' }">
            <div v-if="plan === 'pro'" class="popular-badge">{{ $t('pricing.mostPopular') }}</div>
            <h3>{{ $t(`pricing.plans.${plan}.name`) }}</h3>
            <p class="plan-desc">{{ $t(`pricing.plans.${plan}.description`) }}</p>
            <ul class="plan-features">
              <li v-for="(feature, i) in $tm(`pricing.plans.${plan}.features`)" :key="i">
                <i class="fa-solid fa-check"></i> {{ $rt(feature) }}
              </li>
            </ul>
            <NuxtLink to="/pricing" class="plan-cta" :class="plan === 'pro' ? 'btn-primary' : 'btn-outline'">
              {{ $t(`pricing.plans.${plan}.cta`) }}
            </NuxtLink>
          </div>
        </div>
        <div class="pricing-link">
          <NuxtLink to="/pricing">{{ $t('about.readMore') }} <i class="fa-solid fa-arrow-right"></i></NuxtLink>
        </div>
      </div>
    </section>

    <!-- 8. FAQs -->
    <section class="faqs-section">
      <div class="container">
        <p class="section-label">{{ $t('homeFaqs.label') }}</p>
        <h2 class="section-heading">{{ $t('homeFaqs.heading') }} <em>{{ $t('homeFaqs.headingEm') }}</em></h2>
        <div class="faqs-list">
          <FaqItem v-for="(faq, i) in $tm('homeFaqs.items')" :key="i" :q="$rt(faq.q)" :a="$rt(faq.a)" />
        </div>
      </div>
    </section>

    <!-- 9. Final CTA -->
    <section class="final-cta">
      <div class="container">
        <h2>{{ $t('finalCta.heading') }} <em>{{ $t('finalCta.headingEm') }}</em></h2>
        <div class="final-actions">
          <NuxtLink to="/signup" class="btn-primary">{{ $t('finalCta.cta1') }}</NuxtLink>
          <button class="btn-demo">{{ $t('finalCta.cta2') }}</button>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
useSeoMeta({
  title: 'ResumeDOG | AI Resume Formatting & Translation for Recruitment Agencies',
  description: 'ResumeDOG helps recruitment agencies format, translate, anonymize, and prepare candidate resumes for client submission. Built for English-Japanese recruiting workflows.'
})
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ── Hero ── */
.hero {
  background: var(--cream);
  padding: 3.5rem 2rem 3rem;
}
.hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--teal2);
  color: var(--teal);
  padding: 0.3rem 0.9rem;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
h1 {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--ink);
  font-weight: 700;
  margin-bottom: 0.75rem;
}
h1 em { color: var(--gold); font-style: italic; }
.hero-supporting {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 1rem;
}
.hero-body {
  font-size: 15px;
  color: var(--ink2);
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: 1.25rem;
}
.hero-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 0.75rem;
}
.btn-demo {
  background: transparent;
  border: 1px solid var(--ink2);
  color: var(--ink);
  padding: 0.85rem 1.5rem;
  border-radius: 100px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  font-family: var(--font-body);
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}
.btn-demo:hover { background: var(--cream2); }
[data-theme="dark"] .btn-demo { background: var(--cream2); }
.hero-trust {
  font-size: 13px;
  color: var(--ink2);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.trust-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--gold);
  display: inline-block;
}
.trust-sep { color: var(--border); }

/* ── Hero Visual ── */
.hero-visual {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Window frame */
.hv-window {
  position: relative;
  height: 460px;
  border-radius: 20px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  overflow: hidden;
  box-shadow: rgba(15,28,46,0.35) 0px 60px 120px -60px;
}
.hv-dots-bg {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--border) 1px, transparent 1px);
  background-size: 18px 18px;
  opacity: 0.5;
}

/* Title bar */
.hv-titlebar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 36px;
  border-bottom: 1px solid var(--border);
  background: var(--cream);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 6px;
  z-index: 30;
}
.hv-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--ink2);
  opacity: 0.3;
}
.hv-titlebar-label {
  margin-left: 0.75rem;
  font-size: 10px;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink2);
}
.hv-live {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-family: monospace;
  color: #d97706;
}
.hv-pulse {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #f59e0b;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }

/* Canvas */
.hv-canvas {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 36px 2.5rem 1rem;
  box-sizing: border-box;
}
.hv-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* Cards */
.hv-card {
  position: absolute;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.25rem;
  box-shadow: 0 20px 40px -20px rgba(15,28,46,0.2);
}
.hv-card-raw {
  left: 0;
  top: 1.5rem;
  width: 220px;
  transform: rotate(-3deg);
}
.hv-card-jd {
  left: 42px;
  top: 148px;
  width: 180px;
  transform: rotate(5deg);
}
.hv-card-out {
  right: 0;
  top: 0.5rem;
  width: 240px;
  transform: rotate(4deg);
  overflow: hidden;
}
.hv-card-stripe {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(to right, var(--ink), #f59e0b, var(--ink));
}
.hv-card-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 0.75rem;
}
.hv-mono {
  font-size: 9px;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink2);
}
.hv-mono.amber { color: #d97706; }
.hv-dot-sm {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--ink2);
  opacity: 0.4;
  margin-left: auto;
}
.hv-icon-amber { color: #d97706; }

/* Lines (document skeleton) */
.hv-lines { display: flex; flex-direction: column; gap: 6px; }
.hv-line {
  height: 7px;
  border-radius: 100px;
  background: var(--border);
}
.hv-line.dark { background: var(--ink2); opacity: 0.35; }
.hv-line.amber { background: #f59e0b; opacity: 0.7; }
.hv-line.short { width: 45%; }
.hv-line.med { width: 65%; }
.hv-line.long { width: 90%; }
.hv-line-gap { height: 8px; }

/* Badges */
.hv-badge-raw {
  position: absolute;
  top: -8px;
  left: -8px;
  background: var(--ink);
  color: var(--cream);
  font-size: 9px;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 2px 8px;
  border-radius: 6px;
}
.hv-badge-out {
  position: absolute;
  bottom: -8px;
  right: -8px;
  background: #f59e0b;
  color: var(--ink);
  font-size: 9px;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 2px 8px;
  border-radius: 6px;
}

/* Output card specifics */
.hv-out-logo {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: var(--ink);
  color: var(--cream);
  display: flex;
  align-items: center;
  justify-content: center;
}
.hv-out-candidate {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  align-items: flex-start;
}
.hv-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--cream2);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ink2);
  flex-shrink: 0;
}
.hv-out-info { flex: 1; padding-top: 4px; }
.hv-amber-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #f59e0b;
  flex-shrink: 0;
}

/* AI Orb */
.hv-orb-wrap {
  position: absolute;
  right: 28%;
  top: 64%;
  transform: translate(50%, -50%);
  width: 120px;
  height: 120px;
  z-index: 10;
}
.hv-ring-outer {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px dashed var(--border);
  animation: spin 12s linear infinite;
}
.hv-ring-inner {
  position: absolute;
  inset: 12px;
  border-radius: 50%;
  border: 1px solid rgba(245,158,11,0.4);
  animation: spin 18s linear infinite reverse;
}
.hv-orb {
  position: absolute;
  inset: 28px;
  border-radius: 50%;
  background: var(--ink);
  color: var(--cream);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 40px -10px rgba(212,162,76,0.4);
  animation: breathe 2.4s cubic-bezier(0.4,0,0.2,1) infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes breathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }

/* Floating pills */
.hv-pill {
  position: absolute;
  z-index: 20;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 500;
  box-shadow: 0 10px 24px -10px rgba(15,28,46,0.35);
}
.hv-pill-amber { background: #f59e0b; color: var(--ink); }
.hv-pill-dark { background: var(--ink); color: var(--cream); }
.hv-pill-light { background: var(--card-bg); color: var(--ink); border: 1px solid var(--border); }

/* Export buttons */
.hv-exports {
  position: absolute;
  bottom: 0.75rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  z-index: 20;
}
.hv-export-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 8px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  font-size: 11px;
  font-family: monospace;
  font-weight: 500;
  color: var(--ink);
  cursor: pointer;
  box-shadow: 0 8px 20px -10px rgba(15,28,46,0.25);
}

/* Stat cards row */
.hv-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
}
.hv-stat-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1rem;
}
.hv-stat-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.6rem;
}
.hv-stat-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--ink);
  color: var(--cream);
  display: flex;
  align-items: center;
  justify-content: center;
}
.hv-stat-num {
  font-size: 11px;
  font-family: monospace;
  color: #d97706;
}
.hv-stat-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.3;
  margin-bottom: 0.25rem;
}
.hv-stat-body {
  font-size: 12px;
  color: var(--ink2);
  line-height: 1.5;
}

/* ── What We Do ── */
.what-we-do {
  padding: 3.5rem 0;
  background: var(--cream2);
}
.wwd-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}
.wwd-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.25rem;
}
.wwd-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: var(--teal2);
  color: var(--teal);
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 0.6rem;
}
.wwd-card h3 {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.4rem;
}
.wwd-card p { font-size: 14px; color: var(--ink2); line-height: 1.6; }

/* ── How It Works ── */
.how-it-works {
  padding: 3.5rem 0;
}
.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}
.step-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.25rem;
}
.step-num {
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}
.step-card h3 {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.4rem;
}
.step-card p { font-size: 14px; color: var(--ink2); line-height: 1.6; }

/* ── Built for Recruiters ── */
.for-recruiters {
  padding: 3.5rem 0;
  background: var(--cream2);
}
.fr-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 1.5rem;
}
.fr-tagline {
  flex-shrink: 0;
  max-width: 260px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.5rem;
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.4;
  align-self: flex-end;
}
.fr-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}
.fr-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}
.fr-check {
  color: var(--gold);
  margin-top: 3px;
  flex-shrink: 0;
}
.fr-card h3 {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.3rem;
}
.fr-card p { font-size: 13px; color: var(--ink2); line-height: 1.5; }

/* ── Japan Section ── */
.japan-section {
  padding: 3.5rem 0;
}
.japan-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}
.japan-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}
.badge-pill {
  background: var(--teal2);
  color: var(--teal);
  font-size: 12px;
  font-weight: 600;
  padding: 0.3rem 0.85rem;
  border-radius: 100px;
  letter-spacing: 0.03em;
}
.workflow-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink2);
  font-weight: 600;
  margin-bottom: 1rem;
}
.workflow-steps {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1rem;
  background: var(--cream2);
  border-radius: 12px;
  padding: 0.75rem 1rem;
}
.wf-step {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 13px;
  font-weight: 500;
  color: var(--ink);
}
.wf-arrow { color: var(--gold); font-size: 11px; }
.haken-box {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.75rem;
}
.haken-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--teal);
  font-weight: 600;
  margin-bottom: 0.75rem;
}
.haken-box h3 {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.75rem;
}
.haken-box p { font-size: 14px; color: var(--ink2); line-height: 1.65; }
.haken-note {
  margin-top: 0.75rem;
  font-size: 13px !important;
  font-style: italic;
  color: var(--ink2);
  opacity: 0.8;
}

/* ── Why We Built It ── */
.why-we-built {
  padding: 3.5rem 0;
  background: var(--cream2);
}
.wwb-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}
.wwb-content p {
  font-size: 16px;
  color: var(--ink2);
  line-height: 1.75;
  margin-bottom: 1rem;
}
.wwb-quote {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-left: 3px solid var(--gold);
  border-radius: 0 14px 14px 0;
  padding: 2rem;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--ink);
  line-height: 1.6;
  position: relative;
  align-self: center;
}
.quote-mark {
  display: block;
  font-size: 3rem;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 0.5rem;
}

/* ── Plan Preview ── */
.plan-preview {
  padding: 3.5rem 0;
}
.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}
.plan-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.5rem;
  position: relative;
}
.plan-card.popular {
  border-color: var(--gold);
  box-shadow: 0 0 0 1px var(--gold);
}
.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gold);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 0.25rem 0.85rem;
  border-radius: 100px;
  white-space: nowrap;
}
.plan-card h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 0.4rem;
}
.plan-desc {
  font-size: 13px;
  color: var(--ink2);
  margin-bottom: 1.25rem;
  line-height: 1.5;
}
.plan-features {
  list-style: none;
  margin-bottom: 1.5rem;
}
.plan-features li {
  font-size: 13px;
  color: var(--ink2);
  padding: 0.35rem 0;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}
.plan-features li i { color: var(--gold); margin-top: 3px; flex-shrink: 0; }
.plan-cta {
  display: block;
  text-align: center;
  padding: 0.7rem 1.25rem;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}
.btn-outline {
  border: 1px solid var(--border);
  color: var(--ink);
  background: transparent;
}
.btn-outline:hover { border-color: var(--ink2); }
.pricing-link {
  margin-top: 2rem;
  text-align: center;
}
.pricing-link a {
  font-size: 14px;
  font-weight: 500;
  color: var(--teal);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: gap 0.2s;
}
.pricing-link a:hover { gap: 0.75rem; }

/* ── FAQs ── */
.faqs-section {
  padding: 3.5rem 0;
  background: var(--cream2);
}
.faqs-list {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* ── Final CTA ── */
.final-cta {
  padding: 4rem 0;
  text-align: center;
  background: var(--ink);
}
.final-cta h2 {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  color: var(--cream);
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}
.final-cta em { font-style: italic; color: var(--gold); }
.final-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.final-cta .btn-demo {
  color: rgba(255,255,255,0.8);
  border-color: rgba(255,255,255,0.25);
}
.final-cta .btn-demo:hover { border-color: rgba(255,255,255,0.6); color: #fff; }

/* ── Shared section footer ── */
.section-footer {
  margin-top: 1.25rem;
  display: flex;
  justify-content: flex-end;
}
.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 14px;
  font-weight: 500;
  color: var(--teal);
  transition: gap 0.2s;
}
.read-more:hover { gap: 0.75rem; }

/* ── Responsive ── */
@media (max-width: 900px) {
  .hero-inner,
  .wwb-inner,
  .japan-inner { grid-template-columns: 1fr; }
  .hero-visual { display: none; }
  .wwd-grid,
  .steps-grid,
  .fr-grid,
  .plans-grid { grid-template-columns: 1fr 1fr; }
  .fr-header { flex-direction: column; }
  .fr-tagline { max-width: 100%; }
}
@media (max-width: 600px) {
  .wwd-grid,
  .steps-grid,
  .fr-grid,
  .plans-grid { grid-template-columns: 1fr; }
  .workflow-steps { flex-direction: column; align-items: flex-start; }
}
</style>
