import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/index/home/home.vue'
import login from '../pages/index/login/login.vue'
import newsContent from '../pages/index/news_content/news_content.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            component: home
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/newsContent:id',
            component: newsContent
        },
        {
            path: '/',
            component: home
        },
        {
            path: '*',
            component: home
        }
    ]
})
