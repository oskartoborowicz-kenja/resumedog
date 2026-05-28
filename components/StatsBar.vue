<template>
  <div class="stats-bar">
    <div v-for="stat in stats" :key="stat.label" class="stat">
      <div class="stat-num">{{ stat.value }}</div>
      <div class="stat-label">{{ stat.label }}</div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { value: '3×', label: 'more interview callbacks' },
  { value: '40K+', label: 'resumes processed' },
  { value: '30s', label: 'average conversion time' },
  { value: '98%', label: 'ATS pass rate' }
]
</script>

<style scoped>
.stats-bar {
  background: var(--ink);
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: center;
  gap: 5rem;
  flex-wrap: wrap;
}
.stat { text-align: center; }
.stat-num {
  font-family: var(--font-display);
  font-size: 2.2rem;
  color: var(--gold2);
  letter-spacing: -0.03em;
}
.stat-label {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  font-weight: 300;
}
@media (max-width: 600px) {
  .stats-bar { gap: 2rem; padding: 1.5rem; }
}
</style>
