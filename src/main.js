import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router'

// store
import fm from './store';

// App
import FileManager from './FileManager.vue';
import FileViewer from './FileViewer.vue';

Vue.use(VueRouter)


Vue.use(Vuex);

// create new store
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: { fm },
});

Vue.config.productionTip = process.env.NODE_ENV === 'production';

const NotFound = { template: '<p>Page not found</p>' }

const routes = {
  '/file-manager-master': FileManager,
  '/all-downloads': FileViewer,
};

window.fm = new Vue({
  el: '#fm',
  store,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound
    }
  },
  render(h) { return h(this.ViewComponent) }
})