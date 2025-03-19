<template>
  <div>
    <select
      v-model="locale"
      class="form-control w-[100px]"
    >
      <option
        v-for="item in availableLocales"
        :key="item"
        :value="item"
      >
        {{ item }}
      </option>
    </select>
    <p>{{ $t('seo.title.projectName') }}</p>
    <p>article: {{ $t('article', { text: realText }) }}</p>
  </div>
</template>

<script setup>
import { usePageMeta } from '@/composables/usePageMeta.js'

const { homeMeta } = usePageMeta()
const { locale, availableLocales } = useI18n()
const articleData = ref({})

const realText = computed(() => {
  return articleData.value[locale.value] || ''
})

onMounted(() => {
  setTimeout(() => {
    articleData.value = {
      'zh-tw': '你好嗎 ?',
      en: 'how are you ?'
    }
  }, 1000)
})

useHead(homeMeta)
</script>