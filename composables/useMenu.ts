import {createTree} from "~/util/tree/CreateTree";
import {sort} from "~/util/tree";
import {RoutePath} from "~/types/RoutePath";
import {computed} from "@nuxtjs/composition-api";
import {menu} from "~/util/menu";

export const parseRoutes = async (routes: RoutePath[], langP: string) => {
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

  console.log(data)
  const r = await createTree(data)
  console.log(r)
  return r
}


