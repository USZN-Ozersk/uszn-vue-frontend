<template>
    <v-container fluid>
       <v-row justify="center" v-if="!getAuth">
           <v-col cols="12" lg="4">
               <v-card>
                   <v-card-text>
                        <v-toolbar color="primary" dark flat>
                            <v-toolbar-title>Login form</v-toolbar-title>
                        </v-toolbar>
                        <v-form>
                            <v-text-field v-model="userdata.login" label="Login" name="login" prepend-icon="fas fa-user" type="text" />
                            <v-text-field v-model="userdata.password" label="Password" name="password" prepend-icon="fas fa-lock" type="password" />
                            <span class="red--text" v-if="getAuthError != ''">Ошибка авторизации: "{{ getAuthError }}".</span>
                        </v-form>
                   </v-card-text>
                   <v-card-actions>
                        <v-spacer />
                        <v-btn @click="authorize(userdata); userdata.login = userdata.password = ''">Login</v-btn>
                   </v-card-actions>
               </v-card>
           </v-col>
       </v-row>

       <v-row>
           <v-col>
               <div class="d-flex flex-row">
                <v-tabs v-model="tab">
                    <v-tab key="1">Меню</v-tab>
                    <v-tab key="2">Новости</v-tab>
                    <v-tab key="3">Страницы</v-tab>
                    <v-tab-item key="1">
                        <div class="d-flex flex-row">
                        <v-treeview expand-icon="fa fa-angle-right" return-object activatable active-class="primary--text" :active.sync="active" color="blue" :items="getTreeMenu"></v-treeview>
                        <div>
                            <v-card class="pa-3">
                                {{ selected[0].id }}
                                <v-text-field v-model="menudata.menu_id"></v-text-field>
                                <v-text-field v-model="menudata.menu_item"></v-text-field>
                                <v-text-field v-model="menudata.menu_parent"></v-text-field>
                            </v-card>
                        </div>
                        </div>
                    </v-tab-item>
                    <v-tab-item key="2">Новости</v-tab-item>
                    <v-tab-item key="3">Страницы</v-tab-item>
                </v-tabs>
                <v-btn @click="logout">Выход</v-btn>
               </div>
           </v-col>
       </v-row>
    </v-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    data() {
        return {
            userdata: {
                login: '',
                password: ''
            },
            menudata: {
                menu_id: '',
                menu_item: '',
                menu_parent: ''
            },
            tab: null,
            active: [],
        }
    },
  computed: {
    ...mapGetters(['getAuth', 'getAuthError', 'getTreeMenu']),
    selected() {
        return this.active;
    }
  },
  methods: {
    ...mapActions(['authorize', 'logout'])
  }
}
</script>