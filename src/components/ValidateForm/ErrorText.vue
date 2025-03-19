<template>
  <ErrorMessage
    :name="fieldName"
    as="div"
    class="text-sm text-red-600"
  />
</template>

<script setup>
import { ErrorMessage } from 'vee-validate'

defineProps({
  fieldName: {
    type: String,
    required: true
  }
})
</script>