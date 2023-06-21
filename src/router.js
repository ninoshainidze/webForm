import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import AccountCreatePage from './views/AccountCreatePage.vue';
import DealCreatePage from './views/DealCreatePage.vue';

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/account',
        component: AccountCreatePage,
    },
    {
        path: '/deal',
        component: DealCreatePage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;