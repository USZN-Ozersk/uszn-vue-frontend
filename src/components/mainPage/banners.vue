<template>
<v-row no-gutters>
    <v-col cols="12" lg="2" sm="12" v-for="banner in banners" :key="banner.id">
        <v-card hover class="pa-2 ma-1">
            <a :href="banner.url"><v-img :alt="banner.alt" :src="require('../../assets/'+banner.name)"></v-img></a>
        </v-card>
    </v-col>
</v-row>
</template>

<script>
export default {
    data() {
        return {
            banners: [
                {
                    id: 1,
                    name: "banner1.jpg",
                    url: "https://www.gosuslugi.ru/",
                    alt: "Портал государственных услуг Российской Федерации",
                },
                {
                    id: 2,
                    name: "banner2.jpg",
                    url: "https://rosmintrud.ru/ministry/programms/demography",
                    alt: "Национальный проект «Демография»",
                },
                {
                    id: 3,
                    name: "banner3.jpg",
                    url: "http://minsoc74.ru/",
                    alt: "Министерство социальных отношений Челябинской области",
                },
                {
                    id: 4,
                    name: "banner4.jpg",
                    url: "http://www.ozerskadm.ru/",
                    alt: "Администрация Озерского городского округа Челябинской области",
                },
                {
                    id: 5,
                    name: "banner5.jpg",
                    url: "http://letters.kremlin.ru/",
                    alt: "Администрация Президента Российской Федерации",
                },
                {
                    id: 6,
                    name: "banner6.jpg",
                    url: "https://pravmin74.ru/",
                    alt: "Правительство Челябинской области",
                }
            ]
        }
    }
}
</script>