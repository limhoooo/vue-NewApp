<template>
  <div>
      <p v-for="job in GET_JOBS" v-bind:key="job.id">
        <a :href="job.url">
          {{ job.title }}
        </a>
        <small>{{ job.time_age }} by {{ job.domain }}</small>
      </p>
   
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed:{
    ...mapGetters({
      GET_JOBS : 'GET_JOBS'
    })
  },
  created(){
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>