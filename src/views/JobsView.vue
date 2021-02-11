<template>
  <div>
    <div v-for="job in GET_JOBS" v-bind:key="job.id">
      {{job.title}}
    </div>
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