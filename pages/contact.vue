<template>
  <main>
    <section class="ct-section">
      <div class="container">
        <div class="ct-header">
          <p class="section-label">Contact</p>
          <h1 class="section-heading ct-heading">Get in touch</h1>
        </div>
        <div class="ct-inner">

          <!-- Left: Business Info -->
          <div class="ct-info">
            <div class="ct-card">
              <div class="ct-detail">
                <div class="ct-icon"><i class="fa-solid fa-location-dot"></i></div>
                <div>
                  <p class="ct-detail-label">Address</p>
                  <p class="ct-detail-value">Moto Akasaka Building 9F</p>
                  <p class="ct-detail-value">Moto Akasaka 1-7-10, Minato Ku</p>
                  <p class="ct-detail-value">Tokyo, Japan</p>
                </div>
              </div>
              <div class="ct-divider"></div>
              <div class="ct-detail">
                <div class="ct-icon"><i class="fa-solid fa-envelope"></i></div>
                <div>
                  <p class="ct-detail-label">Email</p>
                  <a href="mailto:contact@kenja.com" class="ct-detail-link">contact@kenja.com</a>
                </div>
              </div>
              <div class="ct-divider"></div>
              <div class="ct-detail">
                <div class="ct-icon"><i class="fa-solid fa-phone"></i></div>
                <div>
                  <p class="ct-detail-label">Phone</p>
                  <a href="tel:+81354136267" class="ct-detail-link">(+81) (0)3-5413-6267</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Contact Form -->
          <form class="ct-form" @submit.prevent>
            <div class="ct-row">
              <div class="ct-field">
                <label>Name</label>
                <input type="text" placeholder="Name" />
              </div>
              <div class="ct-field">
                <label>Company</label>
                <input type="text" placeholder="Company" />
              </div>
            </div>
            <div class="ct-row">
              <div class="ct-field">
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div class="ct-field">
                <label>Phone</label>
                <div class="ct-phone-wrap">
                  <div class="ct-dial-wrap" ref="dialWrap">
                    <button type="button" class="ct-dial-btn" @click="dialOpen = !dialOpen">
                      <img v-if="selectedCountry" :src="`https://flagcdn.com/20x15/${selectedCountry.code.toLowerCase()}.png`" :alt="selectedCountry.name" class="ct-flag-img" />
                      <span class="ct-dial-code">{{ selectedCountry?.dial }}</span>
                      <i class="fa-solid fa-chevron-down ct-dial-arrow" :class="{ open: dialOpen }"></i>
                    </button>
                    <ul v-if="dialOpen" class="ct-dial-list">
                      <li
                        v-for="c in countries"
                        :key="c.code"
                        class="ct-dial-item"
                        :class="{ selected: c.code === selectedCountry.code }"
                        @click="selectCountry(c)"
                      >
                        <img :src="`https://flagcdn.com/20x15/${c.code.toLowerCase()}.png`" :alt="c.name" class="ct-flag-img" />
                        <span class="ct-dial-name">{{ c.name }}</span>
                        <span class="ct-dial-num">{{ c.dial }}</span>
                      </li>
                    </ul>
                  </div>
                  <input type="tel" placeholder="Phone number" class="ct-phone-input" />
                </div>
              </div>
            </div>
            <div class="ct-field">
              <label>Subject</label>
              <input type="text" placeholder="Subject" />
            </div>
            <div class="ct-field">
              <label>Message</label>
              <textarea rows="5" placeholder="How can we help?"></textarea>
            </div>
            <button type="submit" class="btn-primary">Send Message</button>
          </form>

        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Contact - ResumeDOG',
  description: 'Get in touch with the ResumeDOG team. Contact us by email, phone, or send a message directly.'
})

const dialOpen = ref(false)
const dialWrap = ref(null)

const countries = [
  { code: 'JP', name: 'Japan', dial: '+81' },
  { code: 'US', name: 'United States', dial: '+1' },
  { code: 'GB', name: 'United Kingdom', dial: '+44' },
  { code: 'AU', name: 'Australia', dial: '+61' },
  { code: 'CA', name: 'Canada', dial: '+1' },
  { code: 'CN', name: 'China', dial: '+86' },
  { code: 'KR', name: 'South Korea', dial: '+82' },
  { code: 'SG', name: 'Singapore', dial: '+65' },
  { code: 'HK', name: 'Hong Kong', dial: '+852' },
  { code: 'TW', name: 'Taiwan', dial: '+886' },
  { code: 'IN', name: 'India', dial: '+91' },
  { code: 'PH', name: 'Philippines', dial: '+63' },
  { code: 'TH', name: 'Thailand', dial: '+66' },
  { code: 'VN', name: 'Vietnam', dial: '+84' },
  { code: 'MY', name: 'Malaysia', dial: '+60' },
  { code: 'ID', name: 'Indonesia', dial: '+62' },
  { code: 'DE', name: 'Germany', dial: '+49' },
  { code: 'FR', name: 'France', dial: '+33' },
  { code: 'NL', name: 'Netherlands', dial: '+31' },
  { code: 'SE', name: 'Sweden', dial: '+46' },
  { code: 'NO', name: 'Norway', dial: '+47' },
  { code: 'DK', name: 'Denmark', dial: '+45' },
  { code: 'CH', name: 'Switzerland', dial: '+41' },
  { code: 'NZ', name: 'New Zealand', dial: '+64' },
  { code: 'ZA', name: 'South Africa', dial: '+27' },
  { code: 'BR', name: 'Brazil', dial: '+55' },
  { code: 'MX', name: 'Mexico', dial: '+52' },
  { code: 'AE', name: 'UAE', dial: '+971' },
]

const selectedCountry = ref(countries[0])

function selectCountry(c) {
  selectedCountry.value = c
  dialOpen.value = false
}


onMounted(() => {
  document.addEventListener('click', (e) => {
    if (dialWrap.value && !dialWrap.value.contains(e.target)) {
      dialOpen.value = false
    }
  })
})
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.ct-section {
  padding: 5rem 0;
  background: var(--cream);
}

.ct-inner {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: start;
}

/* ── Left: Info ── */
.ct-header { margin-bottom: 2rem; }
.ct-heading { margin-bottom: 0; }

.ct-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 26.5px;
}

.ct-detail {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.ct-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: var(--cream2);
  color: var(--teal);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  flex-shrink: 0;
}

.ct-detail-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: var(--ink2);
  margin-bottom: 0.3rem;
}

.ct-detail-value {
  font-size: 14px;
  color: var(--ink);
  line-height: 1.6;
}

.ct-detail-link {
  font-size: 14px;
  color: var(--ink);
  transition: color 0.2s;
}
.ct-detail-link:hover { color: var(--gold); }

.ct-divider {
  height: 1px;
  background: var(--border);
  margin: 0 -2rem;
}

/* ── Right: Form ── */
.ct-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ct-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.ct-field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.ct-field label {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink2);
}

.ct-field input,
.ct-field textarea {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.7rem 1rem;
  font-size: 14px;
  font-family: var(--font-body);
  color: var(--ink);
  outline: none;
  transition: border-color 0.2s;
  resize: none;
  width: 100%;
}
.ct-field input:focus,
.ct-field textarea:focus { border-color: var(--gold); }
.ct-field input::placeholder,
.ct-field textarea::placeholder { color: var(--ink2); opacity: 0.5; }

/* ── Phone with dial selector ── */
.ct-phone-wrap {
  display: flex;
  gap: 0;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: visible;
  transition: border-color 0.2s;
}
.ct-phone-wrap:focus-within { border-color: var(--gold); }

.ct-dial-wrap {
  position: relative;
  flex-shrink: 0;
}

.ct-dial-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0.7rem 0.75rem;
  background: transparent;
  border: none;
  border-right: 1px solid var(--border);
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--ink);
  white-space: nowrap;
  height: 100%;
  border-radius: 10px 0 0 10px;
  transition: background 0.15s;
}
.ct-dial-btn:hover { background: var(--cream2); }

.ct-flag-img { width: 20px; height: 15px; border-radius: 2px; object-fit: cover; flex-shrink: 0; }
.ct-dial-code { font-size: 13px; color: var(--ink2); }
.ct-dial-arrow {
  font-size: 10px;
  color: var(--ink2);
  transition: transform 0.2s;
}
.ct-dial-arrow.open { transform: rotate(180deg); }

.ct-dial-list {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: 200;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  width: 220px;
  max-height: 260px;
  overflow-y: auto;
  list-style: none;
  padding: 0.4rem 0;
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
}

.ct-dial-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.55rem 1rem;
  cursor: pointer;
  font-size: 13px;
  color: var(--ink);
  transition: background 0.15s;
}
.ct-dial-item:hover { background: var(--cream2); }
.ct-dial-item.selected { background: var(--cream); }

.ct-dial-name {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ct-dial-num {
  font-size: 12px;
  color: var(--ink2);
  flex-shrink: 0;
}

.ct-phone-input {
  flex: 1;
  background: transparent !important;
  border: none !important;
  border-radius: 0 10px 10px 0 !important;
  outline: none;
  padding: 0.7rem 1rem;
  font-size: 14px;
  font-family: var(--font-body);
  color: var(--ink);
  min-width: 0;
}
.ct-phone-input::placeholder { color: var(--ink2); opacity: 0.5; }


.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--ink);
  color: var(--cream);
  padding: 0.8rem 2rem;
  border-radius: 100px;
  font-size: 15px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  align-self: flex-start;
}
.btn-primary:hover { background: var(--teal); }

/* ── Responsive ── */
@media (max-width: 900px) {
  .ct-inner { grid-template-columns: 1fr; gap: 2.5rem; }
}
@media (max-width: 500px) {
  .ct-row { grid-template-columns: 1fr; }
}
</style>
