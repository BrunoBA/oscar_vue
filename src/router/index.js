import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Movie from '@/components/Movie'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Movie',
            component: Movie
        },
        {
            path: '/movies',
            name: 'Hello',
            component: Hello
        }
    ]
})
