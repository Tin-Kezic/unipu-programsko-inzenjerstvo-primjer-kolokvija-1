<script setup lang="ts">
import { useBrojačStavki } from '@/useBrojačStavki';
import TodoStavka from './components/ToDoStavka.vue'
import { onMounted, ref, watch, type Ref } from 'vue';
import { stavke, sortiraneStavke } from '@/main';
const { brojač, postavi } = useBrojačStavki()
onMounted(() => {
  watch(sortiraneStavke.value, () => { postavi(brojač.value + 1) })
})
</script>
<script>
</script>
<template>
    <main class="w-screen flex justify-center p-10 flex-col space-y-2">
      <div v-for="(stavka, index) in sortiraneStavke" >
        <TodoStavka
          :opis="stavka.opis"
          :zavrseno="stavka.završeno"
          :prioritet="stavka.prioritet"
          @ažuriraj-opis="(opis) => stavka.opis = opis"
          @ažuriraj-završeno="(završeno) => stavka.završeno = završeno"
        >
          <button
            v-for="i in ['+', '-', 'x']"
            class="bg-blue-700 w-10"
            @click="switch(i) {
              case '+': stavka.prioritet++
                break;
              case '-': stavka.prioritet--
                break;
              case 'x': sortiraneStavke.splice(index, 1)
                break;
            }"
          >
              {{ i }}
          </button>
        </TodoStavka>
      </div>
      <button
        class="flex justify-center bg-blue-700 text-white rounded-md w-fit p-10"
        @click="stavke.push({
            opis: 'Napiši opis...',
            završeno: false,
            prioritet: 0
          })"
        >
        ubaci novu praznu stavku
      </button>
    </main>
</template>