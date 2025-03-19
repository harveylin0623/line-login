<template>
  <div class="space-y-4 border-b border-b-gray-400 pb-5">
    <PermissionCategory
      v-for="(category, key) in blockData"
      :key="key"
      :title="key"
      :category="category"
    />
  </div>
</template>

<script setup>
import PermissionCategory from './PermissionCategory.vue'

defineProps({
  blockData: {
    type: Object,
    required: true
  }
})

defineOptions({
  name: 'PermissionBlock'
})
</script>
