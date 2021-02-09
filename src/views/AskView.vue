<template>
  <div>
      <div v-for="ask in asks" v-bind:key="ask.id">
        {{ ask.title }}
      </div>
  </div>
</template>

<script>
import {fetchAskList} from '../api/index.js'

export default {
  data(){
    return {
      asks: []
    }
  },
  created(){
    fetchAskList()
    .then(response => this.asks = response.data)
    .catch()
  }
}
</script>

<style>

</style>