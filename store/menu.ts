import { RoutePath } from "~/types/RoutePath";

interface MenuState {
  routes: RoutePath[]
}

export const state = () => ({
  routes: [
    {
      id: 2,
      name: 'aa',
      level: '1',
      children: [],
      icon: '',
      url: '',
      isActive: 1,
      fatherID: 0


    }
  ]
})
export const mutations = {
  setRoutes(state: MenuState, routePaths: RoutePath[]) {
    console.log('dadad')
    state.routes = routePaths
  }
}

export const getters = {
  routes: (state: MenuState) => {
    return state.routes
  }
}
