<template>
   <v-container fluid>
   <!-- <mysnackbar></mysnackbar> -->
   <v-row no-gutters justify="center">
      <v-col cols="12" lg="10">
        <div class="text-center mb-2"><v-sheet color="red lighten-2" class="white--text">Сайт работает в тестовом режиме.</v-sheet></div>
      </v-col>
   </v-row>
  
  <v-row no-gutters justify="center">
      <v-col cols="12" lg="10">
        <v-card><v-img alt="75" src="../assets/baner.jpg" aspect-ratio="7"></v-img></v-card>
      </v-col>
    </v-row>

    <!-- <v-row no-gutters justify="center">
      <v-col cols="12" lg="10">
        <a href="/anniversary2020"><v-card><v-img alt="2020" src="../assets/baner2.jpg" aspect-ratio="7"></v-img></v-card></a>
      </v-col>
    </v-row> -->

  <!-- первая строка блоков - информация об управлении -->
    <v-row no-gutters justify="center" v-if="!getBadVision">
      <v-col cols="12" lg="4" md="5" sm="12">
        <topTitle>></topTitle>
      </v-col>
      <v-col cols="12" lg="4" md="5" sm="12">
        <topInfo></topInfo>
      </v-col>
      <v-col cols="12" lg="2" md="2" sm="12">
        <topPhones v-if="!getBadVision"></topPhones>
      </v-col>
    </v-row>
    <!-- Информация об управлении для людей с плохим зрением -->
    <v-row no-gutters justify="center" v-if="getBadVision">
      <v-col cols="12" sm="12">
        <topInfoBV></topInfoBV>
      </v-col>
    </v-row>

    <!-- Вторая строка блоков - Новости и руководитель -->
    <v-row class="pt-2" no-gutters justify="center" v-if="!getBadVision">
      <v-col cols="12" lg="4" md="5" sm="12">
        <topNewsFirst></topNewsFirst>    
      </v-col>
      <v-col cols="12" lg="4" md="5" sm="12">
        <topNewsOthers></topNewsOthers>    
      </v-col>
      <v-col cols="12" lg="2" md="2" sm="12">
      <topBoss></topBoss>
      </v-col>
    </v-row>
    <!-- Новости людей с плохим зрением -->
    <v-row no-gutters justify="center" v-if="getBadVision">
      <v-col cols="12" sm="10">
        <topNewsBV></topNewsBV>
      </v-col>
    </v-row>

    <!-- Третья строка блоков - Короткая информация -->
    <v-row class="pt-2" no-gutters justify="center" v-if="!getBadVision">
      <v-col cols="12" lg="10" sm="12">
        <div class="d-flex pa-2 align-self-center">
        <span class="title font-weight-light">Управление социальной защиты населения в цифрах: назначение детских пособий по состоянию на 1 октября 2020 года.</span>
        </div>
        <shortInfo></shortInfo>
      </v-col>
    </v-row>

    <!-- Четвертая строка блоков - Баннеры -->
    <v-row class="pt-2" no-gutters justify="center" v-if="!getBadVision">
      <v-col cols="12" lg="10" sm="12">
        <div class="d-flex pa-2 align-self-center">
        <span class="title font-weight-light">Полезные ссылки:</span>
        </div>
        <banners></banners>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {mapGetters} from 'vuex';
export default {
components: {
  topTitle: () => import('@/components/mainPage/topTitle'), // Название в заголовке страницы
  topInfo: () => import('@/components/mainPage/topInfo'), // Информация в заголовке страницы
  topInfoBV: () => import('@/components/mainPage/topInfoBV'), // Информация в заголовке страницы для слабовидящих
  topPhones: () => import('@/components/mainPage/topPhones'), // Информация в заголовке страницы
  topNewsFirst: () => import('@/components/mainPage/topNewsFirst'), // Новости на главной странице
  topNewsOthers: () => import('@/components/mainPage/topNewsOthers'), // Новости на главной странице
  topNewsBV: () => import('@/components/mainPage/topNewsBV'), // Новости на главной странице для слабовидящих
  topBoss: () => import('@/components/mainPage/topBoss'), // Инфо о начальнике
  shortInfo: () => import('@/components/mainPage/shortInfo'),
  banners:() => import('@/components/mainPage/banners'),
  //mysnackbar:() => import('@/components/mainPage/snackbar'),
},
computed: {
  ...mapGetters(['getBadVision', 'getBvParams']),
}

  
}
</script>
