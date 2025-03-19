<template>
  <div>
    <p class="mb-4">{{ title }}</p>
    <div class="flex flex-wrap">
      <CheckItem
        v-for="checkItem in category"
        :key="checkItem.name"
        :check-item="checkItem"
      />
    </div>
  </div>
</template>

<script setup>
import CheckItem from './CheckItem.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  category: {
    type: Array,
    required: true
  }
})

defineOptions({
  name: 'PermissionCategory'
})
</script>