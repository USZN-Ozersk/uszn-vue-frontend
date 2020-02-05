<template>
  <v-container fluid grid-list-md>
    <!-- первая строка блоков - информация об управлении -->
    <v-layout row wrap v-if="!getBadVision">
      <v-flex xs12 md10 lg8 offset-xs0 offset-md0 offset-lg1>
        <topInfo></topInfo>
      </v-flex>
      <v-flex xs12 md2>
        <topPhones v-if="!getBadVision"></topPhones>
      </v-flex>
    </v-layout>
    <!-- Информация об управлении для людей с плохим зрением -->
    <v-layout row wrap justify-center v-if="getBadVision">
      <v-flex xs12 md10 lg8 offset-xs0 offset-md0 offset-lg0>
        <topInfoBV></topInfoBV>
      </v-flex>
    </v-layout>

    <!-- Вторая строка блоков - Новости и руководитель -->
    <v-layout row wrap v-if="!getBadVision">
      <v-flex xs12 md10 lg8 offset-xs0 offset-md0 offset-lg1>
        <topNews></topNews>    
      </v-flex>
      <v-flex xs12 md2>
      <topBoss></topBoss>
      </v-flex>
    </v-layout>
    <!-- Новости людей с плохим зрением -->
    <v-layout row wrap v-if="getBadVision">
      <v-flex xs12 md10 lg8 offset-xs0 offset-md0 offset-lg2>
        <topNewsBV></topNewsBV>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import {mapGetters} from 'vuex';
export default {
components: {
  topInfo: () => import('@/components/mainPage/topInfo'), // Информация в заголовке страницы
  topInfoBV: () => import('@/components/mainPage/topInfoBV'), // Информация в заголовке страницы для слабовидящих
  topPhones: () => import('@/components/mainPage/topPhones'), // Информация в заголовке страницы
  topNews: () => import('@/components/mainPage/topNews'), // Новости на главной странице
  topNewsBV: () => import('@/components/mainPage/topNewsBV'), // Новости на главной странице для слабовидящих
  topBoss: () => import('@/components/mainPage/topBoss'), // Инфо о начальнике
},
computed: {
  ...mapGetters(['getBadVision']),
}

  
}
</script>
