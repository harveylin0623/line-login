export const useDarkMode = () => {
  const lightText = 'light'
  const darkText = 'dark'
  const themeText = 'theme'
  const mediaText = '(prefers-color-scheme:dark)'

  const updateHtmlTheme = (isDark) => {
    const method = isDark ? 'add' : 'remove'
    document.documentElement.classList[method](darkText)
  }

  const setDefaultColorMode = () => {
    const themeValue = localStorage.getItem(themeText)
    if (themeValue !== null) {
      const isDark = themeValue === darkText
      updateHtmlTheme(isDark)
    } else {
      const isDark = window.matchMedia(mediaText).matches
      updateHtmlTheme(isDark)
    }
  }

  const changeColorMode = () => {
    const themeValue = localStorage.getItem(themeText)
    let isDark = false
    if (themeValue === null) {
      isDark = !window.matchMedia(mediaText).matches
      updateHtmlTheme(isDark)
    } else {
      isDark = !(themeValue === darkText)
      updateHtmlTheme(isDark)
    }

    localStorage.setItem(themeText, isDark ? darkText : lightText)
  }

  return { setDefaultColorMode, changeColorMode }
}