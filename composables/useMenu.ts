import {createTree} from "~/util/tree/CreateTree";
import {sort} from "~/util/tree";
import {RoutePath} from "~/types/RoutePath";
import {computed} from "@nuxtjs/composition-api";
import {menu} from "~/util/menu";

export const parseRoutes = async (routes: RoutePath[], lang: string) => {
  const data = []
  for (const route of routes) {
    if (route.throughout) {
      data.push(route)
    } else {
      data.push({
        ...route,
        url: '/' + lang + route.url
      })
    }
  }

  console.log(data)
  const r = await createTree(data)
  console.log(r)
  return r
}


