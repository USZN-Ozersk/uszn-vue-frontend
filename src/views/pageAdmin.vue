<template>
    <v-container fluid>
       <v-row justify="center" v-if="!getAuth">
           <v-col cols="12" lg="4">
               <v-card>
                   <v-card-text>
                        <v-toolbar color="primary" dark flat>
                            <v-toolbar-title>Вход</v-toolbar-title>
                        </v-toolbar>
                        <v-form>
                            <v-text-field v-model="userdata.login" label="Login" prepend-icon="fas fa-user" type="text" />
                            <v-text-field v-model="userdata.password" label="Password" prepend-icon="fas fa-lock" type="password" />
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

       <v-row v-if="getAuth">
           <v-col>
               <div class="d-flex flex-row">
                <v-tabs v-model="tab">
                    <v-tab key="1">Меню</v-tab>
                    <v-tab key="2">Новости</v-tab>
                    <v-tab key="3">Страницы</v-tab>
                    <v-tab-item key="1">
                        <div class="d-flex flex-row">
                        <v-card flat class="d-flex mr-3" min-width="30%">
                        <v-treeview @update:active="setMenuFrom" expand-icon="fa fa-angle-right" return-object activatable active-class="primary--text" :active.sync="active" color="blue" :items="getTreeMenu"></v-treeview>
                        </v-card>
                        <v-card flat class="pa-3" min-width="30%">
                            <v-card-text>
                                <v-form>
                                    <v-toolbar color="primary" dark flat>
                                        <v-toolbar-title>Меню</v-toolbar-title>
                                    </v-toolbar>
                                    <v-text-field v-model="menudata.menu_id"></v-text-field>
                                    <v-text-field v-model="menudata.menu_item"></v-text-field>
                                    <v-text-field v-model="menudata.menu_parent"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="success" :disabled="menuAdd || !menuValid">Добавить</v-btn>
                                <v-spacer />
                                <v-btn color="warning" :disabled="!menuAdd || !menuValid">Изменить</v-btn>
                                <v-btn color="error" :disabled="!menuAdd || !menuValid">Удалить</v-btn>
                            </v-card-actions>
                        </v-card>
                        </div>
                    </v-tab-item>
                    <v-tab-item key="2">
                        <div class="d-flex flex-row">
                            <v-card class="d-flex flex-column pa-3 mr-3" min-width="20%">
                                <div class="d-flex flex-row" v-for="news in getNewsPage" :key="news.news_id">
                                    <a @click.prevent="setNewsForm(news.news_id)">{{ news.news_name }}</a>
                                </div>
                            </v-card>
                            <v-card min-width="60%">
                                <v-card-text>
                                    <v-form>
                                        <v-toolbar color="primary" dark flat>
                                            <v-toolbar-title>Новости</v-toolbar-title>
                                        </v-toolbar>
                                        <v-text-field v-model="newsdata.news_id"></v-text-field>
                                        <v-text-field v-model="newsdata.news_name"></v-text-field>
                                        <v-textarea rows="13" v-model="newsdata.news_text"></v-textarea>
                                        <v-text-field v-model="newsdata.news_img"></v-text-field>
                                    </v-form>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="success" :disabled="newsAdd || !newsValid">Добавить</v-btn>
                                    <v-spacer />
                                    <v-btn color="warning" :disabled="!newsAdd || !newsValid">Изменить</v-btn>
                                    <v-btn color="error" :disabled="!newsAdd || !newsValid">Удалить</v-btn>
                                </v-card-actions>
                            </v-card>
                            
                        </div>
                    </v-tab-item>
                    <v-tab-item key="3">
                        {{ getAllPages.page_name }}
                    </v-tab-item>
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
            newsdata: {
                news_id: '',
                news_name: '',
                news_text: '',
                news_img: ''
            },
            tab: null,
            active: [{id: '', name: '', parent: ''}],
        }
    },
  computed: {
    ...mapGetters(['getAuth', 'getAuthError', 'getTreeMenu', 'getNewsPage', 'getOneNews', 'getAllPages']),
    menuValid() {
        return this.menudata.menu_item
    },
    menuAdd() {
        return this.menudata.menu_id
    },
    newsValid() {
        return this.newsdata.news_name && this.newsdata.news_text && this.newsdata.news_img
    },
    newsAdd() {
        return this.newsdata.news_id
    }
  },
  methods: {
    ...mapActions(['authorize', 'logout', 'loadNewsPage', 'loadOneNews', 'loadAllPages']),
    setMenuFrom() {
        this.menudata.menu_id = this.active[0].id
        this.menudata.menu_item = this.active[0].name
        this.menudata.menu_parent = this.active[0].parent
    },
    setNewsForm(id) {
        this.loadOneNews(id)
        this.newsdata.news_id = this.getOneNews.news_id
        this.newsdata.news_name = this.getOneNews.news_name
        this.newsdata.news_text = this.getOneNews.news_text
        this.newsdata.news_img = this.getOneNews.news_img
    }
  },
  created() {
      this.loadNewsPage(1),
      this.loadAllPages()
  }
}
</script>