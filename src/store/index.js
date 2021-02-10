import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList,fetchAskList,fetchJobsList } from '../api/index.js' 

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        news:[],
        ask:[],
        jobs:[]
    },
    getters:{

    },
    mutations:{
        SET_NEWS(state, news){
            state.news = news 
        },
        SET_ASK(state, ask){
            state.ask = ask 
        },
        SET_JOBS(state, jobs){
            state.jobs = jobs 
        },
    },
    // 비동기 로직 
    actions:{
        FETCH_NEWS(context){
            fetchNewsList()
                .then(response => context.commit('SET_NEWS',response.data))
                .catch()
        },
        FETCH_ASK(context){
            fetchAskList()
                .then(response => context.commit('SET_ASK',response.data))
                .catch()
        },
        FETCH_JOBS(context){
            fetchJobsList()
                .then(response => context.commit('SET_JOBS',response.data))
                .catch()
        }
    },
  })