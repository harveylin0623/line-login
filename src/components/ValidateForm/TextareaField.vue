<template>
  <div>
    <p>{{ fieldTitle }}</p>
    <Field
      v-slot:default="{ field }"
      v-model="inputValue"
      :name="fieldName"
    >
      <div>
        <textarea
          v-bind="field"
          :placeholder="placeholder"
        ></textarea>
        <ErrorMessage
          name="remark"
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
    type: [String, Number],
    required: true
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
  name: 'TextareaField'
})
</script>