import {createTree} from "~/util/tree/CreateTree";
import {RoutePath} from "~/types/RoutePath";

export const parseRoutes = async (routes: RoutePath[], langP: string): Promise<RoutePath[]> => {
  const data = []
  for (const route of routes) {
    if (route.throughout) {
      data.push(route)
    } else {
      const find = route.langs.findIndex((lang) => {
        return lang.name === langP && lang.view
      })
      if (find > -1) {
        data.push({
          ...route,
          url: '/' + langP + route.url
        })
      }
    }
  }
  return await createTree(data)
}


