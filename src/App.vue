<template>
  <v-app>
    <drawer></drawer>
    <mainToolBar v-if="!getBadVision"></mainToolBar>
    <mainToolBarBadVision v-if="getBadVision"></mainToolBarBadVision>
    <v-content v-if="getBadVision" v-bind:class="[getBvParams.bvBackground, getBvParams.bvText]">
      <router-view></router-view>
    </v-content>
    <v-content v-if="!getBadVision" style="background-color: #d4cdc4">
      <router-view></router-view>
    </v-content>
    <myfooter v-if="!getBadVision"></myfooter>
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
    myfooter: () => import('@/components/footer/footer'),
  },
  created() {
    this.loadMainMenu(); // Запускаем действие vuex загрузки пунктов меню
    this.loadFirstNews(); //Запускаем действие загрузки новостей
    this.loadNewsCount();
  },
  computed: {
    ...mapGetters(['getBadVision', 'getBvParams']) // Проксируем геттеры vuex
  },
  methods: {
    ...mapActions(['loadMainMenu', 'loadFirstNews', 'loadNewsCount']) // Проксируем действия vuex
  }

};
</script>

<style>
.hide img {
    display: none;
}
.size-img img {
  max-width: 100%;
}
</style>