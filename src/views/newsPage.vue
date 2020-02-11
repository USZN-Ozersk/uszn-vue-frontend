<template>
    <v-container>
        <v-row>
            <v-col>
                <div class="d-flex flex-column">
                    <v-img :src="require('../assets/'+getOneNews.news_img)" aspect-ratio="2"></v-img>
                    <h1>{{ getOneNews.news_name }}</h1>
                    <p>{{ getOneNews.news_text }}</p>
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
    ...mapGetters(['getOneNews', 'getError', 'getBadVision', 'getBvParams', 'getSubMenu']),
  },
  watch: {
    $route() {
      this.setError('')
      this.loadOneNews(this.id);  
    }
  },
  methods: {
    ...mapActions(['loadOneNews', 'setError'])
  },
  created() {
    this.loadOneNews(this.id);
  }
}
</script>