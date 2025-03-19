<template>
  <div>
    <p>{{ fieldTitle }}</p>
    <Field
      v-slot:default="{ field }"
      :name="fieldName"
      :rules="rules"
    >
      <div>
        <el-select
          v-model="selectValue"
          v-bind="field"
          :placeholder="placeholder"
          style="width: 100%"
          :empty-values="[null, undefined]"
        >
          <el-option
            v-for="gender in genderList"
            :key="gender.value"
            :label="gender.label"
            :value="gender.value"
          />
        </el-select>
        <ErrorMessage
          :name="fieldName"
          as="div"
          class="text-sm text-red-600"
        />
      </div>
    </Field>
  </div>
</template>

<script setup>
import { Field, ErrorMessage } from 'vee-validate'

const props = defineProps({
  fieldTitle: {
    type: String,
    required: true
  },
  fieldName: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    required: true
  },
  rules: {
    type: Function,
    default: () => {}
  }
})

const genderList = ref([
  {
    label: '請選擇',
    value: ''
  },
  {
    label: '男',
    value: 'm'
  },
  {
    label: '女',
    value: 'f'
  },
])

const emit = defineEmits(['update:modelValue'])

const selectValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    console.log(value)
    emit('update:modelValue', value)
  }
})

defineOptions({
  name: 'ElemenPlusSelect'
})

</script>