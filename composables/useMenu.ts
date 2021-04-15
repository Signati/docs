import {createTree} from "~/util/tree/CreateTree";
import {sort} from "~/util/tree";
import {RoutePath} from "~/types/RoutePath";
import {computed} from "@vue/composition-api";
import {menu} from "~/util/menu";

const parseRoutes = async (routes: RoutePath[], lang: string) => {
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

  return await sort({
    items: data,
    comparisonProperty: 'level',
    subArrayName: 'children'
  })
}

export function useMenu(lang: string) {

  const paths = computed(() => {
    return parseRoutes(menu, lang)
  })
  return {
    paths
  }
}
