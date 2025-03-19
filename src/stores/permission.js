import { defineStore } from 'pinia'

export const usePermissionStore = defineStore('permission', () => {
  const rolePermission = ref({})
  const permissionList = ref([])
  const isAllChecked = ref(false)

  const toggleAllChecked = () => {
    if (permissionList.value.length === 0) {
      isAllChecked.value = false
    }
    const checkedList = permissionList.value.reduce((prev, current) => {
      for(let level1 in current.permissions) {
        const allItem = current.permissions[level1].find(item => item.name === 'all')
        if (allItem !== undefined) {
          prev.push(allItem.isChecked)
        }
      }
      return prev
    }, [])
    isAllChecked.value = Array.from(new Set(checkedList)).every(item => item)
  }

  const toogleAllItem = (evt) => {
    const isChecked = evt.target.checked
    permissionList.value.forEach((item) => {
      for(let key in item.permissions) {
        const arr = item.permissions[key]
        arr.forEach((a) => {
          a.isChecked = isChecked
        })
      }
    })
    isAllChecked.value = isChecked
  }

  const handleAllItem = (payload) => { //修改全選的項目
    const targetPermission = permissionList.value.find(item => item.moduleName === payload.moduleName)
    const categoryList = targetPermission.permissions[payload.categoryName]
    const targetCategory = categoryList.find(item => item.name === payload.name)
    targetCategory.isChecked = payload.isChecked
    categoryList.forEach(item => {
      if (item.name !== 'all') {
        item.isChecked = payload.isChecked
      }
    })
    toggleAllChecked()
  }

  const handleSingleItem = (payload) => { //修改不是全選的選項
    const targetPermission = permissionList.value.find(item => item.moduleName === payload.moduleName)
    const categoryList = targetPermission.permissions[payload.categoryName]
    const targetCategory = categoryList.find(item => item.name === payload.name)
    targetCategory.isChecked = payload.isChecked
    const excludeAllList = categoryList.filter(item => item.name !== 'all')
    categoryList[0].isChecked = excludeAllList.every(item => item.isChecked)
    toggleAllChecked()
  }

  const updateCheckedStatus = (payload) => {
    if (payload.name === 'all') {
      handleAllItem(payload)
    } else {
      handleSingleItem(payload)
    }
  }

  const clear = () => {
    rolePermission.value = {}
    permissionList.value = []
    isAllChecked.value = false
  }

  return { rolePermission, permissionList, isAllChecked, toggleAllChecked, toogleAllItem, updateCheckedStatus, clear }
})