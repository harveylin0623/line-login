import { currencyFormat } from '@/utilities/currencyFormat.js'

export const directiveCurrency = {
  updated(el, binding) {
    el.textContent = currencyFormat(binding.value)
  },
  mounted(el, binding) {
    el.textContent = currencyFormat(binding.value)
  },
}