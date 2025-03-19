<template>
  <div>
    <button
      class="rounded border border-solid border-stone-900 bg-lime-600 px-3 py-1.5 text-red-700 dark:bg-slate-700 dark:text-amber-200"
      @click="changeColorMode"
    >
      switch dark mode
    </button>
  </div>
</template>

<script setup>
import { useDarkMode } from '@/composables/useDarkMode.js'

const { changeColorMode } = useDarkMode()

</script>