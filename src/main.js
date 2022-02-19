import {createApp} from 'vue';
import {Quasar} from 'quasar';
import router from '@/router';
import App from '@/App.vue';

const app = createApp(App);

app.use(Quasar);
app.use(router);

app.mount('#app');
