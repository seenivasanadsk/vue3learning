<script setup>
import { ref, reactive } from 'vue'
const val = ref()
</script>

<template>
  {{ val }}
  <input type="text" v-model.lazy="val" />
</template>

<style scoped></style>
