import { ref, readonly } from 'vue'

const showHint = ref(false)

export function useScrollHint() {
  const setShowHint = (value: boolean) => {
    showHint.value = value
  }

  return {
    showHint: readonly(showHint),
    setShowHint
  }
}