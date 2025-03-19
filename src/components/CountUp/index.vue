<template>
  <div ref="el">
    <p
      v-currency="animatedCount"
      class="text-4xl text-red-600"
    ></p>
  </div>
</template>

<script setup>
const props = defineProps({
  initialCount: {
    type: Number,
    default: 0
  },
  finalCount: {
    type: Number,
    required: true
  }
})

const el = ref(null)
const observer = ref(null)
const animatedCount = ref(0)

const doCountUp = (start, end, duration) => {
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    let progress = Math.min((timestamp - startTimestamp) / duration, 1)
    animatedCount.value = Math.floor(progress * (end - start) + start)
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

const observeHandler = () => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.value.unobserve(el.value)
        doCountUp(props.initialCount, props.finalCount, 2000)
      }
    })
  }, {
    threshold: 0.5
  })

  observer.value.observe(el.value)
}

onMounted(() => {
  observeHandler()
})

onBeforeUnmount(() => {
  observer.value.unobserve(el.value)
})

defineOptions({
  name: 'CountUp'
})
</script>