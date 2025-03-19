<template>
  <div class="relative flex justify-center space-x-9 pb-[200px] pt-[120%]">
    <CountUp
      v-for="(list,index) in lists"
      :key="index"
      :initial-count="list.start"
      :final-count="list.end"
    />
    <h1 class="absolute left-1/2 top-[20px] -translate-x-1/2">往下滾動</h1>
  </div>
</template>

<script setup>
import CountUp from '@/components/CountUp/index.vue'

const lists = ref([
  {
    start: 0,
    end: 1234
  },
  {
    start: 0,
    end: 2345
  },
  {
    start: 0,
    end: 5678
  },
])

defineOptions({
  name: 'CountUpPage'
})

useHead({
  title: '數字跳動'
})
</script>