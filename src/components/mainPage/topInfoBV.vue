<template>
    <v-layout row wrap>
        <v-flex xs12>
            <p class="text-xs-center" v-bind:class="{'subheading font-weight-medium' : getBvParams.bvFont == 'small', 'title' : getBvParams.bvFont == 'medium', 'headline font-weight-medium' : getBvParams.bvFont == 'large'}">Управление социальной защиты населения администрации Озерского городского округа <br> Челябинской области</p>
            <v-layout row>
                <v-flex xs12 md8>
                    <p v-bind:class="{'body-2 font-weight-medium' : getBvParams.bvFont == 'small', 'subheading font-weight-medium' : getBvParams.bvFont == 'medium', 'headline font-weight-medium' : getBvParams.bvFont == 'large'}">Адрес:&nbsp;
                    <span v-bind:class="{'body-2' : getBvParams.bvFont == 'small', 'subheading' : getBvParams.bvFont == 'medium', 'headline' : getBvParams.bvFont == 'large'}">456783, Челябинская обл., г. Озерск, ул. Космонавтов, 20</span></p>
                    <p v-bind:class="{'body-2 font-weight-medium' : getBvParams.bvFont == 'small', 'subheading font-weight-medium' : getBvParams.bvFont == 'medium', 'headline font-weight-medium' : getBvParams.bvFont == 'large'}">Контакты:&nbsp;
                    <span v-bind:class="{'body-2' : getBvParams.bvFont == 'small', 'subheading' : getBvParams.bvFont == 'medium', 'headline' : getBvParams.bvFont == 'large'}">телефон: (35130)6-66-84, факс: (35130)2-40-59, ksz@ozerskadm.ru</span></p>
                    <p v-bind:class="{'body-2 font-weight-medium' : getBvParams.bvFont == 'small', 'subheading font-weight-medium' : getBvParams.bvFont == 'medium', 'headline font-weight-medium' : getBvParams.bvFont == 'large'}">Прием граждан:&nbsp;
                    <span v-bind:class="{'body-2' : getBvParams.bvFont == 'small', 'subheading' : getBvParams.bvFont == 'medium', 'headline' : getBvParams.bvFont == 'large'}">Понедельник, Четверг 8:30 - 17:00, обед 13:00 - 14:00</span></p>
                </v-flex>
                <v-flex xs12 md4>
                    <p v-bind:class="{'body-2 font-weight-medium' : getBvParams.bvFont == 'small', 'subheading font-weight-medium' : getBvParams.bvFont == 'medium', 'headline font-weight-medium' : getBvParams.bvFont == 'large'}">Важные телефоны:<br>
                    <span v-bind:class="{'body-2' : getBvParams.bvFont == 'small', 'subheading' : getBvParams.bvFont == 'medium', 'headline' : getBvParams.bvFont == 'large'}">(35130)6-66-84 - Приемная,<br> (35130)2-17-93 - Отдел опеки,<br> (351)232-39-28 - Министерство социальных отношений</span></p>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
   computed: {
       ...mapGetters(['getBvParams'])
   }
}
</script>