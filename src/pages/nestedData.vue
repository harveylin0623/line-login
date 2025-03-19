<template>
  <div class="flex h-dvh items-center justify-center bg-orange-200">
    <MonthTimeline
      :current-month="currentMonth"
      @update-month="updateMonth"
    />
  </div>
</template>

<script setup>
import MonthTimeline from '@/components/MonthTimeline/index.vue'

const currentMonth = ref(new Date().getMonth() + 1)
const employee = ref([
  {
    id: 1,
    name: 'harvey',
    age: 100,
    changeAge(value) {
      this.age = value
    }
  },
  {
    id: 2,
    name: 'merry',
    age: 100,
    changeAge(value) {
      this.age = value
    }
  }
])

const updateMonth = (value) => {
  currentMonth.value = value
}

watch(employee, () => {
  console.log(employee.value)
}, {
  deep: true
})

</script>