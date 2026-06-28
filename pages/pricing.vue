<template>
  <main>

    <!-- Section 1: Hero -->
    <section class="pr-hero">
      <div class="container">
        <p class="section-label">{{ $t('pricing.label') }}</p>
        <h1 class="section-heading pr-h1">{{ $t('pricing.heading') }}</h1>
        <p class="pr-body">{{ $t('pricing.body') }}</p>
      </div>
    </section>

    <!-- Section 2: Plan Cards -->
    <section class="pr-plans">
      <div class="container">
        <div class="pr-grid">
          <div
            v-for="plan in plans"
            :key="plan.id"
            class="pr-card"
            :class="{ 'pr-card--featured': plan.featured }"
          >
            <div class="pr-card-top">
              <p class="pr-plan-name">{{ plan.name }}</p>
              <p class="pr-price">{{ $t('pricing.tbd') }}</p>
              <p class="pr-plan-desc">{{ plan.description }}</p>
            </div>
            <NuxtLink to="/contact" :class="plan.featured ? 'btn-primary pr-cta' : 'btn-outline pr-cta'">
              {{ plan.cta }}
            </NuxtLink>
            <ul class="pr-features">
              <li v-for="feat in plan.features" :key="feat">
                <i class="fa-solid fa-check pr-check" /> {{ feat }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Comparison Table -->
    <section class="pr-compare">
      <div class="container">
        <h2 class="section-heading pr-compare-heading">{{ $t('pricing.compare') }}</h2>
        <div class="pr-table-wrap">
          <table class="pr-table">
            <thead>
              <tr>
                <th class="pr-th-feature"></th>
                <th v-for="plan in plans" :key="plan.id" :class="{ 'pr-th-featured': plan.featured }">
                  {{ plan.name }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in compareRows" :key="row.label">
                <td class="pr-row-label">{{ row.label }}</td>
                <td v-for="(val, i) in row.values" :key="i" :class="{ 'pr-td-featured': plans[i].featured }">
                  <span v-if="val === true" class="pr-check-icon"><i class="fa-solid fa-check"></i></span>
                  <span v-else-if="val === false" class="pr-dash">-</span>
                  <span v-else class="pr-cell-text">{{ val }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Section 4: CTA -->
    <section class="pr-cta-section">
      <div class="container">
        <p class="section-label">{{ $t('pricing.cta.label') }}</p>
        <h2 class="section-heading pr-cta-heading">{{ $t('pricing.cta.heading') }}</h2>
        <p class="pr-body pr-cta-body">{{ $t('pricing.cta.body') }}</p>
        <NuxtLink to="/contact" class="btn-primary">{{ $t('pricing.cta.cta') }}</NuxtLink>
      </div>
    </section>

  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Pricing - ResumeDOG',
  description: 'Choose the ResumeDOG plan that fits your team. Resume formatting, translation, and anonymization for recruitment agencies.'
})

const { t, tm, rt } = useI18n()

const planIds = ['trial', 'starter', 'professional', 'team', 'enterprise']

const plans = computed(() =>
  planIds.map((id, i) => ({
    id,
    name: t(`pricing.plans.${id}.name`),
    description: t(`pricing.plans.${id}.description`),
    cta: t(`pricing.plans.${id}.cta`),
    features: tm(`pricing.plans.${id}.features`).map(f => rt(f)),
    featured: id === 'professional',
  }))
)

const compareRows = computed(() => {
  const lim = t('pricing.compareCell.limited')
  const tbd = t('pricing.compareCell.tbd')
  const unl = t('pricing.compareCell.unlimited')
  const rowValues = [
    [lim, tbd, unl, unl, unl],
    [false, true, true, true, true],
    [false, true, true, true, true],
    [false, false, true, true, true],
    [true, true, true, true, true],
    [false, false, false, true, true],
    [false, false, false, false, true],
    [false, false, false, false, true],
  ]
  return tm('pricing.compareLabels').map((label, i) => ({
    label: rt(label),
    values: rowValues[i],
  }))
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ── Hero ── */
.pr-hero {
  padding: 5rem 0;
  background: var(--cream);
}
.pr-h1 {
  max-width: 680px;
  margin-bottom: 1.25rem;
}
.pr-body {
  font-size: 17px;
  color: var(--ink2);
  line-height: 1.8;
  max-width: 560px;
}

/* ── Plan Cards ── */
.pr-plans {
  padding: 5rem 0;
  background: var(--cream2);
}
.pr-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
.pr-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform .25s ease, box-shadow .25s ease;
}
.pr-card:hover {
  transform: translateY(-6px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0,0,0,.15);
  z-index: 2;
}
.pr-card--featured {
  border-color: var(--ink);
  border-width: 2px;
}
.pr-card--featured:hover {
  transform: translateY(-6px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0,0,0,.15);
  z-index: 2;
}
.pr-card-top { flex: 1; }
.pr-plan-name {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink2);
  margin-bottom: 0.6rem;
}
.pr-price {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 500;
  color: var(--ink);
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}
.pr-plan-desc {
  font-size: 13px;
  color: var(--ink2);
  line-height: 1.55;
}
.pr-cta {
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.65rem 1rem;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
}
.btn-outline {
  border: 1px solid var(--border);
  color: var(--ink);
  transition: border-color 0.2s, background 0.2s;
}
.btn-outline:hover { border-color: var(--ink); background: var(--cream2); }
.btn-primary {
  background: var(--ink);
  color: var(--cream);
  transition: background 0.2s;
}
.btn-primary:hover { background: var(--teal); }
.pr-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-top: 1px solid var(--border);
  padding-top: 1rem;
}
.pr-features li {
  font-size: 12px;
  color: var(--ink2);
  display: flex;
  align-items: flex-start;
  gap: 7px;
  line-height: 1.4;
}
.pr-check {
  color: var(--gold);
  font-size: 11px;
  flex-shrink: 0;
  margin-top: 2px;
}

/* ── Comparison Table ── */
.pr-compare {
  padding: 5rem 0;
  background: var(--cream);
}
.pr-compare-heading {
  margin-bottom: 2.5rem;
}
.pr-table-wrap {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 16px;
}
.pr-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}
.pr-table thead tr {
  border-bottom: 1px solid var(--border);
}
.pr-table th {
  padding: 1rem 1.25rem;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink2);
  background: var(--card-bg);
}
.pr-th-feature {
  text-align: left;
  width: 220px;
}
.pr-th-featured {
  color: var(--gold);
  background: var(--cream);
}
.pr-table tbody tr {
  border-bottom: 1px solid var(--border);
}
.pr-table tbody tr:last-child { border-bottom: none; }
.pr-table tbody tr:hover { background: var(--cream2); }
.pr-table td {
  padding: 0.85rem 1.25rem;
  text-align: center;
  background: var(--card-bg);
  color: var(--ink);
}
.pr-td-featured {
  background: var(--cream);
}
.pr-row-label {
  text-align: left;
  font-size: 14px;
  color: var(--ink);
  font-weight: 400;
}
.pr-check-icon { color: var(--gold); font-size: 14px; }
.pr-dash { color: var(--ink2); opacity: 0.4; font-size: 16px; }
.pr-cell-text { font-size: 13px; color: var(--ink2); }

/* ── CTA ── */
.pr-cta-section {
  padding: 5rem 0;
  background: var(--cream2);
}
.pr-cta-heading { margin-bottom: 1rem; }
.pr-cta-body { margin-bottom: 2rem; }
.pr-cta-section .btn-primary {
  display: inline-flex;
  padding: 0.9rem 2rem;
  border-radius: 100px;
  font-size: 15px;
  font-weight: 500;
  background: var(--ink);
  color: var(--cream);
  transition: background 0.2s;
}
.pr-cta-section .btn-primary:hover { background: var(--teal); }

/* ── Responsive ── */
@media (max-width: 1100px) {
  .pr-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 700px) {
  .pr-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .pr-grid { grid-template-columns: 1fr; }
  .container { padding: 0 1.25rem; }
  .pr-hero,
  .pr-plans,
  .pr-compare,
  .pr-cta-section { padding: 3rem 0; }
}
</style>
