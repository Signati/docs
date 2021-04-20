<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
      color="#F5F5FA"
      fixed
    >
      <v-list nav dense :expand="true">
                <span v-for="(item, i) in miniVariant" :key="i">
                <v-list-group
                  :value="true"
                  v-if="item.children.length > 0"
                  active-class="active"
                  group
                >
                    <template v-slot:activator>
                        <v-list-item-icon class="m-0 mr-2">
                              <v-icon>{{ item.icon }}</v-icon>
                         </v-list-item-icon>
                        <v-list-item-title class="ml-0 pl-0">
                            {{ item.name }}
                        </v-list-item-title>
                    </template>
                    <span v-for="(childone, k) in item.children" :key="k">

                    <v-list-group
                      v-if="childone.children.length > 0"
                      sub-group
                      class="ma-0 pa-0"
                    >
                        <template v-slot:activator
                                  style="background-color: #f6f9fc !important;border-color: #f6f9fc !important;">

                            <v-list-item-title class="ml-0 pl-0" style="position: relative;float: left;left: -15px;">
                                {{ childone.name }}
                            </v-list-item-title>
                        </template>
                        <FirstList v-for="(childtwo,index) in childone.children"
                                   :secondchild="false"
                                   :item="childtwo"
                                   :key="index"></FirstList>

                    </v-list-group>
                    <FirstList v-else
                               :secondchild="true"
                               :item="childone"
                    ></FirstList>
                    </span>

                </v-list-group>
                 <FirstList v-else :item="item"></FirstList>
                </span>
      </v-list>
    </v-navigation-drawer>
    <Toolbar v-model="drawer" :hidden-menu="true"></Toolbar>
    <v-navigation-drawer
      v-model="drawerRight"
      right
      clipped
      app
      fixed
    >
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick"/>
        <input type="hidden" name="hosted_button_id" value="LYAK7CBWDNVMY"/>
        <input type="image" width="250" height="80" src="/Paypal.png" border="0" name="submit"
               title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button"/>

      </form>

      <v-divider></v-divider>
      <v-list nav dense>
                <span v-for="(right, r) in menuRoutesRight" :key="r">
                <v-list-group
                  v-if="right.children.length > 0"
                  active-class="active"
                  group
                  :value="true"
                >
                    <template v-slot:activator>
                        <v-list-item-icon class="m-0 mr-2">
                              <v-icon>{{ right.icon }}</v-icon>
                         </v-list-item-icon>
                        <v-list-item-title class="ml-0 pl-0">
                            {{ right.name }}
                        </v-list-item-title>
                    </template>
                    <span v-for="(childone, k) in right.children" :key="k">

                    <v-list-group
                      v-if="childone.children.length > 0"
                      sub-group
                      class="ma-0 pa-0"
                    >
                        <template v-slot:activator
                                  style="background-color: #f6f9fc !important;border-color: #f6f9fc !important;">

                            <v-list-item-title class="ml-0 pl-0" style="position: relative;float: left;left: -15px;">
                                {{ childone.name }}
                            </v-list-item-title>
                        </template>
                        <FirstList v-for="(childtwo,index) in childone.children"
                                   :secondchild="true"
                                   :item="childtwo"
                                   :key="index"></FirstList>

                    </v-list-group>
                    <FirstList v-else
                               :secondchild="true"
                               :item="childone"
                    ></FirstList>
                    </span>

                </v-list-group>
                 <FirstList v-else :item="right"></FirstList>
                </span>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>

    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeMount,
  onMounted,
  ref,
  useRouter,
  useRoute,
  useStore
} from "@nuxtjs/composition-api";
import FirstList from "~/components/Menu/FirstList.vue";
import Toolbar from "~/components/core/toolbars/toolbar.vue";
import {mdiGithub} from '@mdi/js';
import {RoutePath} from "~/types/RoutePath";
import {isMobile, isTablet} from 'mobile-device-detect';
import {parseRoutes} from "~/composables/useMenu";
import {menu} from "~/util/menu";
import * as Cookies from "js-cookie";

export default defineComponent({
  components: {
    FirstList,
    Toolbar
  },
  setup() {
    const drawerRight = ref(true)
    const drawer = ref(true)
    const fixed = ref(false)
    const {getters, state, commit} = useStore()
    const menuRoutesRight = computed(() => {
      return getters['menu/routes']
    })
    const miniVariant = ref<RoutePath[]>([])
    const router = useRouter()
    const route = useRoute()
    const lang = computed(() => {
      return route.value.fullPath.split('/')[1]
    })
    onMounted(async () => {
      const progaming = Cookies.get('programming') ? Cookies.get('programming') : 'nodejs'
      console.log(progaming)
      // @ts-ignore
      let a = await parseRoutes(menu, progaming)
      miniVariant.value = a
    })
    onBeforeMount(() => {
      if (isMobile || isTablet) {
        drawer.value = false;
        drawerRight.value = false
      }
    })
    return {
      drawer,
      drawerRight,
      fixed,
      miniVariant,
      mdiGithub,
      menuRoutesRight,

    }
  }
})
</script>
<style>
html {
  font-family: "DM Sans";
}

</style>
