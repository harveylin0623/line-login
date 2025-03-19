<template>
  <div>
    <ProgressLineBar />
    <CircleProgress
      :value="current"
      :max="max"
    />
    <button
      class="rounded border border-black px-3 py-2"
      @click="startCount"
    >
      start count
    </button>

    <button
      class="rounded border border-black px-3 py-2"
      @click="countdownReverse"
    >
      countdown reverse
    </button>
    <div class="p-3">
      <Student
        v-for="(item,index) in students"
        :key="index"
        :student="item"
        @update-age="updateStudentAge"
      />
    </div>
  </div>
</template>

<script setup>
import ProgressLineBar from '@/components/ProgressLineBar/index.vue'
import CircleProgress from '@/components/CircleProgressBar/index.vue'
import Student from '@/components/Student/index.vue'

const current = ref(10)
const max = ref(10)
const students = ref([
  {
    studentId: 1,
    name: 'harvey',
    gender: 'male',
    age: 20
  },
  {
    studentId: 2,
    name: 'merry',
    gender: 'female',
    age: 30
  }
])

const startCount = () => {
  let newValue = current.value + 1
  if (newValue <= max.value) {
    setTimeout(() => {
      current.value = newValue
      startCount()
    }, 1000)
  }
}

const countdownReverse = () => {
  const newVal = current.value - 1
  if (newVal >= 0) {
    setTimeout(() => {
      current.value = newVal
      countdownReverse()
    }, 1000)
  }
}

const updateStudentAge = (payload) => {
  const { studentId, count } = payload
  const targetStudent = students.value.find(student => student.studentId === studentId)
  console.log(targetStudent)
  targetStudent.age = targetStudent.age + count
}

</script>