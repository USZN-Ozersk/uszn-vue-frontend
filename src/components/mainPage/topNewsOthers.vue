<template>
  <v-card white raised class="d-flex flex-column align-right pa-3 mr-1 ml-1 mb-2" min-height="533">
      <div class="d-flex justify-end mb-2">
      <v-btn color="blue-grey white--text">
        Все новости
      </v-btn>
      </div>
      <div class="d-flex flex-column" v-for="n in 4" :key="n">
        <div class="d-flex flex-row mb-2">
          <div class="d-flex">
            <v-img :src="require('../../assets/'+getFirstNews[n].news_img)" min-width="150" max-width="150" aspect-ratio="1.5" class="mr-2"></v-img>
          </div>  
          <div class="d-flex flex-column flex-grow-1 justify-space-between">
            <div class="d-flex subheading">
              <span>{{ getFirstNews[n].news_name }}</span>
            </div>
            <div class="d-flex justify-end">  
              <v-btn small color="blue-grey" class="white--text" router-link :to="{ name: 'news', params: {id: getFirstNews[n].news_id}}">Подробнее</v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-card>
</template>


<script>
import { mapGetters } from 'vuex';
export default {
 computed: {
   ...mapGetters(['getFirstNews'])
 }
}
</script>
