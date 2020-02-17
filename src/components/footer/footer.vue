<template>
    <v-footer color="blue-grey white--text" class="font-weight-medium">
      <v-col cols="12">
        <div class="d-flex flex-row justify-center align-center">
            <div class="d-flex flex-row">
                <div class="mr-3"><router-link to="/"><v-icon color="white">fas fa-home</v-icon></router-link></div>
                <div class="mr-3"><a href="mailto:ksz@ozerskadm.ru"><v-icon color="white">far fa-envelope</v-icon></a></div>
            </div>
            
            <div class="d-flex flex-grow-1 justify-center">
                <span>{{ new Date().getFullYear() }} — <strong>УСЗН Озерск</strong></span>
            </div>
        </div>
      </v-col>
    </v-footer>
</template>