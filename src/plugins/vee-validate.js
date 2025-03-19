import { configure, defineRule } from 'vee-validate'
import { isGuiNumberValid } from 'taiwan-id-validator'
import i18n from '@/plugins/i18n.js'

const { t } = i18n.global

configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: true,
})

defineRule('required', (value) => {
  if (!value || !value.length) {
    return t('validate.required')
  }
  return true
})

defineRule('email', (value) => {
  if (!value || !value.length) {
    return true
  }
  if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value)) {
    return t('validate.email')
  }
  return true
})

defineRule('password', (value) => {
  if (!value || !value.length) {
    return true
  }
  const rule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/

  if (!rule.test(value)) {
    return t('validate.password')
  }
  return true
})

defineRule('confirmed', (value, [target], ctx) => {
  if (value === ctx.form[target]) {
    return true
  }
  return t('validate.confirm_password')
})

defineRule('phone', (value) => {
  if (!value || !value.length) {
    return true
  }
  const rule = /^09\d{8}$/
  if (!rule.test(value)) {
    return t('validate.phone')
  }
  return true
})

defineRule('taxId', (value) => {
  if (!value || !value.length) {
    return true
  }

  if (!isGuiNumberValid(value, true)) {
    return t('validate.taxId')
  }
  return true
})

defineRule('hyperlink', (value) => {
  if (!value || !value.length) {
    return true
  }
  const rule = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/  // eslint-disable-line

  if (!rule.test(value)) {
    return t('validate.hyperlink')
  }
  return true
})