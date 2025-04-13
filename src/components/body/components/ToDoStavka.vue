<script setup lang="ts">
import { ref, defineEmits, useTemplateRef, computed, Transition, onMounted, watch } from 'vue'
const props = defineProps<{
    opis: string,
    zavrseno: boolean,
    prioritet: number
}>()
let isChecked = computed(() => props.zavrseno)
let uređivanje = ref(false)
let noviOpis = props.opis
const dopuštenoUređivanje = computed(() => uređivanje.value && !isChecked.value)
const emit = defineEmits(['ažurirajOpis', 'ažurirajZavršeno'])
const handleAžurirajOpis = () => { emit('ažurirajOpis', noviOpis) }
const handleAžurirajZavršeno = () => { emit('ažurirajZavršeno', !isChecked.value) }
const unos = useTemplateRef("unosRef")
const uključiUređivanje = () => {
   if(props.zavrseno) return

   uređivanje.value = true
   unos.value!!.focus()
   noviOpis = props.opis
}
const isključiUređivanje = () => {
   uređivanje.value = false
   handleAžurirajOpis()
}
</script>
<template>
   <div class="bg-gray-900 w-5/6 h-10 rounded-md text-white flex justify-center items-center space-x-2">
      <p> {{ prioritet }} </p>
      <input
         type="checkbox"
         v-model="isChecked"
         class="accent-green-500 "
         @click="handleAžurirajZavršeno()"
      >
      <input
         id="textField" 
         v-if="dopuštenoUređivanje"
         class="w-50"
         :class="dopuštenoUređivanje ? 'w-60' : 'max-w-0'"
         type="text"
         ref="unosRef"
         v-model="noviOpis"
         :disabled="!dopuštenoUređivanje"
         @focusout="isključiUređivanje"
      />
      <p
         v-else
         class="w-60"
         :class="isChecked ? 'line-through' : ''"
         @dblclick="uključiUređivanje"
      >
         {{ props.opis }}
      </p>
      <slot></slot>
   </div>
</template>