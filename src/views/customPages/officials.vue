<template>
<v-container fluid>
    <v-row no-gutters justify="center" v-if="!getBadVision">
        <v-col cols="12" lg="5" sm="12">
            <v-card tile class="d-flex flex-row ma-2">
                <v-card tile flat min-width="50%" max-width="50%" >
                    <v-img aspect-ratio="0.7" :src="require('../../assets/boss.jpg')"></v-img>
                </v-card>
                <v-card tile flat min-height="100%" class="d-flex flex-column">
                    <v-card-title class="display-1">Солодовникова<br>Лилия<br>Владимировна</v-card-title>
                    <v-card-subtitle class="title">Начальник Управления</v-card-subtitle>
                    <v-card-text class="subtitle-2">Образование: высшее.<br>В сфере социальной защиты населения работает с 1994 года.</v-card-text>
                    <v-card-text class="subtitle-2">Телефон: (35130) 4-53-32</v-card-text>
                    <v-card-text class="subtitle-2">Прием по личным вопросам каждый вторник с 9:00 до 17:00 по предварительной записи.<br>Запись по телефону: (35130)5-66-84.</v-card-text>
                </v-card>
            </v-card>
        </v-col>
        <v-col cols="12" lg="5" xs="12">
            <v-card tile class="d-flex flex-row ma-2">
                <v-card tile flat min-width="50%" max-width="50%">
                    <v-img aspect-ratio="0.7" :src="require('../../assets/boss2.jpg')"></v-img>
                </v-card>
                <v-card tile flat min-height="100%" class="d-flex flex-column">
                    <v-card-title class="display-1">Петренко<br>Татьяна<br>Александровна</v-card-title>
                    <v-card-subtitle class="title">Заместитель начальника</v-card-subtitle>
                    <v-card-text class="subtitle-2">Образование: высшее.<br>В сфере социальной защиты населения работает с 1999 года.</v-card-text>
                    <v-card-text class="subtitle-2">Телефон: (35130) 2-46-07</v-card-text>
                    <v-card-text class="subtitle-2">Прием по личным вопросам каждый вторник с 9:00 до 17:00 по предварительной записи.<br>Запись по телефону: (35130)5-66-84.</v-card-text>
                </v-card>
            </v-card>
        </v-col>
    </v-row>

    <v-row no-gutters justify="center" v-if="getBadVision">
         <v-col cols="12" lg="5" sm="12">
            <v-card flat tile class="d-flex flex-row ma-2" v-bind:class="getBvParams.bvBackground">
                <v-card tile flat min-width="50%" max-width="50%" v-if="getBvParams.bvImages">
                    <v-img aspect-ratio="0.7" :src="require('../../assets/boss.jpg')"></v-img>
                </v-card>
                <v-card tile flat min-height="100%" class="d-flex flex-column" v-bind:class="getBvParams.bvBackground">
                    <v-card-title v-bind:class="{'headline' : getBvParams.bvFont == 'small', 'display-1' : getBvParams.bvFont == 'medium', 'display-2' : getBvParams.bvFont == 'large'}"><span v-bind:class="getBvParams.bvText">Солодовникова<br>Лилия<br>Владимировна</span></v-card-title>
                    <v-card-subtitle v-bind:class="{'subtitle-1' : getBvParams.bvFont == 'small', 'title' : getBvParams.bvFont == 'medium', 'headline' : getBvParams.bvFont == 'large'}"><span v-bind:class="getBvParams.bvText">Начальник Управления</span></v-card-subtitle>
                    <v-card-text v-bind:class="{'subtitle-2' : getBvParams.bvFont == 'small', 'subtitle-1' : getBvParams.bvFont == 'medium', 'title' : getBvParams.bvFont == 'large'}"><span v-bind:class="getBvParams.bvText">Образование: высшее.<br>В органах местного самоуправления Озерского городского округа работает с 1994 года.<br><br>
                    Телефон: (35130) 4-53-32<br><br>
                    Прием по личным вопросам каждый вторник с 9:00 до 17:00 по предварительной записи.<br>Запись по телефону: (35130)5-66-84.</span></v-card-text>
                </v-card>
            </v-card>
        </v-col>
        <v-col cols="12" lg="5" sm="12">
            <v-card flat tile class="d-flex flex-row ma-2" v-bind:class="getBvParams.bvBackground">
                <v-card tile flat min-width="50%" max-width="50%" v-if="getBvParams.bvImages">
                    <v-img aspect-ratio="0.7" :src="require('../../assets/boss2.jpg')"></v-img>
                </v-card>
                <v-card tile flat min-height="100%" class="d-flex flex-column" v-bind:class="getBvParams.bvBackground">
                    <v-card-title v-bind:class="{'headline' : getBvParams.bvFont == 'small', 'display-1' : getBvParams.bvFont == 'medium', 'display-2' : getBvParams.bvFont == 'large'}"><span v-bind:class="getBvParams.bvText">Петренко<br>Татьяна<br>Александровна</span></v-card-title>
                    <v-card-subtitle v-bind:class="{'subtitle-1' : getBvParams.bvFont == 'small', 'title' : getBvParams.bvFont == 'medium', 'headline' : getBvParams.bvFont == 'large'}"><span v-bind:class="getBvParams.bvText">Заместитель начальника</span></v-card-subtitle>
                    <v-card-text v-bind:class="{'subtitle-2' : getBvParams.bvFont == 'small', 'subtitle-1' : getBvParams.bvFont == 'medium', 'title' : getBvParams.bvFont == 'large'}"><span v-bind:class="getBvParams.bvText">Образование: высшее.<br>В органах местного самоуправления Озерского городского округа работает с 1999 года.<br><br>
                    Телефон: (35130) 2-46-07<br><br>
                    Прием по личным вопросам каждый вторник с 9:00 до 17:00 по предварительной записи.<br>Запись по телефону: (35130)5-66-84.</span></v-card-text>
                </v-card>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
     computed: {
    ...mapGetters(['getBadVision', 'getBvParams'])
  }
}
</script>