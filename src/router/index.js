import { Layout } from 'ant-design-vue';
import { createRouter, createWebHashHistory } from 'vue-router'

export const constantRoutes = [{
    path: '/',
    component: () =>
        import ('../layout/index.vue')
}, {
    path: '/403',
    component: () =>
        import ('../views/error/403.vue')
}, {
    path: '/404',
    component: () =>
        import ('../views/error/404.vue')
}, {
    path: '/login',
    meta: {
        title: '登录',
        affix: true
    },
    component: () =>
        import ('../views/login/login.vue')
}]

export const asyncRoutes = [{
    path: '/',
    component: Layout,
    redirect: '/index',
    meta: {
        title: '首页',
        affix: true
    },
    // children: [{
    //     path: 'index',
    //     name: 'Index',
    //     component: () =>
    //         import ('@views/index'),
    //     meta: {
    //         title: "首页",
    //         affix: true
    //     }
    // }]
}]

// 在Vue-router新版本中，需要使用createdRouter来创建路由
const router = createRouter({
    // 指定路由的模式，此处使用的是hash模式
    history: createWebHashHistory(),
    // 路由地址
    routes: constantRoutes
});


// 导航守卫
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        document.title = "小垃圾2号管理系统" + "-" + to.meta.title;
        next()
    } else {
        let token = localStorage.getItem('token')
        if (!token) {
            next('/login')
        } else {
            next()
        }
    }

})

export default router