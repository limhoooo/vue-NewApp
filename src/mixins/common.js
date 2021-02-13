
// import bus from '../utils/bus.js'
import { store } from '../store/index.js'

export const testcode = (to,from,next) => {
  //  bus.$emit('start:spinner');
  //  setTimeout(()=>{
        
        store.dispatch('FETCH_LIST',to.name)
        .then( ()=> {
            //bus.$emit('end:spinner');
            next();
            console.log(to);
            console.log(from);
            console.log(next);
        })
        .catch();
  //  },1000) 
    
}
