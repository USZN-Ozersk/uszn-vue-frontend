<template>
    <v-card white raised class="d-flex flex-column pa-3 mr-1 ml-1 mb-2" min-height="100%">
      <span class="headline font-weight-light left pb-3">Новости управления</span>
      <v-card class="d-flex flex-column" tile flat>
              <v-img v-bind:src="getFirstNews[0].news_img" aspect-ratio="2.5"/>
              <v-card-title>
                  <span class="text-xs-left">{{ getFirstNews[0].news_name }}</span>
              </v-card-title>
              <v-card-text>
                <span class="text-xs-left">{{ getFirstNews[0].news_text }}...</span>
              </v-card-text>
              <v-card-actions>
                <v-btn color="blue-grey white--text" router-link :to="{ name: 'news', params: {id: getFirstNews[0].news_id}}">Подробнее</v-btn>
              </v-card-actions>
            </v-card>
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