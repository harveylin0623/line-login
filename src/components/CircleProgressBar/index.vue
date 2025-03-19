<template>
  <div class="p-4">
    <svg
      :width="size"
      :height="size"
      :viewBox="viewBox"
    >
      <circle
        class="atomic-progress__circular-trail"
        :cx="centerPoint"
        :cy="centerPoint"
        fill="none"
        :r="radius"
        stroke="#F1F1F1"
        :stroke-width="thickness"
      />
      <circle
        class="atomic-progress__circular-track"
        :cx="centerPoint"
        :cy="centerPoint"
        fill="none"
        :r="radius"
        :stroke-width="thickness"
        :stroke-dasharray="progressStrokeDashArray"
      />
      <text
        :x="centerPoint"
        :y="centerPoint"
        font-size="28"
      >{{ value }}</text>
    </svg>
  </div>
</template>

<script setup>
import { usePercentage } from '@/composables/usePercentage.js'

const props = defineProps({
  size: {
    type: Number,
    default: 250
  },
  value: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  thickness: {
    type: Number,
    default: 8
  },
})

const { percentage } = usePercentage(() => props.value, () => props.max)

const toFixed = (value) => Number(value.toFixed(2))

const viewBox = computed(() => `0 0 ${props.size} ${props.size}`)

const centerPoint = computed(() => props.size / 2)

const radius = computed(() => toFixed((props.size - props.thickness) / 2))

const circumference = computed(() => toFixed(2 * Math.PI * radius.value))

const length = computed(() => {
  return toFixed(circumference.value * (percentage.value / 100))
})

// const progressStrokeWidth = computed(() => length.value > 0 ? props.thickness : 0)

const progressStrokeDashArray = computed(() => `${length.value} ${circumference.value}`)

defineOptions({
  name: 'CircleProgressBar'
})

</script>

<style lang="scss">
.atomic-progress {
  &--circular {
    position: relative;
    display: inline-block;
    width: fit-content;
    height: fit-content;
  }

  &__circular-track {
    transform: rotate(-90deg);
    transform-origin: center;
    stroke: orange;
    transition: stroke-dasharray 1s linear;
  }
}
</style>