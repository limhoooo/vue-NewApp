<template>
  <div>
      <p>{{ askInfo.title }}</p>
      <p>{{ askInfo.id }}</p>
      <p>{{ askInfo.content }}</p>
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