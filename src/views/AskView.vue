<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus.js'

export default {
  components: {
    ListItem
  },
  mounted(){
     bus.$emit('end:spinner');
  }
  // created(){
        
  //     bus.$emit('start:spinner');
  //     setTimeout(()=>{
  //       this.$store.dispatch('FETCH_ASK')
  //       .then( ()=> {
  //         bus.$emit('end:spinner');
  //       })
  //       .catch();
  //     },3000)        
  // }
}
</script>

<style>

</style>