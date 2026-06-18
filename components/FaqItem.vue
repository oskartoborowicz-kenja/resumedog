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
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
}
.faq-summary {
  width: 100%;
  padding: 1.1rem 1.5rem;
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
  gap: 1rem;
  text-align: left;
}
.faq-icon {
  font-size: 1.2rem;
  color: var(--ink2);
  flex-shrink: 0;
  transition: transform 0.4s ease;
}
.faq-item.open .faq-icon {
  transform: rotate(45deg);
}
.faq-body {
  height: 0;
  overflow: hidden;
  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.faq-body p {
  padding: 0 1.5rem 1.1rem;
  font-size: 15px;
  color: var(--ink2);
  line-height: 1.7;
}
</style>
