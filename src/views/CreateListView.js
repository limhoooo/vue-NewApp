
import ListView from './ListView.vue'
import bus from '../utils/bus.js'

export default function createListView (name){
    return {
        // 재사용 할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name : name,
        created(){
            console.log(this.name);
            console.log(this.$route.name);
            bus.$emit('start:spinner');
            setTimeout(()=>{
                this.$store.dispatch('FETCH_LIST',this.$route.name)
                .then( ()=> {
                bus.$emit('end:spinner');
                })
                .catch();
            },2000) 
        },
        render(createElement){
            return createElement(ListView);
        }
    }
}