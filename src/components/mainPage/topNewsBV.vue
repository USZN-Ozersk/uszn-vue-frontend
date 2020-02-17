<template>
    <div class="d-flex flex-column">
    <p v-bind:class="{'subheading font-weight-medium' : getBvParams.bvFont == 'small', 'title' : getBvParams.bvFont == 'medium', 'headline font-weight-medium' : getBvParams.bvFont == 'large'}">Новости управления:</p>
    <div class="d-flex flex-row" v-for="post in getFirstNews" :key="post.news_id">
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
</template>

<script>
import { mapGetters } from 'vuex';
export default {
 computed: {
   ...mapGetters(['getFirstNews', 'getBvParams'])
 }
}
</script>