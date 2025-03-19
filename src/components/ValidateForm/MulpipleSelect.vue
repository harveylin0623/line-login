<template>
  <div>
    <p>{{ fieldTitle }}</p>
    <Field
      v-slot:default="{ field }"
      v-model="selectValue"
      :name="fieldName"
      :rules="rules"
    >
      <div>
        <el-select
          v-model="selectValue"
          v-bind="field"
          multiple
          :placeholder="placeholder"
        >
          <el-option
            v-for="item in skillList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
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
import _ from 'lodash'
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
    type: Array,
    required: true
  },
  rules: {
    type: Function,
    default: () => {}
  }
})

const skillList = ref([
  {
    label: 'html',
    value: 'html'
  },
  {
    label: 'css',
    value: 'css'
  },
  {
    label: 'js',
    value: 'js'
  }
])

const emit = defineEmits(['update:modelValue'])

const selectValue = computed({
  get() {
    return _.cloneDeep(props.modelValue)
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

defineOptions({
  name: 'MulpipleSelect'
})
</script>