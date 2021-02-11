<template>
  <div>
      <p>name: {{userlist.id}} </p>
      <p>karma: {{userlist.karma}} </p>
      <p>created: {{userlist.created}} </p>
  </div>
</template>

<script>
import { mapGetters,mapState } from 'vuex'

export default {
  computed:{
    ...mapGetters({
      GET_USER : 'GET_USER'
    }),
    ...mapState({
      userlist: state => state.user
    })
  },
  beforeCreate(){
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER',userName);
  }
}
</script>

<style>

</style>