<template>
  <div>
    <p>Name: {{ item.name }}</p>
    <div>
      Age: <input
        v-model="currentAge"
        type="number"
      />
    </div>
    <button @click="changeAge">change age</button>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const currentAge = computed({
  get() {
    return props.item.age
  },
  set(value) {
    props.item.changeAge(value)
  }
})

defineOptions({
  name: 'Employee'
})
</script>