<template>
  <v-app>
    <drawer></drawer>
    <mainToolBar v-if="!getBadVision"></mainToolBar>
    <mainToolBarBadVision v-if="getBadVision"></mainToolBarBadVision>
    <v-content>
      
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'App',

  components: {
    mainToolBar: () => import('@/components/toolBar/mainToolBar'), // Основной тулбар
    mainToolBarBadVision: () => import('@/components/toolBar/mainToolBarBV'), // Основной тулбар
    drawer: () => import('@/components/drawer/drawer'),
  },

  data: () => ({
    //
  }),
  created() {
    this.loadMainMenu();
  },
  computed: {
    ...mapGetters(['getBadVision', 'getBvParams']) // Проксируем геттеры vuex
  },
  methods: {
    ...mapActions(['loadMainMenu'])
  }

};
</script>

<style>
.hide {
    visibility: hidden;
}
</style>