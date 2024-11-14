<script setup>
import { useCounterStore } from '@/stores/counter'
import { useTheme } from 'vuetify'
const theme = useTheme()

const store = useCounterStore()

console.log((theme.global.current.value = 'dark'))
</script>
<template>
  <h1>Store</h1>
  <p>Name: {{ store.name }}</p>
  <p>Count: {{ store.count }}</p>
  <p>Double Count: {{ store.doubleCount }}</p>
  <button @click="store.increment">Incr</button>
  <button @click="store.$patch({ count: 6, name: 'seeni' })">rtest</button>
</template>
