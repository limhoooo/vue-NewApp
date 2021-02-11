<template>
  <div>
      <div v-for="user in GET_NEWS" v-bind:key="user.id">
        {{ user.title }}
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters({
       GET_NEWS : 'GET_NEWS',
    })
  },
  created(){
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>