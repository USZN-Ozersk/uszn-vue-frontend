<template>
  <v-container fluid>
    <v-row no-gutters justify="center" v-if="!getBadVision">
      <v-col class="order-1 order-md-0" cols="12" lg="6" md="8">
        <v-card v-if="!getBadVision" class="size-img d-flex flex-column pa-3 mr-3 ml-3">
          <h1>{{ getOnePage.page_name }}</h1>
          <div v-html="getOnePage.page_text"></div>
        </v-card>
      </v-col>
      <v-col class="order-0 order-md-1" cols="12" lg="2" md="2">
      <v-card v-if="getSubMenu(this.id) != ''" class="d-flex flex-column">
        <span class="subtitle-1 font-weight-medium pl-3 pr-3 pt-3">Навигация</span>
      <v-list>
      <v-list-item v-for="menu in getSubMenu(this.id)" :key="menu.menu_id" router-link :to="setURL(menu)" @click="setDrawer(false)">
        <v-list-item-content>
          <v-list-item-title><span>{{ menu.menu_item }}</span></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
      </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center" v-if="getBadVision">
      <v-col cols="12" lg="8">
        <div class="d-flex flex-column">
          <div class="d-flex flex-row align-self-center pb-3">
            <v-btn tile :color="getBvParams.bvColor" class="ml-1" outlined v-for="menu in getSubMenu(this.id)" :key="menu.menu_id" :to="setURL(menu)">
                <span v-bind:class="{'caption font-weight-medium' : getBvParams.bvFont == 'small', 'body-2' : getBvParams.bvFont == 'medium', 'subheading font-weight-medium' : getBvParams.bvFont == 'large'}">{{ menu.menu_item }}</span>
            </v-btn>
          </div>
          <div class="d-flex flex-column flex-grow-1">
            <span class="text-center pb-2" v-bind:class="{'subtitle-2' : getBvParams.bvFont == 'small', 'title' : getBvParams.bvFont == 'medium', 'display-1' : getBvParams.bvFont == 'large'}">{{ getOnePage.page_name }}</span>
            <span class="size-img" v-bind:class="{'hide' : !getBvParams.bvImages, 'body-2' : getBvParams.bvFont == 'small', 'body-1' : getBvParams.bvFont == 'medium', 'title' : getBvParams.bvFont == 'large'}"><div v-html="getOnePage.page_text"></div></span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  props: ['id'],
  computed: {
    ...mapGetters(['getOnePage', 'getError', 'getBadVision', 'getBvParams', 'getSubMenu']),
  },
  watch: {
    $route() {
      this.loadOnePage(this.id);  
    }
  },
  methods: {
    ...mapActions(['loadOnePage']),
    setURL(menu) {
      if (menu.custom_link == false) { return '/page/'+menu.menu_id } else { return menu.custom_link_value }
    },
  },
  created() {
    this.loadOnePage(this.id);
  }
}
</script>
