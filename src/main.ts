import './assets/main.css'

import { computed, createApp, ref, type Ref } from 'vue'
import App from './App.vue'

type Stavka = {
    opis: string;
    završeno: boolean;
    prioritet: number;

}
export const stavke: Ref<Stavka[]> = ref([{
    opis: 'Implementirati uklanjanje',
    završeno: false,
    prioritet: 1,
 },
 {
    opis: 'Dodati text edit',
    završeno: true,
    prioritet: 2,
 },
 {
    opis: 'Implementirati pomicanje',
    završeno: false,
    prioritet: 4,
 },
 {
    opis: 'Dodati date',
    završeno: false,
    prioritet: 5,
 },
 {
    opis: 'Implementirati promjenu boje',
    završeno: false,
    prioritet: 6,
 }]
)

export const sortiraneStavke = computed(() =>
    stavke.value.sort((a, b) => b.prioritet - a.prioritet)
  )

createApp(App).mount('#app')
