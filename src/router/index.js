import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
	{
		name: 'index',
		path: '/',
		component: () => import('@/views/Index.vue')
	},
	{
		name: 'character',
		path: '/character/:id',
		component: () => import('@/views/Character.vue')
	},
	{
		name: 'episode',
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
