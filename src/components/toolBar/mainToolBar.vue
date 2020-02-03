<template>
<v-app-bar app >
  <div class="d-flex align-center">
    <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="../../assets/gerb.gif" transition="scale-transition" width="40" />
  </div>
  <v-toolbar-title>УСЗН Озерск</v-toolbar-title>
  <v-spacer></v-spacer>
    
      <v-btn class="hidden-lg-and-up" flat icon @click="setDrawer(true)">
        <v-icon>fas fa-bars</v-icon>
      </v-btn>
    
   
            <v-menu offset-y open-on-hover v-for="menu in getMainMenu" :key="menu.id">
                <template v-slot:activator="{ on }">
                <v-btn class="hidden-md-and-down" text="true" v-on="on">{{ menu.name }}</v-btn>
                </template>
                <v-list class="pa-0">
                  <v-list-item-group>
                    <v-list-item v-for="submenu in getSubMenu(menu.id)" :key="submenu.id" router-link to="/">
                      <v-list-item-content>
                        <v-list-item-title>{{ submenu.name }}</v-list-item-title>
                      </v-list-item-content>  
                    </v-list-item>
                  </v-list-item-group>  
                </v-list>
            </v-menu>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn class="hidden-md-and-down" flat icon v-on="on" color="indigo" @click="setBadVision(true)" dark>
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