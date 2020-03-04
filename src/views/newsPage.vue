<template>
    <v-container>
        <v-row justify="center" v-if="!getBadVision">
            <v-col cols="12" lg="7">
                <v-card class="d-flex flex-column">
                    <v-img v-bind:src="getOneNews.news_img" aspect-ratio="2"/>
                    <v-card-title>{{ getOneNews.news_name }}</v-card-title>
                    <div v-html="getOneNews.news_text"></div>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3">
              <div class="pb-3"><span class="subtitle-1">Последние новости</span></div>
              <div class="d-flex flex-column pb-3" v-for="news in getFirstNews" :key="news.news_id">
                    <v-card class="d-flex flex-column">
                      <v-img v-bind:src="news.news_img" aspect-ratio="2.4"/>
                        <v-card-subtitle>
                          <router-link style="text-decoration: none; color: black;" :to="{ name: 'news', params: { id: news.news_id }}">{{ news.news_name }}</router-link>
                        </v-card-subtitle>
                      </v-card>
              </div>
            </v-col>
        </v-row>
        <v-row justify="center" v-if="getBadVision">
          <v-col cols="12" lg="10">
            <div class="d-flex flex-column flex-grow-1">
              <span class="text-center pb-2" v-bind:class="{'subtitle-2' : getBvParams.bvFont == 'small', 'title' : getBvParams.bvFont == 'medium', 'display-1' : getBvParams.bvFont == 'large'}">{{ getOneNews.news_name }}</span>
            <div v-if="getBvParams.bvImages"><v-img :src="getOneNews.news_img" aspect-ratio="1.3"></v-img></div>
            <span v-html="getOneNews.news_text" v-bind:class="{'hide' : !getBvParams.bvImages, 'body-2' : getBvParams.bvFont == 'small', 'body-1' : getBvParams.bvFont == 'medium', 'title' : getBvParams.bvFont == 'large'}"/>
            </div>
          </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  props: ['id'],
  computed: {
    ...mapGetters(['getOneNews', 'getFirstNews', 'getBadVision', 'getBvParams']),
  },
  watch: {
    $route() {
      this.loadOneNews(this.id);  
    }
  },
  methods: {
    ...mapActions(['loadOneNews'])
  },
  created() {
    this.loadOneNews(this.id);
  }
}
</script>