<template>
  <div>
    <p class="mb-3 cursor-pointer px-2">刪除</p>
    <div class="flex flex-wrap">
      <div class="mb-3 w-1/2 px-2">
        <InputField
          v-model="userNameValue"
          field-title="使用者名稱"
          :field-name="block.userName.filedName"
          input-type="text"
          :rules="block.userName.rules"
        />
      </div>
      <div class="mb-3 w-1/2 px-2">
        <InputField
          v-model="userAge"
          field-title="年齡"
          :field-name="block.age.filedName"
          input-type="text"
          :rules="block.age.rules"
        />
      </div>
      <div class="w-1/2 px-2">
        <ElemenPlusSelect
          v-model="userGender"
          field-title="性別"
          :field-name="block.gender.filedName"
          :rules="block.gender.rules"
        />
      </div>
      <div class="w-1/2 px-2">
        <MulpipleSelect
          v-model="userSkill"
          field-title="技能"
          :field-name="block.skill.filedName"
          :rules="block.skill.rules"
          placeholder="請選擇技能"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import _ from 'lodash'
import InputField from '@/components/ValidateForm/InputFiled.vue'
import ElemenPlusSelect from '@/components/ValidateForm/ElemenPlusSelect.vue'
import MulpipleSelect from '@/components/ValidateForm/MulpipleSelect.vue'

const props = defineProps({
  block: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['updateUserName', 'updateUserAge', 'updateUserGender', 'updateUserSkill'])

const userNameValue = computed({
  get() {
    return props.block.userName.value
  },
  set(value) {
    console.log(value)
    emit('updateUserName', {
      uid: props.block.uid,
      value
    })
  }
})

const userAge = computed({
  get() {
    return props.block.age.value
  },
  set(value) {
    emit('updateUserAge', {
      uid: props.block.uid,
      value
    })
  }
})

const userGender = computed({
  get() {
    return props.block.gender.value
  },
  set(value) {
    emit('updateUserGender', {
      uid: props.block.uid,
      value
    })
  }
})

const userSkill = computed({
  get() {
    return _.cloneDeep(props.block.skill.value)
  },
  set(value) {
    emit('updateUserSkill', {
      uid: props.block.uid,
      value
    })
  }
})

defineOptions({
  name: 'FormBlock'
})
</script>

<style>
input {
  width: 100%;
}
</style>