import { createApp, configureCompat } from 'vue'
import App from './App.vue'
import { Toast } from 'vant';

import 'vant/lib/index.css';

configureCompat({
    MODE: 3
});

const app = createApp(App);
app.use(Toast);
app.mount('#app');
