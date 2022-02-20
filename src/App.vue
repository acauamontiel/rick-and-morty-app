<template lang="pug">
q-layout
	q-page-container.q-pa-sm
		router-view
</template>

<script>
import {provide} from 'vue';
import {useQuasar} from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import {useGlobalQueryLoading} from '@vue/apollo-composable';
import apolloClient, {DefaultApolloClient} from '@/apollo';

export default {
	setup() {
		const $q = useQuasar(),
			loading = useGlobalQueryLoading();

		$q.dark.set(true);
		provide(DefaultApolloClient, apolloClient);

		return {loading};
	}
};
</script>

<style lang="stylus">
html
	scroll-behavior smooth

.q-page-container
	margin 0 auto
	max-width 900px

.q-spinner
	display block
	margin 50px auto 0
	width 50px
	height @width

.q-list--intern
	max-width 400px
</style>
