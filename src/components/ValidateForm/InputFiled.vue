<template>
  <div>
    <p>{{ fieldTitle }}</p>
    <Field
      v-slot:default="{ field }"
      v-model="inputValue"
      :name="fieldName"
      :type="inputType"
      :rules="rules"
    >
      <div>
        <input
          v-bind="field"
          :placeholder="placeholder"
        />
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
  inputType: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    required: true
  },
  rules: {
    type: Function,
    default: () => {}
  }
})

const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})

defineOptions({
  name: 'InputField'
})

</script>