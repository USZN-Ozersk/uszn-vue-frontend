<template>
    <v-container fluid>
        <v-row no-gutters justify="center" v-if="!getBadVision">
            <v-col cols="12" lg="8" md="10" sm="12">
                <div class="d-flex pa-2 mb-2"><span class="headline font-weight-light">Новости управления социальной защиты</span></div>
                <v-card white raised class="d-flex flex-row mb-2 pa-3" v-for="news in this.getNewsPage" :key="news.news_id">
                <div class="d-flex">
                    <v-img max-width="300" min-width="300" :src="news.news_img" aspect-ratio="1.4"/>
                <div class="d-flex flex-column flex-grow-1 pa-2">
                    <span class="mb-1 headline">{{ news.news_name }}</span>
                    <span>{{ news.news_text }}...</span>
                </div>
                </div>
                <div class="d-flex align-end">
                    <v-btn color="blue-grey" class="white--text" router-link :to="{ name: 'news', params: {id: news.news_id}}">Подробнее</v-btn>
                </div>
                </v-card>
                  <div class="text-center">
                    <v-pagination
                      v-model="page"
                      :length="this.getNewsPageCount"
                      :total-visible="5"
                      @input="onPageChange(page)"
                      prev-icon="fas fa-angle-left"
                      next-icon="fas fa-angle-right"
                      color="blue-grey"
                    ></v-pagination>
              </div>
            </v-col>
        </v-row>
        <v-row no-gutters justify="center" v-if="getBadVision">
          <v-col cols="12" lg="8" md="10">
          <div class="d-flex flex-column">
            <p v-bind:class="{'subheading font-weight-medium' : getBvParams.bvFont == 'small', 'title' : getBvParams.bvFont == 'medium', 'headline font-weight-medium' : getBvParams.bvFont == 'large'}">Новости управления социальной защиты населения</p>
          <div class="d-flex flex-row" v-for="post in getNewsPage" :key="post.news_id">
            <div class="d-flex pa-2" v-if="getBvParams.bvImages">
              <v-img v-bind:src="post.news_img" width="150" aspect-ratio="1.5"></v-img>
            </div>
            <div class="d-flex pa-2 flex-grow-1">
              <span v-bind:class="{'body-2' : getBvParams.bvFont == 'small', 'subheading' : getBvParams.bvFont == 'medium', 'headline' : getBvParams.bvFont == 'large'}">{{ post.news_name }}</span>
            </div>
            <div class="d-flex pa-2">
            <v-btn tile :color="getBvParams.bvColor" class="ml-1" outlined router-link :to="{ name: 'news', params: {id: post.news_id}}">
                <span v-bind:class="{'caption font-weight-medium' : getBvParams.bvFont == 'small', 'body-2' : getBvParams.bvFont == 'medium', 'subheading font-weight-medium' : getBvParams.bvFont == 'large'}">Подробнее</span>
            </v-btn>
            </div>
            </div>
            </div>
            <div class="d-flex flex-grow-1 justify-center">
              <v-btn v-for="n in this.getNewsPageCount" :key="n" tile :color="getBvParams.bvColor" class="ml-1" outlined router-link :to="{ name: 'listNews', params: {id: n}}">
                <span v-bind:class="{'caption font-weight-medium' : getBvParams.bvFont == 'small', 'body-2' : getBvParams.bvFont == 'medium', 'subheading font-weight-medium' : getBvParams.bvFont == 'large'}">{{ n }}</span>
            </v-btn>
            </div>
          </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  data() {
    return {
      page: parseInt(this.id),
    }
  },
  props: ['id'],
  computed: {
    ...mapGetters(['getNewsPage', 'getNewsPageCount', 'getBadVision', 'getBvParams']),
  },
  watch: {
    $route() {
      this.loadNewsPage(this.id);  
    }
  },
  methods: {
    ...mapActions(['loadNewsPage']),
    onPageChange(page) {
      this.$router.push({ name: 'listNews', params: { id: page }})
    }
  },
  created() {
    this.loadNewsPage(this.id);
  }
}
</script>