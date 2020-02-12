<template>
    <v-navigation-drawer app v-model="drawerState" temporary>
    <v-list class="pa-2 blue-grey lighten-5">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
                <span class="font-weight-bold blue-grey--text title text-uppercase">Навигация</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    <v-list class="pt-0">
      <v-list-item v-for="menu in getMainMenu" :key="menu.menu_id" router-link :to="{ name: 'page', params: { id: menu.menu_id }}" @click="setDrawer(false)">
        <v-list-item-content>
          <v-list-item-title><span class="title">{{ menu.menu_item }}</span></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters(['getDrawer', 'getMainMenu']),
        drawerState: {
            get () {
                return this.getDrawer
            },
            set (val) {
                this.setDrawer(val)
            }
        },
    },
    methods: {
        ...mapActions(['setDrawer']),
    },
}
</script>