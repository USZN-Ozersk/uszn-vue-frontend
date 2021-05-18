<template>
<v-row no-gutters>
    <v-col cols="12" lg="3" sm="12" v-for="info in infoblock" :key="info.id">
       <!-- <v-card class="d-flex ma-1 pa-2">
            <v-card flat tile min-width="50%" max-width="50%"><v-img aspect-ratio="0.8" :alt="info.alt" :src="require('../../assets/'+info.img)"></v-img></v-card>
            <v-card flat tile class="ml-2">
                <p class="subtitle-1">{{info.text1}}</p>
                <p class="font-weight-medium">{{info.text2}}</p>
                <p class="font-weight-medium">{{info.text3}}</p>
            </v-card>
        </v-card> -->
        <v-card class="ma-1">
            <v-img class="align-end" aspect-ratio="1.5" :alt="info.alt" :src="require('../../assets/'+info.img)">
                <v-card class="white--text" flat tile color="rgb(0, 0, 0, 0.5)">
                   <!-- <p class="title pa-3 ma-4">{{ info.text1 }}</p> -->
                   <v-card-title>{{info.text0}}<br>{{info.text1}}</v-card-title>
                </v-card>
            </v-img>
                <v-card-subtitle class="title font-weight-bold">{{info.text2}}<br>{{info.text3}}</v-card-subtitle>
        </v-card>
    </v-col>
</v-row>
</template>

<script>
export default {
    data() {
        return {
            infoblock: [
                {
                    id: 1,
                    img: "rojdenie.jpg",
                    alt: "Единовременное пособие при рождении ребенка",
                    text0: "Единовременное пособие при",
                    text1: "рождении ребенка",
                    text2: "174 семьи",
                    text3: "541 000 руб.",
                },
                {
                    id: 2,
                    img: "pervii.jpg",
                    alt: "Ежемесячная выплата при рождении первого ребенка",
                    text0: "Ежемесячная выплата при",
                    text1: "рождении первого ребенка",
                    text2: "381 семья",
                    text3: "16 000 000 руб.",
                },
                {
                    id: 3,
                    img: "tretii.jpg",
                    alt: "Ежемесячная выплата при рождении третьего ребенка",
                    text0: "Ежемесячная выплата при",
                    text1: "рождении третьего ребенка",
                    text2: "212 семей",
                    text3: "9 915 000 руб.",
                },
                {
                    id: 4,
                    img: "matkapit.jpg",
                    alt: "Региональный материнский капитал",
                    text0: "Региональный материнский",
                    text1: "капитал",
                    text2: "27 семей",
                    text3: "2 000 000 руб.",
                }
            ]
        }
    }
}
</script>