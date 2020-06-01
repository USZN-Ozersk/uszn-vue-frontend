<template>
    <div class="d-flex flex-column">
        <div class="d-flex justify-center">
            <span class="text-xs-center" v-bind:class="{'subheading font-weight-medium' : getBvParams.bvFont == 'small', 'title' : getBvParams.bvFont == 'medium', 'headline font-weight-medium' : getBvParams.bvFont == 'large'}">Управление социальной защиты населения администрации Озерского городского округа Челябинской области</span>
        </div>
        <div class="d-flex flex-row justify-center">
            <div class="d-flex justify-space-around flex-column pr-2">
                    <span v-bind:class="{'body-2' : getBvParams.bvFont == 'small', 'subheading' : getBvParams.bvFont == 'medium', 'headline' : getBvParams.bvFont == 'large'}"><b>Адрес:</b> 456781, Челябинская обл., г. Озерск, ул. Космонавтов, 20</span>
                    <span v-bind:class="{'body-2' : getBvParams.bvFont == 'small', 'subheading' : getBvParams.bvFont == 'medium', 'headline' : getBvParams.bvFont == 'large'}"><b>Контакты:</b> телефон: (35130)5-66-84, факс: (35130)2-40-59, ksz@ozerskadm.ru</span>
                    <span v-bind:class="{'body-2' : getBvParams.bvFont == 'small', 'subheading' : getBvParams.bvFont == 'medium', 'headline' : getBvParams.bvFont == 'large'}"><b>Прием граждан:</b> Понедельник, Четверг 8:30 - 17:00, перерыв 13:00 - 14:00</span>
            </div>
            <div class="d-flex justify-space-around flex-column pl-2">
                <span v-bind:class="{'body-2 font-weight-medium' : getBvParams.bvFont == 'small', 'subheading font-weight-medium' : getBvParams.bvFont == 'medium', 'headline font-weight-medium' : getBvParams.bvFont == 'large'}">Важные телефоны:</span>
                <span v-bind:class="{'body-2' : getBvParams.bvFont == 'small', 'subheading' : getBvParams.bvFont == 'medium', 'headline' : getBvParams.bvFont == 'large'}">(35130)9-11-08 - Отдел опеки,</span>
                <span v-bind:class="{'body-2' : getBvParams.bvFont == 'small', 'subheading' : getBvParams.bvFont == 'medium', 'headline' : getBvParams.bvFont == 'large'}">(35130)5-67-62 - Отдел льгот,</span>
                <span v-bind:class="{'body-2' : getBvParams.bvFont == 'small', 'subheading' : getBvParams.bvFont == 'medium', 'headline' : getBvParams.bvFont == 'large'}">(35130)2-81-00 - Отдел субсидий,</span>
                <span v-bind:class="{'body-2' : getBvParams.bvFont == 'small', 'subheading' : getBvParams.bvFont == 'medium', 'headline' : getBvParams.bvFont == 'large'}">(35130)9-18-62 - Отдел детских пособий,</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
   computed: {
       ...mapGetters(['getBvParams'])
   }
}
</script>