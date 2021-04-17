<template>
    <v-list-item active-class="light"
                 :to="statePropd.item.url"
                 dense
                 nuxt
                 style="min-height: 32px; !important;max-height: 32px !important; margin-bottom: 4px;"
                 :class="statePropd.secondchild ? 'ml-3':''"
    >
      <div v-if="statePropd.update" class="v-avatar flex-0-1-auto ml-n2"
           style="height:5px;min-width:5px;width:5px;background-color:#00C58E;border-color:#00C58E; margin-right: 3px !important;"
      ></div>
      <v-list-item-icon class="m-0 mr-2">
        <v-icon :color="statePropd.item.color?statePropd.item.color:''">{{ statePropd.item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title>{{ statePropd.item.name }}</v-list-item-title>
    </v-list-item>
</template>

<script lang="ts">
import { computed, defineComponent, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
    update: {
      type: Boolean,
      required: false,
    },
    secondchild: {
      type: Boolean,
      required: false,
    }
  },
  setup (props, {}) {
    const statePropd = computed(() => props)
    const store = useStore()
    return {
      statePropd
    }
  }
})
</script>

<style scoped>
.active {
  background-color: #f6f9fc !important;
  border-color: #f6f9fc !important;
}

.v-list-item.v-list-item.v-list-item--default {
  min-height: 32px;
}
</style>
