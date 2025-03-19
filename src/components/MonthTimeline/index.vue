<template>
  <div
    ref="monthWrap"
    class="month-wrap relative flex max-w-[400px] flex-nowrap items-center space-x-4 overflow-y-auto rounded bg-white p-2"
  >
    <MonthItem
      v-for="timeline in timelineList"
      :key="timeline.month"
      :current-month="currentMonth"
      :month-info="timeline"
      :move-item-to-center="moveItemToCenter"
      @update-month="updateMonth"
    />
  </div>
</template>

<script setup>
import MonthItem from '@/components/MonthTimeline/MonthItem.vue'
import { useTemplateRef } from 'vue'

defineProps({
  currentMonth: {
    type: Number,
    default: 1
  }
})

const monthWrap = useTemplateRef('monthWrap')
const timelineList = ref(Array.from({ length: 12 }, (v, i) => {
  const month = i + 1
  return {
    title: `${month}月`,
    month
  }
}).reverse())

const emit = defineEmits(['updateMonth'])

const updateMonth = (value) => {
  emit('updateMonth', value)
}

const moveItemToCenter = (payload) => {
  const { offsetLeft, offsetWidth } = payload
  if (offsetLeft === undefined || offsetWidth === undefined) {
    return
  }
  const remainingSpace = monthWrap.value.clientWidth - offsetWidth
  const spaceLeftAndRight = remainingSpace / 2
  monthWrap.value.scrollLeft = offsetLeft - spaceLeftAndRight
}

defineOptions({
  name: 'MonthTimeline'
})
</script>

<style lang="scss">
.month-wrap {
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 4px;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: lightgray;
    }
  }
}
</style>