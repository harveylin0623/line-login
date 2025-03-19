<template>
  <div :class="[itemBaseWidth]">
    <input
      type="checkbox"
      :checked="checkItem.isChecked"
      @change="inputChange"
    />
    <span>{{ checkItem.title }}</span>
  </div>
</template>

<script setup>
import { usePermissionStore } from '@/stores/permission.js'

const props = defineProps({
  checkItem: {
    type: Object,
    required: true
  }
})

const permissionStore = usePermissionStore()

const itemBaseWidth = computed(() => props.checkItem.name === 'all' ? 'w-full' : 'w-1/4')

const inputChange = () => {
  permissionStore.updateCheckedStatus({
    ...props.checkItem,
    isChecked: !props.checkItem.isChecked
  })
}

defineOptions({
  name: 'CheckedItem'
})
</script>