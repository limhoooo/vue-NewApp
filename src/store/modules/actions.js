
import bus from '../../utils/bus.js'
import { fetchNewsList,fetchAskList,fetchJobsList,fetchUserInfo,fetchAskInfo,fetchList } from '../../api/index.js' 
export default {
    FETCH_NEWS(context){
        return fetchNewsList()
            .then(response => {
                context.commit('SET_NEWS',response.data)
                return response;
            })
            .catch()
    },
    FETCH_ASK(context){ 
        return fetchAskList()
            .then(response => context.commit('SET_ASK',response.data))
            .catch()
    },
    FETCH_JOBS({commit}){
        return fetchJobsList()
            .then(({data}) => commit('SET_JOBS',data))
            .catch()
    },
    FETCH_USER({commit},username){
        return fetchUserInfo(username)
        .then(({data}) => commit('SET_USER',data,))
        .catch()
    },
    FETCH_ITEM({commit},userid){
        return fetchAskInfo(userid)
        .then(({data}) => commit(('SET_ITEM'),data))
        .catch()
    },
    FETCH_LIST({commit},pageName){
        return fetchList(pageName)
            .then(response => {
                commit('SET_LEST',response.data);
                bus.$emit('end:spinner');
                return response;
            })
            .catch(error => console.log(error))
    }
};
