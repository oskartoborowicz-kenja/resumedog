<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-eyebrow">AI-Powered Resume Tool</div>
      <h1>Your resume,<em>reimagined.</em></h1>
      <p class="hero-sub">
        Upload your CV and let AI rewrite, convert, and match it to any job description - in seconds.
        Land more interviews with a resume that actually stands out.
      </p>
      <div class="hero-actions">
        <NuxtLink to="/upload" class="btn-primary">
          Upload your resume <i class="fa-regular fa-arrow-right" />
        </NuxtLink>
        <NuxtLink to="/examples" class="btn-secondary">
          See examples <i class="fa-regular fa-arrow-right" />
        </NuxtLink>
      </div>
      <div class="hero-trust">
        <div class="trust-avatars">
          <span>JL</span><span>MR</span><span>AK</span><span>PT</span>
        </div>
        <span>Trusted by 40,000+ job seekers</span>
      </div>
    </div>
    <div class="hero-visual">
      <div class="badge">AI Processing</div>
      <div class="resume-before">
        <div class="rp-name">Alex Johnson</div>
        <div class="rp-subtitle">Software Engineer · Before</div>
        <div class="rp-bar w90 gold" />
        <div class="rp-bar w75" />
        <div class="rp-bar w85" />
        <div class="rp-bar w60" />
      </div>
      <div class="transform-arrow">↓</div>
      <div class="resume-after">
        <div class="ra-name">Alex Johnson</div>
        <div class="ra-subtitle">Software Engineer · AI Enhanced</div>
        <div class="ra-bar w95 gold" />
        <div class="ra-bar w88" />
        <div class="ra-bar w92" />
        <div class="ra-bar w80" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 6rem 3rem 5rem;
  max-width: 1200px;
  margin: 0 auto;
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
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 1.5rem;
}
.hero-eyebrow::before { content: '✦'; font-size: 10px; }
h1 {
  font-family: var(--font-display);
  font-size: 4rem;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--ink);
  margin-bottom: 1.5rem;
  font-weight: 400;
}
h1 em { color: var(--gold); font-style: italic; display: block; }
.hero-sub {
  font-size: 17px;
  color: var(--ink2);
  line-height: 1.7;
  max-width: 460px;
  margin-bottom: 2.5rem;
  font-weight: 300;
}
.hero-actions { display: flex; gap: 1rem; align-items: center; flex-wrap: wrap; }
.hero-trust {
  margin-top: 2.5rem;
  font-size: 13px;
  color: var(--ink2);
  display: flex;
  align-items: center;
  gap: 12px;
}
.trust-avatars { display: flex; }
.trust-avatars span {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--gold2);
  border: 2px solid var(--cream);
  margin-left: -6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: var(--ink);
  font-weight: 500;
}
.trust-avatars span:first-child { margin-left: 0; }

/* Visual */
.hero-visual {
  background: var(--card-bg);
  border: 0.5px solid var(--border);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}
.badge {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: var(--teal);
  color: #fff;
  font-size: 11px;
  font-weight: 500;
  padding: 0.3rem 0.75rem;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.badge::before {
  content: '●';
  font-size: 7px;
  animation: pulse 1.5s ease-in-out infinite;
}
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }

.resume-before {
  background: var(--cream2);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}
.rp-name { font-family: var(--font-display); font-size: 1.2rem; color: var(--ink); margin-bottom: 0.25rem; }
.rp-subtitle { color: var(--ink2); font-size: 12px; margin-bottom: 1rem; }
.rp-bar { height: 6px; border-radius: 100px; background: var(--cream); margin-bottom: 6px; }
.rp-bar.w90 { width: 90%; }
.rp-bar.w75 { width: 75%; }
.rp-bar.w85 { width: 85%; }
.rp-bar.w60 { width: 60%; }
.rp-bar.gold { background: var(--gold2); }

.transform-arrow {
  text-align: center;
  font-size: 20px;
  color: var(--teal);
  margin: 0.75rem 0;
  line-height: 1;
  animation: bounce 1.5s ease-in-out infinite;
}
@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(4px)} }

.resume-after {
  background: var(--ink);
  border-radius: 12px;
  padding: 1.5rem;
}
.ra-name { font-family: var(--font-display); font-size: 1.2rem; color: #fff; margin-bottom: 0.25rem; }
.ra-subtitle { color: rgba(255,255,255,0.5); font-size: 12px; margin-bottom: 1rem; }
.ra-bar { height: 6px; border-radius: 100px; background: rgba(255,255,255,0.15); margin-bottom: 6px; }
.ra-bar.w95 { width: 95%; }
.ra-bar.w88 { width: 88%; }
.ra-bar.w92 { width: 92%; }
.ra-bar.w80 { width: 80%; }
.ra-bar.gold { background: var(--gold); }

@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; }
  .hero-visual { display: none; }
  h1 { font-size: 2.8rem; }
}
</style>
