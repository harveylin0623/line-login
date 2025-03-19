<template>
  <div>
    <component
      :is="layoutName"
      v-if="hasLayout"
    >
      <router-view />
    </component>
  </div>
</template>

<script setup>
import DefaultLayout from '@/layouts/Default.vue'
import OtherLayout from '@/layouts/Other.vue'

const { t } = useI18n()
const route = useRoute()

const layoutName = computed(() => {
  const { layout } = route.meta
  return layout !== undefined ? layout : ''
})

const hasLayout = computed(() => layoutName.value !== '')

defineOptions({
  components: {
    DefaultLayout,
    OtherLayout
  }
})

useHead({
  titleTemplate: `%s | ${t('seo.title.projectName')}`
})
</script>

