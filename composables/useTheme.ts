export const useTheme = () => {
  const isDark = useState<boolean>('theme-dark', () => false)

  const initTheme = () => {
    if (import.meta.client) {
      const stored = localStorage.getItem('theme')
      if (stored) {
        isDark.value = stored === 'dark'
      } else {
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      }
      applyTheme(isDark.value)
    }
  }

  const applyTheme = (dark: boolean) => {
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    }
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
  }

  return { isDark, initTheme, toggleTheme }
}
