<template>
  <div
    :aria-valuemax="max"
    aria-valuemin="0"
    :aria-valuenow="!indeterminate ? value : undefined"
    class="atomic-progress"
    :class="rootClass"
    :style="rootStyle"
    role="progressbar"
  >
    <div class="atomic-progress__trail">
      <div
        class="atomic-progress__track"
        :style="!indeterminate
          ? {
            transform: `translateX(${percentage - 100}%)`,
            // width: `${percentage}%`
          }
          : undefined
        "
      ></div>
    </div>
    <div class=" !text-red-800">{{ percentage }}%</div>
  </div>
</template>

<script setup>
import { usePercentage } from '@/composables/usePercentage.js'

const props = defineProps({
  variants: {
    type: String,
    default: 'liner'
  },
  color: {
    type: String,
    default: 'primary',
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  value: {
    type: Number,
    default: 30
  },
  max: {
    type: Number,
    default: 100
  },
  thickness: {
    type: Number,
    default: 10
  },
  size: {
    type: Number,
    default: 64
  },
  indicator: {
    type: Boolean,
    default: true
  }
})

const BASE_CLASS = 'atomic-progress'
const { percentage } = usePercentage(() => props.value, () => props.max)

const rootStyle = computed(() => {
  return {
    '--progress-thickness': `${props.thickness}px`,
    '--progress-size': `${props.size}px`,
  }
})

const rootClass = computed(() => [
  `${BASE_CLASS}--${props.color}`,
  `${BASE_CLASS}--${props.variants}`,
  {
    [`${BASE_CLASS}--indeterminate`]: props.indeterminate,
  },
])

defineOptions({
  name: 'PorgressLineBar'
})
</script>

<style lang="scss">
$color-map: (
  primary: #1976D2,
  success: #72BF24,
  warning: #FFAD0F,
  danger: #E52D27,
  info: #909399
);

.atomic-progress {
  @each $color, $value in $color-map {
    &--#{$color} {
      --progress-color: #{$value};
    }
  }

  &--liner {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }

  &__trail {
    overflow: hidden;
    width: 100%;
    height: var(--progress-thickness);
    background-color: #f1f1f1;
    border-radius: 99999px;
  }

  &__track {
    height: 100%;
    background-color: var(--progress-color);
    border-radius: 99999px;
    transition: transform 0.3s;
  }

  &--liner#{&}--indeterminate &__track {
    animation: indeterminate-liner 2s ease infinite running;
  }

}

@keyframes indeterminate-liner {
  0% {
    transform: translateX(-100%);
  }

  60% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(100%);
  }
}

</style>