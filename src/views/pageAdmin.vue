<template>
    <v-container fluid>
       <v-row justify="center">
           <v-col cols="12" lg="4">
               <v-card>
                   <v-card-text>
                        <v-toolbar color="primary" dark flat>
                            <v-toolbar-title>Login form</v-toolbar-title>
                        </v-toolbar>
                        <v-form>
                            <v-text-field v-model="login" label="Login" name="login" prepend-icon="fas fa-user" type="text" />
                            <v-text-field v-model="password" label="Password" name="password" prepend-icon="fas fa-lock" type="password" />
                        </v-form>
                        <span>{{ this.getReqData }}</span>
                   </v-card-text>
                   <v-card-actions>
                        <v-spacer />
                        <v-btn @click="authorize(login.value, password.value)">Login</v-btn>
                   </v-card-actions>
               </v-card>
           </v-col>
       </v-row>
    </v-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    data() {
        return {
            login: '',
            password: '',
        }
    },
  computed: {
    ...mapGetters(['getAuth', 'getReqData']),
  },
  methods: {
    ...mapActions(['authorize'])
  },
}
</script>