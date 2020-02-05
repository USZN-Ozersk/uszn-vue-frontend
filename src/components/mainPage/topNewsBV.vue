<template>
    <v-layout column wrap pt-4>
        <v-flex>
        <p v-bind:class="{'subheading font-weight-medium' : getBvParams.bvFont == 'small', 'title' : getBvParams.bvFont == 'medium', 'headline font-weight-medium' : getBvParams.bvFont == 'large'}">Новости управления:</p>
        <v-flex xs12 v-for="post in getAllNews" :key="post.id">
            <v-layout>
                <v-flex shrink v-if="getBvParams.bvImages">
                    <v-img :src="require('../../assets/'+post.img)" width="150" aspect-ratio="1.5"></v-img> <!-- v-bind:class="{'hide' : !getBvParams.bvImages}" -->
                </v-flex>
                <v-flex grow>
                    <span v-bind:class="{'body-2' : getBvParams.bvFont == 'small', 'subheading' : getBvParams.bvFont == 'medium', 'headline' : getBvParams.bvFont == 'large'}">{{ post.name }}</span>
                </v-flex>
                <v-flex shrink>
                    <v-btn flat outline router-link :to="{ name: 'page', params: {id: post.id}}">Подробнее</v-btn>
                </v-flex>
            </v-layout>
        </v-flex>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
 computed: {
   ...mapGetters(['getAllNews', 'getBvParams'])
 }
}
</script>