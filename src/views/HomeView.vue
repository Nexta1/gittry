<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'

interface F {
  (x: number): void
}
type F2 = InstanceType<typeof TheWelcome>
const i = ref(1)
const ref1 = ref<F2>()
console.log(ref1.value?.x1)
onMounted(() => {
  console.log(ref1.value?.x1)
})
const c: F = (x: number): void => {
  i.value = 3
  console.log(i.value)
}
defineExpose({ x: i })
</script>

<template>
  <main>
    <button @click="c(1)">xxxx</button>
    {{ i }}
    <TheWelcome :i ref="ref1" />
  </main>
</template>
