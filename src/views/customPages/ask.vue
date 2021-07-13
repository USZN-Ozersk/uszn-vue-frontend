<template>
    <v-container fluid>
        <v-row justify="center">
           <v-col cols="12" lg="6">
               <v-card>
                   <v-card-text v-if="success">
                       <p class="text-h2 black--text">СООБЩЕНИЕ ОТПРАВЛЕНО</p>
                       <v-img alt="Сообщение отправлено" src="../../assets/message.png"></v-img>
                   </v-card-text>
               </v-card>
               <v-card v-if="!success">
                   <v-card-text>
                        <v-toolbar color="primary" dark flat class="mb-3">
                            <v-toolbar-title>Написать сообщение</v-toolbar-title>
                        </v-toolbar>
                        <v-form>
                            <v-text-field @update:error="errors.name = $event" outlined dense v-model="messageData.name" :rules="[rules.required, rules.counter]" prepend-icon="fas fa-user" label="Ф.И.О." type="text" />
                            <v-text-field @update:error="errors.address = $event" outlined dense v-model="messageData.address" :rules="[rules.required, rules.counter]" prepend-icon="far fa-building" label="Адрес регистрации (Область, город, улица, дом, квартира.)" type="text" />
                            <v-text-field @update:error="errors.email = $event" outlined dense v-model="messageData.email" :rules="[rules.required, rules.email]" prepend-icon="fas fa-at" label="Адрес электронной почты" type="text" />
                            <v-text-field @update:error="errors.phone = $event" outlined dense v-model="messageData.phone" :rules="[rules.required, rules.counter]" prepend-icon="fas fa-phone" label="Контактный номер телефона" type="text" />
                            <v-text-field @update:error="errors.subj = $event" outlined dense v-model="messageData.subj" :rules="[rules.required, rules.counter]" prepend-icon="far fa-comment-dots" label="Тема обращения" type="text" />
                            <v-textarea @update:error="errors.text = $event" outlined dense v-model="messageData.text" :rules="[rules.required, rules.counter]" prepend-icon="fas fa-align-center" label="Текст обращения"></v-textarea>
                            <v-file-input @update:error="errors.file = $event" outlined dense show-size accept="image/*,.pdf,.doc,.docx,.odt,.xls,.xlsx,.ods,.txt,.rtf,.zip,.rar" :rules="[rules.fileSize]" truncate-length="50" v-model="messageData.file" label="Добавить файл" filled prepend-icon="far fa-file-alt"></v-file-input>
                            <v-switch v-model="messageData.pers"><template v-slot:label><div>В соответствии с <v-tooltip bottom><template v-slot:activator="{ on }"><a target="_blank" @click.stop v-on="on" href="http://pravo.gov.ru/proxy/ips/?docbody&nd=102108261">152-ФЗ</a></template>Откроется в новом окне</v-tooltip> даю согласие на обработку моих персональных данных, указанных в обращении, с целью обработки обращения.</div></template></v-switch>
                            <v-radio-group v-model="messageData.sendm">
                                <template v-slot:label>
                                    <div>Ответ на обращение направить:</div>
                                </template>
                                <v-radio off-icon='far fa-circle' on-icon='fas fa-circle' value='email'><template v-slot:label>Электронным письмом на адрес Email, указанный при обращении.</template></v-radio>
                                <v-radio off-icon='far fa-circle' on-icon='fas fa-circle' value='letter'><template v-slot:label>Письмом на адрес регистрации, указанный при обращении.</template></v-radio>
                            </v-radio-group>
                        </v-form>
                   </v-card-text>
                   <v-card-actions>
                        <v-spacer />
                        <v-btn @click="sendFormData()" :disabled="!addValid" color="primary">Отправить сообщение</v-btn>
                   </v-card-actions>
               </v-card>
           </v-col>
       </v-row>
    </v-container>
</template>    
<script>
import axios from "axios";
export default {
    data() {
        return {
            rules: {
                required: value => !!value || 'Обязательно',
                counter: value => value.length >= 5 || 'Не менее 5 символов',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Неверный формат'
                },
                fileSize: value => !value || value.size < 52428800 || 'Не более 50 МБ',
            },
            messageData: {
                name: '',
                address: '',
                email: '',
                phone: '',
                subj: '',
                text: '',
                file: '',
                pers: false,
                sendm: 'email',
            },
            errors: {
                name: true,
                address: true,
                email: true,
                phone: true,
                subj: true,
                text: true,
                file: false,
            },
            success: false,
            error: '',
        }
    },
    methods: {
        sendFormData: function() {
            var formData = new FormData();
            formData.append('file', this.messageData.file)
            formData.append('name', this.messageData.name)
            formData.append('address', this.messageData.address)
            formData.append('email', this.messageData.email)
            formData.append('phone', this.messageData.phone)
            formData.append('subj', this.messageData.subj)
            formData.append('text', this.messageData.text)
            formData.append('sendm', this.messageData.sendm)
            axios({
                method: "POST",
                url: "https://usznozersk.ru/api/v1/feedback",
                data: formData,
            })
            .then(result => {
                if (result.status == 200) this.success = true
            })
            .catch(err => {
                this.err = err.status
            })
        }
    },
    computed: {
        addValid() {
            return this.messageData.name != '' && !this.errors.name && this.messageData.address != '' && !this.errors.address && this.messageData.email != '' && !this.errors.email && this.messageData.phone != '' && !this.errors.phone && this.messageData.subj != '' && !this.errors.subj && this.messageData.text != '' && !this.errors.text && !this.errors.file && this.messageData.pers
        }
    }
}
</script>
