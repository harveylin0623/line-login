import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const userInfo = ref({})
  const accessToken = ref('')

  const isLogin = computed(() => accessToken.value !== '')

  return { userInfo, accessToken, isLogin }
}, {
  persist: true
})