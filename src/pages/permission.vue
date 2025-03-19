<template>
  <div class="pt-2">
    <div class="container">
      <div class="mb-4 flex items-center border-b border-b-gray-400 pb-2">
        <input
          type="checkbox"
          :checked="permissionStore.isAllChecked"
          @change="permissionStore.toogleAllItem"
        />
        <span>全選</span>
      </div>
      <PermissionBox />
      <div class="mt-5 text-center">
        <button
          class="rounded bg-orange-400 px-3 py-1.5 text-center text-white"
          @click="updatePermission"
        >
          更新權限
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import _ from 'lodash'
import { usePermissionStore } from '@/stores/permission.js'
import permissionData from '@/assets/permissonList.js'
import roleData from '@/assets/rolePermission.js'
import PermissionBox from '@/components/PermissionBox/index.vue'

const permissionStore = usePermissionStore()

const createRolePermissonData = (roleData) => {
  const moduleName = Array.from(new Set(roleData.map((role) => role.module_name)))
  const result = moduleName.reduce((prev, current) => {
    const group = roleData.filter((item) => item.module_name === current)
    prev[current] = group
    return prev
  }, {})
  return result
}

const createPermissoinList = (rolePermission) => {
  if (_.isEmpty(rolePermission)) return []
  const result = permissionData.reduce((prev, current) => {
    const targetRolePermission = rolePermission[current.moduleName]

    for (let level1 in current.permissions) {
      let permissionItems = []
      for (let level2 in current.permissions[level1]) {
        permissionItems = permissionItems.concat(current.permissions[level1][level2])
      }
      const lists = permissionItems.reduce((prev2, current2) => {
        const isChecked = targetRolePermission.find((item) => item.name === current2) !== undefined
        prev2.push({
          moduleName: current.moduleName,
          categoryName: level1,
          title: current2,
          name: current2,
          isChecked,
        })
        return prev2
      }, [])
      const isAllChecked = lists.every(item => item.isChecked)
      lists.unshift({
        moduleName: current.moduleName,
        categoryName: level1,
        title: '全選',
        name: 'all',
        isChecked: isAllChecked
      })
      current.permissions[level1] = lists
    }
    prev.push(current)
    return prev
  }, [])
  return result
}

const updatePermission = () => {
  const result = permissionStore.permissionList.reduce((prev, current) => {
    for(const key in current.permissions) {
      const category = current.permissions[key]
      const excludeAllList = category.filter(item => item.name !== 'all')
      excludeAllList.forEach(item => {
        if (item.isChecked) prev.push(item.name)
      })
    }
    return prev
  }, [])
  console.log(result)
}

onMounted(() => {
  const rolePermission = createRolePermissonData(roleData)
  const permissionList = createPermissoinList(rolePermission)
  permissionStore.rolePermission = rolePermission
  permissionStore.permissionList = permissionList
  permissionStore.toggleAllChecked()
})

onBeforeUnmount(() => {
  permissionStore.clear()
})
</script>
