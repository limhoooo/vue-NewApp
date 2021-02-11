
import { fetchNewsList,fetchAskList,fetchJobsList,fetchUserInfo,fetchAskInfo } from '../../api/index.js' 

export default {
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
    FETCH_JOBS({commit}){
        fetchJobsList()
            .then(({data}) => commit('SET_JOBS',data))
            .catch()
    },
    FETCH_USER({commit},username){
        fetchUserInfo(username)
        .then(({data}) => commit('SET_USER',data,))
        .catch()
    },
    FETCH_ITEM({commit},userid){
        fetchAskInfo(userid)
        .then(({data}) => commit(('SET_ITEM'),data))
        .catch()
    }
};
