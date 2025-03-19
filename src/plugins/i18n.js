import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

const fallbackLocale = 'zh-tw'

const checkIsIncludeLang = (lang) => {
  return ['zh-tw', 'en'].includes(lang)
}

const getLocale = () => {
  const storageLang = localStorage.getItem('lang')
  let result = ''
  if (storageLang !== null) {
    const isInclude = checkIsIncludeLang(storageLang)
    result = isInclude ? storageLang : fallbackLocale
  } else {
    const browserLang = navigator.language
    const isInclude = checkIsIncludeLang(browserLang)
    result = isInclude ? browserLang : fallbackLocale
  }

  return result
}

const i18n = createI18n({
  legacy: false,
  locale: getLocale(),
  fallbackLocale,
  globalInjection: true,
  messages
})

export default i18n
