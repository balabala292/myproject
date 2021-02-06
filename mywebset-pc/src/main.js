import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue-earl-calendar/dist/style.css'
import vueEarlCalendar from 'vue-earl-calendar'
import  VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

Vue.use(VueQuillEditor);
// locale can be 'zh' , 'en' , 'es', 'pt-br', 'ja', 'ko', 'fr', 'it', 'ru', 'de', 'vi', 'ua', 'no, 'no-nn'
Vue.use(vueEarlCalendar, {locale: 'en'})
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import http from './utils/http'

Vue.config.productionTip = false

// Vue.use(VueAxios, axios)

Vue.prototype.$http = http;

let app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default app;