import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import('@/views/Index.vue')
	},
	{
		path: '/character/:id',
		component: () => import('@/views/Character.vue')
	},
	{
		path: '/episode/:id',
		component: () => import('@/views/Episode.vue')
	},
	{
		path: '/:pathMatch(.*)',
		redirect: '/'
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior() {
		return {top: 0};
	}
});

export default router;
