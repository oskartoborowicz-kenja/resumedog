<template>
  <section class="formats">
    <div class="section-label">File formats</div>
    <h2 class="section-heading">Every format, <em>covered</em></h2>
    <p class="section-sub">Input or output - we support every format recruiters and ATS systems expect.</p>
    <div class="formats-grid">
      <div v-for="fmt in formats" :key="fmt.label" class="fmt-pill">
        <span class="fmt-icon">{{ fmt.icon }}</span>
        {{ fmt.label }}
      </div>
    </div>
  </section>
</template>

<script setup>
const formats = [
  { icon: '📄', label: 'PDF' },
  { icon: '📝', label: 'Word (.docx)' },
  { icon: '📋', label: 'Plain text' },
  { icon: '🌐', label: 'HTML' },
  { icon: '📊', label: 'LinkedIn import' },
  { icon: '⚙️', label: 'JSON Resume' },
  { icon: '📑', label: 'LaTeX' },
  { icon: '🔗', label: 'Shareable link' }
]
</script>

<style scoped>
.formats {
  padding: 6rem 3rem;
  max-width: 1200px;
  margin: 0 auto;
}
.formats-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}
.fmt-pill {
  background: var(--card-bg);
  border: 0.5px solid var(--border);
  border-radius: 100px;
  padding: 0.6rem 1.25rem;
  font-size: 14px;
  color: var(--ink2);
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: border-color 0.2s, color 0.2s;
  cursor: default;
}
.fmt-pill:hover { border-color: var(--gold); color: var(--ink); }
.fmt-icon { font-size: 16px; }
@media (max-width: 600px) {
  .formats { padding: 4rem 1.5rem; }
}
</style>
