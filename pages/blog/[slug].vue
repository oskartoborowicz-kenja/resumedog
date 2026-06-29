<template>
  <main>
    <article class="post-article" v-if="post">
      <div class="post-header">
        <NuxtLink to="/blog" class="back-link">
          <i class="fa-regular fa-arrow-left" /> {{ $t('blogPost.backToBlog') }}
        </NuxtLink>
        <div class="post-meta">
          <span class="post-tag">{{ post.tag }}</span>
          <span class="post-date">{{ post.date }}</span>
          <span class="post-dot" />
          <span class="read-time">{{ post.readTime }}</span>
          <span class="post-dot" />
          <span class="post-author-inline">{{ post.author }}</span>
        </div>
        <h1>{{ post.title }}</h1>
        <p class="post-excerpt">{{ post.excerpt }}</p>
      </div>
      <div v-if="post.image" class="post-hero-img" :style="{ backgroundImage: `url(${post.image})` }" />
      <div class="post-body" v-html="post.content" />
      <div class="post-footer">
        <NuxtLink to="/blog" class="btn-outline">
          <i class="fa-regular fa-arrow-left" /> {{ $t('blogPost.moreArticles') }}
        </NuxtLink>
      </div>
    </article>

    <div v-else class="not-found">
      <h2>{{ $t('blogPost.notFound') }}</h2>
      <NuxtLink to="/blog" class="btn-primary">{{ $t('blogPost.backToList') }}</NuxtLink>
    </div>
  </main>
</template>

<script setup>
const route = useRoute()
const base = useRuntimeConfig().app.baseURL.replace(/\/$/, '')

const allPosts = {
  'ai-recruiting-what-firms-need-to-know-in-2026': {
    image: `${base}/images/blog-ai-recruiting.webp`,
    tag: 'AI Recruiting',
    date: 'Apr 3, 2026',
    readTime: '4 min read',
    author: 'Ravi Siddharth',
    title: 'AI Recruiting: What Firms Need To Know in 2026',
    excerpt: 'Recruiting has always been an industry where speed, accuracy, and relationships matter. AI tools are now being used to assist with candidate sourcing, screening, and resume preparation - here\'s what firms need to understand.',
    content: `
      <p>Recruiting has always been an industry where speed, accuracy, and relationships matter. Recruiters must quickly identify strong candidates, prepare their profiles, and present them to hiring managers - often while competing with other agencies working on the same roles.</p>
      <p>In recent years, artificial intelligence has begun to influence many parts of the recruiting workflow. Tools powered by AI are being used to assist with candidate sourcing, screening, communication, and data management. Another area that is receiving increasing attention is resume formatting and document preparation.</p>
      <p>Many recruiting firms handle large volumes of resumes every month, and preparing these documents for client submission can require significant administrative effort. AI technologies are starting to automate parts of this process, potentially improving efficiency. However, like any technology, AI adoption in recruiting also brings challenges that firms need to consider carefully.</p>
      <p>Understanding both the opportunities and limitations of AI will be important for recruiting firms as the industry continues to evolve.</p>

      <h3>The Operational Reality of Resume Processing</h3>
      <p>Behind every successful candidate placement is a series of operational steps that are rarely visible to clients.</p>
      <p>Before a candidate profile can be presented to a hiring manager, recruiters often need to review the resume, adjust formatting, reorganize sections, and sometimes translate the document. In firms that work across multiple languages or international markets, these steps can become even more complex.</p>
      <p>In some organizations, these tasks are handled by administrative teams or back-office staff. While this helps recruiters focus on client relationships and candidate engagement, it can also introduce delays.</p>
      <p>Preparing resumes may take several hours or even a full day depending on internal workflows and the number of candidates being processed. In competitive hiring markets, timing can matter. Recruiters often compete with other agencies to present candidates first, and delays in document preparation may affect whether a candidate reaches the hiring manager quickly enough.</p>

      <h3>Why Resume Formatting Can Be Challenging</h3>
      <p>One difficulty recruiters face is the inconsistency of resume formats. Candidates create resumes in many different ways. Some use complex designs or graphics, while others provide very minimal structure. Important information such as skills, project experience, or employment history may appear in different sections or be presented in unclear ways.</p>
      <p>To ensure hiring managers can easily review a candidate's background, recruiters often need to convert resumes into standardized templates, reorganize work experience and skill sections, remove unnecessary formatting, translate content when working across languages, and improve clarity while preserving the candidate's original information.</p>
      <p>For firms processing large volumes of resumes, these tasks can become repetitive and time-consuming. As recruiting operations scale, maintaining consistency across candidate submissions becomes more difficult.</p>

      <h3>Where AI Can Provide Value</h3>
      <p>Artificial intelligence tools are increasingly being used to assist with document analysis and formatting. Modern AI systems are capable of identifying key sections within resumes, extracting relevant information, and restructuring documents into standardized formats. Some systems can also support translation or formatting improvements to improve readability.</p>
      <p>These capabilities can help reduce the time required to prepare candidate resumes for submission. In many cases, tasks that once required manual editing can be completed much more quickly with automated tools.</p>
      <p>For recruiting firms, potential benefits of AI-assisted resume processing include faster preparation of candidate submissions, reduced administrative workload for recruiters, greater consistency in resume presentation, and improved ability to handle high candidate volumes.</p>

      <h3>Important Limitations and Risks to Consider</h3>
      <p>Despite these advantages, AI is not a complete solution for every recruiting challenge. One key concern is accuracy. While AI systems can analyze documents quickly, they may occasionally misinterpret information or restructure content in ways that require human correction. Recruiter review remains important to ensure that candidate profiles accurately reflect a person's experience and qualifications.</p>
      <p>Another issue is context and judgment. AI systems can process text efficiently, but they may struggle to fully understand the nuances of a candidate's career progression or industry-specific terminology. Human recruiters are still better positioned to interpret these details when evaluating candidates.</p>
      <p>Data privacy is also an important consideration. Recruiting firms handle sensitive personal information, and any AI system used in the workflow must ensure that candidate data is securely managed and handled responsibly.</p>

      <h3>Balancing Technology and Human Expertise</h3>
      <p>As AI continues to develop, many recruiting firms are exploring how to integrate technology into their existing workflows. The most effective approach is often not full automation, but a combination of AI tools and human expertise. AI can assist with repetitive administrative work, while recruiters focus on candidate engagement, interview preparation, and client advisory roles.</p>
      <p>This balance allows recruiting firms to improve operational efficiency without losing the human element that remains central to successful hiring.</p>

      <h3>Looking Ahead</h3>
      <p>By 2026 and beyond, artificial intelligence is expected to play a growing role across many areas of the recruiting industry. AI tools will likely continue to evolve in areas such as candidate sourcing, resume processing, interview scheduling, and recruiter productivity.</p>
      <p>Recruiting has always been a people-driven industry, and that is unlikely to change. Instead, AI will likely serve as a supporting tool - helping recruiters manage information more efficiently while allowing them to focus on the relationship-building and strategic work that drives successful placements. For recruiting firms, the key question is not whether AI will be part of the industry's future, but how to adopt it thoughtfully and responsibly.</p>
    `
  },

  'ai-trends-shaping-recruiting-in-2026': {
    image: `${base}/images/blog-ai-trends.webp`,
    tag: 'Industry Trends',
    date: 'Apr 3, 2026',
    readTime: '4 min read',
    author: 'Ravi Siddharth',
    title: 'AI Trends Shaping Recruiting in 2026',
    excerpt: 'Artificial intelligence is playing an increasingly visible role in the recruiting industry. Tools have evolved from basic automation to more advanced systems capable of assisting with candidate sourcing, resume processing, and workflow management.',
    content: `
      <p>Artificial intelligence increasingly influences recruiting operations. Tools have evolved from basic automation such as keyword filtering and scheduling to more advanced systems capable of assisting with candidate sourcing, resume processing, and workflow management. By 2026, most recruiting organizations are anticipated to integrate AI into at least some operations, though adoption rates and effectiveness differ considerably.</p>
      <p>AI's impact is best characterized as incremental rather than transformative, offering meaningful improvements in certain areas, while leaving others largely dependent on human expertise.</p>

      <h3>AI as a Complement to Recruiters</h3>
      <p>The industry consensus positions AI as complementary to recruiters rather than replacement technology. Recruiting requires both structured processes and human judgment. While AI excels at organized tasks like data management and pattern recognition, it struggles evaluating interpersonal skills, cultural alignment, and candidate motivation.</p>
      <p>Many organizations leverage AI to minimize administrative burdens while keeping recruiters responsible for decision-making and relationship development. However, achieving this balance presents challenges - excessive AI reliance produces generic results, while underutilization misses efficiency potential.</p>

      <h3>Automation of Repetitive Tasks</h3>
      <p>AI clearly benefits recruiting through automating routine administrative work. Resume parsing, data entry, document formatting, and system updates become faster through automation, potentially improving consistency and reducing manual effort. However, automation does not eliminate the need for oversight. Resume variations, incomplete information, and unconventional career trajectories can generate errors requiring recruiter review and adjustment.</p>

      <h3>Candidate Matching: Progress With Limitations</h3>
      <p>Modern AI-driven matching systems evaluate broader factors than traditional keyword searches, including experience, skills, and career progression. This potentially surfaces overlooked candidates. However, accuracy depends heavily on input data quality, as job descriptions vary in detail and standardization.</p>
      <p>Additionally, AI struggles with intangible qualities like adaptability and long-term potential. AI-generated matches are often best treated as starting points rather than final recommendations.</p>

      <h3>Speed vs. Quality in Candidate Processing</h3>
      <p>AI accelerates processing large candidate volumes through faster resume handling and document preparation, particularly valuable in competitive hiring. Nonetheless, speed doesn't guarantee superior outcomes. Overly automated workflows risk lower submission quality and overlooked details. Teams must balance faster processing with maintaining quality through human review.</p>

      <h3>Global Recruiting and Language Capabilities</h3>
      <p>AI supports international recruitment through translation, formatting, and standardization tools. However, recruiting translation involves subtle nuances affecting candidate experience interpretation that automated systems may miss. Human review remains important for roles emphasizing communication.</p>

      <h3>Responsible Use and Ongoing Concerns</h3>
      <p>As AI adoption increases, fairness, transparency, and data privacy concerns rise. AI systems can reflect biases present in their training data or inputs, and their decision-making processes are not always fully transparent. Organizations address these through human oversight, output auditing, and greater transparency about AI usage, though responsible implementation remains an evolving challenge.</p>

      <h3>The Path Forward</h3>
      <p>AI will continue growing in recruiting with variable impact based on implementation. The technology excels in automation and data processing but shows limitations in judgment and contextual understanding. Rather than transformative change, AI is more likely to gradually reshape specific parts of the workflow, while leaving core human responsibilities intact.</p>
      <p>Effective strategies will balance AI usage with human oversight ensuring quality, fairness, and trust.</p>
    `
  },

  'how-ai-can-automate-resume-formatting-and-processing': {
    image: `${base}/images/blog-resume-auto.jpg`,
    tag: 'Resume Automation',
    date: 'Apr 3, 2026',
    readTime: '4 min read',
    author: 'Ravi Siddharth',
    title: 'How AI Can Automate Resume Formatting and Processing',
    excerpt: 'Recruiters often work with large volumes of resumes that vary widely in format, structure, and quality. AI tools are now being introduced to assist with these tasks - here\'s how they work and where the limits are.',
    content: `
      <p>Artificial intelligence is increasingly being used to streamline administrative tasks in recruiting, and resume formatting and processing is one area where its impact is becoming particularly visible.</p>
      <p>Recruiters often work with large volumes of resumes that vary widely in format, structure, and quality. Preparing these documents for internal review or client submission can require significant manual effort. AI tools are now being introduced to assist with these tasks, offering potential improvements in efficiency and consistency.</p>
      <p>At the same time, the effectiveness of AI in this area depends on how it is used. While automation can reduce workload, it does not eliminate the need for human oversight. Understanding both the capabilities and limitations of AI is key to using it effectively.</p>

      <h3>The Challenge of Resume Standardization</h3>
      <p>Resumes come in many different formats, styles, and levels of detail. Candidates may use different layouts, terminology, or structures depending on their background, industry, or region.</p>
      <p>For recruiters, this lack of standardization creates challenges. Before a resume can be shared with a client or entered into a system, it often needs to be reviewed, reformatted, and sometimes rewritten to ensure clarity and consistency. This process can be time-consuming, particularly for firms handling high volumes of candidates. It is also prone to inconsistency, as formatting decisions may vary between recruiters.</p>

      <h3>How AI Automates Resume Formatting</h3>
      <p>AI-powered tools can assist by identifying and extracting key information from resumes, such as work experience, education, skills, and contact details. Once this information is extracted, the system can reorganize it into a standardized format based on predefined templates. This helps ensure that all candidate profiles follow a consistent structure, which can make them easier to review and compare.</p>
      <p>Automation can also reduce the need for manual editing, allowing recruiters to process resumes more quickly. In high-volume environments, this can lead to noticeable time savings. However, formatting accuracy depends on the quality of the original resume. Unusual layouts, missing sections, or inconsistent formatting can still cause errors, requiring manual correction.</p>

      <h3>Resume Parsing and Data Extraction</h3>
      <p>Beyond formatting, AI is also used to parse resumes and convert unstructured text into structured data. This process involves analyzing the content of a resume and categorizing information into fields that can be stored in databases or applicant tracking systems. For example, job titles, dates of employment, and skills can be extracted and organized automatically.</p>
      <p>Structured data makes it easier to search, filter, and analyze candidate information. It can also support other functions, such as candidate matching or reporting. That said, parsing is not always perfect. Ambiguous phrasing, non-standard job titles, or gaps in employment history can lead to incomplete or inaccurate data extraction. Human review is often needed to validate the results.</p>

      <h3>Supporting Multilingual Resume Processing</h3>
      <p>In global recruiting, resumes may be submitted in multiple languages. AI tools can assist by translating resume content and standardizing formats across different languages. This can help recruiters work more effectively with international candidates and expand their talent pools.</p>
      <p>However, translation accuracy can vary depending on the complexity of the content. Industry-specific terminology, idiomatic expressions, or cultural differences in resume structure may not always be interpreted correctly. For roles where precise communication is important, human review remains a critical step.</p>

      <h3>Consistency and Presentation</h3>
      <p>Standardized resume formatting can improve the overall presentation of candidate profiles. Consistent formatting makes it easier for hiring managers to review multiple candidates and compare their qualifications. It can also help ensure that important information is clearly highlighted.</p>
      <p>At the same time, there is a balance to consider. Over-standardization may remove elements of a candidate's individuality or context. Recruiters may still need to tailor resumes to highlight specific strengths or align with client preferences.</p>

      <h3>Limitations and Considerations</h3>
      <p>While AI offers clear advantages in automating resume formatting and processing, it also has limitations. Accuracy is not guaranteed - AI may misinterpret or omit information, especially in complex or non-standard resumes. Human oversight is still required to ensure quality and correctness. Not all tools integrate easily with existing systems, and relying too heavily on automation may lead to reduced attention to detail or loss of context.</p>
      <p>These factors highlight the importance of using AI as a support tool rather than a fully autonomous solution.</p>

      <h3>The Role of Recruiters in an Automated Workflow</h3>
      <p>As AI takes on more administrative tasks, the role of recruiters is shifting. Instead of focusing on formatting and data entry, recruiters can spend more time engaging with candidates, understanding client needs, and making informed decisions. However, this shift also requires adapting to new tools and workflows. Recruiters need to understand how AI systems work, where they are effective, and where they may fall short. The most effective approach is one where technology and human expertise work together.</p>

      <h3>Future Outlook</h3>
      <p>AI is likely to continue improving in its ability to process and format resumes, particularly as systems become better at handling diverse formats and languages. Even so, complete automation remains unlikely in the near term. The variability and complexity of resumes mean that human judgment will continue to play an important role.</p>
      <p>In practice, AI is best viewed as a way to reduce manual effort and improve consistency, rather than as a replacement for recruiter involvement. Organizations that adopt a balanced approach - leveraging automation while maintaining oversight - are likely to see the most benefit from these technologies.</p>
    `
  }
}

const post = computed(() => allPosts[route.params.slug] || null)

useSeoMeta({
  title: post.value ? `${post.value.title} - ResumeDOG Blog` : 'Post not found',
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
  margin-bottom: 2rem;
}
.post-hero-img {
  width: 100%;
  height: 400px;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
  margin-bottom: 3rem;
  border-bottom: 0.5px solid var(--border);
}
.post-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--ink2);
  opacity: 0.4;
  display: inline-block;
}
.post-author-inline { font-size: 13px; color: var(--ink2); }
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
