<template>
  <div>
      <ul class="news-list">
          <li v-for="item in infoList" v-bind:key="item.id" class="post">
            <div class="points">
              {{ item.points || 0}}
            </div>
            <div>
              <p class="news-title">
                <template v-if="item.domain">
                  <a v-bind:href="item.url">
                    {{ item.title }}
                  </a>
                </template>
                <template v-else>
                  <router-link :to="`item/${item.id}`">
                    {{ item.title }}
                  </router-link>
                </template>
              </p>
              <small class="link-text">
               {{ item.time_age }} by 
                  <router-link v-if="item.user" :to="`/user/${item.user}`" class="link-text"> {{ item.user }} </router-link>
                  <a :href="item.url" v-else>
                    {{ item.domain }}
                  </a>
              </small>
              <div v-if=" name == '/news'">
                newsnewsnewsnewsnewsnewsnewsnewsnewsnewsnewsnewsnewsnewsnewsnewsnewsnews
              </div>
            </div>
        </li>
      </ul>
  </div>
</template>

<script>

export default {
  data(){
    return{
      name : this.$route.path
    }
  },
  computed:{
    infoList(){
      return this.$store.state.list;
        // let result;
        // if(this.name === '/news'){
        //     result = this.$store.state.news
        // }else if(this.name === '/jobs'){
        //     result = this.$store.state.jobs
        // }else if(this.name === '/ask'){
        //     result = this.$store.state.ask
        // }
        // return result;
    }
  },
  
}
</script>


<style>
  .news-list{
    margin: 0;
    padding: 0;
  }
  .post{
    display: flex;
    list-style: none;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .points{
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883
  }
  .news-title{
    margin: 0;
  }
  .link-text{
    color: #828282
  }
</style>