<template>
  <v-container>
  <v-card flat tile class="d-flex flex-column">
    <h1>{{ getOnePage[0].name }}</h1>
    <v-html>{{ getOnePage[0].text }}</v-html>
  </v-card>
  </v-container>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  props: ['id'],
  computed: {
    ...mapGetters(['getOnePage']),
  },
  methods: {
    ...mapActions(['loadOnePage'])
  },
  created() {
    this.loadOnePage(this.id);
  }
}
</script>
