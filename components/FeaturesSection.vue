<template>
  <section id="features" class="features">
    <div class="section-label">What we do</div>
    <h2 class="section-heading">Everything your resume <em>needs</em></h2>
    <p class="section-sub">From smart rewrites to job matching - all in one place, powered by AI that understands hiring.</p>
    <div class="features-grid">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="feature-card"
      >
        <div class="feature-icon">
          <i :class="`fa-regular ${feature.icon}`" />
        </div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
        <span v-if="feature.tag" class="feature-tag">{{ feature.tag }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: 'fa-wand-magic-sparkles',
    title: 'AI rewrite & optimize',
    description: 'Instantly sharpen your bullet points, strengthen your summary, and tailor your language to your industry.',
    tag: 'Most popular'
  },
  {
    icon: 'fa-file-export',
    title: 'Format conversion',
    description: 'Convert between PDF, Word, plain text, and JSON Resume - perfectly formatted every time.',
    tag: '12+ formats'
  },
  {
    icon: 'fa-bullseye-arrow',
    title: 'Job description match',
    description: "Paste any job listing and we'll rewrite your resume to align with the role's keywords and requirements.",
    tag: 'ATS-ready'
  },
  {
    icon: 'fa-gauge-high',
    title: 'ATS score analysis',
    description: 'See how applicant tracking systems will read your resume and get a score with actionable improvements.',
    tag: null
  },
  {
    icon: 'fa-language',
    title: 'Multilingual support',
    description: 'Translate and localize your resume into 20+ languages while preserving tone and formatting.',
    tag: null
  },
  {
    icon: 'fa-sparkles',
    title: 'Multiple style templates',
    description: 'Choose from modern, executive, creative, or minimal layouts - all ATS-compliant and recruiter-approved.',
    tag: null
  }
]
</script>

<style scoped>
.features {
  padding: 6rem 3rem;
  max-width: 1200px;
  margin: 0 auto;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.feature-card {
  background: var(--card-bg);
  border: 0.5px solid var(--border);
  border-radius: 16px;
  padding: 1.75rem;
  transition: border-color 0.2s, transform 0.2s;
}
.feature-card:hover {
  border-color: var(--gold2);
  transform: translateY(-2px);
}
.feature-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--cream2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-bottom: 1.25rem;
  color: var(--ink);
}
.feature-card h3 { font-size: 17px; font-weight: 500; color: var(--ink); margin-bottom: 0.5rem; }
.feature-card p { font-size: 14px; color: var(--ink2); line-height: 1.6; font-weight: 300; }
.feature-tag {
  display: inline-block;
  margin-top: 1rem;
  font-size: 12px;
  color: var(--teal);
  background: var(--teal2);
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  font-weight: 500;
}
@media (max-width: 900px) {
  .features-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .features { padding: 4rem 1.5rem; }
  .features-grid { grid-template-columns: 1fr; }
}
</style>
