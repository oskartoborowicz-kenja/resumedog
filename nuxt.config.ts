export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  nitro: {
    prerender: {
      routes: [
        '/', '/about', '/services', '/pricing', '/blog', '/contact',
        '/privacy', '/terms', '/eula',
        '/login', '/signup', '/forgot-password',
        '/blog/ai-recruiting-what-firms-need-to-know-in-2026',
        '/blog/ai-trends-shaping-recruiting-in-2026',
        '/blog/how-ai-can-automate-resume-formatting-and-processing',
      ],
      ignore: ['/upload'],
      crawlLinks: false,
      failOnError: false
    }
  },
  compatibilityDate: '2025-05-29',
  app: {
    baseURL: '/resumedog/',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'ResumeDOG - Your resume, reimagined',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Upload your CV and let AI rewrite, convert, and match it to any job description - in seconds.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/resumedog/favicon.svg' },
{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Inter:wght@300;400;500&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css' }
      ]
    }
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json' },
      { code: 'ja', language: 'ja-JP', file: 'ja.json' }
    ],
    detectBrowserLanguage: false
  },
  css: ['~/assets/css/main.css']
})
