<template>
  <main>
    <article class="post-article" v-if="post">
      <div class="post-header">
        <NuxtLink to="/blog" class="back-link">
          <i class="fa-regular fa-arrow-left" /> Back to blog
        </NuxtLink>
        <div class="post-meta">
          <span class="post-tag">{{ post.tag }}</span>
          <span class="post-date">{{ post.date }}</span>
          <span class="read-time">{{ post.readTime }}</span>
        </div>
        <h1>{{ post.title }}</h1>
        <p class="post-excerpt">{{ post.excerpt }}</p>
      </div>
      <div class="post-body" v-html="post.content" />
      <div class="post-footer">
        <NuxtLink to="/blog" class="btn-outline">
          <i class="fa-regular fa-arrow-left" /> More articles
        </NuxtLink>
      </div>
    </article>

    <div v-else class="not-found">
      <h2>Post not found</h2>
      <NuxtLink to="/blog" class="btn-primary">Back to blog</NuxtLink>
    </div>
  </main>
</template>

<script setup>
const route = useRoute()

const allPosts = {
  'how-to-beat-ats': {
    tag: 'ATS Tips',
    date: 'May 20, 2026',
    readTime: '6 min read',
    title: 'How to beat applicant tracking systems in 2026',
    excerpt: 'Most resumes never reach a human. Here\'s exactly how ATS software scores your application — and how to optimize yours to pass every filter.',
    content: `
      <p>Applicant Tracking Systems (ATS) are the invisible gatekeepers of the modern job search. Over 98% of Fortune 500 companies use them — and most mid-size companies do too.</p>
      <h3>What is an ATS?</h3>
      <p>An ATS is software that automatically screens resumes before a human recruiter ever sees them. It parses your resume, extracts information, and scores it against the job description.</p>
      <h3>How to optimize for ATS</h3>
      <p>Use standard section headings like "Work Experience," "Education," and "Skills." Avoid tables, columns, and graphics — ATS parsers can't read them reliably.</p>
      <p>Match keywords from the job description exactly. If they say "project management," don't just say "managing projects." Exact matches score higher.</p>
      <h3>Use ResumeAI to automate this</h3>
      <p>Our job description matching feature automatically rewrites your resume to align with any job posting — saving you hours of manual editing.</p>
    `
  }
}

const post = computed(() => allPosts[route.params.slug] || null)

useSeoMeta({
  title: post.value ? `${post.value.title} — ResumeAI Blog` : 'Post not found',
  description: post.value?.excerpt
})
</script>

<style scoped>
.post-article {
  max-width: 720px;
  margin: 0 auto;
  padding: 3rem;
}
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--ink2);
  margin-bottom: 2rem;
  transition: color 0.2s;
}
.back-link:hover { color: var(--ink); }
.post-meta { display: flex; align-items: center; gap: 10px; margin-bottom: 1.25rem; }
.post-tag {
  background: var(--teal2);
  color: var(--teal);
  font-size: 11px;
  font-weight: 500;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
}
.post-date, .read-time { font-size: 13px; color: var(--ink2); }
h1 {
  font-family: var(--font-display);
  font-size: 2.8rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: var(--ink);
  margin-bottom: 1.25rem;
}
.post-excerpt {
  font-size: 18px;
  color: var(--ink2);
  font-weight: 300;
  line-height: 1.7;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 0.5px solid var(--border);
}
.post-body { font-size: 16px; color: var(--ink2); line-height: 1.8; font-weight: 300; }
.post-body :deep(h3) {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--ink);
  margin: 2rem 0 0.75rem;
}
.post-body :deep(p) { margin-bottom: 1.25rem; }
.post-footer { margin-top: 3rem; padding-top: 2rem; border-top: 0.5px solid var(--border); }
.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 0.5px solid var(--border);
  color: var(--ink);
  padding: 0.65rem 1.25rem;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 500;
  transition: border-color 0.2s;
}
.btn-outline:hover { border-color: var(--ink); }
.not-found { text-align: center; padding: 6rem 3rem; }
.not-found h2 { font-family: var(--font-display); font-size: 2rem; margin-bottom: 1.5rem; }
@media (max-width: 600px) {
  .post-article { padding: 2rem 1.5rem; }
  h1 { font-size: 2rem; }
}
</style>
