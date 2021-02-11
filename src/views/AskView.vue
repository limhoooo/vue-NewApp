<template>
  <div>
      <p v-for="ask in GET_ASK" v-bind:key="ask.id">
        <router-link :to="`/item/${ask.id}`">
          {{ ask.title }}
        </router-link>
        <small>{{ ask.time_age }} by {{ ask.user }}</small>
      </p>

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