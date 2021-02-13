<template>
  <div>
    <section>
      <user-profile :info="askInfo">
        <!-- <div slot="username">{{ askInfo.user }}</div> -->
        <router-link slot="username" :to="`/user/${askInfo.user}`">
          {{ askInfo.user }}
        </router-link>
        <template slot="time">{{askInfo.time_ago}}</template>
      </user-profile>
      <h2>{{ askInfo.title }}</h2>
    </section>
    <section>
      <div v-html="askInfo.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
export default {
  computed:{
    askInfo(){
      return this.$store.state.item
    } 
  },
  components: {
    UserProfile,
  },
  created(){
    const askId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM',askId);
  }
}
</script>

<style>

</style>