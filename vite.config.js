import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import pugPlugin from 'vite-plugin-pug';
import {quasar, transformAssetUrls} from '@quasar/vite-plugin';
import {VitePWA} from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
	base: '/rick-and-morty-app/',
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.esm-bundler.js',
			'@': path.resolve(__dirname, './src')
		}
	},
	plugins: [
		vue({
			template: {transformAssetUrls}
		}),
		quasar(),
		pugPlugin(),
		VitePWA({})
	]
});
