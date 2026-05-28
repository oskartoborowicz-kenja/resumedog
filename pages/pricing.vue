<template>
  <main>
    <section class="pricing-hero">
      <div class="hero-eyebrow">Simple pricing</div>
      <h1>Pay for what you <em>need</em></h1>
      <p class="hero-sub">No hidden fees. Cancel anytime. Start free — no credit card required.</p>
      <div class="toggle-wrap">
        <span :class="{ active: !annual }" @click="annual = false">Monthly</span>
        <div class="toggle" :class="{ on: annual }" @click="annual = !annual">
          <div class="toggle-knob" />
        </div>
        <span :class="{ active: annual }" @click="annual = true">Annual <span class="save-badge">Save 30%</span></span>
      </div>
    </section>

    <section class="plans">
      <div
        v-for="plan in plans"
        :key="plan.name"
        class="plan-card"
        :class="{ featured: plan.featured }"
      >
        <div v-if="plan.featured" class="plan-badge">Most popular</div>
        <div class="plan-name">{{ plan.name }}</div>
        <div class="plan-price">
          <span class="currency">$</span>
          <span class="amount">{{ annual ? plan.annualPrice : plan.monthlyPrice }}</span>
          <span class="period">/mo</span>
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
      <div class="section-label">FAQs</div>
      <h2 class="section-heading">Common <em>questions</em></h2>
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
  title: 'Pricing — ResumeAI',
  description: 'Simple, transparent pricing. Start free, upgrade when you need more.'
})

const annual = ref(false)

const plans = [
  {
    name: 'Free',
    monthlyPrice: '0',
    annualPrice: '0',
    description: 'Perfect for trying out ResumeAI with one resume.',
    featured: false,
    cta: { label: 'Get started free', href: '/signup' },
    features: [
      '1 resume conversion/month',
      'PDF & Word export',
      'Basic AI rewrite',
      'ATS score check',
      '3 templates'
    ]
  },
  {
    name: 'Pro',
    monthlyPrice: '12',
    annualPrice: '8',
    description: 'For active job seekers who need unlimited power.',
    featured: true,
    cta: { label: 'Start Pro free', href: '/signup?plan=pro' },
    features: [
      'Unlimited conversions',
      'All 12+ export formats',
      'Advanced AI rewrite',
      'Job description matching',
      'ATS score & suggestions',
      '20+ templates',
      'Multilingual support',
      'Priority processing'
    ]
  },
  {
    name: 'Team',
    monthlyPrice: '39',
    annualPrice: '27',
    description: 'For recruiters and career coaches managing multiple clients.',
    featured: false,
    cta: { label: 'Contact sales', href: '/contact' },
    features: [
      'Everything in Pro',
      'Up to 10 seats',
      'Team dashboard',
      'Bulk resume processing',
      'API access',
      'Custom templates',
      'Dedicated support'
    ]
  }
]

const faqs = [
  { q: 'Can I cancel anytime?', a: 'Yes — no contracts, no commitments. Cancel with one click from your account settings.' },
  { q: 'What happens when I hit my free limit?', a: 'You can upgrade to Pro or wait until the next month. We never delete your resumes.' },
  { q: 'Do you store my resume data?', a: 'Resumes are processed and stored encrypted. You can delete your data at any time from your account.' },
  { q: 'Is there a student discount?', a: 'Yes — students get 50% off Pro with a valid .edu email. Reach out to our support team.' },
  { q: 'Can I use the API?', a: 'API access is available on the Team plan. Contact us for custom volume pricing.' },
  { q: 'What file formats can I upload?', a: 'We accept PDF, Word (.docx), plain text, and LinkedIn profile exports.' }
]
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
