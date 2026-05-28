<template>
  <main>
    <section class="blog-hero">
      <div class="hero-eyebrow">The ResumeAI Blog</div>
      <h1>Career advice, <em>delivered.</em></h1>
      <p class="hero-sub">Tips on resumes, job searching, and landing the role you actually want.</p>
    </section>

    <section class="blog-content">
      <div class="featured-post">
        <NuxtLink :to="`/blog/${posts[0].slug}`" class="featured-card">
          <div class="featured-meta">
            <span class="post-tag">{{ posts[0].tag }}</span>
            <span class="post-date">{{ posts[0].date }}</span>
          </div>
          <h2>{{ posts[0].title }}</h2>
          <p>{{ posts[0].excerpt }}</p>
          <div class="read-more">Read article <i class="fa-regular fa-arrow-right" /></div>
        </NuxtLink>
      </div>

      <div class="posts-grid">
        <NuxtLink
          v-for="post in posts.slice(1)"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="post-card"
        >
          <div class="post-meta">
            <span class="post-tag">{{ post.tag }}</span>
            <span class="post-date">{{ post.date }}</span>
          </div>
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p>
          <div class="read-more">Read article <i class="fa-regular fa-arrow-right" /></div>
        </NuxtLink>
      </div>
    </section>

    <section class="newsletter">
      <div class="newsletter-inner">
        <div class="section-label">Stay updated</div>
        <h2 class="section-heading">Get tips in your <em>inbox</em></h2>
        <p class="section-sub">Weekly career advice and resume tips from our team. No spam, ever.</p>
        <div class="subscribe-form">
          <input v-model="email" type="email" placeholder="your@email.com" />
          <button class="btn-primary" @click="subscribe">Subscribe</button>
        </div>
        <p v-if="subscribed" class="success-msg">
          <i class="fa-regular fa-check-circle" /> You're subscribed!
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Blog — ResumeAI',
  description: 'Career advice, resume tips, and job search strategies from the ResumeAI team.'
})

const email = ref('')
const subscribed = ref(false)

function subscribe() {
  if (email.value) subscribed.value = true
}

const posts = [
  {
    slug: 'how-to-beat-ats',
    tag: 'ATS Tips',
    date: 'May 20, 2026',
    title: 'How to beat applicant tracking systems in 2026',
    excerpt: 'Most resumes never reach a human. Here\'s exactly how ATS software scores your application — and how to optimize yours to pass every filter.'
  },
  {
    slug: 'resume-rewrite-guide',
    tag: 'Resume Writing',
    date: 'May 14, 2026',
    title: 'The complete guide to rewriting your resume with AI',
    excerpt: 'AI can transform a mediocre resume into a compelling one — if you know how to use it. We walk through the full process.'
  },
  {
    slug: 'job-description-matching',
    tag: 'Job Search',
    date: 'May 7, 2026',
    title: 'Why tailoring your resume to each job description works',
    excerpt: 'Generic resumes get generic results. Here\'s the data on why tailored applications get 3× more callbacks.'
  },
  {
    slug: 'resume-formats-compared',
    tag: 'Formats',
    date: 'Apr 28, 2026',
    title: 'PDF vs Word vs plain text: which resume format wins?',
    excerpt: 'Recruiters and ATS systems treat different file formats very differently. We tested all of them so you don\'t have to.'
  },
  {
    slug: 'career-change-resume',
    tag: 'Career Change',
    date: 'Apr 21, 2026',
    title: 'How to write a resume when switching industries',
    excerpt: 'Changing careers is hard. Your resume doesn\'t have to make it harder. Here\'s how to reframe your experience for a new field.'
  }
]
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

.featured-card {
  display: block;
  background: var(--card-bg);
  border: 0.5px solid var(--border);
  border-radius: 20px;
  padding: 2.5rem;
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
.post-card {
  display: block;
  background: var(--card-bg);
  border: 0.5px solid var(--border);
  border-radius: 16px;
  padding: 1.75rem;
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
