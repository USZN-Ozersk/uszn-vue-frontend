<template>
    <v-snackbar absolute color="light-green lighten-1" :timeout="timeout" top v-model="snackbar">
     <a href="https://стопкоронавирус.рф/" style="text-decoration: underline; color: white;">
       <v-icon large color="white" class="mr-3">fas fa-virus</v-icon>
       <span class="title white--text">{{ text }}</span>
      </a>
      <v-btn text color="white" @click="snackbar = false" ><v-icon color="white" class="mr-3">fas fa-times-circle</v-icon></v-btn>
    </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    snackbar: true,
    text: 'Всё про коронавирус',
    timeout: 100000,
}),
}
</script>