<template>
  <v-container fluid>
    <v-row no-gutters justify="center" v-if="!getBadVision">
      <v-col cols="12" lg="6" md="8">
        <v-alert v-if="getError != ''" type="error">Ошибка загрузки данных!</v-alert>
        <v-card v-if="!getBadVision" flat tile class="d-flex flex-column blue-grey lighten-5">
          <h1>{{ getOnePage.page_name }}</h1>
          <span>{{ getOnePage.page_text }}</span>
        </v-card>
      </v-col>
      <v-col cols="12" lg="2" md="2">
      </v-col>
    </v-row>
    <v-row no-gutters justify="center" v-if="getBadVision">
      <v-col cols="12" lg="8">
        <div class="d-flex flex-column">
          <div class="d-flex flex-row align-self-center pb-3">
            <v-btn tile :color="getBvParams.bvColor" class="ml-1" outlined v-for="menu in getSubMenu(this.id)" :key="menu.menu_id" :to="{ name: 'page', params: { id: menu.menu_page }}">
                <span v-bind:class="{'caption font-weight-medium' : getBvParams.bvFont == 'small', 'body-2' : getBvParams.bvFont == 'medium', 'subheading font-weight-medium' : getBvParams.bvFont == 'large'}">{{ menu.menu_item }}</span>
            </v-btn>
          </div>
          <div class="d-flex flex-column flex-grow-1">
            <span class="text-center pb-2" v-bind:class="{'subtitle-2' : getBvParams.bvFont == 'small', 'title' : getBvParams.bvFont == 'medium', 'display-1' : getBvParams.bvFont == 'large'}">{{ getOnePage.page_name }}</span>
            <span v-bind:class="{'body-2' : getBvParams.bvFont == 'small', 'body-1' : getBvParams.bvFont == 'medium', 'title' : getBvParams.bvFont == 'large'}">{{ getOnePage.page_text }}</span>
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
      this.setError('')
      this.loadOnePage(this.id);  
    }
  },
  methods: {
    ...mapActions(['loadOnePage', 'setError'])
  },
  created() {
    this.loadOnePage(this.id);
  }
}
</script>
