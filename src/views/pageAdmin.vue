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
                        <v-btn @click="logIn(userdata)">Login</v-btn>
                   </v-card-actions>
               </v-card>
           </v-col>
       </v-row>

       <v-row v-if="getAuth">
           <v-col>
               <div class="d-flex flex-row">
                <v-tabs background-color="#d4cdc4" v-model="tab">
                    <v-tab key="1">Меню</v-tab>
                    <v-tab @change="loadNewsPage(1)" key="2">Новости</v-tab>
                    <v-tab @change="loadAllPages()" key="3">Страницы</v-tab>
                    <v-tab-item key="1">
                        <v-card flat class="d-flex flex-row" color="#d4cdc4">
                        <v-card class="d-flex mr-3" min-width="30%">
                        <v-treeview @update:active.capture="setMenuForm" expand-icon="fa fa-angle-right" return-object activatable active-class="primary--text" :active.sync="active" color="blue" :items="getTreeMenu"></v-treeview>
                        </v-card>
                        <v-card class="pa-3" min-width="30%">
                            <v-card-text>
                                <v-form>
                                    <v-text-field outlined label="id" v-model="menudata.menu_id"></v-text-field>
                                    <v-text-field outlined label="Название" v-model="menudata.menu_item"></v-text-field>
                                    <v-text-field outlined label="Родительский" v-model="menudata.menu_parent"></v-text-field>
                                    <v-switch v-model="menudata.custom_link" label="Особый пункт меню"></v-switch>
                                    <v-text-field outlined :disabled="!menudata.custom_link" label="Ссылка на пункт меню" v-model="menudata.custom_link_value"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn @click="insertMenuItem(menudata), clearMenu()" color="success" :disabled="menuAdd || !menuValid">Добавить</v-btn>
                                <v-spacer />
                                <v-btn @click="updateMenuItem(menudata), clearMenu()" color="warning" :disabled="!menuAdd || !menuValid">Изменить</v-btn>
                                <v-btn @click="deleteMenuItem(menudata), clearMenu()" color="error" :disabled="!menuAdd || !menuValid">Удалить</v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item key="2">
                        <v-card flat color="#d4cdc4" class="d-flex flex-row">
                            <v-card class="d-flex flex-column pa-3 mr-3" min-width="20%">
                                <div class="d-flex" v-for="news in getNewsPage" :key="news.news_id">
                                    <a @click.prevent="setNewsForm(news.news_id)">{{ news.news_name }}</a>
                                </div>
                            </v-card>
                            <v-card min-width="50%">
                                <v-card-text>
                                    <v-form>
                                        <div class="d-flex flex-row">
                                        <v-text-field outlined class="mr-3" label="id" v-model="newsdata.news_id"></v-text-field>
                                        <v-text-field outlined label="Изображение" v-model="newsdata.news_img"></v-text-field>
                                        </div>
                                        <v-text-field outlined label="Заголовок" v-model="newsdata.news_name"></v-text-field>
                                        <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="newsdata.news_text" id="news"></vue-editor>
                                    </v-form>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn @click="insertNews(newsdata), clearNews()" color="success" :disabled="newsAdd || !newsValid">Добавить</v-btn>
                                    <v-spacer />
                                    <v-btn @click="updateNews(newsdata), clearNews()" color="warning" :disabled="!newsAdd || !newsValid">Изменить</v-btn>
                                    <v-btn @click="deleteNews(newsdata), clearNews()" color="error" :disabled="!newsAdd || !newsValid">Удалить</v-btn>
                                </v-card-actions>
                            </v-card>
                            
                        </v-card>
                    </v-tab-item>
                    <v-tab-item key="3">
                        <v-card flat color="#d4cdc4" class="d-flex flex-row">
                            <v-card class="d-flex flex-column pa-3 mr-3" min-width="20%">
                                <div class="d-flex" v-for="page in getAllPages" :key="page.page_id">
                                    <a @click.prevent="setPagesForm(page.page_menu)">{{ page.page_name }}</a>
                                </div>
                            </v-card>
                            <v-card min-width="50%" class="mr-3">
                                <v-card-text>
                                    <v-form>
                                        <div class="d-flex flex-row">
                                            <v-text-field class="mr-3" outlined label="id" v-model="pagedata.page_id"></v-text-field>
                                            <v-text-field outlined label="Пункт меню" v-model="pagedata.page_menu"></v-text-field>
                                        </div>
                                        <v-text-field outlined label="Заголовок" v-model="pagedata.page_name"></v-text-field>
                                        <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="pagedata.page_text" id="page"></vue-editor>
                                    </v-form>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn @click="insertPage(pagedata), clearPages()" color="success" :disabled="pageAdd || !pageValid">Добавить</v-btn>
                                    <v-spacer />
                                    <v-btn @click="updatePage(pagedata), clearPages()" color="warning" :disabled="!pageAdd || !pageValid">Изменить</v-btn>
                                    <v-btn @click="deletePage(pagedata), clearPages()" color="error" :disabled="!pageAdd || !pageValid">Удалить</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-card>
                    </v-tab-item>
                </v-tabs>
                
               </div>
           </v-col>
       </v-row>
    </v-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { VueEditor } from "vue2-editor";
import axios from "axios";
export default {
    components: {
        VueEditor
    },
    data() {
        return {
            userdata: {
                login: '',
                password: ''
            },
            menudata: {
                menu_id: '',
                menu_item: '',
                menu_parent: '',
                custom_link: false,
                custom_link_value: ''
            },
            newsdata: {
                news_id: '',
                news_name: '',
                news_text: '',
                news_img: ''
            },
            pagedata: {
                page_id: '',
                page_name: '',
                page_text: '',
                page_menu: ''
            },
            tab: null,
            active: [{id: '', name: '', parent: ''}],
        }
    },
  computed: {
    ...mapGetters(['getAuth', 'getAuthError', 'getTreeMenu', 'getNewsPage', 'getOneNews', 'getAllPages', 'getOnePage', 'getJwtToken']),
    menuValid() {
        return this.menudata.menu_item != ''
    },
    menuAdd() {
        return this.menudata.menu_id != ''
    },
    newsValid() {
        return this.newsdata.news_name != '' && this.newsdata.news_text != '' && this.newsdata.news_img != ''
    },
    newsAdd() {
        return this.newsdata.news_id != ''
    },
    pageValid() {
        return this.pagedata.page_name != '' && this.pagedata.page_text != ''
    },
    pageAdd() {
        return this.pagedata.page_id != ''
    }
  },
  methods: {
    ...mapActions(['authorize', 'setError', 'loadNewsPage', 'loadOneNews', 'loadAllPages', 'loadOnePage', 'insertMenuItem', 'deleteMenuItem', 'updateMenuItem', 'insertNews', 'deleteNews', 'updateNews', 'insertPage', 'deletePage', 'updatePage']),
    handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
        var formData = new FormData();
        formData.append('file', file);
        axios({
            method: "POST",
            url: "https://usznozersk.ru:81/api/v1/private/upload",
            data: formData,
            headers: {
                "Token": this.getJwtToken
            }
        })
        .then(result => {
          let url = result.data.url; // Get url from response
          let file = url.split("/")[(url.split("/")).length-1]
          let filetype = file.split(".")[(file.split(".")).length-1]
          if (filetype == "jpg" || filetype == "jpeg" || filetype == "png" || filetype == "bmp" || filetype == "gif" || filetype == "gif") {
            Editor.insertEmbed(cursorLocation, "image", url);
          } else {
            Editor.insertText(cursorLocation, file, "link", url);
          }
          resetUploader();
        })
        .catch(err => {
          this.setError(err)
        })
    },
    clearMenu() {
        this.menudata.menu_id = this.menudata.menu_item = this.menudata.menu_parent = ''
    },
    clearNews() {
        this.newsdata.news_id = this.newsdata.news_name = this.newsdata.news_text = this.newsdata.news_img = ''
    },
    clearPages() {
        this.pagedata.page_id = this.pagedata.page_name = this.pagedata.page_text = this.pagedata.page_menu = ''
    },
    setMenuForm() {
        if (this.active[0]) {
            this.menudata.menu_id = this.active[0].id
            this.menudata.menu_item = this.active[0].name
            this.menudata.menu_parent = this.active[0].parent
            this.menudata.custom_link = this.active[0].custom
            this.menudata.custom_link_value = this.active[0].custom_value
        }
    },
    setNewsForm(id) {
        this.loadOneNews(id)
        this.newsdata.news_id = this.getOneNews.news_id
        this.newsdata.news_name = this.getOneNews.news_name
        this.newsdata.news_text = this.getOneNews.news_text
        this.newsdata.news_img = this.getOneNews.news_img
    },
    setPagesForm(id) {
        this.loadOnePage(id)
        this.pagedata.page_id = this.getOnePage.page_id
        this.pagedata.page_name = this.getOnePage.page_name
        this.pagedata.page_text = this.getOnePage.page_text
        this.pagedata.page_menu = this.getOnePage.page_menu
    },
    logIn(userdata) {
        this.authorize(userdata);
        userdata.login = userdata.password = ''
    }
  }
}
</script>