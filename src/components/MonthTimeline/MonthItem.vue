<template>
  <div
    ref="monthItem"
    class="w-[120px] shrink-0 cursor-pointer whitespace-nowrap rounded bg-white px-3 py-1.5 text-center text-black [&.active]:bg-sky-600 [&.active]:text-white"
    :class="{active: isActive }"
    @click="clickHandler"
  >
    {{ monthInfo.title }}
  </div>
</template>

<script setup>
import { useTemplateRef } from 'vue'

const props = defineProps({
  currentMonth: {
    type: Number,
    required: true
  },
  monthInfo: {
    type: Object,
    required: true
  },
  moveItemToCenter: {
    type: Function,
    required: true
  }
})

const monthItem = useTemplateRef('monthItem')

const isActive = computed(() => props.currentMonth === props.monthInfo.month)

const emit = defineEmits(['updateMonth'])

const scrollToCenter = () => {
  props.moveItemToCenter({
    offsetLeft: monthItem.value.offsetLeft,
    offsetWidth: monthItem.value.offsetWidth,
  })
}

const clickHandler = () => {
  if (isActive.value) return
  scrollToCenter()
  emit('updateMonth', props.monthInfo.month)
}

onMounted(() => {
  if (!isActive.value) return
  scrollToCenter()
})

defineOptions({
  name: 'MonthItem'
})
</script>