<template>
  <main>

    <!-- 1. Hero -->
    <section class="hero">
      <div class="hero-inner" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
        <div class="hero-content">
          <div class="hero-brand">
            <span class="hero-paw-icon">
              <svg width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><g fill="currentColor"><ellipse cx="9" cy="9" rx="3" ry="4"/><ellipse cx="16" cy="6.5" rx="3" ry="4"/><ellipse cx="23" cy="9" rx="3" ry="4"/><ellipse cx="27" cy="16" rx="2.5" ry="3.5"/><path d="M16 13c-4.5 0-8 3.5-8 7.5 0 3 2 5 4.5 5 1.5 0 2.5-.6 3.5-.6s2 .6 3.5.6c2.5 0 4.5-2 4.5-5 0-4-3.5-7.5-8-7.5z"/></g></svg>
            </span>
Resume<span class="hero-brand-dog">DOG</span>
          </div>
          <div class="hero-eyebrow">{{ $t('hero.eyebrow') }}</div>
          <h1>{{ $t('hero.heading') }} <em>{{ $t('hero.headingEm') }}</em></h1>
          <p class="hero-supporting">{{ $t('hero.supporting') }}</p>
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
        <!-- New hero visual -->
        <div class="hero-visual">
          <div class="winwrap" ref="winwrapEl" :style="winwrapStyle">
            <div class="window">
              <div class="winbar">
                <span class="wd" style="background:#E2675E"></span>
                <span class="wd" style="background:#E6B23C"></span>
                <span class="wd" style="background:#3FA34D"></span>
                <span class="wurl">app.resumedog.io/dashboard</span>
              </div>
              <img :src="`${base}images/shot-dashboard.png`" alt="Resume Dog conversion queue" class="win-img" />
            </div>
            <div class="frag frag-tl" :style="fragStyle">
              <div class="frag-tag"><span class="jpdot"></span>日本語 <span class="ar">→</span> EN</div>
              <div class="frag-sub">CROSS-LANGUAGE · EXACT</div>
            </div>
            <div class="frag frag-br" :style="fragStyle">
              <div class="frag-label">Review time</div>
              <div class="frag-num">−38%</div>
            </div>
          </div>
          <div class="hv-stats">
            <div class="hv-stat-card">
              <div class="hv-stat-top">
                <div class="hv-stat-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg></div>
                <span class="hv-stat-num">{{ $t('heroStats.stat1.num') }}</span>
              </div>
              <div class="hv-stat-title">{{ $t('heroStats.stat1.title') }}</div>
              <div class="hv-stat-body">{{ $t('heroStats.stat1.body') }}</div>
            </div>
            <div class="hv-stat-card">
              <div class="hv-stat-top">
                <div class="hv-stat-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg></div>
                <span class="hv-stat-num">{{ $t('heroStats.stat2.num') }}</span>
              </div>
              <div class="hv-stat-title">{{ $t('heroStats.stat2.title') }}</div>
              <div class="hv-stat-body">{{ $t('heroStats.stat2.body') }}</div>
            </div>
            <div class="hv-stat-card">
              <div class="hv-stat-top">
                <div class="hv-stat-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z"/></svg></div>
                <span class="hv-stat-num">{{ $t('heroStats.stat3.num') }}</span>
              </div>
              <div class="hv-stat-title">{{ $t('heroStats.stat3.title') }}</div>
              <div class="hv-stat-body">{{ $t('heroStats.stat3.body') }}</div>
            </div>
          </div>
        </div>
        </div>
      
    </section>

    <!-- Visual Break Bar -->
    <div class="marquee-bar" aria-hidden="true">
      <div class="marquee-track">
        <div class="marquee-inner">
          <template v-for="_ in 2" :key="_">
            <template v-for="(item, i) in $tm('marquee.items')" :key="i">
              <span class="mq-item"><i :class="$rt($tm('marquee.icons')[i])"></i> {{ $rt(item) }}</span>
              <span class="mq-sep">·</span>
            </template>
          </template>
        </div>
      </div>
    </div>

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
            <div class="wwd-card-img">
              <img :src="`${base}images/home-resume.jpg`" alt="" />
            </div>
            <span class="wwd-icon"><i class="fa-solid fa-align-left"></i></span>
            <h3>{{ $t('whatWeDo.formatting.title') }}</h3>
            <p>{{ $t('whatWeDo.formatting.desc') }}</p>
          </div>
          <div class="wwd-card">
            <div class="wwd-card-img">
              <img :src="`${base}images/blog-ai-recruiting.webp`" alt="" />
            </div>
            <span class="wwd-icon"><i class="fa-solid fa-language"></i></span>
            <h3>{{ $t('whatWeDo.translation.title') }}</h3>
            <p>{{ $t('whatWeDo.translation.desc') }}</p>
          </div>
          <div class="wwd-card">
            <div class="wwd-card-img">
              <img :src="`${base}images/man-cv.png`" alt="" />
            </div>
            <span class="wwd-icon"><i class="fa-solid fa-user-shield"></i></span>
            <h3>{{ $t('whatWeDo.anonymization.title') }}</h3>
            <p>{{ $t('whatWeDo.anonymization.desc') }}</p>
          </div>
        </div>
        <div class="section-footer">
          <NuxtLink to="/services" class="read-more">{{ $t('services.readMore') }} <i class="fa-solid fa-arrow-right"></i></NuxtLink>
        </div>
      </div>
    </section>

    <!-- 3. What ResumeDOG Does -->
    <section class="how-it-works">
      <div class="container">
        <div class="hiw-inner">
          <div class="hiw-content">
            <p class="section-label">{{ $t('howItWorks.label') }}</p>
            <h2 class="section-heading">
              {{ $t('howItWorks.heading') }} <em>{{ $t('howItWorks.headingEm') }}</em>
            </h2>
            <p class="hiw-body">{{ $t('howItWorks.body') }}</p>
            <ul class="hiw-bullets">
              <li v-for="n in 6" :key="n">
                <span class="hiw-check"><i class="fa-solid fa-check"></i></span>
                {{ $t(`howItWorks.bullet${n}`) }}
              </li>
            </ul>
          </div>
          <div class="hiw-visual">
            <div class="hiv-pipeline">
              <div class="hiv-doc hiv-doc-in">
                <div class="hiv-doc-bar"></div>
                <div class="hiv-doc-header">
                  <span class="hiv-mono">candidate_resume.docx</span>
                  <div class="hiv-dot-sm"></div>
                </div>
                <div class="hiv-lines">
                  <div class="hiv-line dark short"></div>
                  <div class="hiv-line long"></div>
                  <div class="hiv-line med"></div>
                  <div class="hiv-line long"></div>
                  <div class="hiv-line short"></div>
                  <div class="hiv-gap"></div>
                  <div class="hiv-line dark short"></div>
                  <div class="hiv-line long"></div>
                  <div class="hiv-line med"></div>
                </div>
                <div class="hiv-label">{{ $t('howItWorks.pipelineIn') }}</div>
              </div>
              <div class="hiv-steps">
                <div v-for="(s, i) in hiwSteps" :key="i" class="hiv-step">
                  <div class="hiv-step-icon"><i :class="s.icon"></i></div>
                  <span>{{ s.label }}</span>
                </div>
              </div>
              <div class="hiv-doc hiv-doc-out">
                <div class="hiv-doc-stripe"></div>
                <div class="hiv-doc-header">
                  <div class="hiv-out-logo">
                    <i class="fa-solid fa-dog"></i>
                  </div>
                  <span class="hiv-mono">client_ready.docx</span>
                </div>
                <div class="hiv-lines">
                  <div class="hiv-line dark short"></div>
                  <div class="hiv-line long accent"></div>
                  <div class="hiv-line med accent"></div>
                  <div class="hiv-line long accent"></div>
                  <div class="hiv-line med"></div>
                  <div class="hiv-gap"></div>
                  <div class="hiv-line dark short"></div>
                  <div class="hiv-line long accent"></div>
                  <div class="hiv-line med accent"></div>
                </div>
                <div class="hiv-exports">
                  <span class="hiv-export-tag"><i class="fa-solid fa-file-word"></i> DOCX</span>
                  <span class="hiv-export-tag"><i class="fa-regular fa-file-pdf"></i> PDF</span>
                </div>
                <div class="hiv-label out">{{ $t('howItWorks.pipelineOut') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. How It Works Timeline -->
    <section class="hiw-timeline-section">
      <div class="container">
        <div class="hiw-tl-header">
          <p class="section-label">{{ $t('howItWorks2.label') }}</p>
          <h2 class="section-heading">{{ $t('howItWorks2.heading') }}</h2>
          <p class="section-sub">{{ $t('howItWorks2.body') }}</p>
        </div>
        <div class="hiw-tl-track">
          <div class="hiw-tl-line"></div>
          <div v-for="n in 5" :key="n" class="hiw-tl-step">
            <div class="hiw-tl-dot">
              <span class="hiw-tl-num">{{ n }}</span>
            </div>
            <div class="hiw-tl-card">
              <h3>{{ $t(`howItWorks2.step${n}.title`) }}</h3>
              <p>{{ $t(`howItWorks2.step${n}.desc`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Japan Map -->
    <section class="japan-map-section">
      <div class="container">
        <div class="japan-map-inner">
          <div class="japan-map-content">
            <p class="section-label">{{ $t('japan.label') }}</p>
            <h2 class="section-heading">{{ $t('japan.heading') }}</h2>
            <p class="section-sub">{{ $t('japan.body') }}</p>
          </div>
          <div class="japan-map-visual">
            <div class="jmap-wrap">
              <div class="jmap-center">
                <i class="fa-solid fa-dog"></i>
                <span>ResumeDOG</span>
              </div>
              <div class="jmap-node jmap-n1">
                <i class="fa-solid fa-building"></i>
                <span>{{ $t('japan.map1') }}</span>
              </div>
              <div class="jmap-node jmap-n2">
                <i class="fa-solid fa-language"></i>
                <span>{{ $t('japan.map2') }}</span>
              </div>
              <div class="jmap-node jmap-n3">
                <i class="fa-solid fa-user"></i>
                <span>{{ $t('japan.map3') }}</span>
              </div>
              <div class="jmap-node jmap-n4">
                <i class="fa-solid fa-file-circle-check"></i>
                <span>{{ $t('japan.map4') }}</span>
              </div>
              <svg class="jmap-lines" viewBox="0 0 400 400" preserveAspectRatio="none">
                <line x1="200" y1="200" x2="60" y2="80" stroke="var(--gold)" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.5"/>
                <line x1="200" y1="200" x2="340" y2="80" stroke="var(--gold)" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.5"/>
                <line x1="200" y1="200" x2="60" y2="320" stroke="var(--gold)" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.5"/>
                <line x1="200" y1="200" x2="340" y2="320" stroke="var(--gold)" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Why We Built It -->
    <section class="why-we-built">
      <div class="container">
        <div class="wwb-inner">
          <div class="wwb-text">
            <p class="section-label">{{ $t('whyWeBuilt.label') }}</p>
            <h2 class="section-heading wwb-heading">
              {{ $t('whyWeBuilt.heading') }} <em>{{ $t('whyWeBuilt.headingEm') }}</em>
            </h2>
            <div class="wwb-body">
              <p>{{ $t('whyWeBuilt.p1') }}</p>
              <p>{{ $t('whyWeBuilt.p2') }}</p>
            </div>
            <blockquote class="wwb-quote">
              <span class="quote-mark">"</span>
              {{ $t('whyWeBuilt.quote') }}
            </blockquote>
          </div>
          <div class="wwb-photo">
            <img :src="`${base}images/frustrated-man.png`" alt="" class="wwb-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Trial CTA -->
    <!-- 9. FAQs -->
    <section class="faqs-section">
      <div class="container">
        <div class="faqs-header">
          <p class="section-label">{{ $t('homeFaqs.label') }}</p>
          <h2 class="section-heading">{{ $t('homeFaqs.heading') }} <em>{{ $t('homeFaqs.headingEm') }}</em></h2>
          <p class="faqs-sub">{{ $t('homeFaqs.sub') }}</p>
        </div>
        <div class="faqs-list">
          <FaqItem v-for="(faq, i) in $tm('homeFaqs.items')" :key="i" :q="$rt(faq.q)" :a="$rt(faq.a)" />
        </div>
      </div>
    </section>

    <section class="trial-cta">
      <div class="container">
        <p class="section-label tctl-label">{{ $t('trialCta.label') }}</p>
        <h2 class="section-heading">{{ $t('trialCta.heading') }}</h2>
        <p class="trial-body">{{ $t('trialCta.body') }}</p>
        <div class="trial-actions">
          <NuxtLink to="/signup" class="btn-primary btn-lg">{{ $t('trialCta.cta') }}</NuxtLink>
          <p class="trial-fine">{{ $t('trialCta.fine') }}</p>
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

const base = useRuntimeConfig().app.baseURL
const { tm, rt } = useI18n()

const winwrapEl = ref(null)
const winwrapStyle = ref({})
const fragStyle = ref({})

function onMouseMove(e) {
  const el = winwrapEl.value
  if (!el) return
  const rect = el.closest('.hero-inner').getBoundingClientRect()
  const x = (e.clientX - rect.left - rect.width / 2)
  const y = (e.clientY - rect.top - rect.height / 2)
  winwrapStyle.value = {
    transform: `translate(${x * 0.02}px, ${y * 0.02}px)`,
    transition: 'transform 0.15s ease-out'
  }
  fragStyle.value = {
    transform: `translate(${x * 0.03}px, ${y * 0.03}px)`,
    transition: 'transform 0.1s ease-out'
  }
}

function onMouseLeave() {
  winwrapStyle.value = {
    transform: 'translate(0px, 0px)',
    transition: 'transform 0.6s ease-out'
  }
  fragStyle.value = {
    transform: 'translate(0px, 0px)',
    transition: 'transform 0.6s ease-out'
  }
}
const hiwSteps = computed(() =>
  tm('howItWorks.steps').map((label, i) => ({
    icon: rt(tm('howItWorks.stepIcons')[i]),
    label: rt(label),
  }))
)
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ── Hero ── */
.hero {
  background: var(--cream);
  padding: 3.5rem 2rem 3rem;
}
.hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-brand {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--ink);
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
  user-select: none;
  -webkit-user-select: none;
}
.hero-brand-dog { color: var(--gold); font-style: italic; }
.hero-paw-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--ink);
  color: var(--cream);
  flex-shrink: 0;
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

/* New winwrap visual */
.winwrap {
  position: relative;
  display: inline-block;
  width: 100%;
  transform-style: preserve-3d;
  will-change: transform;
}
.window {
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: 0 8px 40px rgba(0,0,0,0.12);
  background: var(--card-bg);
}
.winbar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: var(--cream2);
  border-bottom: 1px solid var(--border);
}
.wd {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}
.wurl {
  margin-left: 10px;
  font-size: 11px;
  color: var(--ink2);
  font-family: var(--font-body);
  letter-spacing: 0.02em;
}
.win-img {
  width: 100%;
  display: block;
}
.frag {
  position: absolute;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 14px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}
.frag-tl {
  top: -18px;
  left: -20px;
}
.frag-br {
  bottom: -20px;
  right: -16px;
}
.frag-tag {
  font-size: 12px;
  font-weight: 500;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 5px;
}
.frag-sub {
  font-size: 9.5px;
  color: var(--ink2);
  margin-top: 4px;
  letter-spacing: 0.06em;
  font-family: var(--font-body);
}
.frag-label {
  font-size: 9.5px;
  letter-spacing: 0.1em;
  color: var(--ink2);
  text-transform: uppercase;
  font-family: var(--font-body);
}
.frag-num {
  font-size: 24px;
  color: var(--gold);
  letter-spacing: -0.03em;
  margin-top: 2px;
  font-weight: 600;
}
.jpdot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gold);
  display: inline-block;
}
.ar { color: var(--ink2); }



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
  background: var(--gold);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
[data-theme="dark"] .hv-stat-icon {
  background: var(--ink);
  color: var(--cream);
}
.hv-stat-num {
  font-size: 11px;
  font-family: monospace;
  color: var(--gold2);
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

/* ── Marquee Bar ── */
.marquee-bar {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: var(--card-bg);
  overflow: hidden;
  padding: 0.85rem 0;
}
.marquee-track {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}
.marquee-inner {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  width: max-content;
  animation: marquee-scroll 32s linear infinite;
}
@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.mq-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 13px;
  font-weight: 500;
  color: var(--ink2);
  white-space: nowrap;
  letter-spacing: 0.01em;
}
.mq-item i { color: var(--gold); font-size: 12px; }
.mq-sep {
  color: var(--border);
  font-size: 16px;
  user-select: none;
}

/* ── What We Do ── */
.what-we-do {
  padding: 5rem 0;
  background: var(--cream2);
  text-align: center;
}
.wwd-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 1.5rem;
}
.wwd-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow: hidden;
}
.wwd-card-img {
  width: 100%;
  height: 180px;
  overflow: hidden;
}
.wwd-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.wwd-icon {
  margin-top: 1.5rem;
  margin-left: 2rem;
}
.wwd-card h3,
.wwd-card p {
  padding: 0 2rem;
}
.wwd-card h3 { margin-top: 0.75rem; }
.wwd-card p { margin-bottom: 2rem; }
.wwd-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--teal2);
  color: var(--teal);
  border-radius: 12px;
  font-size: 18px;
}
.wwd-card h3 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.3;
}
.wwd-card p { font-size: 15px; color: var(--ink2); line-height: 1.7; }

/* ── What ResumeDOG Does (split) ── */
.how-it-works {
  padding: 5rem 0;
  background: var(--cream);
}
.hiw-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.hiw-body {
  font-size: 15px;
  color: var(--ink2);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}
.hiw-bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.hiw-bullets li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 15px;
  color: var(--ink);
  line-height: 1.5;
}
.hiw-check {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--teal2);
  color: var(--teal);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  flex-shrink: 0;
  margin-top: 1px;
}

/* Pipeline visual */
.hiv-pipeline {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.hiv-doc {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.25rem;
  position: relative;
  overflow: hidden;
}
.hiv-doc-bar {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--border);
}
.hiv-doc-stripe {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(to right, var(--teal), var(--gold));
}
.hiv-doc-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}
.hiv-mono {
  font-size: 10px;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink2);
}
.hiv-dot-sm {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--border);
  margin-left: auto;
}
.hiv-out-logo {
  width: 20px; height: 20px;
  border-radius: 6px;
  background: var(--ink);
  color: var(--cream);
  display: flex; align-items: center; justify-content: center;
  font-size: 10px;
}
.hiv-lines { display: flex; flex-direction: column; gap: 5px; }
.hiv-line {
  height: 6px;
  border-radius: 100px;
  background: var(--border);
}
.hiv-line.dark { background: var(--ink2); opacity: 0.25; }
.hiv-line.accent { background: var(--gold); opacity: 0.5; }
.hiv-line.short { width: 40%; }
.hiv-line.med { width: 65%; }
.hiv-line.long { width: 90%; }
.hiv-gap { height: 6px; }
.hiv-label {
  position: absolute;
  bottom: 0.75rem; right: 0.75rem;
  font-size: 9px;
  font-family: monospace;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: var(--ink);
  color: var(--cream);
  padding: 2px 7px;
  border-radius: 4px;
}
.hiv-label.out {
  background: var(--gold);
  color: var(--ink);
}
.hiv-exports {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
}
.hiv-export-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-family: monospace;
  font-weight: 600;
  color: var(--ink2);
  background: var(--cream2);
  border: 1px solid var(--border);
  padding: 3px 8px;
  border-radius: 6px;
}

/* Steps strip */
.hiv-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}
.hiv-step {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.6rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 12px;
  font-weight: 500;
  color: var(--ink2);
}
.hiv-step-icon {
  color: var(--gold);
  font-size: 12px;
  flex-shrink: 0;
}

/* ── How It Works Timeline ── */
.hiw-timeline-section {
  padding: 5rem 0;
  background: var(--cream2);
}
.hiw-tl-header {
  text-align: center;
  max-width: 620px;
  margin: 0 auto 3rem;
}
.hiw-tl-track {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}
.hiw-tl-line {
  position: absolute;
  top: 22px;
  left: 22px;
  right: 22px;
  height: 2px;
  background: linear-gradient(90deg, var(--gold), var(--teal));
  opacity: 0.35;
  z-index: 0;
}
.hiw-tl-step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
}
.hiw-tl-dot {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--card-bg);
  border: 2px solid var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.hiw-tl-num {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--gold);
}
.hiw-tl-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.25rem 1rem;
  text-align: center;
  width: 100%;
}
.hiw-tl-card h3 {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.4rem;
}
.hiw-tl-card p { font-size: 13px; color: var(--ink2); line-height: 1.5; }

/* ── Japan Map Section ── */
.japan-map-section {
  padding: 5rem 0;
  background: var(--cream);
}
.japan-map-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}
.jmap-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  max-width: 380px;
  margin: 0 auto;
}
.jmap-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.jmap-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--gold);
  color: #fff;
  border-radius: 16px;
  padding: 0.85rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.85rem;
  z-index: 2;
  white-space: nowrap;
}
.jmap-center i { font-size: 1.3rem; }
.jmap-node {
  position: absolute;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0.65rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  font-size: 11px;
  font-weight: 500;
  color: var(--ink);
  text-align: center;
  z-index: 2;
  width: 120px;
  line-height: 1.35;
}
.jmap-node i { color: var(--teal); font-size: 1rem; }
.jmap-n1 { top: 5%; left: 5%; }
.jmap-n2 { top: 5%; right: 5%; }
.jmap-n3 { bottom: 5%; left: 5%; }
.jmap-n4 { bottom: 5%; right: 5%; }

/* ── Why We Built It ── */
.why-we-built {
  padding: 5rem 0;
  background: var(--cream2);
}
.wwb-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.wwb-heading {
  max-width: 560px;
  margin-bottom: 1.5rem;
}
.wwb-body {
  margin-bottom: 2rem;
}
.wwb-body p {
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
  padding: 1.75rem 2rem;
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--ink);
  line-height: 1.65;
}
.quote-mark {
  display: block;
  font-size: 2.5rem;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 0.4rem;
}
.wwb-photo {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 30px 60px -20px rgba(0,0,0,0.2);
}
.wwb-img {
  width: 100%;
  height: 480px;
  object-fit: cover;
  display: block;
}

/* ── Trial CTA ── */
.trial-cta {
  padding: 6rem 0;
  background: #0d1117;
  text-align: center;
}
.tctl-label {
  color: var(--gold) !important;
  opacity: 0.85;
}
.trial-cta .section-heading {
  color: #f0ece6;
  max-width: 600px;
  margin: 0 auto 1rem;
}
.trial-body {
  font-size: 16px;
  color: #a09890;
  max-width: 520px;
  margin: 0 auto 2rem;
  line-height: 1.7;
}
.trial-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}
.btn-lg {
  font-size: 1rem;
  padding: 0.85rem 2.25rem;
}
.trial-fine {
  font-size: 13px;
  color: #a09890;
  opacity: 0.75;
}


/* ── FAQs ── */
.faqs-section {
  padding: 5rem 0;
  background: var(--cream);
}
.faqs-header {
  text-align: center;
  max-width: 620px;
  margin: 0 auto 2.5rem;
}
.faqs-header .section-heading {
  margin-bottom: 0.75rem;
}
.faqs-sub {
  font-size: 15px;
  color: var(--ink2);
  line-height: 1.75;
  margin-top: 0.5rem;
}
.faqs-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  background: var(--card-bg);
  max-width: 780px;
  margin: 0 auto;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .hero-inner,
  .hiw-inner,
  .japan-map-inner,
  .wwb-inner,
  .bd-inner,
  .hero-visual { display: none; }
  .wwd-grid { grid-template-columns: 1fr 1fr; }
  .hiw-tl-track { flex-direction: column; align-items: stretch; }
  .hiw-tl-line { display: none; }
  .hiw-tl-step { flex-direction: row; align-items: flex-start; gap: 1rem; }
  .hiw-tl-card { text-align: left; }
  .jmap-wrap { max-width: 320px; }
}
@media (max-width: 600px) {
  .wwd-grid { grid-template-columns: 1fr; }
  .wwd-card-img { height: 140px; }
  .hiv-steps { grid-template-columns: repeat(2, 1fr); }
  .wwb-img { height: 240px; }
}
@media (max-width: 480px) {
  .what-we-do,
  .how-it-works,
  .hiw-timeline-section,
  .japan-map-section,
  .why-we-built,
  .faqs-section { padding: 3rem 0; }
  .trial-cta { padding: 3.5rem 0; }
  .container { padding: 0 1.25rem; }
  .hero { padding: 2.5rem 1.25rem 2rem; }
}
</style>
