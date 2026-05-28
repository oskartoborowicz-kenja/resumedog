<template>
  <section id="how-it-works" class="how-it-works">
    <div class="hiw-inner">
      <div class="section-label">How it works</div>
      <h2 class="section-heading">From upload to <em>offer-ready</em></h2>
      <p class="section-sub">Four steps between you and a resume that gets noticed.</p>
      <div class="steps">
        <div v-for="step in steps" :key="step.number" class="step">
          <div class="step-num">{{ step.number }}</div>
          <h4>{{ step.title }}</h4>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  { number: '1', title: 'Upload your resume', description: 'PDF, Word, or plain text — we handle any format you have.' },
  { number: '2', title: 'Choose your goal', description: 'Rewrite, convert, or match to a specific job description.' },
  { number: '3', title: 'AI does the work', description: 'Our model analyzes, rewrites, and structures in under 30 seconds.' },
  { number: '4', title: 'Download & apply', description: 'Get your polished resume in the format you need, ready to send.' }
]
</script>

<style scoped>
.how-it-works {
  background: var(--cream2);
  padding: 6rem 3rem;
}
.hiw-inner { max-width: 1200px; margin: 0 auto; }
.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3.5rem;
}
.step { text-align: center; }
.step-num {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--card-bg);
  border: 0.5px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--gold);
  margin: 0 auto 1.25rem;
}
.step h4 { font-size: 16px; font-weight: 500; color: var(--ink); margin-bottom: 0.4rem; }
.step p { font-size: 14px; color: var(--ink2); font-weight: 300; line-height: 1.6; }
@media (max-width: 900px) {
  .steps { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .how-it-works { padding: 4rem 1.5rem; }
  .steps { grid-template-columns: 1fr; }
}
</style>
