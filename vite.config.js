import {defineConfig} from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import {quasar, transformAssetUrls} from '@quasar/vite-plugin';

export default defineConfig({
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
		quasar()
	]
});
