<template>
  <div class="box">
    box
    <Message />
  </div>
</template>

<script setup>
import Message from '@/components/Message/index.vue'

useHead({
  title: 'DeepCss'
})
</script>

<style lang="scss" scoped>
.box {
  color: red;
  &:deep {
    .inner-box {
      color: red;
    }
  }
}
</style>