import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import i18n from './plugins/i18n'
import router from './router'
import { directiveCurrency } from './directives/currency.js'
import { directiveFocus } from './directives/focus.js'
import '@/assets/scss/global.scss'
import '@/assets/scss/tailwind.scss'
import '@/plugins/vee-validate.js'
import App from './App.vue'
import '@/assets/scss/elementPlus/index.scss'
import { useDarkMode } from '@/composables/useDarkMode.js'
import VConsole from 'vconsole'

new VConsole({ theme: 'dark' })

const app = createApp(App)
const head = createHead()
const pinia = createPinia()

app.directive('currency', directiveCurrency)
app.directive('focus', directiveFocus)
pinia.use(piniaPluginPersistedstate)
app.use(head)
app.use(pinia)
app.use(router)
app.use(i18n)
app.use(VueDOMPurifyHTML, {
  default: {
    ADD_ATTR: ['target']
  },
})
app.config.devtools = import.meta.env.DEV

const { setDefaultColorMode } = useDarkMode()
setDefaultColorMode()
app.mount('#app')
