<template>
  <div
    class="mb-4 cursor-pointer last:mb-0"
    @click="updateAge"
  >
    <p>Name: {{ student.name }}</p>
    <p>Gender: {{ genderText }}</p>
    <p>Age: {{ ageText }}</p>
  </div>
</template>

<script setup>
import { useAgeText } from '@/composables/useAgeText.js'

const props = defineProps({
  student: {
    type: Object,
    required: true
  }
})

const { ageText } = useAgeText(() => props.student.age)

const genderText = computed(() => {
  const mapping = {
    male: '男',
    female: '女'
  }
  return mapping[props.student.gender] || ''
})

const emit = defineEmits(['updateAge'])

const updateAge = () => {
  emit('updateAge', {
    studentId:props.student.studentId,
    count: 2
  })
}
</script>