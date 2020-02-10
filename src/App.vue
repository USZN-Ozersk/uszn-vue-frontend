<template>
  <v-app>
    <drawer></drawer>
    <mainToolBar v-if="!getBadVision"></mainToolBar>
    <mainToolBarBadVision v-if="getBadVision"></mainToolBarBadVision>
    <v-content v-bind:class="[getBvParams.bvBackground, getBvParams.bvText]">
      <router-view></router-view>
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
    this.loadMainMenu(); // Запускаем действие vuex загрузки пунктов меню
    this.loadAllNews(); //Запускаем действие загрузки новостей
  },
  computed: {
    ...mapGetters(['getBadVision', 'getBvParams']) // Проксируем геттеры vuex
  },
  methods: {
    ...mapActions(['loadMainMenu', 'loadAllNews']) // Проксируем действия vuex
  }

};
</script>

<style>
.hide {
    visibility: hidden;
}
</style>