<template>
  <v-flex>
    <h1>{{ getOnePage[0].name }}</h1>
    <p>{{ getOnePage[0].text }}</p>
  </v-flex>
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
