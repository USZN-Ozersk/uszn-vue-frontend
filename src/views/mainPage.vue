<template>
  <v-container fluid>
  <!-- первая строка блоков - информация об управлении -->
    <v-row no-gutters justify="center" v-if="!getBadVision">
      <v-col lg="4" md="5" sm="12">
        <topTitle>></topTitle>
      </v-col>
      <v-col lg="4" md="5" sm="12">
        <topInfo></topInfo>
      </v-col>
      <v-col lg="2" md="2" sm="12">
        <topPhones v-if="!getBadVision"></topPhones>
      </v-col>
    </v-row>
    <!-- Информация об управлении для людей с плохим зрением -->
    <v-row no-gutters justify="center" v-if="getBadVision">
      <v-col sm="12">
        <topInfoBV></topInfoBV>
      </v-col>
    </v-row>

    <!-- Вторая строка блоков - Новости и руководитель -->
    <v-row no-gutters justify="center" v-if="!getBadVision">
      <v-col lg="4" md="5" sm="12">
        <topNewsFirst></topNewsFirst>    
      </v-col>
      <v-col lg="4" md="5" sm="12">
        <topNewsOthers></topNewsOthers>    
      </v-col>
      <v-col lg="2" md="2" sm="12">
      <topBoss></topBoss>
      </v-col>
    </v-row>
    <!-- Новости людей с плохим зрением -->
    <v-row no-gutters justify="center" v-if="getBadVision">
      <v-col sm="12">
        <topNewsBV></topNewsBV>
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
},
computed: {
  ...mapGetters(['getBadVision', 'getBvParams']),
}

  
}
</script>
