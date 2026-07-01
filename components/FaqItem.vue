<template>
  <div class="faq-item" :class="{ open: isOpen }">
    <button class="faq-summary" @click="isOpen = !isOpen">
      <span>{{ q }}</span>
      <span class="faq-icon">{{ isOpen ? '−' : '+' }}</span>
    </button>
    <div class="faq-body" :style="{ height: isOpen ? contentHeight : '0px' }">
      <p ref="content">{{ a }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ q: String, a: String })
const isOpen = ref(false)
const content = ref(null)
const contentHeight = ref('0px')

watch(isOpen, async (val) => {
  if (val) {
    await nextTick()
    contentHeight.value = content.value.scrollHeight + 'px'
  } else {
    contentHeight.value = '0px'
  }
})
</script>

<style scoped>
.faq-item {
  background: var(--card-bg);
  border-bottom: 1px solid var(--border);
}
.faq-item:last-child {
  border-bottom: none;
}
.faq-summary {
  width: 100%;
  padding: 1.3rem 1.75rem;
  font-size: 15px;
  font-weight: 500;
  color: var(--ink);
  cursor: pointer;
  background: transparent;
  border: none;
  font-family: var(--font-body);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  text-align: left;
  transition: background 0.15s;
}
.faq-summary:hover { background: var(--cream2); }
.faq-icon {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1.5px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  line-height: 1;
  color: var(--ink2);
  flex-shrink: 0;
  transition: border-color 0.2s, color 0.2s;
}
.faq-item.open .faq-icon {
  border-color: var(--accent);
  color: var(--accent);
}
.faq-body {
  height: 0;
  overflow: hidden;
  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.faq-body p {
  padding: 0 1.75rem 1.3rem;
  font-size: 14px;
  color: var(--ink2);
  line-height: 1.75;
  max-width: 680px;
}
</style>
