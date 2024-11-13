<!-- Child.vue -->
<script setup>
const models = defineModel('first-name')
const mod = defineModel()
function update() {
  models.value++
}
</script>

<template>
  <div>Parent bound v-model is: {{ models }} {{ mod }}</div>
  <button @click="update">
    <slot>Din</slot>
  </button>
</template>
