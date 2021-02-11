<template>
  <div>
      <div v-for="ask in GET_ASK" v-bind:key="ask.id">
        {{ ask.title }}
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      GET_ASK : 'GET_ASK'
    })
  },
  created(){
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>