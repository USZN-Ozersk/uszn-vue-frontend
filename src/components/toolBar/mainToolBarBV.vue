<template>
    <!-- <v-app-bar app extended flat v-bind:class="{black : getBvParams.bvBackground == 'black', 'blue accent-1' : getBvParams.bvBackground == 'blue', 'white' : getBvParams.bvBackground == 'white'}"> -->
    <v-app-bar app extended flat v-bind:class="[getBvParams.bvBackground, getBvParams.bvText]">
        <!-- Основной слот -->
        
            <v-spacer></v-spacer>
            <div class="hidden-md-and-down">
            <v-btn :color="getBvParams.bvColor" outlined @click="setBvParams({param: 'bvImages', value: !getBvParams.bvImages})">
                <span class="caption font-weight-medium" v-if="getBvParams.bvImages">Скрыть изображения</span>
                <span class="caption font-weight-medium" v-if="!getBvParams.bvImages">Показать изображения</span>
            </v-btn>&nbsp;
            <span>Цвет фона:</span>
            <v-btn depressed color="grey lighten-3" @click="setBvParams({param: 'bvBackground', value: 'white'}), setBvParams({param: 'bvText', value: 'black--text'}), setBvParams({param: 'bvColor', value: 'black'})">
                <span class="subheading font-weight-medium button-toggle-width black--text">A</span>
            </v-btn>
            <v-btn depressed color="grey darken-3" @click="setBvParams({param: 'bvBackground', value: 'black'}), setBvParams({param: 'bvText', value: 'white--text'}), setBvParams({param: 'bvColor', value: 'white'})">
                <span class="subheading font-weight-medium button-toggle-width white--text">A</span>
            </v-btn>
            <v-btn depressed color="blue accent-2" @click="setBvParams({param: 'bvBackground', value: 'blue accent-1'}), setBvParams({param: 'bvText', value: 'black--text'}), setBvParams({param: 'bvColor', value: 'black'})">
                <span class="subheading font-weight-medium button-toggle-width black--text">A</span>
            </v-btn>&nbsp;
                <span>Размер шрифта:</span>
            <v-btn :color="getBvParams.bvColor" outlined @click="setBvParams({param: 'bvFont', value: 'small'})">
                <span class="body-2">A</span>
            </v-btn>
            <v-btn :color="getBvParams.bvColor" outlined @click="setBvParams({param: 'bvFont', value: 'medium'})">
                <span class="subheading">A</span>
            </v-btn>
            <v-btn :color="getBvParams.bvColor" outlined @click="setBvParams({param: 'bvFont', value: 'large'})">
                <span class="title">A</span>
            </v-btn>&nbsp;
            <v-btn :color="getBvParams.bvColor" outlined @click="setBadVision(false), setBvParams({param: 'bvBackground', value: 'blue-grey lighten-5'}), setBvParams({param: 'bvText', value: 'black--text'}), setBvParams({param: 'bvColor', value: 'black'})"><span class="caption font-weight-medium">Обычная версия</span></v-btn>
            </div>
            <v-spacer></v-spacer>
            
        <!-- ///  -->

        <!-- Слот расширения -->
        <v-spacer slot="extension"></v-spacer>
        <v-toolbar-items slot="extension" class="hidden-md-and-down">
            <v-btn :color="getBvParams.bvColor" class="ml-1" outlined v-for="menu in getMainMenu" :key="menu.menu_id" :to="{ name: 'page', params: { id: menu.menu_id }}">
                <span v-bind:class="{'caption font-weight-medium' : getBvParams.bvFont == 'small', 'body-2' : getBvParams.bvFont == 'medium', 'subheading font-weight-medium' : getBvParams.bvFont == 'large'}">{{ menu.menu_item }}</span>
            </v-btn>
        </v-toolbar-items>
        <v-spacer slot="extension"></v-spacer>
        <!-- /// -->
    </v-app-bar>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
   computed: {
       ...mapGetters(['getMainMenu', 'getBvParams'])
   },
   methods: {
       ...mapActions(['setBadVision', 'setBvParams'])
   }
}
</script>