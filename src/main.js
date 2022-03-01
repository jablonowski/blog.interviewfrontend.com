// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'
import DefaultLayout from '~/layouts/Default.vue'
import checkIfMobile from './mixins/checkIfMobile'

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue);
  Vue.component('Layout', DefaultLayout);
  Vue.mixin(checkIfMobile);
}
