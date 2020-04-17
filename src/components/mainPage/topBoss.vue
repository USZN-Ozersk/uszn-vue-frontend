<template>
  <v-card class="d-flex flex-column white mr-1 ml-1 mb-2" min-height="100%">
    <div class="d-flex flex-column pa-3">
      <span class="text-xs-left subheading font-weight-regular">Начальник управления:</span><br>
      <span class="text-xs-left subheading font-weight-light">Солодовникова Лилия Владимировна</span>      
    </div>
    <div class="d-flex pl-3 pr-3">
      <v-img :src="require('../../assets/boss.jpg')" aspect-ratio="0.9"></v-img>
    </div>
    <div class="d-flex flex-column pa-3">
      <span class="text-xs-left subheading font-weight-regular">Прием по личным вопросам:</span><br>
      <span class="text-xs-left subheading font-weight-light">Каждый вторник с 9:00 до 17:00, перерыв с 13:00 до 14:00</span>
    </div>
  </v-card>
</template>