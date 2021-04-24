export const state = () => ({
  programming: {
    color: "#4CAF50",
    label: 'Node Js',
    icon: 'mdi-nodejs',
    path: 'nodejs',
    beta: false,
    disable: false
  }
})

export const mutations = {
  setProgramming(state: any, text: any) {
    state.programming = text
  }
}
