import Vue from 'vue';
import VueRouter from 'vue-router';
 import NewsView from '../views/NewsView.vue'
 import AskView from '../views/AskView.vue'
 import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
//import createListView from '../views/CreateListView'

import {testcode} from '../mixins/common.js'
Vue.use(VueRouter);


export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
            //component: createListView('NewsView'),
            beforeEnter: (to,from,next) => {
                testcode(to,from,next);
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            //component: createListView('AskView'),
            beforeEnter: (to,from,next) => {
                testcode(to,from,next);
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            //component: createListView('JobsView'),
            beforeEnter: (to,from,next) => {
                testcode(to,from,next);
            }
        },
        {
            path: '/user/:id',
            component: UserView,
            name:'user',
            
        },
        {
            path: '/item/:id',
            component: ItemView
        },
    ]
});


