import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // lazy-loading -> 효율적인 페이지 로딩 속도 / 효율적 리소스 사용 가능
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    // NotFound -> vue3부터 '*' 이 아닌 '/:pathMatch(.*)*' 사용
    redirect: '/',
    // 아래처럼 바로 NotFound 경로를 매칭해도 됨
    // component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
