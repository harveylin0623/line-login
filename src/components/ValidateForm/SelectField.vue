<template>
  <div>
    <p>{{ fieldTitle }}</p>
    <Field
      v-slot:default="{ field }"
      v-model="selectValue"
      :name="fieldName"
    >
      <div>
        <select v-bind="field">
          <option
            v-for="item in selectList"
            :key="item.value"
            :value="item.value"
          >
            {{ item.title }}
          </option>
        </select>
        <ErrorMessage
          name="gender"
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
  modelValue: {
    type: [String, Number],
    required: true
  },
  selectList: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const selectValue = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})

defineOptions({
  name: 'SelectField'
})

</script>