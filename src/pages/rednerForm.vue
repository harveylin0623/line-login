<template>
  <div class="mx-auto max-w-[600px] pt-3">
    <div class="mb-4">
      <button
        class="rounded bg-sky-600 px-3 py-1 text-white"
        @click="addBlock"
      >
        新增區塊
      </button>
    </div>
    <Form
      ref="myForm"
      class="space-y-4"
    >
      <FormBlock
        v-for="block in formData"
        :key="block.uid"
        :block="block"
        @update-user-name="updateUserName"
        @update-user-age="updateUserAge"
        @update-user-gender="updateUserGender"
        @update-user-skill="updateUserSkill"
      />
    </Form>
  </div>
</template>

<script setup>
import { uid } from 'uid'
import { Form } from 'vee-validate'
import FormBlock from '@/components/FormBlock/index.vue'

const myForm = ref(null)

const formData = ref([])

const formCount = computed(() => formData.value.length)

const validateUsername = (value) => {
  if (!value) {
    return 'Username is required'
  }
  if (value.length < 3) {
    return 'Username must be at least 3 characters'
  }
  return true
}

const validateAge = (value) => {
  if (!value) {
    return 'age is required'
  }
  if (!/^[0-9\s]*$/.test(value)) {
    return 'age must be number'
  }
  return true
}

const validateGender = (value) => {
  return value !== '' ? true : '必填'
}

const validateSkill = (value) => {
  return value.length > 0 ? true : '必須選擇一個技能'
}

const addBlock = () => {
  const userName = 'userName'
  const age = 'age'
  const gender = 'gender'
  const skill = 'skill'
  formData.value.push({
    uid: uid(),
    userName: {
      filedName: `${userName}-${formCount.value}`,
      value: '',
      rules: validateUsername
    },
    age: {
      filedName: `${age}-${formCount.value}`,
      value: '',
      rules: validateAge
    },
    gender: {
      filedName: `${gender}-${formCount.value}`,
      value: '',
      rules: validateGender
    },
    skill: {
      filedName: `${skill}-${formCount.value}`,
      value: [],
      rules: validateSkill
    }
  })
}

const updateUserName = (payload) => {
  const targetData = formData.value.find(item => item.uid === payload.uid)
  targetData.userName.value = payload.value
}

const updateUserAge = (payload) => {
  const targetData = formData.value.find(item => item.uid === payload.uid)
  targetData.age.value = payload.value
}

const updateUserGender = (payload) => {
  const targetData = formData.value.find(item => item.uid === payload.uid)
  targetData.gender.value = payload.value
}

const updateUserSkill = (payload) => {
  const targetData = formData.value.find(item => item.uid === payload.uid)
  targetData.skill.value = payload.value
}

defineOptions({
  name: 'RenderForm'
})
</script>