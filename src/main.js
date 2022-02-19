import {createApp, provide} from 'vue';

import {Quasar, useQuasar} from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

import apolloClient, {DefaultApolloClient} from './apollo';
import router from './router';

const myApp = createApp({
	setup() {
		const $q = useQuasar();
		$q.dark.set(true);
		provide(DefaultApolloClient, apolloClient);
	}
});

myApp.use(Quasar);
myApp.use(router);

myApp.mount('#app');
