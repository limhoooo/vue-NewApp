<template>
  <div>
    <section>
      <div>
        user
      </div>
      <div>
        <router-link :to="`/user/${askInfo.user}`">
        {{ askInfo.user }}
        </router-link>
        <div>
          {{askInfo.time_ago}}
        </div>
      </div>
      <h2>{{ askInfo.title }}</h2>
    </section>
    <section>
      <div v-html="askInfo.content"></div>
      
    </section>
  </div>
</template>

<script>

export default {
  computed:{
    askInfo(){
      return this.$store.state.item
    } 
  },
  created(){
    const askId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM',askId);
  }
}
</script>

<style>

</style>