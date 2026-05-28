<template>
  <div>
    <AppNav />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup>
const { initTheme } = useTheme()
onMounted(() => initTheme())
</script>
