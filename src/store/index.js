import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './modules/mutations.js'
import actions from './modules/actions.js'
Vue.use(Vuex)

export const store = new Vuex.Store({

    state:{
        news:[],
        ask:[],
        jobs:[],
        user: {},
        item: {}
    },
    getters:{
        GET_NEWS(state){
            return state.news
        },
        GET_ASK(state){
            return state.ask
        },
        GET_JOBS(state){
            return state.jobs
        },
        GET_USER(state){
            return state.user
        }
    },
    mutations,
    actions
  })