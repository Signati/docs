import {computed, useStore} from "@nuxtjs/composition-api";

export function useTheme() {
  const store = useStore()
  const programming = computed({
    get: () => {
      // @ts-ignore
      return store.state.theme.programming
    },
    set: (v) => {

    }
  })

  const setProgramming = (payload: any) => {
    // @ts-ignore
    return store.commit('theme/setProgramming', payload)
  }

  return {
    programming,
    setProgramming
  }
}
