<template>
    <v-container fluid>
        <v-row justify="center">
           <v-col cols="12" lg="6">
               <v-card>
                   <v-card-text v-if="success">
                       <p class="text-h2">Сообщение отправлено</p>
                   </v-card-text>
               </v-card>
               <v-card v-if="!success">
                   <v-card-text>
                        <v-toolbar color="primary" dark flat>
                            <v-toolbar-title>Написать сообщение</v-toolbar-title>
                        </v-toolbar>
                        <v-form>
                            <v-text-field v-model="messageData.name" :rules="[rules.required, rules.counter]" prepend-icon="fas fa-user" label="Ф.И.О." type="text" />
                            <v-text-field v-model="messageData.address" :rules="[rules.required, rules.counter]" prepend-icon="far fa-building" label="Адрес регистрации" type="text" />
                            <v-text-field v-model="messageData.email" :rules="[rules.required, rules.email]" prepend-icon="fas fa-at" label="Адрес электронной почты" type="text" />
                            <v-text-field v-model="messageData.phone" :rules="[rules.required, rules.counter]" prepend-icon="fas fa-phone" label="Контактный номер телефона" type="text" />
                            <v-text-field v-model="messageData.subj" :rules="[rules.required, rules.counter]" prepend-icon="far fa-comment-dots" label="Тема обращения" type="text" />
                            <v-textarea v-model="messageData.text" :rules="[rules.required, rules.counter]" prepend-icon="fas fa-align-center" label="Текст обращения"></v-textarea>
                            <v-file-input show-size truncate-length="50" v-model="messageData.file" label="Добавить файл" filled prepend-icon="far fa-file-alt"></v-file-input>
                            <v-switch v-model="messageData.pers"><template v-slot:label><div>В соостветствии с <v-tooltip bottom><template v-slot:activator="{ on }"><a target="_blank" @click.stop v-on="on" href="http://pravo.gov.ru/proxy/ips/?docbody&nd=102108261">152-ФЗ</a></template>Откроется в новом окне</v-tooltip> даю согласие на обработку персональных данных, указанных в моем обращении.</div></template></v-switch>
                            
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
                counter: value => value.length >= 10 || 'Не менее 10 символов',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Неверный формат'
                },
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
            return this.messageData.name != '' && this.messageData.address != '' && this.messageData.email != '' && this.messageData.phone != '' && this.messageData.subj != '' && this.messageData.text != '' && this.messageData.pers
        }
    }
}
</script>
