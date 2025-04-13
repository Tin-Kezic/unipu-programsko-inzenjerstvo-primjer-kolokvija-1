<script setup lang="ts">
import { useBrojačStavki } from '@/useBrojačStavki'
import { onMounted, watch } from 'vue'
import { sortiraneStavke } from '@/main'

const { brojač, postavi } = useBrojačStavki()

onMounted(() => {
  watch(sortiraneStavke.value, () => { postavi(brojač.value + 1) })
})
</script>
<template>
  <header class="bg-gray-300 text-center w-screen">
    <slot></slot>
    {{ brojač }}
  </header>
</template>