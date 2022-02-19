import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import('@/views/Index.vue')
	},
	{
		path: '/:pathMatch(.*)',
		redirect: '/'
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
