<template>
  <main>
    <section class="pricing-hero">
      <div class="hero-eyebrow">{{ $t('pricing.eyebrow') }}</div>
      <h1>{{ $t('pricing.heading') }} <em>{{ $t('pricing.headingEm') }}</em></h1>
      <p class="hero-sub">{{ $t('pricing.sub') }}</p>
      <div class="toggle-wrap">
        <span :class="{ active: !annual }" @click="annual = false">{{ $t('pricing.monthly') }}</span>
        <div class="toggle" :class="{ on: annual }" @click="annual = !annual">
          <div class="toggle-knob" />
        </div>
        <span :class="{ active: annual }" @click="annual = true">{{ $t('pricing.annual') }} <span class="save-badge">{{ $t('pricing.saveBadge') }}</span></span>
      </div>
    </section>

    <section class="plans">
      <div
        v-for="plan in plans"
        :key="plan.id"
        class="plan-card"
        :class="{ featured: plan.featured }"
      >
        <div v-if="plan.featured" class="plan-badge">{{ $t('pricing.mostPopular') }}</div>
        <div class="plan-name">{{ plan.name }}</div>
        <div class="plan-price">
          <span class="currency">$</span>
          <span class="amount">{{ annual ? plan.annualPrice : plan.monthlyPrice }}</span>
          <span class="period">{{ $t('pricing.period') }}</span>
        </div>
        <p class="plan-desc">{{ plan.description }}</p>
        <NuxtLink :to="plan.cta.href" :class="plan.featured ? 'btn-primary' : 'btn-outline'">
          {{ plan.cta.label }}
        </NuxtLink>
        <ul class="plan-features">
          <li v-for="feat in plan.features" :key="feat">
            <i class="fa-regular fa-check" /> {{ feat }}
          </li>
        </ul>
      </div>
    </section>

    <section class="faq">
      <div class="section-label">{{ $t('pricing.faqLabel') }}</div>
      <h2 class="section-heading">{{ $t('pricing.faqHeading') }} <em>{{ $t('pricing.faqHeadingEm') }}</em></h2>
      <div class="faq-grid">
        <div v-for="item in faqs" :key="item.q" class="faq-item">
          <h4>{{ item.q }}</h4>
          <p>{{ item.a }}</p>
        </div>
      </div>
    </section>

    <CtaSection />
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Pricing — ResumeDOG',
  description: 'Simple, transparent pricing. Start free, upgrade when you need more.'
})

const { t, tm, rt } = useI18n()
const annual = ref(false)

const plans = computed(() => [
  {
    id: 'free',
    name: t('pricing.plans.free.name'),
    monthlyPrice: '0',
    annualPrice: '0',
    description: t('pricing.plans.free.description'),
    featured: false,
    cta: { label: t('pricing.plans.free.cta'), href: '/signup' },
    features: tm('pricing.plans.free.features').map(f => rt(f))
  },
  {
    id: 'pro',
    name: t('pricing.plans.pro.name'),
    monthlyPrice: '12',
    annualPrice: '8',
    description: t('pricing.plans.pro.description'),
    featured: true,
    cta: { label: t('pricing.plans.pro.cta'), href: '/signup?plan=pro' },
    features: tm('pricing.plans.pro.features').map(f => rt(f))
  },
  {
    id: 'team',
    name: t('pricing.plans.team.name'),
    monthlyPrice: '39',
    annualPrice: '27',
    description: t('pricing.plans.team.description'),
    featured: false,
    cta: { label: t('pricing.plans.team.cta'), href: '/contact' },
    features: tm('pricing.plans.team.features').map(f => rt(f))
  }
])

const faqs = computed(() =>
  tm('pricing.faqs').map(faq => ({ q: rt(faq.q), a: rt(faq.a) }))
)
</script>

<style scoped>
.pricing-hero {
  text-align: center;
  padding: 5rem 3rem 3rem;
  max-width: 700px;
  margin: 0 auto;
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
h1 {
  font-family: var(--font-display);
  font-size: 3.5rem;
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 400;
  margin-bottom: 1rem;
}
h1 em { color: var(--gold); font-style: italic; }
.hero-sub { font-size: 17px; color: var(--ink2); font-weight: 300; margin-bottom: 2rem; }

.toggle-wrap {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: var(--ink2);
  cursor: pointer;
}
.toggle-wrap span.active { color: var(--ink); font-weight: 500; }
.toggle {
  width: 44px;
  height: 24px;
  border-radius: 100px;
  background: var(--cream2);
  border: 0.5px solid var(--border);
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
}
.toggle.on { background: var(--teal); border-color: var(--teal); }
.toggle-knob {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: transform 0.2s;
}
.toggle.on .toggle-knob { transform: translateX(20px); }
.save-badge {
  background: var(--gold2);
  color: var(--ink);
  font-size: 11px;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-weight: 500;
  margin-left: 4px;
}

.plans {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1100px;
  margin: 3rem auto 5rem;
  padding: 0 3rem;
}
.plan-card {
  background: var(--card-bg);
  border: 0.5px solid var(--border);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.plan-card:hover {
  transform: scale(1.03);
  box-shadow: 0 12px 40px rgba(0,0,0,0.12);
}
.plan-card.featured {
  border: 2px solid var(--ink);
}
.plan-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--ink);
  color: var(--cream);
  font-size: 11px;
  font-weight: 500;
  padding: 0.25rem 0.9rem;
  border-radius: 100px;
  white-space: nowrap;
}
.plan-name { font-size: 14px; font-weight: 500; color: var(--ink2); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.08em; }
.plan-price { display: flex; align-items: baseline; gap: 2px; margin-bottom: 0.75rem; }
.currency { font-size: 1.2rem; color: var(--ink2); font-weight: 300; margin-top: 6px; }
.amount { font-family: var(--font-display); font-size: 3.5rem; color: var(--ink); letter-spacing: -0.03em; line-height: 1; }
.period { font-size: 14px; color: var(--ink2); font-weight: 300; margin-left: 2px; }
.plan-desc { font-size: 14px; color: var(--ink2); font-weight: 300; margin-bottom: 1.5rem; line-height: 1.5; }

.btn-outline {
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 0.5px solid var(--border);
  color: var(--ink);
  padding: 0.75rem;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 500;
  transition: border-color 0.2s, background 0.2s;
  margin-bottom: 1.5rem;
}
.btn-outline:hover { border-color: var(--ink); background: var(--cream2); }
.btn-primary {
  display: inline-block;
  width: 100%;
  text-align: center;
  background: var(--ink);
  color: var(--cream);
  padding: 0.75rem;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s;
  margin-bottom: 1.5rem;
}
.btn-primary:hover { background: var(--teal); }

.plan-features { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
.plan-features li { font-size: 14px; color: var(--ink2); display: flex; align-items: center; gap: 8px; font-weight: 300; }
.plan-features li i { color: var(--teal); font-size: 13px; flex-shrink: 0; }

.faq {
  background: var(--cream2);
  padding: 5rem 3rem;
}
.faq-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 900px;
  margin-top: 3rem;
}
.faq-item h4 { font-size: 15px; font-weight: 500; color: var(--ink); margin-bottom: 0.4rem; }
.faq-item p { font-size: 14px; color: var(--ink2); font-weight: 300; line-height: 1.6; }

@media (max-width: 900px) {
  .plans { grid-template-columns: 1fr; padding: 0 1.5rem; }
  .faq-grid { grid-template-columns: 1fr; }
  h1 { font-size: 2.5rem; }
}
</style>
