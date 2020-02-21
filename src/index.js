import Vue from 'vue';

import { store } from './store';
import { router } from './helpers';
import App from './app/App';

// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});