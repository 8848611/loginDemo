<script setup>
import { ref } from 'vue'

defineProps({
  msg: "阿斯頓發的",
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
