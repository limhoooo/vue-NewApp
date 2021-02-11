<template>
  <div>
      <p v-for="user in GET_NEWS" v-bind:key="user.id">
        <a v-bind:href="user.url">
          {{ user.title }}
        </a>
        <small>{{ user.time_ago }} by {{ user.user }}</small>
        <router-link :to="`/user/${user.user}`"> {{ user.user }} </router-link>
      </p>
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