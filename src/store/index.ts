import { createStore } from 'vuex'

const defaultState = {
  count: 0,
  title: 'vue3 + vite',
}

// Create a new store instance.
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++
    },
    setItem(state, index: string) {
      state.title = index
    },
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
