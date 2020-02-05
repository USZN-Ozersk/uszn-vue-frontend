<template>
  <v-layout align-start row wrap justify-start v-if="!this.$store.getters.get_adopted">
    <v-flex xs12 md6 pt-2>
      <v-card white min-height="533">
        <v-layout column pa-3>
          <v-flex>
            <span class="headline font-weight-light left mb-3">Новости управления</span>
          </v-flex>
          <v-flex>
            <v-card flat>
              <v-img :src="require('../../assets/'+getAllNews[0].img)" aspect-ratio="2.75"></v-img>
              <v-card-title primary-title>
                <span class="title text-xs-left mb-2">{{ getAllNews[0].name }}</span>
                <span class="text-xs-left">{{ getAllNews[0].text }}</span>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="blue-grey" router-link :to="{ name: 'page', params: {id: getAllNews[0].id}}">Подробнее</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>

    <v-flex xs12 md6 pt-2>
      <v-card white min-height="533">
        <v-layout column>

          <v-flex align-self-end mt-2 mb-1 mr-2>
            <v-btn color="blue-grey" class="mb-2">
              <div class="white--text">Все новости</div>
            </v-btn>
          </v-flex>

          <v-flex v-for="post in getAllNews" :key='post.id'>
            <v-layout row>
              <v-flex shrink ml-3>
                <v-img :src="require('../../assets/'+post.img)" width="150" aspect-ratio="1.5"></v-img>
              </v-flex>
              <v-flex>
                <v-layout column fill-height ma-0>
                  <v-flex>
                    <div class="subheading">{{ post.name }}</div>
                  </v-flex>
                  <v-flex align-self-end pa-0>
                    <v-btn small flat color="blue-grey" router-link :to="{ name: 'page', params: {id: post.id}}">
                      <span>Подробнее</span>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>

        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
 computed: {
   ...mapGetters(['getAllNews'])
 }
}
</script>
