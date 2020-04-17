<template>
<v-container fluid>
    <v-row no-gutters justify="center">
        <v-col cols="12" lg="5" xs="12">
            <v-card tile class="d-flex flex-row ma-2">
                <v-card tile flat min-width="50%" max-width="50%" >
                    <v-img aspect-ratio="0.7" :src="require('../../assets/boss.jpg')"></v-img>
                </v-card>
                <v-card tile flat min-height="100%" class="d-flex flex-column">
                    <v-card-title class="display-1">Солодовникова<br>Лилия<br>Владимировна</v-card-title>
                    <v-card-subtitle class="title">Начальник Управления</v-card-subtitle>
                    <v-card-text>Прием по личным вопросам: ...</v-card-text>
                </v-card>
            </v-card>
        </v-col>
        <v-col cols="12" lg="5" xs="12">
            <v-card tile class="d-flex flex-row ma-2">
                <v-card tile flat width="50%" min-width="50%" max-width="50%">
                    <v-img aspect-ratio="0.7" :src="require('../../assets/boss2.jpg')"></v-img>
                </v-card>
                <v-card tile flat>
                    <v-card-title class="display-1">Петренко<br>Татьяна<br>Александровна</v-card-title>
                    <v-card-subtitle class="title">Заместитель начальника</v-card-subtitle>
                </v-card>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>