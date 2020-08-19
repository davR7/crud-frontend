import Vue from 'vue'
import Router from 'vue-router'
import UserTable from './views/UserTable.vue'
import AddUser from './views/AddUser.vue'
import EditUser from './views/EditUser.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: UserTable
    }, {
        path: '/adduser',
        component: AddUser
    }, {
        path: '/edituser',
        component: EditUser
    }, {
        path: '*',
        redirect: '/'
    }]
})