import { ref } from 'vue'

export function useBrojačStavki() {
  const brojač = ref(0)

  const postavi = (input: number) => {
    brojač.value = input
  }
  return {
    brojač,
    postavi
  }
}
