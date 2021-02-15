
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
    async FETCH_USER({commit},username){
        const resopnse = await fetchUserInfo(username);
        commit('SET_USER',resopnse.data)
        return resopnse;
    },
    async FETCH_ITEM({commit},userid){
        const response = await fetchAskInfo(userid);
        commit(('SET_ITEM'),response.data);
        return response;
    },
    async FETCH_LIST({commit},pageName){
        const response = await fetchList(pageName);
        commit('SET_LEST',response.data);
        bus.$emit('end:spinner');
        return response;
    }
};
