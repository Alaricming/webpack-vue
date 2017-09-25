import Vue from 'vue'
// import axios from 'axios'
import router from './router/router.js'
import store from './store/store.js'
import App from './src/App.vue'

// Vue.use(axios)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");


