<template>
  <main>
    <section class="ct-section">
      <div class="container">
        <div class="ct-header">
          <p class="section-label">{{ $t('contactPage.label') }}</p>
          <h1 class="section-heading ct-heading">{{ $t('contactPage.heading') }}</h1>
        </div>
        <div class="ct-inner">

          <!-- Left: Business Info -->
          <div class="ct-info">
            <div class="ct-card">
              <div class="ct-detail">
                <div class="ct-icon"><i class="fa-solid fa-location-dot"></i></div>
                <div>
                  <p class="ct-detail-label">{{ $t('contactPage.addressLabel') }}</p>
                  <p class="ct-detail-value">Moto Akasaka Building 9F</p>
                  <p class="ct-detail-value">Moto Akasaka 1-7-10, Minato Ku</p>
                  <p class="ct-detail-value">Tokyo, Japan</p>
                </div>
              </div>
              <div class="ct-divider"></div>
              <div class="ct-detail">
                <div class="ct-icon"><i class="fa-solid fa-envelope"></i></div>
                <div>
                  <p class="ct-detail-label">{{ $t('contactPage.emailLabel') }}</p>
                  <a href="mailto:contact@kenja.com" class="ct-detail-link">contact@kenja.com</a>
                </div>
              </div>
              <div class="ct-divider"></div>
              <div class="ct-detail">
                <div class="ct-icon"><i class="fa-solid fa-phone"></i></div>
                <div>
                  <p class="ct-detail-label">{{ $t('contactPage.phoneLabel') }}</p>
                  <a href="tel:+81354136267" class="ct-detail-link">(+81) (0)3-5413-6267</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Contact Form -->
          <form class="ct-form" @submit.prevent>
            <div class="ct-row">
              <div class="ct-field">
                <label>{{ $t('contactPage.name') }}</label>
                <input type="text" :placeholder="$t('contactPage.name')" />
              </div>
              <div class="ct-field">
                <label>{{ $t('contactPage.company') }}</label>
                <input type="text" :placeholder="$t('contactPage.company')" />
              </div>
            </div>
            <div class="ct-row">
              <div class="ct-field">
                <label>{{ $t('contactPage.email') }}</label>
                <input type="email" :placeholder="$t('contactPage.email')" />
              </div>
              <div class="ct-field">
                <label>{{ $t('contactPage.phone') }}</label>
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
                  <input type="tel" :placeholder="$t('contactPage.phonePlaceholder')" class="ct-phone-input" />
                </div>
              </div>
            </div>
            <div class="ct-field">
              <label>{{ $t('contactPage.subject') }}</label>
              <input type="text" :placeholder="$t('contactPage.subject')" />
            </div>
            <div class="ct-field">
              <label>{{ $t('contactPage.message') }}</label>
              <textarea rows="5" :placeholder="$t('contactPage.messagePlaceholder')"></textarea>
            </div>
            <button type="submit" class="btn-primary">{{ $t('contactPage.send') }}</button>
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
  { code: 'AF', name: 'Afghanistan', dial: '+93' },
  { code: 'AL', name: 'Albania', dial: '+355' },
  { code: 'DZ', name: 'Algeria', dial: '+213' },
  { code: 'AD', name: 'Andorra', dial: '+376' },
  { code: 'AO', name: 'Angola', dial: '+244' },
  { code: 'AG', name: 'Antigua and Barbuda', dial: '+1-268' },
  { code: 'AR', name: 'Argentina', dial: '+54' },
  { code: 'AM', name: 'Armenia', dial: '+374' },
  { code: 'AT', name: 'Austria', dial: '+43' },
  { code: 'AZ', name: 'Azerbaijan', dial: '+994' },
  { code: 'BS', name: 'Bahamas', dial: '+1-242' },
  { code: 'BH', name: 'Bahrain', dial: '+973' },
  { code: 'BD', name: 'Bangladesh', dial: '+880' },
  { code: 'BB', name: 'Barbados', dial: '+1-246' },
  { code: 'BY', name: 'Belarus', dial: '+375' },
  { code: 'BE', name: 'Belgium', dial: '+32' },
  { code: 'BZ', name: 'Belize', dial: '+501' },
  { code: 'BJ', name: 'Benin', dial: '+229' },
  { code: 'BT', name: 'Bhutan', dial: '+975' },
  { code: 'BO', name: 'Bolivia', dial: '+591' },
  { code: 'BA', name: 'Bosnia and Herzegovina', dial: '+387' },
  { code: 'BW', name: 'Botswana', dial: '+267' },
  { code: 'BR', name: 'Brazil', dial: '+55' },
  { code: 'BN', name: 'Brunei', dial: '+673' },
  { code: 'BG', name: 'Bulgaria', dial: '+359' },
  { code: 'BF', name: 'Burkina Faso', dial: '+226' },
  { code: 'BI', name: 'Burundi', dial: '+257' },
  { code: 'CV', name: 'Cabo Verde', dial: '+238' },
  { code: 'KH', name: 'Cambodia', dial: '+855' },
  { code: 'CM', name: 'Cameroon', dial: '+237' },
  { code: 'CF', name: 'Central African Republic', dial: '+236' },
  { code: 'TD', name: 'Chad', dial: '+235' },
  { code: 'CL', name: 'Chile', dial: '+56' },
  { code: 'CN', name: 'China', dial: '+86' },
  { code: 'CO', name: 'Colombia', dial: '+57' },
  { code: 'KM', name: 'Comoros', dial: '+269' },
  { code: 'CG', name: 'Congo', dial: '+242' },
  { code: 'CR', name: 'Costa Rica', dial: '+506' },
  { code: 'HR', name: 'Croatia', dial: '+385' },
  { code: 'CU', name: 'Cuba', dial: '+53' },
  { code: 'CY', name: 'Cyprus', dial: '+357' },
  { code: 'CZ', name: 'Czech Republic', dial: '+420' },
  { code: 'DK', name: 'Denmark', dial: '+45' },
  { code: 'DJ', name: 'Djibouti', dial: '+253' },
  { code: 'DM', name: 'Dominica', dial: '+1-767' },
  { code: 'DO', name: 'Dominican Republic', dial: '+1-809' },
  { code: 'EC', name: 'Ecuador', dial: '+593' },
  { code: 'EG', name: 'Egypt', dial: '+20' },
  { code: 'SV', name: 'El Salvador', dial: '+503' },
  { code: 'GQ', name: 'Equatorial Guinea', dial: '+240' },
  { code: 'ER', name: 'Eritrea', dial: '+291' },
  { code: 'EE', name: 'Estonia', dial: '+372' },
  { code: 'SZ', name: 'Eswatini', dial: '+268' },
  { code: 'ET', name: 'Ethiopia', dial: '+251' },
  { code: 'FJ', name: 'Fiji', dial: '+679' },
  { code: 'FI', name: 'Finland', dial: '+358' },
  { code: 'FR', name: 'France', dial: '+33' },
  { code: 'GA', name: 'Gabon', dial: '+241' },
  { code: 'GM', name: 'Gambia', dial: '+220' },
  { code: 'GE', name: 'Georgia', dial: '+995' },
  { code: 'DE', name: 'Germany', dial: '+49' },
  { code: 'GH', name: 'Ghana', dial: '+233' },
  { code: 'GR', name: 'Greece', dial: '+30' },
  { code: 'GD', name: 'Grenada', dial: '+1-473' },
  { code: 'GT', name: 'Guatemala', dial: '+502' },
  { code: 'GN', name: 'Guinea', dial: '+224' },
  { code: 'GW', name: 'Guinea-Bissau', dial: '+245' },
  { code: 'GY', name: 'Guyana', dial: '+592' },
  { code: 'HT', name: 'Haiti', dial: '+509' },
  { code: 'HN', name: 'Honduras', dial: '+504' },
  { code: 'HK', name: 'Hong Kong', dial: '+852' },
  { code: 'HU', name: 'Hungary', dial: '+36' },
  { code: 'IS', name: 'Iceland', dial: '+354' },
  { code: 'IN', name: 'India', dial: '+91' },
  { code: 'ID', name: 'Indonesia', dial: '+62' },
  { code: 'IR', name: 'Iran', dial: '+98' },
  { code: 'IQ', name: 'Iraq', dial: '+964' },
  { code: 'IE', name: 'Ireland', dial: '+353' },
  { code: 'IL', name: 'Israel', dial: '+972' },
  { code: 'IT', name: 'Italy', dial: '+39' },
  { code: 'JM', name: 'Jamaica', dial: '+1-876' },
  { code: 'JO', name: 'Jordan', dial: '+962' },
  { code: 'KZ', name: 'Kazakhstan', dial: '+7' },
  { code: 'KE', name: 'Kenya', dial: '+254' },
  { code: 'KI', name: 'Kiribati', dial: '+686' },
  { code: 'KW', name: 'Kuwait', dial: '+965' },
  { code: 'KG', name: 'Kyrgyzstan', dial: '+996' },
  { code: 'LA', name: 'Laos', dial: '+856' },
  { code: 'LV', name: 'Latvia', dial: '+371' },
  { code: 'LB', name: 'Lebanon', dial: '+961' },
  { code: 'LS', name: 'Lesotho', dial: '+266' },
  { code: 'LR', name: 'Liberia', dial: '+231' },
  { code: 'LY', name: 'Libya', dial: '+218' },
  { code: 'LI', name: 'Liechtenstein', dial: '+423' },
  { code: 'LT', name: 'Lithuania', dial: '+370' },
  { code: 'LU', name: 'Luxembourg', dial: '+352' },
  { code: 'MG', name: 'Madagascar', dial: '+261' },
  { code: 'MW', name: 'Malawi', dial: '+265' },
  { code: 'MY', name: 'Malaysia', dial: '+60' },
  { code: 'MV', name: 'Maldives', dial: '+960' },
  { code: 'ML', name: 'Mali', dial: '+223' },
  { code: 'MT', name: 'Malta', dial: '+356' },
  { code: 'MH', name: 'Marshall Islands', dial: '+692' },
  { code: 'MR', name: 'Mauritania', dial: '+222' },
  { code: 'MU', name: 'Mauritius', dial: '+230' },
  { code: 'MX', name: 'Mexico', dial: '+52' },
  { code: 'FM', name: 'Micronesia', dial: '+691' },
  { code: 'MD', name: 'Moldova', dial: '+373' },
  { code: 'MC', name: 'Monaco', dial: '+377' },
  { code: 'MN', name: 'Mongolia', dial: '+976' },
  { code: 'ME', name: 'Montenegro', dial: '+382' },
  { code: 'MA', name: 'Morocco', dial: '+212' },
  { code: 'MZ', name: 'Mozambique', dial: '+258' },
  { code: 'MM', name: 'Myanmar', dial: '+95' },
  { code: 'NA', name: 'Namibia', dial: '+264' },
  { code: 'NR', name: 'Nauru', dial: '+674' },
  { code: 'NP', name: 'Nepal', dial: '+977' },
  { code: 'NL', name: 'Netherlands', dial: '+31' },
  { code: 'NZ', name: 'New Zealand', dial: '+64' },
  { code: 'NI', name: 'Nicaragua', dial: '+505' },
  { code: 'NE', name: 'Niger', dial: '+227' },
  { code: 'NG', name: 'Nigeria', dial: '+234' },
  { code: 'NO', name: 'Norway', dial: '+47' },
  { code: 'OM', name: 'Oman', dial: '+968' },
  { code: 'PK', name: 'Pakistan', dial: '+92' },
  { code: 'PW', name: 'Palau', dial: '+680' },
  { code: 'PA', name: 'Panama', dial: '+507' },
  { code: 'PG', name: 'Papua New Guinea', dial: '+675' },
  { code: 'PY', name: 'Paraguay', dial: '+595' },
  { code: 'PE', name: 'Peru', dial: '+51' },
  { code: 'PH', name: 'Philippines', dial: '+63' },
  { code: 'PL', name: 'Poland', dial: '+48' },
  { code: 'PT', name: 'Portugal', dial: '+351' },
  { code: 'QA', name: 'Qatar', dial: '+974' },
  { code: 'RO', name: 'Romania', dial: '+40' },
  { code: 'RU', name: 'Russia', dial: '+7' },
  { code: 'RW', name: 'Rwanda', dial: '+250' },
  { code: 'KN', name: 'Saint Kitts and Nevis', dial: '+1-869' },
  { code: 'LC', name: 'Saint Lucia', dial: '+1-758' },
  { code: 'VC', name: 'Saint Vincent and the Grenadines', dial: '+1-784' },
  { code: 'WS', name: 'Samoa', dial: '+685' },
  { code: 'SM', name: 'San Marino', dial: '+378' },
  { code: 'ST', name: 'Sao Tome and Principe', dial: '+239' },
  { code: 'SA', name: 'Saudi Arabia', dial: '+966' },
  { code: 'SN', name: 'Senegal', dial: '+221' },
  { code: 'RS', name: 'Serbia', dial: '+381' },
  { code: 'SC', name: 'Seychelles', dial: '+248' },
  { code: 'SL', name: 'Sierra Leone', dial: '+232' },
  { code: 'SG', name: 'Singapore', dial: '+65' },
  { code: 'SK', name: 'Slovakia', dial: '+421' },
  { code: 'SI', name: 'Slovenia', dial: '+386' },
  { code: 'SB', name: 'Solomon Islands', dial: '+677' },
  { code: 'SO', name: 'Somalia', dial: '+252' },
  { code: 'ZA', name: 'South Africa', dial: '+27' },
  { code: 'KR', name: 'South Korea', dial: '+82' },
  { code: 'SS', name: 'South Sudan', dial: '+211' },
  { code: 'ES', name: 'Spain', dial: '+34' },
  { code: 'LK', name: 'Sri Lanka', dial: '+94' },
  { code: 'SD', name: 'Sudan', dial: '+249' },
  { code: 'SR', name: 'Suriname', dial: '+597' },
  { code: 'SE', name: 'Sweden', dial: '+46' },
  { code: 'CH', name: 'Switzerland', dial: '+41' },
  { code: 'SY', name: 'Syria', dial: '+963' },
  { code: 'TW', name: 'Taiwan', dial: '+886' },
  { code: 'TJ', name: 'Tajikistan', dial: '+992' },
  { code: 'TZ', name: 'Tanzania', dial: '+255' },
  { code: 'TH', name: 'Thailand', dial: '+66' },
  { code: 'TL', name: 'Timor-Leste', dial: '+670' },
  { code: 'TG', name: 'Togo', dial: '+228' },
  { code: 'TO', name: 'Tonga', dial: '+676' },
  { code: 'TT', name: 'Trinidad and Tobago', dial: '+1-868' },
  { code: 'TN', name: 'Tunisia', dial: '+216' },
  { code: 'TR', name: 'Turkey', dial: '+90' },
  { code: 'TM', name: 'Turkmenistan', dial: '+993' },
  { code: 'TV', name: 'Tuvalu', dial: '+688' },
  { code: 'UG', name: 'Uganda', dial: '+256' },
  { code: 'UA', name: 'Ukraine', dial: '+380' },
  { code: 'AE', name: 'UAE', dial: '+971' },
  { code: 'UY', name: 'Uruguay', dial: '+598' },
  { code: 'UZ', name: 'Uzbekistan', dial: '+998' },
  { code: 'VU', name: 'Vanuatu', dial: '+678' },
  { code: 'VE', name: 'Venezuela', dial: '+58' },
  { code: 'VN', name: 'Vietnam', dial: '+84' },
  { code: 'YE', name: 'Yemen', dial: '+967' },
  { code: 'ZM', name: 'Zambia', dial: '+260' },
  { code: 'ZW', name: 'Zimbabwe', dial: '+263' },
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
