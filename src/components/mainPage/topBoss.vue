<template>
    <v-layout align-start wrap justify-start>
        <v-flex xs12 pt-2>
            <v-card white min-height="533">
              <v-layout column>
              <v-flex px-3 pt-3>
                <span class="text-xs-left subheading font-weight-regular">Начальник управления:</span><br>
                <span class="text-xs-left subheading font-weight-light">Солодовникова Лилия Владимировна</span>
              </v-flex>
              <v-flex pa-3>
                <v-img :src="require('../../assets/nach.jpg')" aspect-ratio="0.9"></v-img>
              </v-flex>
              <v-flex px-3 pb-3>
                <span class="text-xs-left subheading font-weight-regular">Прием по личным вопросам:</span><br>
                <span class="text-xs-left subheading font-weight-light">Каждый вторник с 9:00 до 17:00, перерыв с 13:00 до 14:00</span>
              </v-flex>
              </v-layout>
            </v-card>
        </v-flex>
    </v-layout>
</template>


<!--     <v-layout >
          <v-flex>
        
          </v-flex>
        </v-layout>

        -->