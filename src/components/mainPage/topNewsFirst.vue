<template>
    <v-card white raised class="d-flex flex-column pa-3 mr-2" min-height="533">
      <span class="headline font-weight-light left pb-3">Новости управления</span>
      <v-card class="d-flex flex-column" tile flat>
              <v-img :src="require('../../assets/'+getAllNews[0].img)" aspect-ratio="2.75"></v-img>
              <v-card-title>
                  <span class="text-xs-left">{{ getAllNews[0].name }}</span>
              </v-card-title>
              <v-card-text>
                <span class="text-xs-left">{{ getAllNews[0].text }}</span>
              </v-card-text>
              <v-card-actions>
                <v-btn color="blue-grey white--text" router-link :to="{ name: 'page', params: {id: getAllNews[0].id}}">Подробнее</v-btn>
              </v-card-actions>
            </v-card>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
 computed: {
   ...mapGetters(['getAllNews'])
 }
}
</script>