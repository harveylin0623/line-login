<template>
  <div class="permission-box space-y-4">
    <PermissionBlock
      v-for="permission in permissionStore.permissionList"
      :key="permission.moduleName"
      :block-data="permission.permissions"
    />
  </div>
</template>

<script setup>
import { usePermissionStore } from '@/stores/permission'
import PermissionBlock from './PermissionBlock.vue'

const permissionStore = usePermissionStore()

defineOptions({
  name: 'PermissionBox'
})
</script>