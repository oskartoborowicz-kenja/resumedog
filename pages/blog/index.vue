<template>
  <main>
    <section class="blog-hero">
      <div class="hero-eyebrow">{{ $t('blog.eyebrow') }}</div>
      <h1>{{ $t('blog.heading') }} <em>{{ $t('blog.headingEm') }}</em></h1>
      <p class="hero-sub">{{ $t('blog.sub') }}</p>
    </section>

    <section class="blog-content">
      <div class="featured-post">
        <NuxtLink :to="`/blog/${posts[0].slug}`" class="featured-card">
          <div class="featured-img" :style="{ backgroundImage: `url(${posts[0].image})` }" />
          <div class="featured-body">
            <div class="featured-meta">
              <span class="post-tag">{{ posts[0].tag }}</span>
              <span class="post-date">{{ posts[0].date }}</span>
            </div>
            <h2>{{ posts[0].title }}</h2>
            <p>{{ posts[0].excerpt }}</p>
            <div class="read-more">{{ $t('blog.readArticle') }} <i class="fa-regular fa-arrow-right" /></div>
          </div>
        </NuxtLink>
      </div>

      <div class="posts-grid">
        <NuxtLink
          v-for="post in posts.slice(1)"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="post-card"
        >
          <div class="post-cover" :style="{ backgroundImage: `url(${post.image})` }" />
          <div class="post-body-inner">
            <div class="post-meta">
              <span class="post-tag">{{ post.tag }}</span>
              <span class="post-date">{{ post.date }}</span>
            </div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
            <div class="read-more">{{ $t('blog.readArticle') }} <i class="fa-regular fa-arrow-right" /></div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="newsletter">
      <div class="newsletter-inner">
        <div class="section-label">{{ $t('blog.newsletter.label') }}</div>
        <h2 class="section-heading">{{ $t('blog.newsletter.heading') }} <em>{{ $t('blog.newsletter.headingEm') }}</em></h2>
        <p class="section-sub">{{ $t('blog.newsletter.sub') }}</p>
        <div class="subscribe-form">
          <input v-model="email" type="email" :placeholder="$t('blog.newsletter.placeholder')" />
          <button class="btn-primary" @click="subscribe">{{ $t('blog.newsletter.subscribe') }}</button>
        </div>
        <p v-if="subscribed" class="success-msg">
          <i class="fa-regular fa-check-circle" /> {{ $t('blog.newsletter.success') }}
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Blog - ResumeDOG',
  description: 'Career advice, resume tips, and job search strategies from the ResumeDOG team.'
})

const { tm, rt } = useI18n()
const email = ref('')
const subscribed = ref(false)
const base = useRuntimeConfig().app.baseURL.replace(/\/$/, '')

function subscribe() {
  if (email.value) subscribed.value = true
}

const slugs = ['ai-recruiting-what-firms-need-to-know-in-2026', 'ai-trends-shaping-recruiting-in-2026', 'how-ai-can-automate-resume-formatting-and-processing']

const images = [
  `${base}/images/blog-ai-recruiting.webp`,
  `${base}/images/blog-ai-trends.webp`,
  `${base}/images/blog-resume-auto.jpg`,
]

const posts = computed(() =>
  tm('blog.posts').map((post, i) => ({
    slug: slugs[i],
    image: images[i],
    tag: rt(post.tag),
    date: rt(post.date),
    title: rt(post.title),
    excerpt: rt(post.excerpt)
  }))
)
</script>

<style scoped>
.blog-hero {
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
.hero-sub { font-size: 17px; color: var(--ink2); font-weight: 300; }

.blog-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem;
}

.featured-img {
  width: 100%;
  height: 280px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  margin-bottom: 1.75rem;
}
.featured-body { }
.featured-card {
  display: block;
  background: var(--card-bg);
  border: 0.5px solid var(--border);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: border-color 0.2s, transform 0.2s;
  color: inherit;
}
.featured-card:hover { border-color: var(--gold2); transform: translateY(-2px); }
.featured-card h2 {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin: 0.75rem 0 0.75rem;
  line-height: 1.2;
}
.featured-card p { font-size: 16px; color: var(--ink2); font-weight: 300; line-height: 1.7; max-width: 680px; }

.posts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.post-cover {
  width: 100%;
  height: 180px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  margin-bottom: 1.25rem;
}
.post-body-inner { }
.post-card {
  display: block;
  background: var(--card-bg);
  border: 0.5px solid var(--border);
  border-radius: 16px;
  padding: 1.5rem;
  transition: border-color 0.2s, transform 0.2s;
  color: inherit;
}
.post-card:hover { border-color: var(--gold2); transform: translateY(-2px); }
.post-card h3 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--ink);
  margin: 0.6rem 0 0.5rem;
  line-height: 1.3;
}
.post-card p { font-size: 14px; color: var(--ink2); font-weight: 300; line-height: 1.6; }

.post-meta { display: flex; align-items: center; gap: 10px; }
.featured-meta { display: flex; align-items: center; gap: 10px; }
.post-tag {
  background: var(--teal2);
  color: var(--teal);
  font-size: 11px;
  font-weight: 500;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
}
.post-date { font-size: 12px; color: var(--ink2); }
.read-more {
  margin-top: 1.25rem;
  font-size: 13px;
  color: var(--teal);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
}

.newsletter {
  background: var(--cream2);
  padding: 5rem 3rem;
}
.newsletter-inner { max-width: 580px; margin: 0 auto; }
.subscribe-form { display: flex; gap: 0.75rem; margin-top: 0.5rem; }
.subscribe-form input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 0.5px solid var(--border);
  border-radius: 100px;
  font-size: 14px;
  background: var(--card-bg);
  color: var(--ink);
  font-family: var(--font-body);
  outline: none;
}
.subscribe-form input:focus { border-color: var(--teal); }
.success-msg { margin-top: 1rem; font-size: 14px; color: var(--teal); display: flex; align-items: center; gap: 6px; }

@media (max-width: 900px) {
  .posts-grid { grid-template-columns: 1fr; }
  h1 { font-size: 2.5rem; }
  .blog-content { padding: 2rem 1.5rem; }
}
</style>
