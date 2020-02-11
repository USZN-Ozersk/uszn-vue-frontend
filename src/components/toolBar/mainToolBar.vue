<template>
<v-app-bar app >
  <div class="d-flex align-center" router-link to="/">
    <router-link to="/"><v-img alt="Vuetify Logo" class="shrink mr-2" contain src="../../assets/gerb.gif" transition="scale-transition" width="40" /></router-link>
  </div>
  <v-toolbar-title>
    <router-link style="text-decoration: none;" to="/"><span class="black--text">УСЗН Озерск</span></router-link>
  </v-toolbar-title>
  <v-spacer></v-spacer>
    
      <v-btn class="hidden-lg-and-up" icon @click="setDrawer(true)">
        <v-icon>fas fa-bars</v-icon>
      </v-btn>
    
   
            <v-menu offset-y open-on-hover v-for="menu in getMainMenu" :key="menu.menu_id">
                <template v-slot:activator="{ on }">
                <v-btn class="hidden-md-and-down" text :to="{ name: 'page', params: { id: menu.menu_id }}" v-on="on">{{ menu.menu_item }}</v-btn>
                </template>
                <v-list class="pa-0">
                  <v-list-item-group>
                    <v-list-item v-for="submenu in getSubMenu(menu.menu_id)" :key="submenu.menu_id" router-link :to="{ name: 'page', params: { id: submenu.menu_id }}">
                      <v-list-item-content>
                        <v-list-item-title>{{ submenu.menu_item }}</v-list-item-title>
                      </v-list-item-content>  
                    </v-list-item>
                  </v-list-item-group>  
                </v-list>
            </v-menu>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn class="hidden-md-and-down" icon v-on="on" color="indigo" @click="setBadVision(true)" dark>
                  <v-icon light>fas fa-low-vision</v-icon>
                </v-btn>
              </template>
              <span class="headline text-uppercase">Включить режим для слабовидящих</span>
            </v-tooltip>
   

</v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
    ...mapGetters(['getMainMenu', 'getSubMenu']) // Проксируем геттеры vuex
    },
    methods: {
    ...mapActions(['setBadVision', 'setDrawer']) // Проксируем действия vuex
    }
}
</script>